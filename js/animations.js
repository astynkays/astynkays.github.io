/**
 * KAYS Media Creatives v2.0
 * Animation Module
 */

(function() {
  'use strict';

  // Intersection Observer for reveal animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  // Observe all reveal elements
  function initRevealAnimations() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Animated counters
  function animateCounter(element) {
    const target = parseInt(element.dataset.count, 10);
    const suffix = element.dataset.suffix || '';
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);
      
      element.textContent = current + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target + suffix;
      }
    }
    
    requestAnimationFrame(update);
  }

  // Counter observer
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  function initCounters() {
    document.querySelectorAll('.stat-number[data-count]').forEach(counter => {
      counterObserver.observe(counter);
    });
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    initRevealAnimations();
    initCounters();
  });
})();