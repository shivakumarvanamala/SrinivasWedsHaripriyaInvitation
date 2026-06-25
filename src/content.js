// ════════════════════════════════════════════════════════════════════
//  💍  WEDDING INVITATION — CENTRAL CONTENT FILE  (Telugu + English)
// ════════════════════════════════════════════════════════════════════
//
//  This is the ONLY file you edit to change the website content.
//
//  ▸ The site shows TELUGU by default (for relatives) and switches to
//    ENGLISH (for friends & cousins) via the toggle at the bottom-left.
//
//  ▸ Any text that has BOTH languages is written as:
//        { te: 'తెలుగు లో', en: 'in English' }
//    Edit the text inside the quotes. Keep `te:` and `en:` and the commas.
//
//  ▸ Things that are the SAME in both languages (dates as data, map links,
//    photo paths) are plain text — just edit them directly.
//
//  After editing: run `npm run dev` to preview, `npm run build` to publish.
//
// ════════════════════════════════════════════════════════════════════

export const content = {
  // ──────────────────────────────────────────────────────────────────
  //  1. THE COUPLE
  // ──────────────────────────────────────────────────────────────────
  couple: {
    groom: {
      // `name` = short name, used only in the big hero "X weds Y" line
      name: { te: 'శ్రీనివాస్', en: 'Srinivas' },
      // `fullName` = shown as the heading in the Couple section (with surname)
      fullName: { te: 'వనమాల శ్రీనివాస్', en: 'Vanamala Srinivas' },
      // `monogram` = the letter shown inside the arch when no photo is added
      monogram: { te: 'శ్రీ', en: 'S' },
      // `relation` (small line) + `parents` (the two names, kept on one line)
      relation: { te: 'వీరి పెద్ద కుమారుడు', en: 'Elder son of' },
      parents: {
        te: 'శ్రీ వనమాల వెంకన్న & శ్రీమతి వనమాల సంధ్యారాణి',
        en: 'Mr. Vanamala Venkanna & Mrs. Vanamala Sandhya Rani',
      },
      about: {
        te: 'వంశ గౌరవాన్ని నిలబెడుతూ, పెద్దల దీవెనలతో జీవితంలో ముందడుగు వేస్తున్న మా ముద్దుల చిరంజీవి.',
        en: 'The beloved elder son of the Vanamala family, stepping forward with the blessings of his elders.',
      },
      photo: '/images/groom.jpg', // put the file in /public/images/
    },
    bride: {
      name: { te: 'హరి ప్రియ', en: 'Hari Priya' },
      fullName: { te: 'రామిని హరి ప్రియ', en: 'Ramini Hari Priya' },
      monogram: { te: 'హ', en: 'H' },
      relation: { te: 'వీరి పెద్ద కుమార్తె', en: 'Elder daughter of' },
      parents: {
        te: 'శ్రీ రామిని చంద్రశేఖర్ & శ్రీమతి రామిని ఉషారాణి',
        en: 'Mr. Ramini Chandra Shekar & Mrs. Ramini Usha Rani',
      },
      about: {
        te: 'ఇంటికి వెలుగై, అందరి మన్ననలు అందుకుంటున్న మా గారాల చిరంజీవి సౌభాగ్యవతి.',
        en: 'The cherished elder daughter of the Ramini family, the light of her home.',
      },
      photo: '/images/bride.jpg',
    },
    weds: { te: 'వివాహం', en: 'weds' },
  },

  // Groom's brothers — small line shown under the groom's card. Set '' to hide.
  groomBrothers: {
    te: 'సోదరులు: వనమాల శ్రీకాంత్, వనమాల శివ కుమార్',
    en: 'Brothers: Vanamala Srikanth, Vanamala Shiva Kumar',
  },
  // Bride's sister — small line shown under the bride's card. Set '' to hide.
  brideSisters: {
    te: 'సోదరి: రామిని ధాన్య',
    en: 'Sister: Ramini Dhanya',
  },

  // ──────────────────────────────────────────────────────────────────
  //  2. INVOCATION (sacred blessing at the very top)
  // ──────────────────────────────────────────────────────────────────
  invocation: {
    // The classic trio shown across the top
    trio: ['శ్రీరస్తు', 'శుభమస్తు', 'అవిఘ్నమస్తు'],
    blessing: {
      te: 'శ్రీ వరసిద్ధి వినాయకుని కృపతో, పెద్దల ఆశీస్సులతో జరగబోవు మా ఇంటి శుభకార్యానికి తమరు సకుటుంబ సమేతంగా విచ్చేసి నూతన దంపతులను దీవించమని కోరుకుంటున్నాము.',
      en: 'With the blessings of Lord Ganesha and our elders, we joyfully invite you to celebrate the union of two souls.',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  //  3. WEDDING DATE  (for the countdown timer)
  //     `weddingDate` is data — format 'YYYY-MM-DDTHH:MM:SS' (24-hour).
  //     The label below it is shown to guests, so it is bilingual.
  // ──────────────────────────────────────────────────────────────────
  weddingDate: '2026-08-23T11:23:00',
  weddingDateLabel: {
    te: '2026 ఆగస్టు 23, ఆదివారం',
    en: 'Sunday, 23rd August 2026',
  },
  muhuratLabel: {
    te: 'ఉదయం 11:23 గంటల శుభ లగ్నమున',
    en: 'Shubh Muhurat · 11:23 AM',
  },

  // ──────────────────────────────────────────────────────────────────
  //  4. EVENTS TIMELINE
  //     `icon`: 'haldi' | 'wedding' | 'vratham' | 'mehendi' | 'sangeet' | 'reception'
  //     `date`, `time`, `venue` are shown to guests → bilingual.
  //     `mapUrl` = paste a Google Maps link → a "📍 View Map" button appears.
  //              (Leave '' to hide the button.)
  // ──────────────────────────────────────────────────────────────────
  events: [
    {
      // Haldi — the day BEFORE the wedding, at home
      icon: 'haldi',
      name: { te: 'హల్దీ', en: 'Haldi' },
      tagline: { te: 'పసుపు పారాణితో పెళ్ళికళ', en: 'A morning of turmeric & blessings' },
      date: { te: '2026 ఆగస్టు 22, శనివారం', en: 'Saturday, 22nd August 2026' },
      time: { te: 'ఉదయం 10 గంటల నుండి', en: '10:00 AM onwards' },
      venue: { te: 'మా స్వగృహం', en: 'Our Residence' },
      mapUrl: 'https://maps.google.com/?q=Hyderabad', // ← replace with home location
    },
    {
      // Wedding — main day, at the hall (TODO: replace venue name + map link)
      icon: 'wedding',
      name: { te: 'కల్యాణ మహోత్సవం', en: 'Vivah · Wedding' },
      tagline: { te: 'ఏడడుగుల మూడుముళ్ళ పవిత్ర బంధం', en: 'The sacred seven vows' },
      date: { te: '2026 ఆగస్టు 23, ఆదివారం', en: 'Sunday, 23rd August 2026' },
      time: { te: 'ఉదయం 11:23 శుభ లగ్నమున', en: '11:23 AM · Shubh Muhurat' },
      venue: { te: 'కల్యాణ మండపం', en: 'Wedding Hall' },
      mapUrl: 'https://maps.google.com/?q=Hyderabad', // ← replace with hall location
    },
    {
      // Satyanarayana Swamy Vratham — the day AFTER the wedding, at home, from 10 AM
      icon: 'vratham',
      name: { te: 'సత్యనారాయణ స్వామి వ్రతం', en: 'Satyanarayana Swamy Vratham' },
      tagline: { te: 'శ్రీ సత్యనారాయణ స్వామి అనుగ్రహం కోసం', en: 'A sacred puja seeking divine blessings' },
      date: { te: '2026 ఆగస్టు 24, సోమవారం', en: 'Monday, 24th August 2026' },
      time: { te: 'ఉదయం 10 గంటల నుండి', en: '10:00 AM onwards' },
      venue: { te: 'మా స్వగృహం', en: 'Our Residence' },
      mapUrl: 'https://maps.google.com/?q=Hyderabad', // ← replace with home location
    },
  ],

  // ──────────────────────────────────────────────────────────────────
  //  5. TWO FAMILIES UNITE  (arranged marriage — blessings of the families)
  //     Set `show: false` to hide this section.
  // ──────────────────────────────────────────────────────────────────
  families: {
    show: true,
    heading: { te: 'రెండు కుటుంబాల కల్యాణ బంధం', en: 'Two Families, One Bond' },
    intro: {
      te: 'పెద్దల దీవెనలతో రెండు కుటుంబాలు ఒక్కటవుతున్న ఈ శుభ సందర్భంలో మీ అందరి సమక్షం మాకు ఎంతో సంతోషం.',
      en: 'An arranged alliance blessed by elders — where two families come together as one, and a lifetime of togetherness begins.',
    },
    groomSide: {
      title: { te: 'వరుని తరఫున', en: "Groom's Family" },
      father: { te: 'శ్రీ వనమాల వెంకన్న', en: 'Mr. Vanamala Venkanna' },
      mother: { te: 'శ్రీమతి వనమాల సంధ్యారాణి', en: 'Mrs. Vanamala Sandhya Rani' },
      note: { te: 'మీ రాకతో మా ఇంటి శుభకార్యానికి శోభ చేకూర్చండి', en: 'We warmly welcome you to share in our joy' },
    },
    brideSide: {
      title: { te: 'వధువు తరఫున', en: "Bride's Family" },
      father: { te: 'శ్రీ రామిని చంద్రశేఖర్', en: 'Mr. Ramini Chandra Shekar' },
      mother: { te: 'శ్రీమతి రామిని ఉషారాణి', en: 'Mrs. Ramini Usha Rani' },
      note: { te: 'నూతన దంపతులను మనసారా దీవించండి', en: 'We humbly seek your blessings for the couple' },
    },
    blessing: {
      te: 'శ్రీ సీతారాముల వలె నూరేళ్ళు ఒక్కటై, పిల్లాపాపలతో, పాడిపంటలతో, చల్లగా ఉండాలని మనస్ఫూర్తిగా దీవిద్దాం.',
      en: 'May the couple be blessed with a long, joyful and prosperous life together.',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  //  6. SAPTAPADI — the seven steps / vows (animated footprints path)
  //     Each step reveals one vow as you scroll.
  // ──────────────────────────────────────────────────────────────────
  saptapadi: {
    show: true,
    heading: { te: 'సప్తపది', en: 'Saptapadi · Seven Steps' },
    intro: {
      te: 'అగ్నిసాక్షిగా కలిసి వేసే ఏడడుగులు — ఏడు జన్మల బంధానికి ఏడు వాగ్దానాలు',
      en: 'Seven steps taken together before the sacred fire — seven vows for a lifetime',
    },
    steps: [
      { te: 'తొలి అడుగు — తిండీ తిప్పలతో, ఆరోగ్యంతో కలిసి జీవిద్దాం', en: 'First step — for nourishment and a healthy life together' },
      { te: 'రెండో అడుగు — ఒకరికొకరు బలంగా, ధైర్యంగా తోడుంటాం', en: 'Second step — for strength of body, mind and spirit' },
      { te: 'మూడో అడుగు — సిరిసంపదలతో, సుఖసంతోషాలతో సాగుదాం', en: 'Third step — for prosperity and shared abundance' },
      { te: 'నాలుగో అడుగు — ప్రేమతో, పరస్పర గౌరవంతో కలిసుంటాం', en: 'Fourth step — for happiness through love and respect' },
      { te: 'అయిదో అడుగు — మంచి సంతానంతో, కుటుంబంతో వర్ధిల్లుదాం', en: 'Fifth step — for noble children and a blessed family' },
      { te: 'ఆరో అడుగు — అన్ని రుతువులలో, అన్ని కాలాలలో తోడుంటాం', en: 'Sixth step — for togetherness through every season' },
      { te: 'ఏడో అడుగు — జీవితాంతం స్నేహితులుగా, తోడూనీడై ఉంటాం', en: 'Seventh step — for lifelong friendship and companionship' },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  //  7. PRIMARY VENUE (shown with map)
  // ──────────────────────────────────────────────────────────────────
  venue: {
    name: { te: 'శ్రీ వేంకటేశ్వర కల్యాణ మండపం', en: 'Sri Venkateswara Kalyana Mandapam' },
    address: {
      te: 'టెంపుల్ రోడ్, హైదరాబాద్, తెలంగాణ 500001',
      en: 'Temple Road, Hyderabad, Telangana 500001',
    },
    // (address is mostly proper nouns — kept as-is in both)
    // Google Maps embed URL (Share → Embed a map → copy src="...").
    embedUrl: 'https://www.google.com/maps?q=Hyderabad&output=embed',
    directionsUrl: 'https://maps.google.com/?q=Hyderabad',
  },

  // ──────────────────────────────────────────────────────────────────
  //  7b. CONTACT — people guests can call / WhatsApp.
  //     `phone` is the plain 10-digit number (also used for WhatsApp).
  //     `cc` is the country code (91 = India) used for the WhatsApp link.
  // ──────────────────────────────────────────────────────────────────
  contact: {
    show: true,
    heading: { te: 'సంప్రదించండి', en: 'Get in Touch' },
    intro: {
      te: 'మీ రాక గురించి తెలియజేయడానికి మమ్మల్ని పలకరించండి',
      en: 'For any details, reach out to us — a call or a message away',
    },
    cc: '91',
    people: [
      { name: { te: 'వనమాల వెంకన్న', en: 'Vanamala Venkanna' }, role: { te: 'వరుని తండ్రి', en: "Groom's Father" }, phone: '9912153101' },
      { name: { te: 'వనమాల శ్రీకాంత్', en: 'Vanamala Srikanth' }, role: { te: 'వరుని సోదరుడు', en: "Groom's Brother" }, phone: '9912736754' },
      { name: { te: 'వనమాల శివ కుమార్', en: 'Vanamala Shiva Kumar' }, role: { te: 'వరుని సోదరుడు', en: "Groom's Brother" }, phone: '9701055335' },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  //  8. BACKGROUND MUSIC
  //     ▸ Drop your song file at:  public/music/sada-nannu.mp3
  //       (any .mp3 works — just match the filename or update `src` below).
  //     ▸ Music is ON by default and starts when a guest opens the
  //       invitation. The bottom-right button mutes / unmutes.
  //     ▸ Set src: '' to disable music entirely.
  // ──────────────────────────────────────────────────────────────────
  music: {
    src: '/music/sada-nannu.mp3',
    label: { te: 'సంగీతం', en: 'Music' },
  },

  // ──────────────────────────────────────────────────────────────────
  //  9. FOOTER / CLOSING
  // ──────────────────────────────────────────────────────────────────
  footer: {
    message: {
      te: 'మీరంతా తప్పక వచ్చి, మా శ్రీనివాస్ – హరి ప్రియలను దీవించి, విందారగించి వెళ్ళాలని కోరుకుంటున్నాం.',
      en: 'Do come, bless Srinivas & Hari Priya, and share in our joy — your presence means everything.',
    },
    hashtag: '#SrinivasWedsHariPriya', // hashtags stay the same in both
    // The closing sign-off — the groom's parents. Edit the names here.
    fromFamilies: {
      te: 'ఇట్లు, శుభాభినందనలతో —\nవనమాల వెంకన్న & సంధ్యా రాణి',
      en: 'With warm regards,\nVanamala Venkanna & Sandhya Rani',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  //  10. UI LABELS  (section titles, buttons — shown around your content)
  //      Usually no need to change these.
  // ──────────────────────────────────────────────────────────────────
  ui: {
    brand: { te: 'శ్రీనివాస్ ❤ హరిప్రియ', en: 'Srinivas ❤ Hari Priya' },
    deities: {
      venkateswara: { te: 'శ్రీ వేంకటేశ్వరుడు', en: 'Sri Venkateswara' },
      ganesha: { te: 'శ్రీ వినాయకుడు', en: 'Sri Ganesha' },
      shiva: { te: 'శ్రీ పరమేశ్వరుడు', en: 'Sri Shiva' },
    },
    nav: {
      savethedate: { te: 'శుభ ముహూర్తం', en: 'Save the Date' },
      couple: { te: 'వధూవరులు', en: 'Couple' },
      families: { te: 'కుటుంబాలు', en: 'Families' },
      events: { te: 'వేడుకలు', en: 'Events' },
      saptapadi: { te: 'సప్తపది', en: 'Saptapadi' },
      venue: { te: 'వేదిక', en: 'Venue' },
      contact: { te: 'సంప్రదించండి', en: 'Contact' },
    },
    hero: {
      ganeshaInvocation: { te: 'ఓం శ్రీ గణేశాయ నమః', en: 'Om Shri Ganeshaya Namaha' },
      together: { te: 'ఇరువురి కుటుంబాల ఆనందంతో', en: 'Together with their families' },
      scratchHint: { te: 'మీ ఆశీస్సుల కోసం ఎదురుచూస్తూ...', en: 'Awaiting your blessings…' },
      cta: { te: 'శుభ ముహూర్తం చూడండి ↓', en: 'OPEN SAVE THE DATE ↓' },
      tapToOpen: { te: 'శుభలేఖ తెరవండి', en: 'TAP TO OPEN' },
      awaits: { te: '— మీ కోసం ఒక శుభలేఖ —', en: '— An invitation awaits —' },
    },
    saveTheDate: {
      heading: { te: 'శుభ ముహూర్తం', en: 'Save The Date' },
      subtitle: {
        te: 'మా ఇంటి పెళ్ళి ముహూర్తం ఇదిగో',
        en: 'Our auspicious day',
      },
      // No "scratch" wording — the card animates to invite a touch and reveals on its own.
      revealedLabel: { te: 'మూడుముళ్ళ బంధం', en: 'We Tie The Knot' },
      celebrate: { te: '🎉 ఈ శుభకార్యానికి మీరంతా తప్పక రావాలి! 🎉', en: '🎉 We can’t wait to celebrate with you! 🎉' },
    },
    countdown: {
      heading: { te: 'శుభ ముహూర్తానికి మరికొన్ని రోజులు', en: 'Counting Down To Our Big Day' },
      headingHere: { te: 'శుభ ముహూర్తం వచ్చేసింది!', en: 'The Big Day Is Here!' },
      days: { te: 'రోజులు', en: 'Days' },
      hours: { te: 'గంటలు', en: 'Hours' },
      minutes: { te: 'నిమిషాలు', en: 'Minutes' },
      seconds: { te: 'క్షణాలు', en: 'Seconds' },
    },
    coupleHeading: { te: 'వధూవరులు', en: 'The Couple' },
    eventsHeading: { te: 'వేడుకలు', en: 'Wedding Festivities' },
    eventsIntro: {
      te: 'ప్రతి వేడుకలోనూ మీరు పాల్గొని మమ్మల్ని ఆశీర్వదించాలని కోరుకుంటున్నాం',
      en: 'We would be honoured by your presence at each celebration',
    },
    viewMap: { te: '📍 దారి', en: '📍 View Map' },
    galleryHeading: { te: 'తీపి జ్ఞాపకాలు', en: 'Cherished Moments' },
    venueHeading: { te: 'వివాహ వేదిక', en: 'Vivaha Vedika' },
    directions: { te: '📍 దారి', en: '📍 View Map' },
  },
}

export default content
