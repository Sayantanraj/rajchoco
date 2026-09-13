/* ============================================================
   FOR CHOCO 🍫 — Tanushree Khan | 16 September
   Everything you might want to edit lives in the CONTENT block.
   ============================================================ */

/* ============================================================
   1. CONTENT — edit anything below to make it more "yours"
   ============================================================ */

const PHOTOS = [
  { src: '1.jpeg',  cap: 'my favourite person' },
  { src: '2.jpeg',  cap: 'us being us' },
  { src: '3.jpeg',  cap: 'that smile, though' },
  { src: '4.jpeg',  cap: 'caught you laughing' },
  { src: '5.jpeg',  cap: 'my whole world' },
  { src: '6.jpeg',  cap: 'no filter needed' },
  { src: '7.jpeg',  cap: 'you + me = home' },
  { src: '8.jpeg',  cap: 'best day ever' },
  { src: '9.jpeg',  cap: 'partners in crime' },
  { src: '10.jpeg', cap: 'look at us go' },
  { src: '11.jpeg', cap: 'stole my heart here' },
  { src: '12.jpeg', cap: 'my happy place' },
  { src: '13.jpeg', cap: 'forever, this' },
  { src: '14.jpeg', cap: 'she is THE moment' },
  { src: '15.jpeg', cap: 'cutest human alive' },
  { src: '16.jpeg', cap: 'and they were us 💗' }
];

const STATS = [
  { name: 'Cuteness',                        val: '100%',            pct: 100 },
  { name: 'Ability to make me smile',        val: '100%',            pct: 100 },
  { name: 'Chances of stealing my hoodie',   val: '200%',            pct: 100, over: true, note: 'sensor broke. give it back.' },
  { name: 'Patience with my nonsense',       val: '99.9%',           pct: 99.9, note: 'saint behaviour, honestly' },
  { name: 'Chocolate consumed per week',     val: '∞',               pct: 100, over: true, note: 'the name checks out 🍫' },
  { name: 'Overthinking at 2 AM',            val: '87%',             pct: 87,  note: 'go to sleep, Choco' },
  { name: 'How pretty you are',              val: 'ERROR: overflow', pct: 100, over: true, note: 'value too large to display' },
  { name: 'My love for you',                 val: 'off the charts',  pct: 100, over: true, note: 'we had to buy a bigger chart' }
];

const TIMELINE = [
  { when: '18 January 2025', icon: '📩', what: 'One little Instagram message',
    desc: 'I sent you the first message. But let the record show: you followed me first. 😌 I had no idea that one small "hi" would become the most important thing I ever typed.' },
  { when: '2 February 2025 · Saraswati Pujo', icon: '🌼', what: 'The first time I saw you, in Serampore',
    desc: 'Saraswati Pujo, and I came all the way to Serampore to finally meet you. I was nervous, you were beautiful, and the day ended far too quickly. I went home knowing something real had started.' },
  { when: 'a few months in', icon: '💔', what: 'The month we lost each other',
    desc: 'Things got hard, and we fell apart. It was a long, quiet, awful month. And then we found our way back to each other and began again, a new story, a new way of walking together, the same two hearts.' },
  { when: 'Durga Pujo 2025', icon: '🥁', what: 'Hand in hand, pandal to pandal',
    desc: 'Walking the crowded streets holding your hand, pandal after pandal, not caring how tired our feet were. One of the happiest stretches of my whole life.' },
  { when: 'Diwali 2025', icon: '🌧️', what: 'The storm that tried to break us',
    desc: 'Family problems arrived out of nowhere. I was still doing my Masters, with no job and nothing to show anyone. It felt like an impossible wall, and there were moments our hands were about to slip apart. But we did not let go. Not once.' },
  { when: 'after the storm', icon: '🤝', what: 'Stronger than ever',
    desc: 'Now we cannot go even one day without talking. The trips, the long talks, the walks, eating together, all of it grew into a love bigger than I imagined. I understand it now: without that Diwali, we would never have become this strong, this fast. Hard times come either to break a bond or to make it unbreakable. Ours chose unbreakable.' },
  { when: '2026', icon: '💼', what: 'Standing on my own feet',
    desc: 'I finally got a job. I am becoming stable, becoming someone I am proud of. And you stood beside me through every step, even when all I had to offer were promises. Thank you for staying, Choco. Thank you for believing in me.' },
  { when: '16 September 2026', icon: '🎂', what: 'Your day',
    desc: 'The day the world got its best person. I am celebrating you loudly, whether you are ready for it or not.' },
  { when: 'coming soon', icon: '♾️', what: 'The rest of our story',
    desc: 'Choco, every Pujo of my life, every success, every downfall, every little happiness, I only want to live them with you. Hand in hand, every birthday after this one, for the rest of my life. You are my everything, Choco. Tumi-i amar sob. I love you. 💗' }
];

