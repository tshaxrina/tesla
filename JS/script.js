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

let s = document.querySelector(".s h1")
let speed = document.querySelector(".speed h1")
let sp = document.querySelector(".sp")
let sm = document.querySelector(".sm")

let curr_but = 750
let curr_speed = 60

sp.onclick = () => {
        if(curr_speed <= 80) {
                curr_speed += 5
                curr_but -= 10
        }
        s.innerHTML = `${curr_but} км`
        speed.innerHTML = `${curr_speed} км/ч`
}

sm.onclick = () => {
        if(curr_speed >= 5) {
                curr_speed -= 5
                curr_but += 10
        }
        s.innerHTML = `${curr_but} км`
        speed.innerHTML = `${curr_speed} км/ч`
}

let temp = document.querySelector(".temp h1")
let tp = document.querySelector(".tp")
let tm = document.querySelector(".tm")
let cond = document.querySelector(".condisioner p")

let curr_temp = 20

tp.onclick = () => {
        if(curr_temp <= 45) {
                curr_temp++      
        }
        temp.innerHTML = `${curr_temp} °`
        if(curr_temp <= 15) {
                cond.innerHTML = "Печка"     
        } else {
                cond.innerHTML = "Кондиционер"
        }
}
tm.onclick = () => {
        if(curr_temp >= -5) {
                curr_temp--     
        }
        temp.innerHTML = `${curr_temp} °`
        if(curr_temp <= 15) {
                cond.innerHTML = "Печка"     
        } else {
                cond.innerHTML = "Кондиционер"
        }
        
}

let disk = document.querySelector(".disk h1")
let dp = document.querySelector(".dp")
let dm = document.querySelector(".dm")
let curr_disk = 19
let wheel = document.querySelector(".wheel")
let wheel1 = document.querySelector(".wheel1")


dp.onclick = () => {
        if(curr_disk <= 21) {
                curr_disk = 21
        }
        disk.innerHTML = `${curr_disk}`
        wheel.src = "img/disk2.png"
        wheel1.src = "img/disk2.png"
        
}
dm.onclick = () => {
        if(curr_disk >= 21) {
                curr_disk = 19
        }
        disk.innerHTML = `${curr_disk}`
        wheel.src = "img/disk-removebg-preview.png"
        wheel1.src = "img/disk-removebg-preview.png"
}

