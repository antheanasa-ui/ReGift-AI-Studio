(() => {
    const stage = document.querySelector('#office-stage');
    const world = document.querySelector('#office-world');
    const breakButton = document.querySelector('#toggle-agent-state');
    const onlineCount = document.querySelector('#online-agent-count');
    const studioActivity = document.querySelector('#studio-activity');

    if (!stage || !world || !breakButton || !onlineCount || !studioActivity) {
        return;
    }

    const STAGE_WIDTH = 1280;
    const STAGE_HEIGHT = 790;
    const taskElementIds = {
        'design-agent': 'design-task',
        'copywriter-agent': 'copywriter-task',
        'marketing-agent': 'marketing-task',
        'photography-agent': 'photography-task',
        'shipping-agent': 'shipping-task'
    };

    const fallbackAgents = [
        {
            id: 'design-agent',
            name: 'Design Agent',
            description: '負責品牌視覺、卡片、書約與包裝設計。',
            restMessage: '休息中：在 Sofa Lounge 補充咖啡與設計靈感。',
            tasks: ['設計下一款彌月卡版型', '整理 ReGift 品牌視覺語言']
        },
        {
            id: 'copywriter-agent',
            name: 'Copywriter Agent',
            description: '負責品牌故事、商品文案與社群內容。',
            tasks: ['撰寫彌月卡商品故事', '整理品牌語氣指南']
        },
        {
            id: 'marketing-agent',
            name: 'Marketing Agent',
            description: '負責社群企劃、活動曝光與成效追蹤。',
            tasks: ['規劃父親節社群活動', '整理內容行事曆']
        },
        {
            id: 'photography-agent',
            name: 'Photography Agent',
            description: '負責商品攝影、燈光配置與影像整理。',
            tasks: ['調整商品燈光', '整理商品主圖色調']
        },
        {
            id: 'shipping-agent',
            name: 'Shipping Agent',
            description: '負責訂單確認、品質檢查、包裝與物流。',
            tasks: ['確認待出貨訂單', '列印物流標籤']
        }
    ];

    const agentTimers = new Map();
    let agents = fallbackAgents;
    let designResting = false;
    let activityTimer = null;
    let activityIndex = 0;

    const fitOfficeToViewport = () => {
        const safePadding = 18;
        const widthScale = (window.innerWidth - safePadding) / STAGE_WIDTH;
        const heightScale = (window.innerHeight - safePadding) / STAGE_HEIGHT;
        const scale = Math.min(widthScale, heightScale, 1);

        stage.style.setProperty('--office-scale', String(Math.max(scale, 0.1)));
    };

    const clearAgentTimer = (agentId) => {
        const timer = agentTimers.get(agentId);

        if (timer) {
            window.clearInterval(timer);
            agentTimers.delete(agentId);
        }
    };

    const showAgentTask = (agent, taskIndex = 0) => {
        const taskElement = document.querySelector(
            `#${taskElementIds[agent.id]}`
        );

        if (!taskElement || !Array.isArray(agent.tasks) || agent.tasks.length === 0) {
            return;
        }

        taskElement.textContent = agent.tasks[taskIndex % agent.tasks.length];
    };

    const startAgent = (agent, order) => {
        clearAgentTimer(agent.id);

        const agentElement = document.querySelector(`#${agent.id}`);
        if (agentElement) {
            agentElement.dataset.tooltipTitle = agent.name;
            agentElement.dataset.tooltipDescription = agent.description;
        }

        if (!Array.isArray(agent.tasks) || agent.tasks.length === 0) {
            return;
        }

        let taskIndex = 0;
        showAgentTask(agent, taskIndex);

        const interval = 4700 + order * 650;
        const timer = window.setInterval(() => {
            taskIndex = (taskIndex + 1) % agent.tasks.length;
            showAgentTask(agent, taskIndex);
        }, interval);

        agentTimers.set(agent.id, timer);
    };

    const updateActivity = () => {
        const messages = [
            '5 Agents 正在同步工作',
            'Design 與 Copywriting 正在協作',
            'Photography 正在準備商品素材',
            'Marketing 正在安排曝光節奏',
            'Shipping 正在確認出貨品質'
        ];

        studioActivity.textContent = messages[activityIndex % messages.length];
        activityIndex += 1;
    };

    const startActivityRotation = () => {
        if (activityTimer) {
            window.clearInterval(activityTimer);
        }

        updateActivity();
        activityTimer = window.setInterval(updateActivity, 4200);
    };

    const setDesignResting = (shouldRest) => {
        const designAgent = agents.find((item) => item.id === 'design-agent');
        const agentElement = document.querySelector('#design-agent');
        const taskElement = document.querySelector('#design-task');

        if (!designAgent || !agentElement || !taskElement) {
            return;
        }

        designResting = shouldRest;
        world.classList.toggle('is-design-resting', shouldRest);
        breakButton.setAttribute('aria-pressed', String(shouldRest));
        breakButton.textContent = shouldRest ? 'Back to Work' : 'Take a Break';

        if (shouldRest) {
            clearAgentTimer('design-agent');
            taskElement.textContent = designAgent.restMessage || '休息中：補充咖啡與靈感。';
            agentElement.dataset.tooltipDescription = '正在 Sofa Lounge 補充咖啡與靈感。';
            return;
        }

        startAgent(designAgent, 0);
    };

    const activateOffice = (officeAgents) => {
        agents = officeAgents;
        onlineCount.textContent = `${agents.length} Agents Online`;
        agents.forEach((agent, index) => startAgent(agent, index));
        startActivityRotation();
    };

    const loadOffice = async () => {
        try {
            const response = await fetch('./data/office.json', { cache: 'no-store' });
            if (!response.ok) {
                throw new Error(`Office data error: ${response.status}`);
            }

            const officeData = await response.json();
            activateOffice(officeData.agents || fallbackAgents);
        } catch (error) {
            console.warn('Using fallback office data.', error);
            activateOffice(fallbackAgents);
        }
    };

    breakButton.addEventListener('click', () => {
        setDesignResting(!designResting);
    });

    window.addEventListener('resize', fitOfficeToViewport);
    window.addEventListener('orientationchange', fitOfficeToViewport);
    window.addEventListener('beforeunload', () => {
        agentTimers.forEach((timer) => window.clearInterval(timer));
        if (activityTimer) {
            window.clearInterval(activityTimer);
        }
    });

    fitOfficeToViewport();
    loadOffice();
})();
