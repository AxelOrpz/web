const domElements = {
  contactForm: document.getElementById('contactForm'),
  serviceCards: document.querySelectorAll('.service-card'),
  navbar: document.querySelector('header nav'),
  scrollTopButton: document.getElementById('scrollTop'),
  // Elementos para los paneles deslizantes
  automationRibbonPanel: document.getElementById('automationRibbonPanel'),
  addInRibbonContainer: document.getElementById('addInRibbonContainer'), // Contenedor de la cinta
  serviceExpandedDetail: document.getElementById('serviceExpandedDetail'),
  expandedDetailTitle: document.getElementById('expanded-detail-title'),
  expandedDetailDescription: document.getElementById('expanded-detail-description'),
  expandedDetailFeaturesTitle: document.getElementById('expanded-detail-features-title'),
  expandedDetailFeaturesList: document.getElementById('expanded-detail-features-list'),
  expandedDetailBenefitsTitle: document.getElementById('expanded-detail-benefits-title'),
  expandedDetailBenefitsList: document.getElementById('expanded-detail-benefits-list'),
  expandedDetailConclusion: document.getElementById('expanded-detail-conclusion'),
  expandedDetailImageCollage: document.getElementById('expanded-detail-image-collage'),
  expandedDetailActionsContainer: document.getElementById('expanded-detail-actions-container'),
  closeExpandedDetailButton: document.querySelector('.close-expanded-detail-button'),
  // Nuevo elemento para el reproductor de video
  expandedDetailVideoPlayer: document.getElementById('expanded-detail-video-player')
};

// Configuración global (si es necesario, por ejemplo para animaciones)
const config = {
  animationOffset: 150, // Distancia desde la parte inferior de la ventana para activar la animación
  linkedinProfile: 'https://www.linkedin.com/in/axel-oropeza/' // URL de tu perfil de LinkedIn
};

// Definición de los detalles de cada add-in (sub-servicios de automatización)
const addInDetails = {
  unhideelements: {
    id: 'unhideelements', // Asegúrate de que el ID esté aquí para facilitar la referencia
    title: 'UnhideElements: Tu Add-in Esencial para Revit',
    description: 'Descubre cómo UnhideElements revoluciona la gestión de elementos ocultos en tus proyectos de Revit. Diseñado para arquitectos, ingenieros y diseñadores BIM, este add-in te permite visualizar, seleccionar y desocultar elementos de manera rápida y eficiente, ahorrándote horas de trabajo manual.',
    features: [
      '<strong>Detección Instantánea:</strong> Identifica todos los elementos ocultos en tu vista actual o en todo el modelo.',
      '<strong>Interfaz Intuitiva:</strong> Una lista clara y organizada de elementos ocultos con sus propiedades clave.',
      '<strong>Desocultar Selectivamente:</strong> Elige qué elementos deseas desocultar, ya sea individualmente o en grupos.',
      '<strong>Control Total:</strong> Gestiona la visibilidad de elementos por categoría, fase o tipo.',
      '<strong>Optimización del Flujo de Trabajo:</strong> Elimina la frustración de buscar elementos perdidos y acelera tus revisiones de modelo.'
    ],
    benefits: [
      '<strong>Ahorro de Tiempo:</strong> Reduce drásticamente el tiempo dedicado a la gestión de visibilidad.',
      '<strong>Precisión Mejorada:</strong> Asegura que ningún elemento importante permanezca oculto por error.',
      '<strong>Colaboración Eficiente:</strong> Facilita la revisión y coordinación de modelos con tu equipo.',
      '<strong>Productividad Aumentada:</strong> Permite a los usuarios centrarse en el diseño y la documentación.'
    ],
    conclusion: '¡Prepárate para llevar tu productividad en Revit al siguiente nivel con UnhideElements!',
    actions: [
      { text: 'Descargar en Autodesk App Store', href: 'https://apps.autodesk.com/RVT/en/Detail/Index?id=7882492729173493382&appLang=en&os=Win64&mode=preview&autostart=True&loginRequired=True', class: 'btn-primary', target: '_blank' },
      { text: 'Ver Demostración (YouTube)', href: 'https://www.youtube.com/watch?v=rYMbl6T7S-0&ab_channel=AxelOropeza', class: 'btn-secondary', target: '_blank' },
      { text: 'Contactar para Demo', href: '#contact', class: 'btn-secondary close-expanded-detail-btn' },
      { text: 'Ayuda de la aplicación', href: 'https://www.ejemplo.com/ayuda-unhideelements', class: 'btn-secondary', target: '_blank' } // Enlace de ejemplo para ayuda
    ],
    coverImage: 'img/UnHideElements.png', // Ruta del icono local
    images: [], // Puedes añadir imágenes específicas del add-in aquí si las tienes
    videoUrl: 'https://www.youtube.com/embed/rYMbl6T7S-0', // URL de incrustación de YouTube
    isFree: true // Nuevo: Indica que es gratuito
  },
  otroaddin: {
    id: 'otroaddin',
    title: 'Otro Add-in Próximamente',
    description: 'Estamos desarrollando nuevas herramientas para potenciar tu flujo de trabajo en Revit. ¡Mantente atento a las actualizaciones!',
    features: ['Funcionalidad en desarrollo', 'Integración avanzada'],
    benefits: ['Mayor eficiencia', 'Innovación constante'],
    conclusion: 'Pronto más detalles.',
    actions: [
      { text: 'Contactar para más información', href: '#contact', class: 'btn-primary close-expanded-detail-btn' }
    ],
    coverImage: 'https://placehold.co/150x150/1f7a7a/ffffff?text=Proximamente',
    images: [],
    videoUrl: '', // Sin video para este
    isFree: false
  }
  // Puedes añadir más add-ins aquí siguiendo la misma estructura
};

