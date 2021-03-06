/////On page load/////
const page = async () =>{

  /////Dom Elements
  const main = document.getElementById('main-section');
  main.style.paddingTop = "0";

  /////remove loader if pag already load
  OnlyLoadOnce();

  /////Remove button since quiz is not completer
  let retry = document.querySelector(".retryOrLeave");
  retry.style.margin = "0";
  retry.style.display = "none";

  /////Variables
  let selectedQuiz;

  /////get targeted quiz in previous click (from index.html)
  let myUrl = window.location.href;
  let url_string = (window.location.href);
  let url = new URL(url_string);
  let targetId = url.searchParams.get("id");
  let player1 = url.searchParams.get("J1");
  let player2 = url.searchParams.get("J2");
  let score1 = url.searchParams.get("S1");
  let score2 = url.searchParams.get("S2");
  
  /////Get Json Data
  let quizDataBase = await myFetch();  
  let quizData = quizDataBase.Quiz   

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
  let questions0 = [];
  let selectedQuestions = selectedQuiz.questions;
  for (let i in selectedQuestions){    
      let newQuestion = new Question(
        selectedQuestions[i].text,
        selectedQuestions[i].choices,
        selectedQuestions[i].answer,
        selectedQuestions[i].player
      );
      questions0.push(newQuestion);
      questions.push(newQuestion);
    };

  /////All functions
  const display = {
    //Quiz display 2
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },

    /////End of quiz
    endQuiz: function(){

      let turn = document.querySelector(".thatPlayer");
      turn.style.display = "none";

      //Get Results
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

      /////Display score, reaction, answers and modal
              
        //End text
        endQuizHTML = `<h1>Quiz termin?? !<br>Votre score est de : ${quiz.score} / ${quiz.questions.length} </h1>`;
        this.elementShown("quiz", endQuizHTML + getResults());

        //Reaction
        const scoreReact = document.querySelector(".reaction");
        let ReactBad = "L'important, vous savez, c'est de participer.<br> Et dans votre cas, ??a vaut mieux...";
        let ReactGood = "Clairement, vous ??tes faits pour r??pondre ?? des quiz.<br> Il est temps de quitter votre ancienne vie pour accomplir votre destin??e.";
        if(quiz.score < 10){reaction = `<h1>Score : <br>${quiz.score} / ${quiz.questions.length}</h1><br><p>` + ReactBad + `</p><br>`;
        } else {
        reaction = `<h1>Score : <br>${quiz.score} / ${quiz.questions.length}</h1><br><p>` + ReactGood + `</p><br>`;
        };
        scoreReact.innerHTML = reaction;

        //Reaction Modal
        const modalbg = document.querySelector(".bground2"); 
        modalbg.style.display = "block"; 
        const closeBtn = document.querySelectorAll(".close");

        //modal closing
        closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
        closeBtn.forEach((btn) => btn.addEventListener("keyup", ckeckKeyClose));  
        function ckeckKeyClose(){if(event.keyCode === 13){closeModal();}} 
        document.addEventListener('keydown', function(e){if(event.keyCode === 27){closeModal();}});
        function closeModal(){
          //backbutton display
          let retry = document.querySelector(".retryOrLeave");
          retry.classList.remove("retryAnim");
          retry.style.display = "flex";
          modalbg.style.display = "none";
        }
    },

    //Quiz display 2
    question: function(){
      this.elementShown("question", quiz.getCurrentQuestion().text);
      let CQ = document.getElementById("question").innerHTML;
      let turn = document.querySelector(".thatPlayer");
      let playerTurn;
      for( let i in questions){
        if(CQ == questions[i].text){
          whatP = questions[i].player;
          if( whatP == 1){playerTurn = player1}
          else {playerTurn = player2}    
        }
      }
      turn.innerHTML = "Tour de :" + " " + playerTurn;

    },
    choices: function(){
      let choices = quiz.getCurrentQuestion().choices;
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function(){quiz.guess(guess);quizApp();}
      }

      //display choices and handle guess
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    //progress
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

  //focus on quiz
  let here = document.getElementById('quiz');
  here.scrollIntoView();

  
  //listen to click on logo(backhome)
  const log = document.querySelectorAll(".logo");
  Array.from(log).map(element => {
    element.addEventListener("click", function (event) {
      event.preventDefault()
      let Nscore1 = document.querySelector(".sPlayer1").innerHTML;
      let Nscore2 = document.querySelector(".sPlayer2").innerHTML;
      let Cplayer1 = document.querySelector(".nom-player1").innerHTML;
      let Cplayer2 = document.querySelector(".nom-player2").innerHTML;
      window.location.href = "index.html" + "?id="  +"noAnim" + "&J1=" + Cplayer1 + "&S1=" + Nscore1 + "&J2=" + Cplayer2 + "&S2=" + Nscore2;
    });
  });

  //listen to click on btn(backhome)
  const log2 = document.querySelectorAll(".backhome");
  Array.from(log2).map(element => {
    element.addEventListener("click", function (event) {
      event.preventDefault()
      let Nscore1 = document.querySelector(".sPlayer1").innerHTML;
      let Nscore2 = document.querySelector(".sPlayer2").innerHTML;
      let Cplayer1 = document.querySelector(".nom-player1").innerHTML;
      let Cplayer2 = document.querySelector(".nom-player2").innerHTML;
      window.location.href = "index.html" + "?id="  +"noAnim" + "&J1=" + Cplayer1 + "&S1=" + Nscore1 + "&J2=" + Cplayer2 + "&S2=" + Nscore2;
    });
  });
  

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
