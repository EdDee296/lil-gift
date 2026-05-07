const KEY = 'wedding_rsvp_responses_d2';

const I18N = {
  en: {
    heroInvitation: 'You are invited to the wedding of',
    heroDate: 'August 15, 2026 · Edmonton, AB',
    welcomeTitle: 'Together with our loved ones,<br>we invite you to<br><em>celebrate with us</em>',
    welcomeText:
      "Your presence at our wedding would fill our hearts with joy. Please take a moment to let us know if you will be joining us. We'd love to plan the perfect evening with you in mind.",
    storyTitle: 'Our Story...',
    storyDate1: '04-20-2018',
    storyText1: 'We met at the bank<br>& fell in love',
    storyDate2: '08-2020',
    storyText2: 'We started<br>living together',
    storyDate3: '04-01-2021',
    storyText3: 'We welcomed<br>our first baby ♡',
    storyDate4: '08-05-2023',
    storyText4: 'Our traditional<br>wedding in Ivory Coast',
    storyDate5: '10-27-2023',
    storyText5: 'We moved to Canada<br>to start a new journey',
    storyDate6: '07-23-2024',
    storyText6: 'Our second baby<br>born in Canada ♡',
    proposalTitle: 'A New Chapter <em>Together</em>',
    proposalDesc: 'Though our journey began years ago, this day marks a beautiful new chapter in our lives.',
    proposalDate: 'April 16, 2026',
    proposalVideoLabel: 'The Proposal · April 16, 2026',
    detail1Title: 'Ceremony',
    detail1Text: 'Saturday, August 15th<br>1:00 PM<br>Saint Joachim Catholic Church',
    detail2Title: 'Reception',
    detail2Text: 'Gold Bar Community Hall<br>6:00 PM<br>4620 105 Ave NW, Edmonton',
    detail3Title: 'Kindly Reply By',
    detail3Text: 'June 30, 2026',
    formTitle: 'Will You Join Us?',
    formSubtitle: 'Please fill in your details below and let us know by June 30th.',
    labelFirstName: 'First Name',
    labelLastName: 'Last Name',
    labelResponse: 'Your Response',
    labelYes: 'Attending',
    labelNo: 'Regretfully declining',
    labelGuests: 'Number of Guests',
    guestsNote: 'Please include only yourself, your spouse, and your children.',
    labelMessage: 'Message to the couple (optional)',
    submitBtn: 'Send My RSVP',
    submitting: 'Sending...',
    emptyText: 'No responses received yet',
    selectAttendance: 'Please select your attendance.',
    fillName: 'Please enter your first and last name.',
    toastSaved: 'Your response has been saved',
    toastError: 'Something went wrong. Please try again.',
    attendingShort: 'Attending',
    declinedShort: 'Declined',
    guestsShort: 'guest(s)',
    countdownLabel: 'Days Until Our Wedding',
  },
  fr: {
    heroInvitation: 'Vous êtes invités au mariage de',
    heroDate: '15 août 2026 · Edmonton, AB',
    welcomeTitle: 'Avec nos proches,<br>nous vous invitons à<br><em>célébrer avec nous</em>',
    welcomeText: 'Votre présence à notre mariage nous ferait très plaisir. Merci de nous dire si vous serez des nôtres afin de préparer cette belle journée avec vous.',
    storyTitle: 'Notre Histoire...',
    storyDate1: '20-04-2018',
    storyText1: 'Nous nous sommes rencontrés<br>à la banque',
    storyDate2: '08-2020',
    storyText2: 'Nous avons commencé<br>à vivre ensemble',
    storyDate3: '01-04-2021',
    storyText3: 'Nous avons accueilli<br>notre premier bébé ♡',
    storyDate4: '05-08-2023',
    storyText4: 'Notre mariage traditionnel<br>en Côte d\'Ivoire',
    storyDate5: '27-10-2023',
    storyText5: 'Nous avons déménagé au Canada<br>pour une nouvelle aventure',
    storyDate6: '23-07-2024',
    storyText6: 'Notre deuxième bébé<br>né au Canada ♡',
    proposalTitle: 'Un Nouveau Chapitre <em>à Deux</em>',
    proposalDesc: 'Notre histoire a commencé il y a des années, et aujourd\'hui nous célébrons un nouveau chapitre de notre vie ensemble.',
    proposalDate: '16 avril 2026',
    proposalVideoLabel: 'La Demande · 16 avril 2026',
    detail1Title: 'Cérémonie',
    detail1Text: 'Samedi 15 août<br>13h00<br>Église catholique Saint-Joachim',
    detail2Title: 'Réception',
    detail2Text: 'Gold Bar Community Hall<br>18h00<br>4620 105 Ave NW, Edmonton',
    detail3Title: 'Répondez avant',
    detail3Text: '30 juin 2026',
    formTitle: 'Serez-vous des nôtres ?',
    formSubtitle: 'Merci de remplir vos informations et de répondre avant le 30 juin.',
    labelFirstName: 'Prénom',
    labelLastName: 'Nom',
    labelResponse: 'Votre réponse',
    labelYes: 'Présent(e)',
    labelNo: 'Ne pourra pas venir',
    labelGuests: "Nombre d'invités",
    guestsNote: 'Merci d\'inclure seulement vous, votre conjoint(e) et vos enfants.',
    labelMessage: 'Message pour les mariés (optionnel)',
    submitBtn: 'Envoyer ma réponse',
    submitting: 'Envoi en cours...',
    emptyText: 'Aucune réponse reçue pour le moment',
    selectAttendance: 'Veuillez sélectionner votre réponse.',
    fillName: 'Veuillez entrer votre prénom et nom.',
    toastSaved: 'Votre réponse a été enregistrée',
    toastError: 'Une erreur est survenue. Veuillez réessayer.',
    attendingShort: 'Présent(e)',
    declinedShort: 'Absent(e)',
    guestsShort: 'invite(s)',
    countdownLabel: 'Jours avant notre mariage',
  }
};