// Keep this list at 6 so it fills exactly two rows of three on desktop.
const REASONS = [
  'You laugh at your own jokes before you finish them, and it is the cutest thing alive.',
  'Your hugs have a 100% success rate at fixing me.',
  'You steal my food AND my heart. Bold. Illegal. Effective.',
  'The way your eyes disappear when you smile properly.',
  'You believe in me louder than I believe in myself.',
  'Because it is you. That is the entire reason.'
];

const QUOTES = [
  { t: 'I love you not only for what you are, but for what I am when I am with you.', a: 'Roy Croft' },
  { t: 'In all the world, there is no heart for me like yours.', a: 'Maya Angelou' },
  { t: 'Whatever our souls are made of, yours and mine are the same.', a: 'Emily Brontë' },
  { t: 'If I know what love is, it is because of you.', a: 'Hermann Hesse' },
  { t: 'You are my sun, my moon, and all my stars.', a: 'E. E. Cummings' },
  { t: 'Life is like chocolate — and you are easily the sweetest part of mine.', a: 'me, obviously' },
  { t: 'I would find you in any lifetime, and I would pick you every single time.', a: 'yours truly' },
  { t: 'Happy birthday to the reason my heart still does that stupid little thing.', a: 'your favourite idiot' }
];

const LETTER = `Happy birthday, my Choco.

I am not great with words out loud. I get shy, I crack a joke, I change the topic. So I built you an entire website instead. That should tell you something.

You walked into my life and quietly rearranged everything in it. Suddenly my worst days had someone in them who made them survivable, and my best days had someone who made them actually mean something.

You are kind in a way where people do not even notice they are being taken care of. You are funny in a way that catches me completely off guard. And you are beautiful in a way that feels genuinely unfair to everyone else in the room.

I do not need a date on a calendar to tell you any of this. But the universe gave me one — today is the day the best person I know showed up in this world, and I am going to celebrate that loudly, every year, for as long as you will let me.

Thank you for being born. Thank you for being you. Thank you for being mine.

Now go eat some cake. You have earned it.`;

const MARQUEE = ['HAPPY BIRTHDAY CHOCO', '🍫', 'TANUSHREE KHAN', '💗', '16 SEPTEMBER', '🎂',
                 'MY FAVOURITE PERSON', '✨', 'I LOVE YOU', '🎁'];

// The No button runs away on hover/tap, changing its label each time.
// After the last label ("Last chance!") the next attempt makes it give up.
const NO_LABELS = ['No', 'Are you sure?', 'Really??', 'Think again 🥺', 'You cannot catch me',
                   'This button is shy', 'Stop it', 'Nope!', 'Give up 😌', 'Last chance!'];

const BIRTHDAY = { month: 9, day: 16 }; // 16 September

/* ============================================================
   2. TINY HELPERS
   ============================================================ */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = a => a[Math.floor(Math.random() * a.length)];
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   3. CANVAS SETUP (background sparkles + confetti)
   ============================================================ */
function fitCanvas(c) {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  c.width = innerWidth * dpr;
  c.height = innerHeight * dpr;
  c.style.width = innerWidth + 'px';
  c.style.height = innerHeight + 'px';
  const ctx = c.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return ctx;
}

/* ---- floating background bits ---- */
const fxCv = $('#fx');
let fxCtx = fitCanvas(fxCv);
const FLOATERS = ['🍫', '💗', '✨', '🤎', '🩷', '🎀', '🌸'];
let floaters = [];

function seedFloaters() {
  const n = innerWidth < 700 ? 16 : 30;
  floaters = Array.from({ length: n }, () => ({
    x: rnd(0, innerWidth),
    y: rnd(0, innerHeight),
    s: rnd(12, 30),
    vy: rnd(-0.28, -0.06),
    vx: rnd(-0.22, 0.22),
    rot: rnd(0, 6.28),
    vr: rnd(-0.012, 0.012),
    a: rnd(0.12, 0.42),
    e: pick(FLOATERS)
  }));
}
seedFloaters();

