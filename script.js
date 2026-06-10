import{Homepage} from "./pages/homepage.js"
import{Navbar,initNavbar } from "./components/navbar.js"
import { aboutpage } from "./pages/aboutpage.js";
import { carouselButton } from  "./helpers/carouselButton.js";
import{Portfoliopreview} from"./components/portfoliopreview.js";
import{PortfolioDetail} from "./pages/portfolioDetail.js"
import{Footer} from "./components/footer.js";
import{contactPage}from"./pages/contactpage.js";
const routes = {
    home:{ path:"#/", component:renderMainPage },
    portfolioDetail: { path:"#/portfolio/:id", component:PortfolioDetail }
};

async function renderMainPage(){
    const homeHTML=await Homepage();
    const aboutHTML=await aboutpage();
    const portfolioHTML=await Portfoliopreview();
    const footerHTML=await Footer();
    const contactHTML=await contactPage();

    return`
        ${homeHTML}
        ${aboutHTML}
        ${portfolioHTML}
        ${contactHTML}
        ${footerHTML}
    `;
}
function getPageFromPath(){
    const hash=window.location.hash||"#/";

    // รองรับ #/portfolio/1, #/portfolio/2 ...
    if(/^#\/portfolio\/\d+$/.test(hash)) return "portfolioDetail";
    return(
        Object.keys(routes).find(key=>routes[key].path===hash) || "home"
    );
}

async function renderPage(page){
    const root = document.getElementById("root");
    const route = routes[page];
    if(!route) return;

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

    // ✅ แทนด้วย
    initNavbar(
        (target) => navigate(target, true),
        (target) => {
            const currentPage = getPageFromPath();
            if (currentPage === "home") {
                scrollToSection(target);
            } else {
                navigate("home", true).then(() => {
                    requestAnimationFrame(() => scrollToSection(target));
                });
            }
        }
    );

    carouselButton();
}

async function navigate(page,updateHistory){
    console.log("navigate to:", page);  
    const route = routes[page];
    if(!route) return;

    if(updateHistory){
        window.location.hash=route.path.replace("#","");
    }

    await renderPage(page);

    window.scrollTo(0, 0);
}

// ✅ scroll function กลาง
function scrollToSection(sectionId) {
    const el = document.getElementById(`section-${sectionId}`);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
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

