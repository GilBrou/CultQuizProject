/////Photographer Class Creation/////
class quizCard {
  constructor(name, id, tags, punchLine, questions){
    this.name = name;
    this.id = id;
    this.tags = tags;
    this.punchLine = punchLine;
    this.questions = [];
  }

  //Create And Display into Dom Photographer's Cards
  createAndDisplayQuizCards(main){

     console.log(this.punchLine);

    //Dom element creation
    let aQuizCard = document.createElement('article');
      let mainQuizCard = document.createElement('div');
        let thatQuiz = document.createElement('div');
          let portrait = document.createElement('img');
          let name = document.createElement('h1');
          let nTags = document.createElement('div');
        let lineContainer = document.createElement('div');
          let lineContent = document.createElement('div');
            let tagline = document.createElement('p');


    //Dom appending
    main.appendChild(aQuizCard);
      aQuizCard.appendChild(mainQuizCard);
        mainQuizCard.appendChild(thatQuiz);
          thatQuiz.appendChild(portrait);
          thatQuiz.appendChild(name);
          thatQuiz.appendChild(nTags);
        mainQuizCard.appendChild(lineContainer);
          lineContainer.appendChild(lineContent);
            lineContent.appendChild(tagline);
      

    //Assing to Dom
    portrait.src = "./Ressources/Photos/Quiz" + this.name + ".jpg";
    name.innerHTML = this.name;     
    tagline.innerHTML = this.tagline;


    //Setup Taglist
    nTags.classList.add("tags");
   
   
    /*
    for (let i in thoseTags){
      console.log(thoseTags[i]);
      //nTags.classList.add(this.tags[i]);
    }*/

    //Assign classes & refs or ids to Dom elements
    aQuizCard.id = this.id; 
    aQuizCard.classList.add("QuizCard");
      mainQuizCard.classList.add("main-QuizCard");
        thatQuiz.classList.add("thatQuiz");
        thatQuiz.id = this.name;
          portrait.classList.add("portrait");
          name.classList.add("name");
        lineContainer.classList.add("line-container");
          lineContent.classList.add("line-content");
  }

}
