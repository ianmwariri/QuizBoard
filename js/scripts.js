$(document).ready(function(){
  $("#startBtn").click(function(){
    $("#formQuestions").show();
  });
});

function checkSubmit(){

  var que1 = document.quiz.q1AnswerChoice.value;
  var que2 = document.quiz.q2AnswerChoice.value;
  var que3 = document.quiz.q3AnswerChoice.value;
  var que4 = document.quiz.q4AnswerChoice.value;

  var right = 0;

  if (que1 == "a"){
    right ++;
  }

  if (que2 == "client"){
    right++
  }

  if (que3 == "addInteractivity") {
    right++;
  }


  if (que4 == "interpreted") {
    right++;
  }

  document.getElementById("afterSubmit").style.visibility="visible";
  document.getElementById("number-correct").innerHTML = "You got " +right + " right!";
}