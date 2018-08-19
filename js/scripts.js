$(document).ready(function(){
  $("#startBtn").click(function(){
    $("#formQuestions").show();
  });
});

function checkSubmit(){
  
}

function evaluate(){
  var que1 = document.quiz.scripting.value;
  var que2 = document.quiz.client.value;
  var que3 = document.quiz.styleHtml.value;
  var que4 = document.quiz.compiled.value;

  var correctAnswer =0;

  if (que1 === "A Scripting"){
    correctAnswer +=10;
  }

  if (que2 === "A Scripting") {
    correctAnswer += 10;
  }

  if (que3 === "A Scripting") {
    correctAnswer += 10;
  }

  if (que4 === "A Scripting") {
    correctAnswer3 += 10;
  }




  var rewardMessage = ['Excellent!', 'Good!', 'Fair', 'Pull up your socks!'];




var range;

if (correct <= 1) {
  range = 3;
} else if (correct < 2) {
  range = 2;
} else if (correct < 3) {
  range = 1;
} else if (correct < 4) {
  range = 0;
}





}


//function showResults()
//function buildQuiz(){}