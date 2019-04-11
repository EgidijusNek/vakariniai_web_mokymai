//
// let x = false;
// function keisti() {
//     let paveikslelis = document.getElementById('imgon');
//     if (x === true) {
//         paveikslelis.src  = 'img/on.jpg';
//
//     } else {
//         paveikslelis.src = 'img/off.jpg';
//
//     }
//     x = !x;
// }
//
//
//
// let skaicius = document.getElementById('imgon'),
//     count = 0;
// onclick = function(){
//     count+=1;
//     console.log(skaicius)
// };

$("img").click(function(){
    $("img").toggle();
});

// $(function () {
//     $("img").click(function () {
//         $("img").toggle()
//     })
// });