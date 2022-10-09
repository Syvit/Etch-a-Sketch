
function createGrid(){
for (let i = 0; i<256; i++){
    const gridBox = document.createElement('div');
    gridBox.className = 'gridBox';
    gridBox.id = i + 1;
 
    document.querySelector('.gridContainer').appendChild(gridBox);
}
};
createGrid();