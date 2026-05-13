import { Footer } from "../components/footer.js";
import { aboutpage } from "./aboutpage.js";
import{Portfoliopreview} from "../components/portfoliopreview.js";

export async function Homepage(){
    const phrases=[
        "Graphic Designer",
        "UI-Designer",
        "Video-editor"
    ];

    setTimeout(()=>{
        const textDisplay = document.getElementById('text');
        if(!textDisplay) return;
        
        let phraseIndex= 0;
        let charIndex=0;
        let isDeleting = false;
        let timerId = null;
            
        function typeEffect(){
            const currentPhrase = phrases[phraseIndex];

            if(isDeleting){
                charIndex--;
            }else{
                charIndex++;
            }

            textDisplay.textContent=currentPhrase.substring(0,charIndex);
            
            let typeSpeed = isDeleting ? 50:150;

            if(!isDeleting && charIndex === currentPhrase.length){
                typeSpeed = 1500;
                isDeleting = true;
            }else if(isDeleting && charIndex ===0){
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500;
            }

            timerId=setTimeout(typeEffect,typeSpeed);
        }

        typeEffect();    
    },0)
    
    const images={
        
       largePic:{src:'pages/homepagePic/VoranatePic3.webp',alt:"voranate-large-picture",class:"large"},
       smallPic1:{src:'pages/homepagePic/VoranatePic2.webp',alt:"voranate-small1-picture",class:"small1"},
       smallPic2:{src:'pages/homepagePic/VoranatePic.webp',alt:"voranate-small2-picture",class:"small2"},
    };

    const circleImages={
        firstPic:{src:'pages/homepagePic/voranate-SWU.jpg',alt:"vorante-pic1"},
        secondPic:{src:'pages/homepagePic/IMG_8611.JPG',alt:"vorante-pic1"},
        thirdPic:{src:'pages/homepagePic/IMG_8613.JPG',alt:"vorante-pic1"}

    }

    const createCircleImage =Object.values(circleImages).map(img =>`
        <div class="imgCircle">
            <img src="${img.src}" alt="${img.alt}" class="circle"/>
        </div>
    `).join('');

    const previewHTML = await Portfoliopreview();

    return`
        <section id="home">
            <div class="container">
                <div class="myInfoHome">
                    <div class ="img-container">
                        <img class="${images.largePic.class}" src ="${images.largePic.src}" alt="${images.largePic.alt}"/>
                        <div class="overlays">
                            <div class="overlay-top-right">
                                <img class="${images.smallPic2.class}" src ="${images.smallPic2.src}" alt ="${images.smallPic2.alt}"/>
                                <div class="text">
                                    <strong>Voranate Thaiprasert</strong>
                                    <p>graphic designer</p>
                                </div>
                            </div>

                            <div class="overlay-bottom-left">
                                <img class="${images.smallPic1.class}" src="${images.smallPic1.src}" alt="${images.smallPic1.alt}"/>
                            </div>
                            
                        </div>
                    </div>
                    <div class="infoText">
                        <div class="line">
                            <h1>Voranate Thaiprasert</h1>
                            <h2>I interested in <span id="text"></span></h2>
                            <p>Hello,My name is Voranate Thaiprasert<br>
                                This Website is created to collect my past<br>
                                work.
                            </p>
                        </div>
                        <div class="myPic">
                            ${createCircleImage}
                        </div>

                    </div>
                </div>
            </div>
        </section>
        ${aboutpage()}
        ${previewHTML}
        ${Footer()}
        
        
    `


}