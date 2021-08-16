
/////Listen to clicked tags and display the accordings quiz Cards/////
function sortingTags (){

  //getting Tags classes
  const allTags = document.querySelectorAll(".livres,.films,.series,.jeux-video,.bede,.animes");
  const allTagsTag = document.querySelectorAll(".allTags");
  var allCards = document.getElementsByTagName("article");
  
  //Listen to "click" on all tags
  for (var i = 0; i < allTags.length ; i++) {
    allTags[i].addEventListener("click", function (event) {

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