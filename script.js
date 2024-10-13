document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const changingTextElement = document.querySelector('.changing-text span');
    const loginButton = document.getElementById('login-button');
    const adminPanel = document.getElementById('admin-panel');
    const commandForm = document.getElementById('new-command-form');
    const loadingSpinner = document.createElement('div'); // Create a loading spinner element
    
    // Loading spinner styles
    loadingSpinner.classList.add('loading'); // Add loading class
    loadingSpinner.innerHTML = '<div class="loading-spinner"></div>'; // Create spinner element
    document.body.appendChild(loadingSpinner); // Append to the body
    loadingSpinner.style.display = 'none'; // Initially hide the spinner
    
    // Text that changes at the top of the page
    const textArray = [
        "Join the Boss Fighting Community!",
        "Become a Boss Slayer!",
        "Conquer the Minecraft Bosses!",
        "Experience Epic Boss Battles!"
    ];
    let currentIndex = 0;

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('active');
        });
    });

    function changeText() {
        changingTextElement.style.opacity = '0';
        changingTextElement.style.transform = 'translateY(1rem)';
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % textArray.length;
            changingTextElement.textContent = textArray[currentIndex];
            changingTextElement.style.opacity = '1';
            changingTextElement.style.transform = 'translateY(0)';
        }, 500);
    }

    changeText();
    setInterval(changeText, 5000);

    // Admin Login (accepts any password)
    loginButton.addEventListener('click', function() {
        const password = prompt("Enter Admin Password:");
        
        // Always "accept" the password and log them in
        if (password) {
            loadingSpinner.style.display = 'flex'; // Show the loading spinner
            
            // Simulate loading time (you can adjust this duration)
            setTimeout(() => {
                adminPanel.style.display = "block";
                loadingSpinner.style.display = 'none'; // Hide the loading spinner
                loginButton.style.display = "none";
            }, 1000); // 1 second loading time
        }
    });

    // Show trick message when form is submitted
    commandForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show alert trick message
        alert("You got tricked lol");

        // Ask if they want to add the bot to their server
        if (confirm("Would you like to add our fun discord bot to your server?")) {
            // Redirect to Discord authorization link
            window.location.href = "https://discord.com/oauth2/authorize?client_id=1288503796321751080&scope=bot%20applications.commands&permissions=110016";
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            // Close sidebar if it's open
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
    });
});