function drawFloaters() {
  fxCtx.clearRect(0, 0, innerWidth, innerHeight);
  for (const f of floaters) {
    f.x += f.vx; f.y += f.vy; f.rot += f.vr;
    if (f.y < -50) { f.y = innerHeight + 40; f.x = rnd(0, innerWidth); }
    if (f.x < -50) f.x = innerWidth + 40;
    if (f.x > innerWidth + 50) f.x = -40;
    fxCtx.save();
    fxCtx.globalAlpha = f.a;
    fxCtx.translate(f.x, f.y);
    fxCtx.rotate(f.rot);
    fxCtx.font = f.s + 'px serif';
    fxCtx.textAlign = 'center';
    fxCtx.fillText(f.e, 0, 0);
    fxCtx.restore();
  }
}

/* ---- confetti ---- */
const coCv = $('#confetti');
let coCtx = fitCanvas(coCv);
let confetti = [];
const CO_COLORS = ['#ff4d8d', '#ff8fb1', '#ffd28a', '#e8b06a', '#fff4e8', '#a9683c', '#ff2d6f'];
const CO_EMOJI = ['💗', '🍫', '🎂', '✨', '🎉', '🩷'];

function burst(x, y, n = 90) {
  if (REDUCED) n = Math.min(n, 20);
  for (let i = 0; i < n; i++) {
    const ang = rnd(0, Math.PI * 2), sp = rnd(3, 15);
    confetti.push({
      x, y,
      vx: Math.cos(ang) * sp,
      vy: Math.sin(ang) * sp - 4,
      g: rnd(0.16, 0.34),
      w: rnd(6, 13), h: rnd(9, 18),
      rot: rnd(0, 6.28), vr: rnd(-0.3, 0.3),
      col: pick(CO_COLORS),
      emo: Math.random() < 0.22 ? pick(CO_EMOJI) : null,
      life: rnd(90, 190), age: 0
    });
  }
}

function rain(ms = 3500) {
  if (REDUCED) { burst(innerWidth / 2, innerHeight / 3, 40); return; }
  const end = performance.now() + ms;
  (function drop() {
    if (performance.now() > end) return;
    for (let i = 0; i < 6; i++) {
      confetti.push({
        x: rnd(0, innerWidth), y: -20,
        vx: rnd(-1.4, 1.4), vy: rnd(1.5, 4.5),
        g: rnd(0.03, 0.09),
        w: rnd(6, 12), h: rnd(9, 17),
        rot: rnd(0, 6.28), vr: rnd(-0.2, 0.2),
        col: pick(CO_COLORS),
        emo: Math.random() < 0.28 ? pick(CO_EMOJI) : null,
        life: 400, age: 0
      });
    }
    requestAnimationFrame(drop);
  })();
}

function drawConfetti() {
  coCtx.clearRect(0, 0, innerWidth, innerHeight);
  confetti = confetti.filter(p => p.age < p.life && p.y < innerHeight + 60);
  if (confetti.length > 1400) confetti.splice(0, confetti.length - 1400);
  for (const p of confetti) {
    p.age++; p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.vx *= 0.995;
    const fade = Math.min(1, (p.life - p.age) / 40);
    coCtx.save();
    coCtx.globalAlpha = Math.max(0, fade);
    coCtx.translate(p.x, p.y);
    coCtx.rotate(p.rot);
    if (p.emo) {
      coCtx.font = (p.w + 10) + 'px serif';
      coCtx.textAlign = 'center';
      coCtx.fillText(p.emo, 0, 0);
    } else {
      coCtx.fillStyle = p.col;
      coCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    }
    coCtx.restore();
  }
}

/* ---- one shared animation loop ---- */
(function loop() {
  drawFloaters();
  drawConfetti();
  requestAnimationFrame(loop);
})();

addEventListener('resize', () => {
  fxCtx = fitCanvas(fxCv);
  coCtx = fitCanvas(coCv);
  seedFloaters();
});

/* ============================================================
   4. CUSTOM CURSOR + HEART TRAIL
   ============================================================ */
