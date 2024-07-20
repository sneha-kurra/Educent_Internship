let res = document.querySelector(".top #res");
res.addEventListener("click",()=>{
    res.href ="https://drive.google.com/file/d/1x14xuBOsYB6zpsaFd-RM5Q2gBpZovlC4/view?usp=drive_link";
})
let opt = document.querySelector("#OPT");
opt.addEventListener("change",function(){
    let option = this.value;
    if (option === "Skills"){
        window.location.href = "#skills";
    }else if (option === "Academic_Profile"){
        window.location.href = "#container";
    }else if (option === "About_me"){
        window.location.href = "#";
    }
})