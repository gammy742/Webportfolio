import { Footer } from "../components/footer.js";
import { layout1 } from "./portlayout/layout1.js";
import { layout2 } from "./portlayout/layout2.js";
import { layout3 } from "./portlayout/layout3.js";
import { layout4 } from "./portlayout/layout4.js";
import { layout5 } from "./portlayout/layout5.js";

const layouts = { 1:layout1, 2:layout2, 3:layout3, 4:layout4, 5:layout5 };

async function fetchData(id) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/portfolio/${id}`, { method:"GET" });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

export async function PortfolioDetail() {
    const hash = window.location.hash;
    const id = hash.match(/\/portfolio\/(\d+)/)?.[1] ?? "1";

    const portfolio = await fetchData(id);

    if (!portfolio) {
        return `
            <div class="error-state">
                <p>⚠️ ไม่สามารถโหลดข้อมูลได้</p>
            </div>
            ${Footer()}
        `;
    }

    const renderLayout = layouts[id] ?? layout1;

    return `
        ${renderLayout(portfolio)}
        ${Footer()}
    `;
}