// async function includeHTML(selector, url) {
//   const el = document.querySelector(selector);
//   if (!el) return;

//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`Cannot load ${url}`);
//     el.innerHTML = await res.text();

//     // ⏱️ Chờ browser render DOM xong
//     requestAnimationFrame(() => {
//       initAfterInclude();
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }

// function initAfterInclude() {
//   // 1️⃣ Breadcrumb (nhẹ – chạy ngay)
//   if (typeof initBreadcrumb === 'function') {
//     initBreadcrumb();
//   }

//   // 2️⃣ Flowbite
//   if (window.initFlowbite) {
//     initFlowbite();
//   }

//   // 3️⃣ AOS (chỉ refresh – không init lại)
//   if (window.AOS) {
//     AOS.refreshHard();
//   }

//   // 4️⃣ Các component PHỤ THUỘC layout → delay 1 frame nữa
//   requestAnimationFrame(() => {
//     if (typeof initTeamSwiper === 'function') {
//       initTeamSwiper();
//     }

//     if (typeof initPhuongSwiper === 'function') {
//       initPhuongSwiper();
//     }

//     if (typeof initRangeSlider === 'function') {
//       initRangeSlider();
//     }
//   });
// }

async function includeHTML(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return false;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Cannot load ${url}`);
    el.innerHTML = await res.text();
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

function initAfterInclude() {
  if (typeof initBreadcrumb === 'function') initBreadcrumb();
  if (window.initFlowbite) initFlowbite();
  if (window.AOS) AOS.refreshHard();

  requestAnimationFrame(() => {
    if (typeof initTeamSwiper === 'function') initTeamSwiper();
    if (typeof initPhuongSwiper === 'function') initPhuongSwiper();
    if (typeof initRangeSlider === 'function') initRangeSlider();
  });
}
