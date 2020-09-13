// test용 변수

// const User_ID = "harry"
// ltalk 로그인 여부 체크
// if (getCookie('cps_ck2') == null) {
//   window.location.href = "/_layouts/15/SignOut.aspx"
// }

// ltalk 변수 가져오기
const ltalk = {
  rID: User_ID + "|",
  rName: $("#zz4_Menu_t").text().substr(0, 3) + ", ",
  oEmail: null,
  oEmail2: null,
  room_title: "",
  oRoomInfo: null,
  sRoomID: null,
};
// let rID = User_ID + "|";
// let rName = $("#zz4_Menu_t").text().substr(0, 3) + ", ";
// let oEmail = null;
// let oEmail2 = null;
// let room_title = "";
// let oRoomInfo = null;
// let sRoomID = null;

// 호출용 변수
const reqdate = {
  full: moment().format("YYYY-MM-DD"),
  start: null,
  startTime: null,
  end: null,
  endTime: null,
  duration: 30,
  time: "09:00",
};
// let request_date = moment().format("YYYY-MM-DD");
// let request_start_date = null;
// let request_end_date = null;
// let duration = 30;
const floorList = {
  type1: [1, 4],
  type2: [3, 5, 6, 7, 8, 9, 10, 11, 12],
};
const floor_array = {
  type: null,
  location: null,
};
// let floor_type = null;
// let floor = null;
// let isAjax = null;
const today = {
  short: moment().format("MM-DD"),
  full: moment().format("YYYY-MM-DD"),
  year: moment().format("YYYY"),
  month: moment().format("MM"),
  day: moment().format("DD"),
  time: moment().format("hh:mm"),
};
// let Today_short = moment().format("MM-DD");
// let Today = moment().format("YYYY-MM-DD");
// let Year = moment().format("YYYY");

function init() {
  //이메일 주소 ltalk에서 확인 ajax
  myEmailRequest();
  // moment 호출
  moment().locale("ko");
  // 오늘 날짜로 기본값 설정
  $("#_userDate").val(today.short);
  // 시간 설정
  defaultTimeInit();
  startEndTimeUpdate();
}

// test용 log요청

//test용 input
list_ajax_return = {};

// *********자동으로 진행되는 것

// 입력한 날짜 자동 mm/dd로 변환 및 기타문자 입력차단
function auto_date_format(e, oThis) {
  let num_arr = [
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    96,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
  ];
  let key_code = e.which ? e.which : e.keyCode;
  if (num_arr.indexOf(Number(key_code)) != -1) {
    let len = oThis.value.length;
    if (len == 2) oThis.value += "-";
  } else {
    event.preventDefault();
  }
}

// 실시간 시간 HH:SS 변환
function auto_time_format(e, oThis) {
  let num_arr = [
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    96,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
  ];
  let key_code = e.which ? e.which : e.keyCode;
  if (num_arr.indexOf(Number(key_code)) != -1) {
    let len = oThis.value.length;
    if (len == 2) oThis.value += ":";
  } else {
    event.preventDefault();
  }
}
// 오늘 날짜 구하기
function getToday() {
  reqdate.full = moment().format("YYYY-MM-DD");
  return moment().format("MM-DD");
}

// ********** Onblur Event
// 1. 날짜

function dateToVar() {
  let t = moment($("#_userDate").val(), "MM-DD");
  t._isValid === true
    ? (reqdate.full = moment(t, "MM-DD").format("YYYY-MM-DD"))
    : dateReset();

  startEndTimeUpdate();
  // isAjax = true;
  roomListFind(true);
}

function dateReset() {
  reqdate.full = today.full;
  $("#_userDate").val(today.short);
  startEndTimeUpdate();
}
// 2. 층수
function floorChk(e, oThis) {
  let _floor_1 = [1, 4];
  let _floor_2 = [3, 5, 6, 7, 8, 9, 10, 11, 12];
  let isAjax = false;
  // 기존에 포함되어있던 회의실 타입과 비교
  let _temp_floor_type = floor_array.type;

  // 1, 4층 회의실인지 확인
  if (floorList.type1.indexOf(Number(oThis.value)) != -1) {
    floor_array.type = 1;
    floor_array.location = oThis.value + "층";
    console.log(floor_array.type);

    // 사무실 회의실인지 확인
  } else if (floorList.type2.indexOf(Number(oThis.value)) != -1) {
    floor_array.type = 5;
    floor_array.location = oThis.value + "층";
    console.log(floor_array.type);

    // 층수가 잘못된 경우 리셋
  } else {
    floor_array.type = null;
    floor_array.location = null;
    $("#room_list_show").empty();
    console.log(floor_array.type);
  }

  _temp_floor_type !== floor_array.type ? (isAjax = true) : (isAjax = false);
  roomListFind(isAjax);
}

