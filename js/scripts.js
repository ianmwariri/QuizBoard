$(document).ready(function(){
  $("#startBtn").click(function(){
    $("#formQuestions").show();
  });
});

function checkSubmit(){

  var que1 = document.quizForm.q1AnswerChoice.value;
  var que2 = document.quizForm.q2AnswerChoice.value;
  var que3 = document.quizForm.q3AnswerChoice.value;
  var que4 = document.quizForm.q4AnswerChoice.value;

  var correctAnswers = 0;

  if (que1 == "a"){
    correctAnswers++;
  }

  if (que2 == "client"){
    correctAnswers++;
  }

  if (que3 == "addInteractivity") {
    correctAnswers++;
  }

  if (que4 == "interpreted") {
    correctAnswers++;
  }


  var rewardMessage = ["Excellent!", "Good!", "Fair Trial!", "Pull up your Socks!"];

  var rewardPics = ["images/success.gif", "images/good.gif", "images/fair.gif", "images/socks.gif"];

  var markRange;
  
  if(correctAnswers <1){
    markRange = 3;
  }


  if (correctAnswers >0 && correctAnswers <2) {
    markRange = 2;
  }

  if (correctAnswers > 1 && correctAnswers < 3) {
    markRange = 2;
  }

  if (correctAnswers > 2 && correctAnswers < 4) {
    markRange = 1;
  }

  if (correctAnswers > 3) {
    markRange = 0;
  }

  alert("You got " + correctAnswers + " out of 4 Answers Correct!");
  alert("See Remarks Below Submit Button Please...");

  document.getElementById("afterSubmit").style.visibility="visible";

  document.getElementById("message").innerHTML = rewardMessage[markRange];
  //document.getElementById("number-correct").innerHTML = "You got " + correctAnswers + " out of 4 Answers Correct.";

  document.getElementById("pics").src = rewardPics[markRange];


  $("form#quizForm").hide();
  event.preventDefault();
}