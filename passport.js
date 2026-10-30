/* Fort Canning Heritage Passport — educational prototype.
   Image matching is a coarse, on-device visual similarity check, NOT location or identity verification. */
(() => {
  // Seven checkpoints — mirrors the Heritage Field Guide (assets/Fort-Canning-Heritage-Field-Guide.pdf).
  const places = [
    {
      id: 'ancient-singapura', title: 'Ancient Singapura', era: '14th Century', period: 'ANCIENT SINGAPURA · 14TH CENTURY',
      img: 'assets/checkpoints/cp1.jpg', sticker: 'assets/stickers/cp1.png', ink: '#1f54be', rgb: [31, 84, 190],
      query: 'Sang Nila Utama Garden Fort Canning Park Singapore',
      location: 'Southern slopes near Canning Rise & Cox Terrace, and the keramat precinct on Fort Canning Hill',
      landmarks: ['Sang Nila Utama Garden', 'Pancur Larangan', 'Keramat Iskandar Shah'],
      photoSpot: 'Frame the symmetrical Javanese split-brick gateway (Candi Bentar) reflecting in the lotus pool — best in morning or late-afternoon light.',
      riddle: 'At Pancur Larangan ("Forbidden Spring"), can you spot the hand-carved volcanic stone murals showing bathing scenes across three different centuries?',
      walkNext: {
        dhoby: 'Follow the garden footpath uphill towards the whitewashed Fort Canning Centre & Raffles Garden (about 4 mins).',
        fortcanning: 'Walk north along the upper terrace path towards Fort Canning Green and the Gothic Gate (about 4 mins).'
      },
      storyTitle: 'Bukit Larangan & Royal Memory',
      story: 'Long before British arrival, Fort Canning Hill was known as Bukit Larangan, or ‘Forbidden Hill’. Historical traditions and archaeological finds suggest that the hill was an important royal centre in 14th-century Singapura. Sang Nila Utama Garden re-imagines a Southeast Asian palace garden, while Pancur Larangan evokes the spring linked to royal bathing traditions. The nearby keramat is traditionally associated with Iskandar Shah, remembered as one of the last Malay rulers connected to Singapore.',
      facts: ['Sang Nila Utama Garden uses split brick gates, reflective pools and culturally significant plants to interpret palace-garden design.', 'Pancur Larangan refers to the ‘Forbidden Spring’ once associated with the royal court.', 'Keramat Iskandar Shah reflects the hill’s enduring role in local memory and sacred geography.'],
      tip: 'Walk through the candi bentar gateways, observe the reflective pools, and approach the keramat respectfully.'
    },
    {
      id: 'government-hill', title: 'Government Hill', era: 'Early 1800s', period: 'GOVERNMENT HILL · EARLY 1800S',
      img: 'assets/checkpoints/cp2.jpg', sticker: 'assets/stickers/cp2.png', ink: '#c92a2a', rgb: [201, 42, 42],
      query: 'Raffles Garden Fort Canning Park Singapore',
      location: 'Upper hill plateau near Fort Canning Centre, Raffles Garden and the Fort Canning Lighthouse',
      landmarks: ['Raffles House', 'Raffles Garden', 'Flagstaff', 'Lighthouse', 'Timeball'],
      photoSpot: 'Stand by the Raffles Garden fountain looking up at the red-roofed Raffles House and white Flagstaff mast, or capture the white Lighthouse against the skyline.',
      riddle: 'Find the mechanical Timeball mast near the Lighthouse — every day at 1:00 pm in colonial times, it dropped so ships in the harbour could synchronize their chronometers!',
      walkNext: {
        dhoby: 'Cross to the wide open lawn of Fort Canning Green right beside Fort Canning Centre — the historic reservoir lies directly beneath your feet (2 mins).',
        fortcanning: 'Descend slightly along the lush garden path towards the red-brick gateways of Sang Nila Utama Garden (about 4 mins).'
      },
      storyTitle: 'Raffles, Residence & Reform',
      story: 'After 1819 the British claimed the hill and renamed it Government Hill. In 1823 Sir Stamford Raffles built his residence here, and the summit became the home of successive colonial governors. The area also developed as a centre of scientific interest, administration and communication.',
      facts: ['Raffles House marks the site of the early Government House.', 'Raffles Garden commemorates Raffles’ interest in natural history and the first botanical experiments on the hill.', 'The Flagstaff, Lighthouse and Timeball formed part of a communication system that helped ships and signalled time across the harbour.'],
      tip: 'Stand near the summit and imagine the open harbour view that once made this hill ideal for government and communication.'
    },
    {
      id: 'christian-cemetery', title: 'Old Christian Cemetery', era: '1822 – 1865', period: 'OLD CHRISTIAN CEMETERY · 1822 – 1865',
      img: 'assets/checkpoints/cp3.jpg', sticker: 'assets/stickers/cp3.png', ink: '#7b2cbf', rgb: [123, 44, 191],
      query: 'Gothic Gate Fort Canning Park Singapore',
      location: 'Hilltop cemetery precinct near Fort Canning Green on Fort Canning Hill',
      landmarks: ['Cemetery Walls', 'Gothic Gate', 'Cupolas', 'Napier Monument'],
      photoSpot: 'Shoot through the pointed archway of the twin Gothic Gates framing the green lawn and ancient rain trees, or beside the domed Cupolas.',
      riddle: 'Look above the Gothic Gate archway — can you spot the inscribed letters "IHS" and the 19th-century memorial plaques embedded along the brick Cemetery Wall?',
      walkNext: {
        dhoby: 'Head south along the eastern path past the Keramat Iskandar Shah shrine into Sang Nila Utama Garden (about 4 mins).',
        fortcanning: 'Walk across the upper plateau towards the stone ramparts of Fort Gate and the 9-Pound Cannon (about 3 mins).'
      },
      storyTitle: 'A Cemetery on the Hill',
      story: 'Fort Canning once held Singapore’s earliest Christian cemetery, used in the first decades of the colonial settlement. Important residents, soldiers and children were buried here between the 1820s and mid-19th century. Although most graves were later cleared, several architectural remnants survive.',
      facts: ['The Cemetery Wall defined the burial ground, while the Gothic Gate and Cupolas formed its distinctive entrance and structures.', 'The Napier Monument survives as one of the best-known memorials from the former cemetery, preserving the memory of an early colonial family.'],
      tip: 'Look closely at the conserved brickwork and memorial elements to understand how the hill once served both the living settlement and its dead.'
    },
    {
      id: 'military-fort', title: 'Military Fort', era: '1859 – 1907', period: 'MILITARY FORT · 1859 – 1907',
      img: 'assets/checkpoints/cp4.jpg', sticker: 'assets/stickers/cp4.png', ink: '#15803d', rgb: [21, 128, 61],
      query: 'Fort Gate Fort Canning Park Singapore',
      location: 'Hilltop plateau surrounding Fort Canning Centre and Fort Gate',
      landmarks: ['Fort Wall', 'Fort Gate', 'Old Gunpowder Magazine', 'Sally Port', '9-Pound Cannon'],
      photoSpot: 'Capture the weathered stone archway of Fort Gate and climb the narrow steps to the roof lookout, or frame the 9-Pound Cannon beside the fort ramparts.',
      riddle: 'Step inside the thick stone passage of Fort Gate — can you spot the heavy iron hinges and slots where wooden drawbridge beams once barred intruders?',
      walkNext: {
        dhoby: 'Stroll across the open lawn of Fort Canning Green to the white Gothic Gate of the Old Christian Cemetery (about 3 mins).',
        fortcanning: 'Follow the shaded hillside path down towards Cox Terrace to reach the concealed entrance of the Battlebox bunker (about 4 mins).'
      },
      storyTitle: 'The Hilltop Fortress',
      story: 'In the late 1850s the British converted Government Hill into a fortified stronghold to defend Singapore. The new citadel was named Fort Canning after Charles John Canning, and its walls, gates and artillery were designed to command the harbour approaches. The fort remained in military use until it was decommissioned in 1907.',
      facts: ['The Fort Wall and Fort Gate are surviving features of the citadel.', 'The Old Gunpowder Magazine stored ammunition, while the Sally Port provided a controlled secondary exit.', 'The 9-Pound Cannon recalls the artillery once positioned on the hill.'],
      tip: 'Inspect the thick masonry walls, the gate passage and the cannon platforms to imagine how the fortress once operated.'
    },
    {
      id: 'reservoir', title: 'Post-Fort Transformation', era: '1920s', period: 'POST-FORT TRANSFORMATION · 1920S',
      img: 'assets/checkpoints/cp5.jpg', sticker: 'assets/stickers/cp5.png', ink: '#0e7490', rgb: [14, 116, 144],
      query: 'Fort Canning Green Singapore',
      location: 'Central hilltop reservoir precinct beneath Fort Canning Green',
      landmarks: ['Reservoir'],
      photoSpot: 'Take a wide panoramic shot across the sweeping lawn of Fort Canning Green framed by heritage rain trees and the classical facade of Fort Canning Centre.',
      riddle: 'Beneath the grass of the hilltop plateau lies a hidden 1920s covered water reservoir! When workers excavated it in 1928, they unearthed 14th-century Javanese-style gold ornaments.',
      walkNext: {
        dhoby: 'Descend the western slope paths (or outdoor escalators) down into the family play lawns of Jubilee Park towards Fort Canning MRT (about 5 mins).',
        fortcanning: 'Walk just south past Fort Canning Centre to reach Raffles House, Raffles Garden, the Lighthouse, and Timeball (about 3 mins).'
      },
      storyTitle: 'From Fort to Reservoir',
      story: 'After the military fort lost its strategic value, much of the old citadel was dismantled in the 1920s. The hilltop was then adapted for civic infrastructure with the construction of the Fort Canning Service Reservoir. The change marks a new phase in which the hill shifted from defence to public utility.',
      facts: ['Completed in the late 1920s, the reservoir increased Singapore’s water-storage capacity. Its construction altered the military landscape and explains why only parts of the former fort survive today.', 'The open green above it now hides an important layer of the hill’s modern history.'],
      tip: 'Pause at the open hilltop lawn and consider how essential infrastructure can reshape a historic site without fully erasing its past.'
    },
    {
      id: 'jubilee-park', title: 'Jubilee Park', era: '1935 onwards', period: 'JUBILEE PARK · 1935 ONWARDS',
      img: 'assets/checkpoints/cp6.jpg', sticker: 'assets/stickers/cp6.png', ink: '#d97706', rgb: [217, 119, 6],
      query: 'Jubilee Park Fort Canning Singapore',
      location: 'Western foothills near Fort Canning MRT and River Valley Road',
      landmarks: ['Jubilee Park'],
      photoSpot: 'Capture the long stainless-steel hillside slides built into the natural slope, the log obstacle course, or the giant tree-canopy swings.',
      riddle: 'Did you know this sunny hillside once hosted Singapore’s beloved Van Kleef Aquarium (1955) and the diamond-shaped National Theatre (1963)?',
      walkNext: {
        dhoby: 'Route complete! Follow the footpath at the bottom of Jubilee Park straight to Fort Canning MRT Station (Exit B, 2 mins).',
        fortcanning: 'Take the covered outdoor escalators or winding steps up the western slope towards the central hilltop reservoir & Fort Canning Green (about 5 mins).'
      },
      storyTitle: 'Recreation on the Western Slope',
      story: 'Jubilee Park represents Fort Canning’s recreational chapter. The area was once known as King George V Jubilee Park, named to mark the 1935 Silver Jubilee of King George V and Queen Mary. Over time, the western slope became a popular leisure zone associated with public recreation and family outings.',
      facts: ['The area later connected to attractions such as the River Valley Swimming Pool, Van Kleef Aquarium and National Theatre.', 'Today Jubilee Park has been reimagined as a welcoming public space that links the hill’s heritage with everyday use.'],
      tip: 'Use Jubilee Park as an accessible starting point, then move uphill to see how recreation and heritage meet on the same landscape.'
    },
    {
      id: 'battlebox', title: 'World War II', era: '1936 – 1942', period: 'WORLD WAR II · 1936 – 1942',
      img: 'assets/checkpoints/cp7.jpg', sticker: 'assets/stickers/cp7.png', ink: '#4b6b2b', rgb: [75, 107, 43],
      query: 'Battlebox Fort Canning Singapore',
      location: 'Cox Terrace, nine metres beneath Fort Canning Hill',
      landmarks: ['Battlebox'],
      photoSpot: 'Bonus photo on the way from Dhoby Ghaut: look up from the bottom of the famous spiral staircase at the Fort Canning Tree Tunnel, then photograph the blast-proof steel doors of the Battlebox entrance!',
      riddle: 'Walk along the hillside above the bunker — can you spot the camouflaged brick ventilation shafts poking out of the grass that supplied fresh air 9 metres underground?',
      walkNext: {
        dhoby: 'Follow the shaded uphill trail from Cox Terrace towards the hilltop plateau to reach the stone ramparts of Fort Gate (about 4 mins).',
        fortcanning: 'Route complete! Walk downhill past the famous Fort Canning Tree Tunnel spiral staircase to exit at Dhoby Ghaut MRT Station (Exit B, 4 mins).'
      },
      storyTitle: 'Malaya Command Underground',
      story: 'Between the late 1930s and early 1940s, the British built an underground command centre beneath Fort Canning Hill. Known today as the Battlebox, it served as headquarters for Malaya Command during the Malayan Campaign. Its protected rooms were designed to support military planning during air raids and bombardment.',
      facts: ['On 15 February 1942, Lieutenant-General Arthur Percival and his senior commanders made the decision here to surrender Singapore to Japanese forces. The bunker therefore stands as one of the most significant World War II sites in Singapore.'],
      tip: 'Look for the concealed hillside entrance and ventilation features, and book a guided tour to better understand the bunker’s internal layout.'
    }
  ];
  const TOTAL = places.length;

  // ── Walking routes ─────────────────────────────────────────────────────
  // Map pin positions are in pixel coordinates of assets/map_route_dhoby.jpg & map_route_fortcanning.jpg (1270×1053).
  const PIN = {
    'battlebox': [509.5, 283.0], 'military-fort': [431.0, 389.0], 'christian-cemetery': [613.0, 327.0],
    'ancient-singapura': [644.0, 575.5], 'government-hill': [619.5, 705.0], 'reservoir': [507.0, 617.5], 'jubilee-park': [394.5, 682.0]
  };
  const SPOT = {
    'battlebox': 'Battlebox', 'military-fort': 'Fort Gate', 'christian-cemetery': 'Gothic Gate',
    'ancient-singapura': 'Sang Nila Utama Garden', 'government-hill': 'Raffles Garden',
    'reservoir': 'Fort Canning Green', 'jubilee-park': 'Jubilee Park'
  };
  // Path drawn from Dhoby Ghaut (Tree Tunnel) down through the hill to Fort Canning MRT on the 1270×1053 Field Guide map.
  const DHOBY_PATH = [
    [310, 48], [366, 86], [462, 160], [509.5, 283.0], [468, 336], [431.0, 389.0], [520, 355], [613.0, 327.0],
    [645, 435], [644.0, 575.5], [638, 645], [619.5, 705.0], [562, 665], [507.0, 617.5], [450, 650], [394.5, 682.0],
    [340, 650], [286, 628]
  ];
  const DHOBY_ORDER = ['battlebox', 'military-fort', 'christian-cemetery', 'ancient-singapura', 'government-hill', 'reservoir', 'jubilee-park'];
  const ROUTES = {
    dhoby: {
      id: 'dhoby', label: 'Dhoby Ghaut MRT', lines: 'NS24 · NE6 · CC1',
      entry: 'Exit B · enter via the Fort Canning Tree Tunnel',
      stats: ['⏱ 60–75 mins', '🥾 ~1.8 km trail', '↘ Mostly downhill after Stop 2', '📸 Starts at Tree Tunnel'],
      finish: 'Fort Canning MRT', origin: 'Dhoby Ghaut MRT Station, Singapore',
      destination: 'Fort Canning MRT Station, Singapore', order: DHOBY_ORDER, path: DHOBY_PATH,
      mapImg: 'assets/map_route_dhoby.jpg',
      guideFile: 'Fort-Canning-Heritage-Field-Guide-Dhoby-Ghaut-Route.pdf',
      guideUrl: 'assets/Fort-Canning-Heritage-Field-Guide-Dhoby-Ghaut-Route.pdf'
    },
    fortcanning: {
      id: 'fortcanning', label: 'Fort Canning MRT', lines: 'DT20',
      entry: 'Exit B · enter via Jubilee Park',
      stats: ['⏱ 60–75 mins', '🥾 ~1.8 km trail', '🛗 Covered escalators uphill', '👨‍👩‍👧 Family & stroller-friendly start'],
      finish: 'Dhoby Ghaut MRT',
      origin: 'Fort Canning MRT Station, Singapore', destination: 'Dhoby Ghaut MRT Station, Singapore',
      order: [...DHOBY_ORDER].reverse(), path: [...DHOBY_PATH].reverse(),
      mapImg: 'assets/map_route_fortcanning.jpg',
      guideFile: 'Fort-Canning-Heritage-Field-Guide-Fort-Canning-Route.pdf',
      guideUrl: 'assets/Fort-Canning-Heritage-Field-Guide-Fort-Canning-Route.pdf'
    }
  };
  const ROUTE_KEY = 'fort-canning-route-v1';
  let routeId = 'dhoby';
  try { const r = localStorage.getItem(ROUTE_KEY); if (r && ROUTES[r]) routeId = r; } catch (_) { }
  const route = () => ROUTES[routeId];
  const ordered = () => route().order.map(id => places.find(p => p.id === id));

  const NAME_KEY = 'fort-canning-explorer-name-v1';
  let explorerName = '';
  try { explorerName = localStorage.getItem(NAME_KEY) || ''; } catch (_) { }
  const nameInput = document.getElementById('explorerNameInput');
  if (nameInput) {
    nameInput.value = explorerName;
    nameInput.addEventListener('input', e => {
      explorerName = e.target.value.trim();
      try { localStorage.setItem(NAME_KEY, explorerName); } catch (_) { }
      const bearerEl = document.getElementById('certBearerName');
      if (bearerEl) bearerEl.textContent = (explorerName || 'HERITAGE EXPLORER').toUpperCase();
    });
  }

  const KEY = 'fort-canning-heritage-checkpoints-v3';
  let visited = {};
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || 'null'); if (v && typeof v === 'object') visited = v; else {
      // One-time migration from the earlier 5-landmark passport.
      const old = JSON.parse(localStorage.getItem('fort-canning-heritage-places-v2') || '{}') || {};
      const map = { 'sang-nila': 'ancient-singapura', 'raffles-garden': 'government-hill', 'fort-gate': 'military-fort', 'battlebox': 'battlebox' };
      Object.keys(map).forEach(k => { if (old[k]) visited[map[k]] = old[k]; });
    }
  } catch (_) { }
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const num = i => String(i + 1).padStart(2, '0');
  function store() { try { localStorage.setItem(KEY, JSON.stringify(visited)); } catch (_) { } }
  let justStamped = null;
  function updateStamps() {
    const n = places.filter(p => visited[p.id]).length;
    const r = route();
    document.getElementById('stampStatus').textContent = `${n} of ${TOTAL} checkpoints stamped`;

    const docNoEl = document.getElementById('certDocNo');
    if (docNoEl) docNoEl.textContent = r.id === 'dhoby' ? 'DOCUMENT NO. FC-DHOBY-1860' : 'DOCUMENT NO. FC-FTCANNING-1860';

    const subEl = document.getElementById('certSubtitle');
    if (subEl) subEl.textContent = r.id === 'dhoby'
      ? 'Official Attestation of Exploration · Dhoby Ghaut MRT Expedition Circuit'
      : 'Official Attestation of Exploration · Fort Canning MRT Expedition Circuit';

    const bearerEl = document.getElementById('certBearerName');
    if (bearerEl) bearerEl.textContent = (explorerName || 'HERITAGE EXPLORER').toUpperCase();

    const descEl = document.getElementById('certAttestationDesc');
    if (descEl) descEl.textContent = r.id === 'dhoby'
      ? 'This certifies that the bearer has completed the walking trail starting from Dhoby Ghaut MRT (via Tree Tunnel) to Fort Canning MRT, discovering and validating all seven historical checkpoints.'
      : 'This certifies that the bearer has completed the walking trail starting from Fort Canning MRT (via Jubilee Park) to Dhoby Ghaut MRT, discovering and validating all seven historical checkpoints.';

    const footEl = document.getElementById('certFooterCenter');
    if (footEl) footEl.innerHTML = r.id === 'dhoby'
      ? 'DHOBY GHAUT ROUTE CIRCUIT &nbsp;—&nbsp; REPUBLIC OF STORIES'
      : 'FORT CANNING ROUTE CIRCUIT &nbsp;—&nbsp; REPUBLIC OF STORIES';

    const archEl = document.getElementById('certAuditArchive');
    if (archEl) archEl.textContent = r.id === 'dhoby' ? 'ARCHIVE ID: FC-2026-DHOBY' : 'ARCHIVE ID: FC-2026-FTCAN';

    const cert = document.getElementById('downloadCertificate');
    cert.disabled = n !== TOTAL;
    cert.textContent = n === TOTAL
      ? '↓ Download your Completion Certificate (PDF)'
      : `↓ Download certificate (complete all ${TOTAL})`;

    const guideBtn = document.getElementById('downloadGuide');
    if (guideBtn) {
      guideBtn.textContent = `↓ Download Heritage Field Guide · ${r.label} Route (PDF)`;
    }
    const helpEl = document.getElementById('downloadHelp');
    if (helpEl && !helpEl.dataset.statusMsg) {
      helpEl.textContent = `The 8-page field guide includes the trail map, transit access points and all seven checkpoints numbered in walking order for the ${r.label} route.`;
    }
    const fill = document.getElementById('passportProgress'); if (fill) fill.style.width = (n / TOTAL * 100) + '%';
    const audit = document.getElementById('auditStatus');
    if (audit) audit.textContent = `RECORD: ${n} OF ${TOTAL} ${n === TOTAL ? 'COMPLETE' : 'STAMPED'}`;
    const valDate = document.getElementById('certValidatedDate');
    if (valDate) valDate.textContent = n === TOTAL ? ('Successfully Validated on ' + new Date().toLocaleDateString('en-SG', { year: 'numeric', month: 'long', day: 'numeric' })) : `Expedition Record · ${n} of ${TOTAL} Validated`;
    document.getElementById('stamps').innerHTML = ordered().map((p, i) => {
      const got = !!visited[p.id];
      return `<a href="#stop-${esc(p.id)}" class="stamp ${got ? 'earned' : ''} ${justStamped === p.id ? 'just-stamped' : ''}" style="--ink:${p.ink};--tilt:${[-3, 2, -2, 3, -2, 2, -1][i]}deg" aria-label="Stop ${i + 1}, ${esc(p.title)}: ${got ? 'stamp collected' : 'not yet collected'}">
        <span class="stamp-art"><img src="${esc(p.sticker)}" alt="" loading="lazy" draggable="false"></span>
        <span class="stamp-label"><b>${num(i)}</b> ${esc(p.title)}</span>
        <span class="stamp-era-text">${esc(p.era)}</span>
        <span class="stamp-state">${got ? '✓ COLLECTED' : 'LOCKED'}</span>
      </a>`;
    }).join('');
    justStamped = null;
  }
  function mapsLink(p) { return 'https://www.google.com/maps/dir/?api=1&travelmode=walking&destination=' + encodeURIComponent(p.query); }
  function mapEmbed(p) { return 'https://maps.google.com/maps?q=' + encodeURIComponent(p.query) + '&z=16&output=embed'; }
  function routeMapsLink(r) {
    const wp = r.order.map(id => places.find(p => p.id === id).query).join('|');
    return 'https://www.google.com/maps/dir/?api=1&travelmode=walking&origin=' + encodeURIComponent(r.origin) + '&destination=' + encodeURIComponent(r.destination) + '&waypoints=' + encodeURIComponent(wp);
  }
  function routeSVG(r) {
    const pts = r.path.map(p => p.join(',')).join(' ');
    const [sx, sy] = r.path[0], [ex, ey] = r.path[r.path.length - 1];
    const pin = (x, y, label, cls, dx, anchor) => `<g class="route-end ${cls}"><circle cx="${x}" cy="${y}" r="11"/><circle cx="${x}" cy="${y}" r="4.5" class="dot"/>
      <text x="${x + dx}" y="${y + 5}" text-anchor="${anchor}">${esc(label)}</text></g>`;
    const markers = r.order.map((id, i) => {
      const p = places.find(x => x.id === id); const [x, y] = PIN[id]; const got = !!visited[id];
      return `<a href="#stop-${esc(id)}" class="route-marker ${got ? 'got' : ''}" style="--ink:${p.ink};--d:${0.2 + i * 0.1}s" aria-label="Stop ${i + 1}: ${esc(p.title)}">
        <title>Stop ${i + 1} · ${esc(p.title)} (${esc(p.era)})</title><circle class="halo" cx="${x}" cy="${y}" r="33"/><circle class="pin" cx="${x}" cy="${y}" r="26"/>
        <text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central">${i + 1}</text></a>`;
    }).join('');
    return `<svg class="route-svg" viewBox="80 10 1180 1030" role="img" aria-label="Official Heritage Field Guide Map of Fort Canning Park showing the walking route from ${esc(r.label)} to ${esc(r.finish)} with ${TOTAL} numbered stops">
      <image href="${esc(r.mapImg)}" x="0" y="0" width="1270" height="1053"/>
      <polyline class="route-line-shadow" points="${pts}"/>
      <polyline class="route-line" points="${pts}"/>
      <polyline class="route-line-flow" points="${pts}"/>
      ${pin(sx, sy, 'START · ' + r.label, 'start', 16, 'start')}
      ${pin(ex, ey, 'FINISH · ' + r.finish, 'finish', -16, 'end')}
      ${markers}
    </svg>`;
  }
  function renderRoutePicker() {
    const host = document.getElementById('routePicker'); if (!host) return;
    const r = route();
    host.innerHTML = `<div class="route-tabs" role="tablist" aria-label="Choose your starting point">
        ${Object.values(ROUTES).map(x => `<button type="button" role="tab" id="route-tab-${x.id}" class="route-tab ${x.id === routeId ? 'active' : ''}" aria-selected="${x.id === routeId}" aria-controls="route-panel" data-route="${x.id}">
          <span class="route-tab-kicker">START FROM</span><span class="route-tab-name">${esc(x.label)}</span><span class="route-tab-lines">${esc(x.lines)}</span></button>`).join('')}
      </div>
      <div class="route-panel" id="route-panel" role="tabpanel" aria-labelledby="route-tab-${r.id}">
        <div class="route-map-frame">${routeSVG(r)}<span class="route-map-north" aria-hidden="true">N ↑</span></div>
        <div class="route-info">
          <div class="section-kicker">YOUR WALKING ROUTE</div>
          <h3>${esc(r.label)} <em>→</em> ${esc(r.finish)}</h3>
          <p class="route-entry">${esc(r.entry)}</p>
          <div class="route-stats">${(r.stats || []).map(s => `<span class="route-stat-pill">${esc(s)}</span>`).join('')}</div>
          <ol class="route-stops">${ordered().map((p, i) => `<li style="--ink:${p.ink}" class="${visited[p.id] ? 'got' : ''}"><a href="#stop-${esc(p.id)}">
            <span class="route-stop-num">${i + 1}</span><span class="route-stop-text"><b>${esc(SPOT[p.id] || p.landmarks[0])}</b><small>${esc(p.title)} · ${esc(p.era)}</small></span>
            <span class="route-stop-state">${visited[p.id] ? '✓' : ''}</span></a></li>`).join('')}</ol>
          <div class="route-actions">
            <a class="route-gmaps" href="${esc(routeMapsLink(r))}" target="_blank" rel="noopener noreferrer">↗ Open full walking route in Google Maps</a>
            <a class="route-guide-dl" href="${esc(r.guideUrl)}" download="${esc(r.guideFile)}" rel="noopener">↓ Route Field Guide (PDF)</a>
          </div>
        </div>
      </div>`;
    host.querySelectorAll('[data-route]').forEach(b => b.addEventListener('click', () => selectRoute(b.dataset.route, true)));
    host.querySelector('.route-tabs').addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const ids = Object.keys(ROUTES); const next = ids[(ids.indexOf(routeId) + (e.key === 'ArrowRight' ? 1 : ids.length - 1)) % ids.length];
      selectRoute(next, true); document.getElementById('route-tab-' + next)?.focus();
    });
  }
  function selectRoute(id, focusTab) {
    if (!ROUTES[id] || id === routeId) return;
    routeId = id; try { localStorage.setItem(ROUTE_KEY, id); } catch (_) { }
    const helpEl = document.getElementById('downloadHelp');
    if (helpEl) delete helpEl.dataset.statusMsg;
    renderPlaces();
    if (focusTab) document.getElementById('route-tab-' + id)?.focus();
  }
  function renderPlaces() {
    renderRoutePicker();
    const r = route();
    const list = ordered();
    document.getElementById('placesGrid').innerHTML = list.map((p, i) => {
      const nextStop = list[i + 1];
      const walkCue = p.walkNext ? p.walkNext[r.id] : '';
      return `<article class="place-card" id="stop-${esc(p.id)}" style="--ink:${p.ink}">
      <div class="place-photo-wrap"><img class="place-photo" src="${esc(p.img)}" alt="Reference photo for ${esc(p.title)}" loading="lazy">
        <span class="place-stop-num" aria-hidden="true">${i + 1}</span>
        <img class="place-sticker ${visited[p.id] ? 'earned' : ''}" id="sticker-${esc(p.id)}" src="${esc(p.sticker)}" alt="" aria-hidden="true"></div>
      <div class="place-inner"><div class="place-topline">STOP ${i + 1} OF ${TOTAL} · FROM ${esc(r.label.toUpperCase())}</div><h3>${esc(p.title)} <span class="place-era">· ${esc(p.era)}</span></h3>
      <p class="place-location">Location: ${esc(p.location)}</p>
      <ul class="place-landmarks">${p.landmarks.map(l => `<li>${esc(l)}</li>`).join('')}</ul>
      <div class="place-badge ${visited[p.id] ? 'done' : ''}" id="badge-${esc(p.id)}">${visited[p.id] ? '✓ PASSPORT STAMP COLLECTED' : '○ AWAITING YOUR VISIT'}</div>
      <div class="tourist-Callouts">
        <div class="callout-box photo-spot-box"><strong>📸 Photo Spot Tip:</strong> ${esc(p.photoSpot)}</div>
        <div class="callout-box riddle-box"><strong>🔍 Look Around You:</strong> ${esc(p.riddle)}</div>
      </div>
      <p class="place-prompt">Compare your view with the reference photo. Use the map below to locate the checkpoint.</p>
      <iframe class="place-map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map showing ${esc(p.title)}" src="${esc(mapEmbed(p))}"></iframe>
      <div class="place-actions"><a href="${esc(mapsLink(p))}" target="_blank" rel="noopener noreferrer">↗ Walking directions</a>
      <button type="button" class="capture-button" data-camera="${esc(p.id)}" aria-label="Take a photograph of ${esc(p.title)}"><svg class="camera-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/></svg> Take a photo</button><button type="button" class="manual-stamp" data-manual="${esc(p.id)}">✥ Stamp manually</button></div>
      <input class="camera-input" id="camera-${esc(p.id)}" type="file" accept="image/*" capture="environment" aria-label="Capture ${esc(p.title)} photograph">
      <p class="photo-note">On phones this opens the camera when supported; on computers it may open a file picker. Images are checked locally and are not uploaded.</p>
      <div class="place-feedback" id="feedback-${esc(p.id)}" aria-live="polite" hidden></div>
      <div class="place-story" id="story-${esc(p.id)}" ${visited[p.id] ? '' : 'hidden'}>
        <div class="story-header-row"><h4>✥ ${esc(p.storyTitle)}</h4><button type="button" class="tts-btn" data-tts="${esc(p.id)}">🔊 Listen to Audio Guide</button></div>
        <p>${esc(p.story)}</p>
        <h5>Historical Facts &amp; Landmarks</h5>${p.facts.map(f => `<p>${esc(f)}</p>`).join('')}
        <div class="place-tip"><strong>Field Tip:</strong> ${esc(p.tip)}</div>
      </div>
      <div class="walk-next-bar">
        <span class="walk-next-kicker">${nextStop ? `NEXT STOP · STOP ${i + 2}: ${esc(nextStop.title.toUpperCase())}` : `FINAL STOP · FINISH AT ${esc(r.finish.toUpperCase())}`}</span>
        <p>${esc(walkCue)}</p>
        ${nextStop ? `<a href="#stop-${esc(nextStop.id)}" class="walk-next-link">Jump to Stop ${i + 2} ↓</a>` : ''}
      </div>
      </div></article>`;
    }).join('');
    document.querySelectorAll('[data-camera]').forEach(b => b.addEventListener('click', () => document.getElementById('camera-' + b.dataset.camera).click()));
    places.forEach(p => document.getElementById('camera-' + p.id).addEventListener('change', e => checkPhoto(p, e.target.files?.[0])));
    document.querySelectorAll('[data-manual]').forEach(b => b.addEventListener('click', () => { const p = places.find(x => x.id === b.dataset.manual); if (p && window.confirm('Confirm that you have visited ' + p.title + '? Manual stamps are self-reported and do not verify your location.')) completePlace(p, 'manual'); }));
    document.querySelectorAll('[data-tts]').forEach(b => b.addEventListener('click', e => {
      const p = places.find(x => x.id === b.dataset.tts);
      if (p && window.toggleHeritageSpeech) {
        window.toggleHeritageSpeech(`${p.title}, ${p.era}. ${p.storyTitle}. ${p.story} Historical facts: ${p.facts.join(' ')} Field tip: ${p.tip}`, e.currentTarget);
      }
    }));
    updateStamps();
  }
  async function getSignature(src) {
    const img = new Image(); img.decoding = 'async';
    if (src instanceof File) { const url = URL.createObjectURL(src); try { img.src = url; await img.decode(); } finally { URL.revokeObjectURL(url); } }
    else { img.src = src; await img.decode(); }
    const canvas = document.createElement('canvas'); canvas.width = 48; canvas.height = 48;
    const ctx = canvas.getContext('2d', { willReadFrequently: true }); ctx.drawImage(img, 0, 0, 48, 48);
    const a = ctx.getImageData(0, 0, 48, 48).data; let hist = Array(24).fill(0), lum = [];
    for (let i = 0; i < a.length; i += 4) { const r = a[i], g = a[i + 1], b = a[i + 2]; hist[Math.min(7, r >> 5)]++; hist[8 + Math.min(7, g >> 5)]++; hist[16 + Math.min(7, b >> 5)]++; lum.push(.299 * r + .587 * g + .114 * b); }
    return { hist: hist.map(x => x / 2304), lum };
  }
  function similarity(a, b) {
    // Very approximate comparison: global colour distribution and coarse brightness pattern.
    // NOT robust to viewpoint, lighting, crops or visually similar unrelated scenes.
    let delta = 0; for (let i = 0; i < 24; i++)delta += Math.abs(a.hist[i] - b.hist[i]);
    const histScore = Math.max(0, 1 - delta / 6);
    let bright = 0; for (let i = 0; i < a.lum.length; i++)bright += Math.abs(a.lum[i] - b.lum[i]) / 255;
    const pixelScore = Math.max(0, 1 - bright / a.lum.length);
    return .55 * histScore + .45 * pixelScore;
  }
  async function checkPhoto(p, file) {
    if (!file) return;
    const box = document.getElementById('feedback-' + p.id); box.hidden = false;
    if (!file.type.startsWith('image/')) { box.textContent = 'Please select or capture an image.'; return; }
    box.textContent = 'Checking your photograph on this device…';
    let score;
    try { const [ref, shot] = await Promise.all([getSignature(p.img), getSignature(file)]); score = similarity(ref, shot); } catch (err) { box.textContent = 'This photo could not be read. Please try a different image.'; return; }
    const url = URL.createObjectURL(file);
    box.innerHTML = `<strong>Photo captured</strong><img alt="Your captured photo" src="${url}"><p>${score >= .88 ? 'Your photo looks visually similar to the reference.' : 'The automatic check could not confidently match the reference photo.'}</p><p class="photo-note">Experimental image comparison only. This does not verify your GPS location or prove that the photograph shows the landmark. Different lighting and camera angles can affect the result.</p><div class="review-actions"><button class="confirm" type="button" data-confirm="${esc(p.id)}">${score >= .88 ? 'Collect stamp (confirm visit)' : 'I visited this place — confirm manually'}</button><button type="button" data-retake="${esc(p.id)}">Retake photo</button></div>`;
    const im = box.querySelector('img'); im.addEventListener('load', () => URL.revokeObjectURL(url), { once: true });
    box.querySelector('[data-confirm]').addEventListener('click', () => completePlace(p));
    box.querySelector('[data-retake]').addEventListener('click', () => { document.getElementById('camera-' + p.id).value = ''; document.getElementById('camera-' + p.id).click(); });
  }
  function completePlace(p, method = 'photo') {
    visited[p.id] = { date: new Date().toISOString(), method }; store(); justStamped = p.id; updateStamps(); renderRoutePicker();
    document.getElementById('badge-' + p.id).textContent = '✓ PASSPORT STAMP COLLECTED';
    document.getElementById('badge-' + p.id).classList.add('done');
    document.getElementById('sticker-' + p.id).classList.add('earned');
    document.getElementById('story-' + p.id).hidden = false;
    const box = document.getElementById('feedback-' + p.id);
    box.hidden = false; box.innerHTML = '<strong>✥ Stamp collected!</strong><p>You have recorded this checkpoint in your heritage passport. Its story is now unlocked below.</p>';
    showHeritageDialog(p);
  }

  const dialog = document.getElementById('heritageDialog');
  let returnFocus = null;
  let dialogPlace = null;
  function showHeritageDialog(p) {
    returnFocus = document.activeElement;
    dialogPlace = p;
    const stamp = document.getElementById('heritageDialogStamp');
    if (stamp) { stamp.src = p.sticker; stamp.classList.remove('animate'); void stamp.offsetWidth; stamp.classList.add('animate'); }
    document.getElementById('heritageDialogTitle').textContent = p.title + ' · ' + p.era;
    document.getElementById('heritageDialogText').textContent = p.story;
    const ttsBtn = document.getElementById('heritageDialogTts');
    if (ttsBtn) { ttsBtn.classList.remove('speaking'); ttsBtn.textContent = '🔊 Listen to Audio Guide'; }
    dialog.hidden = false; document.body.classList.add('heritage-dialog-open');
    document.getElementById('closeHeritageDialog').focus();
  }
  function closeHeritageDialog() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    dialog.hidden = true; document.body.classList.remove('heritage-dialog-open'); returnFocus?.focus?.();
  }
  document.getElementById('closeHeritageDialog').addEventListener('click', closeHeritageDialog);
  document.getElementById('heritageDialogDone').addEventListener('click', closeHeritageDialog);
  document.getElementById('heritageDialogTts')?.addEventListener('click', e => {
    if (dialogPlace && window.toggleHeritageSpeech) {
      window.toggleHeritageSpeech(`${dialogPlace.title}, ${dialogPlace.era}. ${dialogPlace.story}`, e.currentTarget);
    }
  });
  dialog.addEventListener('click', e => { if (e.target === dialog) closeHeritageDialog(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !dialog.hidden) closeHeritageDialog(); });

  function getPDF(orientation = 'portrait') {
    const PDF = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
    if (!PDF) {
      document.getElementById('downloadHelp').textContent = 'PDF generator could not load. If you are offline, ensure assets/jspdf.umd.min.js is present and reload.';
      return null;
    }
    document.getElementById('downloadHelp').textContent = 'Preparing your PDF…';
    return new PDF({ orientation, unit: 'mm', format: 'a4' });
  }

  // The Heritage Field Guide dynamically matches the active MRT walking route.
  function guidePDF() {
    const r = route();
    const url = r.guideUrl || 'assets/Fort-Canning-Heritage-Field-Guide.pdf';
    const file = r.guideFile || 'Fort-Canning-Heritage-Field-Guide.pdf';
    const a = document.createElement('a');
    a.href = url; a.download = file; a.rel = 'noopener';
    document.body.appendChild(a); a.click(); a.remove();
    const helpEl = document.getElementById('downloadHelp');
    if (helpEl) {
      helpEl.dataset.statusMsg = '1';
      helpEl.textContent = `Heritage Field Guide (${r.label} Route) downloaded. If it opened in a new view instead, use your browser’s save button.`;
    }
  }

  // Draws one four-petal floret in the given colour using doc.
  function drawFloret(doc, cx, cy, size = 1.35, color = [157, 80, 59]) {
    doc.setFillColor(...color);
    doc.setDrawColor(...color);
    const r = size * 0.30;
    const d = size * 0.68;
    doc.circle(cx, cy - d, r, 'F');
    doc.circle(cx, cy + d, r, 'F');
    doc.circle(cx - d, cy, r, 'F');
    doc.circle(cx + d, cy, r, 'F');
    doc.circle(cx, cy, r * 1.05, 'F');
    const dd = d * 0.52;
    const rd = r * 0.38;
    doc.circle(cx - dd, cy - dd, rd, 'F');
    doc.circle(cx + dd, cy - dd, rd, 'F');
    doc.circle(cx - dd, cy + dd, rd, 'F');
    doc.circle(cx + dd, cy + dd, rd, 'F');
  }

  function certificatePDF() {
    if (places.some(p => !visited[p.id])) return; // Check if all places have been visited
    try {
      const doc = getPDF('landscape'); if (!doc) return;
      const stickers = window.STICKER_IMAGES || {};
      const r = route();
      const routePlaces = ordered(); // 7 stops in the active route order

      // 1. Aged Ivory Parchment
      doc.setFillColor(252, 248, 238);
      doc.rect(0, 0, 297, 210, 'F');

      // 2. Ornate Triple Security Frame
      doc.setDrawColor(156, 120, 72); doc.setLineWidth(0.85); doc.rect(7, 7, 283, 196);
      doc.setDrawColor(214, 194, 156); doc.setLineWidth(0.35); doc.rect(9.5, 9.5, 278, 191);
      doc.setDrawColor(156, 120, 72); doc.setLineWidth(0.5); doc.rect(11.5, 11.5, 274, 187);

      // Corner Decorative Brackets - positioned compactly in margin (at 14mm)
      const corners = [[14, 14, 1, 1], [283, 14, -1, 1], [14, 196, 1, -1], [283, 196, -1, -1]];
      doc.setDrawColor(156, 120, 72); doc.setLineWidth(0.35);
      corners.forEach(([cx, cy, sx, sy]) => {
        doc.line(cx, cy, cx + 6 * sx, cy);
        doc.line(cx, cy, cx, cy + 6 * sy);
        doc.setFillColor(185, 145, 95);
        doc.circle(cx + 2.5 * sx, cy + 2.5 * sy, 0.9, 'FD');
      });

      // 3. Top Running Header
      const docNo = r.id === 'dhoby' ? 'DOCUMENT NO. FC-DHOBY-1860' : 'DOCUMENT NO. FC-FTCANNING-1860';
      const headerCircuit = r.id === 'dhoby' ? 'DHOBY GHAUT ROUTE  —  FORT CANNING HILL' : 'FORT CANNING ROUTE  —  FORT CANNING HILL';
      doc.setFont('times', 'bold'); doc.setFontSize(8.2); doc.setTextColor(112, 82, 54);
      doc.text('REPUBLIC OF STORIES  |  HERITAGE EXPEDITION', 28, 18.5);
      doc.setFontSize(8.2); doc.setTextColor(155, 120, 82);
      doc.text(headerCircuit, 148.5, 18.5, { align: 'center' });
      doc.setFontSize(8.2); doc.setTextColor(112, 82, 54);
      doc.text(docNo, 269, 18.5, { align: 'right' });
      doc.setDrawColor(204, 182, 145); doc.setLineWidth(0.25);
      doc.line(26, 22, 271, 22);

      // 4. Grand Title & Attestation
      const certSub = r.id === 'dhoby'
        ? 'Official Attestation of Exploration · Dhoby Ghaut MRT Expedition Circuit'
        : 'Official Attestation of Exploration · Fort Canning MRT Expedition Circuit';
      const bearerTitle = 'PRESENTED TO TIME TRAVELLER: ' + (explorerName || 'HERITAGE EXPLORER').toUpperCase();
      const certDesc = r.id === 'dhoby'
        ? 'This certifies that the bearer has completed the walking expedition from Dhoby Ghaut MRT (via Tree Tunnel) to Fort Canning MRT, validating all seven historical checkpoints.'
        : 'This certifies that the bearer has completed the walking expedition from Fort Canning MRT (via Jubilee Park) to Dhoby Ghaut MRT, validating all seven historical checkpoints.';

      doc.setFont('times', 'bold'); doc.setFontSize(20); doc.setTextColor(48, 34, 22);
      doc.text('HERITAGE PASSPORT CERTIFICATE', 148.5, 29.2, { align: 'center' });
      doc.setFont('times', 'italic'); doc.setFontSize(9.5); doc.setTextColor(132, 84, 46);
      doc.text(certSub, 148.5, 34.0, { align: 'center' });
      doc.setFont('times', 'bold'); doc.setFontSize(9.2); doc.setTextColor(142, 60, 42);
      doc.text(bearerTitle, 148.5, 38.6, { align: 'center' });
      doc.setFont('times', 'normal'); doc.setFontSize(8.0); doc.setTextColor(75, 62, 48);
      doc.text(certDesc, 148.5, 42.8, { align: 'center' });

      // 5. Seven Distinct Colored Stamps (2-Tier Visa Presentation) in route order
      const sz = 34;

      // Tier 1: Stops 01 to 04 (4 stamps across)
      const t1Centers = [57, 118, 179, 240];
      t1Centers.forEach((cx, idx) => {
        const p = routePlaces[idx];
        const pIndex = places.findIndex(x => x.id === p.id);
        const key = 'cp' + (pIndex + 1);
        const yTop = 46.5;

        // Concentric Stamp Halo in matching ink color
        doc.setDrawColor(...p.rgb); doc.setLineWidth(0.35);
        doc.circle(cx, yTop + sz / 2, sz / 2 + 0.9);

        // Stamped Artwork
        if (stickers[key]) {
          doc.addImage(stickers[key], 'PNG', cx - sz / 2, yTop, sz, sz, key, 'FAST');
        }

        // Labels underneath - ALL CENTERED
        doc.setFont('times', 'bold'); doc.setFontSize(7.8); doc.setTextColor(...p.rgb);
        doc.text('STOP 0' + (idx + 1), cx, 85.0, { align: 'center' });

        doc.setFont('times', 'bold'); doc.setFontSize(9.0); doc.setTextColor(48, 34, 22);
        doc.text(p.title, cx, 89.2, { align: 'center' });

        doc.setFont('times', 'italic'); doc.setFontSize(7.8); doc.setTextColor(120, 95, 70);
        doc.text(p.era, cx, 93.0, { align: 'center' });

        doc.setFont('times', 'bold'); doc.setFontSize(6.8); doc.setTextColor(...p.rgb);
        doc.text('VERIFIED & COLLECTED', cx, 97.0, { align: 'center' });
      });

      // Tier 2: Stops 05 to 07 (3 stamps across, centered)
      const t2Centers = [87.5, 148.5, 209.5];
      t2Centers.forEach((cx, idx) => {
        const p = routePlaces[4 + idx];
        const pIndex = places.findIndex(x => x.id === p.id);
        const key = 'cp' + (pIndex + 1);
        const yTop = 102.5;

        // Concentric Stamp Halo in matching ink color
        doc.setDrawColor(...p.rgb); doc.setLineWidth(0.35);
        doc.circle(cx, yTop + sz / 2, sz / 2 + 0.9);

        // Stamped Artwork
        if (stickers[key]) {
          doc.addImage(stickers[key], 'PNG', cx - sz / 2, yTop, sz, sz, key, 'FAST');
        }

        // Labels underneath - ALL CENTERED
        doc.setFont('times', 'bold'); doc.setFontSize(7.8); doc.setTextColor(...p.rgb);
        doc.text('STOP 0' + (5 + idx), cx, 141.0, { align: 'center' });

        doc.setFont('times', 'bold'); doc.setFontSize(9.0); doc.setTextColor(48, 34, 22);
        doc.text(p.title, cx, 145.2, { align: 'center' });

        doc.setFont('times', 'italic'); doc.setFontSize(7.8); doc.setTextColor(120, 95, 70);
        doc.text(p.era, cx, 149.0, { align: 'center' });

        doc.setFont('times', 'bold'); doc.setFontSize(6.8); doc.setTextColor(...p.rgb);
        doc.text('VERIFIED & COLLECTED', cx, 153.0, { align: 'center' });
      });

      // 6. Bottom Dividing Line
      doc.setDrawColor(204, 182, 145); doc.setLineWidth(0.25);
      doc.line(26, 158, 271, 158);

      // 7. Left Column: Official Rubber Stamp Seal
      const sealX = 54, sealY = 178.5, sealR = 16.5;
      doc.setDrawColor(157, 80, 59); doc.setLineWidth(0.55);
      doc.circle(sealX, sealY, sealR);
      doc.setLineWidth(0.25);
      doc.circle(sealX, sealY, sealR - 1.8);
      doc.setFont('times', 'bold'); doc.setFontSize(6.8); doc.setTextColor(157, 80, 59);
      doc.text('FORT CANNING', sealX, sealY - 7.5, { align: 'center' });
      doc.setFontSize(6.2);
      doc.text('OFFICIAL SEAL', sealX, sealY - 2.5, { align: 'center' });
      doc.text('FIELD PASSPORT', sealX, sealY + 2.8, { align: 'center' });
      doc.text('SINGAPORE', sealX, sealY + 8.0, { align: 'center' });

      // 8. Center Column: Official Expedition Heritage Record
      const routeTitle = r.id === 'dhoby'
        ? 'DHOBY GHAUT ROUTE CIRCUIT   —   REPUBLIC OF STORIES'
        : 'FORT CANNING ROUTE CIRCUIT   —   REPUBLIC OF STORIES';
      doc.setFont('times', 'bold'); doc.setFontSize(10.5); doc.setTextColor(82, 58, 36);
      doc.text(routeTitle, 148.5, 168, { align: 'center' });
      doc.setFont('times', 'italic'); doc.setFontSize(9.0); doc.setTextColor(115, 92, 70);
      doc.text('Preserving 700 Years of Singapore\'s Living & Built Heritage', 148.5, 174, { align: 'center' });
      doc.setFont('times', 'normal'); doc.setFontSize(8.0); doc.setTextColor(135, 115, 95);
      doc.text('National Parks Board & Heritage Documentation · Educational Prototype', 148.5, 179.5, { align: 'center' });

      const dateStr = new Date().toLocaleDateString('en-SG', { year: 'numeric', month: 'long', day: 'numeric' });
      doc.setFont('times', 'bold'); doc.setFontSize(8.5); doc.setTextColor(142, 60, 42);
      doc.text('Successfully Validated on ' + dateStr, 148.5, 186.5, { align: 'center' });

      // 9. Right Column: Boxed Field Audit Endorsement
      const rx = 208, ry = 163, rw = 58, rh = 27;
      const auditRoute = r.id === 'dhoby' ? 'ROUTE: DHOBY GHAUT' : 'ROUTE: FORT CANNING';
      const archiveId = r.id === 'dhoby' ? 'ARCHIVE ID: FC-2026-DHOBY' : 'ARCHIVE ID: FC-2026-FTCAN';

      doc.setFillColor(247, 241, 228); doc.setDrawColor(175, 145, 105); doc.setLineWidth(0.35);
      doc.rect(rx, ry, rw, rh, 'FD');
      doc.setFont('times', 'bold'); doc.setFontSize(7.5); doc.setTextColor(112, 78, 46);
      doc.text('OFFICIAL FIELD AUDIT', rx + rw / 2, ry + 5.5, { align: 'center' });
      doc.setFontSize(6.8); doc.setTextColor(142, 60, 42);
      doc.text(auditRoute, rx + rw / 2, ry + 10.4, { align: 'center' });
      doc.setFontSize(7.0); doc.setTextColor(21, 128, 61);
      doc.text('RECORD: 7 OF 7 COMPLETE', rx + rw / 2, ry + 15.2, { align: 'center' });
      doc.setFont('times', 'normal'); doc.setFontSize(6.4); doc.setTextColor(100, 80, 60);
      doc.text(archiveId, rx + rw / 2, ry + 19.6, { align: 'center' });
      doc.setFont('times', 'bold'); doc.setFontSize(6.0); doc.setTextColor(31, 84, 190);
      doc.text('[ PASSPORT EXAMINED & SEALED ]', rx + rw / 2, ry + 24.2, { align: 'center' });

      const pdfName = r.id === 'dhoby'
        ? 'Fort-Canning-Certificate-Dhoby-Ghaut-Route.pdf'
        : 'Fort-Canning-Certificate-Fort-Canning-Route.pdf';
      doc.save(pdfName);
      document.getElementById('downloadHelp').textContent = `Completion certificate (${r.label} Route) downloaded!`;
    } catch (err) {
      console.error(err);
      document.getElementById('downloadHelp').textContent = 'Could not generate certificate: ' + (err?.message || err);
    }
  }
  document.getElementById('downloadGuide').addEventListener('click', guidePDF);
  document.getElementById('downloadCertificate').addEventListener('click', certificatePDF);

  window.resetHeritagePassport = () => { visited = {}; store(); renderPlaces(); };
  renderPlaces();
})();
