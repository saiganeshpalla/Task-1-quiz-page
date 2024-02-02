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
        alert("this is the correct answer")
    }else{
        alert("this is the wrong answer")
    }
}