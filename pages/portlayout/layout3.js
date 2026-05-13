export function layout3(portfolio){
    const gallery=portfolio.gallery?.map((item)=>`
        <div>
            <img src="${item.url}" alt="${item.title}" loading="lazy"/>
            <div class="img-overlay">
                <div class="img-title">${item.title}</div>
                <div class="img-type">${item.type} · ${item.category}</div>
            </div>
        </div>
    `).join("")??"";

    return`
        <section class="portfolio-page">
            <div class="portfolio-hero">
                <h1>${portfolio.company}</h1>
                <div class="portfolio-meta">
                    <span class="badge">${portfolio.role}</span>
                    <span class="badge">${portfolio.duration}</span>
                </div>
                 <p class="portfolio-desc">${portfolio.fullDescription ?? portfolio.description}</p>
            </div>
            <div class="gallery-section">
                <div class="masonry">${gallery}</div>
            </div>
        </section>
    `
}