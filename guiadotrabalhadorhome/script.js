document.querySelectorAll('.period').forEach(period => {
  period.addEventListener('mouseenter', () => {
    const box = period.querySelector('.box');
    box.textContent = period.getAttribute('data-info');
  });
});
