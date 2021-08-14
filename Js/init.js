//Get Json Data
const myFetch = async () =>{ 

  return await fetch('https://raw.githubusercontent.com/GilBrou/CultQuizProject/main/QuizData.json')
  .then(function(resp){return resp.json();})
  .then(function(data){return data});
};