// Definición de los detalles de cada servicio principal
const serviceDetails = {
  modelado3D: {
    title: 'Modelado 3D Multidisciplinar',
    description: 'En DiFlow, creamos modelos BIM precisos y detallados para todas las disciplinas: arquitectura, estructuras e instalaciones (MEP). Nuestros modelos sirven como base sólida para la colaboración, el análisis y la toma de decisiones en cada fase de tu proyecto.',
    features: [
      'Modelado de arquitectura detallado (Revit, SketchUp, Rhino).',
      'Desarrollo de modelos estructurales robustos.',
      'Integración de sistemas MEP (mecánicos, eléctricos, fontanería).',
      'Creación de familias y objetos BIM personalizados.',
      'Garantía de calidad y cumplimiento de estándares BIM.'
    ],
    benefits: [
      'Reducción de errores y retrabajos en obra.',
      'Mejora la coordinación entre disciplinas.',
      'Visualización clara del proyecto antes de la construcción.',
      'Facilita la extracción de información para presupuestos y planificación.'
    ],
    conclusion: 'Nuestro enfoque en el modelado 3D multidisciplinar asegura que tu proyecto tenga una base digital sólida y coherente, optimizando cada etapa del ciclo de vida del edificio.',
    actions: [
      { text: 'Solicitar Presupuesto', href: '#contact', class: 'btn-primary close-expanded-detail-btn' }
    ],
    images: []
  },
  renderizado: {
    title: 'Renderizado Fotorrealista',
    description: 'Transforma tus diseños arquitectónicos en imágenes y videos impactantes con nuestros servicios de renderizado fotorrealista. Ofrecemos visualizaciones de alta calidad que capturan la esencia de tu proyecto con iluminación realista, materiales detallados y entornos envolventes.',
    features: [
      'Imágenes estáticas de alta resolución.',
      'Animaciones de recorrido virtual (walkthroughs).',
      'Visualizaciones de interiores y exteriores.',
      'Integración de mobiliario y paisajismo.',
      'Postproducción para un acabado profesional.'
    ],
    benefits: [
      'Presentaciones de proyecto más atractivas y convincentes.',
      'Ayuda a los clientes a visualizar el resultado final.',
      'Diferenciación de la competencia con visuales de impacto.',
      'Facilita la toma de decisiones de diseño.'
    ],
    conclusion: 'Con nuestros renders fotorrealistas, tus ideas cobrarán vida, permitiéndote comunicar tu visión de manera efectiva y ganar la aprobación de tus clientes. Explora algunos de nuestros proyectos a continuación:',
    actions: [
      { text: 'Solicitar Presupuesto', href: '#contact', class: 'btn-primary close-expanded-detail-btn' }
    ],
    images: [ // URLs de imágenes de ejemplo para el collage
      'https://placehold.co/400x300/2ea3a3/ffffff?text=Proyecto+1',
      'https://placehold.co/400x300/1f7a7a/ffffff?text=Proyecto+2',
      'https://placehold.co/400x300/2ea3a3/ffffff?text=Proyecto+3',
      'https://placehold.co/400x300/1f7a7a/ffffff?text=Proyecto+4'
    ]
  },
  animaciones4D: {
    title: 'Animaciones 4D',
    description: 'Lleva la planificación de tus proyectos al siguiente nivel con nuestras animaciones 4D. Integramos el modelo BIM con el cronograma de construcción, creando simulaciones visuales que muestran la secuencia de obra a lo largo del tiempo, facilitando la detección de conflictos y la optimización de recursos.',
    features: [
      'Sincronización del modelo BIM con el cronograma (Primavera P6, MS Project).',
      'Visualización de la secuencia de construcción paso a paso.',
      'Detección temprana de conflictos espaciales y temporales.',
      'Análisis de recursos y logística de obra.',
      'Generación de videos para presentaciones y seguimiento.'
    ],
    benefits: [
      'Mejora la comunicación y comprensión del plan de obra.',
      'Identificación proactiva de riesgos y cuellos de botella.',
      'Optimización de la secuencia de tareas y uso de maquinaria.',
      'Reducción de tiempos y costos en la construcción.'
    ],
    conclusion: 'Nuestras animaciones 4D son una herramienta invaluable para la gestión de proyectos, permitiéndote planificar con mayor precisión y ejecutar con mayor eficiencia.',
    actions: [
      { text: 'Solicitar Demostración', href: '#contact', class: 'btn-primary close-expanded-detail-btn' }
    ],
    images: []
  },
  automatizacionRibbon: { // Este es el nuevo ID para el botón que abre la cinta
    title: 'Automatización de Procesos',
    description: 'Explora nuestras herramientas personalizadas para Revit utilizando Dynamo y C# que optimizan tus flujos de trabajo.',
    // No tiene features, benefits, conclusion directos, ya que su propósito es mostrar la cinta
    features: [],
    benefits: [],
    conclusion: '',
    actions: [],
    images: []
  },
  businessIntelligence: {
    title: 'Business Intelligence Avanzado',
    description: 'Transforma tus datos de proyecto en insights accionables con nuestras soluciones de Business Intelligence. Diseñamos dashboards interactivos y reportes personalizados que te permiten monitorear el rendimiento, identificar tendencias y tomar decisiones estratégicas basadas en información precisa.',
    features: [
      'Integración de datos de diversas fuentes (BIM, ERP, Excel).',
      'Diseño de dashboards interactivos con Power BI.',
      'Creación de reportes personalizados y KPIs.',
      'Análisis predictivo y escenarios "what-if".',
      'Capacitación para el uso de herramientas de BI.'
    ],
    benefits: [
      'Visibilidad completa del estado de tus proyectos.',
      'Toma de decisiones más rápida y fundamentada.',
      'Identificación de áreas de mejora y optimización.',
      'Mejora la eficiencia operativa y la rentabilidad.'
    ],
    conclusion: 'Con el Business Intelligence de DiFlow, tus datos se convertirán en tu mayor activo, impulsando el crecimiento y la eficiencia de tu negocio.',
    actions: [
      { text: 'Solicitar Demostración', href: '#contact', class: 'btn-primary close-expanded-detail-btn' }
    ],
    images: []
  }
};


