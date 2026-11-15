// Greeting and Time Management
function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const greetingElement = document.getElementById('greetingTitle');
    
    if (!greetingElement) return;
    
    let greeting = '';
    let weatherImage = '';
    
    // Determine greeting and weather based on time
    if (hours >= 5 && hours < 12) {
        greeting = 'Selamat Pagi';
        weatherImage = 'assets/home/weather/pagi.webp';
    } else if (hours >= 12 && hours < 15) {
        greeting = 'Selamat Siang';
        weatherImage = 'assets/home/weather/siang.webp';
    } else if (hours >= 15 && hours < 18) {
        greeting = 'Selamat Sore';
        weatherImage = 'assets/home/weather/sore.webp';
    } else {
        greeting = 'Selamat Malam';
        weatherImage = 'assets/home/weather/malam.webp';
    }
    
    greetingElement.textContent = greeting;
    
    // Update weather icon
    const weatherIcon = document.getElementById('weatherImage');
    if (weatherIcon) {
        weatherIcon.src = weatherImage;
    }
}

// Update Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeDisplay = document.getElementById('timeDisplay');
    if (timeDisplay) {
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// Menu Image Changer with placeholder paths
const menuImages = {
    naci: 'assets/produk/menu/naci.webp',
    holengan: 'assets/produk/menu/holengan.webp',
    mwie: 'assets/produk/menu/mwie.webp',
    copiee: 'assets/produk/menu/copiee.webp',
    ess_gell: 'assets/produk/menu/ess-gell.webp',
    copicop: 'assets/produk/menu/copicop.webp',
    cate_catean: 'assets/produk/menu/cate-catean.webp',
    bakalan_ayam: 'assets/produk/menu/bakalan-ayam.webp',
    ceapudd: 'assets/produk/menu/ceapudd.webp',
};

function changeMenuImage(menuName) {
    const displayImage = document.getElementById('menuDisplayImage');
    if (!displayImage) return;
    
    // Remove active class from all menu cards
    document.querySelectorAll('.menu-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Add active class to clicked card
    const clickedCard = document.querySelector(`[data-menu="${menuName}"]`);
    if (clickedCard) {
        clickedCard.classList.add('active');
    }
    
    // Add transition effect
    displayImage.classList.add('changing');
    
    setTimeout(() => {
        if (menuImages[menuName]) {
            displayImage.src = menuImages[menuName];
        }
        displayImage.classList.remove('changing');
    }, 250);
}

// Gallery Image Modal (Fitur Tambahan)
function openImageModal(polaroidElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (!modal || !modalImg || !modalCaption) return;
    
    const img = polaroidElement.querySelector('.polaroid-img');
    const caption = polaroidElement.querySelector('.polaroid-text');
    
    modal.classList.add('active');
    modalImg.src = img.src;
    modalCaption.textContent = caption.textContent;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});

// Contact Form Handler with Better Validation
function submitContactForm() {
    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const message = document.getElementById('contactMessage');
    
    if (!name || !email || !message) return;
    
    // Trim whitespace
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    
    // Validation
    if (nameValue === '') {
        alert('Mohon isi nama Anda!');
        name.focus();
        return;
    }
    
    if (emailValue === '') {
        alert('Mohon isi email Anda!');
        email.focus();
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        alert('Mohon masukkan email yang valid!');
        email.focus();
        return;
    }
    
    if (messageValue === '') {
        alert('Mohon isi pesan Anda!');
        message.focus();
        return;
    }
    
    // Success message
    alert(`Terima kasih ${nameValue}! 🎉\n\nPesan Anda telah terkirim.\nKami akan segera menghubungi Anda melalui email.`);
    
    // Clear form with animation
    name.value = '';
    email.value = '';
    message.value = '';
    
    // Add success animation to button
    const submitBtn = document.querySelector('.btn-submit-custom');
    if (submitBtn) {
        submitBtn.style.background = '#2ecc71';
        submitBtn.innerHTML = '<span class="material-symbols-outlined btn-icon">check_circle</span> Terkirim!';
        
        setTimeout(() => {
            submitBtn.style.background = '#4a6b5a';
            submitBtn.innerHTML = '<span class="material-symbols-outlined btn-icon">send</span> Kirim Pesan';
        }, 2000);
    }
}

// Smooth Page Transition (Fitur Tambahan)
function smoothPageTransition() {
    document.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
}

// Page Load Animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Update greeting and clock on index page
    if (document.getElementById('timeDisplay')) {
        updateGreeting();
        updateClock();
        setInterval(updateClock, 1000);
        setInterval(updateGreeting, 60000);
    }
    
    // Smooth page transitions
    smoothPageTransition();
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                
                if (entry.target.classList.contains('fade-in')) {
                    entry.target.style.transform = 'scale(1)';
                } else if (entry.target.classList.contains('slide-in-right')) {
                    entry.target.style.transform = 'translateX(0)';
                } else if (entry.target.classList.contains('slide-in-left')) {
                    entry.target.style.transform = 'translateX(0)';
                } else if (entry.target.classList.contains('zoom-in')) {
                    const rotation = entry.target.style.transform.match(/rotate\([^)]+\)/);
                    if (rotation) {
                        entry.target.style.transform = `scale(1) ${rotation[0]}`;
                    } else {
                        entry.target.style.transform = 'scale(1)';
                    }
                }
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-right, .slide-in-left, .zoom-in, .chalkboard-container, .greeting-section, .store-mockup-container, .about-left-panel, .about-right-panel, .vision-mission-panel, .about-right-panel-bottom, .store-section, .contact-form-panel').forEach(el => {
        observer.observe(el);
    });
    
    // Menu card click handler for mobile
    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('click', function() {
            // Add ripple effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Parallax effect for hero section (subtle)
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        let ticking = false;
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const scrolled = window.pageYOffset;
                    if (scrolled < window.innerHeight) {
                        heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    // Add entrance animations with stagger effect
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-right, .slide-in-left, .zoom-in');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});