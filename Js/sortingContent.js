
/////Listen to clicked tags and display the accordings quiz Cards/////
function sortingTags (){

  //getting Tags classes
  const allTags = document.querySelectorAll(".livres,.films,.series,.jeux-video,.bede,.animes");
  const allTagsTag = document.querySelectorAll(".allTags");
  var allCards = document.getElementsByTagName("article");
  
  //Listen to "click" on all tags
  for (var i = 0; i < allTags.length ; i++) {
    allTags[i].addEventListener("click", function (event) {
        event.preventDefault();

      //RemoveQuiz cards animations when sorted this way
      const timed = document.querySelectorAll(".QuizCard")
      i = 0;
      Array.from(timed).map(element => {
        timeId = "flip-it" + i;
        element.classList.remove(timeId);
        i++;
      });       

      //Get selected tag className
      var targetTag = event.target.className;
      
      Array.from(allCards).map(element => {

        //Get taglists from current quiz card        
        let inTags = element.querySelector(':nth-child(1) > :nth-child(3)');
        let thatOne = inTags.classList;

        var getOutOrStay = 0;

        Array.from(thatOne).map(element => {
          //Check if selected tag is present in current taglist
          if (element == targetTag ){
            getOutOrStay++;
            
          };  
        });

        //If selected tag is missing, current quiz card is removed
        if (getOutOrStay == 0){element.style.display = "none";}

        //If selected tag is present, current quiz card stay displayed
        else {element.style.display = "block";};        
      });
    });
  };

  //Listen to "click" on allTagsTag
  for (var i = 0; i < allTagsTag.length ; i++) {
    allTagsTag[i].addEventListener("click", function (event) {
      event.preventDefault();
      //Get all quiz cards
      var allCards = document.getElementsByTagName("article");
      Array.from(allCards).map(element => {
      //Display all quiz cards       
        element.style.display = "block";
        return element;
      });
    });
  };
};

//listen to click on quiz cards
function goToQuiz(){
  //listen to click on quiz
  const QuizCard = document.querySelectorAll(".thatQuiz");

  Array.from(QuizCard).map(element => {
    element.addEventListener("click", function (event) {

      event.preventDefault();      
      let targetId = element.id;

      if (window.location.href.indexOf("J1") != -1){
        let myUrl = window.location.href;
        let url_string = (window.location.href);
        let url = new URL(url_string);
        let UrlPlay1 = url.searchParams.get("J1");
        let UrlPlay2 = url.searchParams.get("J2");
        let UrlScore1 = url.searchParams.get("S1");
        let UrlScore2 = url.searchParams.get("S2");
        window.location.href = "QuizPageMulti.html" + "?id=" + targetId + "&J1=" + UrlPlay1 + "&S1=" + UrlScore1 + "&J2=" + UrlPlay2 + "&S2=" + UrlScore2;
      } else{
      window.location.href = "QuizPage.html" + "?id=" + targetId;
    }
      
    });
  });
}
