(() => {
    const stage = document.querySelector('#office-stage');
    const world = document.querySelector('#office-world');
    const breakButton = document.querySelector('#toggle-agent-state');
    const meetingButton = document.querySelector('#toggle-team-meeting');
    const onlineCount = document.querySelector('#online-agent-count');
    const studioActivity = document.querySelector('#studio-activity');
    const controlPanel = document.querySelector('#agent-control-panel');
    const closePanelButton = document.querySelector('#close-agent-panel');
    const panelName = document.querySelector('#panel-agent-name');
    const panelStatus = document.querySelector('#panel-agent-status');
    const panelStatusLight = document.querySelector('#panel-status-light');
    const panelRole = document.querySelector('#panel-agent-role');
    const panelDescription = document.querySelector('#panel-agent-description');
    const panelTask = document.querySelector('#panel-current-task');
    const panelProgressBar = document.querySelector('#panel-progress-bar');
    const panelProgressLabel = document.querySelector('#panel-progress-label');
    const progressTrack = document.querySelector('.task-progress-track');
    const assignForm = document.querySelector('#assign-task-form');
    const taskInput = document.querySelector('#new-agent-task');
    const pauseButton = document.querySelector('#toggle-selected-agent');
    const queueList = document.querySelector('#panel-task-queue');
    const activityLog = document.querySelector('#office-activity-log');
    const toast = document.querySelector('#office-toast');
    const localSaveStatus = document.querySelector('#local-save-status');
    const exportButton = document.querySelector('#export-office-data');
    const importButton = document.querySelector('#import-office-data');
    const importFileInput = document.querySelector('#import-office-file');
    const officeControlsButton = document.querySelector('#toggle-office-controls');
    const officeControlsPanel = document.querySelector('#office-controls-panel');
    const closeOfficeControlsButton = document.querySelector('#close-office-controls');
    const officeMotionSpeed = document.querySelector('#office-motion-speed');
    const officeLightingMode = document.querySelector('#office-lighting-mode');
    const officeMovementToggle = document.querySelector('#office-movement-toggle');
    const officeWorkMotionToggle = document.querySelector('#office-work-motion-toggle');
    const officeEmotionToggle = document.querySelector('#office-emotion-toggle');
    const resetAgentPositionsButton = document.querySelector('#reset-agent-positions');
    const sendAgentToCoffeeButton = document.querySelector('#send-agent-to-coffee');
    const bridgeButton = document.querySelector('#open-chatgpt-bridge');
    const bridgeModal = document.querySelector('#chatgpt-bridge-modal');
    const closeBridgeButton = document.querySelector('#close-chatgpt-bridge');
    const bridgeAgentName = document.querySelector('#bridge-agent-name');
    const bridgeTaskName = document.querySelector('#bridge-task-name');
    const bridgePrompt = document.querySelector('#bridge-prompt');
    const bridgeResult = document.querySelector('#bridge-result');
    const copyPromptButton = document.querySelector('#copy-bridge-prompt');
    const openChatGPTButton = document.querySelector('#open-chatgpt-window');
    const saveResultButton = document.querySelector('#save-bridge-result');
    const completeBridgeTaskButton = document.querySelector('#complete-bridge-task');
    const bridgeResultHistory = document.querySelector('#bridge-result-history');
    const teamChatButton = document.querySelector('#toggle-team-chat');
    const teamChatPanel = document.querySelector('#team-chat-panel');
    const closeTeamChatButton = document.querySelector('#close-team-chat');
    const backTeamChatToHubButton = document.querySelector('#back-team-chat-to-hub');
    const teamChatMessages = document.querySelector('#team-chat-messages');
    const teamChatForm = document.querySelector('#team-chat-form');
    const teamChatInput = document.querySelector('#team-chat-input');
    const sceneLayer = document.querySelector('.office-scene-layer');
    const aiHub = document.querySelector('.ai-zone');
    const aiHubHandle = aiHub?.querySelector('.compact-heading');
    const departmentWorkspace = document.querySelector('#department-workspace');
    const departmentWorkspaceHandle = document.querySelector('#department-workspace-handle');
    const closeDepartmentWorkspaceButton = document.querySelector('#close-department-workspace');
    const backDepartmentToHubButton = document.querySelector('#back-department-to-hub');
    const departmentWorkspaceTitle = document.querySelector('#department-workspace-title');
    const departmentWorkspaceNav = document.querySelector('#department-workspace-nav');
    const departmentWorkspaceRole = document.querySelector('#department-workspace-role');
    const departmentWorkspaceStatus = document.querySelector('#department-workspace-status');
    const departmentWorkspaceTask = document.querySelector('#department-workspace-task');
    const departmentWorkspaceProgress = document.querySelector('#department-workspace-progress');
    const departmentWorkspaceProgressLabel = document.querySelector('#department-workspace-progress-label');
    const departmentWorkspaceChecklist = document.querySelector('#department-workspace-checklist');
    const departmentWorkspaceNotes = document.querySelector('#department-workspace-notes');
    const saveDepartmentNotesButton = document.querySelector('#save-department-notes');
    const completeDepartmentTaskButton = document.querySelector('#complete-department-task');
    const openStudioDashboardButton = document.querySelector('#open-studio-dashboard');
    const studioDashboard = document.querySelector('#studio-dashboard');
    const studioDashboardHandle = document.querySelector('#studio-dashboard-handle');
    const closeStudioDashboardButton = document.querySelector('#close-studio-dashboard');
    const studioDashboardProgress = document.querySelector('#studio-dashboard-progress');
    const studioDashboardProgressLabel = document.querySelector('#studio-dashboard-progress-label');
    const studioDashboardOnline = document.querySelector('#studio-dashboard-online');
    const studioDashboardResults = document.querySelector('#studio-dashboard-results');
    const studioDashboardTasks = document.querySelector('#studio-dashboard-tasks');
    const studioDashboardOverdue = document.querySelector('#studio-dashboard-overdue');
    const studioDashboardAgents = document.querySelector('#studio-dashboard-agents');
    const studioDashboardActivity = document.querySelector('#studio-dashboard-activity');
    const dashboardMeetingButton = document.querySelector('#dashboard-team-meeting');
    const copyDailyBriefButton = document.querySelector('#copy-daily-brief');
    const openDeliverablesButton = document.querySelector('#open-deliverables-library');
    const deliverablesLibrary = document.querySelector('#deliverables-library');
    const deliverablesLibraryHandle = document.querySelector('#deliverables-library-handle');
    const closeDeliverablesButton = document.querySelector('#close-deliverables-library');
    const backDeliverablesToHubButton = document.querySelector('#back-deliverables-to-hub');
    const deliverablesFilter = document.querySelector('#deliverables-filter');
    const deliverablesSearch = document.querySelector('#deliverables-search');
    const deliverablesCount = document.querySelector('#deliverables-count');
    const deliverablesList = document.querySelector('#deliverables-list');
    const deliverablesEmpty = document.querySelector('#deliverables-empty');
    const deliverablesDetail = document.querySelector('#deliverables-detail');
    const deliverablesDetailAgent = document.querySelector('#deliverables-detail-agent');
    const deliverablesDetailTask = document.querySelector('#deliverables-detail-task');
    const deliverablesDetailTime = document.querySelector('#deliverables-detail-time');
    const deliverablesDetailContent = document.querySelector('#deliverables-detail-content');
    const copyDeliverableButton = document.querySelector('#copy-deliverable');
    const downloadDeliverableButton = document.querySelector('#download-deliverable');
    const deleteDeliverableButton = document.querySelector('#delete-deliverable');
    const openProjectBoardButton = document.querySelector('#open-project-board');
    const projectBoard = document.querySelector('#project-board');
    const projectBoardHandle = document.querySelector('#project-board-handle');
    const closeProjectBoardButton = document.querySelector('#close-project-board');
    const backProjectToHubButton = document.querySelector('#back-project-to-hub');
    const projectBoardAddForm = document.querySelector('#project-board-add-form');
    const projectBoardAgent = document.querySelector('#project-board-agent');
    const projectBoardTaskInput = document.querySelector('#project-board-task-input');
    const projectBoardPriority = document.querySelector('#project-board-priority');
    const projectBoardDueDate = document.querySelector('#project-board-due-date');
    const projectFilterAgent = document.querySelector('#project-filter-agent');
    const projectFilterPriority = document.querySelector('#project-filter-priority');
    const projectBoardSearch = document.querySelector('#project-board-search');
    const exportProjectBoardButton = document.querySelector('#export-project-board');
    const projectTaskInspector = document.querySelector('#project-task-inspector');
    const closeProjectInspectorButton = document.querySelector('#close-project-inspector');
    const projectInspectorTitle = document.querySelector('#project-inspector-title');
    const projectInspectorAgent = document.querySelector('#project-inspector-agent');
    const projectInspectorForm = document.querySelector('#project-inspector-form');
    const projectInspectorStatus = document.querySelector('#project-inspector-status');
    const projectInspectorPriority = document.querySelector('#project-inspector-priority');
    const projectInspectorDueDate = document.querySelector('#project-inspector-due-date');
    const projectInspectorDependency = document.querySelector('#project-inspector-dependency');
    const projectInspectorNotes = document.querySelector('#project-inspector-notes');
    const projectBoardColumns = [...document.querySelectorAll('[data-board-status]')];
    const projectBoardLists = {
        queue: document.querySelector('#project-list-queue'),
        working: document.querySelector('#project-list-working'),
        review: document.querySelector('#project-list-review'),
        done: document.querySelector('#project-list-done')
    };
    const projectBoardCounts = {
        queue: document.querySelector('#project-count-queue'),
        working: document.querySelector('#project-count-working'),
        review: document.querySelector('#project-count-review'),
        done: document.querySelector('#project-count-done')
    };
    const openAutomationCenterButton = document.querySelector('#open-automation-center');
    const automationCenter = document.querySelector('#automation-center');
    const automationCenterHandle = document.querySelector('#automation-center-handle');
    const closeAutomationCenterButton = document.querySelector('#close-automation-center');
    const backAutomationToHubButton = document.querySelector('#back-automation-to-hub');
    const automationActiveCount = document.querySelector('#automation-active-count');
    const automationCreatedCount = document.querySelector('#automation-created-count');
    const automationNextRun = document.querySelector('#automation-next-run');
    const toggleAutomationEngineButton = document.querySelector('#toggle-automation-engine');
    const runDueAutomationsButton = document.querySelector('#run-due-automations');
    const automationRuleForm = document.querySelector('#automation-rule-form');
    const automationAgent = document.querySelector('#automation-agent');
    const automationTaskTitle = document.querySelector('#automation-task-title');
    const automationFrequency = document.querySelector('#automation-frequency');
    const automationTime = document.querySelector('#automation-time');
    const automationDueOffset = document.querySelector('#automation-due-offset');
    const automationPriority = document.querySelector('#automation-priority');
    const automationRulesList = document.querySelector('#automation-rules-list');
    const automationWorkload = document.querySelector('#automation-workload');
    const automationLogElement = document.querySelector('#automation-log');
    const backBridgeToHubButton = document.querySelector('#back-bridge-to-hub');
    const openStudioTimelineButton = document.querySelector('#open-studio-timeline');
    const studioTimeline = document.querySelector('#studio-timeline');
    const studioTimelineHandle = document.querySelector('#studio-timeline-handle');
    const closeStudioTimelineButton = document.querySelector('#close-studio-timeline');
    const backTimelineToHubButton = document.querySelector('#back-timeline-to-hub');
    const timelinePreviousWeekButton = document.querySelector('#timeline-previous-week');
    const timelineTodayButton = document.querySelector('#timeline-today');
    const timelineNextWeekButton = document.querySelector('#timeline-next-week');
    const timelineWeekLabel = document.querySelector('#timeline-week-label');
    const enableStudioNotificationsButton = document.querySelector('#enable-studio-notifications');
    const timelineDueCount = document.querySelector('#timeline-due-count');
    const timelineBlockedCount = document.querySelector('#timeline-blocked-count');
    const timelineMilestoneCount = document.querySelector('#timeline-milestone-count');
    const timelineWeekGrid = document.querySelector('#timeline-week-grid');
    const milestoneForm = document.querySelector('#milestone-form');
    const milestoneTitle = document.querySelector('#milestone-title');
    const milestoneDate = document.querySelector('#milestone-date');
    const milestoneList = document.querySelector('#milestone-list');

    const required = [
        stage, world, breakButton, meetingButton, onlineCount, studioActivity,
        controlPanel, closePanelButton, panelName, panelStatus, panelStatusLight,
        panelRole, panelDescription, panelTask, panelProgressBar,
        panelProgressLabel, progressTrack, assignForm, taskInput, pauseButton,
        queueList, activityLog, toast, localSaveStatus, exportButton,
        importButton, importFileInput,
        officeControlsButton, officeControlsPanel, closeOfficeControlsButton,
        officeMotionSpeed, officeLightingMode, officeMovementToggle,
        officeWorkMotionToggle, officeEmotionToggle,
        resetAgentPositionsButton, sendAgentToCoffeeButton,
        bridgeButton, bridgeModal, closeBridgeButton, bridgeAgentName,
        bridgeTaskName, bridgePrompt, bridgeResult, copyPromptButton,
        openChatGPTButton, saveResultButton, completeBridgeTaskButton,
        bridgeResultHistory, teamChatButton, teamChatPanel, closeTeamChatButton,
        teamChatMessages, teamChatForm, teamChatInput, backTeamChatToHubButton,
        sceneLayer, aiHub, aiHubHandle, departmentWorkspace,
        departmentWorkspaceHandle, closeDepartmentWorkspaceButton,
        departmentWorkspaceTitle, departmentWorkspaceNav,
        departmentWorkspaceRole, departmentWorkspaceStatus,
        departmentWorkspaceTask, departmentWorkspaceProgress,
        departmentWorkspaceProgressLabel, departmentWorkspaceChecklist,
        departmentWorkspaceNotes, saveDepartmentNotesButton,
        completeDepartmentTaskButton, backDepartmentToHubButton,
        openStudioDashboardButton,
        studioDashboard, studioDashboardHandle, closeStudioDashboardButton,
        studioDashboardProgress, studioDashboardProgressLabel,
        studioDashboardOnline, studioDashboardResults, studioDashboardTasks,
        studioDashboardOverdue,
        studioDashboardAgents, studioDashboardActivity,
        dashboardMeetingButton, copyDailyBriefButton, openDeliverablesButton,
        deliverablesLibrary, deliverablesLibraryHandle,
        closeDeliverablesButton, backDeliverablesToHubButton,
        deliverablesFilter, deliverablesSearch,
        deliverablesCount, deliverablesList, deliverablesEmpty,
        deliverablesDetail, deliverablesDetailAgent, deliverablesDetailTask,
        deliverablesDetailTime, deliverablesDetailContent,
        copyDeliverableButton, downloadDeliverableButton,
        deleteDeliverableButton, openProjectBoardButton, projectBoard,
        projectBoardHandle, closeProjectBoardButton, backProjectToHubButton,
        projectBoardAddForm,
        projectBoardAgent, projectBoardTaskInput, projectBoardPriority,
        projectBoardDueDate, projectFilterAgent, projectFilterPriority,
        projectBoardSearch, exportProjectBoardButton, projectTaskInspector,
        closeProjectInspectorButton, projectInspectorTitle,
        projectInspectorAgent, projectInspectorForm, projectInspectorStatus,
        projectInspectorPriority, projectInspectorDueDate,
        projectInspectorDependency,
        projectInspectorNotes, ...projectBoardColumns,
        ...Object.values(projectBoardLists), ...Object.values(projectBoardCounts),
        openAutomationCenterButton, automationCenter, automationCenterHandle,
        closeAutomationCenterButton, backAutomationToHubButton,
        automationActiveCount,
        automationCreatedCount, automationNextRun,
        toggleAutomationEngineButton, runDueAutomationsButton,
        automationRuleForm, automationAgent, automationTaskTitle,
        automationFrequency, automationTime, automationDueOffset,
        automationPriority, automationRulesList, automationWorkload,
        automationLogElement, backBridgeToHubButton, openStudioTimelineButton,
        studioTimeline, studioTimelineHandle, closeStudioTimelineButton,
        backTimelineToHubButton, timelinePreviousWeekButton,
        timelineTodayButton, timelineNextWeekButton, timelineWeekLabel,
        enableStudioNotificationsButton, timelineDueCount,
        timelineBlockedCount, timelineMilestoneCount, timelineWeekGrid,
        milestoneForm, milestoneTitle, milestoneDate, milestoneList
    ];

    if (required.some((item) => !item)) {
        return;
    }

    const STAGE_WIDTH = 1440;
    const STAGE_HEIGHT = 760;
    const SCENE_WIDTH = 1280;
    const SCENE_HEIGHT = 720;
    const HUB_WIDTH = 350;
    const HUB_HEIGHT = 135;
    const AGENT_WIDTH = 68;
    const AGENT_HEIGHT = 108;
    const WORKSPACE_WIDTH = 564;
    const WORKSPACE_HEIGHT = 580;
    const DASHBOARD_WIDTH = 900;
    const DASHBOARD_HEIGHT = 640;
    const DELIVERABLES_WIDTH = 860;
    const DELIVERABLES_HEIGHT = 604;
    const PROJECT_BOARD_WIDTH = 1120;
    const PROJECT_BOARD_HEIGHT = 604;
    const AUTOMATION_CENTER_WIDTH = 1000;
    const AUTOMATION_CENTER_HEIGHT = 604;
    const TIMELINE_WIDTH = 1040;
    const TIMELINE_HEIGHT = 640;
    const DEFAULT_HUB_POSITION = { x: 515, y: 255 };
    const DEFAULT_WORKSPACE_POSITION = { x: 438, y: 96 };
    const DEFAULT_DASHBOARD_POSITION = { x: 270, y: 72 };
    const DEFAULT_DELIVERABLES_POSITION = { x: 290, y: 78 };
    const DEFAULT_PROJECT_BOARD_POSITION = { x: 160, y: 78 };
    const DEFAULT_AUTOMATION_POSITION = { x: 220, y: 78 };
    const DEFAULT_TIMELINE_POSITION = { x: 200, y: 72 };
    const DEPARTMENT_NAMES = {
        'design-agent': 'Design Area',
        'copywriter-agent': 'Copywriting Area',
        'marketing-agent': 'Marketing Area',
        'photography-agent': 'Photography Studio',
        'shipping-agent': 'Shipping Area'
    };
    const DEPARTMENT_CHECKLISTS = {
        'design-agent': ['確認需求與輸出尺寸', '建立視覺方向與配色', '完成第一版設計', '檢查印刷與交付格式'],
        'copywriter-agent': ['確認受眾與溝通目的', '完成主文案草稿', '準備替換版本', '檢查品牌語氣與繁體用字'],
        'marketing-agent': ['設定活動目標與受眾', '安排內容發布節奏', '準備素材需求', '確認成效追蹤指標'],
        'photography-agent': ['確認拍攝清單', '設定構圖與燈光', '完成拍攝與選片', '輸出平台所需尺寸'],
        'shipping-agent': ['核對訂單內容', '完成品質檢查', '包裝並貼上標籤', '更新物流與庫存狀態']
    };
    /*
     * 07-3 SAFE NAVIGATION GRAPH
     * Every edge follows a visible aisle in the single-background office.
     * Agents travel through these waypoints instead of crossing desks, the
     * coffee counter, the sofa or the product shelves in a straight line.
     */
    const NAVIGATION_NODES = {
        designHome: { x: 253, y: 255, links: ['designSide'] },
        designSide: { x: 330, y: 292, links: ['designHome', 'westAisle'] },
        copyHome: { x: 572, y: 210, links: ['copySide'] },
        copySide: { x: 610, y: 302, links: ['copyHome', 'centralAisle'] },
        marketingHome: { x: 790, y: 205, links: ['marketingSide'] },
        marketingSide: { x: 810, y: 305, links: ['marketingHome', 'centralAisle', 'eastAisle'] },
        photographyHome: { x: 1055, y: 232, links: ['photographySide'] },
        photographySide: { x: 1006, y: 330, links: ['photographyHome', 'eastAisle'] },
        shippingHome: { x: 1092, y: 476, links: ['shippingSide'] },
        shippingSide: { x: 1018, y: 436, links: ['shippingHome', 'eastAisle', 'loungeEast'] },
        westAisle: { x: 392, y: 345, links: ['designSide', 'showcaseGate', 'centralAisle'] },
        centralAisle: { x: 640, y: 340, links: ['westAisle', 'copySide', 'marketingSide', 'coffeeGate', 'loungeGate', 'eastAisle'] },
        eastAisle: { x: 906, y: 355, links: ['centralAisle', 'marketingSide', 'photographySide', 'shippingSide', 'loungeEast'] },
        showcaseGate: { x: 390, y: 420, links: ['westAisle', 'showcase'] },
        showcase: { x: 286, y: 474, links: ['showcaseGate'] },
        coffeeGate: { x: 510, y: 380, links: ['centralAisle', 'coffee'] },
        coffee: { x: 560, y: 424, links: ['coffeeGate'] },
        loungeGate: { x: 704, y: 424, links: ['centralAisle', 'lounge', 'loungeEast'] },
        loungeEast: { x: 902, y: 455, links: ['loungeGate', 'eastAisle', 'shippingSide', 'lounge'] },
        lounge: { x: 786, y: 522, links: ['loungeGate', 'loungeEast'] }
    };
    const AGENT_HOME_NODES = {
        'design-agent': 'designHome',
        'copywriter-agent': 'copyHome',
        'marketing-agent': 'marketingHome',
        'photography-agent': 'photographyHome',
        'shipping-agent': 'shippingHome'
    };
    const AGENT_PATROL_NODES = {
        'design-agent': ['designHome', 'designSide'],
        'copywriter-agent': ['copyHome', 'copySide'],
        'marketing-agent': ['marketingHome', 'marketingSide'],
        'photography-agent': ['photographyHome', 'photographySide'],
        'shipping-agent': ['shippingHome', 'shippingSide']
    };
    const PUBLIC_DESTINATION_NODES = ['coffee', 'lounge', 'showcase'];
    const MEETING_OFFSETS = {
        'design-agent': { x: 24, y: 122 },
        'copywriter-agent': { x: 84, y: 146 },
        'marketing-agent': { x: 149, y: 151 },
        'photography-agent': { x: 214, y: 140 },
        'shipping-agent': { x: 274, y: 112 }
    };
    const STORAGE_KEY = 'regift-ai-studio-v3';
    const AGENT_EMOTIONS = [
        { symbol: '😄', label: '高興' },
        { symbol: '😠', label: '生氣' },
        { symbol: '😢', label: '傷心' },
        { symbol: '❓', label: '問號' },
        { symbol: '🙄', label: '鄙視' },
        { symbol: '😑', label: '無言' }
    ];
    const DEFAULT_OFFICE_SETTINGS = {
        movementEnabled: true,
        workMotionsEnabled: true,
        emotionsEnabled: true,
        motionSpeed: 1,
        lighting: 'warm'
    };
    const OFFICE_INTERACTIONS = {
        coffee: { node: 'coffee', className: 'is-coffee-interaction', prop: '☕', label: 'Coffee Bar 補充咖啡' },
        lounge: { node: 'lounge', className: 'is-lounge-interaction', prop: '💤', label: 'Sofa Lounge 短暫休息' },
        showcase: { node: 'showcase', className: 'is-showcase-interaction', prop: '✦', label: 'Product Showcase 查看作品' }
    };
    const taskElementIds = {
        'design-agent': 'design-task',
        'copywriter-agent': 'copywriter-task',
        'marketing-agent': 'marketing-task',
        'photography-agent': 'photography-task',
        'shipping-agent': 'shipping-task'
    };

    const fallbackAgents = [
        {
            id: 'design-agent', name: 'Design Agent',
            role: 'Brand & Visual Designer',
            description: '負責品牌視覺、卡片、書約與包裝設計。',
            restMessage: '休息中：在 Sofa Lounge 補充咖啡與設計靈感。',
            tasks: ['設計下一款彌月卡版型', '整理 ReGift 品牌視覺語言']
        },
        {
            id: 'copywriter-agent', name: 'Copywriter Agent',
            role: 'Brand Copywriter',
            description: '負責品牌故事、商品文案與社群內容。',
            tasks: ['撰寫彌月卡商品故事', '整理品牌語氣指南']
        },
        {
            id: 'marketing-agent', name: 'Marketing Agent',
            role: 'Campaign Strategist',
            description: '負責社群企劃、活動曝光與成效追蹤。',
            tasks: ['規劃父親節社群活動', '整理內容行事曆']
        },
        {
            id: 'photography-agent', name: 'Photography Agent',
            role: 'Product Photographer',
            description: '負責商品攝影、燈光配置與影像整理。',
            tasks: ['調整商品燈光', '整理商品主圖色調']
        },
        {
            id: 'shipping-agent', name: 'Shipping Agent',
            role: 'Order & Fulfillment',
            description: '負責訂單確認、品質檢查、包裝與物流。',
            tasks: ['確認待出貨訂單', '列印物流標籤']
        }
    ];

    let agents = fallbackAgents;
    let selectedAgentId = null;
    let designResting = false;
    let meetingActive = false;
    let tickTimer = null;
    let toastTimer = null;
    let saveTimer = null;
    let skipPersistOnUnload = false;
    let activityEntries = [];
    let savedResults = [];
    let savedOfficeState = null;
    let bridgeTaskSnapshot = null;
    let chatMessages = [];
    let chatTimer = null;
    let agentReplyTimer = null;
    let discussionIndex = 0;
    let hubPosition = { ...DEFAULT_HUB_POSITION };
    let hubDrag = null;
    let movementTimer = null;
    let emotionTimer = null;
    let emotionHideTimer = null;
    let interactionReturnTimer = null;
    let activeInteractionAgentId = null;
    let officeSettings = { ...DEFAULT_OFFICE_SETTINGS };
    let movementCursor = 0;
    let selectedWorkspaceAgentId = null;
    let departmentWorkspaceState = { notes: {}, checklist: {} };
    let workspacePosition = { ...DEFAULT_WORKSPACE_POSITION };
    let workspaceDrag = null;
    let dashboardPosition = { ...DEFAULT_DASHBOARD_POSITION };
    let dashboardDrag = null;
    let deliverablesPosition = { ...DEFAULT_DELIVERABLES_POSITION };
    let deliverablesDrag = null;
    let selectedDeliverableId = null;
    let projectBoardPosition = { ...DEFAULT_PROJECT_BOARD_POSITION };
    let projectBoardDrag = null;
    let draggedProjectTaskKey = null;
    let selectedProjectTaskKey = null;
    let projectTaskStates = {};
    let projectTaskMetadata = {};
    let deadlineAlerts = {};
    let deadlineTimer = null;
    let automationRules = [];
    let automationLog = [];
    let automationEnabled = true;
    let automationPosition = { ...DEFAULT_AUTOMATION_POSITION };
    let automationDrag = null;
    let automationTimer = null;
    let studioMilestones = [];
    let timelineWeekOffset = 0;
    let timelinePosition = { ...DEFAULT_TIMELINE_POSITION };
    let timelineDrag = null;

    const progressByAgent = new Map();
    const taskIndexByAgent = new Map();
    const pausedAgents = new Set();
    const movementStepByAgent = new Map();
    const walkTimers = new Map();
    const navigationByAgent = new Map();
    const navigationTimers = new Map();
    const navigationNodeReservations = new Map();

    const buildPersistedState = () => ({
        version: 8,
        savedAt: new Date().toISOString(),
        designResting,
        agents: Object.fromEntries(agents.map((agent) => [
            agent.id,
            {
                tasks: agent.tasks,
                progress: progressByAgent.get(agent.id) || 0,
                taskIndex: getTaskIndex(agent.id),
                paused: pausedAgents.has(agent.id)
            }
        ])),
        activityEntries,
        savedResults,
        chatMessages,
        hubPosition,
        departmentWorkspaceState,
        workspacePosition,
        dashboardPosition,
        deliverablesPosition,
        projectBoardPosition,
        projectTaskStates,
        projectTaskMetadata,
        deadlineAlerts,
        automationRules,
        automationLog,
        automationEnabled,
        automationPosition,
        studioMilestones,
        timelinePosition,
        officeSettings,
        agentNavigation: Object.fromEntries(agents.map((agent) => {
            const navigation = navigationByAgent.get(agent.id);
            return [agent.id, {
                node: navigation?.currentNode || AGENT_HOME_NODES[agent.id],
                facing: navigation?.facing || 'right'
            }];
        }))
    });

    const persistState = () => {
        if (saveTimer) {
            window.clearTimeout(saveTimer);
            saveTimer = null;
        }

        try {
            window.localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(buildPersistedState())
            );
            localSaveStatus.textContent = 'Saved locally';
            localSaveStatus.classList.remove('is-saving');
        } catch (error) {
            console.warn('Unable to save office state.', error);
            localSaveStatus.textContent = 'Save unavailable';
        }

        saveTimer = null;
    };

    const scheduleSave = () => {
        localSaveStatus.textContent = 'Saving...';
        localSaveStatus.classList.add('is-saving');
        if (saveTimer) return;
        saveTimer = window.setTimeout(persistState, 1000);
    };

    const migrateSavedState = (state) => ({
        ...state,
        version: 8,
        projectTaskStates: state.projectTaskStates && typeof state.projectTaskStates === 'object' ? state.projectTaskStates : {},
        projectTaskMetadata: state.projectTaskMetadata && typeof state.projectTaskMetadata === 'object' ? state.projectTaskMetadata : {},
        deadlineAlerts: state.deadlineAlerts && typeof state.deadlineAlerts === 'object' ? state.deadlineAlerts : {},
        automationRules: Array.isArray(state.automationRules) ? state.automationRules : [],
        automationLog: Array.isArray(state.automationLog) ? state.automationLog : [],
        automationEnabled: state.automationEnabled !== false,
        studioMilestones: Array.isArray(state.studioMilestones) ? state.studioMilestones : [],
        agentNavigation: state.agentNavigation && typeof state.agentNavigation === 'object'
            ? state.agentNavigation
            : {}
    });

    const parseSavedState = (rawState) => {
        if (!rawState) return null;
        const parsedState = JSON.parse(rawState);
        if (
            !Number.isInteger(parsedState?.version)
            || parsedState.version < 3
            || parsedState.version > 8
            || !parsedState.agents
        ) return null;
        return migrateSavedState(parsedState);
    };

    const readSavedState = () => {
        try {
            return parseSavedState(window.localStorage.getItem(STORAGE_KEY));
        } catch (error) {
            console.warn('Primary save data was damaged.', error);
            return null;
        }
    };

    const exportOfficeData = () => {
        persistState();
        const data = JSON.stringify(buildPersistedState(), null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        const date = new Date().toISOString().slice(0, 10);

        downloadLink.href = url;
        downloadLink.download = `ReGift-AI-Studio-backup-${date}.json`;
        document.body.append(downloadLink);
        downloadLink.click();
        downloadLink.remove();
        URL.revokeObjectURL(url);
    };

    const importOfficeData = async (file) => {
        if (!file) return;

        try {
            const importedState = JSON.parse(await file.text());
            if (
                !Number.isInteger(importedState?.version)
                || importedState.version < 3
                || importedState.version > 8
                || !importedState?.agents
            ) {
                throw new Error('Unsupported backup format');
            }

            const migratedImport = migrateSavedState(importedState);
            skipPersistOnUnload = true;
            window.localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(migratedImport)
            );
            showToast('Backup imported — reloading office');
            window.setTimeout(() => window.location.reload(), 700);
        } catch (error) {
            console.warn('Unable to import office backup.', error);
            showToast('無法讀取這個備份檔');
        } finally {
            importFileInput.value = '';
        }
    };

    const fitOfficeToViewport = () => {
        const safePadding = 8;
        const scale = Math.min(
            (window.innerWidth - safePadding) / STAGE_WIDTH,
            (window.innerHeight - safePadding) / STAGE_HEIGHT
        );

        stage.style.setProperty('--office-scale', String(Math.max(scale, 0.1)));
    };

    const clampHubPosition = (position) => ({
        x: Math.max(8, Math.min(
            SCENE_WIDTH - HUB_WIDTH - 8,
            position.x
        )),
        y: Math.max(8, Math.min(
            SCENE_HEIGHT - HUB_HEIGHT - 8,
            position.y
        ))
    });

    const applyMeetingFormation = () => {
        Object.entries(MEETING_OFFSETS).forEach(([agentId, offset]) => {
            const agentElement = document.querySelector(`#${agentId}`);
            if (!agentElement) return;

            const meetingX = Math.max(8, Math.min(
                SCENE_WIDTH - AGENT_WIDTH - 8,
                hubPosition.x + offset.x
            ));
            const meetingY = Math.max(8, Math.min(
                SCENE_HEIGHT - AGENT_HEIGHT - 8,
                hubPosition.y + offset.y
            ));
            agentElement.style.setProperty('--meeting-left', `${Math.round(meetingX)}px`);
            agentElement.style.setProperty('--meeting-top', `${Math.round(meetingY)}px`);
        });
    };

    const applyHubPosition = () => {
        hubPosition = clampHubPosition(hubPosition);
        aiHub.style.left = `${Math.round(hubPosition.x)}px`;
        aiHub.style.top = `${Math.round(hubPosition.y)}px`;
        applyMeetingFormation();
    };

    const startHubDrag = (event) => {
        if (event.button !== 0) return;

        const sceneRect = sceneLayer.getBoundingClientRect();
        hubDrag = {
            startClientX: event.clientX,
            startClientY: event.clientY,
            startX: hubPosition.x,
            startY: hubPosition.y,
            scaleX: sceneRect.width / SCENE_WIDTH,
            scaleY: sceneRect.height / SCENE_HEIGHT
        };
        aiHub.classList.add('is-dragging');
        event.preventDefault();
    };

    const moveHubDrag = (event) => {
        if (!hubDrag) return;

        hubPosition = {
            x: hubDrag.startX + (event.clientX - hubDrag.startClientX) / hubDrag.scaleX,
            y: hubDrag.startY + (event.clientY - hubDrag.startClientY) / hubDrag.scaleY
        };
        applyHubPosition();
        event.preventDefault();
    };

    const endHubDrag = () => {
        if (!hubDrag) return;

        hubDrag = null;
        aiHub.classList.remove('is-dragging');
        addActivity('AI Assistant Hub 的浮動位置已保存');
        showToast('AI Hub position saved');
    };

    const clampAgentPoint = (point) => ({
        x: Math.max(8, Math.min(SCENE_WIDTH - AGENT_WIDTH - 8, Number(point?.x) || 0)),
        y: Math.max(8, Math.min(SCENE_HEIGHT - AGENT_HEIGHT - 8, Number(point?.y) || 0))
    });

    const updateAgentDepth = (agentElement, point) => {
        if (!agentElement || meetingActive) return;
        agentElement.style.zIndex = String(48 + Math.round(point.y / 24));
    };

    const updateAgentNavigationLabel = (agentId, label = '') => {
        const agent = getAgent(agentId);
        const agentElement = document.querySelector(`#${agentId}`);
        if (!agent || !agentElement) return;

        agentElement.dataset.navigationLabel = label;
        agentElement.dataset.tooltipDescription = label
            ? `${agent.description} 目前：${label}。`
            : agent.description;
        agentElement.setAttribute('aria-label', label ? `${agent.name}，${label}` : agent.name);
    };

    const moveAgentTo = (agentId, point, shouldAnimate = true, durationMs = 1250) => {
        const agentElement = document.querySelector(`#${agentId}`);
        if (!agentElement || !point) return;

        const safePoint = clampAgentPoint(point);
        const navigation = navigationByAgent.get(agentId);
        const previousPoint = navigation?.position || safePoint;
        const facing = safePoint.x < previousPoint.x ? 'left' : safePoint.x > previousPoint.x ? 'right' : navigation?.facing || 'right';

        agentElement.classList.toggle('is-facing-left', facing === 'left');
        agentElement.classList.toggle('is-facing-right', facing !== 'left');
        agentElement.style.setProperty('--agent-travel-duration', `${Math.max(0, durationMs) / 1000}s`);
        agentElement.style.setProperty('--agent-left', `${Math.round(safePoint.x)}px`);
        agentElement.style.setProperty('--agent-top', `${Math.round(safePoint.y)}px`);
        updateAgentDepth(agentElement, safePoint);

        if (navigation) {
            navigation.position = safePoint;
            navigation.facing = facing;
        }
        if (!shouldAnimate) return;

        agentElement.classList.add('is-walking');
        if (walkTimers.has(agentId)) window.clearTimeout(walkTimers.get(agentId));
        walkTimers.set(agentId, window.setTimeout(() => {
            agentElement.classList.remove('is-walking');
            walkTimers.delete(agentId);
        }, durationMs));
    };

    const findNavigationRoute = (startNode, destinationNode) => {
        if (!NAVIGATION_NODES[startNode] || !NAVIGATION_NODES[destinationNode]) return [];
        if (startNode === destinationNode) return [startNode];

        const queue = [startNode];
        const previous = new Map([[startNode, null]]);
        while (queue.length) {
            const current = queue.shift();
            for (const next of NAVIGATION_NODES[current].links) {
                if (previous.has(next)) continue;
                previous.set(next, current);
                if (next === destinationNode) {
                    const route = [next];
                    let cursor = current;
                    while (cursor) {
                        route.unshift(cursor);
                        cursor = previous.get(cursor);
                    }
                    return route;
                }
                queue.push(next);
            }
        }
        return [];
    };

    const cancelAgentNavigation = (agentId, removeWalking = true) => {
        const navigation = navigationByAgent.get(agentId);
        if (navigation) {
            navigation.token += 1;
            navigation.destinationNode = null;
        }
        navigationNodeReservations.forEach((reservedBy, nodeId) => {
            if (reservedBy === agentId) navigationNodeReservations.delete(nodeId);
        });
        if (navigationTimers.has(agentId)) {
            window.clearTimeout(navigationTimers.get(agentId));
            navigationTimers.delete(agentId);
        }
        if (walkTimers.has(agentId)) {
            window.clearTimeout(walkTimers.get(agentId));
            walkTimers.delete(agentId);
        }
        if (removeWalking) document.querySelector(`#${agentId}`)?.classList.remove('is-walking');
    };

    const navigateAgentTo = (agentId, destinationNode, options = {}) => {
        const agentElement = document.querySelector(`#${agentId}`);
        const destination = NAVIGATION_NODES[destinationNode];
        const navigation = navigationByAgent.get(agentId);
        if (!agentElement || !destination || !navigation) return false;
        if (!options.force && (pausedAgents.has(agentId) || meetingActive || !officeSettings.movementEnabled)) return false;

        cancelAgentNavigation(agentId);
        const route = findNavigationRoute(navigation.currentNode, destinationNode);
        if (!route.length) return false;

        navigation.destinationNode = destinationNode;
        navigation.token += 1;
        const token = navigation.token;
        const remainingNodes = route.slice(1);
        updateAgentNavigationLabel(agentId, options.label || '正在辦公室內移動');

        const finish = () => {
            if (navigation.token !== token) return;
            navigation.destinationNode = null;
            agentElement.classList.remove('is-walking');
            navigationTimers.delete(agentId);
            updateAgentNavigationLabel(agentId, options.arrivalLabel || '在工作位置處理任務');
            options.onArrival?.();
            scheduleSave();
        };

        const advanceRoute = () => {
            if (navigation.token !== token) return;
            const nextNode = remainingNodes.shift();
            if (!nextNode) {
                finish();
                return;
            }

            const reservedBy = navigationNodeReservations.get(nextNode);
            if (reservedBy && reservedBy !== agentId) {
                remainingNodes.unshift(nextNode);
                navigationTimers.set(agentId, window.setTimeout(advanceRoute, 180));
                return;
            }

            const nextPoint = NAVIGATION_NODES[nextNode];
            const distance = Math.hypot(
                nextPoint.x - navigation.position.x,
                nextPoint.y - navigation.position.y
            );
            const durationMs = Math.round(
                Math.max(480, Math.min(1150, distance * 5.4)) / officeSettings.motionSpeed
            );
            navigationNodeReservations.set(nextNode, agentId);
            agentElement.classList.add('is-walking');
            moveAgentTo(agentId, nextPoint, false, durationMs);
            navigationTimers.set(agentId, window.setTimeout(() => {
                if (navigation.token !== token) return;
                if (navigationNodeReservations.get(nextNode) === agentId) {
                    navigationNodeReservations.delete(nextNode);
                }
                navigation.currentNode = nextNode;
                advanceRoute();
            }, durationMs + 35));
        };

        if (remainingNodes.length === 0) finish();
        else advanceRoute();
        return true;
    };

    const initializeAgentNavigation = (agentId) => {
        const savedNavigation = savedOfficeState?.agentNavigation?.[agentId];
        const savedNode = agentId === 'design-agent' && designResting
            ? 'lounge'
            : NAVIGATION_NODES[savedNavigation?.node]
            ? savedNavigation.node
            : AGENT_HOME_NODES[agentId];
        const point = clampAgentPoint(NAVIGATION_NODES[savedNode]);
        navigationByAgent.set(agentId, {
            currentNode: savedNode,
            destinationNode: null,
            position: point,
            facing: savedNavigation?.facing === 'left' ? 'left' : 'right',
            token: 0
        });
        moveAgentTo(agentId, point, false, 0);
        updateAgentNavigationLabel(
            agentId,
            agentId === 'design-agent' && designResting
                ? '在 Sofa Lounge 補充咖啡與靈感'
                : '在工作位置處理任務'
        );
    };

    const advanceAgentMovement = () => {
        if (!officeSettings.movementEnabled || meetingActive || agents.length === 0) return;

        const agent = agents[movementCursor % agents.length];
        movementCursor += 1;
        if (!agent || pausedAgents.has(agent.id)) return;
        if (agent.id === 'design-agent' && designResting) return;

        if (navigationTimers.has(agent.id) || activeInteractionAgentId === agent.id) return;

        /* A quiet public-area break roughly once per minute. It uses the same
           safe graph, does not add chat messages, and always returns home. */
        if (!activeInteractionAgentId && movementCursor % 9 === 0) {
            const destination = PUBLIC_DESTINATION_NODES[
                Math.floor(movementCursor / 9) % PUBLIC_DESTINATION_NODES.length
            ];
            if (sendAgentToOfficeInteraction(agent, destination, false)) return;
        }

        const points = AGENT_PATROL_NODES[agent.id];
        if (!points?.length) return;
        const nextStep = ((movementStepByAgent.get(agent.id) || 0) + 1) % points.length;
        movementStepByAgent.set(agent.id, nextStep);
        navigateAgentTo(agent.id, points[nextStep], {
            label: '在所屬部門內移動',
            arrivalLabel: '在工作位置處理任務'
        });
    };

    const startAgentMovement = () => {
        if (movementTimer) window.clearInterval(movementTimer);
        movementTimer = null;
        if (!officeSettings.movementEnabled) return;
        movementTimer = window.setInterval(advanceAgentMovement, Math.round(6500 / officeSettings.motionSpeed));
    };

    const scheduleAgentEmotion = () => {
        if (emotionTimer) window.clearTimeout(emotionTimer);
        emotionTimer = null;
        if (!officeSettings.emotionsEnabled) {
            document.querySelectorAll('.agent-emotion-bubble').forEach((bubble) => bubble.classList.remove('is-visible'));
            return;
        }
        const delay = (2800 + Math.round(Math.random() * 4200)) / officeSettings.motionSpeed;

        emotionTimer = window.setTimeout(() => {
            const studioScreen = document.querySelector('#studio-screen');
            const availableAgents = [...document.querySelectorAll('.office-agent:not(.is-paused)')];

            if (!studioScreen?.hidden && availableAgents.length) {
                document.querySelectorAll('.agent-emotion-bubble').forEach((bubble) => {
                    bubble.classList.remove('is-visible');
                });

                const agentElement = availableAgents[Math.floor(Math.random() * availableAgents.length)];
                const emotion = AGENT_EMOTIONS[Math.floor(Math.random() * AGENT_EMOTIONS.length)];
                let bubble = agentElement.querySelector('.agent-emotion-bubble');

                if (!bubble) {
                    bubble = document.createElement('span');
                    bubble.className = 'agent-emotion-bubble';
                    bubble.setAttribute('aria-hidden', 'true');
                    agentElement.append(bubble);
                }

                bubble.textContent = emotion.symbol;
                bubble.dataset.emotion = emotion.label;
                bubble.classList.add('is-visible');

                if (emotionHideTimer) window.clearTimeout(emotionHideTimer);
                emotionHideTimer = window.setTimeout(() => {
                    bubble.classList.remove('is-visible');
                }, 2300);
            }

            scheduleAgentEmotion();
        }, delay);
    };

    const clearOfficeInteraction = (returnAgents = false) => {
        if (interactionReturnTimer) window.clearTimeout(interactionReturnTimer);
        interactionReturnTimer = null;

        document.querySelectorAll('.office-agent').forEach((element) => {
            element.classList.remove(
                'is-interacting',
                'is-coffee-interaction',
                'is-lounge-interaction',
                'is-showcase-interaction'
            );
            element.querySelector('.agent-action-prop')?.remove();
        });
        const previousAgentId = activeInteractionAgentId;
        activeInteractionAgentId = null;
        if (previousAgentId && returnAgents) {
            navigateAgentTo(previousAgentId, AGENT_HOME_NODES[previousAgentId], {
                force: true,
                label: '正在返回所屬部門',
                arrivalLabel: '在工作位置處理任務'
            });
        }
    };

    const resetAgentPositions = (showMessage = true) => {
        if (meetingActive) setMeeting(false);
        if (designResting) setDesignResting(false);
        clearOfficeInteraction(false);
        agents.forEach((agent) => {
            movementStepByAgent.set(agent.id, 0);
            navigateAgentTo(agent.id, AGENT_HOME_NODES[agent.id], {
                force: true,
                label: '正在返回所屬部門',
                arrivalLabel: '在工作位置處理任務'
            });
        });
        if (showMessage) {
            addActivity('所有 Agent 已返回各自工作位置');
            showToast('Agent positions reset');
        }
    };

    const sendAgentToOfficeInteraction = (agent, interactionId, announce = true) => {
        const interaction = OFFICE_INTERACTIONS[interactionId];
        if (!agent || !interaction) return false;

        clearOfficeInteraction(true);
        activeInteractionAgentId = agent.id;
        if (announce) showToast(`${agent.name} 前往 ${interaction.label}`);

        const started = navigateAgentTo(agent.id, interaction.node, {
            force: true,
            label: `正在前往${interaction.label}`,
            arrivalLabel: interaction.label,
            onArrival: () => {
                if (activeInteractionAgentId !== agent.id) return;
                const element = document.querySelector(`#${agent.id}`);
                if (!element) return;
                element.classList.add('is-interacting', interaction.className);
                const prop = document.createElement('span');
                prop.className = 'agent-action-prop';
                prop.textContent = interaction.prop;
                prop.setAttribute('aria-hidden', 'true');
                element.append(prop);
                if (announce) addActivity(`${agent.name} 正在 ${interaction.label}`);

                interactionReturnTimer = window.setTimeout(() => {
                    clearOfficeInteraction(false);
                    navigateAgentTo(agent.id, AGENT_HOME_NODES[agent.id], {
                        force: true,
                        label: '正在返回所屬部門',
                        arrivalLabel: '在工作位置處理任務'
                    });
                }, Math.round((announce ? 5200 : 3600) / officeSettings.motionSpeed));
            }
        });
        if (!started) activeInteractionAgentId = null;
        return started;
    };

    const runOfficeInteraction = (interactionId) => {
        const interaction = OFFICE_INTERACTIONS[interactionId];
        if (!interaction) return;
        if (meetingActive) {
            showToast('請先結束 Team Meeting');
            return;
        }

        const preferredAgent = getAgent(selectedAgentId);
        const availableAgents = agents.filter((agent) => !pausedAgents.has(agent.id));
        const agent = preferredAgent && !pausedAgents.has(preferredAgent.id)
            ? preferredAgent
            : availableAgents[Math.floor(Math.random() * availableAgents.length)];
        if (!agent) {
            showToast('目前沒有可移動的 Agent');
            return;
        }

        sendAgentToOfficeInteraction(agent, interactionId, true);
    };

    const applyOfficeSettings = (shouldSave = false, restartTimers = true) => {
        const speed = Number(officeSettings.motionSpeed);
        officeSettings.motionSpeed = [0.75, 1, 1.25].includes(speed) ? speed : 1;
        officeSettings.lighting = ['day', 'warm', 'night'].includes(officeSettings.lighting)
            ? officeSettings.lighting
            : 'warm';

        world.dataset.lighting = officeSettings.lighting;
        world.style.setProperty('--agent-travel-duration', `${1.15 / officeSettings.motionSpeed}s`);
        world.style.setProperty('--agent-idle-duration', `${1.7 / officeSettings.motionSpeed}s`);
        world.style.setProperty('--agent-walk-duration', `${0.42 / officeSettings.motionSpeed}s`);
        world.style.setProperty('--agent-walk-frame-duration', `${0.72 / officeSettings.motionSpeed}s`);
        world.style.setProperty('--agent-work-duration', `${2.6 / officeSettings.motionSpeed}s`);
        world.style.setProperty('--agent-rest-duration', `${2.2 / officeSettings.motionSpeed}s`);

        officeMotionSpeed.value = String(officeSettings.motionSpeed);
        officeLightingMode.value = officeSettings.lighting;
        officeMovementToggle.checked = officeSettings.movementEnabled;
        officeWorkMotionToggle.checked = officeSettings.workMotionsEnabled;
        officeEmotionToggle.checked = officeSettings.emotionsEnabled;
        document.querySelectorAll('.office-agent').forEach((element) => {
            element.classList.toggle('has-work-motion', officeSettings.workMotionsEnabled);
        });

        if (!officeSettings.movementEnabled) {
            agents.forEach((agent) => {
                if (activeInteractionAgentId !== agent.id) cancelAgentNavigation(agent.id);
            });
        }

        if (restartTimers) {
            startAgentMovement();
            scheduleAgentEmotion();
        }
        if (shouldSave) scheduleSave();
    };

    const clampWorkspacePosition = (position) => ({
        x: Math.max(8, Math.min(STAGE_WIDTH - WORKSPACE_WIDTH - 8, position.x)),
        y: Math.max(68, Math.min(STAGE_HEIGHT - WORKSPACE_HEIGHT - 8, position.y))
    });

    const applyWorkspacePosition = () => {
        workspacePosition = clampWorkspacePosition(workspacePosition);
        departmentWorkspace.style.left = `${Math.round(workspacePosition.x)}px`;
        departmentWorkspace.style.top = `${Math.round(workspacePosition.y)}px`;
    };

    const startWorkspaceDrag = (event) => {
        if (event.button !== 0 || event.target.closest('button')) return;

        const stageRect = stage.getBoundingClientRect();
        workspaceDrag = {
            startClientX: event.clientX,
            startClientY: event.clientY,
            startX: workspacePosition.x,
            startY: workspacePosition.y,
            scaleX: stageRect.width / STAGE_WIDTH,
            scaleY: stageRect.height / STAGE_HEIGHT
        };
        departmentWorkspace.classList.add('is-dragging');
        event.preventDefault();
    };

    const moveWorkspaceDrag = (event) => {
        if (!workspaceDrag) return;

        workspacePosition = {
            x: workspaceDrag.startX + (event.clientX - workspaceDrag.startClientX) / workspaceDrag.scaleX,
            y: workspaceDrag.startY + (event.clientY - workspaceDrag.startClientY) / workspaceDrag.scaleY
        };
        applyWorkspacePosition();
        event.preventDefault();
    };

    const endWorkspaceDrag = () => {
        if (!workspaceDrag) return;

        workspaceDrag = null;
        departmentWorkspace.classList.remove('is-dragging');
        scheduleSave();
    };

    const closeDepartmentWorkspace = () => {
        departmentWorkspace.classList.remove('is-open');
        departmentWorkspace.setAttribute('aria-hidden', 'true');
    };

    const ensureDepartmentChecklist = (agentId) => {
        const template = DEPARTMENT_CHECKLISTS[agentId] || [];
        const savedChecklist = departmentWorkspaceState.checklist[agentId];
        if (!Array.isArray(savedChecklist) || savedChecklist.length !== template.length) {
            departmentWorkspaceState.checklist[agentId] = template.map(() => false);
        }
        return departmentWorkspaceState.checklist[agentId];
    };

    const updateDepartmentWorkspaceLive = () => {
        const agent = getAgent(selectedWorkspaceAgentId);
        if (!agent) return;

        const progress = Math.round(progressByAgent.get(agent.id) || 0);
        departmentWorkspaceTask.textContent = getCurrentTask(agent);
        departmentWorkspaceStatus.textContent = getAgentStatus(agent.id).toUpperCase();
        departmentWorkspaceProgress.style.width = `${progress}%`;
        departmentWorkspaceProgressLabel.textContent = `${progress}%`;
    };

    const renderDepartmentWorkspace = () => {
        const agent = getAgent(selectedWorkspaceAgentId);
        if (!agent) return;

        departmentWorkspaceTitle.textContent = DEPARTMENT_NAMES[agent.id] || agent.name;
        departmentWorkspaceRole.textContent = agent.role || 'AI Agent';
        departmentWorkspaceNotes.value = departmentWorkspaceState.notes[agent.id] || '';
        departmentWorkspaceNav.querySelectorAll('[data-workspace-agent]').forEach((button) => {
            button.classList.toggle('is-active', button.dataset.workspaceAgent === agent.id);
        });

        const checklistState = ensureDepartmentChecklist(agent.id);
        const checklistTemplate = DEPARTMENT_CHECKLISTS[agent.id] || [];
        departmentWorkspaceChecklist.replaceChildren();
        checklistTemplate.forEach((itemText, index) => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            const text = document.createElement('span');
            label.className = 'department-checklist-item';
            checkbox.type = 'checkbox';
            checkbox.checked = Boolean(checklistState[index]);
            label.classList.toggle('is-complete', checkbox.checked);
            text.textContent = itemText;
            checkbox.addEventListener('change', () => {
                checklistState[index] = checkbox.checked;
                label.classList.toggle('is-complete', checkbox.checked);
                scheduleSave();
            });
            label.append(checkbox, text);
            departmentWorkspaceChecklist.append(label);
        });
        updateDepartmentWorkspaceLive();
    };

    const openDepartmentWorkspace = (agentId) => {
        const agent = getAgent(agentId);
        if (!agent) return;

        closeOfficeControls();
        closePanel();
        closeTeamChat();
        closeStudioDashboard();
        closeDeliverablesLibrary();
        closeProjectBoard();
        closeAutomationCenter();
        closeStudioTimeline();
        closeBridge();
        selectedWorkspaceAgentId = agentId;
        renderDepartmentWorkspace();
        departmentWorkspace.classList.add('is-open');
        departmentWorkspace.setAttribute('aria-hidden', 'false');
    };

    const saveDepartmentNotes = () => {
        const agent = getAgent(selectedWorkspaceAgentId);
        if (!agent) return;

        departmentWorkspaceState.notes[agent.id] = departmentWorkspaceNotes.value;
        addActivity(`${DEPARTMENT_NAMES[agent.id]} 備註已保存`);
        showToast('Department notes saved');
    };

    const completeDepartmentTask = () => {
        const agent = getAgent(selectedWorkspaceAgentId);
        if (!agent) return;

        completeTask(agent);
        departmentWorkspaceState.checklist[agent.id] = (DEPARTMENT_CHECKLISTS[agent.id] || []).map(() => false);
        renderDepartmentWorkspace();
        showToast(`${agent.name} task completed`);
    };

    const clampDashboardPosition = (position) => ({
        x: Math.max(8, Math.min(STAGE_WIDTH - DASHBOARD_WIDTH - 8, position.x)),
        y: Math.max(68, Math.min(STAGE_HEIGHT - DASHBOARD_HEIGHT - 8, position.y))
    });

    const applyDashboardPosition = () => {
        dashboardPosition = clampDashboardPosition(dashboardPosition);
        studioDashboard.style.left = `${Math.round(dashboardPosition.x)}px`;
        studioDashboard.style.top = `${Math.round(dashboardPosition.y)}px`;
    };

    const startDashboardDrag = (event) => {
        if (event.button !== 0 || event.target.closest('button')) return;

        const stageRect = stage.getBoundingClientRect();
        dashboardDrag = {
            startClientX: event.clientX,
            startClientY: event.clientY,
            startX: dashboardPosition.x,
            startY: dashboardPosition.y,
            scaleX: stageRect.width / STAGE_WIDTH,
            scaleY: stageRect.height / STAGE_HEIGHT
        };
        studioDashboard.classList.add('is-dragging');
        event.preventDefault();
    };

    const moveDashboardDrag = (event) => {
        if (!dashboardDrag) return;

        dashboardPosition = {
            x: dashboardDrag.startX + (event.clientX - dashboardDrag.startClientX) / dashboardDrag.scaleX,
            y: dashboardDrag.startY + (event.clientY - dashboardDrag.startClientY) / dashboardDrag.scaleY
        };
        applyDashboardPosition();
        event.preventDefault();
    };

    const endDashboardDrag = () => {
        if (!dashboardDrag) return;
        dashboardDrag = null;
        studioDashboard.classList.remove('is-dragging');
        scheduleSave();
    };

    const closeStudioDashboard = () => {
        studioDashboard.classList.remove('is-open');
        studioDashboard.setAttribute('aria-hidden', 'true');
    };

    const renderStudioDashboard = () => {
        const progressValues = agents.map((agent) => progressByAgent.get(agent.id) || 0);
        const overallProgress = progressValues.length
            ? Math.round(progressValues.reduce((sum, value) => sum + value, 0) / progressValues.length)
            : 0;
        studioDashboardProgress.style.width = `${overallProgress}%`;
        studioDashboardProgressLabel.textContent = `${overallProgress}%`;
        studioDashboardOnline.textContent = String(agents.length - pausedAgents.size);
        studioDashboardResults.textContent = String(savedResults.length);
        studioDashboardTasks.textContent = String(agents.length);
        studioDashboardOverdue.textContent = String(getOverdueTaskCount());
        dashboardMeetingButton.textContent = meetingActive ? 'End Team Meeting' : 'Start Team Meeting';

        studioDashboardAgents.replaceChildren();
        agents.forEach((agent) => {
            const card = document.createElement('button');
            const avatar = document.createElement('span');
            const copy = document.createElement('span');
            const name = document.createElement('strong');
            const task = document.createElement('small');
            const progress = document.createElement('span');
            const initials = agent.name.split(' ').map((part) => part[0]).join('').slice(0, 2);

            card.type = 'button';
            card.className = 'studio-agent-card';
            card.dataset.dashboardAgent = agent.id;
            avatar.className = 'studio-agent-card-avatar';
            copy.className = 'studio-agent-card-copy';
            progress.className = 'studio-agent-card-progress';
            avatar.textContent = initials;
            name.textContent = `${agent.name} · ${getAgentStatus(agent.id)}`;
            task.textContent = getCurrentTask(agent);
            progress.textContent = `${Math.round(progressByAgent.get(agent.id) || 0)}%`;
            copy.append(name, task);
            card.append(avatar, copy, progress);
            studioDashboardAgents.append(card);
        });

        studioDashboardActivity.replaceChildren();
        activityEntries.slice(0, 4).forEach((entry) => {
            const item = document.createElement('p');
            const time = document.createElement('time');
            time.textContent = new Date(entry.createdAt).toLocaleTimeString('zh-TW', {
                hour: '2-digit', minute: '2-digit', hour12: false
            });
            item.append(time, document.createTextNode(entry.message));
            studioDashboardActivity.append(item);
        });
    };

    const openStudioDashboard = () => {
        closeOfficeControls();
        closePanel();
        closeTeamChat();
        closeDepartmentWorkspace();
        closeDeliverablesLibrary();
        closeProjectBoard();
        closeAutomationCenter();
        closeStudioTimeline();
        closeBridge();
        renderStudioDashboard();
        studioDashboard.classList.add('is-open');
        studioDashboard.setAttribute('aria-hidden', 'false');
    };

    const returnToStudioDashboard = () => {
        openStudioDashboard();
        showToast('Back to AI Assistant Hub');
    };

    const copyDailyBrief = async () => {
        const lines = [
            `ReGift AI Studio · Daily Brief · ${new Date().toLocaleDateString('zh-TW')}`,
            '',
            ...agents.map((agent) => (
                `- ${agent.name}｜${getAgentStatus(agent.id)}｜${Math.round(progressByAgent.get(agent.id) || 0)}%｜${getCurrentTask(agent)}`
            )),
            '',
            `Saved results: ${savedResults.length}`,
            `Overdue tasks: ${getOverdueTaskCount()}`,
            `Blocked tasks: ${agents.reduce((sum, agent) => sum + agent.tasks.filter((task) => isProjectTaskBlocked(getProjectTaskKey(agent.id, task))).length, 0)}`,
            `Open milestones: ${studioMilestones.filter((milestone) => !milestone.complete).length}`
        ];
        const brief = lines.join('\n');
        try {
            await navigator.clipboard.writeText(brief);
        } catch (error) {
            const temporaryTextarea = document.createElement('textarea');
            temporaryTextarea.value = brief;
            document.body.append(temporaryTextarea);
            temporaryTextarea.select();
            document.execCommand('copy');
            temporaryTextarea.remove();
        }
        addActivity('Studio Daily Brief 已複製');
        showToast('Daily Brief copied');
    };

    const clampDeliverablesPosition = (position) => ({
        x: Math.max(8, Math.min(STAGE_WIDTH - DELIVERABLES_WIDTH - 8, position.x)),
        y: Math.max(68, Math.min(STAGE_HEIGHT - DELIVERABLES_HEIGHT - 8, position.y))
    });

    const applyDeliverablesPosition = () => {
        deliverablesPosition = clampDeliverablesPosition(deliverablesPosition);
        deliverablesLibrary.style.left = `${Math.round(deliverablesPosition.x)}px`;
        deliverablesLibrary.style.top = `${Math.round(deliverablesPosition.y)}px`;
    };

    const startDeliverablesDrag = (event) => {
        if (event.button !== 0 || event.target.closest('button')) return;
        const stageRect = stage.getBoundingClientRect();
        deliverablesDrag = {
            startClientX: event.clientX,
            startClientY: event.clientY,
            startX: deliverablesPosition.x,
            startY: deliverablesPosition.y,
            scaleX: stageRect.width / STAGE_WIDTH,
            scaleY: stageRect.height / STAGE_HEIGHT
        };
        deliverablesLibrary.classList.add('is-dragging');
        event.preventDefault();
    };

    const moveDeliverablesDrag = (event) => {
        if (!deliverablesDrag) return;
        deliverablesPosition = {
            x: deliverablesDrag.startX + (event.clientX - deliverablesDrag.startClientX) / deliverablesDrag.scaleX,
            y: deliverablesDrag.startY + (event.clientY - deliverablesDrag.startClientY) / deliverablesDrag.scaleY
        };
        applyDeliverablesPosition();
        event.preventDefault();
    };

    const endDeliverablesDrag = () => {
        if (!deliverablesDrag) return;
        deliverablesDrag = null;
        deliverablesLibrary.classList.remove('is-dragging');
        scheduleSave();
    };

    const closeDeliverablesLibrary = () => {
        deliverablesLibrary.classList.remove('is-open');
        deliverablesLibrary.setAttribute('aria-hidden', 'true');
    };

    const getFilteredDeliverables = () => {
        const filter = deliverablesFilter.value;
        const search = deliverablesSearch.value.trim().toLocaleLowerCase('zh-TW');
        return savedResults.filter((entry) => {
            const matchesAgent = filter === 'all' || entry.agentId === filter;
            const searchable = `${entry.agentName || ''} ${entry.task || ''} ${entry.content || ''}`.toLocaleLowerCase('zh-TW');
            return matchesAgent && (!search || searchable.includes(search));
        });
    };

    const renderDeliverablesLibrary = () => {
        const filteredResults = getFilteredDeliverables();
        if (!filteredResults.some((entry) => entry.id === selectedDeliverableId)) {
            selectedDeliverableId = filteredResults[0]?.id || null;
        }
        deliverablesCount.textContent = `${filteredResults.length} Results`;
        deliverablesList.replaceChildren();

        filteredResults.forEach((entry) => {
            const item = document.createElement('button');
            const task = document.createElement('strong');
            const agent = document.createElement('span');
            const time = document.createElement('time');
            item.type = 'button';
            item.className = 'deliverable-list-item';
            item.classList.toggle('is-selected', entry.id === selectedDeliverableId);
            item.dataset.deliverableId = entry.id;
            task.textContent = entry.task;
            agent.textContent = entry.agentName || getAgent(entry.agentId)?.name || 'AI Agent';
            time.textContent = new Date(entry.savedAt).toLocaleString('zh-TW', { hour12: false });
            item.append(task, agent, time);
            deliverablesList.append(item);
        });

        const selected = savedResults.find((entry) => entry.id === selectedDeliverableId);
        const hasSelected = Boolean(selected);
        deliverablesEmpty.hidden = hasSelected;
        deliverablesDetail.hidden = !hasSelected;
        copyDeliverableButton.disabled = !hasSelected;
        downloadDeliverableButton.disabled = !hasSelected;
        deleteDeliverableButton.disabled = !hasSelected;
        if (!selected) return;

        deliverablesDetailAgent.textContent = selected.agentName || getAgent(selected.agentId)?.name || 'AI Agent';
        deliverablesDetailTask.textContent = selected.task;
        deliverablesDetailTime.textContent = new Date(selected.savedAt).toLocaleString('zh-TW', { hour12: false });
        deliverablesDetailContent.textContent = selected.content;
    };

    const openDeliverablesLibrary = () => {
        closePanel();
        closeTeamChat();
        closeDepartmentWorkspace();
        closeStudioDashboard();
        closeProjectBoard();
        closeAutomationCenter();
        closeStudioTimeline();
        closeBridge();
        renderDeliverablesLibrary();
        deliverablesLibrary.classList.add('is-open');
        deliverablesLibrary.setAttribute('aria-hidden', 'false');
    };

    const getSelectedDeliverable = () => savedResults.find((entry) => entry.id === selectedDeliverableId);

    const copySelectedDeliverable = async () => {
        const selected = getSelectedDeliverable();
        if (!selected) return;
        try {
            await navigator.clipboard.writeText(selected.content);
        } catch (error) {
            const temporaryTextarea = document.createElement('textarea');
            temporaryTextarea.value = selected.content;
            document.body.append(temporaryTextarea);
            temporaryTextarea.select();
            document.execCommand('copy');
            temporaryTextarea.remove();
        }
        showToast('Result copied');
    };

    const downloadSelectedDeliverable = () => {
        const selected = getSelectedDeliverable();
        if (!selected) return;
        const blob = new Blob([`${selected.task}\n\n${selected.content}`], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const safeName = selected.task.replace(/[^a-zA-Z0-9\u4e00-\u9fff]+/g, '-').slice(0, 36) || 'ReGift-result';
        link.href = url;
        link.download = `${safeName}.txt`;
        document.body.append(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        showToast('Result downloaded');
    };

    const deleteSelectedDeliverable = () => {
        const selected = getSelectedDeliverable();
        if (!selected || !window.confirm(`確定刪除「${selected.task}」？`)) return;
        savedResults = savedResults.filter((entry) => entry.id !== selected.id);
        selectedDeliverableId = null;
        addActivity(`已刪除成果：「${selected.task}」`);
        renderDeliverablesLibrary();
        scheduleSave();
    };

    const getProjectTaskKey = (agentId, task) => `${encodeURIComponent(agentId)}::${encodeURIComponent(task)}`;

    const parseProjectTaskKey = (key) => {
        const [agentId, task] = String(key).split('::');
        return { agentId: decodeURIComponent(agentId || ''), task: decodeURIComponent(task || '') };
    };

    const clampProjectBoardPosition = (position) => ({
        x: Math.max(8, Math.min(STAGE_WIDTH - PROJECT_BOARD_WIDTH - 8, position.x)),
        y: Math.max(68, Math.min(STAGE_HEIGHT - PROJECT_BOARD_HEIGHT - 8, position.y))
    });

    const applyProjectBoardPosition = () => {
        projectBoardPosition = clampProjectBoardPosition(projectBoardPosition);
        projectBoard.style.left = `${Math.round(projectBoardPosition.x)}px`;
        projectBoard.style.top = `${Math.round(projectBoardPosition.y)}px`;
    };

    const startProjectBoardDrag = (event) => {
        if (event.button !== 0 || event.target.closest('button')) return;
        const stageRect = stage.getBoundingClientRect();
        projectBoardDrag = {
            startClientX: event.clientX,
            startClientY: event.clientY,
            startX: projectBoardPosition.x,
            startY: projectBoardPosition.y,
            scaleX: stageRect.width / STAGE_WIDTH,
            scaleY: stageRect.height / STAGE_HEIGHT
        };
        projectBoard.classList.add('is-dragging');
        event.preventDefault();
    };

    const moveProjectBoardDrag = (event) => {
        if (!projectBoardDrag) return;
        projectBoardPosition = {
            x: projectBoardDrag.startX + (event.clientX - projectBoardDrag.startClientX) / projectBoardDrag.scaleX,
            y: projectBoardDrag.startY + (event.clientY - projectBoardDrag.startClientY) / projectBoardDrag.scaleY
        };
        applyProjectBoardPosition();
        event.preventDefault();
    };

    const endProjectBoardDrag = () => {
        if (!projectBoardDrag) return;
        projectBoardDrag = null;
        projectBoard.classList.remove('is-dragging');
        scheduleSave();
    };

    const closeProjectBoard = () => {
        selectedProjectTaskKey = null;
        projectTaskInspector.classList.remove('is-open');
        projectTaskInspector.setAttribute('aria-hidden', 'true');
        projectBoard.classList.remove('is-open');
        projectBoard.setAttribute('aria-hidden', 'true');
    };

    const getProjectTaskStatus = (agent, task) => {
        const key = getProjectTaskKey(agent.id, task);
        return projectTaskStates[key] || (getCurrentTask(agent) === task ? 'working' : 'queue');
    };

    const getProjectTaskMetadata = (taskKey) => projectTaskMetadata[taskKey] || {
        priority: 'normal', dueDate: '', createdAt: ''
    };

    const getDeadlineState = (taskKey) => {
        const metadata = getProjectTaskMetadata(taskKey);
        if (!metadata.dueDate) return 'none';
        const now = new Date();
        const due = new Date(`${metadata.dueDate}T23:59:59`);
        if (now > due) return 'overdue';
        const daysRemaining = Math.ceil((due - now) / 86400000);
        return daysRemaining <= 2 ? 'due-soon' : 'scheduled';
    };

    const getOverdueTaskCount = () => agents.reduce((total, agent) => (
        total + agent.tasks.filter((task) => {
            const key = getProjectTaskKey(agent.id, task);
            return getProjectTaskStatus(agent, task) !== 'done' && getDeadlineState(key) === 'overdue';
        }).length
    ), 0);

    const closeProjectTaskInspector = () => {
        selectedProjectTaskKey = null;
        projectTaskInspector.classList.remove('is-open');
        projectTaskInspector.setAttribute('aria-hidden', 'true');
    };

    const openProjectTaskInspector = (taskKey) => {
        const { agentId, task } = parseProjectTaskKey(taskKey);
        const agent = getAgent(agentId);
        if (!agent || !agent.tasks.includes(task)) return;
        const metadata = getProjectTaskMetadata(taskKey);
        selectedProjectTaskKey = taskKey;
        projectInspectorTitle.textContent = task;
        projectInspectorAgent.textContent = `${agent.name} · ${agent.role || 'AI Agent'}`;
        projectInspectorStatus.value = getProjectTaskStatus(agent, task);
        projectInspectorPriority.value = metadata.priority || 'normal';
        projectInspectorDueDate.value = metadata.dueDate || '';
        projectInspectorDependency.replaceChildren();
        const noDependency = document.createElement('option');
        noDependency.value = '';
        noDependency.textContent = 'No Dependency';
        projectInspectorDependency.append(noDependency);
        agents.forEach((candidateAgent) => candidateAgent.tasks.forEach((candidateTask) => {
            const candidateKey = getProjectTaskKey(candidateAgent.id, candidateTask);
            if (candidateKey === taskKey) return;
            const option = document.createElement('option');
            option.value = candidateKey;
            option.textContent = `${candidateAgent.name} · ${candidateTask}`;
            projectInspectorDependency.append(option);
        }));
        projectInspectorDependency.value = metadata.dependsOn || '';
        projectInspectorNotes.value = metadata.notes || '';
        projectTaskInspector.classList.add('is-open');
        projectTaskInspector.setAttribute('aria-hidden', 'false');
    };

    const saveProjectTaskInspector = (event) => {
        event.preventDefault();
        if (!selectedProjectTaskKey) return;
        const taskKey = selectedProjectTaskKey;
        const { agentId, task } = parseProjectTaskKey(taskKey);
        const agent = getAgent(agentId);
        if (!agent || !agent.tasks.includes(task)) {
            closeProjectTaskInspector();
            return;
        }
        const previousStatus = getProjectTaskStatus(agent, task);
        projectTaskMetadata[taskKey] = {
            ...getProjectTaskMetadata(taskKey),
            priority: projectInspectorPriority.value,
            dueDate: projectInspectorDueDate.value,
            dependsOn: projectInspectorDependency.value,
            notes: projectInspectorNotes.value.trim(),
            updatedAt: new Date().toISOString()
        };
        const nextStatus = projectInspectorStatus.value;
        if (nextStatus !== previousStatus) moveProjectTaskToStatus(taskKey, nextStatus);
        else renderProjectBoard();
        addActivity(`Task Inspector 已更新 ${agent.name} 任務：「${task}」`);
        closeProjectTaskInspector();
        scheduleSave();
        showToast('Task changes saved');
    };

    const renderProjectBoard = () => {
        const grouped = { queue: [], working: [], review: [], done: [] };
        const agentFilter = projectFilterAgent.value;
        const priorityFilter = projectFilterPriority.value;
        const search = projectBoardSearch.value.trim().toLocaleLowerCase('zh-TW');
        agents.forEach((agent) => {
            agent.tasks.forEach((task) => {
                const key = getProjectTaskKey(agent.id, task);
                const metadata = getProjectTaskMetadata(key);
                if (agentFilter !== 'all' && agent.id !== agentFilter) return;
                if (priorityFilter !== 'all' && metadata.priority !== priorityFilter) return;
                if (search && !`${agent.name} ${task}`.toLocaleLowerCase('zh-TW').includes(search)) return;
                const status = getProjectTaskStatus(agent, task);
                (grouped[status] || grouped.queue).push({ agent, task });
            });
        });

        Object.entries(projectBoardLists).forEach(([status, list]) => {
            list.replaceChildren();
            projectBoardCounts[status].textContent = String(grouped[status].length);
            if (grouped[status].length === 0) {
                const empty = document.createElement('p');
                empty.className = 'project-board-empty';
                empty.textContent = 'No tasks';
                list.append(empty);
                return;
            }

            grouped[status].forEach(({ agent, task }) => {
                const card = document.createElement('article');
                const title = document.createElement('strong');
                const footer = document.createElement('footer');
                const metadataRow = document.createElement('div');
                const agentName = document.createElement('span');
                const editButton = document.createElement('button');
                const progress = document.createElement('span');
                const isCurrent = getCurrentTask(agent) === task;
                const taskKey = getProjectTaskKey(agent.id, task);
                const metadata = getProjectTaskMetadata(taskKey);
                const deadlineState = getDeadlineState(taskKey);
                card.className = 'project-card';
                card.draggable = true;
                card.dataset.projectTaskKey = taskKey;
                title.textContent = task;
                metadataRow.className = 'project-card-meta';
                const priorityBadge = document.createElement('span');
                priorityBadge.className = `project-card-badge priority-${metadata.priority}`;
                priorityBadge.textContent = metadata.priority;
                metadataRow.append(priorityBadge);
                if (metadata.dueDate) {
                    const dueBadge = document.createElement('span');
                    dueBadge.className = 'project-card-badge';
                    if (deadlineState === 'overdue') dueBadge.classList.add('is-overdue');
                    if (deadlineState === 'due-soon') dueBadge.classList.add('is-due-soon');
                    dueBadge.textContent = `${deadlineState === 'overdue' ? 'Overdue' : 'Due'} ${metadata.dueDate}`;
                    metadataRow.append(dueBadge);
                }
                if (metadata.notes) {
                    const notesBadge = document.createElement('span');
                    notesBadge.className = 'project-card-badge';
                    notesBadge.textContent = 'Notes';
                    metadataRow.append(notesBadge);
                }
                if (isProjectTaskBlocked(taskKey)) {
                    const blockedBadge = document.createElement('span');
                    blockedBadge.className = 'project-card-badge is-overdue';
                    blockedBadge.textContent = 'Blocked';
                    metadataRow.append(blockedBadge);
                }
                agentName.className = 'project-card-agent';
                editButton.type = 'button';
                editButton.className = 'project-card-edit';
                editButton.dataset.editProjectTask = taskKey;
                editButton.draggable = false;
                editButton.textContent = 'Edit';
                progress.className = 'project-card-progress';
                agentName.textContent = agent.name;
                progress.textContent = isCurrent ? `${Math.round(progressByAgent.get(agent.id) || 0)}%` : status.toUpperCase();
                footer.append(agentName, editButton, progress);
                card.append(title, metadataRow, footer);
                list.append(card);
            });
        });
    };

    const openProjectBoard = () => {
        closePanel();
        closeTeamChat();
        closeDepartmentWorkspace();
        closeStudioDashboard();
        closeDeliverablesLibrary();
        closeAutomationCenter();
        closeStudioTimeline();
        closeBridge();
        renderProjectBoard();
        projectBoard.classList.add('is-open');
        projectBoard.setAttribute('aria-hidden', 'false');
    };

    const moveProjectTaskToStatus = (taskKey, nextStatus) => {
        const { agentId, task } = parseProjectTaskKey(taskKey);
        const agent = getAgent(agentId);
        const taskIndex = agent?.tasks.indexOf(task) ?? -1;
        if (!agent || taskIndex < 0) return;

        const previousCurrent = getCurrentTask(agent);
        if (nextStatus === 'working') {
            const previousKey = getProjectTaskKey(agent.id, previousCurrent);
            if (previousCurrent !== task && projectTaskStates[previousKey] !== 'done') {
                projectTaskStates[previousKey] = 'queue';
            }
            taskIndexByAgent.set(agent.id, taskIndex);
            progressByAgent.set(agent.id, 0);
            pausedAgents.delete(agent.id);
            document.querySelector(`#${agent.id}`)?.classList.remove('is-paused');
            projectTaskStates[taskKey] = 'working';
            renderWorldTask(agent);
            updateOnlineCount();
            addActivity(`${agent.name} 開始看板任務：「${task}」`);
        } else if (nextStatus === 'done' && previousCurrent === task) {
            completeTask(agent);
        } else {
            projectTaskStates[taskKey] = nextStatus;
            addActivity(`看板任務移至 ${nextStatus.toUpperCase()}：「${task}」`);
        }
        renderProjectBoard();
        if (selectedAgentId === agent.id) renderPanel();
        if (selectedWorkspaceAgentId === agent.id) renderDepartmentWorkspace();
        scheduleSave();
    };

    const addProjectBoardTask = (event) => {
        event.preventDefault();
        const agent = getAgent(projectBoardAgent.value);
        const task = projectBoardTaskInput.value.trim();
        if (!agent || !task) return;
        const previousCurrent = getCurrentTask(agent);
        projectTaskStates[getProjectTaskKey(agent.id, previousCurrent)] = 'queue';
        agent.tasks.unshift(task);
        taskIndexByAgent.set(agent.id, 0);
        progressByAgent.set(agent.id, 0);
        const newTaskKey = getProjectTaskKey(agent.id, task);
        projectTaskStates[newTaskKey] = 'working';
        projectTaskMetadata[newTaskKey] = {
            priority: projectBoardPriority.value,
            dueDate: projectBoardDueDate.value,
            createdAt: new Date().toISOString()
        };
        pausedAgents.delete(agent.id);
        document.querySelector(`#${agent.id}`)?.classList.remove('is-paused');
        projectBoardTaskInput.value = '';
        projectBoardPriority.value = 'normal';
        projectBoardDueDate.value = '';
        renderWorldTask(agent);
        updateOnlineCount();
        addActivity(`Project Board 新增 ${agent.name} 任務：「${task}」`);
        addChatMessage(agent.id, `收到看板新任務，我現在開始處理「${task}」。`);
        renderProjectBoard();
        scheduleSave();
    };

    const exportProjectBoardCsv = () => {
        const escapeCsv = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;
        const rows = [['Department', 'Task', 'Status', 'Progress', 'Priority', 'Due Date', 'Blocked', 'Depends On', 'Notes']];
        agents.forEach((agent) => {
            agent.tasks.forEach((task) => {
                const key = getProjectTaskKey(agent.id, task);
                const metadata = getProjectTaskMetadata(key);
                rows.push([
                    agent.name,
                    task,
                    getProjectTaskStatus(agent, task),
                    getCurrentTask(agent) === task ? Math.round(progressByAgent.get(agent.id) || 0) : '',
                    metadata.priority,
                    metadata.dueDate,
                    isProjectTaskBlocked(key) ? 'Yes' : 'No',
                    metadata.dependsOn ? parseProjectTaskKey(metadata.dependsOn).task : '',
                    metadata.notes || ''
                ]);
            });
        });
        const csv = `\uFEFF${rows.map((row) => row.map(escapeCsv).join(',')).join('\n')}`;
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `ReGift-Project-Board-${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.append(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        addActivity('Studio Project Board 已匯出 CSV');
        showToast('Project Board CSV exported');
    };

    const checkDeadlineAlerts = () => {
        const now = new Date();
        const today = [
            now.getFullYear(),
            String(now.getMonth() + 1).padStart(2, '0'),
            String(now.getDate()).padStart(2, '0')
        ].join('-');
        agents.forEach((agent) => {
            agent.tasks.forEach((task) => {
                const key = getProjectTaskKey(agent.id, task);
                if (getProjectTaskStatus(agent, task) === 'done') return;
                const deadlineState = getDeadlineState(key);
                if (!['due-soon', 'overdue'].includes(deadlineState)) return;
                const alertKey = `${key}:${deadlineState}:${today}`;
                if (deadlineAlerts[alertKey]) return;
                deadlineAlerts[alertKey] = true;
                const metadata = getProjectTaskMetadata(key);
                addChatMessage(
                    'system',
                    `${deadlineState === 'overdue' ? '逾期提醒' : '即將到期'} · ${agent.name}「${task}」· ${metadata.dueDate}`,
                    { system: true }
                );
                sendStudioNotification(
                    deadlineState === 'overdue' ? 'ReGift Task Overdue' : 'ReGift Task Due Soon',
                    `${agent.name} · ${task} · ${metadata.dueDate}`
                );
                addActivity(`${agent.name} 任務${deadlineState === 'overdue' ? '已逾期' : '即將到期'}：「${task}」`);
            });
        });
        if (projectBoard.classList.contains('is-open')) renderProjectBoard();
        if (studioDashboard.classList.contains('is-open')) renderStudioDashboard();
        checkMilestoneNotifications();
    };

    const startDeadlineMonitor = () => {
        if (deadlineTimer) window.clearInterval(deadlineTimer);
        checkDeadlineAlerts();
        deadlineTimer = window.setInterval(checkDeadlineAlerts, 60000);
    };

    const clampAutomationPosition = (position) => ({
        x: Math.max(8, Math.min(STAGE_WIDTH - AUTOMATION_CENTER_WIDTH - 8, position.x)),
        y: Math.max(68, Math.min(STAGE_HEIGHT - AUTOMATION_CENTER_HEIGHT - 8, position.y))
    });

    const applyAutomationPosition = () => {
        automationPosition = clampAutomationPosition(automationPosition);
        automationCenter.style.left = `${Math.round(automationPosition.x)}px`;
        automationCenter.style.top = `${Math.round(automationPosition.y)}px`;
    };

    const startAutomationDrag = (event) => {
        if (event.button !== 0 || event.target.closest('button')) return;
        const stageRect = stage.getBoundingClientRect();
        automationDrag = {
            startClientX: event.clientX,
            startClientY: event.clientY,
            startX: automationPosition.x,
            startY: automationPosition.y,
            scaleX: stageRect.width / STAGE_WIDTH,
            scaleY: stageRect.height / STAGE_HEIGHT
        };
        automationCenter.classList.add('is-dragging');
        event.preventDefault();
    };

    const moveAutomationDrag = (event) => {
        if (!automationDrag) return;
        automationPosition = {
            x: automationDrag.startX + (event.clientX - automationDrag.startClientX) / automationDrag.scaleX,
            y: automationDrag.startY + (event.clientY - automationDrag.startClientY) / automationDrag.scaleY
        };
        applyAutomationPosition();
        event.preventDefault();
    };

    const endAutomationDrag = () => {
        if (!automationDrag) return;
        automationDrag = null;
        automationCenter.classList.remove('is-dragging');
        scheduleSave();
    };

    const closeAutomationCenter = () => {
        automationCenter.classList.remove('is-open');
        automationCenter.setAttribute('aria-hidden', 'true');
    };

    const getLocalDateString = (date = new Date()) => [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0')
    ].join('-');

    const getAutomationWorkloads = () => agents.map((agent) => ({
        agent,
        count: agent.tasks.filter((task) => getProjectTaskStatus(agent, task) !== 'done').length
    }));

    const getLeastLoadedAgent = () => getAutomationWorkloads()
        .sort((left, right) => left.count - right.count)[0]?.agent || agents[0];

    const calculateNextAutomationRun = (frequency, time, fromDate = new Date()) => {
        const [hours, minutes] = String(time || '09:00').split(':').map(Number);
        const next = new Date(fromDate);
        next.setSeconds(0, 0);
        next.setHours(Number.isFinite(hours) ? hours : 9, Number.isFinite(minutes) ? minutes : 0, 0, 0);
        if (next <= fromDate) {
            if (frequency === 'weekly') next.setDate(next.getDate() + 7);
            else if (frequency === 'monthly') next.setMonth(next.getMonth() + 1);
            else next.setDate(next.getDate() + 1);
        }
        return next.toISOString();
    };

    const advanceAutomationRule = (rule) => {
        if (rule.frequency === 'once') {
            rule.enabled = false;
            rule.nextRun = null;
            return;
        }
        const base = rule.nextRun ? new Date(rule.nextRun) : new Date();
        if (rule.frequency === 'weekly') base.setDate(base.getDate() + 7);
        else if (rule.frequency === 'monthly') base.setMonth(base.getMonth() + 1);
        else base.setDate(base.getDate() + 1);
        while (base <= new Date()) {
            if (rule.frequency === 'weekly') base.setDate(base.getDate() + 7);
            else if (rule.frequency === 'monthly') base.setMonth(base.getMonth() + 1);
            else base.setDate(base.getDate() + 1);
        }
        rule.nextRun = base.toISOString();
    };

    const addAutomationLog = (message) => {
        automationLog.unshift({
            id: `automation-log-${Date.now()}-${Math.random().toString(16).slice(2)}`,
            message,
            createdAt: new Date().toISOString()
        });
        automationLog = automationLog.slice(0, 40);
    };

    const formatAutomationRun = (value) => {
        if (!value) return 'Completed';
        return new Date(value).toLocaleString('zh-TW', {
            month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false
        });
    };

    const renderAutomationCenter = () => {
        const enabledRules = automationRules.filter((rule) => rule.enabled);
        const nextRule = enabledRules
            .filter((rule) => rule.nextRun)
            .sort((left, right) => new Date(left.nextRun) - new Date(right.nextRun))[0];
        automationActiveCount.textContent = String(enabledRules.length);
        automationCreatedCount.textContent = String(automationRules.reduce((sum, rule) => sum + (rule.createdTasks || 0), 0));
        automationNextRun.textContent = nextRule ? formatAutomationRun(nextRule.nextRun) : '—';
        toggleAutomationEngineButton.textContent = automationEnabled ? 'Pause Engine' : 'Resume Engine';
        toggleAutomationEngineButton.classList.toggle('is-paused', !automationEnabled);

        automationRulesList.replaceChildren();
        if (automationRules.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'automation-empty';
            empty.textContent = '尚未建立排程。可使用上方表單新增第一個自動工作流程。';
            automationRulesList.append(empty);
        }
        automationRules.forEach((rule) => {
            const item = document.createElement('article');
            const copy = document.createElement('div');
            const title = document.createElement('strong');
            const detail = document.createElement('small');
            const actions = document.createElement('div');
            const run = document.createElement('button');
            const toggle = document.createElement('button');
            const remove = document.createElement('button');
            const agentName = rule.agentId === 'auto' ? 'Auto · Least Workload' : (getAgent(rule.agentId)?.name || 'Unknown');
            item.className = 'automation-rule';
            item.classList.toggle('is-disabled', !rule.enabled);
            item.dataset.automationRuleId = rule.id;
            copy.className = 'automation-rule-copy';
            actions.className = 'automation-rule-actions';
            title.textContent = rule.title;
            detail.textContent = `${agentName} · ${rule.frequency.toUpperCase()} · ${rule.priority} · Next ${formatAutomationRun(rule.nextRun)}`;
            run.type = toggle.type = remove.type = 'button';
            run.dataset.automationAction = 'run';
            toggle.dataset.automationAction = 'toggle';
            remove.dataset.automationAction = 'delete';
            run.textContent = 'Run';
            toggle.textContent = rule.enabled ? 'Pause' : 'Enable';
            remove.textContent = 'Delete';
            remove.className = 'automation-delete';
            copy.append(title, detail);
            actions.append(run, toggle, remove);
            item.append(copy, actions);
            automationRulesList.append(item);
        });

        const workloads = getAutomationWorkloads();
        const maxWorkload = Math.max(1, ...workloads.map((entry) => entry.count));
        automationWorkload.replaceChildren();
        workloads.forEach(({ agent, count }) => {
            const row = document.createElement('div');
            const name = document.createElement('span');
            const track = document.createElement('span');
            const fill = document.createElement('i');
            const label = document.createElement('b');
            row.className = 'workload-row';
            row.classList.toggle('is-heavy', count >= 6);
            name.textContent = agent.name.replace(' Agent', '');
            track.className = 'workload-track';
            fill.style.width = `${Math.max(8, Math.round((count / maxWorkload) * 100))}%`;
            label.textContent = `${count} ${count >= 6 ? 'Heavy' : count >= 4 ? 'Busy' : 'Ready'}`;
            track.append(fill);
            row.append(name, track, label);
            automationWorkload.append(row);
        });
        const suggestion = document.createElement('p');
        suggestion.className = 'automation-suggestion';
        suggestion.textContent = `Smart suggestion · 下一個跨部門任務可優先交給 ${getLeastLoadedAgent()?.name || '目前空閒部門'}。`;
        automationWorkload.append(suggestion);

        automationLogElement.replaceChildren();
        if (automationLog.length === 0) {
            const empty = document.createElement('p');
            empty.textContent = '尚無自動執行紀錄。';
            automationLogElement.append(empty);
        }
        automationLog.slice(0, 12).forEach((entry) => {
            const item = document.createElement('p');
            const time = document.createElement('time');
            time.textContent = new Date(entry.createdAt).toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false });
            item.append(time, document.createTextNode(entry.message));
            automationLogElement.append(item);
        });
    };

    const openAutomationCenter = () => {
        closePanel();
        closeTeamChat();
        closeDepartmentWorkspace();
        closeStudioDashboard();
        closeDeliverablesLibrary();
        closeProjectBoard();
        closeStudioTimeline();
        closeBridge();
        renderAutomationCenter();
        automationCenter.classList.add('is-open');
        automationCenter.setAttribute('aria-hidden', 'false');
    };

    const executeAutomationRule = (rule, advanceSchedule = false) => {
        if (!rule) return false;
        const agent = rule.agentId === 'auto' ? getLeastLoadedAgent() : getAgent(rule.agentId);
        if (!agent) return false;
        const task = `${rule.title} · ${new Date().toLocaleDateString('zh-TW', { month: 'numeric', day: 'numeric' })}`;
        if (agent.tasks.includes(task)) {
            addAutomationLog(`略過重複任務 · ${agent.name}「${task}」`);
            if (advanceSchedule) advanceAutomationRule(rule);
            return false;
        }
        agent.tasks.push(task);
        const key = getProjectTaskKey(agent.id, task);
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + Number(rule.dueOffset || 0));
        projectTaskStates[key] = 'queue';
        projectTaskMetadata[key] = {
            priority: rule.priority || 'normal',
            dueDate: getLocalDateString(dueDate),
            createdAt: new Date().toISOString(),
            automationRuleId: rule.id
        };
        rule.lastRun = new Date().toISOString();
        rule.createdTasks = (rule.createdTasks || 0) + 1;
        if (advanceSchedule) advanceAutomationRule(rule);
        const message = `Workflow 已建立 ${agent.name} 任務：「${task}」`;
        addAutomationLog(message);
        addActivity(message);
        addChatMessage('system', `${message} · Due ${projectTaskMetadata[key].dueDate}`, { system: true });
        scheduleSave();
        return true;
    };

    const runDueAutomations = (notifyWhenEmpty = false) => {
        if (!automationEnabled) {
            if (notifyWhenEmpty) showToast('Automation engine is paused');
            return 0;
        }
        const now = new Date();
        let executed = 0;
        automationRules.forEach((rule) => {
            if (!rule.enabled || !rule.nextRun || new Date(rule.nextRun) > now) return;
            if (executeAutomationRule(rule, true)) executed += 1;
        });
        if (notifyWhenEmpty) showToast(executed ? `${executed} workflow task created` : 'No workflows are due');
        if (automationCenter.classList.contains('is-open')) renderAutomationCenter();
        if (projectBoard.classList.contains('is-open')) renderProjectBoard();
        if (studioDashboard.classList.contains('is-open')) renderStudioDashboard();
        scheduleSave();
        return executed;
    };

    const addAutomationRule = (event) => {
        event.preventDefault();
        const title = automationTaskTitle.value.trim();
        if (!title) return;
        const rule = {
            id: `automation-${Date.now()}-${Math.random().toString(16).slice(2)}`,
            title,
            agentId: automationAgent.value,
            frequency: automationFrequency.value,
            time: automationTime.value || '09:00',
            dueOffset: Number(automationDueOffset.value || 0),
            priority: automationPriority.value,
            enabled: true,
            createdAt: new Date().toISOString(),
            lastRun: null,
            nextRun: calculateNextAutomationRun(automationFrequency.value, automationTime.value),
            createdTasks: 0
        };
        automationRules.unshift(rule);
        automationTaskTitle.value = '';
        addAutomationLog(`新增 ${rule.frequency} 規則：「${rule.title}」`);
        addActivity(`Smart Workflow 新增排程：「${rule.title}」`);
        renderAutomationCenter();
        scheduleSave();
    };

    const handleAutomationRuleAction = (event) => {
        const button = event.target.closest('[data-automation-action]');
        const item = event.target.closest('[data-automation-rule-id]');
        if (!button || !item) return;
        const rule = automationRules.find((entry) => entry.id === item.dataset.automationRuleId);
        if (!rule) return;
        const action = button.dataset.automationAction;
        if (action === 'run') {
            const created = executeAutomationRule(rule, false);
            showToast(created ? 'Workflow task created' : 'Today’s task already exists');
        } else if (action === 'toggle') {
            rule.enabled = !rule.enabled;
            if (rule.enabled && !rule.nextRun) rule.nextRun = calculateNextAutomationRun(rule.frequency, rule.time);
            addAutomationLog(`${rule.enabled ? '啟用' : '暫停'}規則：「${rule.title}」`);
        } else if (action === 'delete') {
            automationRules = automationRules.filter((entry) => entry.id !== rule.id);
            addAutomationLog(`刪除規則：「${rule.title}」`);
        }
        renderAutomationCenter();
        scheduleSave();
    };

    const toggleAutomationEngine = () => {
        automationEnabled = !automationEnabled;
        addAutomationLog(`Workflow Engine 已${automationEnabled ? '恢復' : '暫停'}`);
        addChatMessage('system', `Smart Workflow Engine 已${automationEnabled ? '恢復運作' : '暫停'}。`, { system: true });
        renderAutomationCenter();
        scheduleSave();
    };

    const startAutomationEngine = () => {
        if (automationTimer) window.clearInterval(automationTimer);
        runDueAutomations(false);
        automationTimer = window.setInterval(() => runDueAutomations(false), 60000);
    };

    const clampTimelinePosition = (position) => ({
        x: Math.max(8, Math.min(STAGE_WIDTH - TIMELINE_WIDTH - 8, position.x)),
        y: Math.max(68, Math.min(STAGE_HEIGHT - TIMELINE_HEIGHT - 8, position.y))
    });

    const applyTimelinePosition = () => {
        timelinePosition = clampTimelinePosition(timelinePosition);
        studioTimeline.style.left = `${Math.round(timelinePosition.x)}px`;
        studioTimeline.style.top = `${Math.round(timelinePosition.y)}px`;
    };

    const startTimelineDrag = (event) => {
        if (event.button !== 0 || event.target.closest('button')) return;
        const stageRect = stage.getBoundingClientRect();
        timelineDrag = {
            startClientX: event.clientX,
            startClientY: event.clientY,
            startX: timelinePosition.x,
            startY: timelinePosition.y,
            scaleX: stageRect.width / STAGE_WIDTH,
            scaleY: stageRect.height / STAGE_HEIGHT
        };
        studioTimeline.classList.add('is-dragging');
        event.preventDefault();
    };

    const moveTimelineDrag = (event) => {
        if (!timelineDrag) return;
        timelinePosition = {
            x: timelineDrag.startX + (event.clientX - timelineDrag.startClientX) / timelineDrag.scaleX,
            y: timelineDrag.startY + (event.clientY - timelineDrag.startClientY) / timelineDrag.scaleY
        };
        applyTimelinePosition();
        event.preventDefault();
    };

    const endTimelineDrag = () => {
        if (!timelineDrag) return;
        timelineDrag = null;
        studioTimeline.classList.remove('is-dragging');
        scheduleSave();
    };

    const closeStudioTimeline = () => {
        studioTimeline.classList.remove('is-open');
        studioTimeline.setAttribute('aria-hidden', 'true');
    };

    const getTimelineWeekStart = () => {
        const date = new Date();
        const day = date.getDay() || 7;
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() - day + 1 + timelineWeekOffset * 7);
        return date;
    };

    const isProjectTaskBlocked = (taskKey) => {
        const dependencyKey = getProjectTaskMetadata(taskKey).dependsOn;
        if (!dependencyKey) return false;
        const dependency = parseProjectTaskKey(dependencyKey);
        const dependencyAgent = getAgent(dependency.agentId);
        return Boolean(
            dependencyAgent
            && dependencyAgent.tasks.includes(dependency.task)
            && getProjectTaskStatus(dependencyAgent, dependency.task) !== 'done'
        );
    };

    const sendStudioNotification = async (title, body) => {
        if (!('Notification' in window) || Notification.permission !== 'granted') return;
        try {
            const registration = await navigator.serviceWorker?.getRegistration();
            if (registration) await registration.showNotification(title, { body, icon: './assets/regift-app-icon.svg', tag: `${title}-${body}` });
            else new Notification(title, { body });
        } catch (error) {
            console.warn('Unable to show studio notification.', error);
        }
    };

    const updateNotificationButton = () => {
        const supported = 'Notification' in window;
        const permission = supported ? Notification.permission : 'unsupported';
        enableStudioNotificationsButton.textContent = permission === 'granted'
            ? 'Notifications Enabled'
            : permission === 'denied' ? 'Notifications Blocked' : 'Enable Notifications';
        enableStudioNotificationsButton.classList.toggle('is-enabled', permission === 'granted');
        enableStudioNotificationsButton.disabled = !supported || permission === 'denied';
    };

    const enableStudioNotifications = async () => {
        if (!('Notification' in window)) {
            showToast('Notifications are not supported here');
            return;
        }
        const permission = await Notification.requestPermission();
        updateNotificationButton();
        if (permission === 'granted') {
            sendStudioNotification('ReGift AI Studio', '本機工作提醒已啟用。');
            showToast('Studio notifications enabled');
        }
    };

    const renderStudioTimeline = () => {
        const weekStart = getTimelineWeekStart();
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekEnd.getDate() + 6);
        timelineWeekLabel.textContent = `${weekStart.toLocaleDateString('zh-TW', { month: 'numeric', day: 'numeric' })} – ${weekEnd.toLocaleDateString('zh-TW', { month: 'numeric', day: 'numeric' })}`;
        timelineWeekGrid.replaceChildren();
        let weekDue = 0;
        let blockedCount = 0;
        const today = getLocalDateString();

        for (let index = 0; index < 7; index += 1) {
            const day = new Date(weekStart);
            day.setDate(day.getDate() + index);
            const dateKey = getLocalDateString(day);
            const column = document.createElement('section');
            const header = document.createElement('header');
            const weekday = document.createElement('span');
            const date = document.createElement('b');
            const tasks = document.createElement('div');
            column.className = 'timeline-day';
            column.classList.toggle('is-today', dateKey === today);
            weekday.textContent = day.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
            date.textContent = String(day.getDate());
            tasks.className = 'timeline-day-tasks';
            header.append(weekday, date);

            agents.forEach((agent) => agent.tasks.forEach((task) => {
                const taskKey = getProjectTaskKey(agent.id, task);
                const metadata = getProjectTaskMetadata(taskKey);
                if (metadata.dueDate !== dateKey || getProjectTaskStatus(agent, task) === 'done') return;
                const blocked = isProjectTaskBlocked(taskKey);
                const item = document.createElement('article');
                const title = document.createElement('b');
                const detail = document.createElement('small');
                item.className = 'timeline-task';
                item.classList.toggle('is-blocked', blocked);
                title.textContent = task;
                detail.textContent = `${agent.name.replace(' Agent', '')} · ${blocked ? 'BLOCKED' : metadata.priority || 'normal'}`;
                item.append(title, detail);
                tasks.append(item);
                weekDue += 1;
                if (blocked) blockedCount += 1;
            }));
            if (!tasks.childElementCount) {
                const empty = document.createElement('p');
                empty.className = 'timeline-empty';
                empty.textContent = '—';
                tasks.append(empty);
            }
            column.append(header, tasks);
            timelineWeekGrid.append(column);
        }

        timelineDueCount.textContent = String(weekDue);
        timelineBlockedCount.textContent = String(blockedCount);
        timelineMilestoneCount.textContent = String(studioMilestones.filter((item) => !item.complete).length);
        milestoneList.replaceChildren();
        if (!studioMilestones.length) {
            const empty = document.createElement('p');
            empty.className = 'timeline-empty';
            empty.textContent = '尚未建立里程碑。';
            milestoneList.append(empty);
        }
        [...studioMilestones].sort((a, b) => String(a.date).localeCompare(String(b.date))).forEach((milestone) => {
            const item = document.createElement('article');
            const checkbox = document.createElement('input');
            const copy = document.createElement('div');
            const title = document.createElement('strong');
            const date = document.createElement('time');
            const remove = document.createElement('button');
            item.className = 'milestone-item';
            item.classList.toggle('is-complete', milestone.complete);
            item.dataset.milestoneId = milestone.id;
            checkbox.type = 'checkbox';
            checkbox.checked = Boolean(milestone.complete);
            checkbox.dataset.milestoneAction = 'toggle';
            copy.className = 'milestone-copy';
            title.textContent = milestone.title;
            date.textContent = milestone.date;
            remove.type = 'button';
            remove.className = 'milestone-delete';
            remove.dataset.milestoneAction = 'delete';
            remove.textContent = 'Delete';
            copy.append(title, date);
            item.append(checkbox, copy, remove);
            milestoneList.append(item);
        });
        updateNotificationButton();
    };

    const openStudioTimeline = () => {
        closePanel();
        closeTeamChat();
        closeDepartmentWorkspace();
        closeStudioDashboard();
        closeDeliverablesLibrary();
        closeProjectBoard();
        closeAutomationCenter();
        closeBridge();
        renderStudioTimeline();
        studioTimeline.classList.add('is-open');
        studioTimeline.setAttribute('aria-hidden', 'false');
    };

    const addStudioMilestone = (event) => {
        event.preventDefault();
        const title = milestoneTitle.value.trim();
        const date = milestoneDate.value;
        if (!title || !date) return;
        studioMilestones.push({ id: `milestone-${Date.now()}`, title, date, complete: false, createdAt: new Date().toISOString() });
        milestoneTitle.value = '';
        addActivity(`Studio Timeline 新增里程碑：「${title}」`);
        renderStudioTimeline();
        scheduleSave();
    };

    const handleMilestoneAction = (event) => {
        const actionControl = event.target.closest('[data-milestone-action]');
        const item = event.target.closest('[data-milestone-id]');
        if (!actionControl || !item) return;
        const milestone = studioMilestones.find((entry) => entry.id === item.dataset.milestoneId);
        if (!milestone) return;
        if (actionControl.dataset.milestoneAction === 'toggle') {
            if (event.type !== 'change') return;
            milestone.complete = actionControl.checked;
        }
        if (actionControl.dataset.milestoneAction === 'delete') {
            studioMilestones = studioMilestones.filter((entry) => entry.id !== milestone.id);
        }
        renderStudioTimeline();
        scheduleSave();
    };

    const checkMilestoneNotifications = () => {
        const today = getLocalDateString();
        studioMilestones.forEach((milestone) => {
            if (milestone.complete || milestone.date !== today) return;
            const alertKey = `milestone:${milestone.id}:${today}`;
            if (deadlineAlerts[alertKey]) return;
            deadlineAlerts[alertKey] = true;
            addChatMessage('system', `今日里程碑 · ${milestone.title}`, { system: true });
            sendStudioNotification('ReGift Studio Milestone', milestone.title);
        });
    };

    const getAgent = (agentId) => agents.find((item) => item.id === agentId);

    const getTaskIndex = (agentId) => taskIndexByAgent.get(agentId) || 0;

    const getCurrentTask = (agent) => {
        if (!agent || !Array.isArray(agent.tasks) || agent.tasks.length === 0) {
            return 'No task assigned';
        }

        return agent.tasks[getTaskIndex(agent.id) % agent.tasks.length];
    };

    const getAgentStatus = (agentId) => {
        if (meetingActive) return 'Meeting';
        if (pausedAgents.has(agentId)) return 'Paused';
        if (agentId === 'design-agent' && designResting) return 'Resting';
        return 'Working';
    };

    const renderWorldTask = (agent) => {
        const taskElement = document.querySelector(`#${taskElementIds[agent.id]}`);
        if (!taskElement) return;

        const status = getAgentStatus(agent.id);

        if (status === 'Meeting') {
            taskElement.textContent = 'Team Meeting · AI Hub 同步中';
        } else if (status === 'Paused') {
            taskElement.textContent = `Paused · ${getCurrentTask(agent)}`;
        } else if (status === 'Resting') {
            taskElement.textContent = agent.restMessage || '休息中：補充咖啡與靈感。';
        } else {
            taskElement.textContent = getCurrentTask(agent);
        }
    };

    const updateOnlineCount = () => {
        const activeCount = agents.length - pausedAgents.size;
        onlineCount.textContent = pausedAgents.size === 0
            ? `${agents.length} Agents Online`
            : `${activeCount}/${agents.length} Agents Active`;
    };

    const renderActivityLog = () => {
        activityLog.replaceChildren();

        activityEntries.slice(0, 5).forEach((entry) => {
            const item = document.createElement('li');
            const time = document.createElement('time');
            const entryDate = new Date(entry.createdAt);

            time.textContent = entryDate.toLocaleTimeString('zh-TW', {
                hour: '2-digit', minute: '2-digit', hour12: false
            });
            item.append(time, document.createTextNode(entry.message));
            activityLog.append(item);
        });
    };

    const addActivity = (message, shouldSave = true) => {
        activityEntries.unshift({
            message,
            createdAt: new Date().toISOString()
        });
        activityEntries = activityEntries.slice(0, 30);
        renderActivityLog();
        if (shouldSave) scheduleSave();
    };

    const showToast = (message) => {
        if (toastTimer) window.clearTimeout(toastTimer);
        toast.textContent = message;
        toast.classList.add('is-visible');
        toastTimer = window.setTimeout(() => {
            toast.classList.remove('is-visible');
        }, 2200);
    };

    const renderPanel = () => {
        const agent = getAgent(selectedAgentId);
        if (!agent) return;

        const status = getAgentStatus(agent.id);
        const progress = Math.round(progressByAgent.get(agent.id) || 0);

        panelName.textContent = agent.name;
        panelStatus.textContent = status;
        panelRole.textContent = agent.role || 'AI Agent';
        panelDescription.textContent = agent.description || '';
        panelTask.textContent = getCurrentTask(agent);
        panelProgressBar.style.width = `${progress}%`;
        panelProgressLabel.textContent = `${progress}%`;
        progressTrack.setAttribute('aria-valuenow', String(progress));
        pauseButton.textContent = pausedAgents.has(agent.id)
            ? 'Resume Agent'
            : 'Pause Agent';

        panelStatusLight.classList.toggle('is-paused', status === 'Paused');
        panelStatusLight.classList.toggle('is-resting', status === 'Resting');

        queueList.replaceChildren();
        const startIndex = getTaskIndex(agent.id);
        const queueLength = Array.isArray(agent.tasks)
            ? Math.min(agent.tasks.length, 4)
            : 0;

        Array.from({ length: queueLength }).forEach((_, index) => {
            const item = document.createElement('li');
            const realIndex = (startIndex + index) % agent.tasks.length;
            item.textContent = agent.tasks[realIndex];
            queueList.append(item);
        });
    };

    const selectAgent = (agentId) => {
        const agent = getAgent(agentId);
        if (!agent) return;

        closeOfficeControls();
        closeDepartmentWorkspace();
        closeStudioDashboard();
        closeDeliverablesLibrary();
        closeProjectBoard();
        closeAutomationCenter();
        closeTeamChat();

        document.querySelectorAll('.office-agent').forEach((element) => {
            element.classList.toggle('is-selected', element.id === agentId);
        });

        selectedAgentId = agentId;
        controlPanel.classList.add('is-open');
        controlPanel.setAttribute('aria-hidden', 'false');
        renderPanel();
    };

    const closePanel = () => {
        controlPanel.classList.remove('is-open');
        controlPanel.setAttribute('aria-hidden', 'true');
        document.querySelectorAll('.office-agent').forEach((element) => {
            element.classList.remove('is-selected');
        });
    };

    const getChatAuthor = (authorId) => {
        if (authorId === 'ceo') {
            return { name: 'Anthea · CEO', initials: 'CEO' };
        }

        const agent = getAgent(authorId);
        const initials = agent?.name
            ?.split(' ')
            .map((part) => part[0])
            .join('')
            .slice(0, 2) || 'AI';

        return {
            name: agent?.name || 'Studio System',
            initials
        };
    };

    const renderTeamChat = () => {
        teamChatMessages.replaceChildren();

        chatMessages.slice(-50).forEach((entry) => {
            const message = document.createElement('article');
            const content = document.createElement('div');
            const text = document.createElement('p');

            message.className = 'chat-message';
            text.textContent = entry.text;

            if (entry.system) {
                message.classList.add('is-system');
                message.append(text);
                teamChatMessages.append(message);
                return;
            }

            const author = getChatAuthor(entry.authorId);
            const avatar = document.createElement('span');
            const meta = document.createElement('div');
            const name = document.createElement('strong');
            const time = document.createElement('time');

            avatar.className = `chat-avatar ${entry.authorId}`;
            avatar.textContent = entry.authorId === 'ceo' ? author.initials : '';
            avatar.setAttribute('aria-hidden', 'true');
            content.className = 'chat-message-content';
            meta.className = 'chat-message-meta';
            name.textContent = author.name;
            time.textContent = new Date(entry.createdAt).toLocaleTimeString('zh-TW', {
                hour: '2-digit', minute: '2-digit', hour12: false
            });
            meta.append(name, time);
            content.append(meta, text);
            message.append(avatar, content);
            teamChatMessages.append(message);
        });

        teamChatMessages.scrollTop = teamChatMessages.scrollHeight;
    };

    const addChatMessage = (authorId, text, options = {}) => {
        chatMessages.push({
            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            authorId,
            text,
            system: Boolean(options.system),
            createdAt: new Date().toISOString()
        });
        chatMessages = chatMessages.slice(-80);
        renderTeamChat();
        scheduleSave();
    };

    const closeTeamChat = () => {
        teamChatPanel.classList.remove('is-open');
        teamChatPanel.setAttribute('aria-hidden', 'true');
        teamChatButton.setAttribute('aria-pressed', 'false');
    };

    const closeOfficeControls = () => {
        officeControlsPanel.classList.remove('is-open');
        officeControlsPanel.setAttribute('aria-hidden', 'true');
        officeControlsButton.setAttribute('aria-pressed', 'false');
    };

    const openOfficeControls = () => {
        closePanel();
        closeTeamChat();
        closeDepartmentWorkspace();
        closeStudioDashboard();
        closeDeliverablesLibrary();
        closeProjectBoard();
        closeAutomationCenter();
        closeStudioTimeline();
        closeBridge();
        officeControlsPanel.classList.add('is-open');
        officeControlsPanel.setAttribute('aria-hidden', 'false');
        officeControlsButton.setAttribute('aria-pressed', 'true');
    };

    const openTeamChat = () => {
        closeOfficeControls();
        closePanel();
        closeDepartmentWorkspace();
        closeStudioDashboard();
        closeDeliverablesLibrary();
        closeProjectBoard();
        closeAutomationCenter();
        closeStudioTimeline();
        closeBridge();
        teamChatPanel.classList.add('is-open');
        teamChatPanel.setAttribute('aria-hidden', 'false');
        teamChatButton.setAttribute('aria-pressed', 'true');
        renderTeamChat();
    };

    const postNextAgentDiscussion = () => {
        if (agents.length === 0) return;

        const design = getAgent('design-agent');
        const copywriter = getAgent('copywriter-agent');
        const marketing = getAgent('marketing-agent');
        const photography = getAgent('photography-agent');
        const shipping = getAgent('shipping-agent');
        const discussions = [
            {
                agent: design,
                text: () => `我正在處理「${getCurrentTask(design)}」，完成第一版後會請 Copywriter 一起確認視覺與文字是否一致。`
            },
            {
                agent: copywriter,
                text: () => `收到。我目前在寫「${getCurrentTask(copywriter)}」，等 Design 的版面出來後會同步調整文字長度。`
            },
            {
                agent: marketing,
                text: () => `Marketing 更新：正在執行「${getCurrentTask(marketing)}」，之後需要 Photography 準備對應的曝光素材。`
            },
            {
                agent: photography,
                text: () => `攝影區收到。我先完成「${getCurrentTask(photography)}」，再依 Marketing 的發布尺寸輸出版本。`
            },
            {
                agent: shipping,
                text: () => `Shipping 目前處理「${getCurrentTask(shipping)}」。新品上架前請記得把最終包裝規格傳給我。`
            }
        ];
        const discussion = discussions[discussionIndex % discussions.length];

        if (discussion.agent) {
            addChatMessage(discussion.agent.id, discussion.text());
        }
        discussionIndex += 1;
    };

    const startTeamDiscussion = () => {
        if (chatTimer) window.clearInterval(chatTimer);
        chatTimer = window.setInterval(postNextAgentDiscussion, 9000);
    };

    const sendCEOMessage = (event) => {
        event.preventDefault();
        const message = teamChatInput.value.trim();
        if (!message) return;

        addChatMessage('ceo', message);
        teamChatInput.value = '';
        addActivity(`CEO 在 Team Chat 發布訊息：「${message}」`);

        if (agentReplyTimer) window.clearTimeout(agentReplyTimer);
        const responder = getAgent(selectedAgentId) || agents[discussionIndex % agents.length];
        if (!responder) return;
        agentReplyTimer = window.setTimeout(() => {
            addChatMessage(
                responder.id,
                `收到，我會把這項要求納入「${getCurrentTask(responder)}」的執行內容，完成後回報。`
            );
        }, 900);
    };

    const agentOutputGuides = {
        'design-agent': [
            '提出清楚的設計概念與視覺方向',
            '列出配色、字體、版面、材質與印刷注意事項',
            '提供可以直接執行的尺寸與製作建議'
        ],
        'copywriter-agent': [
            '使用自然溫暖、真誠且不過度煽情的品牌語氣',
            '提供主版本以及 2 個可替換版本',
            '檢查繁體中文用字與標點'
        ],
        'marketing-agent': [
            '說明目標受眾、溝通重點與發布節奏',
            '提供具體貼文或活動執行內容',
            '列出可觀察的成效指標'
        ],
        'photography-agent': [
            '列出構圖、燈光、背景、鏡位與道具配置',
            '以商品攝影能直接執行的方式說明',
            '補充後製色調與輸出尺寸建議'
        ],
        'shipping-agent': [
            '整理為可逐項勾選的作業流程',
            '包含品質檢查、包裝、標籤與物流注意事項',
            '標出容易遺漏或出錯的風險點'
        ]
    };

    const buildBridgePrompt = (agent, taskOverride = null) => {
        const task = taskOverride || getCurrentTask(agent);
        const outputGuide = agentOutputGuides[agent.id] || [
            '提供清楚、具體且能直接執行的成果'
        ];

        return [
            `你是 ReGift AI Studio 的 ${agent.name}。`,
            `角色：${agent.role || 'AI Agent'}`,
            `職責：${agent.description || ''}`,
            '',
            '品牌背景：',
            '- 中文品牌名：禮約',
            '- 英文品牌名：ReGift',
            '- 品牌精神：讓禮品連結愛與恆久的約定',
            '- 主要商品：彌月卡、結婚書約、生日卡、感謝卡、集點卡與包裝周邊',
            '- 視覺調性：溫暖、細緻、自然、帶有手作質感',
            '',
            `目前任務：${task}`,
            '',
            '輸出要求：',
            ...outputGuide.map((item) => `- ${item}`),
            '- 使用繁體中文回答',
            '- 不要只提供抽象方向，請完成可直接使用的內容',
            '',
            '請開始執行此任務。'
        ].join('\n');
    };

    const renderBridgeHistory = () => {
        const agentResults = savedResults
            .filter((entry) => entry.agentId === selectedAgentId)
            .slice(0, 6);

        bridgeResultHistory.replaceChildren();

        if (agentResults.length === 0) {
            bridgeResultHistory.textContent = '尚未保存任何成果。';
            return;
        }

        agentResults.forEach((entry) => {
            const item = document.createElement('article');
            const title = document.createElement('strong');
            const resultPreview = document.createElement('p');
            const time = document.createElement('time');

            item.className = 'bridge-history-item';
            title.textContent = entry.task;
            resultPreview.textContent = entry.content;
            time.textContent = new Date(entry.savedAt).toLocaleString('zh-TW', { hour12: false });
            item.append(title, resultPreview, time);
            bridgeResultHistory.append(item);
        });
    };

    const openBridge = () => {
        const agent = getAgent(selectedAgentId);
        if (!agent) return;

        closeDepartmentWorkspace();
        closeStudioDashboard();
        closeDeliverablesLibrary();
        closeProjectBoard();
        closeAutomationCenter();
        closeStudioTimeline();
        closeTeamChat();
        bridgeTaskSnapshot = getCurrentTask(agent);
        bridgeAgentName.textContent = `${agent.name} · ${agent.role || 'AI Agent'}`;
        bridgeTaskName.textContent = bridgeTaskSnapshot;
        bridgePrompt.value = buildBridgePrompt(agent, bridgeTaskSnapshot);
        bridgeResult.value = '';
        renderBridgeHistory();
        bridgeModal.classList.add('is-open');
        bridgeModal.setAttribute('aria-hidden', 'false');
    };

    const closeBridge = () => {
        bridgeModal.classList.remove('is-open');
        bridgeModal.setAttribute('aria-hidden', 'true');
        bridgeTaskSnapshot = null;
    };

    const copyBridgePrompt = async () => {
        try {
            await navigator.clipboard.writeText(bridgePrompt.value);
        } catch (error) {
            bridgePrompt.focus();
            bridgePrompt.select();
            document.execCommand('copy');
        }

        addActivity('ChatGPT Bridge Prompt 已複製');
        showToast('Prompt copied — paste it into ChatGPT');
    };

    const saveBridgeResult = (shouldComplete) => {
        const agent = getAgent(selectedAgentId);
        const content = bridgeResult.value.trim();
        if (!agent || !content) {
            showToast('請先貼上 ChatGPT 的回覆');
            return;
        }

        const task = bridgeTaskSnapshot || getCurrentTask(agent);
        savedResults.unshift({
            id: `${Date.now()}-${agent.id}`,
            agentId: agent.id,
            agentName: agent.name,
            task,
            content,
            savedAt: new Date().toISOString()
        });
        savedResults = savedResults.slice(0, 100);
        addActivity(`${agent.name} 已保存 ChatGPT 成果：「${task}」`);
        addChatMessage(
            agent.id,
            shouldComplete
                ? `ChatGPT 協作成果已保存，我也完成了「${task}」。`
                : `「${task}」的 ChatGPT 協作成果已保存，我會繼續整理。`
        );

        if (shouldComplete) {
            completeTask(agent);
            bridgeTaskSnapshot = getCurrentTask(agent);
            bridgeTaskName.textContent = bridgeTaskSnapshot;
            bridgePrompt.value = buildBridgePrompt(agent, bridgeTaskSnapshot);
            bridgeResult.value = '';
            showToast('Result saved and task completed');
        } else {
            showToast('ChatGPT result saved locally');
        }

        renderBridgeHistory();
        renderPanel();
        scheduleSave();
    };

    const setAgentPaused = (agentId, shouldPause) => {
        const agent = getAgent(agentId);
        const agentElement = document.querySelector(`#${agentId}`);
        if (!agent || !agentElement) return;

        if (shouldPause) pausedAgents.add(agentId);
        else pausedAgents.delete(agentId);

        if (shouldPause && activeInteractionAgentId === agentId) clearOfficeInteraction(false);
        if (shouldPause) cancelAgentNavigation(agentId);

        agentElement.classList.toggle('is-paused', shouldPause);
        updateAgentNavigationLabel(agentId, shouldPause ? '已暫停，等待指示' : '在工作位置處理任務');
        renderWorldTask(agent);
        updateOnlineCount();
        renderPanel();
        addActivity(`${agent.name} ${shouldPause ? '已暫停' : '繼續工作'}`);
        addChatMessage(
            agent.id,
            shouldPause
                ? `我先暫停「${getCurrentTask(agent)}」，等待下一步指示。`
                : `我已回到工作狀態，繼續處理「${getCurrentTask(agent)}」。`
        );
        showToast(`${agent.name} · ${shouldPause ? 'Paused' : 'Working'}`);
    };

    const setDesignResting = (shouldRest) => {
        if (meetingActive) return;

        const agent = getAgent('design-agent');
        const agentElement = document.querySelector('#design-agent');
        if (!agent || !agentElement) return;

        if (activeInteractionAgentId === agent.id) clearOfficeInteraction(false);
        designResting = shouldRest;
        world.classList.toggle('is-design-resting', shouldRest);
        navigateAgentTo(agent.id, shouldRest ? 'lounge' : AGENT_HOME_NODES[agent.id], {
            force: true,
            label: shouldRest ? '正在前往 Sofa Lounge' : '正在返回 Design Area',
            arrivalLabel: shouldRest ? '在 Sofa Lounge 補充咖啡與靈感' : '在工作位置處理任務'
        });
        breakButton.setAttribute('aria-pressed', String(shouldRest));
        breakButton.textContent = shouldRest ? 'Back to Work' : 'Take a Break';
        agentElement.dataset.tooltipDescription = shouldRest
            ? '正在 Sofa Lounge 補充咖啡與靈感。'
            : agent.description;

        renderWorldTask(agent);
        if (selectedAgentId === agent.id) renderPanel();
        addActivity(`Design Agent ${shouldRest ? '前往 Sofa Lounge' : '返回工作桌'}`);
        addChatMessage(
            agent.id,
            shouldRest
                ? '我先去 Sofa Lounge 補充咖啡和靈感，稍後回來。'
                : `我回來了，繼續處理「${getCurrentTask(agent)}」。`
        );
    };

    const setMeeting = (shouldMeet) => {
        meetingActive = shouldMeet;
        if (shouldMeet) {
            clearOfficeInteraction(false);
            applyMeetingFormation();
        }
        agents.forEach((agent) => cancelAgentNavigation(agent.id));
        walkTimers.forEach((timer, agentId) => {
            window.clearTimeout(timer);
            document.querySelector(`#${agentId}`)?.classList.remove('is-walking');
        });
        walkTimers.clear();
        world.classList.toggle('is-meeting', shouldMeet);
        agents.forEach((agent) => {
            if (pausedAgents.has(agent.id)) return;
            const agentElement = document.querySelector(`#${agent.id}`);
            if (!agentElement) return;
            updateAgentNavigationLabel(agent.id, shouldMeet ? '正在前往 AI Assistant Hub 開會' : '正在返回所屬部門');
            agentElement.style.setProperty('--agent-travel-duration', `${1.15 / officeSettings.motionSpeed}s`);
            agentElement.classList.add('is-walking');
            walkTimers.set(agent.id, window.setTimeout(() => {
                agentElement.classList.remove('is-walking');
                walkTimers.delete(agent.id);
            }, Math.round(1250 / officeSettings.motionSpeed)));
        });
        if (!shouldMeet) {
            window.setTimeout(() => {
                agents.forEach((agent) => {
                    if (pausedAgents.has(agent.id)) return;
                    navigateAgentTo(agent.id, AGENT_HOME_NODES[agent.id], {
                        force: true,
                        label: '正在返回所屬部門',
                        arrivalLabel: '在工作位置處理任務'
                    });
                });
            }, 40);
        }
        meetingButton.setAttribute('aria-pressed', String(shouldMeet));
        meetingButton.textContent = shouldMeet ? 'End Meeting' : 'Team Meeting';
        breakButton.disabled = shouldMeet;
        studioActivity.textContent = shouldMeet
            ? '全體 Agents 正在 AI Hub 同步進度'
            : '5 Agents 正在同步工作';

        agents.forEach(renderWorldTask);
        if (selectedAgentId) renderPanel();
        addActivity(shouldMeet ? '全體 Agents 集合至 AI Hub' : '會議結束，Agents 返回工作區');
        addChatMessage(
            'system',
            shouldMeet
                ? 'Team Meeting 已開始 · 5 Agents 前往 AI Assistant Hub。'
                : 'Team Meeting 已結束 · Agents 已返回各自工作區。',
            { system: true }
        );
        showToast(shouldMeet ? 'Team Meeting started' : 'Team Meeting ended');
        if (studioDashboard.classList.contains('is-open')) renderStudioDashboard();
    };

    const completeTask = (agent) => {
        const completed = getCurrentTask(agent);
        projectTaskStates[getProjectTaskKey(agent.id, completed)] = 'done';
        const nextIndex = (getTaskIndex(agent.id) + 1) % agent.tasks.length;
        taskIndexByAgent.set(agent.id, nextIndex);
        projectTaskStates[getProjectTaskKey(agent.id, getCurrentTask(agent))] = 'working';
        progressByAgent.set(agent.id, 0);
        renderWorldTask(agent);
        departmentWorkspaceState.checklist[agent.id] = (DEPARTMENT_CHECKLISTS[agent.id] || []).map(() => false);
        addActivity(`${agent.name} 完成「${completed}」`);
        addChatMessage(
            agent.id,
            `已完成「${completed}」。下一項開始處理「${getCurrentTask(agent)}」。`
        );
        if (selectedWorkspaceAgentId === agent.id) renderDepartmentWorkspace();
        if (projectBoard.classList.contains('is-open')) renderProjectBoard();
    };

    const tickOffice = () => {
        if (meetingActive) return;

        agents.forEach((agent, index) => {
            if (pausedAgents.has(agent.id)) return;
            if (agent.id === 'design-agent' && designResting) return;
            if (
                bridgeModal.classList.contains('is-open') &&
                agent.id === selectedAgentId
            ) return;

            const increment = 2 + (index % 3);
            const nextProgress = (progressByAgent.get(agent.id) || 0) + increment;

            if (nextProgress >= 100) completeTask(agent);
            else progressByAgent.set(agent.id, nextProgress);
        });

        if (selectedAgentId) renderPanel();
        if (departmentWorkspace.classList.contains('is-open')) updateDepartmentWorkspaceLive();
        if (studioDashboard.classList.contains('is-open')) renderStudioDashboard();
        if (projectBoard.classList.contains('is-open')) renderProjectBoard();
        scheduleSave();
    };

    const assignTask = (event) => {
        event.preventDefault();
        const agent = getAgent(selectedAgentId);
        const newTask = taskInput.value.trim();
        if (!agent || !newTask) return;

        const previousCurrent = getCurrentTask(agent);
        agent.tasks.unshift(newTask);
        projectTaskStates[getProjectTaskKey(agent.id, previousCurrent)] = 'queue';
        taskIndexByAgent.set(agent.id, 0);
        projectTaskStates[getProjectTaskKey(agent.id, newTask)] = 'working';
        progressByAgent.set(agent.id, 0);
        pausedAgents.delete(agent.id);

        const agentElement = document.querySelector(`#${agent.id}`);
        if (agentElement) agentElement.classList.remove('is-paused');
        if (agent.id === 'design-agent' && designResting) setDesignResting(false);
        movementStepByAgent.set(agent.id, 0);
        navigateAgentTo(agent.id, AGENT_HOME_NODES[agent.id], {
            force: true,
            label: '正在返回所屬部門',
            arrivalLabel: '在工作位置處理任務'
        });
        departmentWorkspaceState.checklist[agent.id] = (DEPARTMENT_CHECKLISTS[agent.id] || []).map(() => false);

        taskInput.value = '';
        renderWorldTask(agent);
        updateOnlineCount();
        renderPanel();
        if (selectedWorkspaceAgentId === agent.id) renderDepartmentWorkspace();
        if (projectBoard.classList.contains('is-open')) renderProjectBoard();
        addActivity(`新任務已指派給 ${agent.name}：「${newTask}」`);
        addChatMessage('system', `CEO 指派新任務給 ${agent.name}：「${newTask}」`, {
            system: true
        });
        addChatMessage(agent.id, `收到新任務，我現在開始處理「${newTask}」。`);
        showToast(`Task assigned to ${agent.name}`);
    };

    const activateOffice = (officeAgents) => {
        const savedAgents = savedOfficeState?.agents || {};
        agents = officeAgents.map((agent) => ({
            ...agent,
            tasks: Array.isArray(savedAgents[agent.id]?.tasks)
                ? savedAgents[agent.id].tasks
                : agent.tasks
        }));

        activityEntries = Array.isArray(savedOfficeState?.activityEntries)
            ? savedOfficeState.activityEntries
            : [];
        savedResults = Array.isArray(savedOfficeState?.savedResults)
            ? savedOfficeState.savedResults
            : [];
        chatMessages = Array.isArray(savedOfficeState?.chatMessages)
            ? savedOfficeState.chatMessages
            : [];
        const savedDepartmentState = savedOfficeState?.departmentWorkspaceState;
        departmentWorkspaceState = {
            notes: savedDepartmentState?.notes && typeof savedDepartmentState.notes === 'object'
                ? savedDepartmentState.notes
                : {},
            checklist: savedDepartmentState?.checklist && typeof savedDepartmentState.checklist === 'object'
                ? savedDepartmentState.checklist
                : {}
        };
        const savedWorkspacePosition = savedOfficeState?.workspacePosition;
        workspacePosition = Number.isFinite(savedWorkspacePosition?.x) && Number.isFinite(savedWorkspacePosition?.y)
            ? { x: savedWorkspacePosition.x, y: savedWorkspacePosition.y }
            : { ...DEFAULT_WORKSPACE_POSITION };
        applyWorkspacePosition();
        const savedDashboardPosition = savedOfficeState?.dashboardPosition;
        dashboardPosition = Number.isFinite(savedDashboardPosition?.x) && Number.isFinite(savedDashboardPosition?.y)
            ? { x: savedDashboardPosition.x, y: savedDashboardPosition.y }
            : { ...DEFAULT_DASHBOARD_POSITION };
        applyDashboardPosition();
        const savedDeliverablesPosition = savedOfficeState?.deliverablesPosition;
        deliverablesPosition = Number.isFinite(savedDeliverablesPosition?.x) && Number.isFinite(savedDeliverablesPosition?.y)
            ? { x: savedDeliverablesPosition.x, y: savedDeliverablesPosition.y }
            : { ...DEFAULT_DELIVERABLES_POSITION };
        applyDeliverablesPosition();
        const savedProjectBoardPosition = savedOfficeState?.projectBoardPosition;
        projectBoardPosition = Number.isFinite(savedProjectBoardPosition?.x) && Number.isFinite(savedProjectBoardPosition?.y)
            ? { x: savedProjectBoardPosition.x, y: savedProjectBoardPosition.y }
            : { ...DEFAULT_PROJECT_BOARD_POSITION };
        projectTaskStates = savedOfficeState?.projectTaskStates && typeof savedOfficeState.projectTaskStates === 'object'
            ? savedOfficeState.projectTaskStates
            : {};
        projectTaskMetadata = savedOfficeState?.projectTaskMetadata && typeof savedOfficeState.projectTaskMetadata === 'object'
            ? savedOfficeState.projectTaskMetadata
            : {};
        deadlineAlerts = savedOfficeState?.deadlineAlerts && typeof savedOfficeState.deadlineAlerts === 'object'
            ? savedOfficeState.deadlineAlerts
            : {};
        applyProjectBoardPosition();
        automationRules = Array.isArray(savedOfficeState?.automationRules)
            ? savedOfficeState.automationRules
            : [];
        automationLog = Array.isArray(savedOfficeState?.automationLog)
            ? savedOfficeState.automationLog
            : [];
        automationEnabled = savedOfficeState?.automationEnabled !== false;
        const savedAutomationPosition = savedOfficeState?.automationPosition;
        automationPosition = Number.isFinite(savedAutomationPosition?.x) && Number.isFinite(savedAutomationPosition?.y)
            ? { x: savedAutomationPosition.x, y: savedAutomationPosition.y }
            : { ...DEFAULT_AUTOMATION_POSITION };
        applyAutomationPosition();
        studioMilestones = Array.isArray(savedOfficeState?.studioMilestones)
            ? savedOfficeState.studioMilestones
            : [];
        const savedTimelinePosition = savedOfficeState?.timelinePosition;
        timelinePosition = Number.isFinite(savedTimelinePosition?.x) && Number.isFinite(savedTimelinePosition?.y)
            ? { x: savedTimelinePosition.x, y: savedTimelinePosition.y }
            : { ...DEFAULT_TIMELINE_POSITION };
        applyTimelinePosition();
        if (!milestoneDate.value) {
            const suggestedMilestoneDate = new Date();
            suggestedMilestoneDate.setDate(suggestedMilestoneDate.getDate() + 7);
            milestoneDate.value = getLocalDateString(suggestedMilestoneDate);
        }
        const savedHubPosition = savedOfficeState?.hubPosition;
        hubPosition = Number.isFinite(savedHubPosition?.x) && Number.isFinite(savedHubPosition?.y)
            ? { x: savedHubPosition.x, y: savedHubPosition.y }
            : { ...DEFAULT_HUB_POSITION };
        applyHubPosition();
        designResting = Boolean(savedOfficeState?.designResting);
        officeSettings = {
            ...DEFAULT_OFFICE_SETTINGS,
            ...(savedOfficeState?.officeSettings && typeof savedOfficeState.officeSettings === 'object'
                ? savedOfficeState.officeSettings
                : {})
        };
        officeSettings.movementEnabled = officeSettings.movementEnabled !== false;
        officeSettings.workMotionsEnabled = officeSettings.workMotionsEnabled !== false;
        officeSettings.emotionsEnabled = officeSettings.emotionsEnabled !== false;
        applyOfficeSettings(false, false);

        agents.forEach((agent, index) => {
            const savedAgent = savedAgents[agent.id];
            progressByAgent.set(
                agent.id,
                Number.isFinite(savedAgent?.progress)
                    ? Math.max(0, Math.min(99, savedAgent.progress))
                    : 12 + index * 9
            );
            taskIndexByAgent.set(
                agent.id,
                Number.isInteger(savedAgent?.taskIndex)
                    ? savedAgent.taskIndex % Math.max(agent.tasks.length, 1)
                    : 0
            );

            if (savedAgent?.paused) pausedAgents.add(agent.id);
            renderWorldTask(agent);

            const element = document.querySelector(`#${agent.id}`);
            if (element) {
                element.dataset.tooltipTitle = agent.name;
                element.dataset.tooltipDescription = agent.description;
                element.classList.toggle('is-paused', pausedAgents.has(agent.id));
            }
            initializeAgentNavigation(agent.id);
            if (pausedAgents.has(agent.id)) updateAgentNavigationLabel(agent.id, '已暫停，等待指示');
        });

        world.classList.toggle('is-design-resting', designResting);
        breakButton.setAttribute('aria-pressed', String(designResting));
        breakButton.textContent = designResting ? 'Back to Work' : 'Take a Break';

        updateOnlineCount();
        renderActivityLog();
        if (chatMessages.length === 0) {
            const now = Date.now();
            chatMessages = [
                {
                    id: `welcome-${now}`,
                    authorId: 'system',
                    text: 'Studio Team Chat 已連線 · 5 Agents online。',
                    system: true,
                    createdAt: new Date(now - 120000).toISOString()
                },
                {
                    id: `design-${now}`,
                    authorId: 'design-agent',
                    text: `早安，我先進行「${getCurrentTask(getAgent('design-agent'))}」，第一版完成後再請大家確認。`,
                    system: false,
                    createdAt: new Date(now - 90000).toISOString()
                },
                {
                    id: `marketing-${now}`,
                    authorId: 'marketing-agent',
                    text: `收到，我會同步整理「${getCurrentTask(getAgent('marketing-agent'))}」的曝光方向。`,
                    system: false,
                    createdAt: new Date(now - 60000).toISOString()
                }
            ];
        }
        renderTeamChat();
        addActivity(
            savedOfficeState
                ? '已還原上次保存的 ReGift AI Studio 工作狀態'
                : 'ReGift AI Studio 控制中心已啟動'
        );
        startTeamDiscussion();
        startAgentMovement();
        scheduleAgentEmotion();
        startDeadlineMonitor();
        startAutomationEngine();
        tickTimer = window.setInterval(tickOffice, 900);
    };

    const loadOffice = async () => {
        savedOfficeState = readSavedState();

        try {
            const configResponse = await fetch('./config/app-config.json', { cache: 'no-store' });
            if (configResponse.ok) {
                const appConfig = await configResponse.json();
                document.documentElement.dataset.release = appConfig.release || '7.0.0';
                document.documentElement.dataset.phase = appConfig.phase || '06_APP';
            }
        } catch (error) {
            console.warn('App config unavailable; using built-in defaults.', error);
        }

        try {
            const response = await fetch('./data/office.json', { cache: 'no-store' });
            if (!response.ok) throw new Error(`Office data error: ${response.status}`);
            const officeData = await response.json();
            activateOffice(officeData.agents || fallbackAgents);
        } catch (error) {
            console.warn('Using fallback office data.', error);
            activateOffice(fallbackAgents);
        }
    };

    document.querySelectorAll('.office-agent').forEach((element) => {
        element.addEventListener('click', () => selectAgent(element.dataset.agentId));
        element.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                selectAgent(element.dataset.agentId);
            }
        });
    });

    document.querySelectorAll('[data-department-id]').forEach((element) => {
        element.addEventListener('click', () => {
            openDepartmentWorkspace(element.dataset.departmentId);
        });
        element.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openDepartmentWorkspace(element.dataset.departmentId);
            }
        });
    });

    document.querySelectorAll('[data-office-interaction]').forEach((element) => {
        const runInteraction = () => runOfficeInteraction(element.dataset.officeInteraction);
        element.addEventListener('click', runInteraction);
        element.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                runInteraction();
            }
        });
    });

    closePanelButton.addEventListener('click', closePanel);
    aiHubHandle.addEventListener('mousedown', startHubDrag);
    openStudioDashboardButton.addEventListener('click', openStudioDashboard);
    departmentWorkspaceHandle.addEventListener('mousedown', startWorkspaceDrag);
    studioDashboardHandle.addEventListener('mousedown', startDashboardDrag);
    deliverablesLibraryHandle.addEventListener('mousedown', startDeliverablesDrag);
    projectBoardHandle.addEventListener('mousedown', startProjectBoardDrag);
    automationCenterHandle.addEventListener('mousedown', startAutomationDrag);
    studioTimelineHandle.addEventListener('mousedown', startTimelineDrag);
    window.addEventListener('mousemove', moveHubDrag);
    window.addEventListener('mousemove', moveWorkspaceDrag);
    window.addEventListener('mousemove', moveDashboardDrag);
    window.addEventListener('mousemove', moveDeliverablesDrag);
    window.addEventListener('mousemove', moveProjectBoardDrag);
    window.addEventListener('mousemove', moveAutomationDrag);
    window.addEventListener('mousemove', moveTimelineDrag);
    window.addEventListener('mouseup', endHubDrag);
    window.addEventListener('mouseup', endWorkspaceDrag);
    window.addEventListener('mouseup', endDashboardDrag);
    window.addEventListener('mouseup', endDeliverablesDrag);
    window.addEventListener('mouseup', endProjectBoardDrag);
    window.addEventListener('mouseup', endAutomationDrag);
    window.addEventListener('mouseup', endTimelineDrag);
    window.addEventListener('blur', endHubDrag);
    window.addEventListener('blur', endWorkspaceDrag);
    window.addEventListener('blur', endDashboardDrag);
    window.addEventListener('blur', endDeliverablesDrag);
    window.addEventListener('blur', endProjectBoardDrag);
    window.addEventListener('blur', endAutomationDrag);
    window.addEventListener('blur', endTimelineDrag);
    closeDepartmentWorkspaceButton.addEventListener('click', closeDepartmentWorkspace);
    backDepartmentToHubButton.addEventListener('click', returnToStudioDashboard);
    closeStudioDashboardButton.addEventListener('click', closeStudioDashboard);
    closeDeliverablesButton.addEventListener('click', closeDeliverablesLibrary);
    backDeliverablesToHubButton.addEventListener('click', returnToStudioDashboard);
    closeProjectBoardButton.addEventListener('click', closeProjectBoard);
    backProjectToHubButton.addEventListener('click', returnToStudioDashboard);
    closeAutomationCenterButton.addEventListener('click', closeAutomationCenter);
    backAutomationToHubButton.addEventListener('click', returnToStudioDashboard);
    closeStudioTimelineButton.addEventListener('click', closeStudioTimeline);
    backTimelineToHubButton.addEventListener('click', returnToStudioDashboard);
    departmentWorkspaceNav.addEventListener('click', (event) => {
        const button = event.target.closest('[data-workspace-agent]');
        if (button) openDepartmentWorkspace(button.dataset.workspaceAgent);
    });
    departmentWorkspaceNotes.addEventListener('input', () => {
        if (!selectedWorkspaceAgentId) return;
        departmentWorkspaceState.notes[selectedWorkspaceAgentId] = departmentWorkspaceNotes.value;
        scheduleSave();
    });
    saveDepartmentNotesButton.addEventListener('click', saveDepartmentNotes);
    completeDepartmentTaskButton.addEventListener('click', completeDepartmentTask);
    studioDashboardAgents.addEventListener('click', (event) => {
        const card = event.target.closest('[data-dashboard-agent]');
        if (card) openDepartmentWorkspace(card.dataset.dashboardAgent);
    });
    dashboardMeetingButton.addEventListener('click', () => setMeeting(!meetingActive));
    copyDailyBriefButton.addEventListener('click', copyDailyBrief);
    openDeliverablesButton.addEventListener('click', openDeliverablesLibrary);
    deliverablesFilter.addEventListener('change', renderDeliverablesLibrary);
    deliverablesSearch.addEventListener('input', renderDeliverablesLibrary);
    deliverablesList.addEventListener('click', (event) => {
        const item = event.target.closest('[data-deliverable-id]');
        if (!item) return;
        selectedDeliverableId = item.dataset.deliverableId;
        renderDeliverablesLibrary();
    });
    copyDeliverableButton.addEventListener('click', copySelectedDeliverable);
    downloadDeliverableButton.addEventListener('click', downloadSelectedDeliverable);
    deleteDeliverableButton.addEventListener('click', deleteSelectedDeliverable);
    openProjectBoardButton.addEventListener('click', openProjectBoard);
    projectBoardAddForm.addEventListener('submit', addProjectBoardTask);
    projectFilterAgent.addEventListener('change', renderProjectBoard);
    projectFilterPriority.addEventListener('change', renderProjectBoard);
    projectBoardSearch.addEventListener('input', renderProjectBoard);
    exportProjectBoardButton.addEventListener('click', exportProjectBoardCsv);
    closeProjectInspectorButton.addEventListener('click', closeProjectTaskInspector);
    projectInspectorForm.addEventListener('submit', saveProjectTaskInspector);
    projectBoard.addEventListener('click', (event) => {
        const editButton = event.target.closest('[data-edit-project-task]');
        if (editButton) openProjectTaskInspector(editButton.dataset.editProjectTask);
    });
    openAutomationCenterButton.addEventListener('click', openAutomationCenter);
    automationRuleForm.addEventListener('submit', addAutomationRule);
    automationRulesList.addEventListener('click', handleAutomationRuleAction);
    toggleAutomationEngineButton.addEventListener('click', toggleAutomationEngine);
    runDueAutomationsButton.addEventListener('click', () => runDueAutomations(true));
    openStudioTimelineButton.addEventListener('click', openStudioTimeline);
    timelinePreviousWeekButton.addEventListener('click', () => {
        timelineWeekOffset -= 1;
        renderStudioTimeline();
    });
    timelineTodayButton.addEventListener('click', () => {
        timelineWeekOffset = 0;
        renderStudioTimeline();
    });
    timelineNextWeekButton.addEventListener('click', () => {
        timelineWeekOffset += 1;
        renderStudioTimeline();
    });
    enableStudioNotificationsButton.addEventListener('click', enableStudioNotifications);
    milestoneForm.addEventListener('submit', addStudioMilestone);
    milestoneList.addEventListener('click', handleMilestoneAction);
    milestoneList.addEventListener('change', handleMilestoneAction);
    projectBoard.addEventListener('dragstart', (event) => {
        if (event.target.closest('button')) {
            event.preventDefault();
            return;
        }
        const card = event.target.closest('[data-project-task-key]');
        if (!card) return;
        draggedProjectTaskKey = card.dataset.projectTaskKey;
        card.classList.add('is-dragging');
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', draggedProjectTaskKey);
    });
    projectBoard.addEventListener('dragend', (event) => {
        event.target.closest('[data-project-task-key]')?.classList.remove('is-dragging');
        projectBoardColumns.forEach((column) => column.classList.remove('is-drop-target'));
        draggedProjectTaskKey = null;
    });
    projectBoardColumns.forEach((column) => {
        column.addEventListener('dragover', (event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
            column.classList.add('is-drop-target');
        });
        column.addEventListener('dragleave', (event) => {
            if (!column.contains(event.relatedTarget)) column.classList.remove('is-drop-target');
        });
        column.addEventListener('drop', (event) => {
            event.preventDefault();
            column.classList.remove('is-drop-target');
            const taskKey = draggedProjectTaskKey || event.dataTransfer.getData('text/plain');
            if (taskKey) moveProjectTaskToStatus(taskKey, column.dataset.boardStatus);
        });
    });
    teamChatButton.addEventListener('click', () => {
        if (teamChatPanel.classList.contains('is-open')) closeTeamChat();
        else openTeamChat();
    });
    officeControlsButton.addEventListener('click', () => {
        if (officeControlsPanel.classList.contains('is-open')) closeOfficeControls();
        else openOfficeControls();
    });
    closeOfficeControlsButton.addEventListener('click', closeOfficeControls);
    officeMotionSpeed.addEventListener('change', () => {
        officeSettings.motionSpeed = Number(officeMotionSpeed.value);
        applyOfficeSettings(true);
    });
    officeLightingMode.addEventListener('change', () => {
        officeSettings.lighting = officeLightingMode.value;
        applyOfficeSettings(true, false);
    });
    officeMovementToggle.addEventListener('change', () => {
        officeSettings.movementEnabled = officeMovementToggle.checked;
        applyOfficeSettings(true);
    });
    officeWorkMotionToggle.addEventListener('change', () => {
        officeSettings.workMotionsEnabled = officeWorkMotionToggle.checked;
        applyOfficeSettings(true, false);
    });
    officeEmotionToggle.addEventListener('change', () => {
        officeSettings.emotionsEnabled = officeEmotionToggle.checked;
        applyOfficeSettings(true);
    });
    resetAgentPositionsButton.addEventListener('click', () => resetAgentPositions(true));
    sendAgentToCoffeeButton.addEventListener('click', () => runOfficeInteraction('coffee'));
    closeTeamChatButton.addEventListener('click', closeTeamChat);
    backTeamChatToHubButton.addEventListener('click', returnToStudioDashboard);
    teamChatForm.addEventListener('submit', sendCEOMessage);
    bridgeButton.addEventListener('click', openBridge);
    closeBridgeButton.addEventListener('click', closeBridge);
    backBridgeToHubButton.addEventListener('click', returnToStudioDashboard);
    copyPromptButton.addEventListener('click', copyBridgePrompt);
    openChatGPTButton.addEventListener('click', () => {
        window.open('https://chatgpt.com/', '_blank', 'noopener,noreferrer');
        addActivity('已從 ChatGPT Bridge 開啟 ChatGPT');
    });
    saveResultButton.addEventListener('click', () => saveBridgeResult(false));
    completeBridgeTaskButton.addEventListener('click', () => saveBridgeResult(true));
    exportButton.addEventListener('click', () => {
        exportOfficeData();
        addActivity('已匯出 ReGift AI Studio 備份檔');
        showToast('Office backup exported');
    });
    importButton.addEventListener('click', () => importFileInput.click());
    importFileInput.addEventListener('change', () => {
        importOfficeData(importFileInput.files?.[0]);
    });
    assignForm.addEventListener('submit', assignTask);
    pauseButton.addEventListener('click', () => {
        if (!selectedAgentId) return;
        setAgentPaused(selectedAgentId, !pausedAgents.has(selectedAgentId));
    });
    breakButton.addEventListener('click', () => setDesignResting(!designResting));
    meetingButton.addEventListener('click', () => setMeeting(!meetingActive));
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && officeControlsPanel.classList.contains('is-open')) {
            closeOfficeControls();
        } else if (event.key === 'Escape' && bridgeModal.classList.contains('is-open')) {
            closeBridge();
        } else if (event.key === 'Escape' && automationCenter.classList.contains('is-open')) {
            closeAutomationCenter();
        } else if (event.key === 'Escape' && studioTimeline.classList.contains('is-open')) {
            closeStudioTimeline();
        } else if (event.key === 'Escape' && projectTaskInspector.classList.contains('is-open')) {
            closeProjectTaskInspector();
        } else if (event.key === 'Escape' && projectBoard.classList.contains('is-open')) {
            closeProjectBoard();
        } else if (event.key === 'Escape' && deliverablesLibrary.classList.contains('is-open')) {
            closeDeliverablesLibrary();
        } else if (event.key === 'Escape' && studioDashboard.classList.contains('is-open')) {
            closeStudioDashboard();
        } else if (event.key === 'Escape' && departmentWorkspace.classList.contains('is-open')) {
            closeDepartmentWorkspace();
        } else if (event.key === 'Escape' && teamChatPanel.classList.contains('is-open')) {
            closeTeamChat();
        } else if (event.key === 'Escape') {
            closePanel();
        }
    });
    window.addEventListener('resize', fitOfficeToViewport);
    window.addEventListener('orientationchange', fitOfficeToViewport);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (movementTimer) window.clearInterval(movementTimer);
            movementTimer = null;
            if (emotionTimer) window.clearTimeout(emotionTimer);
            emotionTimer = null;
            return;
        }
        startAgentMovement();
        scheduleAgentEmotion();
    });
    window.addEventListener('beforeunload', () => {
        if (!skipPersistOnUnload) persistState();
        if (tickTimer) window.clearInterval(tickTimer);
        if (toastTimer) window.clearTimeout(toastTimer);
        if (saveTimer) window.clearTimeout(saveTimer);
        if (chatTimer) window.clearInterval(chatTimer);
        if (agentReplyTimer) window.clearTimeout(agentReplyTimer);
        if (movementTimer) window.clearInterval(movementTimer);
        if (emotionTimer) window.clearTimeout(emotionTimer);
        if (emotionHideTimer) window.clearTimeout(emotionHideTimer);
        if (interactionReturnTimer) window.clearTimeout(interactionReturnTimer);
        if (deadlineTimer) window.clearInterval(deadlineTimer);
        if (automationTimer) window.clearInterval(automationTimer);
        walkTimers.forEach((timer) => window.clearTimeout(timer));
        navigationTimers.forEach((timer) => window.clearTimeout(timer));
        navigationNodeReservations.clear();
    });

    fitOfficeToViewport();
    loadOffice();

    if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js').catch((error) => {
                console.warn('Service worker registration unavailable.', error);
            });
        });
    }
})();
