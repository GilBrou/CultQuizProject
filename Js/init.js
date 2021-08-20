//////Get Json Data//////
const myFetch = async () =>{ 

  return await fetch('https://raw.githubusercontent.com/GilBrou/CultQuizProject/main/QuizData.json')
  .then(function(resp){return resp.json();})
  .then(function(data){return data});

};
  const myMultiFetch = async () =>{ 

  return await fetch('https://raw.githubusercontent.com/GilBrou/CultQuizProject/main/Multiata.json')
  .then(function(resp){return resp.json();})
  .then(function(data){return data});
};

/////remove loader if page already load
function OnlyLoadOnce(){

  //get location id
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
}

//Add QuizCard card animations (className)
function addAnim(){
  //Add QuizCard card animations (className)
  const timed = document.querySelectorAll(".QuizCard")
  i = 0;
  Array.from(timed).map(element => {
    timeId = "flip-it" + i;
    element.classList.add(timeId);
    i++;
  });
}