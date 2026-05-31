// portlayout/layout4.js
export function layout4(portfolio) {
    const gallery = portfolio.gallery?.map((item) => `
        <div class="l4-card">
            <img src="${item.url}" alt="${item.title}" loading="lazy"/>
            <div class="l4-card-info">
                <h4>${item.title}</h4>
                <p>${item.type}</p>
                 <a href="${item.link ??'#'}" class="l4-link" target="_blank">Visit Project</a>
            </div>
        </div>
    `).join('') ?? '';

    return `
        <section class="layout4-page">
            <!-- Fullscreen Hero -->
            <div class="l4-hero" style="--bg: url('${portfolio.cover ?? portfolio.url}')">
                <div class="l4-hero-overlay">
                    <div class="l4-hero-content">
                        <p class="l4-eyebrow">${portfolio.role} · ${portfolio.duration}</p>
                        <h1>${portfolio.company}</h1>
                        <p class="l4-desc">
                            ${portfolio.fullDescription ?? portfolio.description}
                        </p>
    
                        <div class="l4-scroll-hint">↓ Scroll</div>
                    </div>
                </div>
            </div>

            <!-- Card Grid -->
            <div class="l4-grid-section">
                <div class="l4-grid">
                    ${gallery}
                </div>
               
            </div>

        </section>
    `;
}