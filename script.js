const qs = (s, p=document) => p.querySelector(s);
const qsa = (s, p=document) => [...p.querySelectorAll(s)];

const translations = {
  uk: {
    brandEyebrow: 'Інформаційний туристичний портал', brandTitle: 'Туристичне Закарпаття', themeBtn: 'Тема', navHome:'Головна', navLocations:'Локації', navFacts:'Цікаві факти', navMap:'Карта',
    heroBadge:'Інформаційний сайт для подорожей Закарпаттям', heroTitle:'Відкрийте природні, історичні та оздоровчі локації регіону в новому сучасному форматі', heroPrimary:'Перейти до локацій', heroSecondary:'Відкрити карту', stat1:'туристичних локацій', stat2:'двомовний інтерфейс', stat3:'адаптивний макет', galleryLabel1:'Панорама Закарпаття', galleryTitle1:'Гірські маршрути та природні перлини',
    homeSectionsBadge:'Основні розділи', homeSectionsTitle:'Окремі сторінки замість довгого суцільного полотна', pageTag1:'Каталог', pageCard1Title:'Локації', pageCard1Text:'Окрема сторінка з картками, фільтрацією та переходом на детальні описи туристичних об’єктів.', pageTag2:'Довідка', pageCard2Title:'Цікаві факти', pageCard2Text:'Короткі інформаційні блоки для візуального наповнення та кращого сприйняття сайту.', pageTag3:'Навігація', pageCard3Title:'Інтерактивна карта', pageCard3Text:'Географічне розташування основних точок Закарпаття на окремому картографічному блоці.',
    spot1Label:'Мукачево', spot1Title:'Замок Паланок', spot2Label:'Ужгород', spot2Title:'Старе місто і фортеця', spot3Label:'Берегівщина', spot3Title:'Термальний відпочинок',
    factsBadge:'Цікаві факти', factsTitle:'Що формує туристичну привабливість Закарпаття', fact1:'Закарпаття поєднує гірські маршрути, середньовічні замки, термальні комплекси та міські екскурсійні локації.', fact2:'Регіон зручний для коротких поїздок на 1–3 дні, що робить його популярним для інформаційних туристичних сервісів.', fact3:'Поєднання природних і архітектурних об’єктів дозволяє створювати різні сценарії подорожі для різних категорій користувачів.',
    mapBadge:'Інтерактивна карта', mapTitle:'Основні об’єкти на карті Закарпаття', footerText:'Розробник не гарантує повну актуальність усіх матеріалів ресурсу та не несе відповідальності за наслідки їх практичного використання.',
    locationsBadge:'Каталог локацій', locationsTitle:'Локації', locationsText:'Оберіть район, тип місця або ключове слово, після чого відкрийте окрему сторінку з детальним описом.', districtLabel:'Район', typeLabel:'Тип місця', searchLabel:'Ключове слово', allOption:'Усі', allOption2:'Усі', natureTag:'Природа', castleTag:'Архітектура', thermalTag:'Термальний відпочинок', cityTag:'Місто', route1Title:'Озеро Синевир', route1Text:'Високогірне озеро та один з найвідоміших природних символів Закарпаття.', route3Title:'Замок Паланок', route3Text:'Одна з головних історичних домінант Закарпаття та знакова екскурсійна локація.', route5Title:'Берегове та термальні комплекси', route5Text:'Напрям для відновлення, спокійного відпочинку та коротких оздоровчих поїздок.', route6Title:'Ужгород', route6Text:'Історичний центр, набережні та один з найвідоміших замкових комплексів регіону.', emptyState:'За заданими фільтрами локацій не знайдено.'
  },
  en: {
    brandEyebrow: 'Tourist information portal', brandTitle: 'Tourist Zakarpattia', themeBtn: 'Theme', navHome:'Home', navLocations:'Locations', navFacts:'Facts', navMap:'Map',
    heroBadge:'Travel information website for Zakarpattia', heroTitle:'Discover the natural, historical and wellness locations of the region in a modern format', heroPrimary:'Open locations', heroSecondary:'Open map', stat1:'tourist locations', stat2:'bilingual interface', stat3:'responsive layout', galleryLabel1:'Zakarpattia panorama', galleryTitle1:'Mountain routes and natural highlights',
    homeSectionsBadge:'Main sections', homeSectionsTitle:'Separate pages instead of one long screen', pageTag1:'Catalog', pageCard1Title:'Locations', pageCard1Text:'A dedicated page with cards, filters and transitions to detailed descriptions.', pageTag2:'Reference', pageCard2Title:'Interesting facts', pageCard2Text:'Short informational blocks for visual variety and better perception.', pageTag3:'Navigation', pageCard3Title:'Interactive map', pageCard3Text:'Geographical placement of the main Zakarpattia points on a dedicated map block.',
    spot1Label:'Mukachevo', spot1Title:'Palanok Castle', spot2Label:'Uzhhorod', spot2Title:'Old town and fortress', spot3Label:'Berehove area', spot3Title:'Thermal recreation',
    factsBadge:'Interesting facts', factsTitle:'What shapes the tourist appeal of Zakarpattia', fact1:'Zakarpattia combines mountain routes, medieval castles, thermal complexes and urban sightseeing locations.', fact2:'The region is convenient for short 1–3 day trips, which makes it a good basis for tourism information services.', fact3:'The combination of natural and architectural sites allows different travel scenarios for different user groups.',
    mapBadge:'Interactive map', mapTitle:'Main sites on the map of Zakarpattia', footerText:'The developer does not guarantee the full relevance of all materials and is not responsible for consequences of their practical use.',
    locationsBadge:'Locations catalog', locationsTitle:'Locations', locationsText:'Choose a district, place type or keyword and then open a separate page with the detailed description.', districtLabel:'District', typeLabel:'Place type', searchLabel:'Keyword', allOption:'All', allOption2:'All', natureTag:'Nature', castleTag:'Architecture', thermalTag:'Thermal отдых'.replace('отдых','recreation'), cityTag:'City', route1Title:'Synevyr Lake', route1Text:'A high-mountain lake and one of the best-known natural symbols of Zakarpattia.', route3Title:'Palanok Castle', route3Text:'One of the main historical landmarks of Zakarpattia and a key excursion site.', route5Title:'Berehove and thermal complexes', route5Text:'A destination for recovery, calm recreation and short wellness trips.', route6Title:'Uzhhorod', route6Text:'Historic center, embankments and one of the most famous castle complexes in the region.', emptyState:'No locations were found for the selected filters.'
  }
};

