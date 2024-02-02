function checkAnswer(){
    var correctAnswer = "paris"
    var selectedAnswer;
    var options = document.getElementsByName('answer')
    
    for(var i = 0; i<options.length; i++){
        if(options[i].checked){
            selectedAnswer = options[i].value
        }
    }
    if(selectedAnswer == correctAnswer){
        alert("wow its a correct answer")
    }else{
        alert("This is the wrong answer try again")
    }
}