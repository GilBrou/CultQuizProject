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


  //////Sort tags
  sortingTags ();

  /////Events/////

    //listen to click on quiz
    const QuizCard = document.querySelectorAll(".thatQuiz");
    Array.from(QuizCard).map(element => {
      element.addEventListener("click", function (event) {
        let targetId = element.id;
        window.location.href = "QuizPage.html" + "?id=" + targetId;
      });
    });

    //Remove"_" from names
    const allNames = document.querySelectorAll(".name");
    Array.from(allNames).map(element => {
      element.innerHTML = element.innerHTML.replace(/_/g,' ');
    });
};

/////Initiate Main Function On Page Load
window.onload = main;