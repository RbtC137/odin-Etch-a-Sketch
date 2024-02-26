const gridContainer = document.querySelector(".grid-container");

const squareGenBtn = document.querySelector("button");

squareGenBtn.addEventListener("click",squareGenerator)

function squareGenerator(){
    gridContainer.innerHTML = "";
    const squares = prompt("Input the quantity of squares from 1 to 100 here.");
    if(isNaN(+squares) || squares > 100 || squares < 1){
        alert("Please input a valid number!");
    }else{
        let i = 0;
        while(i < squares){
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridContainer.appendChild(gridItem);
            i++;
        }
    }
    
}




