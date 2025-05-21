const domElements = {
  contactForm: document.getElementById('contactForm'),
  serviceCards: document.querySelectorAll('.service-card'),
  navbar: document.querySelector('header nav'),
  scrollTopButton: document.getElementById('scrollTop')
};
document.addEventListener('DOMContentLoaded', () => {
  // Configuración EmailJS (REMPLAZA CON TUS DATOS)
  emailjs.init('wDNNgwyGYGJxjWlWU');
  const emailConfig = {
    serviceID: 'service_jss790u',
    templateID: 'template_8e3quit',
    toEmail: 'aaxeloropeza@gmail.com',
    user_id: 'wDNNgwyGYGJxjWlWU' 
  };

  // Elementos del DOM
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    try {
      // Validación básica
      if (!form.checkValidity()) {
        throw new Error('Por favor completa todos los campos');
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="loader"></span> Enviando...';

      // Envío real con EmailJS
     await emailjs.sendForm(
     emailConfig.serviceID,
     emailConfig.templateID,
     form
     );

      showNotification('✅ Mensaje enviado correctamente', 'success');
      form.reset();
      
    } catch (error) {
      showNotification(`❌ Error: ${error.message}`, 'error');
      console.error('EmailJS Error:', error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar Mensaje';
    }
  };

  // Sistema de notificaciones
  const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('show');
    }, 50);

    setTimeout(() => {
      notification.remove();
    }, 5000);
  };

  // Animaciones al hacer scroll
  const handleScrollAnimations = () => {
    domElements.serviceCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - config.animationOffset;

      if (cardTop < triggerPoint) {
        card.classList.add('visible');
      }
    });

    // Mostrar/ocultar botón de scroll
    if (window.scrollY > 500) {
      domElements.scrollTopButton?.classList.add('show');
    } else {
      domElements.scrollTopButton?.classList.remove('show');
    }
  };

  // Scroll suave
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  // Event Listeners
  if (domElements.contactForm) {
    domElements.contactForm.addEventListener('submit', handleFormSubmit);
  }

  window.addEventListener('scroll', () => {
    handleScrollAnimations();
    handleNavbarShadow();
  });

  window.addEventListener('resize', handleScrollAnimations);

  // Inicializaciones
  handleScrollAnimations();
  initSmoothScroll();

  // Efecto de sombra en navbar
  const handleNavbarShadow = () => {
    if (window.scrollY > 50) {
      domElements.navbar?.classList.add('scrolled');
    } else {
      domElements.navbar?.classList.remove('scrolled');
    }
  };

  // Botón de scroll to top
  if (domElements.scrollTopButton) {
    domElements.scrollTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Analytics para clicks en LinkedIn
  document.querySelectorAll('a[href*="linkedin.com"]').forEach(link => {
    link.addEventListener('click', () => {
      console.log('LinkedIn click tracking');
      // Aquí iría tu código de tracking real
    });
  });
});

// Web Components
class LinkedInBadge extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="${config.linkedinProfile}" 
         class="linkedin-badge"
         target="_blank"
         rel="noopener noreferrer">
        <img src="img/linkedin.svg" alt="LinkedIn Profile">
        Ver Perfil
      </a>
    `;
  }
}

customElements.define('linkedin-badge', LinkedInBadge);