/* ====================================
   JavaScript untuk Portofolio Aziz Budiman (Smooth Scroll & Lightbox)
   ==================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. SMOOTH SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adjust for fixed header 
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 20; 

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 2. LIGHTBOX FUNCTIONALITY
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('lightbox-caption');
    const triggers = document.querySelectorAll('.lightbox-trigger');
    const closeModal = document.querySelector('.lightbox-close');

    // Buka Modal
    triggers.forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const imgSrc = this.getAttribute('href');
            const imgAlt = this.querySelector('img').getAttribute('alt'); 
            
            modal.style.display = "block";
            modalImg.src = imgSrc; 
            captionText.innerHTML = imgAlt; 
        });
    });

    // Tutup Modal ketika tombol (x) diklik
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Tutup Modal ketika area luar modal diklik
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // 3. FUNGSI FORMULIR KONTAK (Simulasi)
    const form = document.getElementById('contactForm');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            status.textContent = '✅ Terima kasih, pesan Anda berhasil terkirim! Saya akan segera merespon.';
            status.style.color = 'green';
            form.reset(); 
            
            setTimeout(() => {
                status.textContent = '';
            }, 5000);
        });
    }
    
    console.log("Portofolio Aziz Budiman berhasil dimuat.");
});