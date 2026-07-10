/* ======================================
   CHANNEL 13 NEWS
   SCRIPT.JS
   VERSION ALPHA 0.1
====================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       PAGE FADE-IN
    ========================== */

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s";
        document.body.style.opacity = "1";
    }, 100);

    /* ==========================
       LIVE DATE
    ========================== */

    const dateElement = document.getElementById("date");

    if(dateElement){

        const today = new Date();

        dateElement.innerHTML =
            today.toDateString();

    }

    /* ==========================
       LIVE CLOCK
    ========================== */

    const clockElement = document.getElementById("clock");

    if(clockElement){

        function updateClock(){

            const now = new Date();

            clockElement.innerHTML =
                now.toLocaleTimeString();

        }

        updateClock();

        setInterval(updateClock,1000);

    }

});


/* ==========================
   BUTTON CLICK EFFECT
========================== */

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

button.style.transform="translateY(2px)";

setTimeout(()=>{

button.style.transform="translateY(0px)";

},120);

});

});


/* ==========================
   IMAGE HOVER
========================== */

const images=document.querySelectorAll("img");

images.forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transition=".3s";

img.style.transform="scale(1.02)";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});


/* ==========================
   RANDOM HEADLINES
========================== */

const headlines=[

"Scientists Continue Monitoring Yellowstone.",

"USGS Reports Increased Seismic Activity.",

"Officials Urge Residents To Remain Calm.",

"Channel 13 Continues Live Coverage."

];

const headline=document.getElementById("headline");

if(headline){

setInterval(()=>{

const random=

headlines[Math.floor(Math.random()*headlines.length)];

headline.innerHTML=random;

},7000);

}


/* ==========================
   SCROLL TO TOP
========================== */

window.onscroll=function(){

const topButton=document.getElementById("topButton");

if(topButton){

if(document.body.scrollTop>400 ||

document.documentElement.scrollTop>400){

topButton.style.display="block";

}

else{

topButton.style.display="none";

}

}

};

function topFunction(){

document.body.scrollTop=0;

document.documentElement.scrollTop=0;

}


/* ==========================
   KONAMI CODE
========================== */

let code=[];

const konami=[
"ArrowUp",
"ArrowUp",
"ArrowDown",
"ArrowDown",
"ArrowLeft",
"ArrowRight",
"ArrowLeft",
"ArrowRight",
"b",
"a"
];

document.addEventListener("keydown",function(e){

code.push(e.key);

code=code.slice(-10);

if(JSON.stringify(code)==JSON.stringify(konami)){

alert("CLASSIFIED FILES UNLOCKED");

}

});


/* ==========================
   FUTURE PASSWORD SYSTEM
========================== */

function archivePassword(){

let password=

prompt("ENTER ARCHIVE PASSWORD");

if(password=="SUBSURFACE"){

window.location.href="archive.html";

}

else if(password!=null){

alert("ACCESS DENIED");

}

}


/* ==========================
   FUTURE EMERGENCY MODE
========================== */

function emergencyMode(){

document.body.style.background="#111";

document.body.style.color="red";

alert("EMERGENCY BROADCAST MODE");

}
