let volunteerApplications = [];


function handleVolunteerForm(event) {
    event.preventDefault(); 

    const name = document.getElementById('volunteerName').value.trim();
    const email = document.getElementById('volunteerEmail').value.trim();
    const availability = document.querySelector('input[name="volunteerAvailability"]:checked')?.value;

    if (!name || !email || !availability) {
        alert('Please fill in all fields.');
        return;
    }

    const existingVolunteer = volunteerApplications.find(app => app.email === email);
    if (existingVolunteer) {
        alert(`This email is already registered for volunteer applications!\n\nName: ${existingVolunteer.name}\nAvailability: ${existingVolunteer.availability}`);
        return;
    }

    const button = document.querySelector('#volunteerForm .submit-btn'); 
    button.textContent = 'Submitting...';
    button.disabled = true;

    const newVolunteerApplication = {
        name: name,
        email: email,
        availability: availability,
    };

    setTimeout(() => {
        volunteerApplications.push(newVolunteerApplication);
        alert('Thank you for your volunteer application! We will contact you soon.');

        button.textContent = 'Submit Application';
        button.disabled = false;
        document.getElementById('volunteerForm').reset();
    }, 2000);
}

document.getElementById('volunteerForm').addEventListener('submit', handleVolunteerForm);
