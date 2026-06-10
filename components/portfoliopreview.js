export async function Portfoliopreview(){
    async function fetchData(){
        try{
            const response=await fetch(`${import.meta.env.VITE_API_URL}/api/portfolio`,{
                method:"GET",
                headers:{"Content-Type":"application/json"}
            });

            if(!response.ok){
                throw new Error(`HTTP Error:${response.status}`);
            }
            const data= await response.json();

            console.log(data);
            return data;
            
        }catch(error){
            console.error("fetch Error",error.message);
            return null;
        }

    }
    const portPreview=await fetchData();

    //Check fetch data
    if(!portPreview){
        return`
            <div class="error-state">
                <p>⚠️ ไม่สามารถโหลดข้อมูลได้</p>
            </div>
        `
    }

    const createPreviewCard=portPreview.map((item)=>`
            <div class="portCard"  data-id="${item.id}">
                <div class="bg-Overlay" style="--bg-url: url('${item.url}')">
                    <div class="item-container">
                        <img src ="${item.url}" alt="${item.title}"/>
                        <img src="pages/portfoliopagePic/apple-macbookpro16-front.png" alt="macbook-frame" class="maskImg" />
                    
                    </div>
                </div>

                <div class="portInfo">
                    <div class="portInfo-text">
                        <p>${item.role}</p>
                        <h1>${item.company}</h1>
                    </div>
                    <button class="sm-btn"  onclick="window.location.hash='/portfolio/${item.id}'">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `
    ).join("");

    return`
        <section id="section-portfolio">
            <div class="hder">
                <h1>Projects</h1>
                <p>A collection my experience,passion projects and key achievements</p>
            </div>
            <div class="carousel-track" data-slides>
                ${createPreviewCard}
            </div> 
        </section>
    
    `
}