import IMG_8611 from "./homepagePic/IMG_8611.JPG";

export function contactPage() {
    // ✅ return HTML ก่อน
    const html = `
        <section id="section-contact">
            <div class="contact-wrapper">
                <div class="contact-left">
                    <img src="${IMG_8611}" alt="Contact Image" class="contact-image"/>
                </div>
                <div class="contact-info-box">
                    <h2>Get in Touch</h2>
                    <form id="contact-form">
                        <input type="text" id="name" placeholder="Name" required/>
                        <input type="email" id="email" placeholder="Email" required/>
                        <textarea id="message" placeholder="Message" required></textarea>
                        <button type="submit">Submit</button>
                        <p id="form-status"></p>
                    </form>
                </div>
            </div>
        </section>
    `;

    // ✅ bind event หลัง DOM พร้อม
    requestAnimationFrame(() => {
        const form = document.getElementById("contact-form");
        const status = document.getElementById("form-status");

        form?.addEventListener("submit", async (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            status.textContent = "กำลังส่ง...";

            const result = await fetchData(name, email, message);

            status.className = result.success ? "success" : "error";
            status.textContent = result.message;
        });
    });

    return html;
}

    async function fetchData(name,email,message){
        try{
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    name,
                    email,
                    message
                })
            });

            const data=await response.json();

            if(response.ok){
                return{
                    success:true, 
                    message:data.message
                };
            }else{
                return{
                    success:false,
                    message:data.message || 'เกิดข้อผิดพลาดในการส่งอีเมล'
                };
            }
        }catch(error){
            console.error('Error sending email:',error);
            return {
                success: false,
                message: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้'
            };
        }

    }
