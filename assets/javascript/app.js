//

//click start to start game

$(document).on('click', '#start', function(){
    console.log("Start");
    game.startGame();

});

//Reset on Click (User Action)
    $(document).on('click', '#reset', function(){
    game.reset();
});

//questions with answers

var randomQuestions = Math.floor(Math.random()*(questions));

var questions = [{
question: "Fill in the blank. Peace is a lie, there is only _________",
answers:["Passion", "War", "Strife", "Conflict"],
correctAnswer: "Passion",
}, {

question: "Which Sith Lord instituted the Rule of Two?",
answers: ["Darth Malak", "Freedon Naad", "Darth Bane", "Darth Sidious"],
correctAnswer: "Darth Bane",
}, {

question: "Darth Vader's fortress was located on which planet?",
answers: ["Mustafar", "Yavin", "Illum", "Ziost"],
correctAnswer: "Mustafar",
}, {

question: "Who built the Massassi temples on Yavin 4?",
answers: ["Darth Vader", "Darth Caedus", "Ulic Qel-Droma", "Naga Sadow"],
correctAnswer: "Naga Sadow",
}, {

question: "On which planet did the Sith species originate?",
answers: ["Nar Shadda", "Tatooine", "Korriban","Dromuund Kaas"],
correctAnswer: "Korriban",
}];


//game object

var game = {
correct:0,
incorrect:0,
counter:120,

countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);
    if (game.counter === 0){
    console.log('Times Up');
    game.timeUP();
}
},
startGame:function(){
    timer=setInterval(game.countdown, 1000);
    $('#start').remove();
    for (var i = 0; i < questions.length; i++) {
    $("#panel").append('<h2>' + questions[i].question + '</h2>');
        for (var j = 0; j < questions[i].answers.length; j++) {
    $("#panel").append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);

     }
    }
},
timeUP:function() {
    clearInterval (timer);
    alert('Times Up!');

},
reset:function() {
location.reload();

},

done: function(){
    $.each($("imput[name='answer0']:checked"), function (){
        console.log("inside")
        if($(this).val() == questions[0].correctAnswer){
            game.correct++;
        }else {
            game.incorrect++;
        }
});
    $.each($("input[name='answer1']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[1].correctAnswer){
        game.correct++;
        } else {
        game.incorrect++;
    }
});
    $.each($("input[name='answer2']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[2].correctAnswer) {
        game.correct++;
    } else {
        game.incorrect++;
    }
});
    $.each($("input[name='answer3']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[3].correctAnswer) {
        game.correct++;
    } else {
        game.incorrect++;
    }
});
    $.each($("input[name='answer4']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[4].correctAnswer) {
        game.correct++;
    } else {
        game.incorrect++;
    }
});
    $.each($("input[name='answer5']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[5].correctAnswer) {
        game.correct++;
    } else {
        game.incorrect++;
    }
});
game.result();
},
     result:function(){
     clearInterval(timer);
     $("#panel").empty();
     $("#panel").append("Correct answers: " + game.correct + "<br/>");
     $("#panel").append("Incorrect answers: " + game.incorrect);

     }
 }