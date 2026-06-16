import ChanrongLogo from "../portfoliopagePic/Flower.png";
import Honeybottle from "../portfoliopagePic/hnposternotext.png";
import researchPDF from "../portfoliopagePic/Chanrong-Plan-Reasearch.pdf";
// portlayout/layout3.js
export function layout3(portfolio) {

    const overview={
        employment:{
            icon:"clarity:employee-solid",
            label:"Employment",
            h1Word:"Employment Creation",
            sub:"Creating jobs and income opportunities for local residents."
        },
        productQuality:{
            icon: "ix:product",
            label:"Product Quality",
            h1word:"Quality Products",
            sub:"Improving production processes to meet quality standards."
        },
        increaseValue:{
            icon: "streamline-sharp:dollar-increase-solid",
            label:"Increase Value",
            h1Word:"Incresing value",
            sub:"Developing branding and packaging to increase product value."
        },
        sustainable:{
            icon: "carbon:sustainability",                  
            label:"Sustainability",
            h1Word:"Sustainable",
            sub:"Supporting long-term community development."
        }

    }

    const createOverview=Object.values(overview).map((item)=>`
        <div class="overview-item">
            <iconify-icon icon="${item.icon}" style="color:#0b5746" class="iconifie"></iconify-icon>
            <div class="overview-label">
                <h2>${item.h1Word}</h2>
                <p>${item.sub}</p>
            </div>
        </div>
    `).join('');

    //Problem Section
    function renderProblem(step){
        const images = typeof step.url ==="object"
            ?Object.values(step.url).map((url,i)=>`
                <div class="research-card">
                    <img src="${url}" alt="${step.labels?.[i]??step.title}" loading="lazy" class="problemIMG"/>
                    <div class="research-card-label">${step.labels?.[i] ?? step.title}</div>
                </div>
            `).join('')
            : `<div class="research-card">
                <img src="${step.url}" alt="${step.title}" loading="lazy"/>
                <div class="research-card-label">${step.title}</div>
            </div>`;

        return`
            <div class="problem-section">
                <div class="section-text">
                    <h1 class="head-sec">01 PROBLEM</h1>
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                </div>
                <div class="research-images">
                    ${images}
                </div>
            </div>`;
        
    }

    //Research Section
    function renderResearch(step){
        const stats=step.stats?.map(s=>`
            <div class="stat-item">
                <iconify-icon icon="${s.icon}" style="font-size:clamp(28px,4vw,45px); color:#1FB392;"></iconify-icon>
                <div class="stat-info">
                    <strong>${s.value}</strong>
                    <span>${s.label}</span>
                </div>
            </div>
        `).join('') ?? '';
        
        return `
        <div class="research-section">
            <div class="potential-content">
                <h1 class="head-sec2">02 RESEARCH</h1>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
                <div class="stats-row">${stats}</div>
            </div>
            <div class="research-ig-overlay">
                <img src="${step.url}" alt="${step.title}" loading="lazy" class="research-hero-images"/>
            </div>
        </div>`;
    }

    //Develop-section
    function renderDevelop(step){
       

        const strategy=step['Development-list']?.map((item,i,arr)=>`
            <div class="stragy-step">
                <div class="stragy-info">
                    <iconify-icon icon="${item.icon}" style="font-size:2rem; color:#0b5746;"></iconify-icon>
                    <div class="head-icon">
                        <span class="step-num">0${i + 1}</span>
                        <h3>${item.step}</h3>
                    </div>
                </div>
                <p>${item.description}</p>
            </div>
             ${i < arr.length - 1 ? '<div class="arrow-sep">›</div>' : ''}
        `).join('') ?? '';

        return `
        <div class="develop-section">
            <div class="dvlop-text">
                <h1 class="head-sec">03 Development Strategy</h1>
            </div>
            <div class="timeline-row">${strategy}</div>
        </div>`;
    }

    //renderDesign
    function renderDesign(step){
        if (!step) return ''; 
        
        const items=step.designs?.map(d=>`
            <div class="design-item">
                <img src="${d.url}" alt="${d.label}" loading="lazy"/>
                <p>${d.label}</p>
            </div>
        `).join('') ?? '';

        return `
        <div class="design-grid-section">
            <div class="dvlop-text">
                <h1 class="head-sec4">04 ${step.title}</h1>
            </div>
            <div class="design-grid">${items}</div>
        </div>`;
    }

    //render Expect outcomes
    function renderOutcomes(step){
        if (!step) return ''; 

        const outcomes=step.outcomes?.map(o=>`
            <div class="outcome-item">
                <iconify-icon icon="${o.icon}" style="font-size:clamp(28px,4vw,45px); color:#0B5746;"></iconify-icon>
                <div class="outcomes-text">
                    <h3>${o.title}</h3>
                    <p>${o.sub}</p>
                </div>
            </div>
        `).join('') ?? '';

        return `
        <div class="outcomes-section">

            <h1 class="head-sex">05 ${step.title}</h1>
            <div class="outcomes-grid">${outcomes}</div>
            <div class="research-ig-overlay">
                <img src="${step.url}" alt="${step.title}" loading="lazy" class="heroine-images"/>
            </div>
        </div>`;
    }

    return `
        <section class="layout3-page">
            <!-- Hero -->
            <div class="l3-hero">
                <div class="l3-hero-badges">
                    <div class="l3-hero-title">
                        <img src="${ChanrongLogo}" alt="Chanrong-Logo"/>
                        <h1>${portfolio.company}</h1>
                    </div>
                    <p class="l3-desc">
                        ${portfolio.fullDescription ?? portfolio.description}
                    </p>
                    <button class="l3-hero-btn"><a href="${researchPDF}" download="development_plan.pdf">See research</a></button>
                </div>
                <div class="l3-img-overlay">
                    <img src="${Honeybottle}" alt="Honeybottle" class="hero-image"/>
                </div>
               
            </div>

            <!-- Overview -->
            <div class="l3-overview">
                ${createOverview}
            </div>

            <!-- Process -->
            <div class="l3-process">
                ${renderProblem(portfolio.gallery.find(s => s.type === "Thesis-Research"))}
                ${renderResearch(portfolio.gallery.find(s => s.type === "Community-Potential"))}
                ${renderDevelop(portfolio.gallery.find(s => s['Development-list']))}
                ${renderDesign(portfolio.gallery.find(s => s.type === "Design-Grid"))}
                ${renderOutcomes(portfolio.gallery.find(s => s.type === "Outcome-Cards"))}
            </div>

        </section>
    `;
}