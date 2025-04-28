window.onload = function () {
  const otherBusinessBtn = document.querySelector("#otherBusinessBtn");

  // 사업별 웹사이트 바로가기 메뉴
  otherBusinessBtn.addEventListener("click", function () {
    const menu = document.querySelector(".otherBusinesses > ul");
    menu.style.display =
      menu.style.display === "none" || menu.style.display === ""
        ? "block"
        : "none";
  });
};
// 절주온 스크립트 파일
// 헤더
document.addEventListener("DOMContentLoaded", function () {
  // 헤더 최상단 좌측 드롭다운 - 절주온(ON)
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownList = document.querySelector(".dropdown-list");

  if (dropdownBtn && dropdownList) {
    dropdownBtn.addEventListener("click", function () {
      dropdownList.classList.toggle("open");
      dropdownBtn.classList.toggle("active");
    });
  }

  // 헤더 최상단 우측 드롭다운 - 대표 SNS
  const snsWrap = document.querySelector(".sns-wrap");
  const snsButton = snsWrap?.querySelector(".sns-button");

  if (snsWrap && snsButton) {
    snsButton.addEventListener("click", function () {
      snsWrap.classList.toggle("active");
    });
  }

  /* 헤더 하단 드롭다운 (삼각형 + 고정 박스) + 전체 화면 메뉴 */
  const navItems = document.querySelectorAll(".navItemHeaderBottom");
  const dropdownWrapper = document.getElementById("dropdownWrapper");
  const dropdownContent = document.getElementById("dropdownContent");
  const triangle = document.getElementById("triangle");
  const headBottom = document.getElementById("headBottom");

  navItems.forEach((item) => {
    const originalContent = item.querySelector(".dropdownHeaderBottom");
    item.addEventListener("mouseenter", () => {
      // 새로 복사하여 드롭다운 내용 갱신
      dropdownContent.innerHTML = "";
      if (originalContent) {
        originalContent.querySelectorAll("a").forEach((link) => {
          const newLink = document.createElement("a");
          newLink.href = link.href;
          newLink.textContent = link.textContent;
          dropdownContent.appendChild(newLink);
        });
      }
      // 회색 박스와 삼각형 표시
      dropdownWrapper.classList.add("active");
      triangle.classList.add("active");

      // 헤더 하단 컨테이너 기준 위치 계산
      const headerRect = headBottom.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const wrapperRect = dropdownWrapper.getBoundingClientRect();
      // 삼각형의 left: 메뉴 항목 중앙 (헤더 컨테이너 기준)
      triangle.style.left = `${
        itemRect.left + itemRect.width / 2 - wrapperRect.left
      }px`;
    });

    item.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!dropdownWrapper.matches(":hover") && !triangle.matches(":hover")) {
          dropdownWrapper.classList.remove("active");
          triangle.classList.remove("active");
        }
      }, 100);
    });
  });

  dropdownWrapper?.addEventListener("mouseleave", () => {
    dropdownWrapper.classList.remove("active");
    triangle.classList.remove("active");
  });
});

/* 전체 화면 햄버거 메뉴 */
function toggleFullscreenNav() {
  const nav = document.getElementById("fullscreenNav");
  if (nav) {
    nav.classList.toggle("active");
  }
}
// x 버튼 회전
const closeBtn = document.querySelector(".closeBtnHeaderBottom");

// x 버튼 회전 로직
(function setupCloseBtn() {
  if (document.readyState === "loading") {
    // DOM이 아직 준비되지 않았으면, readystatechange 이벤트를 통해 기다림
    document.addEventListener("readystatechange", function () {
      if (document.readyState === "complete") {
        attachCloseBtnEvents();
      }
    });
  } else {
    // 이미 DOM이 준비되어 있으면 바로 실행
    attachCloseBtnEvents();
  }

  function attachCloseBtnEvents() {
    const closeBtn = document.querySelector(".closeBtnHeaderBottom");
    if (closeBtn) {
      closeBtn.addEventListener("mouseenter", () => {
        closeBtn.style.transform = "rotate(180deg)";
        closeBtn.style.transition = "transform 0.3s ease";
      });
      closeBtn.addEventListener("mouseleave", () => {
        closeBtn.style.transform = "rotate(0deg)";
      });
    }
  }
})();
