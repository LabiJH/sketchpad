let button = document.getElementById("canvasSizeButton");
let canvas = document.querySelector(".canvas");



button.addEventListener("click", () =>{

    var size = prompt("Test");
    
    canvas.style.gridTemplateColumns = "repeat(" + size +", 50px)";
    canvas.style.width = size * 50 + "px";
    canvas.style.height = size * 50 + "px";
    for(i = 0; i < size * size; i++){
        
        let gridPanel = document.createElement("div");
        gridPanel.textContent = i;
        gridPanel.style.width = 50 + "px";
        gridPanel.style.height = 50 + "px";
        gridPanel.classList.add("div" + i);
        gridPanel.classList.add("HoverClass");
        canvas.appendChild(gridPanel);
    }
    
})




