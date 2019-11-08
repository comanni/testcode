


function log(sRoomID, sTimeID) {
var startH = sTimeID.substring(0, 2);
startH = Number(startH)
var endM = sTimeID.substring(3, 5);
var endH;
if (startH == 9) {
    startH = "0" + startH
    endH = 10;
} else{
    endH = startH + 1
}
var oStart_Date = _SelectedDate + " " + startH + ":" + endM;
var oEnd_Date  = _SelectedDate + " " + endH + ":" + endM;

// sTitle이 없으면 생성
if ($("#sTitle").length > 0 )  { 

  }
  else{
    var sTitle = $('<span id=\'sTitle\' style=\'display:none\'>domTest</span>');
     $("#DeltaSPWebPartManager").after(sTitle)
    }

    //해당 시간에 예약이 있는지 확인
var Result = fnReserveChk();

var oBEGIN_DATE = "";
var oEND_DATE = "";
var oUSER_NM = "";
var oROOM_NAME = "";

for (var i in Result) {
    oBEGIN_DATE = Result[i].BEGIN_DATE;
    oEND_DATE = Result[i].END_DATE;
    oUSER_NM = Result[i].USER_NM; 
}             

if (oUSER_NM != "") {
    alert(oBEGIN_DATE.substring(0, oBEGIN_DATE.length - 3) + " ~ " + oEND_DATE.substring(0, oEND_DATE.length - 3) + "까지 " +  oUSER_NM + "님이 이미 예약 하셨습니다.");  
    return;
}

//동일 시간대 같은 그룹의 회의실을 예약 하였는지 확인
Result = fnReserveChk2();

for (var i in Result) {                
    oROOM_NAME = Result[i].ROOM_NAME; 
}   

if (sAdmin_Auth1 != "1" && sAdmin_Auth3 != "1") {
    if (oROOM_NAME != "") {
        alert("동일 시간에 같은 그룹의 회의실을 예약 하였습니다. \r\n회의실 명: " + oROOM_NAME);  
        return;
    }
}

$.ajax({
    type: 'POST',
    url: 'Office_Data.aspx',
    data: { RequestName: 'ROOMINFO', ROOMID: sRoomID },
    dataType: 'json',
    async: false,
    success: function (resultData) {
        roomfind(resultData);
        var oRoomInfo = $("#sTitle").text();
        resvRequest(sRoomID, oStart_Date, oEnd_Date, oRoomInfo, _SelectedDate)
        
    },
    error: function (resultData) {
        alert(resultData.ExceptionMessage);
    }
});
};
function roomfind(resvData) {
$("#sTitle").empty();
var goods;
    $(resvData.ROOMINFO).each(function (index, value) {
        var oROOM_NAME = value.ROOM_NAME;
        var oCATEGORY_NAME = value.CATEGORY_NAME;
        var oRROOM_LIMIT = value.ROOM_LIMIT;
        $("#sTitle").text(" [" + oCATEGORY_NAME + "] " + oROOM_NAME.replace("<br/>", "") + " (정원 " + oRROOM_LIMIT + "명)");

    });
           
}
function resvRequest(sRoomID, oStart_Date, oEnd_Date, oRoomInfo, _SelectedDate) {
    $.ajax({
        type: 'POST',
        url: 'Office_Data.aspx',
        data: { 
        RequestName: 'SAVE_RESERVE', 
        ROOMID: sRoomID,
        TITLE: "프로젝트1셀", 
        ATTEND_ID: "180118|" ,
        ATTEND_MAIL: "harry@lotte.net|" ,
        ATTEND_NM: "최승혁, " , 
        REFERRERS_ID: "" ,
        REFERRERS_MAIL: "" ,
        REFERRERS_NM: "" , 
        ALERT_TYPE: "0" ,
        START_DATE: oStart_Date , 
        END_DATE: oEnd_Date , 
        BODY:"" , 
        FILEINFO: "", 
        REGMAIL: "harry@lotte.net", 
        REGNM: "최승혁",
        REPEAT: "N" ,
        ROOMINFO: oRoomInfo },
        dataType: 'json',
        async: false,
        success: function (resultData) {
            Result = resultData.CREATESUCCESS
        },
        error: function (resultData) {
            alert(resultData.ExceptionMessage)
    }
    })	
    if (Result == "OK") {
        alert("예약이 저장 되었습니다.");
        CalendarDate_Clicked(_SelectedDate);
        getMyResv();
    
    }
}

function fnReserveChk(sRoom_ID, oStart_Date, oEnd_Date){
    var Result = null;
      $.ajax({
          type: 'POST',
          url: 'Office_Data.aspx',
          data: { RequestName: 'CHECKROOM', ROOMID: sRoom_ID, STARTDATE: oStart_Date, ENDDATE: oEnd_Date, RESERVEID: "0" },
          dataType: 'json',
          async: false,
          success: function (resultData) {
              Result = resultData.ROOMCHEK
          },
          error: function (resultData) {
              alert(resultData.ExceptionMessage);
          }
      });
  
      return Result;
  }        
  
  //동일 시간대에 같은 그룹의 회의길을 예약 하였는지 확인
  function fnReserveChk2(sRoom_ID, oStart_Date, oEnd_Date){
  
      var Result = null;
      $.ajax({
          type: 'POST',
          url: 'Office_Data.aspx',
          data: { RequestName: 'CHECKGROUP', ROOMID: sRoom_ID, STARTDATE: oStart_Date, ENDDATE: oEnd_Date, RESERVEID: "0" },
          dataType: 'json',
          async: false,
          success: function (resultData) {
              Result = resultData.ROOMCHEK
          },
          error: function (resultData) {
              alert(resultData.ExceptionMessage);
          }
      });
  
      return Result;
  }    
  
  function fnCheckField(sRoom_ID, oStart_Date, oEnd_Date) {

    var Result = fnReserveChk(sRoom_ID, oStart_Date, oEnd_Date);

var oBEGIN_DATE = "";
var oEND_DATE = "";
var oUSER_NM = "";
var oROOM_NAME = "";

for (var i in Result) {
    oBEGIN_DATE = Result[i].BEGIN_DATE;
    oEND_DATE = Result[i].END_DATE;
    oUSER_NM = Result[i].USER_NM; 
}             

if (oUSER_NM != "") {
    alert(oBEGIN_DATE.substring(0, oBEGIN_DATE.length - 3) + " ~ " + oEND_DATE.substring(0, oEND_DATE.length - 3) + "까지 " +  oUSER_NM + "님이 이미 예약 하셨습니다.");  
    return;
}

//동일 시간대 같은 그룹의 회의실을 예약 하였는지 확인
Result = fnReserveChk2(sRoom_ID, oStart_Date, oEnd_Date);

for (var i in Result) {                
    oROOM_NAME = Result[i].ROOM_NAME; 
}   

if (sAdmin_Auth1 != "1" && sAdmin_Auth3 != "1") {
    if (oROOM_NAME != "") {
        alert("동일 시간에 같은 그룹의 회의실을 예약 하였습니다. \r\n회의실 명: " + oROOM_NAME);  
        return;
    }
}
             fnSave_Reserve();
}

fnRegResv = log;
$(document.body).append('<div id="ry-message" style="position:fixed;top:10px;left:50%;width:90%;margin-left:-45%;padding:10px 0;background-color:rgba(0,0,0,0.5);color:white;font-size:15px;text-align:center;">1시간 단위 원클릭 예약 활성화 중</div>');


====

      

    
}        




// sreserve ID 확인하기




