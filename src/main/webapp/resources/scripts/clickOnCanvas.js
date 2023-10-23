$(document).ready(function () {

    $('#canvas').on('click', function (event) {
        console.log
        const rect = canvas.getBoundingClientRect();
        const clickedX = event.clientX - rect.left;
        const clickedY = event.clientY - rect.top;
        let rVal = userInputR;
        const graphX = (clickedX - widthCenter) * rVal / 100;
        const graphY = (heightCenter - clickedY) * rVal / 100;

        // Установка значений для формы с id='click'
        console.log("устанавливаем значения");
        document.getElementById("jsForm:jsValue1").value = graphX;
        document.getElementById("jsForm:jsValue2").value = graphY;
        document.getElementById("jsForm:jsValue3").value = rVal;
        // Затем вызовите вашу кнопку
        button = $('[id$=myButton]').click();

        console.log("COORDINATES::");
        console.log(graphX);
        console.log(graphY);
        console.log(rVal);
        userInputX = graphX;
        userInputY = graphY;
    });
});