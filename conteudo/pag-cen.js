divcen = document.querySelector("div#brilho")

divcen.addEventListener("mouseenter", incen)
divcen.addEventListener("mouseout", outcen)

function incen() {
  divcen.style.boxShadow = " 0vw 0vw 0.5vw #e1e1e1"
  divcen.style.background = " radial-gradient( #1f1f1f , #757575 )"
}

function outcen() {
  divcen.style.boxShadow = "none"
  divcen.style.background = "none"
}