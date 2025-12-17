// async function loadHTML(selector, file) {
//   try {
//     const res = await fetch(file);
//     if (!res.ok) throw new Error("Failed to load " + file);
//     const html = await res.text();
//     document.querySelector(selector).innerHTML = html;
//   } catch (err) {
//     console.error(err);
//   }
// }

// loadHTML("#header", "partials/header.html");
// loadHTML("#footer", "partials/footer.html");


async function loadHTML(selector, file) {
  const target = document.querySelector(selector);
  if (!target) {
    console.warn("Không tìm thấy element:", selector);
    return;
  }

  try {
    console.log("Loading:", file);
    const res = await fetch(file);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status} – ${file}`);
    }

    const html = await res.text();
    target.innerHTML = html;
    console.log("Loaded OK:", file);
  } catch (err) {
    console.error("Load HTML failed:", err.message);
  }
}
