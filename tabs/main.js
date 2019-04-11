function keistiPsl(kuris) {
    console.log(kuris);
}

// function keistiPsl(kuris) {
//     console.log(kuris);
// }

// function keistiPsl(evt, kuris) {
//     var i, tab_turinys, tab_linkas;
//     tab_turinys = document.getElementsByClassName("tab_turinys");
//     for (i = 0; i < tab_turinys.length; i++) {
//         tab_turinys[i].style.display = "none";
//     }
//     tab_linkas = document.getElementsByClassName("tab_linkas");
//     for (i = 0; i < tab_linkas.length; i++) {
//         tab_linkas[i].className = tab_linkas[i].className.replace(" active", "");
//     }
//     document.getElementById("pirmas").style.display = "block";
//     evt.currentTarget.className += " active";
// }

// var elementai = document.getElementsByClassName('tab_turinys');
//
// function sleptiPuslapius(){
//     for(i=0;i<elementai.length;i++){
//         elementai[i].style.display = "none";
//     }
//
// }
//
// function rodytiPuslapius(){
//     for(i=0;i<elementai.length;i++){
//         elementai[i].style.display = "block";
//     }
//
// }

var elementai = document.getElementsByClassName('tab_turinys');

function sleptiPuslapius(testas){
    for(i=0;i<elementai.length;i++){
        elementai[i].style.display = "none";
    }

}

// function rodyti(testas){
// //     console.log(testas);
// // }

function keistiPsl(testas){
    sleptiPuslapius(testas);
    rodyti(testas);
}

function rodyti(kuris) {
    let elementas = document.getElementById(kuris);
    elementas.style.display = 'block';
}