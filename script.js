document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const changingTextElement = document.querySelector('.changing-text span');
    
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

    // Close menu when clicking a link
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

    // Initial text change
    changeText();
    // Set interval for text change
    setInterval(changeText, 5000);

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