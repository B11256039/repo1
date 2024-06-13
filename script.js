// script.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#navbar a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
        document.querySelector(this.getAttribute('href')).classList.remove('hidden');
      });
    });
  });
  