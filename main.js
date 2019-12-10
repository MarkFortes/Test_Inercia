var FPS = 30;
var cuadrado = {x:200, y:230, anchura:20, altura:20};
var teclaIzqPulsada = false;
var teclaDerPulsada = false;
var marchaAdelante = 0;
var marchaAtras = 0;
var velocidad = 0;
var potencia = 0.5;
//////////////////////////////////////////
setInterval(loop, 1000/FPS);

function loop(){
    console.log("hola");
    dibujar();
    logicaCuadrado();
}

function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    document.addEventListener("keydown", teclaPulsada, false);
    document.addEventListener("keyup", teclaSuelta, false);
}
//////////////////////////////////////////
function teclaPulsada(event){
    if(event.keyCode == 37){
        teclaIzqPulsada = true;
    }
    if(event.keyCode == 39){
        teclaDerPulsada = true;
    }
}

function teclaSuelta(event){
    if(event.keyCode == 37){
        teclaIzqPulsada = false;
    }
    if(event.keyCode == 39){
        teclaDerPulsada = false;
    }
}
//////////////////////////////////////////
function dibujar(){
    ctx.clearRect(0,0,800,300);
    dibujarSuelo();
    dibujarRectangulo();
    dibujarVelocidad();
}

function dibujarRectangulo(){
    ctx.beginPath();
    ctx.rect(cuadrado.x, cuadrado.y, cuadrado.anchura, cuadrado.altura);
    ctx.stroke();
}

function dibujarSuelo(){
    ctx.beginPath();
    ctx.moveTo(0,250);
    ctx.lineTo(canvas.width, 250);
    ctx.stroke();
}

function dibujarVelocidad(){
    ctx.font = "30px Arial";
    ctx.fillText(Math.round(velocidad) + " Km/h", 350,100);
}
//////////////////////////////////////////
function logicaCuadrado(){
    if(teclaDerPulsada == true){
        cuadrado.x += marchaAdelante;
        marchaAdelante += potencia;
        velocidad += potencia;
    }
    if(teclaIzqPulsada == true){
        cuadrado.x -= marchaAtras;
        marchaAtras += potencia;
        velocidad += potencia;
    }
    //////////////////////////
    if(teclaDerPulsada == false && marchaAdelante > 0){
        cuadrado.x += marchaAdelante;
        marchaAdelante -= potencia;
        velocidad -= potencia;
    }
    if(teclaIzqPulsada == false && marchaAtras > 0){
        cuadrado.x -= marchaAtras;
        marchaAtras -= potencia;
        velocidad -= potencia;
    }
}