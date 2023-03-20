divcen = document.querySelector( "div#brilho" )

divcen.addEventListener( "mouseenter" , incen )
divcen.addEventListener( "mouseout" , outcen )

function incen() {
  divcen.style.boxShadow = " 0vw 0vw 0.5vw #818181"
  divcen.style.background = " radial-gradient( #0f0f0f 10% , #2e2e2e )"
}

function outcen() {
  divcen.style.boxShadow = "none"
  divcen.style.background = "none"
}



nuf = document.querySelector("a.no")
nuf.addEventListener("mouseclick", nocli)

function nocli() {
  alert("[ERRO] O Link no qual você clicou, no momento, ainda não tem um destino, sinto muito.")
}