function applyLanguage(lang){
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'uk' ? 'uk' : 'en';
  qsa('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  const toggle = qs('#langToggle');
  if (toggle) toggle.textContent = lang === 'uk' ? 'EN' : 'UA';
  const input = qs('#keywordFilter');
  if (input) input.placeholder = lang === 'uk' ? 'Синевир, замок, термали...' : 'Synevyr, castle, thermal...';
}

function initTheme(){
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.dataset.theme = saved;
  qs('#themeToggle')?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
  });
}

function initLanguage(){
  const saved = localStorage.getItem('lang') || 'uk';
  applyLanguage(saved);
  qs('#langToggle')?.addEventListener('click', () => {
    applyLanguage((localStorage.getItem('lang') || 'uk') === 'uk' ? 'en' : 'uk');
  });
}

function initMenu(){
  qs('#menuToggle')?.addEventListener('click', () => qs('#siteNav')?.classList.toggle('is-open'));
}

function initReveal(){
  const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }), {threshold:.16});
  qsa('.reveal').forEach(el => io.observe(el));
}

function initPreloader(){
  const pre = qs('#preloader');
  if (!pre) return;
  window.addEventListener('load', () => setTimeout(() => pre.classList.add('is-hidden'), 350));
}

function initFilters(){
  const district = qs('#districtFilter'), type = qs('#typeFilter'), keyword = qs('#keywordFilter'), grid = qs('#routesGrid'), empty = qs('#emptyState');
  if (!district || !type || !keyword || !grid) return;
  const cards = qsa('.route-card', grid);
  const apply = () => {
    const d = district.value, t = type.value, k = keyword.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const okD = d === 'all' || card.dataset.district === d;
      const okT = t === 'all' || card.dataset.type === t;
      const okK = !k || card.dataset.search.toLowerCase().includes(k);
      const show = okD && okT && okK;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (empty) empty.hidden = visible !== 0;
  };
  [district, type].forEach(el => el.addEventListener('change', apply));
  keyword.addEventListener('input', apply);
}

function initMap(){
  if (!window.L || !qs('#mainMap')) return;
  const map = L.map('mainMap', {scrollWheelZoom:false}).setView([48.62, 23.38], 8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; OpenStreetMap' }).addTo(map);
  [
    [48.617, 23.689, 'Озеро Синевир'],
    [48.4549, 22.6903, 'Замок Паланок'],
    [48.6208, 22.2879, 'Ужгородський замок'],
    [48.2056, 22.6442, 'Берегове та термали'],
    [48.6583, 22.4050, 'Невицький замок'],
    [48.5135, 22.8233, 'Палац Шенборнів'],
    [48.6669, 23.2794, 'Водоспад Шипіт']
  ].forEach(([lat,lng,title]) => L.marker([lat,lng]).addTo(map).bindPopup(title));
}

initTheme(); initLanguage(); initMenu(); initReveal(); initPreloader(); initFilters(); initMap();
