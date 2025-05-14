/**
 * If you can read this, you are not supposed to be here.
 * Don't read this file and certainly don't change judge the code ;)
 */

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get("id") || localStorage.getItem("pasportNumber");

const greetingmsg = document.getElementById('greetingmsg');
const normalContent = document.getElementById('fh5co-couple');
const noPassnrDiv = document.getElementById('NoPasportNumberDiv');
const passNotFoundErrormsg = document.getElementById('passNotFoundErrormsg');
const inputName = document.getElementById('inputName');

const checkPassnr = (number, first = false) => {
    if (number && !number.startsWith("DM")) {
        number = "DM" + number;
    }
    const info = categories[number]
    if (info) {
        // set the number in localStorage
        localStorage.setItem("pasportNumber", number);
        normalContent.style.display = "block"
        noPassnrDiv.style.display = "none";
        init(info)
    } else {
        normalContent && (normalContent.style.display = "none");
        noPassnrDiv && (noPassnrDiv.style.display = "block");
        !first && (passNotFoundErrormsg.style.display = "block")
    }
}

const init = (info) => {

    const firstMenu = document.getElementById('firstMenu');
    const secondMenu = document.getElementById('secondMenu');

    // the greeting
    const greeting = document.getElementById('greeting')
    greeting.innerHTML = "Dag " + info.name.join(" & ");
    const greeting2 = document.getElementById('greeting')
    greeting2.innerHTML = "Dag " + info.name.join(" & ");

    if (info.hasCheckedIn) {
        const completeForm = document.getElementById('completeForm');
        completeForm.style.display = "none";
        greetingmsg.style.display = "none";
        const checkedInMsg = document.getElementById('checkedInMsg');
        checkedInMsg.style.display = "block";
    }

    // hide second menu option for singles
    if (info.name.length == 1) {
        document.getElementById('secondMenu').style.display = "none";
        document.getElementById('greetingmsg').innerHTML = "Ben je klaar om in te checken?"
        document.getElementById('checkedInMsg2').innerHTML = "Geen zorgen, jullie zijn al ingecheckt en deze vlucht heeft geen vertraging ;)"
        document.getElementById('passagierLabel').innerHTML = "Passagier"
    }

    // hide menu for reception guests
    if (info.events.length == 1) {
        firstMenu.style.display = "none";
        secondMenu.style.display = "none";
        document.getElementById('allergies').style.display = "none";
    }

    const dietLabel1 = document.getElementById('dietLabel1');
    const dietLabel2 = document.getElementById('dietLabel2');
    dietLabel1.innerHTML = "Dieet restricties " + info.name[0]
    dietLabel2.innerHTML = "Dieet restricties " + info.name[1] || ""



    // fill in the form automatically
    // the passenger names
    inputName.value = info.name.join(" & ");

    // the attendance
    const attendanceGroup = document.getElementById('attendance')
    info.name.forEach((name, index) => {
        const div = document.createElement("div");
        div.setAttribute("class", "form-check")
        const chkbx = document.createElement("input");
        chkbx.setAttribute("class", "form-check-input");
        chkbx.setAttribute("type", "checkbox");
        chkbx.setAttribute("name", "attendance");
        chkbx.setAttribute("value", name);
        chkbx.setAttribute("checked", "true");
        chkbx.setAttribute("id", "chkboxattendance" + name);
        chkbx.addEventListener('change', (event) => {
            if (index == 0) {
                firstMenu.style.display = event.currentTarget.checked ? "block" : "none";
            } else if (index == 1) {
                secondMenu.style.display = event.currentTarget.checked ? "block" : "none";
            }
        })
        chkbx.setAttribute("onChange", (cb) => {

        })
        const lbl = document.createElement("label");
        lbl.setAttribute("class", "form-check-label extramarginLeft")
        lbl.setAttribute("for", "chkboxattendance" + name)
        lbl.innerHTML = " " + name + " "
        div.append(chkbx, lbl);
        attendanceGroup.append(div)
    });

    // add "Niemand"
    const div = document.createElement("div");
    div.setAttribute("class", "form-check")
    const chkbx = document.createElement("input");
    chkbx.setAttribute("class", "form-check-input");
    chkbx.setAttribute("type", "checkbox");
    chkbx.setAttribute("name", "attendance");
    chkbx.setAttribute("value", "Niemand");
    chkbx.setAttribute("id", "chkboxattendance" + "Niemand");
    const lbl = document.createElement("label");
    lbl.setAttribute("class", "form-check-label extramarginLeft")
    lbl.setAttribute("for", "chkboxattendance" + "Niemand")
    lbl.innerHTML = " " + "Niemand" + " "
    div.append(chkbx, lbl);
    attendanceGroup.append(div)

    // the arrivals
    const eventPicker = document.getElementById('inputArrival')
    info.events.forEach(element => {
        let opt = document.createElement("option");
        opt.value = element;
        opt.innerHTML = element;
        eventPicker.append(opt);
    });
}

setTimeout(() => {
    checkPassnr(id, true);
});
