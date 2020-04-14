var slide = ["image/img1.jpg", "image/img2.jpg", "image/img3.jpg", "image/img4.jpg", "image/img5.jpg"];
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;

    if (numero > slide.length - 1)
        numero = 0;
    
    document.getElementById("slide").src = slide[numero];

    
}
