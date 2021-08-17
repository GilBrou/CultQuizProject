/////On page load/////
const page = async () =>{
  
  /////Dom Elements
  const main = document.getElementById('main-section');   
  
  /////Variables
  let selectedQuiz;

  /////get targeted quiz in previous click (from index.html)
  let myUrl = window.location.href;
  let url_string = (window.location.href);
  let url = new URL(url_string);
  let targetId = url.searchParams.get("id");

  /////Get Json Data
  let quizDataBase = await myFetch();  
  let quizData = quizDataBase.Quiz
  //for (let i in quizData){quizArray.push(quizData[i])};  

  /////Instanciate quizCard Class
  for (let i in quizData){
    if(quizData[i].name == targetId){
      let newQuizCard = new quizCard(
        quizData[i].name,
        quizData[i].id,
        quizData[i].tags,
        quizData[i].punchLine,
        quizData[i].taunt,
        quizData[i].scoreReact,
        quizData[i].questions
      );
      selectedQuiz = newQuizCard;
      newQuizCard.DisplayQuizInfos(page);
    };    
  };

  /////Display Questions
  let questions = [];
  let selectedQuestions = selectedQuiz.questions;
  for (let i in selectedQuestions){    
      let newQuestion = new Question(
        selectedQuestions[i].text,
        selectedQuestions[i].choices,
        selectedQuestions[i].answer
      );
      questions.push(newQuestion);
    };

  /////All functions
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    /////Quiz Ending
    endQuiz: function() {
      //Get Quiz Results
      function getResults(){
        let allQuestions = [];
        let allAnswers = [];
        let allResults = [];
        for (let i in questions){
          Q = questions[i].text;
          allQuestions.push(Q);
          A = questions[i].answer;
          allAnswers.push(A);
        }
        for (let i in allQuestions){
          let thatQAndA ='<div class="all-in-one">' + '<p class="h2-quiz">' + allQuestions[i]
          + '</p>' + '<p class="h3-quiz">' +  allAnswers[i] + '</p>' + '</div>';
          allResults.push(thatQAndA);
        }
        for (let i in allResults){return allResults;}
      }

      //Display score , score reaction and answers
      endQuizHTML = `<h1>Quiz terminé !<br>Votre score est de : ${quiz.score} / ${quiz.questions.length} </h1>`;
      this.elementShown("quiz", endQuizHTML + getResults());
      const modalbg = document.querySelector(".bground2"); 
      const scoreReact = document.querySelector(".reaction");
      let ReactBad = selectedQuiz.scoreReact[0];
      let ReactGood = selectedQuiz.scoreReact[1];
      if(quiz.score < 10){      
        reaction = `<h1>Score : ${quiz.score} / ${quiz.questions.length}</h1><br><p>` + ReactBad + `</p><br>`;
      } else {
        reaction = `<h1>Score : ${quiz.score} / ${quiz.questions.length}</h1><br><p>` + ReactGood + `</p><br>`;
      };     
      scoreReact.innerHTML = reaction;
      modalbg.style.display = "block";     
      
      /////close modals & ligthboxes
      const closeBtn = document.querySelectorAll(".close");

      //on click X
      closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

      //on press enter on focus
      closeBtn.forEach((btn) => btn.addEventListener("keyup", ckeckKeyClose));  
      function ckeckKeyClose(){if (event.keyCode === 13){closeModal();}}

      //on press escape key
      document.addEventListener('keydown', function(e) {
        if(lightBoxIsOpen = true){if (event.keyCode === 27){closeModal();}};
      });

      //close modal function
      function closeModal() {modalbg.style.display = "none";}  
    },

    question: function(){this.elementShown("question", quiz.getCurrentQuestion().text);},
    choices: function(){
      let choices = quiz.getCurrentQuestion().choices;
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      //display choices and handle guess
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };


  /////Quiz App
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }

  ///// Quiz Creation
  let quiz = new Quiz(questions);
  quizApp();
 
  /////Listen to click on retry button
  const retry = document.querySelectorAll(".retry");
  Array.from(retry).map(element => {
    element.addEventListener("click", function (event) {
      window.location.href = "QuizPage.html" + "?id=" + targetId;
    });
  }); 

  //focus on quiz
  let here = document.getElementById('quiz');
  here.scrollIntoView();

  /*
  //listen to click on logo(backhome)
  const log = document.querySelectorAll(".logo");
  Array.from(log).map(element => {
    element.addEventListener("click", function (event) {
        event.preventDefault()
       window.location.href = "index.html" + "?id=" +"noAnim";
    });
  });

  //listen to click on btn(backhome)
  const log2 = document.querySelectorAll(".backhome");
  Array.from(log2).map(element => {
    element.addEventListener("click", function (event) {
        event.preventDefault()
       window.location.href = "index.html" + "?id=" +"noAnim";
    });
  });
  */

  ///ANIMATE CHOICES BUTTONS 
  let allFour = [];
  let guess0 = document.getElementById('guess0');
  let guess1 = document.getElementById('guess1');
  let guess2 = document.getElementById('guess2');
  let guess3 = document.getElementById('guess3');
  allFour.push(guess0, guess1, guess2, guess3);
  let inumber = 0;
  for(let i in allFour){
    let animClass = "animbutton" + inumber;
    allFour[i].classList.add(animClass);
    inumber++;
  };

  /////ANIMATE Banner.jelloBanner
    const jelloBanner = document.querySelectorAll(".banner");
    Array.from(jelloBanner).map(element => {
      element.classList.add("jelloBanner");
    }); 

  /////ANIMATE TITLE APPEARANCE
  let animTitle = document.getElementById('question');
  animTitle.classList.add("animTitle");

  /////ANIMATE question lenght display
  let animprogress = document.getElementById('progress');
  animprogress.classList.add("animprogress");

  /////ANIMATE retry or leave
  const retryAnim = document.querySelectorAll(".retryOrLeave");
  Array.from(retryAnim).map(element => {
    element.classList.add("retryAnim");
  });  





  

};
/////Initiate Main Function On Page Load
window.onload = page;
