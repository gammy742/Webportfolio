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

    const createPreviewCard=portPreview.map((item)=>{
        return`
            <div class="portCard">
                <img src ="${item.url}" alt="${item.title}"/>
                <div class="portInfo">
                    <h1>${item.company}</h1>
                    <h2>${item.role}</h2>
                    <p>${item.description}</p>
                </div>
            </div>
        `
    }).join("");

    return`
        <div class="carousel-track" data-slides>
             ${createPreviewCard}
         </div>
    
    `
}