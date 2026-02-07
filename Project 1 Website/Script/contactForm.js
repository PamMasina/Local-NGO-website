let contactMessages = [];

function handleContactForm(event) {
    event.preventDefault(); 

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const existingContact = contactMessages.find(msg => msg.email === email);
    if (existingContact) {
        alert(`This email is already registered for messages!\n\nName: ${existingContact.name}\nMessage: ${existingContact.message}`);
        return;
    }

    const button = document.querySelector('#contactForm .submitMess');
    button.textContent = 'Sending...';
    button.disabled = true;

    const newContactMessage = {
        name: name,
        email: email,
        message: message,
    };

   
    setTimeout(() => {
        contactMessages.push(newContactMessage);
        alert('Thank you for your message! We will get back to you soon.');

        button.textContent = 'Send Message';
        button.disabled = false;
        document.getElementById('contactForm').reset();
    }, 2000);
}

document.getElementById('contactForm').addEventListener('submit', handleContactForm);
