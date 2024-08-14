import { quiz } from "./quiz.module.js";

export class setting{
    constructor(){
         this.category=document.querySelector('#category')
         this.difficulty=document.getElementsByName('difficulty')
         this.number=document.querySelector('#number')        
        document.querySelector('#btn-start').addEventListener('click',this.start.bind(this)
        )
        
    }
     async start(){
        let categ=this.category.value;
        let difficulty=Array.from(this.difficulty).find(ele=>ele.checked).value;
        let number=this.number.value;     
        if(number>0){
            $('#setting').fadeOut(600,function(){
                $('#quiz').fadeIn(600);
            });
               let quizData=`https://opentdb.com/api.php?amount=${number}&category=${categ}&difficulty=${difficulty}`
               let questions=await this.getData(quizData)
               let finalRes=questions.results
               console.log(finalRes);
               
               let Quiz=new quiz(finalRes)
            console.log(Quiz);
            
               

        }
        else{
            $("#message").fadeIn(600);    
            }
        
        
    }

async getData(quizData) {
    let response = await fetch(quizData);
    let res=await response.json()
    return res;
}}