function menu(){
    let menuIcon = document.getElementById("menu");
    let box1 = document.getElementById("box");
    let parent = document.getElementById("head");
    let body = document.querySelector("body");
    body.style.backgroundColor = "#e6e6e6";
    if(!box1){
    menuIcon.src="assets/images/icon-menu-close.svg";
    let box = document.createElement("div");
    box.setAttribute("id", "box");
    parent.append(box);
    let nav= document.getElementById("nav");
    let clone = nav.cloneNode(true);
    clone.setAttribute("id", "clone");
    box.append(clone);
}

    else{
        parent.removeChild(box1);
        body.style.backgroundColor = "hsl(36, 100%, 99%)";
        menuIcon.src="assets/images/icon-menu.svg";
    }
}

let button = document.querySelector("#head button");

button.addEventListener("click", menu, false);