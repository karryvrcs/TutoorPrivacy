(function () {
  const STORAGE_KEY = "tutoor-lang";
  const SLIDE_COUNT = 7;

  const STRINGS = {
    "zh-CN": {
      nav_features: "核心优势",
      nav_screenshots: "应用截图",
      nav_faq: "常见问题",
      hero_lead:
        "专为独立老师打造的教务系统，集排课、考勤、课程管理、学生管理、课时统计、财务统计于一体。我们深知教务工作的繁琐，帮你彻底告别手写记账和复杂表格，让您能够全情投入教学。",
      features_title: "核心优势",
      f1_title: "教师课表",
      f1_desc: "智能课表视图，彻底杜绝撞课烦恼。",
      f2_title: "学生考勤",
      f2_desc: "考勤一目了然，实时计算课酬收入，随时查看学生的上课与流水记录。",
      f3_title: "课程管理",
      f3_desc: "支持一对一和班课模式，灵活设置排课逻辑与收费标准。",
      f4_title: "多维数据统计",
      f4_desc: "自动统计日 / 周 / 月 / 年总课时和收入数据，账目一清二楚。",
      f5_title: "隐私保护",
      f5_desc: "数据本地存储，您的学生名单与收入细节只属于您自己。",
      f6_title: "多设备同步",
      f6_desc: "支持 iCloud 自动备份数据，多设备数据自动同步。",
      shots_title: "应用截图",
      shots_sub: "在真实界面中查看排课、考勤与统计等功能。",
      footer_copy: "专为独立老师设计的教务工具。",
      meta_desc:
        "Tutoor — 专为独立老师打造的教务系统，集排课、考勤、课程与学生管理、课时与财务统计于一体。",
      page_title: "Tutoor — 独立老师教务系统",
      carousel_prev: "上一张",
      carousel_next: "下一张",
      carousel_label: "截图幻灯片",
      faq_title: "常见问题",
      faq_q1: "Tutoor 适合谁使用？",
      faq_a1:
        "Tutoor 面向需要管理排课、学员、课时与收入的私人教师；无论您主要做一对一还是班课，都可以用它理清课表与账目。",
      faq_q2: "我的数据存在哪里？安全吗？",
      faq_a2:
        "数据默认保存在您的设备本地；您也可以选择通过 iCloud 在您自己的 Apple 设备间同步与备份。我们不会用自有服务器存储您的学员名单与收入明细。",
      faq_q3: "支持哪些设备和课程类型？",
      faq_a3:
        "Tutoor 为 iPhone、iPad 等 Apple 设备设计。课程支持一对一与班课，并可为不同课程设置收费与排课规则。",
      faq_q4: "课时和收入是如何统计的？",
      faq_a4:
        "结合考勤记录与课程设置，应用会自动汇总日、周、月、年维度的总课时与收入，方便您对账与复盘。",
      faq_q5: "遇到问题如何获取帮助？",
      faq_a5: "您可在 App 内反馈，或发送邮件至下方地址，我们会尽快回复。",
      contact_title: "联系我们",
    },
    en: {
      nav_features: "Highlights",
      nav_screenshots: "Screenshots",
      nav_faq: "FAQ",
      hero_lead:
        "Tutoor is a school management app built for private tutors—scheduling, attendance, courses, students, lesson hours, and finances in one place. We know how tedious admin work can be: leave handwritten ledgers and messy spreadsheets behind, and focus on teaching.",
      features_title: "Highlights",
      f1_title: "Teacher timetable",
      f1_desc: "A smart schedule view that helps you avoid double-booking.",
      f2_title: "Student attendance",
      f2_desc: "Clear at a glance; earnings update in real time, with lesson and payment history whenever you need it.",
      f3_title: "Course management",
      f3_desc: "One-on-one and group classes, with flexible scheduling rules and fee structures.",
      f4_title: "Rich analytics",
      f4_desc: "Automatic daily, weekly, monthly, and yearly hours and revenue—your numbers stay transparent.",
      f5_title: "Privacy",
      f5_desc: "Data stays on your device—your student lists and income details belong to you alone.",
      f6_title: "Sync across devices",
      f6_desc: "iCloud backup with automatic sync so your data follows you.",
      shots_title: "Screenshots",
      shots_sub: "See scheduling, attendance, and analytics in the real interface.",
      footer_copy: "Built for private tutors who care about their craft.",
      meta_desc:
        "Tutoor — scheduling, attendance, courses, students, lesson tracking, and finance for private tutors.",
      page_title: "Tutoor — Admin for Private Tutors",
      carousel_prev: "Previous slide",
      carousel_next: "Next slide",
      carousel_label: "Screenshot carousel",
      faq_title: "FAQ",
      faq_q1: "Who is Tutoor for?",
      faq_a1:
        "Tutoor is for private tutors who need scheduling, students, lesson hours, and income in one place—whether you mostly teach one-on-one or small groups.",
      faq_q2: "Where is my data stored? Is it safe?",
      faq_a2:
        "Your data is stored locally on your device by default. You can optionally use iCloud to sync and back up across your own Apple devices. We do not run our own servers to store your student lists or income details.",
      faq_q3: "Which devices and class types are supported?",
      faq_a3:
        "Tutoor is designed for iPhone and iPad. It supports both one-on-one and group classes, with flexible pricing and scheduling rules per course.",
      faq_q4: "How are lesson hours and revenue calculated?",
      faq_a4:
        "Using attendance and course settings, the app aggregates total hours and income by day, week, month, and year so you can reconcile and review at a glance.",
      faq_q5: "How can I get help?",
      faq_a5: "Use in-app feedback or email us at the address below—we reply as soon as we can.",
      contact_title: "Contact us",
    },
  };

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh-CN" || saved === "en") return saved;
    const nav = navigator.language || "";
    return nav.toLowerCase().startsWith("zh") ? "zh-CN" : "en";
  }

  function prefix(lang) {
    return lang === "zh-CN" ? "cn" : "en";
  }

  function applyStrings(lang) {
    const dict = STRINGS[lang];
    document.documentElement.lang = lang === "zh-CN" ? "zh-CN" : "en";
    document.body.classList.toggle("lang-en", lang === "en");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    const meta = document.querySelector('meta[name="description"]');
    if (meta && dict.meta_desc) meta.setAttribute("content", dict.meta_desc);
    if (dict.page_title) document.title = dict.page_title;

    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");
    const carouselRoot = document.querySelector(".carousel");
    if (prevBtn) prevBtn.setAttribute("aria-label", dict.carousel_prev);
    if (nextBtn) nextBtn.setAttribute("aria-label", dict.carousel_next);
    if (carouselRoot) carouselRoot.setAttribute("aria-label", dict.carousel_label);
  }

  function buildCarousel(lang) {
    const track = document.getElementById("carousel-track");
    const dots = document.getElementById("carousel-dots");
    if (!track || !dots) return;

    const p = prefix(lang);
    track.innerHTML = "";
    dots.innerHTML = "";

    for (let i = 1; i <= SLIDE_COUNT; i++) {
      const slide = document.createElement("div");
      slide.className = "carousel-slide";
      slide.setAttribute("role", "group");
      slide.setAttribute("aria-roledescription", "slide");
      slide.setAttribute("aria-label", `${i} / ${SLIDE_COUNT}`);
      const img = document.createElement("img");
      img.src = `${p}_${String(i).padStart(2, "0")}.png`;
      img.alt = lang === "zh-CN" ? `Tutoor 应用截图 ${i}` : `Tutoor app screenshot ${i}`;
      img.loading = i === 1 ? "eager" : "lazy";
      slide.appendChild(img);
      track.appendChild(slide);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-selected", i === 1 ? "true" : "false");
      dot.setAttribute("aria-label", `${i} / ${SLIDE_COUNT}`);
      dot.dataset.index = String(i - 1);
      dots.appendChild(dot);
    }

    goToSlide(0, false);
    requestAnimationFrame(() => goToSlide(0, false));
  }

  let currentIndex = 0;

  function goToSlide(index, animate) {
    const track = document.getElementById("carousel-track");
    const viewport = document.querySelector(".carousel-viewport");
    if (!track || !viewport) return;
    const n = track.children.length;
    if (n === 0) return;
    currentIndex = ((index % n) + n) % n;
    const w = viewport.offsetWidth;
    const offsetPx = -currentIndex * w;
    track.style.transition = animate === false ? "none" : "";
    track.style.transform = `translateX(${offsetPx}px)`;

    track.querySelectorAll(".carousel-slide").forEach((slide, i) => {
      slide.setAttribute("aria-hidden", i === currentIndex ? "false" : "true");
    });

    document.querySelectorAll(".carousel-dot").forEach((dot, i) => {
      dot.setAttribute("aria-selected", i === currentIndex ? "true" : "false");
    });
  }

  function syncCarouselAfterResize() {
    goToSlide(currentIndex, false);
  }

  function initCarouselHandlers() {
    const prev = document.getElementById("carousel-prev");
    const next = document.getElementById("carousel-next");
    const carousel = document.querySelector(".carousel");

    if (prev) {
      prev.onclick = () => goToSlide(currentIndex - 1);
    }
    if (next) {
      next.onclick = () => goToSlide(currentIndex + 1);
    }
    if (carousel && !carousel.dataset.dotsDelegated) {
      carousel.dataset.dotsDelegated = "1";
      carousel.addEventListener("click", (e) => {
        const t = e.target;
        if (t.classList.contains("carousel-dot") && t.dataset.index != null) {
          goToSlide(parseInt(t.dataset.index, 10));
        }
      });
    }

    const viewport = document.querySelector(".carousel-viewport");
    if (viewport && !viewport.dataset.swipeBound) {
      viewport.dataset.swipeBound = "1";
      let startX = null;
      viewport.addEventListener(
        "touchstart",
        (e) => {
          startX = e.changedTouches[0].screenX;
        },
        { passive: true }
      );
      viewport.addEventListener(
        "touchend",
        (e) => {
          if (startX == null) return;
          const endX = e.changedTouches[0].screenX;
          const dx = endX - startX;
          if (Math.abs(dx) > 40) {
            if (dx > 0) goToSlide(currentIndex - 1);
            else goToSlide(currentIndex + 1);
          }
          startX = null;
        },
        { passive: true }
      );
    }
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyStrings(lang);
    buildCarousel(lang);
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang === "zh-CN" || lang === "en") setLang(lang);
    });
  });

  const initial = getLang();
  setLang(initial);
  initCarouselHandlers();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(syncCarouselAfterResize, 100);
  });
})();
