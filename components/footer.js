const d = new Date();
let year = d.getFullYear();

const socialMediaLinks = [
    { page: "facebook", path: "https://www.facebook.com/nut.voranate.7", icon: "fa fa-facebook", target: "_blank" ,name:"Voranate Thaiprasert"},
    { page: "instagram", path: "https://www.instagram.com/voranate_/", icon: "fa fa-instagram", target: "_blank" ,name:"voranate_"},
    { page: "line", path: "https://line.me/ti/p/VkrF4r9E3w", icon: "fa-brands fa-line", target: "_blank",name:"@voranate1234" },
    { page: "tiktok", path: "https://www.tiktok.com/@voranate", icon: "fa-brands fa-tiktok", target: "_blank" ,name:"vvoranate"},
];

export function Footer() {
    return `
        <footer class="footer">
            <p>&copy; ${year} Voranate. All rights reserved.</p>

            <ul class="social-icons">
                ${socialMediaLinks.map(link => `
                    <li>
                        <a href="${link.path}" target="${link.target}" rel="noopener noreferrer" class="${link.page}">
                            <i class="${link.icon}" aria-hidden="true"></i>
                             <span class="footerLabel">:${link.name}</span>
                        </a>
                    </li>
                `).join('')}
            </ul>  

            <div class="email">
                    <a href="mailto:thaipraservoranate@gmail.com" class="emailLink">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <span class="emailLabel">:thaiprasertvoranate@gmail.com</span>
                    </a>
            </div>
        </footer>
    `;
}