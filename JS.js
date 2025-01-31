const button_one = document.getElementById("one");
const button_two = document.getElementById("two");
const button_three = document.getElementById("three");
const button_four = document.getElementById("four");
const button_five = document.getElementById("five");
const button_submit = document.getElementById("submit");
const div_rating = document.getElementsByClassName("container-box")[0];
const div_thankyou = document.getElementsByClassName("thankyou-box")[0];
const selection_text = document.getElementById("selection-text");
const thankyou_head = document.getElementsByClassName("thankyou-head")[0];
const thankyou_text = document.getElementsByClassName("thankyou-text")[0];
const feedback_image = document.getElementsByClassName("thankyou-img")[0];


button_submit.onclick = function(){
     div_rating.style.display="none";
     div_thankyou.style.display="flex";
}

function handleRating(rating) {
    selection_text.innerHTML = `You rate ${rating} out of 5`;
    feedback_image.src = "illustration-thank-you.svg";
    thankyou_head.innerHTML = "Thank you!";
    thankyou_text.innerHTML = "We appreciate you taking the time to give rating. If you ever need more support, don’t hesitate to get in touch!";
}

button_one.onclick = function() { handleRating(1); }
button_two.onclick = function() { handleRating(2); }
button_three.onclick = function() { handleRating(3); }
button_four.onclick = function() { handleRating(4); }
button_five.onclick = function() { handleRating(5); }