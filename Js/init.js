//////Get Json Data//////
const myFetch = async () =>{ 

  return await fetch('https://raw.githubusercontent.com/GilBrou/CultQuizProject/main/QuizData.json')
  .then(function(resp){return resp.json();})
  .then(function(data){return data});

};

/////remove loader if page already load
function OnlyLoadOnce(){
if (window.location.href.indexOf("noAnim") != -1){
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

 /////check if multiplayer mode is toggled

   
  if (window.location.href.indexOf("J1") != -1){
    let isMultiOn = true;
    //console.log("multi is ON");
    var path = window.location.pathname;
    var page = path.split("/").pop();
    //console.log(page);
    if(page == "index.html"){
        multiBtn.style.display= "none";
        soloBtn.style.display= "block";
        let multiheader = document.querySelector(".multiheader");
        multiheader.style.display = "flex";
        let myUrl = window.location.href;
        let url_string = (window.location.href);
        let url = new URL(url_string);
        let UrlPlay1 = url.searchParams.get("J1");
        let UrlPlay2 = url.searchParams.get("J2");
        let UrlScore1 = url.searchParams.get("S1");
        let UrlScore2 = url.searchParams.get("S2");
        let play1 = document.querySelector(".nom-player1");
        let play2 = document.querySelector(".nom-player2");
        let score1 = document.querySelector(".sPlayer1");
        let score2 = document.querySelector(".sPlayer2");
        play1.innerHTML = UrlPlay1;
        score1.innerHTML = (UrlScore1 + " "+ "points");
        play2.innerHTML = UrlPlay2;
        score2.innerHTML = (UrlScore2 + " "+ "points");
      } else if (page == "QuizPageMulti.html") {
        let multiheader = document.querySelector(".multiheader");
        multiheader.style.display = "flex";
        let myUrl = window.location.href;
        let url_string = (window.location.href);
        let url = new URL(url_string);
        let UrlPlay1 = url.searchParams.get("J1");
        let UrlPlay2 = url.searchParams.get("J2");
        let UrlScore1 = url.searchParams.get("S1");
        let UrlScore2 = url.searchParams.get("S2");
        let play1 = document.querySelector(".nom-player1");
        let play2 = document.querySelector(".nom-player2");
        let score1 = document.querySelector(".sPlayer1");
        let score2 = document.querySelector(".sPlayer2");
        play1.innerHTML = UrlPlay1;
        score1.innerHTML = (": " + " " + UrlScore1 + " "+ "points");
        play2.innerHTML = UrlPlay2;
        score2.innerHTML = (": " + " " + UrlScore2 + " "+ "points");
      }
  }   

  if (window.location.href.indexOf("J1") < 1){
    let isMultiOn = false;
    console.log("multi is OFF");
    if(page == "index.html"){
    multiBtn.style.display= "block";
    soloBtn.style.display= "none";
    let multiheader = document.querySelector(".multiheader");
    multiheader.style.display = "none";
   }else{
    let multiheader = document.querySelector(".multiheader");
    multiheader.style.display = "none";
   }
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