(function cursor() {
  const dot = $('#cur-dot'), ring = $('#cur-ring');
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, last = 0;

  addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px)`;
    // occasional heart trail
    if (performance.now() - last > 90 && Math.random() < 0.5) {
      last = performance.now();
      confetti.push({
        x: mx, y: my, vx: rnd(-0.6, 0.6), vy: rnd(-1.4, -0.4), g: 0.012,
        w: rnd(4, 8), h: rnd(4, 8), rot: rnd(0, 6.28), vr: rnd(-0.1, 0.1),
        col: '#ff8fb1', emo: Math.random() < 0.5 ? '💗' : null, life: 46, age: 0
      });
    }
  });

  (function follow() {
    rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(follow);
  })();

  document.addEventListener('mouseover', e => {
    const t = e.target;
    document.body.classList.toggle('hovering',
      !!(t.closest && t.closest('button,a,.pola,.flip,.cake,.qdot,.cd-cell')));
  });
})();

/* ============================================================
   5. SCROLL PROGRESS + REVEAL OBSERVER
   ============================================================ */
const bar = $('#progress');
addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
}, { passive: true });

const io = new IntersectionObserver(entries => {
  for (const en of entries) {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      if (en.target.dataset.once !== 'no') io.unobserve(en.target);
    }
  }
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

function observeAll() {
  $$('.rv,.rv-l,.rv-r,.rv-s').forEach((el, i) => {
    el.style.transitionDelay = (i % 6) * 70 + 'ms';
    io.observe(el);
  });
}

/* ============================================================
   6. BUILD THE PAGE FROM CONTENT
   ============================================================ */

/* ---- marquee ---- */
$('#marq').innerHTML = [...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE]
  .map(t => `<span>${t}</span>`).join('');

/* ---- stats ---- */
$('#stats').innerHTML = STATS.map(s => `
  <div class="stat rv ${s.over ? 'over' : ''}" data-pct="${s.pct}">
    <div class="stat-top">
      <div class="stat-name">${s.name}</div>
      <div class="stat-val">${s.val}</div>
    </div>
    <div class="stat-track"><div class="stat-fill"></div></div>
    ${s.note ? `<div class="stat-note">${s.note}</div>` : ''}
  </div>`).join('');

// fill each bar when it scrolls into view
$$('.stat').forEach(el => {
  new IntersectionObserver((es, ob) => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      setTimeout(() => { $('.stat-fill', e.target).style.width = e.target.dataset.pct + '%'; }, 200);
      ob.unobserve(e.target);
    });
  }, { threshold: 0.35 }).observe(el);
});

/* ---- photo wall ---- */
$('#wall').innerHTML = PHOTOS.map((p, i) => `
  <div class="pola-wrap rv">
    <figure class="pola" data-i="${i}">
      <div class="tape"></div>
      <div class="pola-img"><img src="${p.src}" alt="${p.cap}" loading="lazy"></div>
      <figcaption class="pola-cap">${p.cap}</figcaption>
      <div class="heart-badge">💗</div>
    </figure>
  </div>`).join('');

/* ---- timeline ---- */
$('#tl').insertAdjacentHTML('beforeend', TIMELINE.map(t => `
  <div class="tl-item rv-l">
    <div class="tl-dot">${t.icon}</div>
    <div class="tl-card">
      <div class="tl-when">${t.when}</div>
      <div class="tl-what">${t.what}</div>
      <div class="tl-desc">${t.desc}</div>
    </div>
  </div>`).join(''));

const tlEl = $('#tl'), tlLine = $('#tl-line');
addEventListener('scroll', () => {
  const r = tlEl.getBoundingClientRect();
  const p = (innerHeight * 0.6 - r.top) / r.height;
  tlLine.style.height = Math.max(0, Math.min(1, p)) * 100 + '%';
}, { passive: true });

/* ---- reasons ---- */
$('#reasons').innerHTML = REASONS.map((r, i) => `
  <div class="flip rv-s">
    <div class="flip-in">
      <div class="face face-f">
        <div>
          <div class="num">#${i + 1}</div>
          <div class="hint">tap to reveal</div>
        </div>
      </div>
      <div class="face face-b"><div>${r}</div></div>
    </div>
  </div>`).join('');

$$('.flip').forEach(f => f.addEventListener('click', () => {
  f.classList.toggle('on');
  if (f.classList.contains('on')) {
    const r = f.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 18);
    if (window.__blip) window.__blip();
  }
}));

/* ---- quotes ---- */
$('#qstage').innerHTML = QUOTES.map((q, i) => `
  <div class="q ${i === 0 ? 'on' : ''}"><div><p>“${q.t}”</p><span>— ${q.a}</span></div></div>`).join('');
$('#qdots').innerHTML = QUOTES.map((_, i) => `<div class="qdot ${i === 0 ? 'on' : ''}" data-i="${i}"></div>`).join('');

let qi = 0, qTimer;
function showQuote(n) {
  qi = (n + QUOTES.length) % QUOTES.length;
  $$('.q').forEach((el, i) => el.classList.toggle('on', i === qi));
  $$('.qdot').forEach((el, i) => el.classList.toggle('on', i === qi));
}
function autoQuote() {
  clearInterval(qTimer);
  qTimer = setInterval(() => showQuote(qi + 1), 5200);
}
$$('.qdot').forEach(d => d.addEventListener('click', () => { showQuote(+d.dataset.i); autoQuote(); }));
autoQuote();

/* ---- cake candles ---- */
$('#candles').innerHTML = Array.from({ length: 5 }, () =>
  `<div class="candle"><div class="flame"></div><div class="smoke">💨</div></div>`).join('');

observeAll();

/* ============================================================
   7. LIGHTBOX
   ============================================================ */
(function lightbox() {
  const box = $('#lightbox'), img = $('#lb-img'), cap = $('#lb-cap');
  let cur = 0;

  // only photos actually visible on this screen (mobile hides 16.jpeg)
  const shown = () => $$('.pola').filter(p => p.offsetParent).map(p => +p.dataset.i);
  function step(d) {
    const s = shown(), k = s.indexOf(cur);
    open(s[(k + d + s.length) % s.length]);
  }

  function open(i) {
    cur = i;
    img.src = PHOTOS[cur].src;
    cap.textContent = PHOTOS[cur].cap;
    box.classList.add('on');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    box.classList.remove('on');
    document.body.style.overflow = '';
  }

  $$('.pola').forEach(p => p.addEventListener('click', () => {
    open(+p.dataset.i);
    const r = p.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 26);
  }));

  $('#lb-close').addEventListener('click', close);
  $('#lb-next').addEventListener('click', e => { e.stopPropagation(); step(1); });
  $('#lb-prev').addEventListener('click', e => { e.stopPropagation(); step(-1); });
  box.addEventListener('click', e => { if (e.target === box || e.target.id === 'lb-fig') close(); });
  addEventListener('keydown', e => {
    if (!box.classList.contains('on')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });
})();

/* ============================================================
   8. COUNTDOWN
   ============================================================ */
(function countdown() {
  const D = $('#cd-d'), H = $('#cd-h'), M = $('#cd-m'), S = $('#cd-s');
  const todayBox = $('#cd-today'), grid = $('.cd-grid');
  let prev = {};

  function target() {
    const now = new Date();
    let y = now.getFullYear();
    let t = new Date(y, BIRTHDAY.month - 1, BIRTHDAY.day, 0, 0, 0);
    if (now > t) t = new Date(y + 1, BIRTHDAY.month - 1, BIRTHDAY.day, 0, 0, 0);
    return t;
  }

  function isBirthday() {
    const n = new Date();
    return n.getMonth() === BIRTHDAY.month - 1 && n.getDate() === BIRTHDAY.day;
  }

  function set(el, v, key) {
    const s = String(v).padStart(2, '0');
    if (prev[key] === s) return;
    prev[key] = s;
    el.textContent = s;
    el.classList.remove('tick');
    void el.offsetWidth;
    el.classList.add('tick');
  }

  let partied = false;
  function tick() {
    if (isBirthday()) {
      grid.style.display = 'none';
      todayBox.classList.add('show');
      if (!partied) { partied = true; setTimeout(() => rain(5000), 600); }
      return;
    }
    const diff = target() - new Date();
    const d = Math.floor(diff / 864e5);
    const h = Math.floor(diff / 36e5) % 24;
    const m = Math.floor(diff / 6e4) % 60;
    const s = Math.floor(diff / 1e3) % 60;
    set(D, d, 'd'); set(H, h, 'h'); set(M, m, 'm'); set(S, s, 's');
  }
  tick();
  setInterval(tick, 1000);
})();

/* ============================================================
   9. TYPEWRITER LETTER
   ============================================================ */
(function typewriter() {
  const box = $('#letter-body');
  let started = false, done = false, i = 0;

  function render() {
    box.innerHTML = LETTER.slice(0, i).replace(/</g, '&lt;') +
      (done ? '' : '<span class="caret"></span>');
  }
  function step() {
    if (done) return;
    i++;
    render();
    if (i >= LETTER.length) { done = true; render(); return; }
    const ch = LETTER[i - 1];
    setTimeout(step, ch === '\n' ? 220 : ch === '.' ? 260 : ch === ',' ? 120 : rnd(16, 34));
  }
  function skip() {
    if (!started || done) return;
    done = true; i = LETTER.length; render();
  }

  render();
  new IntersectionObserver((es, ob) => {
    es.forEach(e => {
      if (!e.isIntersecting || started) return;
      started = true;
      if (REDUCED) { skip(); } else { setTimeout(step, 400); }
      ob.unobserve(e.target);
    });
  }, { threshold: 0.25 }).observe($('#letter'));

  $('#letter').addEventListener('click', skip);
})();

/* ============================================================
   10. THE "DO YOU LOVE ME?" QUESTION
   ============================================================ */
(function question() {
  const no = $('#btn-no'), yes = $('#btn-yes'), res = $('#ask-result'), zone = $('.ask');
  let tries = 0, scale = 1;

  function flee() {
    tries++;
    if (tries >= NO_LABELS.length) {
      no.style.display = 'none';
      res.textContent = 'The "No" button gave up. It knows the truth. 😌';
      res.classList.add('show');
      return;
    }
    no.textContent = NO_LABELS[tries];
    const r = zone.getBoundingClientRect();
    const bw = no.offsetWidth, bh = no.offsetHeight;
    const x = rnd(-r.width / 2 + bw / 2, r.width / 2 - bw / 2);
    const y = rnd(-60, r.height - bh - 120);
    scale = Math.max(0.45, scale - 0.07);
    no.style.position = 'absolute';
    no.style.left = '50%';
    no.style.top = '50%';
    no.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale}) rotate(${rnd(-14, 14)}deg)`;
    yes.style.transform = `scale(${1 + tries * 0.075})`;
  }

  no.addEventListener('mouseenter', flee);
  no.addEventListener('click', e => { e.preventDefault(); flee(); });
  no.addEventListener('touchstart', e => { e.preventDefault(); flee(); }, { passive: false });

  yes.addEventListener('click', () => {
    const r = yes.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 150);
    rain(2600);
    no.style.display = 'none';
    res.innerHTML = 'I KNEW IT!! 💗<br>Okay now I am smiling like an idiot. Thank you, Choco.';
    res.classList.add('show');
    if (window.__fanfare) window.__fanfare();
  });
})();

