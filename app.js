document.addEventListener('DOMContentLoaded', () => {
    // Heatmap Simulation
    const heroMap = document.getElementById('heroMapAnim');
    const numDots = 40;

    for (let i = 0; i < numDots; i++) {
        createDot(heroMap);
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 15, 24, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(10, 15, 24, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Sector Interactivity
    const sectors = document.querySelectorAll('.sector');
    sectors.forEach(sector => {
        sector.addEventListener('mouseover', () => {
            sectors.forEach(s => s.classList.remove('active'));
            sector.classList.add('active');
        });
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // Voice Toggle
    const voiceToggleBtn = document.getElementById('voiceToggleBtn');
    if (voiceToggleBtn) {
        let voiceEnabled = false;
        voiceToggleBtn.addEventListener('click', () => {
            voiceEnabled = !voiceEnabled;
            voiceToggleBtn.textContent = voiceEnabled ? 'Enabled' : 'Disabled';
            if(voiceEnabled) {
                voiceToggleBtn.classList.remove('btn-secondary');
                voiceToggleBtn.classList.add('btn-primary');
            } else {
                voiceToggleBtn.classList.add('btn-secondary');
                voiceToggleBtn.classList.remove('btn-primary');
            }
        });
    }

    // Photo Booth
    const photoBoothBtn = document.getElementById('photoBoothBtn');
    if (photoBoothBtn) {
        let pbActive = false;
        const idleState = document.getElementById('photoBoothIdle');
        const activeState = document.getElementById('photoBoothActive');
        photoBoothBtn.addEventListener('click', () => {
            pbActive = !pbActive;
            if(pbActive) {
                idleState.style.display = 'none';
                activeState.style.display = 'block';
            } else {
                idleState.style.display = 'block';
                activeState.style.display = 'none';
            }
        });
    }
});

function createDot(container) {
    const dot = document.createElement('div');
    dot.style.position = 'absolute';
    dot.style.width = '6px';
    dot.style.height = '6px';
    dot.style.borderRadius = '50%';
    dot.style.background = getRandomColor();
    dot.style.boxShadow = `0 0 10px ${dot.style.background}`;
    
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    
    dot.style.left = `${startX}%`;
    dot.style.top = `${startY}%`;
    
    container.appendChild(dot);
    animateDot(dot);
}

function getRandomColor() {
    const colors = ['#00e5ff', '#00e676', '#ffb300', '#ff1744', '#7000ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function animateDot(dot) {
    const newX = Math.max(0, Math.min(100, parseFloat(dot.style.left) + (Math.random() - 0.5) * 20));
    const newY = Math.max(0, Math.min(100, parseFloat(dot.style.top) + (Math.random() - 0.5) * 20));
    
    dot.style.transition = 'all 2s ease-in-out';
    dot.style.left = `${newX}%`;
    dot.style.top = `${newY}%`;
    
    setTimeout(() => animateDot(dot), 2000 + Math.random() * 1000);
}
