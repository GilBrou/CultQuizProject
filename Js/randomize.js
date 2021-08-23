/*randomize*/
randomize();
function randomize(){
  var currentIndex = questions0.length, temporaryValue, randomIndex;  
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = questions0[currentIndex];
    questions0[currentIndex] = questions0[randomIndex];
    questions0[randomIndex] = temporaryValue;
  }
  /////SPLIT IN HALF
  let half = Math.ceil(questions0.length / 2);
  questions0 = questions0.splice(0,half);//first 10 questions quiz
  return questions0;
}