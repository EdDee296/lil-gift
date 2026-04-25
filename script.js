const KEY = 'wedding_rsvp_responses_d2';

const I18N = {
  en: {
    heroInvitation: 'You are invited to the wedding of',
    heroDate: 'June 14, 2025 · Paris',
    welcomeTitle: 'Together with our loved ones,<br>we invite you to<br><em>celebrate with us</em>',
    welcomeText:
      "Your presence at our wedding would fill our hearts with joy. Please take a moment to let us know if you will be joining us. We'd love to plan the perfect evening with you in mind.",
    storyTitle: 'Our Story...',
    storyDate1: '10.07.2017',
    storyText1: 'We met & fell in love',
    storyDate2: '07.07.2018',
    storyText2: 'We adventured...<br>with a lot of fishing',
    storyDate3: '12.21.2019',
    storyText3: 'We proclaimed<br>our love together!',
    storyDate4: '08.24.2020',
    storyText4: 'We moved<br>& started a new chapter',
    storyDate5: '01.24.2023',
    storyText5: "WE'RE<br>ENGAGED!",
    detail1Title: 'Ceremony',
    detail1Text: 'Saturday, June 14th<br>5:00 in the evening',
    detail2Title: 'Reception',
    detail2Text: 'Dinner & Dancing<br>7:00 PM onwards',
    detail3Title: 'Kindly Reply By',
    detail3Text: '15th May, 2025',
    formTitle: 'Will You Join Us?',
    formSubtitle: 'Please fill in your details below and let us know by May 15th.',
    labelFirstName: 'First Name',
    labelLastName: 'Last Name',
    labelEmail: 'Email',
    labelResponse: 'Your Response',
    labelYes: 'Attending',
    labelNo: 'Regretfully declining',
    labelGuests: 'Number of Guests',
    opt1: '1 - just me',
    opt2: '2 people',
    opt3: '3 people',
    opt4: '4 people',
    labelDietary: 'Dietary Requirements',
    labelMessage: 'Message to the couple (optional)',
    submitBtn: 'Send My RSVP',
    adminHeader: 'Guest Responses',
    totalLabel: 'Total',
    attendingLabel: 'Attending',
    declinedLabel: 'Declined',
    totalGuestsLabel: 'Total Guests',
    emptyText: 'No responses received yet',
    selectAttendance: 'Please select your attendance.',
    toastSaved: 'Your response has been saved',
    photoLabel: '+ Set hero photo',
    photoSet: 'Photo set',
    attendingShort: 'Attending',
    declinedShort: 'Declined',
    guestsShort: 'guest(s)'
  },
  fr: {
    heroInvitation: 'Vous etes invites au mariage de',
    heroDate: '14 juin 2025 · Paris',
    welcomeTitle: 'Ensemble avec nos proches,<br>nous vous invitons a<br><em>celebrer avec nous</em>',
    welcomeText:
      'Votre presence a notre mariage nous remplirait de joie. Merci de nous dire si vous serez des notres afin de preparer au mieux cette soiree.',
    storyTitle: 'Notre Histoire...',
    storyDate1: '10.07.2017',
    storyText1: 'Nous nous sommes rencontres<br>et tombes amoureux',
    storyDate2: '07.07.2018',
    storyText2: 'On a vecu des aventures...<br>et beaucoup de peche',
    storyDate3: '12.21.2019',
    storyText3: 'Nous avons proclame<br>notre amour!',
    storyDate4: '08.24.2020',
    storyText4: 'On a demenage<br>et commence un nouveau chapitre',
    storyDate5: '01.24.2023',
    storyText5: 'ON EST<br>FIANCES!',
    detail1Title: 'Ceremonie',
    detail1Text: 'Samedi 14 juin<br>17h00',
    detail2Title: 'Reception',
    detail2Text: 'Diner & danse<br>19h00 et plus',
    detail3Title: 'Repondez avant',
    detail3Text: '15 mai 2025',
    formTitle: 'Serez-vous des notres ?',
    formSubtitle: 'Merci de remplir vos coordonnees et de repondre avant le 15 mai.',
    labelFirstName: 'Prenom',
    labelLastName: 'Nom',
    labelEmail: 'Courriel',
    labelResponse: 'Votre reponse',
    labelYes: 'Present(e)',
    labelNo: 'Decline',
    labelGuests: "Nombre d'invites",
    opt1: '1 - juste moi',
    opt2: '2 personnes',
    opt3: '3 personnes',
    opt4: '4 personnes',
    labelDietary: 'Regimes alimentaires',
    labelMessage: 'Message pour les maries (optionnel)',
    submitBtn: 'Envoyer ma reponse',
    adminHeader: 'Reponses des invites',
    totalLabel: 'Total',
    attendingLabel: 'Participants',
    declinedLabel: 'Declines',
    totalGuestsLabel: 'Total invites',
    emptyText: 'Aucune reponse recue pour le moment',
    selectAttendance: 'Veuillez selectionner votre reponse.',
    toastSaved: 'Votre reponse a ete enregistree',
    photoLabel: '+ Ajouter une photo',
    photoSet: 'Photo ajoutee',
    attendingShort: 'Present(e)',
    declinedShort: 'Decline',
    guestsShort: 'invite(s)'
  }
};

