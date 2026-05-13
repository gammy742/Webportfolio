import{Homepage} from "./pages/homepage.js"
import{Navbar} from "./components/navbar.js"
import { aboutpage } from "./pages/aboutpage.js";
import { carouselButton } from  "./helpers/carouselButton.js";
import{Portfoliopage} from"./pages/portforlio.js";
import{PortfolioDetail} from "./pages/portfolioDetail.js"

const routes = {
    home:{path:"#/", component:Homepage},
    about:{path:"#/about", component:aboutpage},
    portfolio:{path:"#/portfolio",component:Portfoliopage},
    portfolioDetail: { path:"#/portfolio/:id", component:PortfolioDetail },
    contact:{path:"#/contact",component:()=>`<h1>Welcome to Contact page</h1>`}
};

function getPageFromPath(){
    const hash=window.location.hash||"#/";

    // รองรับ #/portfolio/1, #/portfolio/2 ...
    if(/^#\/portfolio\/\d+$/.test(hash)) return "portfolioDetail";
    return(
        Object.keys(routes).find(key=>routes[key].path===hash) || "home"
    );
}

async function navigate(page,updateHistory){
    console.log("navigate to:", page);  
    const route = routes[page];
    if(!route) return;

    if(updateHistory){
        window.location.hash=route.path.replace("#","");
    }

    const root = document.getElementById("root");

    root.innerHTML= `
        ${Navbar(page)}
        <div id="page">
            <div class="loading-indicator">กำลังโหลด...</div>
        </div>
    `
    const pageDiv = root.querySelector("#page");
    const component = await route.component();

    if (component instanceof HTMLElement) {
        pageDiv.innerHTML="";
        pageDiv.appendChild(component);
    } else {
        // ถ้าเป็น String → ใช้ innerHTML
        pageDiv.innerHTML = component;
    }

    root.querySelectorAll(".menu a").forEach(a=>{
        a.addEventListener("click",(e)=>{
            e.preventDefault();
            console.log("nav clicked:", a.dataset.page);
            navigate(a.dataset.page, true);
        });
    });

   
    carouselButton();
   
    window.scrollTo(0,0);
}

window.addEventListener("hashchange",()=>{
    const page = getPageFromPath();
    navigate(page,false);
});


const initialPage = getPageFromPath();
await navigate(initialPage,false);

//scroll 

function handleScroll(){
    const navbar = document.getElementById("navbar");
    let scrollPosition = 400;
    
    if(!navbar) return;

    if(window.scrollY >= scrollPosition){
        navbar.classList.add("sticky");

    }else{
        navbar.classList.remove("sticky");
    }
}

window.addEventListener("scroll",handleScroll);

