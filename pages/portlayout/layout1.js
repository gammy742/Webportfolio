// portlayout/layout1.js
export function layout1(portfolio) {
    const gallery = portfolio.gallery?.map((item) => `
        <div class="masonry-item">
            <img 
                src="${item.url}" 
                alt="${item.title}" 
                loading="lazy"
                decoding="async"
            />
            <div class="img-overlay">
                <div class="img-title">${item.title}</div>
                <div class="img-type">${item.type} · ${item.category}</div>
            </div>
        </div>
    `).join('') ?? '';

    return `
        <section class="layout1-page">

            <!-- Hero -->
            <div class="l1-hero">
                <h1>${portfolio.company}</h1>
                <div class="l1-badges">
                    <span class="badge">${portfolio.role}</span>
                    <span class="badge">${portfolio.duration}</span>
                </div>
                <p class="l1-desc">
                    ${portfolio.fullDescription ?? portfolio.description}
                </p>
            </div>

            <!-- Masonry Grid -->
            <div class="l1-gallery">
                <div class="masonry-grid">
                    ${gallery}
                </div>
            </div>

        </section>
    `;
}