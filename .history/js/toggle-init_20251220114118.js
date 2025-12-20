// js/toggle-init.js
function toggleSeoContent() {
  const content = document.getElementById('seo-content');
  if (!content) return;

  const gradient = document.getElementById('seo-gradient');
  const btnText = document.getElementById('seo-btn-text');
  const btnIcon = document.getElementById('seo-btn-icon');

  if (content.classList.contains('max-h-24')) {
    content.classList.replace('max-h-24', 'max-h-[1000px]');
    gradient?.classList.add('hidden');
    btnText.textContent = 'Thu gọn';
    btnIcon.classList.replace('fa-chevron-down', 'fa-chevron-up');
  } else {
    content.classList.replace('max-h-[1000px]', 'max-h-24');
    gradient?.classList.remove('hidden');
    btnText.textContent = 'Xem thêm';
    btnIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');
  }
}