// 3. 시간

function timeToVar(e, oThis) {
  // validation : 시간이 아니면 09:00 표시
  let m = moment(oThis.value, "hh:mm");

  m._isValid === true ? time_calibration(oThis.value) : defaultTimeInit();
  roomListFind(false);
}

function time_calibration(e) {
  let mm = moment(e, "HH:mm").minute();
  let hh = e.split(":")[0];
  console.log(mm);

  if (mm < 30) {
    setTime(hh + ":00");
    // $("#_userTime").val(hh + ":00");
  } else {
    setTime(hh + ":30");
    $("#_userTime").val(hh + ":30");
  }
}
// 4. 예약시간 : 이건 별도로 함수 없음

// 통합 검증 회로  **************
function roomListFind(isAjax) {
  // 값 불러와서 시작/종료 시간 설정
  let _time = $("#_userTime").val();
  //        request_start_date = new Date(request_date + " " + _time);
  startEndTimeUpdate();
  //   request_end_date = new Date(request_date + " " + _time);
  // request_end_date.setMinutes(request_end_date.getMinutes() + duration);

  // 검색결과에 표시될 날짜 설정
  // let _startTime = moment(request_start_date).format("HH:mm");
  // let _endTime = moment(request_end_date).format("HH:mm");
  let _floor =
    floor_array.location === null ? "층이 선택되지 않음" : floor_array.location;

  // 리스트 지우고 검색 결과 문구 작성
  $("#search_result").empty();
  $("#search_result").append("<h6>회의실 검색 결과 </h6>");

  // 검색 결과 리스트 생성

  list_add = [reqdate.full, _floor, reqdate.startTime, reqdate.endTime];
  postposition = ["  ", "  ", " ~ ", ""];

  list_add.forEach(function (item, index, array) {
    item !== null
      ? $("#search_result").append(
          '<span class="badge badge-primary">' +
            item +
            "</span>" +
            postposition[index]
        )
      : "";
  });

  // 요청날짜랑 층이 있으면 다음 단계로
  // Ajax 요청해야하면 Ajax부터, 아니면 바로 리스트맵핑
  if (reqdate.full !== null && floor_array.type !== null) {
    isAjax === true ? roomListAjaxRequest() : list_mapping();
  }
}

function roomListAjaxRequest() {
  console.log("ajax 요청이 들어왔습니다.");
  $.ajax({
    type: "POST",
    url: "Office_Data.aspx",
    data: {
      RequestName: "GETRESVLIST",
      SelectedDate: reqdate.full,
      CalCategory: floor_array.type,
      sOrderBy: "",
      sDir: "",
      sUserID: User_ID,
    },
    dataType: "json",
    async: true,
    success: function (resultData) {
      list_ajax_return = resultData;
      list_mapping();
    },
    error: function (resultData) {
      console.log(resultData);
    },
  });
}

function list_mapping() {
  // 리스트 초기화
  $("#room_list_show").empty();

  console.log("리스트맵핑합니다.");

  //  ajax에서 추출하기
  let find_floor_room_result = list_ajax_return.ROOMLIST.filter(
    (c) => c.ROOM_NAME.indexOf(floor_array.location) !== -1
  );
  let find_floor_meeting_result = list_ajax_return.RESVLIST.filter(
    (c) => c.ROOM_NAME.indexOf(floor_array.location) !== -1
  );

  // 예약 있는 회의실 찾기
  find_floor_room_result.forEach(function (e, i, array) {
    let _testArr = find_floor_meeting_result.filter(
      (n) => n.ROOM_ID.indexOf(find_floor_room_result[i].ROOM_ID) !== -1
    );

    let isDuplicated = false;
    let meetingName = "";
    // 겹치는 미팅 없는지 체크
    _testArr.forEach(function (item, index, array) {
      // let _s = new Date(item.BEGIN_DATE);
      // let _e = new Date(item.END_DATE);

      let _s = moment(item.BEGIN_DATE);
      let _e = moment(item.END_DATE);
      let _rs = reqdate.start;
      let _re = reqdate.end;

      if (
        (moment(_s).isSameOrBefore(_rs) && moment(_rs).isBefore(_e)) ||
        (moment(_s).isBefore(_re) && moment(_re).isSameOrBefore(_e))

        //     (_s.getTime() <= request_start_date.getTime() &&
        //     request_start_date.getTime() <= _e.getTime()) ||
        //   (_s.getTime() <= request_end_date.getTime() &&
        //     request_end_date.getTime() <= _e.getTime())
      ) {
        isDuplicated = true;
        meetingName = item.SUBJECT;
      }
    });
    let p = ["primary", "secondary"];
    $("#room_list_show").append(
      '<label class="btn btn-outline-' +
        (isDuplicated ? "secondary" : "primary") +
        '"><input type="radio" class="roomlistradio" name="roomlistradio" id="option' +
        i +
        '" ' +
        (isDuplicated ? "disabled" : "") +
        'data-roomid="' +
        e.ROOM_ID +
        '" />' +
        e.ROOM_NAME.replace("<br/>", "") +
        " (정원 " +
        e.ROOM_LIMIT +
        "명) [" +
        (isDuplicated ? meetingName : "비어있음") +
        "]</label>"
    );
  });
}

