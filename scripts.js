let size = 20;
let container = document.getElementsByClassName("container")[0];
updateGridSize(size);
function updateGridSize(size){
    container.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
    for(let i = 0; i < size**2; i++){
        container.innerHTML = container.innerHTML + "<div></div>";
    }
    for(let i = 0; i < container.childNodes.length; i++){
        container.childNodes[i].addEventListener("mouseenter", function(){
            container.childNodes[i].style.backgroundColor = 'red';
        })
}
}

