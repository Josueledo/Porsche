let car = document.querySelector(".porsche")
let cayman = document.querySelector(".title")
let logo = document.querySelector(".logoContainer")
let des = document.querySelector(".desing")
let per = document.querySelector(".performance")
let config = document.querySelector(".configure")
let hl = document.querySelector(".highlight")
let drive = document.querySelector(".test-drive")
let porsche = document.querySelector(".porscheSub")
let caymanSub = document.querySelector(".cayman")
let d2 = document.querySelector(".div2")
let d3 = document.querySelector(".div3")
let d4 = document.querySelector(".div4")
let imgContainer = document.querySelector(".imgContainer")




function animate(){
    setTimeout(()=>{
         car.style.transform = "translate(0px,0px)"
        cayman.style.transform = "translate(0px,130px)"
        des.style.transform = "translateY(0px)"
        per.style.transform = "translateY(0px)"
        config.style.transform = "translateY(0px)"
        hl.style.transform = "translateY(0px)"
        logo.style.transform = "translateY(0px)"
        drive.style.transform = "translateY(0px)"
        porsche.style.transform = "translateY(0px)"
        caymanSub.style.transform = "translateY(0px)"
        d2.style.transform = "translateY(0px)"
        d3.style.transform = "translateY(0px)"
        d4.style.transform = "translateY(0px)"
        imgContainer.style.transform = "translateY(0px)"
    },1000);
}
