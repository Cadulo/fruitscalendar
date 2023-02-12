const checkEn=document.getElementById("flexRadioDefault1");
const checkEs=document.getElementById("flexRadioDefault2");
checkEn.addEventListener('click',language);
checkEs.addEventListener('click',language);

function language(){
    let id=checkEs.checked;
    if (id==true){
        location.href="./index.html"
    }
    else{
        location.href="./indexEn.html"
    }  
}