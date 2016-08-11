// UI Logic

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var politicalIndex = 0;
    var middle = 0;
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var question6 = $("input:radio[name=question6]:checked").val();

    if (name == "") {
      $(".outcome").text("Please enter your name to get your results.");
    }

    if (question1 === "agree") {
      politicalIndex++;
    }
    else {
      politicalIndex--;
    }

    if (question2 === "agree") {
      politicalIndex++;
    }
    else {
      politicalIndex--;
    }

    if (question3 === "agree") {
      politicalIndex++;
    }
    else {
      politicalIndex--;
    }

    if (question4 === "agree") {
      politicalIndex++;
    }
    else {
      politicalIndex--;
    }

    if (question5 === "agree") {
      politicalIndex++;
    }
    else {
      politicalIndex--;
    }

    if (question6 === "agree") {
      politicalIndex++;
    }
    else {
      politicalIndex--;
    }

    if (politicalIndex === middle) {
      $(".outcome").text("Based on your responses " + name + ", you're a Moderate");
    }
    else if (politicalIndex < middle && politicalIndex > -3) {
      $(".outcome").text("Based on your responses " + name + ", you're kinda Liberal");
    }
    else if (politicalIndex < middle) {
      $(".outcome").text("Based on your responses " + name + ", you're very Liberal");
    }
    else if (politicalIndex > middle && politicalIndex < 3) {
      $(".outcome").text("Based on your responses " + name + ", you're kinda Conservative");
    }
    else {
      $(".outcome").text("Based on your responses " + name + ", you're very Conservative");
    }

  });
});
