

export function aboutpage(){
    const carouselImages =[
        {src:'pages/aboutpagePic/NagaIG.PNG', alt:"nagaIG"},
        {src:'pages/aboutpagePic/NagaFB.jpg', alt:"nagaFB"},
        {src:'pages/aboutpagePic/NagaTK.PNG', alt:"nagaTK"}
    ]

    return `
            <section id="about-section">
                <div class="aboutOverlay">
                    <div class="carousel"  data-carousel >
                       <button class="carousel-button prev" data-carousel-button="prev">&#10094;</button>
                        <button class="carousel-button next" data-carousel-button="next">&#10095;</button>
                        <img src="pages/aboutpagePic/Phoneframe.png" alt="Phone-frame" class="maskImage" />
                        <ul data-slides>
                            ${carouselImages.map((image,index)=>`
                                <li class ="slides" ${index ===0 ? 'data-active':''}> 
                                    <img src ="${image.src}" alt="${image.alt}" class="carousel-image"/>
                                </li>
                            `.trim()).join("")}
                        </ul>
                    </div>

                    <div class="aboutInfoContainer">
                        <h1 class ="headInfo">ABOUT ME</h1>
                    
                        <div class="about-info">
                            <h2>Hello my name is <br>Voranate Thaiprasert</h2>
                            <p>I am 4th year student at  Srinakharinwirot
                            Univeristy in Collage of Social
                            Communication Innovation(COSCI)
                            <div class="major">
                                <p><span class ="m">Major:</span> Economics Communication
                                <p><span class ="m">Minor:</span> Interactive and Multimedia Design
                            </div>
                            <p>
                                I am interested in graphic design,
                                particularly in poster design, web design,
                                logo design, and packaging design.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    `;
}