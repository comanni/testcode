function makeBody(EVENT){
    let td = event.target.parentElement.parentElement.getElementsByTagName("td");
    let message = 'Pre-Condition <br/> 1. 테스트단말기 : <br/>'
        message += '2. TC No. : <br/>'
        message += '3. APP 버전 : <br/>'
        message += '4. 상품 : <br/>'
        message += '5. 특이사항 : <br/><br/> Step <br/>'
        message += td[1].innerText
        message += '<br/><br/>'
        message += 'Actual Result <br/><br/>'
        message += 'Expected Result <br/>'
        message += td[2].innerText

let tempElem = document.createElement('textarea');
tempElem.setAttribute("id", "textarea");
tempElem.value = message;

let str = document.getElementById("textarea").value;
str = str.replaceAll("<br/>", "\r\n");
document.getElementById("textarea").value = str;

document.body.appendChild(tempElem);

tempElem.select();
document.execCommand("copy");
document.body.removeChild(tempElem);


}
  $(document).ready(function () {
  init();

  function init(){
      makeButton();
  }
  let btn =$(".jiraButton");

  btn.on("click", function (e) {

  });

  function makeButton(){
      let tablelist = document.getElementsByTagName("table");

      for (let i = 0; i < tablelist.length; i++){
          let tableRow = tablelist[i].getElementsByTagName("tr");


          // 버튼 추가
          for (let j = 1; j <tableRow.length - 1; j++){
          // 버튼 생성
              let td = document.createElement("td");
              let tdSpan = document.createElement("button");
                  tdSpan.setAttribute("class", "jiraButton");
                  tdSpan.addEventListener('click',makeBody);

          // 버튼 내용 설정
              tdSpan.innerText = "케이스 생성";
              td.appendChild(tdSpan);
              tableRow[j].appendChild(td)
           }
      }
  }

})
