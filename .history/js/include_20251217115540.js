async function loadHTML(selector, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error("Failed to load " + file);
    const html = await res.text();
    document.querySelector(selector).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

loadHTML("#header", "partials/header.html");
loadHTML("#footer", "partials/footer.html");
