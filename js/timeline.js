/**
 * If you can read this, you are not supposed to be here.
 * Don't read this file and certainly don't change judge the code ;)
 */

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id") || localStorage.getItem("pasportNumber");
const noPassnrDiv = document.getElementById('NoPasportNumberDiv');
const timeline = document.getElementById('timeline');

const init = (info) => {
    const isCeremony = info.events.includes("ceremonie") || info.events.includes("ceremony")
    const isReception = info.events.includes("receptie") || info.events.includes("reception")
    const isDiner = info.events.includes("diner") || info.events.includes("dinner")
    const isDance = info.events.includes("dansfeest") || info.events.includes("first dance")

    const ceremony = document.getElementById("ceremonie");
    const diner = document.getElementById("diner");
    const dansfeest = document.getElementById("dansfeest");

    if (!isCeremony) {
        // for now we can conclude, no ceremony = only reception
        ceremony.style.display = "none";
        diner.style.display = "none";
        dansfeest.style.display = "none";
    }
}

const checkPassnr = (number, first = false) => {
    const info = categories[number]
    if (info) {
        // set the number in localStorage
        localStorage.setItem("pasportNumber", number);
        timeline.style.display = "block"
        noPassnrDiv.style.display = "none";
        init(info)
    } else {
        timeline.style.display = "none";
        noPassnrDiv.style.display = "block";
        !first && (passNotFoundErrormsg.style.display = "block")
    }
}

checkPassnr(id, true);

