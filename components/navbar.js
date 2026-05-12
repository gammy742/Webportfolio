export function Navbar(currentPage){
    const links = [
        {page:"home", path:"/", label:"Home" ,icon:"fa fa-home"},
        {page:"about", path:"/about", label:"About" ,icon:"fa fa-user"},
        {page:"portfolio", path:"/portfolio", label:"Portfolio",icon:"fa fa-envelope"},
        {page:"contact", path:"/contact", label:"Contact",icon:"fa fa-user"}
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
                           <i class ="${link.icon}"></i>
                           <span class="label">${link.label}</span>
                        </a>
                    </li>
                `.trim()).join("")}
            </ul>
        </nav>
    `;
}

