
  const images = document.querySelectorAll('#frame img');
  const buttons = document.querySelectorAll('.btn');
  const caption = document.getElementById('caption');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);

      images.forEach(img => { img.classList.remove('active'); img.style.opacity = '0'; });
      images[idx].classList.add('active');
      images[idx].style.opacity = '1';
      caption.textContent = images[idx].dataset.caption;

      buttons.forEach(b => {
        b.classList.remove('active');
        b.style.background = '#28AD56';
        b.style.color = '#ffffff';
      });
      btn.classList.add('active');
      btn.style.background = '#28AD56';
      btn.style.color = '#ffffff';
    });

    btn.addEventListener('mouseenter', () => {
      if (!btn.classList.contains('active')) btn.style.color = '#28AD56';
    });
    btn.addEventListener('mouseleave', () => {
      if (!btn.classList.contains('active')) btn.style.color = '#28AD56';
    });
  });
