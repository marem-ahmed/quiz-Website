export class quiz {
    constructor(finalRes) {
        this.finalRes = finalRes
        this.currentNumOfQuestion = 0
        this.questionTotalNumber = this.finalRes.length
        document.querySelector("#btn-next").addEventListener('click', this.nextQuestion.bind(this))






        this.show()

    }
    show() {
        let correctAnswers = this.correctAnswers = this.finalRes[this.currentNumOfQuestion].correct_answer
        let inCorrectAnswers = this.inCorrectAnswers = this.finalRes[this.currentNumOfQuestion].incorrect_answers
        let totalAnswers = [correctAnswers, ...inCorrectAnswers]

        document.querySelector('#questions').innerHTML = `<p class="main-color-text d-inline">Q${this.currentNumOfQuestion + 1}:</p> ${this.finalRes[this.currentNumOfQuestion].question}`
        document.querySelector("#currentQuestions").innerHTML = this.currentNumOfQuestion + 1;
        document.querySelector('#TotalQuestion').innerHTML = this.questionTotalNumber;
        let container = ``
        for (let i = 0; i < totalAnswers.length; i++) {
            container +=
                `   <label class="form-check-label mb-2 second-color-text">
                            <input type="radio" class="form-check-input" name="answer"  value="${totalAnswers[i]}">
                            ${totalAnswers[i]}
                        </label>`
        }

        document.querySelector('#answers').innerHTML = container
    }
    nextQuestion() {
       
        let correctAnswer = this.correctAnswers = this.finalRes[this.currentNumOfQuestion].correct_answer;
        let userAnswers = Array.from(document.getElementsByName('answer')).find(ele => ele.checked);
        let valueOfUserAnswer=userAnswers.value
this.checkUserAnswer(correctAnswer,valueOfUserAnswer)
        if (userAnswers == undefined) {
            $("#alert-answer").fadeIn(600);
        }else {
            this.currentNumOfQuestion++
            this.show()
             $("#alert-answer").fadeOut(0);

        }

  

    }
          checkUserAnswer(correctAnswer,valueOfUserAnswer){
       if(valueOfUserAnswer==correctAnswer){
    $('#markCorrect').fadeIn(500).fadeOut(500)
                  

 
}else{
                $('#markIncorrect').fadeIn(500).fadeOut(500)
  


}
        }
}