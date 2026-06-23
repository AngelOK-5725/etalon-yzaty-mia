/* =============================================
   QYZ UZATU — Wedding Invitation JavaScript
   Swipe-up opening, countdown, i18n, RSVP, Telegram, gallery lightbox
   Style inspired by @invi_studio
   ============================================= */
const GAS_URL = "https://script.google.com/macros/s/AKfycbxw4CwTU_rN61dB6f6uw2YOT-fBM1cik3nFqqxFBuI3rTsDP1Eg_zTijjYX21olql_qAA/exec";
(function () {
  'use strict';

  /* =====================================
   LANGUAGE SYSTEM (LIGHT + ACTIVE BUTTON)
  ===================================== */

  let currentLang = localStorage.getItem("lang") || "ru";

   /* ---------- TRANSLATIONS ---------- */

  const translations = {
    ru: {
      welcomeGreeting: "Дорогие гости!",
      welcomeText1: "Мы с огромной радостью приглашаем вас разделить с нами этот прекрасный день, который состоится 7 августа 2026 года в 16:00.",
    
      stihText1:`
      Отправляя дочь свою по волнам жизни
      Как не будешь волноваться за нее
      С ладони отдаю частицу сердца
      Оторвав ее.
      Дети наши стали парой, пусть будет крепким ваш союз
      Приятный нам во всем зятек,
      Будь нам как опора
      Будь звездой своей избранницы
      Она ведь мире только одна.
      `,

      countdownTitle: "До торжества осталось:",
      days: "дней",
      hours: "часов",
      minutes: "минут",
      seconds: "секунд",

      calendarTitle: "Дата",
      calendarMonth: "Август 2026",
      calendarDetail: "Начало",
      calendarDetailValue: "16:00",
      calendarLocation: "Место",
    },

    kz: {
      welcomeGreeting: "Құрметті достар мен жақындар!",
      welcomeText1: "Біз сіздерді 2026 жылдың 7 тамызында өтетін мерекемізге шақырамыз. Осы маңызды және бақытты күнді бізбен бірге бөлісуге шақырамыз. Біз сіздерді мерекемізде көргенімізге қуаныштымыз.",
      
      stihText1:`
      Қимайды ұзатқан жақ қыз баласын
      Жан дүниен қалай ғана сыздамасын
      Құдалар алақанға салып бердік
      Жүректің жулып алып бір парасын
      Бір баламыз бүгінде екеу болды
      Жас жұбайлар одағы бекем болсын
      Көңіл де, көзде тояр күйеу бала
      Болма тек үш жұртына сүйеу ғана
      Жарынның жұлдызы бол бақыты бол
      Мұндай қыз бұл дүниеде біреу ғана.
      `,

      countdownTitle: "Мерекеге дейін қалған уақыт:",
      days: "күн",
      hours: "сағат",
      minutes: "минут",
      seconds: "секунд",

      calendarTitle: "Күні",
      calendarMonth: "Тамыз 2026",
      calendarDetail: "Басталуы",
      calendarDetailValue: "16:00",
      calendarLocation: "Орны",
    }
  };

  /* =====================================
    APPLY LANGUAGE
  ===================================== */

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    const t = translations[lang];
    if (!t) return;

    /* TEXT */
    document.querySelectorAll("[data-lang]").forEach(el => {
      const key = el.dataset.lang;
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    /* PLACEHOLDERS */
    document.querySelectorAll("[data-placeholder]").forEach(el => {
      const key = el.dataset.placeholder;
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    /* ACTIVE BUTTONS */
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  /* =====================================
    SWITCH LANGUAGE (for HTML onclick)
  ===================================== */

  function switchLanguage(lang) {
    applyLanguage(lang);
  }

  /* ВАЖНО — чтобы HTML видел функцию */
  window.switchLanguage = switchLanguage;

  /* =====================================
    INIT ON LOAD
  ===================================== */

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
  });




  /* ---------- MAP ---------- */

  const mapFrame =
      document.getElementById("mapFrame");

  const mapLink =
      document.getElementById("mapLink");

  /* ---------- GOOGLE MAP ---------- */

  function showGoogleMap(){

      mapFrame.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.349428970235!2d76.63746567581342!3d43.20215977112713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38834ffc1ac77433%3A0x2f8dd8855e775ecb!2zT0xaSEFTINGA0LXRgdGC0L7RgNCw0L0!5e0!3m2!1sru!2skz!4v1782111906701!5m2!1sru!2skz";

      mapLink.href =
      "https://maps.app.goo.gl/dfbzoHBpeUF5LwwT7";
  }

  /* ---------- 2GIS ---------- */

  function show2GISMap() {

      mapFrame.src = "";

      mapLink.href =
      "https://2gis.kz/almaty/search/Abylai%20Khan%2C%2044B%2C%20Kaskelen/firm/70000001044906396/76.639929%2C43.201817?m=76.63996%2C43.201832%2F17.57";
  }

  /* ---------- DEFAULT MAP ---------- */

  showGoogleMap();

  /* ---------- MAP BUTTONS ---------- */

  // const buttons =
  //     document.querySelectorAll(".map-btn");
  let buttons = [];

  document.addEventListener("DOMContentLoaded", () => {
    buttons = document.querySelectorAll(".map-btn");
  });
  // function setActiveButton(button){

  //     buttons.forEach(btn => {

  //         btn.classList.remove("active");

  //     });

  //     button.classList.add("active");
  // }
  function setActiveButton(button) {
    if (!buttons.length) {
      buttons = document.querySelectorAll(".map-btn");
    }

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
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
     INIT
     ============================================= */
  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);

    initSwipeOverlay();
    initCountdown();
    // initLangSwitch();
    initRsvp();
    initGallery();
  });

/* =============================================
   GALLERY LIGHTBOX
============================================= */
  // const lightbox = document.getElementById("lightbox");
  // const lightboxImage = document.querySelector(".lightbox-image");
  // const closeBtn = document.querySelector(".lightbox-close");

  // document.querySelectorAll(".gallery img").forEach(img => {
  //   img.addEventListener("click", () => {
  //     lightboxImage.src = img.src;
  //     lightbox.classList.add("active");
  //     document.body.style.overflow = "hidden";
  //   });
  // });

  // closeBtn.addEventListener("click", () => {
  //   lightbox.classList.remove("active");
  //   document.body.style.overflow = "";
  // });

  // lightbox.addEventListener("click", e => {
  //   if (e.target === lightbox) {
  //     lightbox.classList.remove("active");
  //     document.body.style.overflow = "";
  //   }
  // });

  // document.addEventListener("keydown", e => {
  //   if (e.key === "Escape") {
  //     lightbox.classList.remove("active");
  //     document.body.style.overflow = "";
  //   }
  // });
  const items = Array.from(document.querySelectorAll(".gallery img"));

  const lightbox = document.getElementById("lightbox");
  const content = document.querySelector(".lightbox-content");

  const closeBtn = document.querySelector(".lightbox-close");
  const prevBtn = document.querySelector(".lightbox-nav.prev");
  const nextBtn = document.querySelector(".lightbox-nav.next");

  let currentIndex = 0;

  // открыть
  function openLightbox(index) {
    currentIndex = index;
    render();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // отрисовка
  function render() {
    const el = items[currentIndex];

    content.innerHTML = "";

    const img = document.createElement("img");
    img.src = el.src;

    content.appendChild(img);
  }

  // навигация
  function next() {
    currentIndex = (currentIndex + 1) % items.length;
    render();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    render();
  }

  // события
  items.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  });

  // клавиатура (ПК)
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }

    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
  
  let startX = 0;

  lightbox.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  lightbox.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    let diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  });
  /* =============================================
     MAP EXPORT (FIX)
  ============================================= */

  window.showGoogleMap = showGoogleMap;
  window.show2GISMap = show2GISMap;
  window.setActiveButton = setActiveButton;
/* =============================================
   END
============================================= */

})();
// /* =============================================
//    MAP FIX — EXPORT FUNCTIONS TO WINDOW
// ============================================= */

// window.showGoogleMap = showGoogleMap;
// window.show2GISMap = show2GISMap;
// window.setActiveButton = setActiveButton;