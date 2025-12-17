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


async function includeHTML(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Cannot load ${url}`);
    el.innerHTML = await res.text();

    // 🔥 BẮT BUỘC CHO AOS
    if (window.AOS) {
      AOS.refreshHard();
    }
  } catch (err) {
    console.error(err);
  }
}
