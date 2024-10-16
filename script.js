document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const changingTextElement = document.querySelector('.changing-text');
    const loginButton = document.getElementById('login-button');
    const adminPanel = document.getElementById('admin-panel');
    const commandForm = document.getElementById('new-command-form');
    const loadingScreen = document.querySelector('.loading-screen');
    const content = document.getElementById('content');
    
    // Show content and hide loading screen
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // 2 seconds loading time

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('active');
        });
    });

    // Text that changes at the top of the page
    const textArray = [
        "Become A Hero",
        "Become a Boss Slayer",
        "Conquer the Minecraft  Bosses",
        "Experience Epic Boss    Battles"
    ];
    let currentIndex = 0;

    function typeText(text, index = 0) {
        if (index < text.length) {
            setTimeout(() => {
                const span = document.createElement('span');
                if (text[index] === ' ') {
                    span.innerHTML = '&nbsp;';
                } else {
                    span.textContent = text[index];
                }
                changingTextElement.appendChild(span);
                setTimeout(() => {
                    span.style.opacity = '1';
                    span.style.transform = 'translateY(0)';
                }, 50);
                typeText(text, index + 1);
            }, 100);
        } else {
            setTimeout(changeText, 3000); // Wait for 3 seconds before changing text
        }
    }

    function changeText() {
        changingTextElement.innerHTML = ''; // Clear previous text
        currentIndex = (currentIndex + 1) % textArray.length;
        typeText(textArray[currentIndex]);
    }

    typeText(textArray[0]); // Start the animation with the first text

    // Admin Login (accepts any password)
    loginButton.addEventListener('click', function() {
        const password = prompt("Enter Admin Password:");
        
        if (password) {
            adminPanel.style.display = "block";
            loginButton.style.display = "none";
        }
    });

    // Show trick message when form is submitted
    commandForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        alert("You got tricked lol");

        if (confirm("Would you like to add our fun discord bot to your server?")) {
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
            
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
    });
});