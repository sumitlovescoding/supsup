const btn =
document.getElementById("openBtn");

const welcome =
document.getElementById("welcome-screen");

const main =
document.getElementById("main-content");

const music =
document.getElementById("music");

btn.addEventListener("click",()=>{

welcome.style.display="none";

main.style.display="block";

music.play();

});
function createFlower(){

    const flower = document.createElement("div");

    flower.classList.add("flower");

    const flowers = ["🌹","🌺","🌸","💮"];

    flower.innerHTML =
    flowers[Math.floor(Math.random()*flowers.length)];

    const direction =
    Math.random() > 0.5;

    flower.style.top =
    Math.random()*100 + "vh";

    if(direction){

        flower.style.left = "-50px";

        flower.animate([
            {
                transform:"translateX(0)"
            },
            {
                transform:"translateX(110vw)"
            }
        ],{
            duration:7000,
            easing:"linear"
        });

    }else{

        flower.style.left = "100vw";

        flower.animate([
            {
                transform:"translateX(0)"
            },
            {
                transform:"translateX(-110vw)"
            }
        ],{
            duration:7000,
            easing:"linear"
        });

    }

    document
    .getElementById("flowers")
    .appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },7000);
}

setInterval(createFlower,400);

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML="❤️";

heart.classList.add("heart");

heart.style.left=
Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

}

setInterval(createHeart,1000);

const musicBtn =
document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click",()=>{

if(isPlaying){

music.pause();

musicBtn.innerHTML="🎵";

}else{

music.play();

musicBtn.innerHTML="⏸️";

}

isPlaying = !isPlaying;

});