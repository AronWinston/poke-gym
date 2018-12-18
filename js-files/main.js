'use strict'

let card = document.querySelectorAll(".card");

for(let i=0; i<card.length; i++){


card[i].style.backgroundColor+="lightBlue";
card[i].style.border="2px solid yellow";
card[i].style.boxShadow="2px 8px 45px rgba(0, 0, 0, .15)";
card[i].style.transform="translate3D(0, -2px, 0)";
}
