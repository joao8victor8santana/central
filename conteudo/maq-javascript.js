prolin = document.querySelector("p#script")
prolin.addEventListener("mouseenter", entrarpro)
prolin.addEventListener("mouseout", sairpro)




function entrarpro() {
  prolin.innerHTML = "<p>Um projeto mucho loko.</p>"
}

function sairpro() {
  prolin.innerHTML = "<p>PeriScript</p>"
}