var num = 4;// кол-во клеток
var wid = 100;//размер клетки
var ptn = 7;//размер точки
var stn = 88;//размер камня
var ind = 100;
var Left;//переменная для отрисовки камня
var Top;//переменная для отрисовки камня
var white = 'w';
var black = 'b'
var colour = white;
var arr = new Array(num+1);
var arrCopy = new Array(num+1);
var fill = 1; //используетсяв check, как число


// рисовка поля
for (j=0; j<num; j++) {
	for (i=0; i<num; i++) {
		var square = document.createElement('img');
		square.src = 'images/square.png';
		square.style.position = 'absolute';
		square.style.left = ind+ i*(wid-1)  + 'px';
		square.style.top = ind+ j*(wid-1) + 'px';
		document.getElementById('div1').appendChild(square);
	}		
}
// рисовка точек
for (j=0; j<(num+1); j++) {
	//наполняем массив массивами (почему в этом цикле? а хрен его знает - просто для экономии)
	arr[j] = new Array(num+1);
	arrCopy[j] = new Array(num+1);
	for (i=0; i<(num+1); i++) {
		var point = document.createElement('img');
		point.src = 'images/point.png';
		point.style.position = 'absolute';
		point.style.left = ind+ i*(wid-1)-ptn/2 + 'px';
		point.style.top = ind+ j*(wid-1)-ptn/2 + 'px';
		document.getElementById('div1').appendChild(point);
		arr[j][i] = fill;
		arrCopy[j][i] = fill;
	}	
}
console.log(arr);

// функция клика на пересечение клеток
document.addEventListener("click", function(e){
	for (j=0; j<(num+1); j++) {
		for (i=0; i<(num+1); i++) {
			var stone = document.createElement('img');
			stone.style.position = 'absolute';
			Left = (ind + i*(wid-1))-stn/2;
			Top = (ind + j*(wid-1))-stn/2;
			// условие координаты
			if  ((e.pageX<(ind + i*(wid-1)+20) && e.pageX>(ind + i*(wid-1)-20)) && (e.pageY<(ind + j*(wid-1)+20) && e.pageY>(ind + j*(wid-1)-20))) {
				//нельзя ставить камень на место другого камня
				if (arr [j][i] == fill) { 
					if (colour=='b') {
						stone.src = 'images/blackStone.gif';
						stone.style.left = Left + 'px';
						stone.style.top = Top + 'px';
						document.getElementById('div1').appendChild(stone);
						arr [j][i] = colour;
						returnArray(arr,arrCopy);
						mojo(j,i,colour);
						colour = white;	
					}
					else {
						stone.src = 'images/whiteStone.gif';
						stone.style.left = Left + 'px';
						stone.style.top = Top + 'px';
						document.getElementById('div1').appendChild(stone);
						arr [j][i] = colour;
						returnArray(arr,arrCopy);
						mojo(j,i,colour);
						colour = black;
					}	
				}
				
			}
			
		}
	}
	console.log('массив arr',arr);
	console.log('массив arrCopy',arrCopy);
});

// заготовка на подсчет мойо
function mojo(a,b,c) {
	sum = checkEmpty(a+1,b)+checkEmpty(a-1,b)+checkEmpty(a,b+1)+checkEmpty(a,b-1)
	sum = sum + checkColour(a+1,b,c)+checkColour(a-1,b,c)+checkColour(a,b+1,c)+checkColour(a,b-1,c)
	console.log(sum);
	return sum;
}

function checkEmpty(a,b){
	if ((a<=num && b<=num)&&(a>=0 && b>=0)) {
		if (arrCopy[a][b]==fill) {
			return arrCopy[a][b];
		}
		else {
			return 0;
		}
	}
	else {
		return 0;
	}
}

function checkColour(a,b,c){
	if ((a<=num && b<=num)&&(a>=0 && b>=0)) {
		if (arrCopy[a][b]==c) {
			arrCopy[a][b] = '-';
			return mojo(a,b,c);
		}
		else {
			return 0;
		}
	}
	else {
		return 0;
	}
}

//функция перезаписи массива (arrCopy = arr - нельзя)
function returnArray(arr1,arr2){
	for (n=0; n<(num+1); n++) {
		for (k=0; k<(num+1); k++) {
			arr2[n][k] = arr1[n][k];
		}
	}
}
