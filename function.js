
function createGrid(){
    for (let i = 0; i<256; i++){
        const gridBox = document.createElement('div');
        gridBox.className = 'gridBox';
        gridBox.id = i + 1;
        document.querySelector('.gridContainer').appendChild(gridBox);
        
        gridBox.onmouseover = function(e){
            e.target.style.borderColor = 'red';
            e.target.style.backgroundColor = 'red';
        }
        
    }
};

createGrid();

