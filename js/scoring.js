function calculateScore(answer, keywords){

let score = 0;

if(answer.split(" ").length > 15){
score += 40;
}

keywords.forEach(word=>{

if(answer.toLowerCase().includes(word)){
score += 15;
}

});

if(score > 100){
score = 100;
}

return score;
}