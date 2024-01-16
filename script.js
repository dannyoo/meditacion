
// create functions for validating number in form input for donation amount
function validateForm() {
    var x = document.forms["donateForm"]["amount"].value;
    if (x === "" || isNaN(x) || Number(x) <= 0) {
        alert("Please enter a valid donation amount");
        return false;
    }
}

// create event listener for form submit button on the donation form
donationform = document.getElementById("donate");
donationform.addEventListener('submit', validateForm, false);

// set the goal and the current amount raised
var goal = 1000000;
var currentAmount = 553894;
var percentFunded = Math.round((currentAmount / goal) * 100);
// display amounts
document.getElementById('goal-amount').textContent = numberWithCommas(goal);
document.getElementById('current-amount').textContent = numberWithCommas(currentAmount);

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// changes the progress bar width based on the percent funded
document.getElementById('percent-funded-2').textContent = percentFunded;
var progressBar = document.querySelector('.div-progress-bar.active');
progressBar.style.width = percentFunded + '%';



// accordion interaction
document.querySelectorAll('.faq1_accordion').forEach(function (accordion) {
    accordion.querySelector('.faq1_question').addEventListener('click', function () {
        var answer = accordion.querySelector('.faq1_answer');
        if (answer.style.height === '0px' || answer.style.height === '') {
            // If the answer is hidden, show it
            answer.style.height = 'auto';
        } else {
            // If the answer is shown, hide it
            answer.style.height = '0px';
        }
    });
});


// 
// notification Feature
// 
//  get notification message and display it

// var note = document.getElementById("note");
// note.innerHTML = "Thank you for your donation!";

// close notification message
close = document.getElementById("close");
close.addEventListener('click', function () {
    note = document.getElementById("note");
    note.style.display = 'none';
}, false);