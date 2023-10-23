function handleAddEntryEvent(data) {
    if (data.status === 'success') {
        // тут вы можете обработать данные после успешного добавления новой строки
        // например, извлечь последний добавленный элемент из таблицы и работать с ним

        // предполагая, что ваша таблица имеет id "result-table"
        let table = document.getElementById("result-table");
        let firstRow = table.rows[1];

        // теперь вы можете извлечь данные из последнего ряда и работать с ними
        let xValue = firstRow.cells[0].textContent;
        let yValue = firstRow.cells[1].textContent;
        let rValue = firstRow.cells[2].textContent;
        let resultValue = firstRow.cells[3].textContent;
        drawPoint(resultValue);
    }
}
function redrawAllPoints(r){
    ctx.clearRect(0, 0, 1000, 1000);
    draw();
    let table = document.getElementById("result-table");
    for(let i = 1; i < table.rows.length; i++){
        let currentRow = table.rows[i];
        drawPointWithCords(hit(parseFloat(currentRow.cells[0].textContent.trim()), parseFloat(currentRow.cells[1].textContent.trim()) ,r), currentRow.cells[0].textContent.trim(), currentRow.cells[1].textContent.trim(), r);
    }

}

$(document).ready(function() {
    loadPage();
});

function loadPage() {
    let table = document.getElementById("result-table");
    for(let i = 1; i < table.rows.length; i++){
        let currentRow = table.rows[i];
        console.log("asdfasfd")
        PF('mySliderWidget').setValue(2);
        $('[id$=decimal]').val(2);
        // document.getElementById('decimal').value = 2;
        drawPointWithCords(hit(parseFloat(currentRow.cells[0].textContent.trim()), parseFloat(currentRow.cells[1].textContent.trim()) ,2), currentRow.cells[0].textContent.trim(), currentRow.cells[1].textContent.trim(), 2);
    }
}
function hit(x, y, r) {
    if (x > 0 && y > 0) {
        return hitTriangle(x, y, r);
    }
    if (x > 0 && y < 0) {
        return hitCircle(x, y, r);
    }
    if (x < 0 && y < 0) {
        return hitSquare(x, y, r);
    }
    if ((x === 0 && y <= r && y >= -r) || (y === 0 && x <= r && x >= -r)) {
        return "In";
    } else {
        return "Out";
    }
}

function hitCircle(x, y, r) {
    if (x * x + y * y <= r * r) {
        return "In";
    }
    return "Out";
}

function hitSquare(x, y, r) {
    if (x >= -r && y >= -r) {
        return "In";
    }
    return "Out";
}

function hitTriangle(x, y, r) {
    if (y <= -2 * x + r) {
        return "In";
    }
    return "Out";
}