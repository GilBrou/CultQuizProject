
/////Calculate and display total of like for this photographer/////
function totalOfLikes() {
  
  /////Variables
  let totaloflike = [];

  /////Display total likes into footer  
  let eachMediaLikes = document.querySelectorAll(".number");
  Array.from(eachMediaLikes).map(element => { 
    totaloflike.push(element.innerText)
    return element;  
  });
  var valuesArray = [];
  var sum = 0;
  for (var i = 0; i < totaloflike.length; i++) {   
    let value = parseInt(totaloflike[i]);
    valuesArray.push(value);
  };
  for (var i = 0; i < valuesArray.length; i++) {sum += valuesArray[i];};  
  let totalNumber = document.querySelector(".number-footer");
  totalNumber.innerHTML = sum;

  /////check popularity order
  listenToMenu();
};

/////Increment media likes & total likes on click/////
function incrementLikes() {

  /////Get Dom elements 
  const likeButtons = document.querySelectorAll(".likes");
  
  /////Events

  //Increase number
  likeButtons.forEach((btn) => btn.addEventListener("click", increaseNumber));

  /////Functions

  //launch modal form
  function increaseNumber() {
  let newNumberTarget = event.target.firstChild;   
  let likeButton = event.target.firstChild.innerText;  
  newNumber = parseInt(likeButton);
  newNumber++;
  NewText = newNumber.toString();
  newNumberTarget.innerHTML = NewText;

  /////Calculate and display once more the total of like for this photographer
  totalOfLikes();
  };
};