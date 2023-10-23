// let input = document.getElementById().
// let button = document.getElementById("sendButton");
let validateFlag = true;
let userInputY = 0;
let userInputX = 0;
let userInputR = 2;
let lastR;
console.log("Validation script loaded");
console.log("222")
console.log(jQuery);
// console.log(PF('mySliderWidget'));

$(document).ready(function () {
    PF('mySliderWidget').jq.on('slide', function (event, ui) {
        userInputR = ui.value;
        console.log(userInputR);
        redrawAllPoints(userInputR);

    });

});

function checkX(key) {
    userInputX = key;
}

function checkY(){
    userInputY = jQuery("[id$='yArg']").val();

}

function validateForm(){
    // let x = parseFloat(userInputX);
    // let y = parseFloat(userInputY);
    // let r = parseFloat(userInputR);
    // console.log("x, y, r: ", x, y, r)
    if (validateFlag === true) {
        let regex = /^\+?\d+(\.\d+)?$/;
        if (!regex.test(userInputY)) {
            Toastify({
                text: "ну не, не подходит чиселко",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #6e8580, #0c2b2a)",
                },
                onClick: function(){} // Callback after click
            }).showToast();
            return false; // Предотвращаем отправку данных
        }
        userInputY = parseFloat(userInputY);
        if (userInputX < -2 || userInputX > 2 || isNaN(userInputX) || userInputX === ''){
            Toastify({
                text: "Значение X не валидно (-2; 2)",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #6e8580, #0c2b2a)",
                },
                onClick: function(){} // Callback after click
            }).showToast();
            return false;
        }
        if (userInputY < -5 || userInputY > 3 || isNaN(userInputY) || userInputY === ''){
            Toastify({
                text: "Значение Y не валидно (-5; 5)",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #6e8580, #0c2b2a)",
                },
                onClick: function(){} // Callback after click
            }).showToast();
            return false;

        }
        if ( userInputR < 1 || userInputR > 4 || isNaN(userInputR) || userInputR === ''){
            Toastify({
                text: "Значение R не валидно (1; 4)",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #6e8580, #0c2b2a)",
                },
                onClick: function(){} // Callback after click
            }).showToast();
            return false;

        }
        console.log(userInputX, userInputY, userInputR);
        return true;
    }

    return true;

}

// draw();


// function checkY (){
//     userInputY = document.getElementById("input-y");
//     if(isNaN(userInputY.value) || userInputY.value === ''){
//
//         flag = false
//         Toastify({
//             text: "ну не, не подходит чиселко",
//             duration: 3000,
//             close: true,
//             gravity: "top", // `top` or `bottom`
//             position: "left", // `left`, `center` or `right`
//             stopOnFocus: true, // Prevents dismissing of toast on hover
//             style: {
//                 background: "linear-gradient(to right, #6e8580, #0c2b2a)",
//             },
//             onClick: function(){} // Callback after click
//         }).showToast();
//     }else{
//         if (userInputY.value >= -5 && userInputY.value <= 5){
//             flag = true;
//             document.getElementById("label-y").innerText = "y = " + userInputY.value;
//             userInputY = userInputY.value;
//             console.log("y" + userInputY);
//             console.log("sdfghpjksdhiopwsefio[h");
//         }else{
//             flag = false
//             Toastify({
//                 text: "Значение Y не валидно (-5; 5)",
//                 duration: 3000,
//                 close: true,
//                 gravity: "top", // `top` or `bottom`
//                 position: "left", // `left`, `center` or `right`
//                 stopOnFocus: true, // Prevents dismissing of toast on hover
//                 style: {
//                     background: "linear-gradient(to right, #6e8580, #0c2b2a)",
//                 },
//                 onClick: function(){} // Callback after click
//             }).showToast();
//         }
//     }
//
// }
// button.onclick = function (event){
//     event.preventDefault();
//     checkY();
//     if (flag){
//         console.log("sendData");
//         sendData(userInputX, userInputY, userInputR);
//
//     }
//
// }