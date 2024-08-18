document.addEventListener("DOMContentLoaded", main)

function main(){
    const titleElm = document.getElementById("title");
    setTimeout(()=>{
        titleElm.setAttribute("class", "color:red;");
    }, 3_000);
}