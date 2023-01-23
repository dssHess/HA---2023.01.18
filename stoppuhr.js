const anzeige = document.getElementById("Zeitanzeige");

var gestoppteZeit = 0;
var pausiert = true;
var letzterDurchlauf = new Date();

function start() {
    pausiert = false;
}

function stopp() {
    pausiert = true;
}

function löschen() {
    pausiert = true;
    gestoppteZeit = 0;
    aktualisiereAnzeige();
}

function aktualisiereZeit() {
    if(pausiert === false) {
        gestoppteZeit += new Date() - letzterDurchlauf;
        aktualisiereAnzeige();
    }

    letzterDurchlauf = new Date();
    setTimeout(aktualisiereZeit, 1);
}

function aktualisiereAnzeige() {
    let dss_ms = gestoppteZeit % 1000;
    let dss_ss = Math.floor(gestoppteZeit / 1000) % 60;
    let dss_mm = Math.floor(gestoppteZeit / 60000) % 60;
    let dss_st = Math.floor(gestoppteZeit / 3600000);

    dss_st = dss_st < 10 ? "0" + dss_st : dss_st;
    dss_mm = dss_mm < 10 ? "0" + dss_mm : dss_mm;
    dss_ss = dss_ss < 10 ? "0" + dss_ss : dss_ss;
    dss_ms = "000" + dss_ms;
    dss_ms = dss_ms.slice(dss_ms.length - 3);

    anzeige.innerHTML = dss_st + ":" + dss_mm + ":" + dss_ss + "." + dss_ms;
}

aktualisiereZeit();
