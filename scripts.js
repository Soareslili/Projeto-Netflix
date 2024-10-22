
let botaSom = document.querySelector(".assistir")
let video = document.querySelector(".video")
let botao = document.querySelector(".infor")
let modal =document.querySelector(".modal")
let audio = document.querySelector(".audio")


botaSom.addEventListener("click", ligaSom )

function ligaSom(){
    video.muted = !video.muted
}

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display ="none"
}

window.addEventListener("load", audioTocar)

function audioTocar(){
    audio.play()
}