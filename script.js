document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.querySelector('.navbar');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                if (entry.target.querySelector('.stat-number')) {
                    animateCounter(entry.target.querySelector('.stat-number'));
                }
            }
        });
    }, observerOptions);
    
    const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-slide-left, .scroll-slide-right, .scroll-scale');
    scrollElements.forEach(el => observer.observe(el));
    
    function animateCounter(element) {
        if (element.classList.contains('counted')) return;
        
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
                element.classList.add('counted');
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    const parallaxElements = document.querySelectorAll('.parallax-bg, .floating-element, .visual-box');
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                
                parallaxElements.forEach((el, index) => {
                    const rect = el.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                    
                    if (isVisible) {
                        const speed = 0.3 + (index * 0.05);
                        const yPos = -(scrolled * speed);
                        const rotation = (scrolled * 0.02) % 360;
                        
                        if (el.classList.contains('parallax-bg')) {
                            el.style.transform = `translateY(${yPos}px)`;
                        } else if (el.classList.contains('floating-element')) {
                            el.style.transform = `translateY(${yPos * 0.1}px) rotate(${rotation * 0.5}deg)`;
                        } else if (el.classList.contains('visual-box')) {
                            const distanceFromCenter = rect.top - (window.innerHeight / 2);
                            const rotation = distanceFromCenter * 0.02;
                            el.style.transform = `translateY(${yPos * 0.05}px) rotate(${rotation}deg) scale(1.05)`;
                        }
                    }
                });
                
                ticking = false;
            });
            
            ticking = true;
        }
    }, { passive: true });
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            formMessage.className = 'form-message success';
            formMessage.textContent = `Thank you, ${formData.name}! Your message has been received. We'll get back to you soon.`;
            
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const spans = navToggle.querySelectorAll('span');
                    spans[0].style.transform = '';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = '';
                }
            }
        });
    });
    
    const cards = document.querySelectorAll('.feature-card, .service-card, .program-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => observer.observe(stat.parentElement));
    
    console.log('EDIGHT (PTY) website loaded successfully! 🚀');
});
