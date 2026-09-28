
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");
    const submitButton = contactForm?.querySelector("button[type='submit']");

    if (!contactForm) {
        console.error("Contact form not found.");
        return;
    }

    console.log("Contact form loaded successfully.");

    contactForm.addEventListener("submit", async function (event) {

        // Stop the normal page submission
        event.preventDefault();

        // Get the message area
        let formMessage = document.getElementById("formMessage");

        // Create the message area if it doesn't already exist
        if (!formMessage) {
            formMessage = document.createElement("div");
            formMessage.id = "formMessage";
            contactForm.appendChild(formMessage);
        }

        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = `
            <span class="spinner"></span>
            Sending...
        `;

        formMessage.style.display = "none";
        formMessage.className = "";

        // Get form data
        const formData = new FormData(contactForm);

        // Display values in console
        console.log("========== CONTACT FORM ==========");
        console.log("Name:", formData.get("name"));
        console.log("Email:", formData.get("email"));
        console.log("Phone:", formData.get("phone"));
        console.log("Subject:", formData.get("subject"));
        console.log("Message:", formData.get("message"));
        console.log("==================================");

        try {

            // Send form to Formspree
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                // Successful submission
                console.log("Form submitted successfully!");

                formMessage.innerHTML = `
                    <strong>✓ Message Sent Successfully!</strong>
                    <br>
                    Thank you for contacting St. Paul's Seminary, Ukpor.
                    We will get back to you as soon as possible.
                `;

                formMessage.className = "success-message";
                formMessage.style.display = "block";

                // Clear form
                contactForm.reset();

            } else {

                // Formspree returned an error
                console.error("Form submission failed.");

                formMessage.innerHTML = `
                    <strong>✕ Message could not be sent.</strong>
                    <br>
                    Please try again later.
                `;

                formMessage.className = "error-message";
                formMessage.style.display = "block";
            }

        } catch (error) {

            // Network/server error
            console.error("Error:", error);

            formMessage.innerHTML = `
                <strong>✕ Something went wrong.</strong>
                <br>
                Please check your internet connection and try again.
            `;

            formMessage.className = "error-message";
            formMessage.style.display = "block";

        } finally {

            // Restore button
            submitButton.disabled = false;

            submitButton.innerHTML = "Send Message";
        }

    });

});
