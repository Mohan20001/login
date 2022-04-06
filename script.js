let a=document.getElementById("a");
let b=document.getElementById("b");

let log=document.getElementById("log");
let sin=document.getElementById("sin");
let exit=document.getElementById("exit");
let c=document.getElementById("c");
let pop=document.getElementById("pop");
 
function showForm(formA, formB) {
    arguments[0].style.display="block";
    arguments[1].style.display="none";
}

a.addEventListener("click", ()=>{showForm(sin, log)});
b.addEventListener("click", ()=>{showForm(log, sin)});

c.addEventListener("click", ()=>{
    pop.style.display="grid";
       exit.addEventListener("click",()=>{
            pop.style.display="none";
       })
})