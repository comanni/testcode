


$(document).ready(function () {
init();

function init(){
    makeButton();
}
let btn =$(".btnOkrExport");
let tbl = "table";
btn.on("click", function (e) {
    let buttonName = ["주간WBS", "주간리뷰", "Action Plan"];
    let number = e.target.dataset.tablenumber;
    let dt = new Date();
    let year = itoStr(dt.getFullYear());
    let month = itoStr(dt.getMonth() + 1);
    let day = itoStr(dt.getDate());
    let hour = itoStr(dt.getHours());
    let mins = itoStr(dt.getMinutes());
    let postfix = year + month + day + "_" + hour + mins;
    let title = document.getElementById("title-text").innerText.trim();
    let fileName = title + "_" + buttonName[number - 1] + ".xlsx";

    // 테이블에 데이터 넣기 요청
    tableDataOverwrite("table"+number);

    TableToExcel.convert(document.getElementById("table"+number), {
    name : fileName,
    sheet: {
    name: "Sheet 1"
        }
      });
});

function makeButton(){
    let tablelist = document.getElementsByTagName("table");
    const downloadButtonWrap = document.getElementById("downloadButtonWrap");
    let buttonName = ["주간WBS", "주간리뷰", "Action Plan"];
    for (let i = 0; i < tablelist.length; i++){
        tablelist[i].id = 'table' + (i + 1);
        // 버튼 생성
        let button = document.createElement("div");
        let buttonSpan = document.createElement("button");

        // 버튼 내용 설정
        buttonSpan.innerText = buttonName[i];
        buttonSpan.setAttribute("background-color", "rgb(0,115,240)");
        buttonSpan.setAttribute("class", 'btnOkrExport aui-button xls-table'+(i + 1));
        buttonSpan.setAttribute("data-tableNumber", (i+1))

        // 버튼 추가
        button.appendChild(buttonSpan);
        downloadButtonWrap.appendChild(button)
        // tablelist[i].parentNode.insertBefore(button, tablelist[i]);
        };
};
// 셀 색상 데이터에 추가하기
function colorToData(array, i, colorTable){
    let c = array[i].getAttribute("data-highlight-colour");
    if (c !== null) {
        array[i].setAttribute('data-fill-color', colorTable[c])
    }
}



function borderToData(array, i){

        array[i].setAttribute('data-b-a-s', 'thin')

}


function fontSizeToData(array, i){

           array[i].setAttribute('data-f-sz', '10')

   }
// 텍스트 정렬 데이터에 추가하기
function alignToData(array, i){
    let alignVariable = array[i].getAttribute('style')
    if (alignVariable !== null){
    alignVariable = alignVariable.split(";").filter((e) => e.indexOf("text-align") !== -1)[0];
    }
    if ( alignVariable !== undefined && alignVariable !== null){
        alignVariable = alignVariable.replace(" ", "");
        if  (alignVariable!== null){
            array[i].setAttribute("data-a-h", alignVariable.split(":")[1])
        }
    }
    array[i].setAttribute("data-a-v", "middle");
}

// 가로길이 설정하기
function setWidth(array) {
const arrayClass = array.getAttribute("class").split(" ");
let col = array.firstElementChild.getElementsByTagName("col");
let widthArray = [];

// 고정 width table인 경우
if(arrayClass.filter((e) => e.indexOf("fixed-table") !== -1).length !== 0){

    for (let i = 0 ; i < col.length; i++){
        let width = col[i].getAttribute("style");
        if (width !== null){
            width = width.replace(" ", "")
            .replace(";", "")
            .replace(".0", "")
            .split(":")[1]
            let parseWidth = parseInt(width);
            let calwidth = parseWidth / 7;
            widthArray.push(calwidth)
    } else {
        return
    }

    }
}

// 반응형 테이블인 경우
else if (arrayClass.filter((e) => e.indexOf("relative-table") !== -1).length !== 0) {

    for (let i = 0 ; i < col.length; i++){
        let width = col[i].getAttribute("style")
        .replace(" ", "")
        .replace(";", "")
        .replace("%", "")
        .split(":")[1];

        let parseWidth = parseInt(width);
        let tableWidth = array.clientWidth;
        let calwidth = parseWidth * tableWidth / 363;

        widthArray.push(calwidth)
    }

}

// 그 외 테이블인 경우 width를 반영하지 않음
else {
    return
}

// 계산한 width를 data에 추가
let finalWidth = widthArray.join();
array.setAttribute("data-cols-width", finalWidth);
}

// 테이블에 데이터를 추가하는 전체 함수
function tableDataOverwrite(tableName){
    const _table = document.getElementById(tableName);
    const _tableTd = _table.getElementsByTagName("td");
    const _tableTh = _table.getElementsByTagName("th");
    const _tableTdLength = _tableTd.length;
    const _tableThLength = _tableTh.length;


    // 컨플루언스 색상표를 ARGB로 변경
    const colorTable = {"blue" : "FFDEEBFF", "red": "FFFFEBE5", "green": "FFE3FCEF", "grey": "FFF4F5F7", "yellow": "FFFFFAE5"};

    // width 설정
    setWidth(_table);

    // Table Head 색상 설정
    for (i=0; i<_tableThLength; i++) {
        colorToData(_tableTh, i, colorTable);
        borderToData(_tableTh, i);
        fontSizeToData(_tableTh, i);
    }
    // Table body 색상 설정
    for (i=0; i<_tableTdLength; i++) {
        colorToData(_tableTd, i, colorTable);
        alignToData(_tableTd, i);
        borderToData(_tableTd, i);
        fontSizeToData(_tableTd, i);

    };
 return
};

        function itoStr($num) {
            $num < 10 ? ($num = "0" + $num) : $num;
            return $num.toString();
        }




});