let currentLang = localStorage.getItem('site_lang') || 'en';

const storageAdapter = {
  async get() {
    if (window.storage && typeof window.storage.get === 'function') {
      try {
        const r = await window.storage.get(KEY, true);
        return r ? JSON.parse(r.value) : [];
      } catch {
        return [];
      }
    }
    try {
      return JSON.parse(localStorage.getItem(KEY) || '[]');
    } catch {
      return [];
    }
  },
  async set(data) {
    if (window.storage && typeof window.storage.set === 'function') {
      try {
        await window.storage.set(KEY, JSON.stringify(data), true);
        return;
      } catch {}
    }
    localStorage.setItem(KEY, JSON.stringify(data));
  }
};

function byId(id) {
  return document.getElementById(id);
}

// ── FIX 1: Show/hide guests field based on attendance ──────────────────────
function initAttendanceToggle() {
  const guestsGroup = byId('guests').closest('.fgroup');

  function updateGuestsVisibility() {
    const attendance = document.querySelector('input[name="attending"]:checked');
    if (!attendance || attendance.value === 'yes') {
      guestsGroup.style.display = '';
    } else {
      guestsGroup.style.display = 'none';
    }
  }

  document.querySelectorAll('input[name="attending"]').forEach(radio => {
    radio.addEventListener('change', updateGuestsVisibility);
  });

  // Run once on init in case a value is already selected
  updateGuestsVisibility();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  document.documentElement.lang = lang;

  const t = I18N[lang];

  byId('heroInvitation').innerHTML  = t.heroInvitation;
  byId('heroDate').textContent      = t.heroDate;
  byId('welcomeTitle').innerHTML    = t.welcomeTitle;
  byId('welcomeText').textContent   = t.welcomeText;

  byId('storyTitle').textContent    = t.storyTitle;
  byId('storyDate1').textContent    = t.storyDate1;
  byId('storyText1').innerHTML      = t.storyText1;
  byId('storyDate2').textContent    = t.storyDate2;
  byId('storyText2').innerHTML      = t.storyText2;
  byId('storyDate3').textContent    = t.storyDate3;
  byId('storyText3').innerHTML      = t.storyText3;
  byId('storyDate4').textContent    = t.storyDate4;
  byId('storyText4').innerHTML      = t.storyText4;
  byId('storyDate5').textContent    = t.storyDate5;
  byId('storyText5').innerHTML      = t.storyText5;
  byId('storyDate6').textContent    = t.storyDate6;
  byId('storyText6').innerHTML      = t.storyText6;
  byId('countdownLabel').textContent = t.countdownLabel;
  byId('proposalTitle').innerHTML   = t.proposalTitle;
  byId('proposalDate').textContent  = t.proposalDate;
  byId('proposalDesc').textContent  = t.proposalDesc;
  byId('proposalVideoLabel').textContent = t.proposalVideoLabel;

  byId('detail1Title').textContent  = t.detail1Title;
  byId('detail1Text').innerHTML     = t.detail1Text;
  byId('detail2Title').textContent  = t.detail2Title;
  byId('detail2Text').innerHTML     = t.detail2Text;
  byId('detail3Title').textContent  = t.detail3Title;
  byId('detail3Text').textContent   = t.detail3Text;

  byId('formTitle').textContent     = t.formTitle;
  byId('formSubtitle').textContent  = t.formSubtitle;
  byId('labelFirstName').textContent = t.labelFirstName;
  byId('labelLastName').textContent  = t.labelLastName;
  byId('labelResponse').textContent  = t.labelResponse;
  byId('labelYes').innerHTML = `<span class="card-icon">♡</span>${t.labelYes}`;
  byId('labelNo').innerHTML  = `<span class="card-icon">○</span>${t.labelNo}`;
  byId('labelGuests').textContent   = t.labelGuests;
  byId('guestsNote').textContent    = t.guestsNote;
  byId('labelMessage').textContent  = t.labelMessage;
  byId('submitBtn').textContent     = t.submitBtn;

  byId('toast').textContent         = `${t.toastSaved} ♡`;

  byId('firstName').placeholder = t.labelFirstName;
  byId('lastName').placeholder  = t.labelLastName;
  byId('message').placeholder   = lang === 'fr' ? 'Ecrivez un petit mot...' : 'Write a little note...';

  byId('btnLangEn').classList.toggle('active', lang === 'en');
  byId('btnLangFr').classList.toggle('active', lang === 'fr');
}

