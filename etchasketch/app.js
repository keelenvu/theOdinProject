//selectors
const container = document.querySelector('#container');
const clearbtn = document.querySelector('#clear')
const gridbtn = document.querySelector('#grid-size');

//making flex containers
function flexGen(size) {
for (let i = 0; i < size; i++) {
 const flex = document.createElement('div');
 flex.classList.add('flex-container');
 flex.textContent = '';
 container.appendChild(flex);
   }
}

//initialize sketch
flexGen(16);
cellGen(16);
adjustSize(16)
penTrail();
clearBoard();
gridChange();

//making flex cells
function cellGen(size) {
const flexboxes = document.querySelectorAll('.flex-container')
flexboxes.forEach((flexContainer) => {
  for (let i = 0; i < size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell')
    cell.textContent = '';
    flexContainer.appendChild(cell);
  }
 });
}

//making a trail with a "pen"
function penTrail() {
const traces = document.querySelectorAll('.cell');
traces.forEach((trace) => {
 trace.addEventListener('mouseover', () => {
  trace.style.backgroundColor = 'black';
  });
 });
}

//clearing board
function clearBoard() {
let traces = document.querySelectorAll('.cell');
clearbtn.addEventListener('click', () => {
traces.forEach((white) => {
  white.style.backgroundColor = 'white';
   });
 });
} 

 //changing grid size **need to adjust to flex box
function gridChange() {
gridbtn.addEventListener('click', () => {
 let traces = document.querySelectorAll('.cell');
 let containers = document.querySelectorAll('.flex-container')
 let num = prompt('What number x number grid do you want?')
 size = num * num;
 containers.forEach((container) => {
   container.remove()
 })
 traces.forEach((trace) => {
   trace.remove()
  });
 flexGen(num);
 cellGen(num)
 adjustSize(num);
 penTrail();
 clearBoard();
 });
}

function adjustSize(size) {
  const drawBox = 500;
  const numSquares = size;
  let adjust = (drawBox / numSquares);
  let measurement = adjust.toString()
  let boxes = document.querySelectorAll('.cell');
  boxes.forEach((box) => {
    box.style.height = measurement + 'px';
    box.style.width = measurement + 'px';
  });
}



