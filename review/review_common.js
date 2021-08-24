function goAppstore() {
    const UA = navigator.userAgent.toLowerCase();
    let chkDevice = "";
    if (UA.indexOf("android") > -1) {
        chkDevice = "AOS";
    } else if (UA.indexOf("iphone") > -1 || UA.indexOf("ipad") > -1 || UA.indexOf("ipod") > -1) {
        chkDevice = "iOS";
    } else {
        chkDevice = "PC";
    }
    const marketUrl = {
        AOS: "market://details?id=com.lottehomeshopping.vc",
        iOS: "itms-apps://itunes.apple.com/app/itunes-u/1513855078?ls=1&mt=8&action=write-review",
        PC: "https://play.google.com/store/apps/details?id=com.lottehomeshopping.vc",
    };
    if (marketUrl.hasOwnProperty(chkDevice)) {
        window.location = marketUrl[chkDevice];
    }
}

function showModal(id) {
    let modal = new bootstrap.Modal(document.getElementById(id));
    try {
        modal.show();
    } catch {
        console.log("show failed : ", id);
    }
}
function hideModal(id) {
    let modal = new bootstrap.Modal(document.getElementById(id));
    try {
        modal.hide();
    } catch {
        console.log("hidden failed : ", id);
    }
}
function openComment() {
    hideModal("modalThanks");
    showModal("modalThanksComment");
}

function openModal(id, selectedType) {
    let Type = document.getElementById("selectedType");
    Type.value = selectedType;

    let modal = new bootstrap.Modal(document.getElementById(id));
    modal.show();
}

function setStorage() {
    let type = document.getElementById("selectedType");
    localStorage.setItem("isFinished", "true");
    localStorage.setItem("selectedType", type.value);
    ratingSubmit(type.value);
}

// modal이 열리면 storage에 저장
const modalList = ["modalThanks", "modalSorry"]
modalList.forEach(id => {
    let modal = document.getElementById(id)
    modal.addEventListener("show.bs.modal", function (event) {
        setStorage();
    });
})
// let thanksModal = document.getElementById("modalThanks");
// thanksModal.addEventListener("show.bs.modal", function (event) {
//     // do something...
//     //   localStorage.setItem("isFinished", "true")
//     //   localStorage.setItem("selectedType", "3")
//     //   ratingSubmit("3")
//     setStorage();
// });

// let sorryModal = document.getElementById("modalSorry");
// sorryModal.addEventListener("shown.bs.modal", function (event) {
//     // do something...

//     //   let type = document.getElementById("selectedType")
//     //   localStorage.setItem("isFinished", "true")
//     //   localStorage.setItem("selectedType", type.value)
//     //   ratingSubmit(type.value)
//     setStorage();
// });
function ratingSubmit(selectedType) {
    let xhr = new XMLHttpRequest();
    const UA = navigator.userAgent.toLowerCase();
    let URL = "https://script.google.com/macros/s/AKfycbzQ9ZP96-eOzRL1EAHaF_-JV0ZY-YEcoGxApRSb7btiqPmF5RC7kVf-iGPgGWaqV_WRpw/exec";
    URL += "?selectedType=" + selectedType + "&UA=" + UA;
    xhr.onload = function () {
        if (xhr.status === 200 || xhr.status === 201) {
            console.log(xhr.responseText);
        }
    };
    xhr.onerror = function () {
        console.error(xhr.responseText);
    };
    xhr.open("GET", URL);
    xhr.send();
}

function commentSubmit(id) {
    document.querySelectorAll(".submit").forEach((e) => {
        e.removeAttribute("disabled");
        e.innerText = "설문 제출 중입니다";
    });
    let xhr = new XMLHttpRequest();
    let selectedType = localStorage.getItem("selectedType");
    const UA = navigator.userAgent.toLowerCase();
    let opinion = encodeURIComponent(document.querySelector(`#${id}`).value);
    let URL = "https://script.google.com/macros/s/AKfycbzQ9ZP96-eOzRL1EAHaF_-JV0ZY-YEcoGxApRSb7btiqPmF5RC7kVf-iGPgGWaqV_WRpw/exec";
    URL += "?selectedType=" + selectedType + "&opinion=" + opinion + "&UA=" + UA;
    xhr.onload = function () {
        if (xhr.status === 200 || xhr.status === 201) {
            console.log(xhr.responseText);
            openModal("finish");
        }
    };
    xhr.onerror = function () {
        console.error(xhr.responseText);
    };
    xhr.open("GET", URL);
    xhr.send();
}

function textChange(e) {
    if (e.value.length > 0) {
        document.querySelectorAll(".submit").forEach((e) => {
            e.removeAttribute("disabled");
            e.innerText = "설문 제출하기";
        });
    } else {
        document.querySelectorAll(".submit").forEach((e) => {
            e.setAttribute("disabled", "");
            e.innerText = "내용을 작성해주세요";
        });
    }
}

function init() {
    let isFinished = localStorage.getItem("isFinished");
    let selectedType = localStorage.getItem("selectedType");
    if (isFinished === "true" && selectedType !== "3") {
        openModal("finish");
    }
}
init();
