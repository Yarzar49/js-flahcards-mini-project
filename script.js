let NewCard=document.querySelector('#new_card');
let DeleteCard=document.querySelector('#delete_card');
let save=document.querySelector('#save_btn');
let close=document.querySelector('#close_btn');



let flashcards=document.getElementsByClassName('flashcards')[0];
let createBox=document.getElementsByClassName('create-box')[0];
let question=document.querySelector('#question');
let answer=document.querySelector('#answer');

let contentArray=localStorage.getItem('items')?
JSON.parse(localStorage.getItem('items')):[];

//when new card button
NewCard.addEventListener('click', function(){
    createBox.style.display="block";
});

//when delete card button
DeleteCard.addEventListener('click',function(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray=[];
   
});

//when flashcard save button
save.addEventListener('click', function(){
    var flashcard_info={
        'my_question' : question.value,
        'my_answer' : answer.value
    }

    contentArray.push(flashcard_info);
    localStorage.setItem('items',JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value='';
    answer.value='';


});

contentArray.forEach(divMaker);
function divMaker(text) {
    var div=document.createElement("div");
    var h2_question=document.createElement("h2");
    var h2_answer=document.createElement("h2");

    div.className='flashcard';
    h2_question.setAttribute('style',"border-top:1px solid red; padding:15px; margin-top:30px;color:white");

    h2_question.innerHTML=text.my_question;

    h2_answer.setAttribute("style","text-align:center;display:none;color:white");
    h2_answer.innerHTML=text.my_answer;

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener('click',function(){
        if(h2_answer.style.display=="none"){
            h2_answer.style.display="block";
        }else{
            h2_answer.style.display="none";
        }
    });

    flashcards.appendChild(div);
}


//when flashcard delete button
close.addEventListener('click', function(){
    createBox.style.display="none";

});



