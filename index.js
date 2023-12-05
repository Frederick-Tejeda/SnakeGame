var alef = {top : 50, left: 50};
var old = [{left: 50, top: 50}, {left: 45, top: 50}, {left: 40, top: 50}];
var count = 0;
var speed = 1000;
var hear = "D";
var interval;
var valor = false;
var appleTop, appleLeft, device;
var bool = true;
var isbegin = true;
var key = 3;

const begin = () => {

device = (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) ? true:  false;

if(device){
	document.getElementById("root").style = `width:100vw;
    height: 100vh;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;`
	
	document.getElementById("root").innerHTML = 
	`<main id="main-min">
        <section id="i0" style="width:6.5vh; height:6.5vh;">
        </section>
        <div class="ball" id="i1"></div><div class="ball" id="i2"></div>
    </main>
    <article>
    <aside id="top" onclick="hear = 'w'">⬆️</aside>
    <aside id="right" onclick="hear = 'd'">➡️</aside>
    <aside id="bottom" onclick="hear = 's'">⬇️</aside>
    <aside id="left" onclick="hear = 'a'">⬅️</aside>
    <aside id="center" onclick="interval = setInterval(game, speed)">Start</aside>
    </article>`
	}
	else{
		document.getElementById("root").style = `width:100vw;
    height: 100vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;`
		
	document.getElementById("root").innerHTML = 
	`<main id="main-max" style="width: 80vh; height: 80vh;">
        <section id="i0" style="width:7vh; height:7vh;">
        </section>
        <div class="ball" id="i1"></div><div class="ball" id="i2"></div>
    </main>`
	}
	
}

		const gameOver = () => {
		clearInterval(interval);
		valor = false;
		bool = true; 
		key = 3;
		count = 0;
		speed = 1000;
		alert("Perdiste...");
		/*if(document.getElementById("apple").style != null) document.getElementById("apple").style = "width: 0; height: 0;";
		start();	
		*/
		window.location.reload();
		}

		const start = () => {
			old = [{left: 50, top: 50}, {left: 45, top: 50}, {left: 40, top: 50}];
			alef = {top: 50, left: 50};
			speed = 1000;
			count = 0;
			hear = "d";
		for (let i = 0; i < old.length; i++) {
			var prueba = document.getElementById(`i${i}`);
			prueba.style.top = `${old[i].top}%`;
			prueba.style.left = `${old[i].left}%`;
		}
	}
		
		const Talvez = () => {
		if(bool){
		valor = true;
		appleLeft = Math.floor((Math.random() == 0) ? Math.random()  * 100: Math.random()  * 100);
		appleTop = Math.floor((Math.random() == 0) ? Math.random()  * 100: Math.random()  * 100);
		var appleStyle = `position:absolute;
						  width:5.5vh;
						  height:5.5vh;
						  border-radius: 50%;
						  background-color: #0f0;
						  top:${appleTop}%; 
						  left:${appleLeft}%; 
						  transform: translate(-${appleLeft}%, -${appleTop}%)`;
		(device) ? document.getElementById("main-min").innerHTML += `<div id="apple" style="${appleStyle}"></div>` : document.getElementById("main-max").innerHTML += `<div id="apple" style="${appleStyle}"></div>`;
		bool = false;
		}	
		}

	const game = () => {
	
		Talvez();
		
		if((old[0].left - appleLeft) >= -5 && (old[0].left - appleLeft) <= 5){
			if((old[0].top - appleTop) >= -5 && (old[0].top - appleTop) <= 5){ 
			(device) ? document.getElementById("main-min").innerHTML += `<div class="ball" id=i${key}></div>` : document.getElementById("main-max").innerHTML += `<div class="ball" id=i${key}></div>`;
			old.push({"top": old[old.length - 1].top, "left": old[old.length - 1].left});
			key++;
			valor = false;	
			}
		}
		
		if(old[0].left <= 0 || old[0].left >= 100 || old[0].top <= 0 || old[0].top >= 100) gameOver();
		
		if(valor == false){
		//Apple();
				valor = true;
		appleLeft = Math.floor(Math.random()  * 100);
		appleTop = Math.floor(Math.random()  * 100);
		if(document.getElementById("apple").style != null){document.getElementById("apple").style = `position:absolute;
						  width:5.5vh;
						  height:5.5vh;
						  border-radius: 50%;
						  background-color: #0f0;
						  top:${appleTop}%; 
						  left:${appleLeft}%; 
						  transform: translate(-${appleLeft}%, -${appleTop}%)`;	
		}
		}
		
		if(count == 50){
		clearInterval(interval);
		speed -= (speed / 15);
		setInterval(game, speed);
		count = 0;
		}else{
		count++;		
		}
	
    if (hear == "A" || hear == "a" || hear == "ArrowLeft") alef.left -= 5;
    if (hear == "W" || hear == "w" || hear == "ArrowUp") alef.top -= 5;
    if (hear == "S" || hear == "s" || hear == "ArrowDown") alef.top += 5;
    if (hear == "D" || hear == "d" || hear == "ArrowRight") alef.left += 5;
        
        for (let length = (old.length - 1); length >= 0; length--) {
			var item = document.getElementById(`i${length}`);
			if(length > 0){
			old[length].top = old[length - 1].top;
			old[length].left = old[length - 1].left;	
			item.style.top = `${old[length].top}%`;
			item.style.left = `${old[length].left}%`;
			}
			else{
			old[0].top = alef.top;
			old[0].left = alef.left;
			item.style.top = `${old[length].top}%`;
			item.style.left = `${old[length].left}%`;
			}
		}	
		for (let j = 0; j < old.length; j++) {
			let ite = document.getElementById(`i${j}`);
			ite.style.top = `${old[j].top}%`;
			ite.style.left = `${old[j].left}%`;
			if(alef.top == ite.style.top || alef.left == ite.style.left) gameOver();
		}
		
	}

	document.addEventListener("keyup", (a) => {
		if(a.key == "A"|| a.key == "a" || a.key == "W"|| a.key == "w" || a.key == "S"|| a.key == "s" || a.key == "D"|| a.key == "d" || a.key == "ArrowUp" || a.key == "ArrowDown" || a.key == "ArrowLeft" || a.key == "ArrowRight") hear = a.key;
		else if(a.key == " ") interval = setInterval(game, speed);
    });
    
    begin();
	start();
