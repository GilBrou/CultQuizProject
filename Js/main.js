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

  console.log(quizData);
  quizData = quizDataBase.Quiz

  let quizId = quizData.Quiz;

  //Instanciate quizCard Class
  for (let i in quizId){
    let newQuizCard = new quizCard(
      quizId[i].name,
      quizId[i].id,
      quizId[i].photo,
      quizId[i].tags,
      quizId[i].tagline,
      quizId[i].questions
    );

    //Create Dom elements from Photographers
    newQuizCard.createAndDisplayQuizCards(main);

/*
   //Get and display Images from Photographer's Id
    for (let i in mediaImage){
      if(mediaImage[i].photographerId == newPhotographer.id){
        newPhotographer.images.push(mediaImage[i]);
      }
    }

    //Get and display Videos from Photographer's Id
    for (let i in mediaVideo){
      if(mediaVideo[i].photographerId == newPhotographer.id){
        newPhotographer.videos.push(mediaVideo[i]);
      }
    }
*/
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