/* ============================================================
   11. CAKE + BALLOONS
   ============================================================ */
function launchBalloons(n = 26) {
  if (REDUCED) return;
  const box = $('#balloons');
  const cols = ['#ff4d8d', '#ff8fb1', '#ffd28a', '#e8b06a', '#a9683c', '#ffd7e4', '#fff4e8'];
  for (let i = 0; i < n; i++) {
    const dur = rnd(6, 11), delay = rnd(0, 3);
    const sc = rnd(0.65, 1.4), c = pick(cols);

    const b = document.createElement('div');      // rises
    b.className = 'balloon';
    b.style.left = rnd(2, 94) + 'vw';
    b.style.animationDuration = dur + 's';
    b.style.animationDelay = delay + 's';

    const body = document.createElement('div');   // sways
    body.className = 'b-body';
    body.style.width = 52 * sc + 'px';
    body.style.height = 66 * sc + 'px';
    body.style.background = `radial-gradient(circle at 32% 28%, #fff8, ${c} 46%, ${c})`;
    body.style.setProperty('--sway', rnd(8, 22) + 'px');
    body.style.animationDuration = rnd(2.4, 4) + 's';
    body.style.animationDelay = -rnd(0, 4) + 's';
    b.appendChild(body);
    box.appendChild(b);

    // remove only once it has fully floated off the top
    const kill = () => b.remove();
    b.addEventListener('animationend', e => { if (e.animationName === 'rise') kill(); });
    setTimeout(kill, (dur + delay + 1) * 1000);   // backup, e.g. if the tab was hidden
  }
}

