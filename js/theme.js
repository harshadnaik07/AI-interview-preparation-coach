// Load saved theme
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
}

window.onload = function(){

    const themeBtn =
    document.getElementById("themeToggle");

    if(themeBtn){

        themeBtn.addEventListener("click", function(){

            document.body.classList.toggle("light-mode");

            if(document.body.classList.contains("light-mode")){
                localStorage.setItem("theme","light");
            }else{
                localStorage.setItem("theme","dark");
            }

        });

    }

}