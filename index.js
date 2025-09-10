  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelectorAll('.navbar a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
