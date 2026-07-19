(() => {
    'use strict';

    const welcomeScreen = document.querySelector('#welcome-screen');
    const studioScreen = document.querySelector('#studio-screen');
    const enterStudioButton = document.querySelector('#enter-studio-button');
    const backButton = document.querySelector('#back-button');

    if (!welcomeScreen || !studioScreen || !enterStudioButton || !backButton) {
        console.warn('ReGift screen controls are unavailable.');
        return;
    }

    const showStudio = () => {
        welcomeScreen.hidden = true;
        studioScreen.hidden = false;
        document.body.classList.add('studio-active');
        window.requestAnimationFrame(() => {
            window.dispatchEvent(new Event('resize'));
            backButton.focus({ preventScroll: true });
        });
    };

    const showWelcome = () => {
        studioScreen.hidden = true;
        welcomeScreen.hidden = false;
        document.body.classList.remove('studio-active');
        window.requestAnimationFrame(() => {
            enterStudioButton.focus({ preventScroll: true });
        });
    };

    enterStudioButton.addEventListener('click', showStudio);
    backButton.addEventListener('click', showWelcome);

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !studioScreen.hidden) {
            const openOverlay = document.querySelector(
                '.is-open, .agent-control-panel[aria-hidden="false"]'
            );
            if (!openOverlay) showWelcome();
        }
    });
})();
