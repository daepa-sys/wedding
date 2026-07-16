(() => {
  "use strict";

  const config = WEDDING_CONFIG;
  const $ = (selector) => document.querySelector(selector);

  function setText(selector, value) {
    const element = $(selector);
    if (element) element.textContent = value;
  }

  function onlyDigits(value) {
    return value.replace(/[^0-9+]/g, "");
  }

  function formatKoreanDate(date) {
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    const hour = date.getHours();
    const minute = date.getMinutes();
    const period = hour < 12 ? "오전" : "오후";
    const displayHour = hour % 12 || 12;
    const minuteText = minute ? ` ${String(minute).padStart(2, "0")}분` : "";

    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${weekdays[date.getDay()]}요일 ${period} ${displayHour}시${minuteText}`;
  }

  function renderBasicInfo() {
    const weddingDate = new Date(config.weddingDate);
    const dateText = formatKoreanDate(weddingDate);

    setText("#groomName", config.groom.name);
    setText("#groomName2", config.groom.name);
    setText("#brideName", config.bride.name);
    setText("#brideName2", config.bride.name);
    setText("#groomParents", config.groom.parents);
    setText("#brideParents", config.bride.parents);
    setText("#heroDate", dateText);
    setText("#dateFull", dateText);
    setText("#dateMonth", String(weddingDate.getMonth() + 1).padStart(2, "0"));
    setText("#dateDay", String(weddingDate.getDate()).padStart(2, "0"));
    setText("#invitationMessage", config.invitationMessage);

    setText("#heroVenue", config.venue.name);
    setText("#venueName", config.venue.name);
    setText("#venueAddress", config.venue.address);
    setText("#venueTel", config.venue.tel);
    setText("#subwayInfo", config.venue.subway);
    setText("#busInfo", config.venue.bus);
    setText("#parkingInfo", config.venue.parking);

    $("#naverMapBtn").href = config.venue.naverMap;
    $("#kakaoMapBtn").href = config.venue.kakaoMap;
    $("#googleMapBtn").href = config.venue.googleMap;

    setText("#groomPhoneText", config.groom.phone);
    setText("#bridePhoneText", config.bride.phone);
    $("#groomCall").href = `tel:${onlyDigits(config.groom.phone)}`;
    $("#brideCall").href = `tel:${onlyDigits(config.bride.phone)}`;

    document.title = `${config.groom.name} ♥ ${config.bride.name} 결혼식`;
    setText("#copyrightYear", new Date().getFullYear());
  }

  function renderCalendar() {
    const target = $("#calendar");
    const date = new Date(config.weddingDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const weddingDay = date.getDate();
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

    target.innerHTML = "";

    weekdays.forEach((day) => {
      const cell = document.createElement("div");
      cell.className = "weekday";
      cell.textContent = day;
      target.appendChild(cell);
    });

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i += 1) {
      target.appendChild(document.createElement("div"));
    }

    for (let day = 1; day <= lastDate; day += 1) {
      const cell = document.createElement("div");
      cell.textContent = day;
      if (day === weddingDay) cell.className = "wedding-day";
      target.appendChild(cell);
    }
  }

  function renderDday() {
    const wedding = new Date(config.weddingDate);
    const now = new Date();
    const diff = wedding.getTime() - now.getTime();
    const days = Math.ceil(diff / 86400000);

    let text;
    if (days > 0) text = `D-${days}`;
    else if (days === 0) text = "오늘 결혼합니다";
    else text = `결혼한 지 ${Math.abs(days)}일`;

    setText("#dDay", text);
  }

  function renderAccounts() {
    const list = $("#accountList");
    if (!list) return;
    
    list.innerHTML = "";

    config.accounts.forEach((account) => {
      const item = document.createElement("article");
      item.className = "account-item";
      item.innerHTML = `
        <div class="account-head">
          <div>
            <strong>${account.label} 측</strong>
            <p>${account.bank} ${account.number}<br>${account.holder}</p>
          </div>
          <button class="copy-button" type="button">계좌 복사</button>
        </div>
      `;

      item.querySelector("button").addEventListener("click", async () => {
        await copyText(account.number);
        showToast(`${account.label} 계좌번호를 복사했습니다.`);
      });

      list.appendChild(item);
    });
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
  }

  function setupGallery() {
    const dialog = $("#lightbox");
    const image = $("#lightboxImage");

    document.querySelectorAll(".gallery-item").forEach((button) => {
      button.addEventListener("click", () => {
        image.src = button.dataset.src;
        dialog.showModal();
      });
    });

    $("#lightboxClose").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  function setupShare() {
    $("#shareBtn").addEventListener("click", async () => {
      const shareData = {
        title: document.title,
        text: `${config.groom.name} ♥ ${config.bride.name} 결혼식에 초대합니다.`,
        url: window.location.href
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await copyText(window.location.href);
          showToast("청첩장 링크를 복사했습니다.");
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          showToast("링크 공유 중 오류가 발생했습니다.");
        }
      }
    });
  }

  function setupCalendarDownload() {
    $("#addCalendarBtn").addEventListener("click", () => {
      const start = new Date(config.weddingDate);
      const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);

      const toIcsDate = (date) =>
        date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

      const ics = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Wedding Invitation//KO",
        "BEGIN:VEVENT",
        `UID:${Date.now()}@wedding-invitation`,
        `DTSTAMP:${toIcsDate(new Date())}`,
        `DTSTART:${toIcsDate(start)}`,
        `DTEND:${toIcsDate(end)}`,
        `SUMMARY:${config.groom.name} ♥ ${config.bride.name} 결혼식`,
        `LOCATION:${config.venue.name}, ${config.venue.address}`,
        "DESCRIPTION:소중한 분들을 결혼식에 초대합니다.",
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\r\n");

      const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "wedding.ics";
      link.click();
      URL.revokeObjectURL(url);
    });
  }

  function setupReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  }

  renderBasicInfo();
  renderCalendar();
  renderDday();
  renderAccounts();
  setupGallery();
  setupShare();
  setupCalendarDownload();
  setupReveal();
})();
