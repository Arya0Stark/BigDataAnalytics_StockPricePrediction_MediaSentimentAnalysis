document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

/* styles.css */


document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the active class on sections
    function toggleSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.toggle('active');
        }
    }

    // Attach click event listeners to each navbar item
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target section ID from the href attribute
            const targetSectionId = this.getAttribute('href').substring(1);

            // Toggle the active class for the clicked section
            toggleSection(targetSectionId);
        });
    });
});

// Add your JavaScript functions here

/* Add your scripts here */

function openPopup(company) {
    document.getElementById(`${company}Popup`).style.display = 'block';
}

function closePopup(company) {
    document.getElementById(`${company}Popup`).style.display = 'none';
}

