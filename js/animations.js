const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
    } else {
      entry.target.classList.remove('reveal-visible');
    }
  });
}, options);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});