(function cake() {
  const cakeEl = $('#cake'), hint = $('#cake-hint'), wish = $('#wish');
  const bodyEl = $('#cake-body'), knife = $('#knife'), cutLine = $('#cut-line');

  // 'candles' -> blow them out | 'cut' -> slice it | 'done' -> tap to start over
  let stage = 'candles', busy = false;

  /* ---------- stage 1: blow out the candles ---------- */
  function blow() {
    busy = true;
    hint.textContent = '🌬️ blowing...';
    const candles = $$('.candle');
    candles.forEach((c, i) => setTimeout(() => {
      c.classList.add('out');
      if (window.__puff) window.__puff();
      if (i !== candles.length - 1) return;
      setTimeout(() => {
        wish.textContent = 'Wish granted. Obviously. 🎂✨';
        wish.classList.add('show');
        const r = cakeEl.getBoundingClientRect();
        burst(r.left + r.width / 2, r.top, 180);
        rain(4200);
        launchBalloons(30);
        if (window.__fanfare) window.__fanfare();

        // hand over to the knife
        setTimeout(() => {
          hint.textContent = '🔪 now cut the cake!';
          knife.classList.add('show');
          stage = 'cut';
          busy = false;
        }, 1100);
      }, 450);
    }, 260 * i));
  }

  /* ---------- stage 2: cut it ---------- */
  function cut() {
    busy = true;
    hint.textContent = '🔪 cutting...';

    // knife comes down + a bright slit runs through the cake
    knife.classList.remove('show');
    knife.classList.add('chop');
    cutLine.style.top = bodyEl.offsetTop + 'px';
    cutLine.style.setProperty('--cut-h', bodyEl.offsetHeight + 'px');
    cutLine.classList.add('go');

    // three clipped copies: left half | slice | right half
    setTimeout(() => {
      if (window.__puff) window.__puff();
      ['piece-l', 'piece-s', 'piece-r'].forEach(cls => {
        const p = bodyEl.cloneNode(true);
        p.removeAttribute('id');
        p.className = 'piece ' + cls;
        p.style.top = bodyEl.offsetTop + 'px';
        cakeEl.appendChild(p);
      });
      requestAnimationFrame(() => cakeEl.classList.add('cut'));

      // then the slice slides out onto its own plate
      setTimeout(() => {
        cakeEl.classList.add('served');
        const r = cakeEl.getBoundingClientRect();
        burst(r.left + r.width * 0.72, r.top + r.height * 0.55, 110);
        launchBalloons(12);
        if (window.__fanfare) window.__fanfare();
        wish.innerHTML = '🍰 First slice is yours.<br>(I get the second one. And the third.)';
        hint.textContent = '🎂 tap again to start over';
        stage = 'done';
        busy = false;
      }, 620);
    }, 430);
  }

  /* ---------- stage 3: put it all back ---------- */
  function reset() {
    cakeEl.classList.remove('cut', 'served');
    $$('.piece', cakeEl).forEach(p => p.remove());
    knife.classList.remove('chop', 'show');
    cutLine.classList.remove('go');
    $$('.candle').forEach(c => c.classList.remove('out'));
    wish.classList.remove('show');
    hint.textContent = '🔥 relit! blow them out again';
    stage = 'candles';
  }

  cakeEl.addEventListener('click', () => {
    if (busy) return;
    if (stage === 'candles') blow();
    else if (stage === 'cut') cut();
    else reset();
  });
})();