function formatDate(lang) {
  return new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  });
}

function showToast(message, isError = false) {
  const toast = byId('toast');
  toast.textContent = message;
  toast.style.background = isError ? '#b44' : '';
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
    toast.style.background = '';
  }, 4000);
}

async function handleSubmit(event) {
  event.preventDefault();

  const t = I18N[currentLang];

  // ── FIX 2: Required field validation ──────────────────────────────────────
  const firstName = byId('firstName').value.trim();
  const lastName  = byId('lastName').value.trim();
  if (!firstName || !lastName) {
    alert(t.fillName);
    return;
  }

  const attendance = document.querySelector('input[name="attending"]:checked');
  if (!attendance) {
    alert(t.selectAttendance);
    return;
  }

  const isAttending = attendance.value === 'yes';

  const entry = {
    firstName,
    lastName,
    attending: attendance.value,
    guests:    isAttending ? byId('guests').value : '0',
    message:   byId('message').value.trim(),
    date:      formatDate(currentLang)
  };

  const GOOGLE_FORM_ACTION =
    'https://docs.google.com/forms/d/e/1FAIpQLSdFpXHQK07gGkm22e73pozzxsWsNC4yOu5jqOVQu2A-t21TEg/formResponse';

  const GOOGLE_FORM_FIELDS = {
    firstName: 'entry.399436775',
    lastName:  'entry.384421477',
    attending: 'entry.1966818896',
    guests:    'entry.728414078',
    message:   'entry.958339791'
  };

  // ── FIX 3: Disable button while sending ───────────────────────────────────
  const btn = byId('submitBtn');
  btn.disabled = true;
  btn.textContent = t.submitting;
  btn.style.opacity = '0.65';
  btn.style.cursor = 'not-allowed';

  const formData = new FormData();
  formData.append(GOOGLE_FORM_FIELDS.firstName, entry.firstName);
  formData.append(GOOGLE_FORM_FIELDS.lastName,  entry.lastName);
  formData.append(GOOGLE_FORM_FIELDS.attending, isAttending ? 'Yes' : 'No');
  formData.append(GOOGLE_FORM_FIELDS.guests,    entry.guests);
  formData.append(GOOGLE_FORM_FIELDS.message,   entry.message);

  // ── FIX 4: Network error handling ─────────────────────────────────────────
  try {
    await fetch(GOOGLE_FORM_ACTION, {
      method: 'POST',
      mode:   'no-cors',
      body:   formData
    });

    showToast(`${t.toastSaved} ♡`);
    byId('rsvpForm').reset();

    // Re-hide guests field after reset (reset clears radio selection)
    const guestsGroup = byId('guests').closest('.fgroup');
    guestsGroup.style.display = '';

  } catch (err) {
    console.error('RSVP submission failed:', err);
    showToast(t.toastError, true);
  } finally {
    // Always re-enable the button
    btn.disabled = false;
    btn.textContent = t.submitBtn;
    btn.style.opacity = '';
    btn.style.cursor = '';
  }
}

function initLanguageButtons() {
  byId('btnLangEn').addEventListener('click', () => { setLanguage('en'); });
  byId('btnLangFr').addEventListener('click', () => { setLanguage('fr'); });
}

function initProposalVideo() {
  const wrap  = document.getElementById('proposalVideoWrap');
  const video = document.getElementById('proposalVideo');
  const btn   = document.getElementById('proposalPlayBtn');
  if (!wrap || !video || !btn) return;

  video.removeAttribute('controls');
  video.loop   = true;
  video.volume = 0.5;

  function togglePlay() {
    if (video.paused) {
      video.play();
      btn.classList.add('hidden');
      wrap.classList.remove('is-paused');
    } else {
      video.pause();
      btn.classList.remove('hidden');
      wrap.classList.add('is-paused');
    }
  }

  wrap.addEventListener('click', togglePlay);
}

function updateCountdown() {
  const weddingDate = new Date('2026-08-15T00:00:00');
  const today = new Date();

  weddingDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = weddingDate - today;
  const diffDays = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);

  byId('countdownDays').textContent = diffDays;
}

async function init() {
  byId('rsvpForm').addEventListener('submit', handleSubmit);
  initLanguageButtons();
  initProposalVideo();
  initAttendanceToggle(); // FIX 1
  setLanguage(currentLang);
  updateCountdown();
  setTimeout(() => {
    const hint = byId('langHint');
    if (hint) hint.style.display = 'none';
  }, 6000);
}

init();