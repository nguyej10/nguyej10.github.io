document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;

    // Basic email validation
    if (email === "") {
        alert("Email is required.");
        return;
    }

    // Send email using mailto
    window.location.href = `mailto:your-email@example.com?subject=New Signup&body=Email: ${email}`;

    // Clear the form
    document.getElementById('signup-form').reset();
});
