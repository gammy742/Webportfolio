import { Footer } from "../components/footer.js";

async function fetchData() {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/portfolio`, { method: "GET" });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

export async function Portfoliopage() {
    const portfolio = await fetchData();

    if (!portfolio) {
        return `
            <div class="error-state">
                <p>⚠️ ไม่สามารถโหลดข้อมูลได้</p>
            </div>
        `;
    }

    const createPortfolioSection = portfolio.map((item) => {
        const reverseClass = item.id % 2 === 0 ? "reverse" : "";
        return `
            <div class="full-section ${reverseClass}" data-id="${item.id}">
                <img src="${item.url}" alt="${item.company}"/>
                <div class="full-port">
                    <div>
                        <span class="id">0${item.id}</span>
                        <span class="company">${item.company}</span>
                    </div>
                    <h2>${item.duration}</h2>
                    <h3>${item.role}</h3>
                    <p>${item.fullDescription}</p>
                    <button class="pr-btn ${reverseClass}" onclick="window.location.href='/#/portfolio/${item.id}'">See more</button>
                </div>
            </div>
            <button class="pr-btn-mobile ${reverseClass}" onclick="window.location.href='/#/portfolio/${item.id}'">See more</button>
        `;
    }).join("");

    return `
        ${createPortfolioSection}
        ${Footer()}
    `;
}