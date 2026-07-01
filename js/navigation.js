/**
 * KAYS Media Creatives v2.0
 * Navigation Module
 */

(function() {
  'use strict';

  // DOM Elements
  const header = document.getElementById('siteHeader');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileClose = document.querySelector('.mobile-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  // Header scroll effect
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Mobile menu open
  function openMobileMenu() {
    mobileNav.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
  }

  // Mobile menu close
  function closeMobileMenu() {
    mobileNav.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  }

  // Event listeners
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }
  
  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }
  
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // Initialize
  handleScroll();
})();