/* =============================================
   QYZ UZATU — Wedding Invitation JavaScript
   Swipe-up opening, countdown, i18n, RSVP, Telegram, dress code
   Style inspired by @invi_studio
   ============================================= */
const GAS_URL = "https://script.google.com/macros/s/AKfycbxw4CwTU_rN61dB6f6uw2YOT-fBM1cik3nFqqxFBuI3rTsDP1Eg_zTijjYX21olql_qAA/exec";
(function () {
  'use strict';

  /* =============================================
     TRANSLATIONS
     ============================================= */
  const translations = {
    ru: {
      // Swipe overlay

      // Hero

      // Countdown
      countdownTitle: 'До торжества осталось:',
      days: 'дней',
      hours: 'часов',
      minutes: 'минут',
      seconds: 'секунд',

      // Calendar
      calendarTitle: 'Дата мероприятия',
      calendarSubtitle: 'Запишите в свой календарь',
      calendarMonth: 'Август 2026',
      calendarDetail: 'Пятница',

      // Welcome
      welcomeGreeting: 'Дорогие друзья и родные!',
      welcomeText1: 'Мы рады пригласить вас на наше торжество, которое состоится 7 августа 2026 года. Приглашаем вас разделить с нами этот важный и счастливый день. Мы будем рады видеть вас на нашем торжестве.',
      welcomeText2: 'Приглашаем вас на Узату нашей дочери Мии.',
      welcomeSignature: 'С любовью, семья',

      // Dress Code


      // Location
      locationTitle: 'Место проведения',
      locationSubtitle: 'Ждём вас по адресу',
      address: 'Abylai Khan, 44B',
      addressDetail: 'г. Каскелен',
      mapPlaceholder: 'Карта будет доступна',
      googleMaps: 'Открыть в Google Maps',
      gis2: 'Открыть в 2GIS',

      // RSVP
      rsvpTitle: 'RSVP',
      rsvpSubtitle: 'Пожалуйста, подтвердите своё присутствие',
      nameLabel: 'Имя',
      namePlaceholder: 'Введите ваше имя',
      surnameLabel: 'Фамилия',
      surnamePlaceholder: 'Введите вашу фамилию',
      statusLabel: 'Статус участия',
      statusYes: 'Приду',
      statusNo: 'Не смогу прийти',
      guestsLabel: 'Дополнительные гости',
      addGuest: '+1 гость',
      guestPlaceholder: 'Имя сопровождающего',
      submitBtn: 'Отправить',
      resetForm: 'Отправить ещё раз',
      successTitle: 'Спасибо!',
      successText: 'Ваш ответ получен. Мы с нетерпением ждём вас!',

      // Footer
      footerText: 'С любовью, наша семья',
    },

    kz: {
      // Swipe overlay

      // Hero
      heroLabel: 'Отбасылық мереке',
      heroName: 'Мия',
      heroDate: '7 тамыз 2026',

      // Countdown
      countdownTitle: 'Мерекеге дейін',
      days: 'күн',
      hours: 'сағат',
      minutes: 'минут',
      seconds: 'секунд',

      // Calendar
      calendarTitle: 'Мереке күні',
      calendarSubtitle: 'Күнтізбеңізге жазып алыңыз',
      calendarMonth: 'Тамыз 2026',
      calendarDetail: 'Жұма',

      // Welcome
      welcomeGreeting: 'Құрметті достар және туыстар!',
      welcomeText1: 'Біз сіздермен отбасымыздың маңызды күнін бөлісуге қуаныштымыз.',
      welcomeText2: 'Сіздерді қызымыз Мияның ұзату тойына шақырамыз.',
      welcomeSignature: 'Сүйіспеншілікпен, отбасы',

      // Dress Code
      dressTitle: 'Қазақтың ұлттық киімі',
      dressSubtitle: 'Ұлттық стильді қолдаңыз — дәстүрлі киіммен келіңіз',
      dressWomen: 'Әйелдерге арналған',
      dressMen: 'Ерлерге арналған',
      dressW1: 'Камзол + көйлек',
      dressW2: 'Ұлттық камзол',
      dressW3: 'Сәукеле / Тақия',
      dressW4: 'Этно-шик образ',
      dressW5: 'Барқыт көйлек',
      dressW6: 'Алтын оюлы көйлек',
      dressM1: 'Ұлттық шапан',
      dressM2: 'Этникалық жилет',
      dressM3: 'Классикалық образ',
      dressM4: 'Ерлер камзолы',
      dressM5: 'Этно-шик образ',
      dressM6: 'Тақия / Бөрік',

      // Location
      locationTitle: 'Өткізілетін орны',
      locationSubtitle: 'Сіздерді күтеміз',
      address: 'Abylai Khan, 44B',
      addressDetail: 'Қаскелең қ.',
      mapPlaceholder: 'Карта қолжетімді болады',
      googleMaps: 'Google Maps-те ашу',
      gis2: '2GIS-те ашу',

      // RSVP
      rsvpTitle: 'RSVP',
      rsvpSubtitle: 'Өтінеміз, қатысуыңызды растаңыз',
      nameLabel: 'Аты',
      namePlaceholder: 'Атыңызды енгізіңіз',
      surnameLabel: 'Тегі',
      surnamePlaceholder: 'Тегіңізді енгізіңіз',
      statusLabel: 'Қатысу мәртебесі',
      statusYes: 'Келемін',
      statusNo: 'Келе алмаймын',
      guestsLabel: 'Қосымша қонақтар',
      addGuest: '+1 қонақ',
      guestPlaceholder: 'Ілеспе адамның аты',
      submitBtn: 'Жіберу',
      resetForm: 'Қайта жіберу',
      successTitle: 'Рақмет!',
      successText: 'Жауабыңыз алынды. Сізді күтеміз!',

      // Footer
      footerText: 'Сүйіспеншілікпен, біздің отбасы',
    },
  };

  /* =============================================
     STATE
     ============================================= */
  let currentLang = localStorage.getItem('yz_lang') || 'ru';
  let guestCount = 0;

  /* =============================================
     DOM CACHE
     ============================================= */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  /* =============================================
     I18N — Apply translations to the page
     ============================================= */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('yz_lang', lang);

    const t = translations[lang];

    // Swipe overlay
    const elSwipeUp = document.getElementById('lang-swipe-up');
    if (elSwipeUp) elSwipeUp.textContent = t.swipeUp;

    // Hero
    const elHeroLabel = document.getElementById('lang-hero-label');
    if (elHeroLabel) elHeroLabel.textContent = t.heroLabel;
    const elHeroName = document.getElementById('lang-hero-name');
    if (elHeroName) elHeroName.textContent = t.heroName;
    const elHeroDate = document.getElementById('lang-hero-date');
    if (elHeroDate) elHeroDate.textContent = t.heroDate;

    // Countdown
    const elCountdownTitle = document.getElementById('lang-countdown-title');
    if (elCountdownTitle) elCountdownTitle.textContent = t.countdownTitle;
    const labels = {
      'lang-days': t.days,
      'lang-hours': t.hours,
      'lang-minutes': t.minutes,
      'lang-seconds': t.seconds,
    };
    Object.entries(labels).forEach(([id, text]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    });

    // Calendar
    const elCalTitle = document.getElementById('lang-calendar-title');
    if (elCalTitle) elCalTitle.textContent = t.calendarTitle;
    const elCalSubtitle = document.getElementById('lang-calendar-subtitle');
    if (elCalSubtitle) elCalSubtitle.textContent = t.calendarSubtitle;
    const elCalMonth = document.getElementById('lang-cal-month');
    if (elCalMonth) elCalMonth.textContent = t.calendarMonth;
    const elCalDetail = document.getElementById('lang-calendar-detail');
    if (elCalDetail) elCalDetail.textContent = t.calendarDetail;

    // Welcome
    const elGreeting = document.getElementById('lang-welcome-greeting');
    if (elGreeting) elGreeting.textContent = t.welcomeGreeting;
    const elText1 = document.getElementById('lang-welcome-text1');
    if (elText1) elText1.textContent = t.welcomeText1;
    const elText2 = document.getElementById('lang-welcome-text2');
    if (elText2) elText2.textContent = t.welcomeText2;
    const elSignature = document.getElementById('lang-welcome-signature');
    if (elSignature) elSignature.textContent = t.welcomeSignature;

    // Dress Code
    const elDressTitle = document.getElementById('lang-dress-title');
    if (elDressTitle) elDressTitle.textContent = t.dressTitle;
    const elDressSubtitle = document.getElementById('lang-dress-subtitle');
    if (elDressSubtitle) elDressSubtitle.textContent = t.dressSubtitle;
    const elDressWomen = document.getElementById('lang-dress-women');
    if (elDressWomen) elDressWomen.textContent = t.dressWomen;
    const elDressMen = document.getElementById('lang-dress-men');
    if (elDressMen) elDressMen.textContent = t.dressMen;
    const dressLabels = [
      'lang-dress-w1', 'lang-dress-w2', 'lang-dress-w3',
      'lang-dress-w4', 'lang-dress-w5', 'lang-dress-w6',
      'lang-dress-m1', 'lang-dress-m2', 'lang-dress-m3',
      'lang-dress-m4', 'lang-dress-m5', 'lang-dress-m6',
    ];
    const dressTexts = [
      t.dressW1, t.dressW2, t.dressW3,
      t.dressW4, t.dressW5, t.dressW6,
      t.dressM1, t.dressM2, t.dressM3,
      t.dressM4, t.dressM5, t.dressM6,
    ];
    dressLabels.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) el.textContent = dressTexts[i];
    });

    // Location
    const elLocationTitle = document.getElementById('lang-location-title');
    if (elLocationTitle) elLocationTitle.textContent = t.locationTitle;
    const elLocationSubtitle = document.getElementById('lang-location-subtitle');
    if (elLocationSubtitle) elLocationSubtitle.textContent = t.locationSubtitle;
    const elAddress = document.getElementById('lang-address');
    if (elAddress) elAddress.textContent = t.address;
    const elAddressDetail = document.getElementById('lang-address-detail');
    if (elAddressDetail) elAddressDetail.textContent = t.addressDetail;
    const elMapPlaceholder = document.getElementById('lang-map-placeholder');
    if (elMapPlaceholder) elMapPlaceholder.textContent = t.mapPlaceholder;

    // RSVP
    const elRsvpTitle = document.getElementById('lang-rsvp-title');
    if (elRsvpTitle) elRsvpTitle.textContent = t.rsvpTitle;
    const elRsvpSubtitle = document.getElementById('lang-rsvp-subtitle');
    if (elRsvpSubtitle) elRsvpSubtitle.textContent = t.rsvpSubtitle;
    const elNameLabel = document.getElementById('lang-name-label');
    if (elNameLabel) elNameLabel.textContent = t.nameLabel;
    const elSurnameLabel = document.getElementById('lang-surname-label');
    if (elSurnameLabel) elSurnameLabel.textContent = t.surnameLabel;

    // Update placeholders by name attribute
    const nameInput = document.querySelector('[name="name"]');
    if (nameInput) nameInput.placeholder = t.namePlaceholder;
    const surnameInput = document.querySelector('[name="surname"]');
    if (surnameInput) surnameInput.placeholder = t.surnamePlaceholder;

    // Update guest input placeholders
    document.querySelectorAll('.guest-input').forEach((el) => {
      el.placeholder = t.guestPlaceholder;
    });
    const elStatusLabel = document.getElementById('lang-status-label');
    if (elStatusLabel) elStatusLabel.textContent = t.statusLabel;
    const elStatusYes = document.getElementById('lang-status-yes');
    if (elStatusYes) elStatusYes.textContent = t.statusYes;
    const elStatusNo = document.getElementById('lang-status-no');
    if (elStatusNo) elStatusNo.textContent = t.statusNo;
    const elGuestsLabel = document.getElementById('lang-guests-label');
    if (elGuestsLabel) elGuestsLabel.textContent = t.guestsLabel;
    const elAddGuest = document.getElementById('lang-add-guest');
    if (elAddGuest) elAddGuest.textContent = t.addGuest;
    const elSubmit = document.getElementById('lang-submit');
    if (elSubmit) elSubmit.textContent = t.submitBtn;
    const elSuccessTitle = document.getElementById('lang-success-title');
    if (elSuccessTitle) elSuccessTitle.textContent = t.successTitle;
    const elSuccessText = document.getElementById('lang-success-text');
    if (elSuccessText) elSuccessText.textContent = t.successText;
    const elResetForm = document.getElementById('lang-reset-form');
    if (elResetForm) elResetForm.textContent = t.resetForm;

    // Update map button text (preserve SVG icon)
    const elGmapsBtn = document.getElementById('lang-gmaps');
    if (elGmapsBtn) {
      const svg = elGmapsBtn.querySelector('svg');
      const svgHtml = svg ? svg.outerHTML : '';
      elGmapsBtn.innerHTML = svgHtml + ' ' + t.googleMaps;
    }
    const elGis2Btn = document.getElementById('lang-gis2');
    if (elGis2Btn) {
      const svg = elGis2Btn.querySelector('svg');
      const svgHtml = svg ? svg.outerHTML : '';
      elGis2Btn.innerHTML = svgHtml + ' ' + t.gis2;
    }

    // Footer
    const elFooter = document.getElementById('lang-footer');
    if (elFooter) elFooter.textContent = t.footerText;

    // Lang buttons
    $$('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  /* =============================================
     SWIPE-UP OVERLAY — Open animation
     ============================================= */
  function initSwipeOverlay() {
    const overlay = document.getElementById('swipe-overlay');
    const mainContent = document.getElementById('main-content');
    const langSwitcher = document.getElementById('lang-switcher');
    if (!overlay) return;

    let touchStartY = 0;
    let isSwiping = false;

    function openInvitation() {
      // Fade out overlay
      overlay.classList.add('hidden');
      mainContent.classList.add('visible');
      langSwitcher.classList.add('visible');

      // Trigger scroll animations for visible sections
      setTimeout(() => {
        observeScroll();
      }, 200);

      document.body.style.overflow = '';
    }

    // Click to open (fallback)
    overlay.addEventListener('click', (e) => {
      // Only if click is on the overlay background, not on the phone mockup
      if (e.target === overlay || e.target.closest('.swipe-up') || e.target.closest('.phone-gold-line')) {
        openInvitation();
      }
    });

    // Touch swipe up to open
    overlay.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
      isSwiping = true;
    }, { passive: true });

    overlay.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
      const touchY = e.touches[0].clientY;
      const diff = touchStartY - touchY;

      // If swiped up enough, open
      if (diff > 80) {
        isSwiping = false;
        openInvitation();
      }
    }, { passive: true });

    overlay.addEventListener('touchend', () => {
      isSwiping = false;
    }, { passive: true });

    // Scroll wheel up to open
    overlay.addEventListener('wheel', (e) => {
      if (e.deltaY < -30) {
        openInvitation();
      }
    }, { passive: true });

    // Prevent body scroll when overlay is shown
    document.body.style.overflow = 'hidden';
  }

  /* =============================================
     COUNTDOWN TIMER
     ============================================= */
  function initCountdown() {
    const targetDate = new Date('2026-08-07T00:00:00').getTime();

    function updateTimer() {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        document.getElementById('countdown-days').textContent = '00';
        document.getElementById('countdown-hours').textContent = '00';
        document.getElementById('countdown-minutes').textContent = '00';
        document.getElementById('countdown-seconds').textContent = '00';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('countdown-days').textContent = String(days).padStart(2, '0');
      document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('countdown-minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('countdown-seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  /* =============================================
     SCROLL ANIMATIONS — Intersection Observer
     ============================================= */
  function observeScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* =============================================
     RSVP FORM — Guest management & submission
     ============================================= */
  function initRsvp() {
    const form = document.getElementById("rsvp-form");
    const successBlock = document.getElementById("form-success");
    const formContent = document.getElementById("rsvp-form-content");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("rsvp-name").value.trim();
      const surname = document.getElementById("rsvp-surname").value.trim();

      const status =
        document.querySelector('input[name="status"]:checked')?.value || "";

      if (!name || !surname || !status) {
        alert("Заполните все обязательные поля");
        return;
      }

      const guests = [];

      document.querySelectorAll(".guest-input").forEach((input) => {
        if (input.value.trim()) {
          guests.push(input.value.trim());
        }
      });

      const formData = new FormData();

      formData.append("name", name);
      formData.append("surname", surname);
      formData.append("status", status);
      formData.append("guests", JSON.stringify(guests));

      try {
        const response = await fetch(GAS_URL, {
          method: "POST",
          body: formData
        });

        const result = await response.text();
        console.log("Ответ GAS:", result);

        formContent.style.display = "none";
        successBlock.classList.add("show");
      } catch (error) {
        console.error("Ошибка fetch:", error);
        console.error(error.message);
      }
    });

    const resetBtn = document.getElementById("rsvp-reset-btn");
    resetBtn.addEventListener("click", () => {
      form.reset();
      // Clear all guest entries
      document.getElementById("guests-container").innerHTML = '';
      guestCount = 0;
      formContent.style.display = "block";
      successBlock.classList.remove("show");
    });

    // Add guest field
    const addGuestBtn = document.getElementById("add-guest-btn");
    const guestsContainer = document.getElementById("guests-container");

    function addGuestField(nameValue) {
      guestCount++;
      const entry = document.createElement("div");
      entry.className = "guest-entry";
      entry.innerHTML = `
        <input type="text" class="guest-input" name="guest_${guestCount}"
              placeholder="${translations[currentLang].guestPlaceholder}"
              value="${nameValue || ''}" />
        <button type="button" class="remove-guest-btn" aria-label="Удалить">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      `;
      entry.querySelector('.remove-guest-btn').addEventListener('click', () => {
        entry.remove();
        guestCount--;
      });
      guestsContainer.appendChild(entry);
    }

    addGuestBtn.addEventListener("click", () => {
      addGuestField('');
    });
  }

  /* =============================================
     LANGUAGE SWITCH
     ============================================= */
  function initLangSwitch() {
    $$('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        applyLanguage(lang);
      });
    });
  }
  const langButtons = document.querySelectorAll('.lang-switcher button');

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {

      langButtons.forEach(b => b.classList.remove('active'));

      btn.classList.add('active');

    });
  });

  /* =============================================
     INIT
     ============================================= */
  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);

    initSwipeOverlay();
    initCountdown();
    initLangSwitch();
    initRsvp();
    initGallery();
  });

/* =============================================
   GALLERY LIGHTBOX
============================================= */
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const closeBtn = document.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImage.src = img.src;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

/* =============================================
   END
============================================= */

})();