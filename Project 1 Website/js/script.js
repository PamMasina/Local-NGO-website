//Array to store all the data that will be enterd in the form
var submissions = [];

//Contact form validation with array processing
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    //Email pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields correctly!");
    } else if (!emailPattern.test(email)) {

        alert("Please enter a valid email!");
    } else if (message.length < 20) {

        alert("Your message must be at least 20+ characters long!");
    } else {
        // storing the submission int the array
        var submission ={
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toLocaleString()
    };
    submissions.push(submission);

    alert("Thank you! Your message was succesfully sent!");
    document.getElementById('contactForm').reset();

    displaySubmissions();
}
});

//This is the function to display all submissions
function displaySubmissions() {
    var submissionsSection = document.getElementById('submissionsDisplay');
    submissionsSection.innerHTML = "";

    submissions.forEach(function(submission, index){
        var submissionDiv = document.createElement('div');
        submissionDiv.classList.add('submission-entry');

        submissionDiv.innerHTML = 
        ` <h3>Submission ${index + 1}</h3>
        <p><strong>Name: </strong> ${submission.name}</p>
        <p><strong>Email: </strong> ${submission.email}</p>
        <p><strong>Message: </strong> ${submission.message}</p>
        <p><strong>Time: </strong> ${submission.timestamp}</p> 

       ` ;

        submissionsSection.appendChild(submissionDiv);
    });
}