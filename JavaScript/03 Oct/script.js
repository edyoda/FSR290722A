// console.log("Assignment discussion");

var questionsSet;
var form = document.getElementById("quizForm");

var ajax = new XMLHttpRequest();
ajax.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz");
ajax.send();
ajax.addEventListener("readystatechange", onReadyStateChange);
function onReadyStateChange(e) {
  if (e.target.readyState === 4 && e.target.status === 200) {
    console.log(JSON.parse(e.target.responseText));
    var data = JSON.parse(e.target.responseText);
    questionsSet = data;
    for (var i = 0; i < data.length; i++) {
      var questionContainer = document.createElement("div");
      var questionObj = data[i];
      var counter = i + 1;

      var question = document.createElement("h3");
      question.innerText = "Q." + counter + questionObj.question;

      //   <input id="option" type="radio" />
      //   <label for="option">A</label>

      var options = questionObj.options;

      questionContainer.append(question);

      for (var j = 0; j < options.length; j++) {
        var option = options[j];
        var innerCounter = j + 1;

        var radioId = `id_${counter}_${innerCounter}`;

        var radio = document.createElement("input");
        radio.type = "radio";
        radio.id = radioId;
        radio.name = `q_${counter}`;
        radio.value = radioId;

        var label = document.createElement("label");
        label.innerText = option;
        label.htmlFor = radioId; // Linking radio button with label

        questionContainer.append(radio, label);
      }

      form.append(questionContainer);
    }

    var submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.value = "Submit";

    form.append(submitBtn);
  }
}

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  var score = 0;

  for (var i = 0; i < questionsSet.length; i++) {
    // This loop matches the answer given by user with the correct answer
    var counter = i + 1;
    var questionName = `q_${counter}`;
    var answer = form[questionName].value;
    var questionObj = questionsSet[i];

    if (answer.endsWith(questionObj.answer)) {
      score++;
    }
  }

  var scoreBoard = document.getElementById("score");
  scoreBoard.innerText = score;
}
