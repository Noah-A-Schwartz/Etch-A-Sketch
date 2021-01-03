let size = 16;
let color = 'red';
let defaultColor = 'white';
let rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let container = document.getElementsByClassName("container")[0];
let checkbox = document.getElementById("rainbow");
checkbox.addEventListener('change', function(){
    let colorpicker = document.getElementById("colorpicker");
    if(this.checked === true){
        colorpicker.style.opacity = '50%';
        colorpicker.disabled = true;
    }
    else{
        document.getElementById("colorpicker").style.opacity = '100%';
        colorpicker.disabled = false;
    }
    updateGridSize(size);
    })

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
    size = prompt("Please enter a size(less than 100)")
    updateGridSize(size);
}

function addEvent(div){
    
    if(checkbox.checked === true){
        div.addEventListener("mouseenter", setRainbow);
    }
    else{
        div.addEventListener("mouseenter", setColor);
}

}
function resetColorOnClick(){
    updateGridSize(size);
    
     
}
function resetColor(div){
    div.style.backgroundColor = defaultColor;
} 

function clickColor(e){
    color = e.value;
    container.childNodes.forEach(addEvent);
    container.childNodes.forEach(resetColor);
}

function setRainbow(){
    
    this.style.backgroundColor = rainbowColors[Math.floor(Math.random()*7)];
    setTimeout(removeEvent(this), 0);
}

function setColor(){
    this.style.backgroundColor = color;
    setTimeout(removeEvent(this), 0);
}

function removeEvent(div){
     if(checkbox.checked === true){
        div.removeEventListener("mouseenter", setRainbow);
     }
     else{
        div.removeEventListener("mouseenter", setColor);
     }
}