document.addEventListener('DOMContentLoaded', () => {
  // Configuración EmailJS
  emailjs.init('wDNNgwyGYGJxjWlWU');
  const emailConfig = {
    serviceID: 'service_jss790u',
    templateID: 'template_8e3quit',
    toEmail: 'aaxeloropeza@gmail.com',
    user_id: 'wDNNgwyGYGJxjWlWU' 
  };

  // Manejador para el envío del formulario de contacto
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    try {
      if (!form.checkValidity()) {
        throw new Error('Por favor completa todos los campos');
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="loader"></span> Enviando...';

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

    if (window.scrollY > 500) {
      domElements.scrollTopButton?.classList.add('show');
    } else {
      domElements.scrollTopButton?.classList.remove('show');
    }
  };

  // Scroll suave para enlaces internos
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

  // Funciones para mostrar y ocultar paneles deslizantes
  const showPanel = (panelElement) => {
    if (panelElement) {
      panelElement.classList.add('show');
      panelElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const hidePanel = (panelElement) => {
    if (panelElement) {
      panelElement.classList.remove('show');
    }
  };

  // Función para poblar la sección expandida con el contenido del servicio o add-in
  const populateExpandedDetail = (content) => {
    if (!content) {
      console.error('Contenido no proporcionado para poblar el detalle expandido.');
      return;
    }

    domElements.expandedDetailTitle.textContent = content.title;
    domElements.expandedDetailDescription.textContent = content.description;
    domElements.expandedDetailConclusion.textContent = content.conclusion;

    // Limpiar listas y acciones previas
    domElements.expandedDetailFeaturesList.innerHTML = '';
    domElements.expandedDetailBenefitsList.innerHTML = '';
    domElements.expandedDetailActionsContainer.innerHTML = '';
    domElements.expandedDetailImageCollage.innerHTML = ''; // Limpiar collage previo
    domElements.expandedDetailVideoPlayer.innerHTML = ''; // Limpiar reproductor de video previo

    // Llenar video si existe
    if (content.videoUrl) {
      domElements.expandedDetailVideoPlayer.style.display = 'block';
      const iframe = document.createElement('iframe');
      iframe.src = content.videoUrl;
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      domElements.expandedDetailVideoPlayer.appendChild(iframe);
    } else {
      domElements.expandedDetailVideoPlayer.style.display = 'none';
    }


    // Llenar características
    if (content.features && content.features.length > 0) {
      domElements.expandedDetailFeaturesTitle.style.display = 'block';
      content.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = feature; // Usar innerHTML para permitir negritas
        domElements.expandedDetailFeaturesList.appendChild(li);
      });
    } else {
      domElements.expandedDetailFeaturesTitle.style.display = 'none';
    }

    // Llenar beneficios
    if (content.benefits && content.benefits.length > 0) {
      domElements.expandedDetailBenefitsTitle.style.display = 'block';
      content.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.innerHTML = benefit; // Usar innerHTML para permitir negritas
        domElements.expandedDetailBenefitsList.appendChild(li);
      });
    } else {
      domElements.expandedDetailBenefitsTitle.style.display = 'none';
    }

    // Llenar collage de imágenes
    if (content.images && content.images.length > 0) {
      domElements.expandedDetailImageCollage.style.display = 'grid'; // Mostrar el contenedor del collage
      content.images.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Imagen de proyecto de ${content.title}`;
        img.classList.add('collage-image');
        domElements.expandedDetailImageCollage.appendChild(img);
      });
    } else {
      domElements.expandedDetailImageCollage.style.display = 'none'; // Ocultar si no hay imágenes
    }

    // Crear botones de acción
    if (content.actions && content.actions.length > 0) {
      content.actions.forEach(action => {
        const a = document.createElement('a');
        a.href = action.href;
        a.textContent = action.text;
        a.className = `btn ${action.class}`;
        if (action.target) a.target = action.target;

        // Añadir listener para cerrar la sección expandida si el botón tiene la clase 'close-expanded-detail-btn'
        if (action.class.includes('close-expanded-detail-btn')) {
          a.addEventListener('click', (e) => {
            // Prevenir el desplazamiento si el href es un ancla interna
            if (a.getAttribute('href').startsWith('#')) {
              e.preventDefault();
              const targetId = a.getAttribute('href').substring(1);
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
            hidePanel(domElements.serviceExpandedDetail);
            // Si cerramos el detalle de un add-in, asegurarnos de que la cinta siga visible
            // Aquí se asume que si el botón de cierre está en el detalle, es porque venimos de la cinta
            // y queremos volver a ella. Si no, se puede ajustar esta lógica.
            if (content.id && addInDetails[content.id]) { // Verifica si el contenido es un add-in
                showPanel(domElements.automationRibbonPanel);
            }
          });
        }
        domElements.expandedDetailActionsContainer.appendChild(a);
      });
    }
  };

  // Función para renderizar la cinta de add-ins de automatización
  const renderAutomationAddInRibbon = () => {
    if (domElements.addInRibbonContainer) {
      domElements.addInRibbonContainer.innerHTML = ''; // Limpiar contenido previo

      Object.values(addInDetails).forEach(addIn => { // Iterar sobre los valores de addInDetails
        const addInCover = document.createElement('div');
        addInCover.classList.add('add-in-cover');
        addInCover.dataset.addInId = addIn.id; // Guardar el ID del add-in

        const img = document.createElement('img');
        img.src = addIn.coverImage;
        img.alt = addIn.title;
        addInCover.appendChild(img);

        const h4 = document.createElement('h4');
        h4.textContent = addIn.title;
        addInCover.appendChild(h4);

        // Añadir etiqueta "GRATIS" si es gratuito
        if (addIn.isFree) {
          const freeLabel = document.createElement('span');
          freeLabel.classList.add('free-label');
          freeLabel.textContent = 'Free';
          addInCover.appendChild(freeLabel);
        }

        addInCover.addEventListener('click', () => {
          populateExpandedDetail(addIn); // Pasar el objeto add-in completo
          hidePanel(domElements.automationRibbonPanel); // Ocultar la cinta
          showPanel(domElements.serviceExpandedDetail); // Mostrar el detalle del add-in
        });

        domElements.addInRibbonContainer.appendChild(addInCover);
      });
    }
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

  // Listener para abrir los paneles
  document.querySelectorAll('.service-card .btn-link').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceId = e.target.dataset.serviceId;
      
      // Ocultar cualquier panel expandido previamente
      hidePanel(domElements.serviceExpandedDetail);
      hidePanel(domElements.automationRibbonPanel);

      if (serviceId === 'automatizacion-ribbon') {
        // Si es el botón de automatización, mostrar la cinta de add-ins
        showPanel(domElements.automationRibbonPanel);
      } else {
        // Para los demás servicios, poblar y mostrar la sección expandida directamente
        const content = serviceDetails[serviceId];
        if (content) {
          populateExpandedDetail(content);
          showPanel(domElements.serviceExpandedDetail);
        }
      }
    });
  });

  // Listener para cerrar la sección expandida
  if (domElements.closeExpandedDetailButton) {
    domElements.closeExpandedDetailButton.addEventListener('click', () => {
      hidePanel(domElements.serviceExpandedDetail);
      // Si la cinta de automatización estaba visible antes de abrir el detalle de un add-in, la mostramos de nuevo
      // Esto requiere un seguimiento de qué panel estaba activo, o simplemente la mostramos si el detalle cerrado era un add-in.
      // Por simplicidad, si cierras el detalle, la cinta no reaparece automáticamente a menos que vuelvas a hacer clic en "Ver casos de éxito"
    });
  }

  // Inicializaciones
  handleScrollAnimations();
  initSmoothScroll();
  renderAutomationAddInRibbon(); // Renderizar la cinta de add-ins al cargar la página (estará oculta por CSS)

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

// Web Components (si los tienes definidos en app.js)
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
