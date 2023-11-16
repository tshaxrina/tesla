let black = document.querySelector(".black")
let white = document.querySelector(".white")
let beige = document.querySelector(".beige")
let img = document.querySelector(".vid")

black.onclick = () => {
        img.style.backgroundImage = 'url("img/image 10.png")'
}
white.onclick = () => {
        img.style.backgroundImage = 'url("img/image 9.png")'
}
beige.onclick = () => {
        img.style.backgroundImage = 'url("img/image 8.png")'
}

let s = document.querySelector(".s h1")
let price = document.querySelector(".price h1")
let speed = document.querySelector(".speed h1")
let temp = document.querySelector(".temp h1")
let disk = document.querySelector(".disk h1")
let sp = document.querySelector(".sp")
let sm = document.querySelector("sm")
let speed_a = 60
let disk_a = 19

let ctn = document.querySelector(".container")
let ins = document.querySelector(".inside")
let bck = document.querySelector(".bck")
let ots = document.querySelector(".outside")

ins.onclick = () => {
        bck.style.display = "block"
        ctn.style.display = "none"
}
ots.onclick = () => {
        bck.style.display = "none"
        ctn.style.display = "block"
}