function roomNameChk(e, oThis) {
  console.log(e.value);
  // 데이터가 없는 경우 회의명 리셋
  if (e.value === undefined) {
    $("#room_name").val("프로젝트1셀");
  }
  ltalk.room_title = $("#room_name").val();
}

$(document).ready(function () {
  init();

  // 오늘버튼 클릭 시 날짜 리셋
  $("#setToday").click(function () {
    $("#_userDate").val(today.short);
    dateToVar();
  });

  // 날짜, 시간, 예약명 클릭 시 리셋
  ["#_userDate", "#_userTime", "#room_name", "#floor_input"].forEach(function (
    e
  ) {
    $(e).focus(function () {
      $(e).val("");
    });
  });

  // 예약시간 길이 선택 시
  $("input:radio[name=duration]").click(function () {
    // duration update
    reqdate.duration = $("input:radio[name=duration]:checked").val();
    // reqdate.time = $("#_userTime").val();
    updateEndDate();
    roomListFind();
  });

  // 검색결과의 방을 선택한 경우
  $("input:radio[name=roomlistradio]:checked").click(function () {
    ltalk.sRoomID = $("input:radio[name=roomlistradio]:checked").data("roomid");
  });

  // 요청 버튼을 누르는 경우
  $("#request_button").click(function () {
    request_reserve();
  });
});

function fnReserveChk(sRoomID, oStart_Date, oEnd_Date) {
  let Result = null;
  $.ajax({
    type: "POST",
    url: "Office_Data.aspx",
    data: {
      RequestName: "CHECKROOM",
      ROOMID: sRoomID,
      STARTDATE: oStart_Date,
      ENDDATE: oEnd_Date,
      RESERVEID: "0",
    },
    dataType: "json",
    async: false,
    success: function (resultData) {
      Result = resultData.ROOMCHEK;
    },
    error: function (resultData) {
      alert(resultData.ExceptionMessage);
    },
  });

  return Result;
}

//동일 시간대에 같은 그룹의 회의길을 예약 하였는지 확인
function fnReserveChk2(sRoomID, oStart_Date, oEnd_Date) {
  let Result = null;
  $.ajax({
    type: "POST",
    url: "Office_Data.aspx",
    data: {
      RequestName: "CHECKGROUP",
      ROOMID: sRoomID,
      STARTDATE: oStart_Date,
      ENDDATE: oEnd_Date,
      RESERVEID: "0",
    },
    dataType: "json",
    async: false,
    success: function (resultData) {
      Result = resultData.ROOMCHEK;
    },
    error: function (resultData) {
      alert(resultData.ExceptionMessage);
    },
  });

  return Result;
}

function resvRequest() {
  $.ajax({
    type: "POST",
    url: "Office_Data.aspx",
    data: {
      RequestName: "SAVE_RESERVE",
      ROOMID: ltalk.sRoomID,
      TITLE: ltalk.room_title,
      ATTEND_ID: talk.rID,
      ATTEND_MAIL: ltalk.oEmail2,
      ATTEND_NM: ltalk.rName,
      REFERRERS_ID: "",
      REFERRERS_MAIL: "",
      REFERRERS_NM: "",
      ALERT_TYPE: "0",
      START_DATE: reqdate.start,
      END_DATE: reqdate.end,
      BODY: "",
      FILEINFO: "",
      REGMAIL: ltalk.oEmail,
      REGNM: User_ID,
      REPEAT: "N",
      ROOMINFO: ltalk.oRoomInfo,
    },
    dataType: "json",
    async: false,
    success: function (resultData) {
      Result = resultData.CREATESUCCESS;
    },
    error: function (resultData) {
      alert(resultData.ExceptionMessage);
    },
  });
  if (Result == "OK") {
    alert("예약이 저장 되었습니다.");
  }
}

