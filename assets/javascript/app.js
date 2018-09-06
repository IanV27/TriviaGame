var panel = $('#quiz-area');

// Start Trivia Game with music
$(document).on('click', '#start', function() {
  game.start();
  game.playmusic();
});
//  Tried to write a code to stop music on the "done" button was clicked.  I could not figure it out.
$(document).on('click', '#done', function() {
  game.done();
});

// Trivia Questions
var questions = [{
  question: "1 . What year did the movie Back to the Future hit the box office?",
  answers: ["1984", "1985", "1986", "1987"],
  correctAnswer: "1985"
}, {
  question: "2 . How many Rocky movies are in the saga?",
  answers: ["4", "5", "6", "7"],
  correctAnswer: "6"
}, {
  question: "3 . What movie was the highest grossing movie of the 80's?",
  answers: ["E.T. The Extra-Terrestial", "Star Wars: Return of the Jedi", "Star Wars: The Empire Strikes Back", "Batman"],
  correctAnswer: "E.T. The Extra-Terrestial"
}, {
  question: "4 . Who won the presidential election in 1980 ",
  answers: ["Jimmy Carter", "Ronald Reagan", "George H.W. Bush", "Gerald Ford"],
  correctAnswer: "Ronald Reagan"
}, {
  question: "5 . What year did Sony Corp. introduce the CD Walkman?",
  answers: ["1982", "1983", "1984", "1985"],
  correctAnswer: "1984"
}, {
  question:  "6 . Who was the leader of the ThunderCats?",
  answers: ["Panthro", "Lion-O", "Snarf", "Chester Cheetah"],
  correctAnswer: "Lion-O"
}, {
  question: "7 . What is the oldest running cartoon show?",
  answers: ["South Park", "Family Guy", "The Simpsons", "SpongeBob SquarePants"],
  correctAnswer: "The Simpsons"
}, {
  question: "8 . Who did Dave Thomas the Founder of Wendy's work for before he launched his restaurants?",
  answers: ["Colonel Sanders", "Ray Kroc", "A&W", "Roy Rogers"],
  correctAnswer: "Colonel Sanders"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:30,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
    $('#start').remove();

  

    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  playmusic: function() { 
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/images/music.mp3");

    audioElement.play();

    console.log("80's Jam");
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>All Done! Excellent!!!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};