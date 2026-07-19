(() => {
    const room = document.querySelector('.design-room');
    const agent = document.querySelector('#design-agent');
    const status = document.querySelector('#design-agent-status');
    const statusText = document.querySelector('#design-agent-status-text');
    const taskBubble = document.querySelector('#agent-task-bubble');
    const taskText = document.querySelector('#agent-current-task');
    const stateButton = document.querySelector('#toggle-agent-state');
    const copywriterAgent = document.querySelector('#copywriter-agent');
    const copywriterTaskText = document.querySelector('#copywriter-current-task');

    if (
        !room ||
        !agent ||
        !status ||
        !statusText ||
        !taskBubble ||
        !taskText ||
        !stateButton
    ) {
        return;
    }

    const fallbackAgent = {
        name: 'Design Agent',
        status: 'working',
        statusLabel: 'Working',
        description: '負責把 Anthea 的創意方向轉化為完整、細緻的視覺作品。',
        restMessage: '休息中：喝杯咖啡，整理下一個設計靈感。',
        tasks: [
            '整理 ReGift 品牌視覺語言',
            '設計下一款彌月卡版型',
            '建立結婚書約配色提案'
        ]
    };

    const fallbackCopywriter = {
        name: 'Copywriter Agent',
        description: '負責 ReGift 商品命名、品牌故事、社群貼文與銷售文案。',
        tasks: [
            '撰寫下一款彌月卡商品故事',
            '整理 ReGift 品牌語氣指南',
            '建立包裝小卡的溫暖短句'
        ]
    };

    let taskTimer = null;
    let taskRevealTimer = null;
    let currentTaskIndex = 0;
    let currentAgentData = fallbackAgent;
    let currentState = 'working';
    let copywriterTaskTimer = null;
    let copywriterTaskIndex = 0;

    const stopTaskRotation = () => {
        if (taskTimer) {
            window.clearInterval(taskTimer);
            taskTimer = null;
        }
    };

    const stopCopywriterTaskRotation = () => {
        if (copywriterTaskTimer) {
            window.clearInterval(copywriterTaskTimer);
            copywriterTaskTimer = null;
        }
    };

    const showTask = (task) => {
        if (taskRevealTimer) {
            window.clearTimeout(taskRevealTimer);
        }

        taskBubble.classList.remove('is-visible');

        taskRevealTimer = window.setTimeout(() => {
            taskText.textContent = task;
            taskBubble.classList.add('is-visible');
        }, 180);
    };

    const startTaskRotation = (tasks) => {
        stopTaskRotation();

        if (!Array.isArray(tasks) || tasks.length === 0) {
            return;
        }

        showTask(tasks[currentTaskIndex]);

        taskTimer = window.setInterval(() => {
            currentTaskIndex = (currentTaskIndex + 1) % tasks.length;
            showTask(tasks[currentTaskIndex]);
        }, 5200);
    };

    const startCopywriterTaskRotation = (agentData) => {
        stopCopywriterTaskRotation();

        if (
            !copywriterAgent ||
            !copywriterTaskText ||
            !Array.isArray(agentData.tasks) ||
            agentData.tasks.length === 0
        ) {
            return;
        }

        copywriterAgent.dataset.tooltipTitle = agentData.name;
        copywriterAgent.dataset.tooltipDescription = agentData.description;
        copywriterTaskText.textContent = agentData.tasks[copywriterTaskIndex];

        copywriterTaskTimer = window.setInterval(() => {
            copywriterTaskIndex = (
                copywriterTaskIndex + 1
            ) % agentData.tasks.length;

            copywriterTaskText.textContent = agentData.tasks[copywriterTaskIndex];
        }, 6100);
    };

    const setAgentState = (nextState) => {
        const isResting = nextState === 'resting';
        currentState = nextState;

        room.classList.toggle('agent-is-working', !isResting);
        room.classList.toggle('agent-is-resting', isResting);
        agent.classList.toggle('is-working', !isResting);
        agent.classList.toggle('is-resting', isResting);
        status.classList.toggle('is-working', !isResting);
        status.classList.toggle('is-resting', isResting);

        stateButton.setAttribute('aria-pressed', String(isResting));
        stateButton.textContent = isResting ? 'Back to Work' : 'Take a Break';

        if (isResting) {
            stopTaskRotation();
            statusText.textContent = `${currentAgentData.name} · Resting`;
            showTask(currentAgentData.restMessage || fallbackAgent.restMessage);
            agent.dataset.tooltipDescription = '正在 Sofa Lounge 補充咖啡與靈感。';
            return;
        }

        statusText.textContent = `${currentAgentData.name} · ${currentAgentData.statusLabel}`;
        agent.dataset.tooltipDescription = currentAgentData.description;
        startTaskRotation(currentAgentData.tasks);
    };

    const activateAgent = (agentData) => {
        currentAgentData = agentData;
        agent.dataset.tooltipTitle = agentData.name;
        agent.dataset.tooltipDescription = agentData.description;
        setAgentState(agentData.status === 'resting' ? 'resting' : 'working');
    };

    const loadOffice = async () => {
        try {
            const response = await fetch('./data/office.json', { cache: 'no-store' });

            if (!response.ok) {
                throw new Error(`Office data error: ${response.status}`);
            }

            const officeData = await response.json();
            const designAgent = officeData.agents?.find(
                (item) => item.id === 'design-agent'
            );
            const copywriter = officeData.agents?.find(
                (item) => item.id === 'copywriter-agent'
            );

            activateAgent(designAgent || fallbackAgent);
            startCopywriterTaskRotation(copywriter || fallbackCopywriter);
        } catch (error) {
            console.warn('Using fallback Design Agent data.', error);
            activateAgent(fallbackAgent);
            startCopywriterTaskRotation(fallbackCopywriter);
        }
    };

    loadOffice();

    stateButton.addEventListener('click', () => {
        setAgentState(currentState === 'working' ? 'resting' : 'working');
    });

    window.addEventListener('beforeunload', () => {
        stopTaskRotation();
        stopCopywriterTaskRotation();

        if (taskRevealTimer) {
            window.clearTimeout(taskRevealTimer);
        }
    });
})();
