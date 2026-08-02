/**
 * Language Selector for DemoV3 - Mujer Bonita GT
 * ES/EN toggle. Injects the language button next to the theme toggle.
 * Translations via [data-i18n] attributes. Persists in localStorage.
 */
(function () {
  const STORAGE_KEY = 'mb_lang';

  const FLAGS = {
    es: '<svg viewBox="0 0 24 16" width="20" height="14" aria-hidden="true"><rect width="24" height="16" fill="#aa151b"/><rect y="4" width="24" height="8" fill="#f1bf00"/></svg>',
    en: '<svg viewBox="0 0 24 16" width="20" height="14" aria-hidden="true"><rect width="24" height="16" fill="#b22234"/><rect y="0" width="24" height="1.33" fill="#fff"/><rect y="2.67" width="24" height="1.33" fill="#fff"/><rect y="5.33" width="24" height="1.33" fill="#fff"/><rect y="8" width="24" height="1.33" fill="#fff"/><rect y="10.67" width="24" height="1.33" fill="#fff"/><rect y="13.33" width="24" height="1.33" fill="#fff"/><rect width="9.6" height="8" fill="#3c3b6e"/></svg>'
  };

  const TRANSLATIONS = {
    es: {
      nav_home: 'Inicio',
      nav_catalog: 'Catálogo',
      nav_how: 'Cómo Funciona',
      nav_admin: 'Admin',
      nav_theme: 'Cambiar tema',
      nav_fav: 'Mis Favoritos',
      nav_login: 'Iniciar Sesión',
      nav_theme_icon: '◈',
      hero_title_1: 'El vestido perfecto',
      hero_title_2: 'para tu momento especial',
      hero_lead: 'Renta de vestidos para Fiesta, Novia, Damas y 15 Años.',
      hero_lead_sub: 'Elegancia y estilo a precios accesibles. ¡Agenda tu prueba hoy!',
      hero_location: 'C.C. Paseo San Isidro, Local 19, Zona 16, Guatemala',
      hero_cta_catalog: 'Explorar Catálogo',
      hero_cta_how: '¿Cómo funciona?',
      featured_title: 'Vestidos Más Rentados',
      featured_sub: 'Las piezas favoritas de nuestras clientas',
      how_title: '¿Cómo Funciona?',
      how_sub: 'Rentar tu vestido ideal es más fácil de lo que imaginas',
      step1_title: 'Explora el Catálogo',
      step1_text: 'Navega por nuestra colección de vestidos. Filtra por categoría, color, talla y precio para encontrar tu estilo.',
      step2_title: 'Agenda una Cita',
      step2_text: 'Selecciona el vestido que te encantó y agenda una cita para probártelo en nuestra boutique. ¡Sin costo!',
      step3_title: 'Usa el Vestido',
      step3_text: 'Recoge tu vestido listo para usar. Incluye ajustes básicos gratuitos y accesorios complementarios.',
      step4_title: 'Devuélvelo',
      step4_text: 'Después de tu evento, devuelve el vestido en cualquiera de nuestras sucursales. ¡Así de sencillo!',
      cats_title: 'Nuestras Categorías',
      cats_sub: 'Tenemos el vestido perfecto para cada celebración',
      cat_wedding: 'Boda',
      cat_wedding_sub: 'Vestidos de novia',
      cat_quince: '15 Años',
      cat_quince_sub: 'Vestidos de quinceañera',
      cat_graduation: 'Graduación',
      cat_graduation_sub: 'Vestidos de graduación',
      cat_cocktail: 'Cóctel',
      cat_cocktail_sub: 'Vestidos de evento',
      footer_explore: 'Explorar',
      footer_catalog: 'Catálogo',
      footer_how: 'Cómo Funciona',
      footer_bridal: 'Vestidos de Novia',
      footer_quince: 'Vestidos de 15 Años',
      footer_help: 'Ayuda',
      footer_faq: 'Preguntas Frecuentes',
      footer_policy: 'Política de Alquiler',
      footer_terms: 'Términos y Condiciones',
      footer_privacy: 'Aviso de Privacidad',
      footer_contact: 'Contacto',
      footer_desc: 'Renta de vestidos para Fiesta, Novia, Damas y 15 Años. Elegancia y estilo en C.C. Paseo San Isidro, Zona 16, Guatemala.',
      footer_rights: '© 2026 Mujer Bonita GT - Guatemala. Todos los derechos reservados.',
      footer_devgt: 'Desarrollado por',
      wa_float: 'Escríbenos por WhatsApp',
      login_title: 'Iniciar Sesión',
      login_email: 'Correo electrónico',
      login_password: 'Contraseña',
      login_submit: 'Iniciar Sesión',
      login_no_account: '¿No tienes cuenta?',
      login_register: 'Regístrate aquí',
      cat_page_title: 'Catálogo de Vestidos',
      cat_page_sub: 'Encuentra el vestido perfecto para tu evento especial',
      cat_filters: 'Filtros',
      cat_clear: 'Limpiar todo ×',
      size_guide_title: 'Guía de Tallas',
      size_size: 'Talla',
      size_bust: 'Busto (cm)',
      size_waist: 'Cintura (cm)',
      size_hip: 'Cadera (cm)',
    },
    en: {
      nav_home: 'Home',
      nav_catalog: 'Catalog',
      nav_how: 'How It Works',
      nav_admin: 'Admin',
      nav_theme: 'Change theme',
      nav_fav: 'My Favorites',
      nav_login: 'Log In',
      nav_theme_icon: '◈',
      hero_title_1: 'The perfect dress',
      hero_title_2: 'for your special moment',
      hero_lead: 'Dress rentals for Parties, Brides, Bridesmaids and Quinceañeras.',
      hero_lead_sub: 'Elegance and style at affordable prices. Book your fitting today!',
      hero_location: 'C.C. Paseo San Isidro, Local 19, Zona 16, Guatemala',
      hero_cta_catalog: 'Explore Catalog',
      hero_cta_how: 'How it works?',
      featured_title: 'Most Rented Dresses',
      featured_sub: 'Our clients\u2019 favorite pieces',
      how_title: 'How It Works?',
      how_sub: 'Renting your ideal dress is easier than you think',
      step1_title: 'Explore the Catalog',
      step1_text: 'Browse our dress collection. Filter by category, color, size and price to find your style.',
      step2_title: 'Book an Appointment',
      step2_text: 'Pick the dress you loved and book an appointment to try it on at our boutique. Free!',
      step3_title: 'Wear the Dress',
      step3_text: 'Pick up your dress ready to wear. Includes basic alterations and complementary accessories.',
      step4_title: 'Return It',
      step4_text: 'After your event, return the dress at any of our locations. It\u2019s that simple!',
      cats_title: 'Our Categories',
      cats_sub: 'We have the perfect dress for every celebration',
      cat_wedding: 'Wedding',
      cat_wedding_sub: 'Bridal gowns',
      cat_quince: 'Quinceañera',
      cat_quince_sub: 'Quinceañera dresses',
      cat_graduation: 'Graduation',
      cat_graduation_sub: 'Graduation dresses',
      cat_cocktail: 'Cocktail',
      cat_cocktail_sub: 'Event dresses',
      footer_explore: 'Explore',
      footer_catalog: 'Catalog',
      footer_how: 'How It Works',
      footer_bridal: 'Bridal Gowns',
      footer_quince: 'Quinceañera Dresses',
      footer_help: 'Help',
      footer_faq: 'FAQ',
      footer_policy: 'Rental Policy',
      footer_terms: 'Terms & Conditions',
      footer_privacy: 'Privacy Policy',
      footer_contact: 'Contact',
      footer_desc: 'Dress rentals for Parties, Brides, Bridesmaids and Quinceañeras. Elegance and style at C.C. Paseo San Isidro, Zona 16, Guatemala.',
      footer_rights: '© 2026 Mujer Bonita GT - Guatemala. All rights reserved.',
      footer_devgt: 'Developed by',
      wa_float: 'Message us on WhatsApp',
      login_title: 'Log In',
      login_email: 'Email',
      login_password: 'Password',
      login_submit: 'Log In',
      login_no_account: 'Don\u2019t have an account?',
      login_register: 'Sign up here',
      cat_page_title: 'Dress Catalog',
      cat_page_sub: 'Find the perfect dress for your special event',
      cat_filters: 'Filters',
      cat_clear: 'Clear all ×',
      size_guide_title: 'Size Guide',
      size_size: 'Size',
      size_bust: 'Bust (cm)',
      size_waist: 'Waist (cm)',
      size_hip: 'Hip (cm)',
    }
  };

  let currentLang = localStorage.getItem(STORAGE_KEY) || 'es';

  function t(key) {
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.es;
    return dict[key] !== undefined ? dict[key] : TRANSLATIONS.es[key] !== undefined ? TRANSLATIONS.es[key] : key;
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
    });
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
  }

  function renderButton() {
    const host = document.querySelector('.navbar-actions');
    if (!host) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'lang-selector';
    wrapper.id = 'langSelector';

    wrapper.innerHTML = `
      <button class="lang-btn" id="langToggle" aria-haspopup="listbox" aria-expanded="false" title="Select language / Seleccionar idioma">
        <span class="lang-flags" id="langCurrentFlag">${FLAGS[currentLang]}</span>
        <span class="lang-caret">▾</span>
      </button>
      <div class="lang-dropdown" id="langDropdown" role="listbox">
        <div class="lang-option ${currentLang === 'es' ? 'selected' : ''}" data-lang="es" role="option" aria-selected="${currentLang === 'es'}">
          <span class="lang-flag">${FLAGS.es}</span>
          <span class="lang-name">Español</span>
          <span class="lang-check">✓</span>
        </div>
        <div class="lang-option ${currentLang === 'en' ? 'selected' : ''}" data-lang="en" role="option" aria-selected="${currentLang === 'en'}">
          <span class="lang-flag">${FLAGS.en}</span>
          <span class="lang-name">English</span>
          <span class="lang-check">✓</span>
        </div>
      </div>
    `;

    const themeToggle = host.querySelector('.theme-toggle');
    if (themeToggle) {
      host.insertBefore(wrapper, themeToggle);
    } else {
      host.prepend(wrapper);
    }

    const btn = wrapper.querySelector('#langToggle');
    const dropdown = wrapper.querySelector('#langDropdown');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    dropdown.querySelectorAll('.lang-option').forEach((opt) => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = opt.getAttribute('data-lang');
        setLang(lang);
        closeDropdown();
      });
    });

    document.addEventListener('click', closeDropdown);
  }

  function closeDropdown() {
    const dropdown = document.getElementById('langDropdown');
    const btn = document.getElementById('langToggle');
    if (dropdown) dropdown.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  function setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    const flagEl = document.getElementById('langCurrentFlag');
    if (flagEl) flagEl.innerHTML = FLAGS[lang];
    document.querySelectorAll('.lang-option').forEach((opt) => {
      const isSel = opt.getAttribute('data-lang') === lang;
      opt.classList.toggle('selected', isSel);
      opt.setAttribute('aria-selected', String(isSel));
    });
    applyTranslations();
  }

  document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && TRANSLATIONS[saved]) currentLang = saved;
    renderButton();
    applyTranslations();
  });
})();
