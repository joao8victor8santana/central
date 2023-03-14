prolin = document.querySelector("div#pro")
proare = document.querySelector("article#pro")
proare.addEventListener("mouseenter", entrarpro)
proare.addEventListener("mouseout", sairpro)

function entrarpro() { prolin.innerHTML = "<p>Um projeto mucho loko.</p>" }


function sairpro() { prolin.innerHTML = "<p>PeriStyle</p>" }