// Wait for the DOM content to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Get the form and resume display container
    const form = document.getElementById('resume-form');
    const resumeDisplay = document.getElementById('resume-display');

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const education = document.getElementById('education').value;
        const experience = document.getElementById('experience').value;
        const skills = document.getElementById('skills').value;

        // Generate the resume content
        const resumeContent = `
            <div class="resume-header">
                <h2>${name}</h2>
                <p>Email: ${email} | Phone: ${phone}</p>
            </div>
            <div class="resume-section">
                <h3>Education</h3>
                <p>${education}</p>
            </div>
            <div class="resume-section">
                <h3>Experience</h3>
                <p>${experience}</p>
            </div>
            <div class="resume-section">
                <h3>Skills</h3>
                <ul>
                    ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
            </div>
        `;

        // Display the generated resume
        resumeDisplay.innerHTML = resumeContent;
        resumeDisplay.style.display = 'block'; // Make the resume section visible
    });
});
