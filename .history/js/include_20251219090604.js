// async function includeHTML(selector, url) {
//   const el = document.querySelector(selector);
//   if (!el) return;

//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`Cannot load ${url}`);
//     el.innerHTML = await res.text();
//   } catch (err) {
//     console.error(err);
//   }
// }

// async function includeHTML(selector, url) {
//   const el = document.querySelector(selector);
//   if (!el) return;

//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`Cannot load ${url}`);
//     el.innerHTML = await res.text();

//     // 🔥 BẮT BUỘC CHO AOS
//     if (window.AOS) {
//       AOS.refreshHard();
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }

async function includeHTML(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Cannot load ${url}`);
    el.innerHTML = await res.text();

    // 🔥 RE-INIT sau khi DOM được inject
    initAfterInclude();
  } catch (err) {
    console.error(err);
  }
}

function initAfterInclude() {
  // AOS
  if (window.AOS) {
    AOS.refreshHard();
  }

  // Flowbite (QUAN TRỌNG)
  if (window.initFlowbite) {
    initFlowbite();
  }

  // ✅ Swiper
  if (window.Swiper) {
    initTeamSwiper();
  }
}
