const imageBack = document.querySelector('.image-back img');

imageBack.addEventListener('transitionend', () => {
  imageBack.style.filter = 'grayscale(100%)';
});
document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.getElementById('skills');
  const skillBars = document.querySelectorAll('.progress-bar span');

  const fillBars = () => {
      const sectionTop = skillsSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      if (sectionTop < viewportHeight) {
          skillBars.forEach(skillBar => {
              const skillValue = skillBar.getAttribute('data-skill');
              setTimeout(() => {
                  skillBar.style.width = skillValue + '%';
              }, 500); 
          });
          window.removeEventListener('scroll', fillBars);
      }
  };
  window.addEventListener('scroll', fillBars);
});
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
      card.addEventListener('click', () => {
          const title = card.querySelector('h3').innerText;
          const description = card.querySelector('p').innerText;

          alert(`You clicked on: ${title}\nDescription: ${description}`);
      });
  });
});