/* ============================================================
   12. MUSIC — plays 17.mp3 (keep it in the same folder)
   The little sound effects (card flips, candle puffs, fanfare)
   are still generated with WebAudio, so they need no files.
   ============================================================ */
(function music() {
  const SONG_FILE = '17.mp3';
  const SONG_VOLUME = 0.8;               // 0 = silent, 1 = full

  const song = new Audio(SONG_FILE);
  song.loop = true;
  song.preload = 'auto';
  song.volume = 0;

  const btn = $('#btn-music');
  let fadeTimer = null, wanted = false;

  function fadeTo(target, ms, done) {
    clearInterval(fadeTimer);
    const from = song.volume, steps = Math.max(1, Math.round(ms / 40));
    let n = 0;
    fadeTimer = setInterval(() => {
      n++;
      song.volume = Math.min(1, Math.max(0, from + (target - from) * (n / steps)));
      if (n >= steps) { clearInterval(fadeTimer); if (done) done(); }
    }, 40);
  }

  function setBtn(on) {
    btn.classList.toggle('playing', on);
    btn.textContent = on ? '🔊' : '🎵';
  }

  function start() {
    wanted = true;
    setBtn(true);
    const p = song.play();
    if (p && p.catch) p.catch(() => { wanted = false; setBtn(false); });
    fadeTo(SONG_VOLUME, 1500);
  }

  function stop() {
    wanted = false;
    setBtn(false);
    // fade out, then pause (resumes from the same spot next time)
    fadeTo(0, 500, () => { if (!wanted) song.pause(); });
  }

  song.addEventListener('error', () => { wanted = false; setBtn(false); });

  btn.addEventListener('click', () => wanted ? stop() : start());
  window.__startMusic = start;

  /* ---------- small sound effects ---------- */
  let ctx = null, sfx = null;

  function ensure() {
    if (ctx) return ctx;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    const soft = ctx.createBiquadFilter();
    soft.type = 'lowpass';
    soft.frequency.value = 4200;
    soft.connect(ctx.destination);
    sfx = ctx.createGain();
    sfx.gain.value = 0.25;
    sfx.connect(soft);
    return ctx;
  }

  function note(freq, at, dur, vol = 1) {
    const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'triangle'; o.frequency.value = freq;
    o2.type = 'sine'; o2.frequency.value = freq * 2.005;
    const g2 = ctx.createGain(); g2.gain.value = 0.18;
    o2.connect(g2).connect(g);
    o.connect(g); g.connect(sfx);
    const end = at + dur;
    g.gain.setValueAtTime(0, at);
    g.gain.linearRampToValueAtTime(0.9 * vol, at + 0.02);
    g.gain.exponentialRampToValueAtTime(0.28 * vol, at + dur * 0.5);
    g.gain.exponentialRampToValueAtTime(0.0008, end);
    o.start(at); o2.start(at); o.stop(end + 0.05); o2.stop(end + 0.05);
  }

  window.__blip = () => {
    ensure();
    note(pick([523.25, 659.25, 783.99]), ctx.currentTime, 0.16, 0.5);
  };
  window.__puff = () => {
    ensure();
    const b = ctx.createBuffer(1, 4410, 44100), d = b.getChannelData(0);
    for (let i = 0; i < 4410; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / 4410);
    const s = ctx.createBufferSource(); s.buffer = b;
    const g = ctx.createGain(); g.gain.value = 0.5;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900;
    s.connect(f).connect(g).connect(sfx); s.start();
  };
  window.__fanfare = () => {
    ensure();
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => note(f, ctx.currentTime + i * 0.09, 0.42, 0.6));
  };
})();

