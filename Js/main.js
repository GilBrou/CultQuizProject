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
  };

  //Add QuizCard card animations (className)
  addAnim(); 

  /////remove loader if pag already load
  OnlyLoadOnce(); 

  //////Sort tags
  sortingTags ();

  ///////listen and move to selected quiz
  goToQuiz();

  /////Multiplayer modal
  multiModal();

};

/////Initiate Main Function On Page Load
window.onload = main;