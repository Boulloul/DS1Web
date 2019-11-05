//BOULLOUL EL MAHDI ____ ABYADE KHADIJA




var MAXscore=10;

var Hscore1=document.getElementById("score-0");
var Hscore2=document.getElementById("score-1");
var Hbreak1=document.getElementById("courent-0");
var Hbreak2=document.getElementById("courent-1");

var PanelJ1=document.querySelector(".panel-joueur-0");
var PanelJ2=document.querySelector(".panel-joueur-1");

var joueurActif;

console.log(PanelJ1);
console.log(PanelJ2);

var nom0=document.getElementById("nom-0");
var nom1=document.getElementById("nom-1");


var deCache=document.querySelector(".de");
var de=document.querySelector(".de");
console.log(deCache);

function init(){
   
   
    Hscore1.innerHTML=0;
    Hscore2.innerHTML=0;
    Hbreak1.innerHTML=0;
    Hbreak2.innerHTML=0;

    PanelJ1.classList.add("actif");
    joueurActif=0;
    PanelJ2.classList.remove("actif");
    deCache.style.display="none";


}
document.body.addEventListener("onload",init());

var btnLance=document.querySelector(".btn-lancer");
var btnNew=document.querySelector(".btn-new");
var btnPass=document.querySelector(".btn-passe");

function lance(){
   var nbr=Math.floor(Math.random()*6+1);
   
switch (nbr) {
    case 1:
        de.src="de-1.png";

        break;
        
    case 2:
        de.src="de-2.png"
        break;
    case 3:
        de.src="de-3.png"
        break;
    case 4:
        de.src="de-4.png"
        break;
    case 5:
        de.src="de-5.png"
        break;
    case 6:
        de.src="de-6.png"
        break;

    
}
if(joueurActif==0){
   de.style.display="block";
     if(nbr!=1){
        Hbreak1.innerHTML=Number.parseInt(Hbreak1.innerHTML)+nbr;

      }else{
               Hbreak1.innerHTML=0; 
              joueurSuivant();
    }

}else{
    de.style.display="block";
     if(nbr!=1){
        Hbreak2.innerHTML=Number.parseInt(Hbreak2.innerHTML)+nbr;

      }else{
               Hbreak2.innerHTML=0; 
              joueurSuivant();
    }
    
   }


   

}

function joueurSuivant(){
 if(joueurActif==0){
          
    PanelJ2.classList.add("actif");
    PanelJ1.classList.remove("actif");
    joueurActif=1;
    de.style.display="none";
    Hscore1.innerHTML = Number.parseInt(Hscore1.innerHTML)+Number.parseInt(Hbreak1.innerHTML);
    if(Number.parseInt(Hscore1.innerHTML)>=MAXscore){
        nom0.innerHTML="Vainqueur!"
        btnLance.setAttribute("disabled","disabled");
        btnPass.setAttribute("disabled","disabled");
    }

 }    
 else{
    PanelJ1.classList.add("actif");
    PanelJ2.classList.remove("actif");
    joueurActif=0;
    de.style.display="none";
    Hscore2.innerHTML = Number.parseInt(Hscore2.innerHTML)+Number.parseInt(Hbreak2.innerHTML);
    if(Number.parseInt(Hscore2.innerHTML)>=MAXscore){
        nom1.innerHTML="Vainqueur!"
        btnLance.setAttribute("disabled","disabled");
        btnPass.setAttribute("disabled","disabled");
    }

 }
}


btnLance.addEventListener("click",lance);
btnNew.addEventListener("click",init);
btnPass.addEventListener("click",joueurSuivant);

