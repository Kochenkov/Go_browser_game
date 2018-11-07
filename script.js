var num = 4;// кол-во клеток
var wid = 100;//размер клетки
var ptn = 7;//размер точки
var stn = 88;//размер камня
var ind = 100;
var Left;
var Top;
var colour = 'white';
var arr = new Array(num+1);
var mjw = 0;
var mjb = 0;
var mj;

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
	arr[j] = new Array(num+1);
	for (i=0; i<(num+1); i++) {
		var point = document.createElement('img');
		point.src = 'images/point.png';
		point.style.position = 'absolute';
		point.style.left = ind+ i*(wid-1)-ptn/2 + 'px';
		point.style.top = ind+ j*(wid-1)-ptn/2 + 'px';
		document.getElementById('div1').appendChild(point);
		arr[j][i] = 1;
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
				if (colour=='black') {
					stone.src = 'images/blackStone.gif';
					stone.style.left = Left + 'px';
					stone.style.top = Top + 'px';
					document.getElementById('div1').appendChild(stone);
					colour = 'white';
					arr [j][i] = 'b';
					mj = mjb;
					mojo();
					eat();
					mjb = mj;
					console.log('черн',mjb);
					console.log('бел',mjw);
				}
				else {
					stone.src = 'images/whiteStone.gif';
					stone.style.left = Left + 'px';
					stone.style.top = Top + 'px';
					document.getElementById('div1').appendChild(stone);
					colour = 'black';
					arr [j][i] = 'w';
					mj = mjw;
					mojo();	
					eat();
					mjw = mj;
					console.log('черн',mjb);
					console.log('бел',mjw);
				}
			}
			
		}
	}
	console.log('массив w-b',arr);
	//eat();
});

function mojo() {
	if ((j+1) < (num+1)) {
		if (typeof arr[j+1][i] == 'number') {mj = mj + arr[j+1][i]}
		if (typeof arr[j+1][i] == 'string') {mj = mj - 1}
	}
	if ((j-1) >= (0)) {
		if (typeof arr[j-1][i] == 'number') {mj = mj + arr[j-1][i]}
		if (typeof arr[j-1][i] == 'string') {mj = mj - 1}
	}
	if ((i+1) <= (num+1)) {
		if (typeof arr[j][i+1] == 'number') {mj = mj + arr[j][i+1]}
		if (typeof arr[j][i+1] == 'string') {mj = mj - 1}
	}
	if ((i-1) >= (0)) {	
		if (typeof arr[j][i-1] == 'number') {mj = mj + arr[j][i-1]}
		if (typeof arr[j][i-1] == 'string') {mj = mj - 1}
	}
}


function eat() {
	for (j=0; j<(num+1); j++) {
		for (i=0; i<(num+1); i++) {	
			if (mj<=0) {
				var empty = document.createElement('img');
				empty.style.position = 'absolute';
				Left = (ind + i*(wid-1))-stn/2;
				Top = (ind + j*(wid-1))-stn/2;
				empty.src = 'images/noStone.gif';
				empty.style.left = Left + 'px';
				empty.style.top = Top + 'px';
				document.getElementById('div1').appendChild(empty);
			}
		}
	}
}