function roomfind(resvData) {
  $(resvData.ROOMINFO).each(function (index, value) {
    let oROOM_NAME = value.ROOM_NAME;
    let oCATEGORY_NAME = value.CATEGORY_NAME;
    let oRROOM_LIMIT = value.ROOM_LIMIT;
    ltalk.oRoomInfo =
      " [" +
      oCATEGORY_NAME +
      "] " +
      oROOM_NAME.replace("<br/>", "") +
      " (정원 " +
      oRROOM_LIMIT +
      "명)";
  });
}

function request_reserve() {
  // request_start_date = moment(request_start_date).format("YYYY-MM-DD HH:mm");
  // request_end_date = moment(request_end_date).format("YYYY-MM-DD HH:mm");
  let sRoomID = $("input:radio[name=roomlistradio]:checked").data("roomid");

  //해당 시간에 예약이 있는지 확인
  let Result = fnReserveChk(sRoomID, reqdate.start, reqdate.end);

  let oBEGIN_DATE = "";
  let oEND_DATE = "";
  let oUSER_NM = "";
  let oROOM_NAME = "";

  for (let i in Result) {
    oBEGIN_DATE = Result[i].BEGIN_DATE;
    oEND_DATE = Result[i].END_DATE;
    oUSER_NM = Result[i].USER_NM;
  }

  if (oUSER_NM != "") {
    alert(
      oBEGIN_DATE.substring(0, oBEGIN_DATE.length - 3) +
        " ~ " +
        oEND_DATE.substring(0, oEND_DATE.length - 3) +
        "까지 " +
        oUSER_NM +
        "님이 이미 예약 하셨습니다."
    );
    return;
  }

  //동일 시간대 같은 그룹의 회의실을 예약 하였는지 확인
  Result = fnReserveChk2(sRoomID, reqdate.start, reqdate.end);
  for (let i in Result) {
    oROOM_NAME = Result[i].ROOM_NAME;
  }

  if (oROOM_NAME != "") {
    alert("동일 시간에 같은 그룹의 회의실을 예약 하였습니다.");
    return;
  }

// 예약할 방 이름 탐색
  $.ajax({
    type: "POST",
    url: "Office_Data.aspx",
    data: {
      RequestName: "ROOMINFO",
      ROOMID: sRoomID,
    },
    dataType: "json",
    async: false,
    success: function (resultData) {
      // 방이름 저장
      roomfind(resultData);
      // 예약 요청
      resvRequest();
    },
    error: function (resultData) {
      alert(resultData.ExceptionMessage);
    },
  });
}

function myEmailRequest() {
  $.ajax({
    url:
      "https://ltalk.lotte.net/_layouts/15/CPS.WP/MyProfile/MyProfileAjax.aspx",
    contentType: "text/html",
    dataType: "json",
    async: false,
    cache: false,
    success: function (d) {
      oEmail = d.MYPROFILE[0].MailUrl;
      oEmail2 = oEmail + "|";
    },
  });
}

function updateEndDate() {
  reqdate.end = new Date(reqdate.full + " " + reqdate.time);
  reqdate.end.setMinutes(reqdate.end.getMinutes() + reqdate.duration);
}

function resetTime() {
  $("#_userTime").val("09:00");
}

function setTime(time) {
  $("#_userTime").val(time);
  reqdate.time = time;
}

function defaultTimeInit() {
  let hh = moment().format("HH");
  let mm = moment().minute();

  if (mm < 30) {
    setTime(hh + ":30");
  } else {
    hh = moment().add(1, "h").format("HH");
    setTime(hh + ":00");
  }
}

function startEndTimeUpdate() {
  reqdate.start = moment(
    reqdate.full + " " + reqdate.time,
    "YYYY-MM-DD HH:mm"
  ).format("YYYY-MM-DD HH:mm");
  reqdate.startTime = moment(reqdate.start, "YYYY-MM-DD HH:mm").format("HH:mm");

  reqdate.end = moment(reqdate.full + " " + reqdate.time, "YYYY-MM-DD HH:mm")
    .add(reqdate.duration, "m")
    .format("YYYY-MM-DD HH:mm");
  reqdate.endTime = moment(reqdate.end, "YYYY-MM-DD HH:mm").format("HH:mm");
}
