import { Footer } from "../components/footer.js";

export async function Portfoliopage() {

    //Fetch Data
    async function fetchData() {
        try {
            const response = await fetch(`http://localhost:3000/api/portfolio/1`,{method:"GET"});
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const data = await response.json();
            console.log(data);
            return data;
 
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    }

    //Get data from API
    const portfolio= await fetchData();

    //Check data
    if(!portfolio){
        return`
            <div class="error-state">
                <p>⚠️ ไม่สามารถโหลดข้อมูลได้</p>
            </div>
            ${Footer()}
        `;
        
    }

    //Create Card
    const createSlides=portfolio.gallery?.map((item,index)=>{
        return`
            <div class="carousel-slide"${index===0 ? "data-active":""}>
                <div class="portfolio-card">
                    <img src="${item.url}" alt="${item.title}" loading="lazy"/>
                    <div class="portfolio-card-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>

                    <button
                        class="view-detail-btn"
                        data-id="${item.id}"
                        data-url="${item.url ?? ""}"
                        data-title="${item.title ?? ""}"
                        data-description="${item.description ?? ""}"
                        data-full-description="${item.fullDescription ?? ""}"
                        data-type="${item.type ?? ""}"
                        data-category="${item.category ?? ""}"
                    >
                        ดูรายละเอียด
                    </button>
                </div>
            </div>
        `
    }).join("")??"";
    return`
        <section class="portfolio-page">

            <div class="portfolio-header">
                <h1>${portfolio.company}</h1>
                <h2>${portfolio.duration}</h2>
                <p>${portfolio.role}</p>
            </div>

            <!-- Carousel -->
            <div class="carousel-wrapper" data-carousel>
                <button 
                    class="carousel-btn prev"
                    data-carousel-button="prev"
                    aria-label="previous"
                >
                    &#8592;
                </button>

                <div class="carousel-track-wrapper">
                    <div class="carousel-track" data-slides>
                        ${createSlides}
                    </div>
                </div>

                <button 
                    class="carousel-btn next"
                    data-carousel-button="next"
                    aria-label="next"
                >
                    &#8594;
                </button>
            </div>


        </section>

        <!-- Modal -->
        <div class="portfolio-modal" id="portfolio-modal" style="display:none;">
            <div class="modal-overlay" id="modal-overlay"></div>
            <div class="modal-content">
                <button class="close-modal" id="close-modal" aria-label="ปิด">&times;</button>
                <div class="modal-body" id="modal-body"></div>
            </div>
        </div>
        ${Footer()}
    `;

}