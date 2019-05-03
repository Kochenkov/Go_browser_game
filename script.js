var cellNumber = 4;// кол-во клеток - num
var cellSize = 100;//размер клетки - wid
var pointSize = 7;//размер точки - ptn
var stoneSize = 88;//размер камня - stn
var boardPozition = 100; // -ind
var drawStoneLeft;//переменная для отрисовки камня -Left
var drawStoneTop;//переменная для отрисовки камня -Top
var white = "w";
var black = "b";
var colour = white;
var arrayFill = 1; //используется в check, как число
var arr = new Array(cellNumber+1); //создание массива

// рисовка поля
for (i=0; i<cellNumber; i++) {
	for (j=0; j<cellNumber; j++) {
		var square = document.createElement("img");
		square.src = "images/square.png";
		square.style.position = "absolute";
		square.style.left = boardPozition + j*(cellSize -1)  + "px";
		square.style.top = boardPozition + i*(cellSize -1) + "px";
		document.getElementById("div1").appendChild(square);
	}		
}

// рисовка точек
for (i=0; i<(cellNumber+1); i++) {	
	for (j=0; j<(cellNumber+1); j++) {
		var point = document.createElement("img");
		point.src = "images/point.png";
		point.style.position = "absolute";
		point.style.left = boardPozition + j*(cellSize-1) - pointSize/2 + "px";
		point.style.top = boardPozition + i*(cellSize-1) - pointSize/2 + "px";
		document.getElementById("div1").appendChild(point);
		
	}	
}

// заполнение массива
for (i=0; i<(cellNumber+1);i++) {
	arr[i] = new Array(cellNumber+1);
	for (j=0; j<(cellNumber+1); j++) {
		arr[i][j] = arrayFill;
	}
}

console.log("исходный массив arr:",arr);

// функция клика на пересечение клеток
document.addEventListener("click", function(e){
	for (i=0; i<(cellNumber+1); i++) {
		for (j=0; j<(cellNumber+1); j++) {
			var stone = document.createElement("img");
			stone.style.position = "absolute";
			drawStoneTop = (boardPozition + i*(cellSize-1))-stoneSize/2;
			drawStoneLeft = (boardPozition + j*(cellSize-1))-stoneSize/2;
			// условие координаты
			if  ((e.pageX<(boardPozition + j*(cellSize-1)+20) && e.pageX>(boardPozition + j*(cellSize-1)-20)) && (e.pageY<(boardPozition + i*(cellSize-1)+20) && e.pageY>(boardPozition + i*(cellSize-1)-20))) {
				//нельзя ставить камень на место другого камня
				if (arr [i][j] == arrayFill) { 
					if (colour=="b") {
						stone.src = "images/blackStone.gif";
						stone.style.left = drawStoneLeft + "px";
						stone.style.top = drawStoneTop + "px";
						document.getElementById("div1").appendChild(stone);
						arr [i][j] = colour;
						//mojo(j,i,colour);
						colour = white;	
					}
					else {
						stone.src = "images/whiteStone.gif";
						stone.style.left = drawStoneLeft + "px";
						stone.style.top = drawStoneTop + "px";
						document.getElementById("div1").appendChild(stone);
						arr [i][j] = colour;
						//mojo(j,i,colour);
						colour = black;
					}	
				}
				
			}
			
		}
	}
	console.log('массив arr:',arr);
});






