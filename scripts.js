let size = 16;
let color = 'red';
let defaultColor = 'gray';
let container = document.getElementsByClassName("container")[0];
updateGridSize(size);
function updateGridSize(size){
    document.getElementById("size-button").innerText = "Size: " + size + "x" + size;
    container.innerHTML = "";
    container.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
    for(let i = 0; i < size**2; i++){
        container.appendChild(document.createElement("div"));
    }
    container.childNodes.forEach(addEvent);
    container.childNodes.forEach(resetColor);
        
}
function getSize(){
    updateGridSize(prompt("Please enter a size(less than 100)"));
}

function addEvent(div){
    div.addEventListener("mouseenter", function(){
        div.style.backgroundColor = color;
    });
}
function resetColorOnClick(){
    container.childNodes.forEach(resetColor)
     
}
function resetColor(div){
    div.style.backgroundColor = defaultColor;
} 

function clickColor(e){
    color = e.value;
    container.childNodes.forEach(addEvent);
    container.childNodes.forEach(resetColor);
}

