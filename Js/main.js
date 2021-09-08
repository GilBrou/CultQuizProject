/////On page load/////
const main = async () =>{
  
  //////Dom Elements
  const main = document.getElementById('main-section');   

  //////Get Json Data
  let quizDataBase = await myFetch();  
  let quizData = quizDataBase.Quiz

  //////Instanciate quizCard Class
  for (let i in quizData){
    let newQuizCard = new quizCard(
      quizData[i].name,
      quizData[i].id,
      quizData[i].tags,
      quizData[i].punchLine,
      quizData[i].taunt,
      quizData[i].scoreReact,
      quizData[i].questions
    );

    //Create Dom elements from Photographers
    newQuizCard.createAndDisplayQuizCards(main);
  }

  //Add QuizCard card animations (className)
  addAnim(); 

  /////remove loader if pag already load
  OnlyLoadOnce(); 

  //////Sort tags
  sortingTags();
 
  /////Got to selected Quiz
  goToQuiz()

  /////Open About Modal  
  const aboutBtn = document.querySelector(".foot1");
  const aboutModal = document.querySelector(".openAbout");
  aboutBtn.addEventListener("click", openAbout);
  function openAbout(){
    event.preventDefault(); 
    aboutModal.style.display = "block";
  }
  /////Close About Modal
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
      if(event.keyCode === 27){closeModal();}
    });

    //close modal function
    function closeModal() {aboutModal.style.display = "none";}     

};

/////Initiate Main Function On Page Load
window.onload = main;