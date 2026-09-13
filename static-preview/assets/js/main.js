/* Island D Cochin — interactions
   1. Sticky header state (utility bar retracts on scroll)
   2. Mobile menu
   3. Scroll reveal
   4. Stay list <-> media panel image swap (mirrors the reference site)
   5. Active nav link on scroll
   6. Booking bar date sanity
*/
(function () {
  'use strict';

  /* ---- 1. header state ---------------------------------------- */
  var body = document.body;
  var onScroll = function () {
    body.classList.toggle('scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- 2. mobile menu ----------------------------------------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- 3. scroll reveal --------------------------------------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // stagger siblings for a softer cascade
        var delay = Math.min(i, 5) * 80;
        setTimeout(function () { el.classList.add('in'); }, delay);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- 4. stay list drives the media panel -------------------- */
  var stayArt = document.getElementById('stayArt');
  var stayCaption = document.getElementById('stayCaption');
  var stayItems = document.querySelectorAll('#stayList .stack__item');

  if (stayArt && stayItems.length) {
    var setStay = function (item) {
      stayItems.forEach(function (i) { i.classList.remove('is-active'); });
      item.classList.add('is-active');
      stayArt.className = 'art art--' + item.dataset.art;
      if (stayCaption) stayCaption.textContent = item.dataset.caption;
    };
    stayItems.forEach(function (item) {
      item.addEventListener('mouseenter', function () { setStay(item); });
      item.addEventListener('focusin', function () { setStay(item); });
    });
    stayItems[0].classList.add('is-active');
  }

  /* ---- 5. active nav link ------------------------------------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- 6. booking bar ----------------------------------------- */
  var arrival = document.getElementById('f-in');
  var departure = document.getElementById('f-out');
  if (arrival && departure) {
    var today = new Date().toISOString().slice(0, 10);
    arrival.min = today;
    departure.min = today;
    arrival.addEventListener('change', function () {
      departure.min = arrival.value || today;
      if (departure.value && departure.value < arrival.value) departure.value = arrival.value;
    });
  }

  /* ---- footer year -------------------------------------------- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
