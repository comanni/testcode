function log () {
console.log($("#resvrequest").val())
}
fnRegResv = log;
$(".tab_booking_category > ul:last-child").append('<div id="timebox" style="right:30px;"><h>예약 시간 단위 : </h><span class="ms-RadioText" title="쪽지"><input type="radio" name="timecheck" value="1" checked="checked"><label>30분</label><input type="radio" name="timecheck" value="2"><label>1시간</label></span></div>')
$(".tab_booking_category > ul:last-child").append('<div id="requestbox" style="right:30px;padding-top:10px;"><h><nobr>예약명 : </nobr></h><span dir="none"><input name="resvrequest" type="프로젝트1셀" id="resvrequest" maxlength="100" title="회의제목" autocomplete="off" value="test"></span>')
