/////On page load/////
const main = async () =>{

  
  //Dom Elements
  const main = document.getElementById('main-section');

  //Variables
  let quizDataBase, quizData, newQuizCard;


  //Get Json File
  await fetch('https://raw.githubusercontent.com/GilBrou/CultQuizProject/main/QuizData.json')
  .then(function(resp){return resp.json();})
  .then(function(data){quizDataBase = data;});

  
  quizData = quizDataBase.Quiz
  //console.log(quizData);

  //Instanciate quizCard Class
  for (let i in quizData){
    let newQuizCard = new quizCard(
      quizData[i].name,
      quizData[i].id,
      quizData[i].tags,
      quizData[i].punchLine,
      quizData[i].questions
    );

    //Create Dom elements from Photographers
    newQuizCard.createAndDisplayQuizCards(main);
  };

  /////Dom Elements
  const QuizCard = document.querySelectorAll(".thatQuiz");

  /////Events

  //Increase number
  QuizCard.forEach((btn) => btn.addEventListener("click", getQuizz));

  /////Functions

  //launch quizz page
  function getQuizz() {    
  let QuizId = event.target.id;   
  //console.log(QuizId);
  //window.location = "./QuizPage" + QuizId +".html";
  window.location = "./QuizPage.html";
  };

  sortingTags ();

 
};

/////Initiate Main Function On Page Load
window.onload = main;