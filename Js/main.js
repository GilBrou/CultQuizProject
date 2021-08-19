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

    //Add card animation className
    const timed = document.querySelectorAll(".QuizCard")
    i = 0;
    Array.from(timed).map(element => {
      timeId = "flip-it" + i;
      element.classList.add(timeId);
      i++;
    });

    /////remove loader if pag already load
    let myUrl = window.location.href;
    let url_string = (window.location.href);
    let url = new URL(url_string);
    let targetId = url.searchParams.get("id");
    
    if (targetId == "noAnim"){

    //Remove all animations if page already load
     const loader = document.querySelector(".loader-background");
     loader.style.display = "none"; 
     const timed0 = document.querySelectorAll(".QuizCard")
     i = 0;
     Array.from(timed0).map(element => {
       timeId = "flip-it" + i;
       element.classList.remove(timeId);
       i++;
     });
    const timed1 = document.querySelectorAll(".bounce-in-top")
     Array.from(timed1).map(element => {
       element.classList.remove("bounce-in-top"); 
     });
    const timed2 = document.querySelectorAll(".swing-in-top-fwd")
     Array.from(timed2).map(element => {
       element.classList.remove("swing-in-top-fwd"); 
     });  
    const timed3 = document.querySelectorAll(".bounce-in-bottom")
     Array.from(timed3).map(element => {
       element.classList.remove("bounce-in-bottom"); 
     });
    const timed4 = document.querySelectorAll(".swing-in-bottom-fwd")
     Array.from(timed4).map(element => {
       element.classList.remove("swing-in-bottom-fwd"); 
     });
   }
    
};

/////Initiate Main Function On Page Load
window.onload = main;