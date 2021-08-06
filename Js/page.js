
/////Classes QUESTION/////

class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

/////QUESTIONS/////

//let Main = document.querySelector(".mainId");
//let MainID = Main.id;
//console.log(Main);
//console.log(MainID);
//if(MainID == Kaamelott){};


let questions = [

  new Question("Lorsqu'elle doit participer à une pièce de théâtre, pour quel rôle se prépare Guenièvre ?",
    ["Andromaque","Hécube", "Pénélope", "Cassandre"],
    "Cassandre"),

  new Question("Lorsque le joueur de bonneteau escroque Karadoc, il explique à celui-ci qu'il est imbattable car il possède...",
    ["La vision de l'aigle","L'oeil de lynx", "L'oeil de truite", "L'oeil de taupe"],
    "L'oeil de taupe"),

  new Question("Selon Lancelot, ce ne serait pas bon pour son autorité que ses soldats apprennent qu'il est...",
    ["Une petite vierge","Un gros innocent", "Une grosse pucelle", "Un sacré puceau"],
    "Une grosse pucelle"),

  new Question("Pas du tout, les lapins, les lapins, c'est...",
    ["Mignon","Gentil", "Caca", "Pas bien"],
    "Gentil"), 

  new Question("Lorsqu'il a un coup de mou, que propose le Maître d'armes à Arthur ?",
    ["Une saucisse grillée, un tonnelet de pinard et des filles","Un cochon rôti, un tonnelet de picrate et des gonzesses", "Des graines, un grand verre d'eau et un bon dodo",
    "Un croque, un godet d'hydromel et des femmes"],    
    "Une saucisse grillée, un tonnelet de pinard et des filles"), 

  new Question("Que demande Seli à Ygerne et Cryda : C'est des claques dans le museau qu'elles cherchent, les...?",
    ["Soeurs Tape-Dur","Soeurs Sourire", "Soeurs Casse-Burne", "Soeurs Pécores"],
    "Soeurs Tape-Dur"),

  new Question("Comment s'appelle le compagnon sur lequel Arthur refuse de taper au début du livre VI ?",
    ["Appius Manilius", "Titus Nipius Glaucia", "Caius Camillus", "Caius Papinius"],
    "Caius Papinius"),

    new Question("Quel est l'autre nom sous lequel Méléagan est connu ?",
    ["La Question","La Réponse", "Le Verdict", "Le Bourreau"],
    "La Réponse"),

  new Question("Que trouve-t-on vraiment la nuit en forêt ?",
    ["Mais de tout... C'est une forêt !", "De minuscules lapereaux, mignons et inoffensifs", "Des lapins adultes", "Des faisans d'une toise et demie"],
    "Mais de tout... C'est une forêt !"),

  new Question("Afin de la courtiser, qu'offre Arthur à la jeune fille qui ne sait pas qui il est ?",
    ["Un poème","884 charettes de bouse", "Une fleur", "Une place au château"],
    "Une fleur"), 

  new Question("Complétez l'émouvant poème d'Yvain : La colombe blanche et sèche... ?",
    ["Peut donner de l'élan à un pigeon", "Cesse de nous esbaudir les oreilles", "Retombe souvent sur sa poitrine", "Rabat son crincrin dans la prairie de notre enfance."],
    "Retombe souvent sur sa poitrine"), 

   new Question("Qu'est-ce qui est petit et marron ?",
    ["Un marron", "Franchement, j'saurais pas dire", "La potion de fécondité", "La pierre de Lune"],
    "Un marron"), 

  new Question("Vous êtes d'accord pour dire que la définition même des taxes et les critiques qu'elles soulèvent forment une dichotomie?",
    ["C'est pas faux", "Ouais, c'est pas faux", "Euh, c'est pas faux", "C'est... non, je connais pas c'mot là"],
    "C'est... non, je connais pas c'mot là"),

  new Question("Avec qui Arthur a-t-il eu un enfant ?",
    ["La fille de Roparzh","La soeur du tavernier", "La fille de Gethenoc", "L'une des jumelles du pêcheur"],
    "La fille de Gethenoc"), 

  new Question("À quel âge Arthur a-t-il retiré l'épée pour la première fois ?",
    ["8 ans", "6 ans", "4 ans", "2 ans"],
    "4 ans"), 

  new Question("Où est passé Grüdu ?",
    ["Il s'est fait tuer par le maître d'armes","Qui ?", "Il est parti retrouver ses parents fromagers", "Il a été enlevé par Attila"],
    "Il a été enlevé par Attila"), 

  new Question("Que mangent les oiseaux venimeux ?",
    ["Des noix et des escalopes de veau","Des noisettes et des escalopes de veau", "Des noix de cajou et des escalopes de veau", "Des baguettes et des escalopes de veau"],
    "Des noisettes et des escalopes de veau"), 

  new Question("Quels objets Perceval a t-il déjà ramené d'une visite à travers un portail dimensionnel ?",
    ["Un totem et une poule","Un sabre laser et un totem", "Une poule et un tambour", "Un tambour et un sabre laser"],
    "Un sabre laser et un totem"), 

  new Question("Lorsque Léodagan et son père Goustan se moquent du roi, quels surnoms lui trouvent-il ?",
    ["Le brave, l'agréable, le molasson et le mignonet","Le bon, le jovial, le gland et le jardinier", "L'aimable, le juste, le faiblard et le ramolli", "Le bon, le sympathique, le mou et le gentillet"],
    "Le bon, le sympathique, le mou et le gentillet"), 

  new Question("Pour Karadoc, y'a pas trente-six recettes du bonheur :",
    ["La joie de vivre et le cochon","La joie de vivre et le saucisson", "La joie de vivre et le jambon", "La joie de vivre et le gras"],
    "La joie de vivre et le jambon"), 
];


/////CLASS QUIZ/////

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

/////REGROUP ALL FUNCTIONS/////

const display = {
  elementShown: function(id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  endQuiz: function() {    
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
      //console.log(allQuestions[i] + "<br>" + " La bonne réponse était " + "''" +  allAnswers[i] + "''");
      let thatQAndA ='<div class="all-in-one">' + '<p class="h2-quiz">' + allQuestions[i] + '</p>' + '<p class="h3-quiz">' + allAnswers[i] + '.' + '</p>' + '</div>' + '<br>';
      //console.log(thatQAndA);
      allResults.push(thatQAndA);
    }
    for (let i in allResults){
      return allResults;
    }

  }

  endQuizHTML = `
    <h1>Quiz terminé !</h1>`;

  endQuizHTML3 = `
    <h1> Votre score est de : ${quiz.score} / ${quiz.questions.length}</1>`;

  this.elementShown("quiz", endQuizHTML + getResults() + endQuizHTML3);

  var elements = document.getElementById("quiz");
  console.log(elements);
  elements.innerHTML = elements.innerHTML.replace(/,/g,'');
    
  },

  question: function() {
    this.elementShown("question", quiz.getCurrentQuestion().text);
  },
  choices: function() {
    let choices = quiz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function() {
        quiz.guess(guess);
        quizApp();
      }
    }
    // display choices and handle guess
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

/////QUIZ LOGIC/////
quizApp = () => {
  if (quiz.hasEnded()) {
    display.endQuiz();
  } else {
    display.question();
    display.choices();
    display.progress();
  } 
}
// Create Quiz
let quiz = new Quiz(questions);
quizApp();