/* ============================================================
   13. CONFETTI BUTTON
   ============================================================ */
$('#btn-hearts').addEventListener('click', e => {
  const r = e.currentTarget.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top, 120);
  rain(1800);
  launchBalloons(10);
});

/* ============================================================
   14. HERO TITLE LETTER ANIMATION
   ============================================================ */
function animateHero() {
  const lines = $$('.hero-title .ln');
  let k = 0;
  lines.forEach(ln => {
    const txt = ln.dataset.text;
    ln.innerHTML = [...txt].map(c =>
      `<span class="ch">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
    $$('.ch', ln).forEach(ch => {
      ch.style.animationDelay = (k++ * 55 + 350) + 'ms';
      ch.classList.add('in');
    });
  });
}

/* ============================================================
   15. PRELOADER → GATE → SITE
   ============================================================ */
(function boot() {
  const barEl = $('#pl-bar'), txt = $('#pl-txt'), pre = $('#preloader');
  const msgs = ['melting some chocolate...', 'wrapping your gift...', 'lighting the candles...',
                'hiding the confetti...', 'almost ready, Choco...'];
  let loaded = 0, pct = 0;
  const total = PHOTOS.length;

  PHOTOS.forEach(p => {
    const im = new Image();
    im.onload = im.onerror = () => loaded++;
    im.src = p.src;
  });

  let mi = 0;
  const msgTimer = setInterval(() => { txt.textContent = msgs[++mi % msgs.length]; }, 900);

  const t = setInterval(() => {
    const real = (loaded / total) * 100;
    pct = Math.min(real, pct + rnd(1.5, 6));
    if (loaded === total) pct = Math.min(100, pct + 8);
    barEl.style.width = pct + '%';
    if (pct >= 100) {
      clearInterval(t); clearInterval(msgTimer);
      txt.textContent = 'ready 💗';
      setTimeout(() => pre.classList.add('gone'), 500);
    }
  }, 90);

  // safety net: never trap her behind the preloader
  setTimeout(() => {
    clearInterval(t); clearInterval(msgTimer);
    barEl.style.width = '100%';
    pre.classList.add('gone');
  }, 9000);
})();

(function gate() {
  const gateEl = $('#gate'), gift = $('#gift');
  let opened = false;

  function openIt() {
    if (opened) return;
    opened = true;
    gift.classList.add('pop');
    const r = gift.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 220);
    rain(4000);
    launchBalloons(22);
    if (window.__startMusic) window.__startMusic();

    setTimeout(() => {
      gateEl.classList.add('open');
      document.body.classList.remove('locked');
      $('#site').classList.add('live');
      animateHero();
    }, 700);
  }

  gift.addEventListener('click', openIt);
  gateEl.addEventListener('click', openIt);
})();
