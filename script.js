var num = 4;// кол-во клеток
var wid = 100;//размер клетки
var ptn = 7;//размер точки
var stn = 88;//размер камня
var ind = 100;
var Left;//переменная для отрисовки камня
var Top;//переменная для отрисовки камня
var colour = 'w';
var arr = new Array(num+1);
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
	arr[j] = new Array(num+1); //наполняем массив массивами (почему в этом цикле? а хрен его знает - просто для экономии)
	for (i=0; i<(num+1); i++) {
		var point = document.createElement('img');
		point.src = 'images/point.png';
		point.style.position = 'absolute';
		point.style.left = ind+ i*(wid-1)-ptn/2 + 'px';
		point.style.top = ind+ j*(wid-1)-ptn/2 + 'px';
		document.getElementById('div1').appendChild(point);
		arr[j][i] = fill;
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
						colour = 'w';
						mojo(j,i);
						
					}
					else {
						stone.src = 'images/whiteStone.gif';
						stone.style.left = Left + 'px';
						stone.style.top = Top + 'px';
						document.getElementById('div1').appendChild(stone);
						arr [j][i] = colour;
						colour = 'b';
						mojo(j,i);
					}	
				}
				
			}
			
		}
	}
	console.log('массив w-b',arr);
});

// заготовка на подсчет мойо
function mojo(a,b) {
	//if (a<=num && b<=num) {
	sum = arr[a+1][b] + arr[a-1][b] + arr[a][b+1] + arr[a][b-1];
	console.log(sum);
	//}
	
}
//ДОПИСАТЬ (чекидет в функцию выше - это проверка каждой точки)
function check(a,b){
	if (arr[a][b]==fill) {
		
	}
}



