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

  document.getElementById("afterSubmit").style.visibility="visible";
  document.getElementById("number-correct").innerHTML = "You Got " + correctAnswers + " Answers Correct!";
}