opa1 = document.querySelector("a#txt1")
op1 = document.querySelector("mark#op1")
opa1.addEventListener("mouseenter", entrar1)
op1.addEventListener("mouseenter", entrar1)
op1.addEventListener("mouseout", sair1)
opa1.addEventListener("mouseout", sair1)

opa2 = document.querySelector("a#txt2")
op2 = document.querySelector("mark#op2")
opa2.addEventListener("mouseenter", entrar2)
op2.addEventListener("mouseenter", entrar2)
op2.addEventListener("mouseout", sair2)
opa2.addEventListener("mouseout", sair2)

opa3 = document.querySelector("a#txt3")
op3 = document.querySelector("mark#op3")
opa3.addEventListener("mouseenter", entrar3)
op3.addEventListener("mouseenter", entrar3)
op3.addEventListener("mouseout", sair3)
opa3.addEventListener("mouseout", sair3)

opa4 = document.querySelector("a#txt4")
op4 = document.querySelector("mark#op4")
opa4.addEventListener("mouseenter", entrar4)
op4.addEventListener("mouseenter", entrar4)
op4.addEventListener("mouseout", sair4)
opa4.addEventListener("mouseout", sair4)

opa5 = document.querySelector("a#txt5")
op5 = document.querySelector("mark#op5")
opa5.addEventListener("mouseenter", entrar5)
op5.addEventListener("mouseenter", entrar5)
op5.addEventListener("mouseout", sair5)
opa5.addEventListener("mouseout", sair5)

opa6 = document.querySelector("a#txt6")
op6 = document.querySelector("mark#op6")
opa6.addEventListener("mouseenter", entrar6)
op6.addEventListener("mouseenter", entrar6)
op6.addEventListener("mouseout", sair6)
opa6.addEventListener("mouseout", sair6)


function entrar1() {
    op1.style.background = "rgb(00, 00, 00)"
    opa1.style.color = "gray"}
function sair1() {
    op1.style.background = "rgb(208, 154, 212)"
    opa1.style.color = "rgb(28, 28, 28)"}


function entrar2() {
    op2.style.background = "rgb(00, 00, 00)"
    opa2.style.color = "gray"}
function sair2() {
    op2.style.background = "rgb(243, 248, 145)"
    opa2.style.color = "rgb(28, 28, 28)"}


function entrar3() {
    op3.style.background = "rgb(00, 00, 00)"
    opa3.style.color = "gray"}
function sair3() {
    op3.style.background = "rgb(158, 212, 250)"
    opa3.style.color = "rgb(28, 28, 28)"}


function entrar4() {
    op4.style.background = "rgb(00, 00, 00)"
    opa4.style.color = "gray"}
function sair4() {
    op4.style.background = "rgb(250, 250, 250)"
    opa4.style.color = "rgb(28, 28, 28)"}


function entrar5() {
    op5.style.background = "rgb(00, 00, 00)"
    opa5.style.color = "gray"}
function sair5() {
    op5.style.background = "linear-gradient(270deg, #cd6bd4, #f3f980, #7fc7fa, #FAFAFA)"
    opa5.style.color = "rgb(28, 28, 28)"}


function entrar6() {
    op6.style.background = "rgb(00, 00, 00)"
    opa6.style.color = "gray"}
function sair6() {
    op6.style.background = "linear-gradient(90deg, #3198E2, #6D59C0, #B93590, #E33F5F, #FDD579)"
    opa6.style.color = "rgb(28, 28, 28)"}

