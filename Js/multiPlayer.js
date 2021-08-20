const modalbg = document.querySelector(".bground2"); 

/////Open modals & ligthboxes
const multiBtn = document.querySelector(".multi");
multiBtn.addEventListener("click", openModal);
function openModal(){modalbg.style.display = "block";}     
  
/////close modals & ligthboxes
	const closeBtn = document.querySelectorAll(".close");
	const closeBtn = document.querySelectorAll(".close");

	//on click X
	closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

	//on press enter on focus
	closeBtn.forEach((btn) => btn.addEventListener("keyup", ckeckKeyClose));  
	function ckeckKeyClose(){if (event.keyCode === 13){closeModal();}}

	//on press escape key
	document.addEventListener('keydown', function(e){
		if(event.keyCode === 27){closeModal();};
	});

	//close modal function
	function closeModal() {modalbg.style.display = "none";}  


