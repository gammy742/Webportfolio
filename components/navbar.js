export function Navbar(currentPage){
    const links = [
        {page:"home", path:"/", label:"Home" ,icon:"ic:round-home"},
        {page:"about", path:"/about", label:"About" ,icon:"streamline-logos:about-me-logo-block"},
        {page:"portfolio", path:"/portfolio", label:"Portfolio",icon:"zondicons:portfolio"},
        {page:"contact", path:"/contact", label:"Contact",icon:"mdi:contact"}
    ];
    
    return `
        <nav id ="navbar">
            <ul class="menu">
    
               ${links.map(link => `
                    <li>
                        <a href="${link.path}"
                            data-page="${link.page}"
                            class="${currentPage === link.page ? "active":""}"
                        >
                           <iconify-icon icon="${link.icon}"class="nav-icon"></iconify-icon>
                           <span class="label">${link.label}</span>
                        </a>
                    </li>
                `.trim()).join("")}
            </ul>
        </nav>
    `;
}

// ✅ เพิ่ม initNavbar
export function initNavbar(onNavigate, onScroll) {
    document.querySelectorAll(".menu a[data-page]").forEach(a => {
        a.addEventListener("click", (e) => {
            e.preventDefault();
            const target = a.dataset.page;

            if (["home", "about", "portfolio", "contact"].includes(target)) {
                onScroll(target);
            } else {
                onNavigate(target);
            }
        });
    });
}