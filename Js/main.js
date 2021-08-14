/////On page load/////
const main = async () =>{

  
  //Dom Elements
  const main = document.getElementById('main-section');  

   //Get Json Data
  let quizDataBase = await myFetch();
  
  
  let quizData = quizDataBase.Quiz
  //console.log(quizData);

  //Instanciate quizCard Class
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
    let haha = newQuizCard.scoreReact;
    console.log(haha);
  };


   //Sort tags
  sortingTags ();

  /////Events

  //listen to click on quiz
  const QuizCard = document.querySelectorAll(".thatQuiz");
  Array.from(QuizCard).map(element => {

    element.addEventListener("click", function (event) {
      let targetId = element.id;
      window.location.href = "quizPage.html" + "?id=" + targetId;
    });
  }); 
};

/////Initiate Main Function On Page Load
window.onload = main;