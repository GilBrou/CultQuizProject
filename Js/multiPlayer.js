const modalbg = document.querySelector(".bground2"); 

/////Open modals & ligthboxes
const multiBtn = document.querySelector(".multi");
const soloBtn = document.querySelector(".solo");
multiBtn.addEventListener("click", openModal);
function openModal(){
	event.preventDefault();	
	modalbg.style.display = "block";
}     
  
/////close modals & ligthboxes
	const closeBtn = document.querySelectorAll(".close");
	const closeBtn2 = document.querySelectorAll(".back");

	//on click X
	closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
	closeBtn2.forEach((btn) => btn.addEventListener("click", closeModal));

	//on press enter on focus
	closeBtn.forEach((btn) => btn.addEventListener("keyup", ckeckKeyClose));  
	closeBtn2.forEach((btn) => btn.addEventListener("keyup", ckeckKeyClose));
	function ckeckKeyClose(){if (event.keyCode === 13){closeModal();}}

	//on press escape key
	document.addEventListener('keydown', function(e){
		if(event.keyCode === 27){closeModal();};
	});

	//close modal function
	function closeModal() {modalbg.style.display = "none";}  


{
	let isMultiOn = false;

//validate multiplayer form
function validate(){
	event.preventDefault();
	closeModal();
	multiplayerOn();
}

//multiplayer mode on
function multiplayerOn(){
	isMultiOn = true;
	//console.log("Le mode multijoueur sera bientôt actif, promis ;) !");	
	let player1 = first.value;
	let player1Score = 0;
	let player2 = second.value;
	let player2Score = 0; 
	window.location.href = "index.html" + "?id=" +"noAnim" + "&J1=" + player1 + "&S1=" + player1Score + "&J2=" + player2 + "&S2=" + player2Score;
}

/////Toggle Solo mode again
	soloBtn.addEventListener("click", multiplayerOff);

//multiplayer mode off
function multiplayerOff(){
	event.preventDefault();
	isMultiOn = false;
	soloBtn.style.display= "none";
	multiBtn.classList.remove("swing-in-top-fwd"); 
	multiBtn.style.display= "block";
	window.location.href = "index.html" + "?id=" +"noAnim";
}

}///multi scope
