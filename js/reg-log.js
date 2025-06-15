
var form = document.getElementById('reglog-form');

var reg = document.getElementById('reg-from')
var log = document.getElementById('log-from')

var header = form.querySelector('.header');

var active = document.querySelector('.form-highlighter');
var cf = document.getElementById('change-form');
var cfs = 1;

var mimg = document.getElementById('rl-img');

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

var pic = [
	// 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/e6af39cbabdfebd28f2a88c672f24a8d/100x64_3',
	// 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/69336/776bb1c70c886d7a5cfc1445f387d8c4/100x64_3',
	// 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/69336/f746c66f29a76fc441c954f78a53dbd4/100x64_3',
	// 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/d20d8b58ce89ab2d5a3941497fc579cb/100x64_3',
	// '',
]
// mimg.src = pic[getRandomInt(pic.length)];
// setInterval(()=>{
// 	mimg.src = pic[getRandomInt(pic.length)];
// }, 5000)



// alert()

let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;
const easeFactor = 0.03; // Коэффициент плавности (чем меньше, тем плавнее)

function animate() {
    currentX += (targetX - currentX) * easeFactor;
    currentY += (targetY - currentY) * easeFactor;
    mimg.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(animate);
}

animate();

document.addEventListener('mousemove', (event) => {
    targetX = (event.clientX - window.innerWidth / 2) * 0.02;
    targetY = (event.clientY - window.innerHeight / 2) * 0.02;
});

cf.onclick = () => {
	let type;
	if(cfs == 0){
		type = "Регистрация"
		reg.style.display = "flex";
		log.style.display = "none";

		cfs = 1;
		header.innerHTML = type;
	}else{
		type = "Авторизация"
		reg.style.display = "none";
		log.style.display = "flex";
		header.innerHTML = type;
		cfs = 0;
	}
	// alert(cfs);
}



function change(t) {

	let e = document.getElementById(t+'-form');
	let pos = e.offsetLeft;

	if(active.offsetLeft != pos){
		active.style.left = pos+'px';
		if(t == 'log'){
			log.style.width = 65+'%';
			reg.style.width = '';

			log.querySelector('.form-inputs').style.display = 'flex';
			log.classList.remove('form-disabled');
			reg.classList.add('form-disabled');
			reg.classList.remove('form-active');
			reg.querySelector('.form-inputs').style.display = 'none';
		}else{
			log.style.width = '';
			reg.style.width = 65+'%';
			

			reg.querySelector('.form-inputs').style.display = 'flex';
			reg.classList.remove('form-disabled');
			log.classList.add('form-disabled');
			log.classList.remove('form-active');
			log.querySelector('.form-inputs').style.display = 'none';
		}
		
		
		e.classList.add('form-active');
	}

	
}


log.onclick = () => {
	change("log")
}
reg.onclick = () => {
	change("reg")
}