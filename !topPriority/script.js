function generateQuiz(questions, quizContainer,resultsContainer , submitButton){

    function showQuestions(questions,quizContainer){
        //code will go here
    }

    function showResults(questions, quizContainer,resultsContainer){
        //gather answer containers
        var answerContainers = quizContainer.querySelectorAll('.answers');

        //keep track of user answers
        var userAnswer = '';
        var numCorrect = 0;

        //for each question
        for(var i=0; i<questions.length; i++){

            //find selected answer 
             userAnswer = (answerContainers[i]. querySelector('input[name=question'+i+']:checked')||{}).value;

             //if answer is correct 
             if (userAnswer===questions[i].correctAnswer){
                 //add to the number of correct answer 
                 numCorrect++;

                 //color the answers blue 
                 answerContainers[i].style.color = 'blue';
             }
                 //if answer is wrong or blank 
                 else { 
                     //colors the answer red 
                     answerContainers[i].style.color='red';
                 }

                 //show number of correct answer out of total 
                 resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;

    }

    //show the questions
    showQuestions(questions, quizContainer);

    //when user clicks submit , shows results
    submitButton.onclick = function(){
        showResults(questions,quizContainer,resultsContainer); 
    }
}

var myQuestions = [
     { 
         question : "The foundation [comes up with] the idea of providing teachers in rural areas with more teaching resources",
         answers :{
          a: "refuses",
          b: "postpone",
          c: "proposes",
          d: "accepts"
         },
         correctAnswer: "c"
     },
     { 
         question: "the government needs to develop the public transport system if it wishes to encourage more people [to give up] driving private vehicles",
         answers: {
             a: "continue",
             b: "desist[from]",
             c: "consider",
             d: "testify"
         },
         correctAnswer: "b"
        },
        {
            question: "more talks by successful people i needed to [cheer] students [up]",
            answers: {
                a: "inspire",
                b: "refresh",
                c: "enlist",
                d: "inspect"
            },
            correctAnswer: "a"
        },
        {
            question: "the government decides to [cut off] their support programs funded develop communities as they lack funding",
            answers: {
                a: "continue",
                b: "revise",
                c: "improve",
                d: "abandon"
            },
            correctAnswer: "d"
        },
        {
            question: "if students struggle to find information for their specific studies they can easily [look it up] on the internet",
            answers: {
                a: "imitate",
                b: "beautify",
                c: "invent",
                d: "research"
            },
            correctAnswer: "d"
        },
        {
            question: "the newly lauched electronic gadget has really -------",
            answers: {
                a:"taken up",
                b:"take up",
                c:"taken off",
                d:"take off"
            },
            correctAnswer: "c"
        },
        {
            question:"the bus was almost full so it was difficult to -------",
            answers: {
                a:"get in",
                b:"get on",
                c:"get up"
            },
            correctAnswer: "b"
        },
        {
            question: "the soldier will be brought to trial because it's considered to have ------- state secrets to the enemy ",
            answers: {
                a: "backed up",
                b: "given away",
                c: "broken out",
                d: "turned off" 
            },
            correctAnswer : "b"
        },
        {
            question:"i thought the movie was going to end but it just -------",
            answers: {
                a:"dragged in",
                b:"dragged on",
                c:"dragged into"
            },
            correctAnswer:"b"
        },
        {
            question: "oh no! the list of building has ------ again",
            answers: {
                a:"broken down",
                b:"broken up",
                c:"broken in"
            },
            correctAnswer:"a"
        },
        {
            question: "in a recent survey it was found that most manager's time it's taken ------- with paperwork and writing report",
            answers: {
                a:"up",
                b:"down",
                c:"by"
            },
            correctAnswer : "a"
        },
        {
            question:"sorry i'm late, my car ------ petrol",
            answers: {
                a:"ran out",
                b:"ran out of",
                c:"ran out on"
            },
            correctAnswer:"b"
        },
        {
            question:"i painted ------ to them the possible consequences of their actions",
            answers: {
                a:"with",
                b:"out",
                c:"to"
            },
            correctAnswer:"b"
        },
        {
            question:"the english teacher gave the class a list of work to ------ the meaning of ",
            answers : {
                a:"set up",
                b:"run over",
                c:"look up",
                d:"check in"
            },
            correctAnswer:"c"
        },
        {
            question:"the team managed to ------ the police barricade",
            answers:{
                a:"break in",
                b:"break through",
                c:"break on"
            },
            correctAnswer:"b"
        },
        {
            question:"in my opinon, money really brings ------- the worst people{greed,jealousy and envy}",
            answers: {
                a:"off",
                b:"down",
                c:"out"
            },
            correctAnswer:"c"
        },
        {
            question:"there was nothing good on tv so i turned it ------- and went to bed ",
            answers: {
                a:"off",
                b:"on",
                C:"up",
                d:"down"
            },
            correctAnswer:"a"
        },
        {
            question:"we have to ------- my notes once again to make sure we have understood all important details before the exam",
            answers: {
                a:"stand for",
                b:"go over",
                C:"pull down",
                d:"put up with"
            },
            correctAnswer:"c"
        },
        {
            question:"friends that help you to ------ a difficult time in your life ",
            answers: {
                a:"get around",
                b:"get buy",
                c:"get through"
            },
            correctAnswer:"d"
        },
        {
            question:"music is too loud. can you turn it ------ a bit?",
            answers: {
                a:"up",
                b:"out",
                c:"off",
                d:"down"
            },
            correctAnswer:"c"
        },
        {
            question:"------! things will definitely been better.",
            answers: {
                a:"cheer on",
                b:"cheer at",
                c:"cheer up"
            },
            correctAnswer:"d"
        },
        {
            question:"that's a good recommendation. i'm happy to ------ it",
            answers: {
                a:"talk down to",
                b:"put on",
                c:"looked for",
                d:"go along with"
            },
            correctAnswer:""
        },
        {
            question:"Adeyemi and Samuel no longer do business together . they fell ------- over money and have stopped speaking to each other ",
            answers:{
                a:"from",
                b:"out",
                c:"with"
            },
            correctAnswer:""
        },
        {
            question:"the police are making attempts to ------ on drunk drivers",
            answers: {
                a:"crack up",
                b:"crackdown",
                c:"crack through"
            },
            correctAnswer:""
        },
        {
            question:"today, there's a tendency in our culture to ------- the people who have not been to a university",
            answers: {
                a:"take off",
                b:"show off",
                c:"turnover",
                d:"look down on"
            },
            correctAnswer:""
        }
];

     function showQuestions(questions, quizContainer){
         //a place to store the questions and answer
         var output = [];
         var answers ;

            //for each questions...
            for(var i=0; i<questions.length; i++) {
                 
                //first reset the list of the questions
                answers = [];

                   //for each available answer to this question
                   for(letter in questions[i].answers){
            }

                // place to add an html radio button
                answers.push(
                    '<label>'
                  +'<input type="radio" name="question'+i+'"value=" '+letter+' ">'
                    + letter + ' : '
                    + questions [i]. answers[letter]
                   + ' </label>'
                );
             }
                    
             //add this question and its answers to the output
             output.push(
                 '<div class = "question">' +questions[i].question+'</div>'
                 +'<div class = "answers">'+answers.join('')+'</div>'
             );
         }
                  //finally combine our output list into one string of html and put it on the page
                  quizContainer.innerHTML= output.join('');
        

                  showQuestions(questions,quizContainer);

                  var quizContainer = document.getElementById('quiz');
                  var resultsContainer = document.getElementById('results');
                  var submitButton = document.getElementById('submit');

                  generateQuiz(myQuestions,quizContainer,resultsContainer,submitButton);
        }
