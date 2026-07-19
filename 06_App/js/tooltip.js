(() => {
    const tooltip = document.querySelector('.office-tooltip');

    if (!tooltip) {
        return;
    }

    const titleElement = tooltip.querySelector('.tooltip-title');
    const descriptionElement = tooltip.querySelector('.tooltip-description');
    const targets = document.querySelectorAll('.tooltip-target');

    let activeTarget = null;

    const positionTooltip = (clientX, clientY) => {
        const gap = 16;
        const edge = 12;
        const rect = tooltip.getBoundingClientRect();

        let left = clientX + gap;
        let top = clientY + gap;

        if (left + rect.width > window.innerWidth - edge) {
            left = clientX - rect.width - gap;
        }

        if (top + rect.height > window.innerHeight - edge) {
            top = clientY - rect.height - gap;
        }

        tooltip.style.left = `${Math.max(edge, left)}px`;
        tooltip.style.top = `${Math.max(edge, top)}px`;
    };

    const positionByTarget = (target) => {
        const targetRect = target.getBoundingClientRect();
        positionTooltip(
            targetRect.left + targetRect.width / 2,
            targetRect.top + targetRect.height / 2
        );
    };

    const showTooltip = (target, event) => {
        activeTarget = target;

        titleElement.textContent = target.dataset.tooltipTitle || '';
        descriptionElement.textContent = target.dataset.tooltipDescription || '';
        tooltip.classList.toggle(
            'is-liquid',
            target.matches('.office-agent, .office-zone[data-department-id]')
        );

        tooltip.classList.add('is-visible');
        tooltip.setAttribute('aria-hidden', 'false');

        if (event && typeof event.clientX === 'number') {
            positionTooltip(event.clientX, event.clientY);
        } else {
            positionByTarget(target);
        }
    };

    const hideTooltip = () => {
        activeTarget = null;
        tooltip.classList.remove('is-visible');
        tooltip.classList.remove('is-liquid');
        tooltip.setAttribute('aria-hidden', 'true');
    };

    targets.forEach((target) => {
        target.addEventListener('mouseenter', (event) => {
            showTooltip(target, event);
        });

        target.addEventListener('mousemove', (event) => {
            if (activeTarget === target) {
                positionTooltip(event.clientX, event.clientY);
            }
        });

        target.addEventListener('mouseleave', hideTooltip);

        target.addEventListener('focus', () => {
            showTooltip(target);
        });

        target.addEventListener('blur', hideTooltip);
    });

    window.addEventListener('scroll', () => {
        if (activeTarget) {
            positionByTarget(activeTarget);
        }
    }, { passive: true });

    window.addEventListener('resize', hideTooltip);
})();
