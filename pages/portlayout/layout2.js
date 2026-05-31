// portlayout/layout2.js
export function layout2(portfolio) {
    const skills = portfolio.skills?.map((skill) => `
        <div class="skill-bar">
            <span>${skill.name}</span>
            <div class="bar">
                <div class="bar-fill" style="width: ${skill.percent}%"></div>
            </div>
        </div>
    `).join('') ?? '';

    const gallery = portfolio.gallery?.map((item) => `
        <div class="l2-thumb">
            <img src="${item.url}" alt="${item.title}" loading="lazy"/>
            <span>${item.title}</span>
        </div>
    `).join('') ?? '';

    return `
        <section class="layout2-page">
            <!-- Left Panel (Sticky Info) -->
            <div class="l2-left">
                <div class="l2-info">
                    <p class="l2-index">Project</p>
                    <h1>${portfolio.company}</h1>
                    <p class="l2-role">${portfolio.role}</p>
                    <p class="l2-duration">${portfolio.duration}</p>
                    <p class="l2-desc">
                        ${portfolio.fullDescription ?? portfolio.description}
                    </p>

                    <!-- Skills -->
                    <div class="l2-skills">
                        ${skills}
                    </div>
                </div>
            </div>

            <!-- Right Panel (Scrollable Gallery) -->
            <div class="l2-right">
                <div class="l2-gallery">
                    ${gallery}
                </div>
            </div>

        </section>
    `;
}