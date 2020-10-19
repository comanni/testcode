function makeBody(EVENT){
    let td = event.target.parentElement.parentElement.getElementsByTagName("td");
    let testPhone = document.getElementById('testPhone');
    let testAppVer = document.getElementById('testAppVer');
    let testArea = document.getElementById('testArea');
    let message = 'Pre-Condition <br/> 1. 테스트단말기 : '+ testPhone.value +'<br/>' 
        message += '2. TC No. : ' + testArea.value + ' ' + td[0].innerText + '<br/>'
        message += '3. APP 버전 : ' + testAppVer.value + '<br/>'
        message += '4. 상품 : <br/>'
        message += '5. 특이사항 : <br/><br/> Step <br/>'
        message += td[12].innerText
        message += '<br/><br/>'
        message += 'Actual Result <br/><br/>'
        message += 'Expected Result <br/>'


let tempElem = document.createElement('textarea');
tempElem.setAttribute("id", "textarea");
tempElem.value = message;

let str = tempElem.value;
str = str.replaceAll("<br/>", "\r\n");
tempElem.value = str;

document.body.appendChild(tempElem);

tempElem.select();
document.execCommand("copy");
document.body.removeChild(tempElem);

}

function makeBody2(EVENT){
    let td = event.target.parentElement.parentElement.getElementsByTagName("td");
    let testEnv = document.getElementById('testEnv');
    let testPCArea = document.getElementById('testPCArea');
    let message = 'Pre-Condition <br/> ' 
        message += '1. TC No. : ' + testPCArea.value + ' ' + td[0].innerText + '<br/>'
        message += '2. 접속환경 : ' + testEnv.value + '<br/>'
        message += '3. 특이사항: <br/><br/>'
        message += 'Step <br/>'
        message += td[12].innerText
        message += '<br/><br/>'
        message += 'Actual Result <br/><br/>'
        message += 'Expected Result <br/>'


let tempElem = document.createElement('textarea');
tempElem.setAttribute("id", "textarea");
tempElem.value = message;

let str = tempElem.value;
str = str.replaceAll("<br/>", "\r\n");
tempElem.value = str;

document.body.appendChild(tempElem);

tempElem.select();
document.execCommand("copy");
document.body.removeChild(tempElem);

}


  $(document).ready(function () {
  init();

  function init(){
      toggleJiraButton();

  }
  let btn =$(".jiraButton");

  btn.on("click", function (e) {

  });
  function toggleJiraButton (){
    let toggle = document.createElement("button")
    toggle.addEventListener('click', makeButton);
    toggle.innerText = 'jira 복사기능 켜기(APP)';
    let header = document.getElementById('title-text');
    header.appendChild(toggle) 

    let toggle2 = document.createElement("button")
    toggle2.addEventListener('click', makeButton2);
    toggle2.innerText = 'jira 복사기능 켜기(BO)';
    header.appendChild(toggle2) 
}

function makeBoInputArea(){
    let testEnv = document.createElement('input');
    let testPCArea = document.createElement('input');
    testEnv.setAttribute('placeholder', '접속환경')
    testEnv.setAttribute('id','testEnv')
    testPCArea.setAttribute('placeholder', '테스트 탭 명 입력');
    testPCArea.setAttribute('id', 'testPCArea')
    let area = document.getElementById('content')
    area.prepend(testPCArea);
    area.prepend(testEnv);

}

function makeAppInputArea(){
    let testPhone = document.createElement('input');
    let testAppVer = document.createElement('input');
    let testArea = document.createElement('input');
    testPhone.setAttribute('placeholder', '테스트 단말기 내용 입력');
    testPhone.setAttribute('id', 'testPhone')
    testAppVer.setAttribute('placeholder', 'App 버전 입력')
    testAppVer.setAttribute('id','testAppVer')
    testArea.setAttribute('placeholder', '테스트 탭 명 입력');
    testArea.setAttribute('id', 'testArea')
    let area = document.getElementById('content')
    area.prepend(testArea);
    area.prepend(testAppVer);
    area.prepend(testPhone);

}


  function makeButton(){

      makeAppInputArea();
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

  
function makeButton2(){

    makeBoInputArea();
    let tablelist = document.getElementsByTagName("table");

    for (let i = 0; i < tablelist.length; i++){
        let tableRow = tablelist[i].getElementsByTagName("tr");


        // 버튼 추가
        for (let j = 1; j <tableRow.length - 1; j++){
        // 버튼 생성
            let td = document.createElement("td");
            let tdSpan = document.createElement("button");
                tdSpan.setAttribute("class", "jiraButton");
                tdSpan.addEventListener('click',makeBody2);

        // 버튼 내용 설정
            tdSpan.innerText = "케이스 생성";
            td.appendChild(tdSpan);
            tableRow[j].appendChild(td)
         }
    }
}

})

