export function BackToPort() {
    return`
        <a href="#/" onclick="setTimeout(()=>{
            document.getElementById('section-portfolio')
            ?.scrollIntoView({behavior:'smooth'})
            },100)">
            ← Back to Portfolio
        </a>
    `;
}