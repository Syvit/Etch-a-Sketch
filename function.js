const gridSelect = document.querySelectorAll('button'); 
const container = document.querySelector('.gridContainer');
const div = document.querySelectorAll('div');


function gridGen(gridNum, padSize){
    for (let i = 0; i < gridNum; i++){
        const row = document.createElement('div');
        row.className = 'row';
        for(let x = 1; x<=gridNum; x++){
            const cell = document.createElement('div');
            cell.className = 'gridCell';
            // cell.innerHTML = (i * gridNum) + x;
            row.appendChild(cell);         
            cell.onmouseover = function(e){
                e.target.style.backgroundColor = 'var(--lnktxt)';
            }
            cell.style.padding =`${(padSize)}em`;
        }
        container.appendChild(row);
    }
    

}

function gridSize(){
    gridSelect.forEach((button) => 
        button.addEventListener('click', (e)=> {   
            gridChoice(button.id);
        })
    )};

    function gridChoice(size){
        if (size == 'small') {
            gridGen(16,0.915);
                gridSelect.forEach((button) =>{
                    button.remove();
                });
            const reset = document.createElement('button');
            reset.textContent = 'Reset';
            document.querySelector('#gridCount').append(reset);
            
            reset.addEventListener('click', () => {
                location.reload();
            })
        }
        else if (size == 'medium'){
            gridGen(32,0.425);

                gridSelect.forEach((button) =>{
                    button.remove();
                });
            const reset = document.createElement('button');
            reset.textContent = 'Reset';
            document.querySelector('#gridCount').append(reset);

            reset.addEventListener('click', () => {
                location.reload();
        })
        }
        else if (size == 'large'){
            gridGen(64,0.181);
                gridSelect.forEach((button) =>{
                    button.remove();
                });
            const reset = document.createElement('button');
            reset.textContent = 'Reset';
            document.querySelector('#gridCount').append(reset);
            
            reset.addEventListener('click', () => {
                location.reload();
        })
        }
    };

    gridSize();
    gridChoice();