let currentLang = localStorage.getItem('site_lang') || 'en';
let cachedResponses = [];

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
      } catch {
        // fall through to localStorage
      }
    }

    localStorage.setItem(KEY, JSON.stringify(data));
  }
};

function byId(id) {
  return document.getElementById(id);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  document.documentElement.lang = lang;

  const t = I18N[lang];
  byId('heroInvitation').innerHTML = t.heroInvitation;
  byId('heroDate').textContent = t.heroDate;
  byId('welcomeTitle').innerHTML = t.welcomeTitle;
  byId('welcomeText').textContent = t.welcomeText;
  byId('storyTitle').textContent = t.storyTitle;
  byId('storyDate1').textContent = t.storyDate1;
  byId('storyText1').innerHTML = t.storyText1;
  byId('storyDate2').textContent = t.storyDate2;
  byId('storyText2').innerHTML = t.storyText2;
  byId('storyDate3').textContent = t.storyDate3;
  byId('storyText3').innerHTML = t.storyText3;
  byId('storyDate4').textContent = t.storyDate4;
  byId('storyText4').innerHTML = t.storyText4;
  byId('storyDate5').textContent = t.storyDate5;
  byId('storyText5').innerHTML = t.storyText5;
  byId('detail1Title').textContent = t.detail1Title;
  byId('detail1Text').innerHTML = t.detail1Text;
  byId('detail2Title').textContent = t.detail2Title;
  byId('detail2Text').innerHTML = t.detail2Text;
  byId('detail3Title').textContent = t.detail3Title;
  byId('detail3Text').textContent = t.detail3Text;

  byId('formTitle').textContent = t.formTitle;
  byId('formSubtitle').textContent = t.formSubtitle;
  byId('labelFirstName').textContent = t.labelFirstName;
  byId('labelLastName').textContent = t.labelLastName;
  byId('labelEmail').textContent = t.labelEmail;
  byId('labelResponse').textContent = t.labelResponse;
  byId('labelYes').innerHTML = `<span class="card-icon">♡</span>${t.labelYes}`;
  byId('labelNo').innerHTML = `<span class="card-icon">○</span>${t.labelNo}`;
  byId('labelGuests').textContent = t.labelGuests;
  byId('opt1').textContent = t.opt1;
  byId('opt2').textContent = t.opt2;
  byId('opt3').textContent = t.opt3;
  byId('opt4').textContent = t.opt4;
  byId('labelDietary').textContent = t.labelDietary;
  byId('labelMessage').textContent = t.labelMessage;
  byId('submitBtn').textContent = t.submitBtn;

  byId('adminHeader').textContent = t.adminHeader;
  byId('totalLabel').textContent = t.totalLabel;
  byId('attendingLabel').textContent = t.attendingLabel;
  byId('declinedLabel').textContent = t.declinedLabel;
  byId('totalGuestsLabel').textContent = t.totalGuestsLabel;

  byId('heroUploadBtn').textContent = t.photoLabel;
  byId('toast').textContent = `${t.toastSaved} ♡`;

  byId('firstName').placeholder = t.labelFirstName;
  byId('lastName').placeholder = t.labelLastName;
  byId('dietary').placeholder =
    lang === 'fr' ? 'Allergies ou preferences ?' : 'Any allergies or preferences?';
  byId('message').placeholder =
    lang === 'fr' ? 'Ecrivez un petit mot...' : 'Write a little note...';

  byId('btnLangEn').classList.toggle('active', lang === 'en');
  byId('btnLangFr').classList.toggle('active', lang === 'fr');
}

