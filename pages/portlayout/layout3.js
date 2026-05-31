// portlayout/layout3.js
export function layout3(portfolio) {
    const steps = portfolio.gallery?.map((step, i) => `
        <div class="timeline-item ${i % 2 === 0 ? 'left' : 'right'}">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
                <span class="step-num">0${i + 1}</span>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
                ${step.url
                    ? `<img src="${step.url}" alt="${step.title}" loading="lazy"/>` 
                    : ''
                }
            </div>
        </div>
    `).join('') ?? '';

    return `
        <section class="layout3-page">
            <!-- Hero -->
            <div class="l3-hero">
                <span class="l3-tag">${portfolio.role}</span>
                <h1>${portfolio.company}</h1>
                <p>${portfolio.duration}</p>
                <p class="l3-desc">
                    ${portfolio.fullDescription ?? portfolio.description}
                </p>
            </div>

            <!-- Timeline -->
            <div class="l3-process">
                <h2 class="section-title">Process</h2>
                <div class="timeline">
                    <div class="timeline-line"></div>
                    ${steps}
                </div>
            </div>

        </section>
    `;
}