// 1.when start button is clicked, text area should become active.when done button is clicked ,
// then it should be disabled
// 2.When we click on start button then h2 should display the sample text.

const startBtn=document.getElementById('start');
const textArea=document.getElementById('textArea');
const sampleText=document.getElementById('sample-text');
let startTime,endTime;

const linesOfSampleText=["India,officially the Republic of India is a country in South Asia.","India is the second-most populous country, the seventh-largest country by land area."," India is the most populous democracy in the world.","Indian cuisine consists of a wide variety of regional and traditional cuisines.","India has been a secular federal republic since 1950, governed in a democratic parliamentary system."]

function playGame(){
  
    //Randomly display any line of text from the array 
  const randomNumber=Math.floor(Math.random()*linesOfSampleText.length)  
  sampleText.innerText=linesOfSampleText[randomNumber];

    // time at which user starts typing
  const date=new Date();
  startTime=date.getTime();
  startBtn.innerText="Done";
}

function endGame(){
    // time at which user ends typing

    const date=new Date();
    endTime=date.getTime();

    // Calculate total time taken by the user to type in minutes
    const timeTakenInSeconds=(endTime-startTime)/1000;
    const timeTakenInMinutes=timeTakenInSeconds/60;

    // Calculate number of word typed by the user

    const typedString= textArea.value;
    const numberOfTypedWords= wordCount(typedString);

    // Calculate speed of typing in words per minute 

     const speedInWordsPerMin= Math.round(numberOfTypedWords/timeTakenInMinutes);
     let finalMessage="You have typed at the speed of "+speedInWordsPerMin+" words per minute! ";

        //to check the no. of words user has typed correctly
    finalMessage+=checkCorrectWords(sampleText.innerText,typedString);

   sampleText.innerText= finalMessage;

   textArea.value=""; 

   }

  function checkCorrectWords(str1,str2){

     const string1=str1.split(" ").filter(function(word) { return word != " "});
     const string2=str2.split(" ").filter(function(word) { return word != " "});
     let count=0;
     string1.forEach((word,index)=>{
         if(string2[index]===word){
          count++;
         }
     })
     const errorWords=string1.length-count;
    
     return (count+" words correct out of "+string1.length+" words and the total number of errors are "+errorWords+".");
   }



function wordCount(str){
const words=str.split(" ").filter(function(word) { return word != " "}).length;
return words;
}

startBtn.addEventListener('click',function(){
    if(this.innerText==="Start"){
        textArea.disabled=false;
        playGame();
    }else{
        this.innerText="Start";
        textArea.disabled=true;
        endGame();
    }
});