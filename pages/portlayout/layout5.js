// portlayout/layout5.js
export function layout5(portfolio) {
    const tags = portfolio.tags?.map((tag) => `
        <span class="l5-tag">${tag}</span>
    `).join('') ?? '';

    const featured = portfolio.gallery?.[0];
    const rest = portfolio.gallery?.slice(1) ?? [];

    const restGrid = rest.map((item) => `
        <div class="l5-grid-item">
            <img src="${item.url}" alt="${item.title}" loading="lazy"/>
            <div class="l5-grid-caption">
                <strong>${item.title}</strong>
                <span>${item.category ?? ''}</span>
            </div>
        </div>
    `).join('');

    return `
        <section class="layout5-page">

            <!-- Top Bar -->
            <div class="l5-topbar">
                <span class="l5-company">${portfolio.company}</span>
                <div class="l5-tags">${tags}</div>
            </div>

            <!-- Featured Image -->
            ${featured ? `
            <div class="l5-featured">
                <img src="${featured.url}" alt="${featured.title}" loading="lazy"/>
                <div class="l5-featured-text">
                    <h1>${portfolio.company}</h1>
                    <p>${portfolio.role} · ${portfolio.duration}</p>
                </div>
            </div>
            ` : ''}

            <!-- Description -->
            <div class="l5-about">
                <div class="l5-about-inner">
                    <h2>About the Project</h2>
                    <p>${portfolio.fullDescription ?? portfolio.description}</p>
                </div>
            </div>

            <!-- Bento Grid -->
            <div class="l5-bento">
                ${restGrid}
            </div>

        </section>
    `;
}