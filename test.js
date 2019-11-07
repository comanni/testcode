


function log(sRoomID, sTimeID) {
var startH = sTimeID.substring(0, 2);
startH = Number(startH)
var endM = sTimeID.substring(3, 2);
var endH;
if (startH == 9) {
    endH = 10;
} else{
    endH = startH + 1
}

if ($("#sTitle").length > 0 )  { 

  }
  else{
    var sTitle = $('<span id=\'sTitle\' style=\'none\'>domTest</span>');
     $("#DeltaSPWebPartManager").after(sTitle)}

$.ajax({
    type: 'POST',
    url: 'Office_Data.aspx',
    data: { RequestName: 'ROOMINFO', ROOMID: sRoomID },
    dataType: 'json',
    async: false,
    success: function (resultData) {
        roomfind(resultData);
        console.log(endH);
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
fnRegResv = log;




// 룸번호, 시간 등
$.ajax({
    type: 'POST',
    url: 'Office_Data.aspx',
    data: { RequestName: 'GETRESVLIST', SelectedDate: selectedDate, CalCategory: sCalCategory, sOrderBy: "", sDir: "" },
    dataType: 'json',
    async: true,
    success: function (resultData) {
        test(resultData);
    },
    error: function (resultData) {
        alert(resultData.ExceptionMessage);
    }
})
// function test 시작
const arrayindex = value.indexOf(sRoomID);



  //예약 저장
  function fnSave_Reserve(){
      fn_ShowLoading();
      var oTitle ="프로젝트 1셀";
      var oAttend_ID = fnGetNode("1", "ID");
      var oAttend_MAIL = fnGetNode("1", "MAIL");
      //참석자 이름
      var oAttend_NM = fnGetNode("1", "NM");

      //참조자 ID
      var oReferrers_ID = fnGetNode("2", "ID");
      //참조자 MAIL
      var oReferrers_MAIL = fnGetNode("2", "MAIL");
      //참조자 이름
      var oReferrers_NM = fnGetNode("2", "NM");

      //알림방법
      var oAlert_Type =  "1";
      //alert(oAlert_Type);

      var startH = (($("#startH").val() < 10) ? "0" : "") + $("#startH").val();
      var startM = (($("#startM").val() < 10) ? "0" : "") + $("#startM").val();
      var endH = (($("#endH").val() < 10) ? "0" : "") + $("#endH").val();
      var endM = (($("#endM").val() < 10) ? "0" : "") + $("#endM").val();
                 
      //시작시간
      var oStart_Date = $("#txtStartDate").val() + " " + startH + ":" + startM;
      //종료시간
      var oEnd_Date  = $("#txtEndDate").val() + " " + endH + ":" + endM;

      //본문내용
      var oBody  = "";
      //파일정보
      var oFileInfo = ""

      //작성자 메일
      //작성자 이름
      var oRegMail = "harry@lotte.net";
      var oRegNM = "최승혁";
      
      //위치정보
      var oRoomInfo = sTitle.innerText;

      var Result = null;

         
          $.ajax({
              type: 'POST',
              url: 'Office_Data.aspx',
              data: { RequestName: 'SAVE_RESERVE', ROOMID: sRoom_ID, TITLE: oTitle, ATTEND_ID: oAttend_ID , ATTEND_MAIL: oAttend_MAIL , ATTEND_NM: oAttend_NM , REFERRERS_ID: oReferrers_ID , REFERRERS_MAIL: oReferrers_MAIL , REFERRERS_NM: oReferrers_NM , ALERT_TYPE: oAlert_Type , START_DATE: oStart_Date , END_DATE: oEnd_Date , BODY: oBody , FILEINFO: oFileInfo, REGMAIL: oRegMail, REGNM: oRegNM, REPEAT: "N" , ROOMINFO: oRoomInfo},
              dataType: 'json',
              async: false,
              success: function (resultData) {
                  Result = resultData.CREATESUCCESS
              },
              error: function (resultData) {
                  alert(resultData.ExceptionMessage);
                  fn_HideLoading();
              }
          });
      }            

      if (Result == "OK") {
          alert("예약이 저장 되었습니다.");
          opener.CalendarDate_Clicked($("#txtStartDate").val());
          opener.getMyResv();
          fn_HideLoading();
          this.close();
      }
  