function render(responses) {
  byId('totalCount').textContent = responses.length;
  const yes = responses.filter((r) => r.attending === 'yes');
  const no = responses.filter((r) => r.attending === 'no');
  byId('yesCount').textContent = yes.length;
  byId('noCount').textContent = no.length;
  byId('gTotal').textContent = yes.reduce((sum, r) => sum + parseInt(r.guests || 1, 10), 0);

  const area = byId('responseArea');
  if (!responses.length) {
    area.innerHTML = `<div class="empty">${I18N[currentLang].emptyText}</div>`;
    return;
  }

  area.innerHTML = `<div class="response-cards">${responses
    .map(
      (r) => `
    <div class="r-card">
      <div class="r-card-top">
        <span class="r-name">${r.firstName} ${r.lastName}</span>
        <span class="r-status ${r.attending}">${r.attending === 'yes' ? I18N[currentLang].attendingShort : I18N[currentLang].declinedShort}</span>
      </div>
      <div class="r-detail">
        ${r.email}<br>
        ${r.attending === 'yes' ? `${r.guests} ${I18N[currentLang].guestsShort}` : ''}
        ${r.dietary ? `<br>${r.dietary}` : ''}
        ${r.message ? `<br><em>"${r.message.substring(0, 60)}${r.message.length > 60 ? '...' : ''}"</em>` : ''}
      </div>
      <div class="r-date">${r.date}</div>
    </div>
  `
    )
    .join('')}</div>`;
}

function formatDate(lang) {
  return new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

async function handleSubmit(event) {
  event.preventDefault();

  const attendance = document.querySelector('input[name="attending"]:checked');
  if (!attendance) {
    alert(I18N[currentLang].selectAttendance);
    return;
  }

  const entry = {
    firstName: byId('firstName').value.trim(),
    lastName: byId('lastName').value.trim(),
    email: byId('email').value.trim(),
    attending: attendance.value,
    guests: byId('guests').value,
    dietary: byId('dietary').value.trim(),
    message: byId('message').value.trim(),
    date: formatDate(currentLang)
  };

  const all = await storageAdapter.get();
  all.unshift(entry);
  await storageAdapter.set(all);

  cachedResponses = all;
  render(cachedResponses);

  const toast = byId('toast');
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);

  byId('rsvpForm').reset();
}

function initHeroUpload() {
  byId('heroBgUpload').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    document.querySelector('.hero').style.backgroundImage = `url('${url}')`;
    byId('heroUploadBtn').textContent = I18N[currentLang].photoSet;
  });
}

function initLanguageButtons() {
  byId('btnLangEn').addEventListener('click', () => {
    setLanguage('en');
    render(cachedResponses);
  });

  byId('btnLangFr').addEventListener('click', () => {
    setLanguage('fr');
    render(cachedResponses);
  });
}

async function init() {
  byId('rsvpForm').addEventListener('submit', handleSubmit);
  initHeroUpload();
  initLanguageButtons();

  cachedResponses = await storageAdapter.get();
  setLanguage(currentLang);
  render(cachedResponses);
}

init();
