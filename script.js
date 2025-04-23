document.addEventListener('DOMContentLoaded', function() {
    // Slide Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const slideMenu = document.getElementById('slideMenu');
    const closeMenu = document.getElementById('closeMenu');
    
    menuToggle.addEventListener('click', function() {
        slideMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenu.addEventListener('click', function() {
        slideMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        if (!slideMenu.contains(event.target)) {
            slideMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Fechar menu ao clicar em um link
    const menuLinks = slideMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            slideMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Categoria buttons
    const categoryButtons = document.querySelectorAll('.category-buttons button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // Aqui você pode adicionar a lógica para filtrar as notícias por categoria
        });
    });
    
    // Efeito de hover nas notícias
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.read-more').style.backgroundColor = '#7b1fa2';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.read-more').style.backgroundColor = '#4a148c';
        });
    });
    
    // Smooth scroll para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});