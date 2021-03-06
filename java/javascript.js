'use strict'

// NAVIGATION
$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active')
    })

    $('ul li.sub-menu').click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    })
})


// UDSTYR LISTE
function udstyr() {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
};

// Tidszone for Danmark
fetch("http://worldtimeapi.org/api/timezone/Europe/Copenhagen")

    .then(function (data) {
        return data.json();
    })


    .then(function (post) {
        const tid = document.getElementById("tid");

        tid.innerHTML = (post.datetime);

        const datoOGtid = new Date(post.datetime);
        tid.insertAdjacentHTML("beforeend", "<br>Dato: " + datoOGtid.getDate());
        tid.insertAdjacentHTML("beforeend", "<br>Måned: " + datoOGtid.getMonth());
        tid.insertAdjacentHTML("beforeend", "<br>Årstal: " + datoOGtid.getFullYear());
        tid.insertAdjacentHTML("beforeend", "<br>Tid: " + datoOGtid.getHours() + ":" + datoOGtid.getMinutes());


    });
