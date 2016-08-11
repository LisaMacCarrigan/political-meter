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

    if (politicalIndex === middle) {
      $(".outcome").text("Based on your responses " + name + ", you're a Moderate");
    }
    else if (politicalIndex < middle) {
      $(".outcome").text("Based on your responses " + name + ", you're a Liberal");
    }
    else {
      $(".outcome").text("Based on your responses " + name + ", you're a Conservative");
    }

  });
});
