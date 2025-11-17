// i18n (Çok Dilli Destek Sistemi)
const translations = {
  en: {
    site_name: "TurkBlock",
    nav_rules: "Rules",
    nav_tos: "ToS",
    nav_imprint: "Imprint",
    nav_privacy: "Privacy",
    nav_join: "Join",
    nav_faq: "FAQ",
    btn_play: "Play Now",
    ip_copied: "✓ IP copied!",
    hero_title: "Join the Adventure!",
    hero_subtitle: "Explore, build and become a legend with your friends in our unique survival world!",
    btn_join_server: "Join Server",
    btn_faq: "Frequently Asked Questions",
    server_ip_title: "Server IP",
    server_info: "Premium & Cracked support • 99.9% uptime",
    rules_title: "Server Rules",
    rules_subtitle: "Core principles for our community sustainability",
    rule1_title: "Fair Play",
    rule1_desc: "Cheats, macros, x-ray and similar advantages are strictly forbidden. Suspicious cases are reviewed.",
    rule2_title: "Community Respect",
    rule2_desc: "Insults, toxic speech and discriminatory behavior result in permanent ban.",
    rule3_title: "Economy Balance",
    rule3_desc: "Market manipulation and dupes are systematically tracked, detected accounts are reset.",
    note: "Note:",
    rules_note: "Detailed rules available in config/rules.yml, you can expand language support.",
    tos_title: "Terms of Service (ToS)",
    tos_subtitle: "Everyone using our services is deemed to have accepted these terms",
    tos1_title: "Service Scope",
    tos1_desc: "Server, web services and launcher infrastructure are provided by TurkBlock Inc. Reasonable effort is made for service continuity.",
    tos2_title: "Account Responsibility",
    tos2_desc: "User account security is the player's responsibility. Contact our support team upon unauthorized access detection.",
    tos3_title: "Payment and Refunds",
    tos3_desc: "Store purchases are digital content category and refund terms comply with GDPR and relevant regulations.",
    tos4_title: "Sanctions",
    tos4_desc: "Rule violations may result in warning, temporary ban or permanent ban. Decision reasons are shared transparently.",
    imprint_title: "Imprint / Legal Information",
    imprint_subtitle: "Our company and license information",
    company_info: "Company Information",
    company_name_label: "Name:",
    company_name: "BlockCraft Network Inc.",
    company_address_label: "Address:",
    company_address: "Redstone Ave. No:21, Istanbul",
    company_tax_label: "Tax No:",
    company_tax: "1234567890",
    company_contact_label: "Contact:",
    license_title: "License & Copyright",
    license_desc: "All in-game assets are subject to Mojang Studios' Minecraft EULA. Server-specific scripts and models belong to TurkBlock.",
    privacy_title: "Privacy Policy",
    privacy_subtitle: "We take data protection seriously",
    privacy1_title: "Collected Data",
    privacy1_desc: "IP address, in-game statistics, store transactions, support records. All stored in compliance with GDPR.",
    privacy2_title: "Retention Period",
    privacy2_desc: "Data is stored encrypted as long as player account is active; anonymized after 12 months of inactivity.",
    privacy3_title: "Your Rights",
    privacy3_desc: "For data access, correction, deletion and portability rights, create a request at privacy@turkblock.net.",
    policy_update: "Policy update:",
    policy_update_desc: "We publish the current version in docs/privacy.pdf with version number.",
    join_title: "How to Join?",
    join_subtitle: "Start your adventure in three easy steps",
    step1_title: "Download Launcher",
    step1_desc: "Download Windows/Mac compatible TurkBlock Launcher latest version from Launcher page.",
    download_launcher: "Download launcher",
    step2_title: "Link Your Account",
    step2_desc: "Synchronize your Premium account or TurkBlock ID. We recommend enabling two-factor authentication.",
    step3_title: "Enter Server",
    step3_desc: "Connect to play.turkblock.net IP via launcher and complete tutorial quest.",
    apply_whitelist: "Apply for whitelist",
    social_title: "Social Media & Community",
    social_subtitle: "Follow latest news and events",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "We answered the most curious topics of our community",
    faq1_question: "What is the server version and mods?",
    faq1_answer: "Server runs on Paper 1.21.x. Custom plugins and ItemsAdder, Oraxen supported content for performance optimization.",
    faq2_question: "Can I join with non-premium accounts?",
    faq2_answer: "Yes, non-premium players can safely join with TurkBlock ID system. Two-factor authentication is mandatory.",
    faq3_question: "Is the server stable, is there lag?",
    faq3_answer: "We guarantee 99.9% uptime, offering a status panel where you can monitor TPS values live. Lag cases are logged and reported.",
    faq4_question: "How are server rules updated?",
    faq4_answer: "Rules are reviewed at least once a year. Current version is published as docs/rules.pdf and announced on Discord channel.",
    footer_description: "Turkey's most professional Minecraft survival server. Join us for an unique experience!",
    footer_quick_links: "Quick Links",
    footer_support: "Support & Contact",
    footer_discord: "Discord Community",
    footer_made_with: "Made with ❤️ in Turkey",
    footer_copyright: "© 2025 TurkBlock Inc. All rights reserved.",
    footer_contact: "Support: support@turkblock.net | Tel: +90 212 000 00 00"
  },
  pl: {
    site_name: "BlockCraft Network",
    nav_rules: "Zasady",
    nav_tos: "Warunki",
    nav_imprint: "Informacje prawne",
    nav_privacy: "Prywatność",
    nav_join: "Dołącz",
    nav_faq: "FAQ",
    btn_play: "Graj Teraz",
    ip_copied: "✓ IP skopiowane!",
    hero_title: "Dołącz do Przygody!",
    hero_subtitle: "Eksploruj, buduj i stań się legendą ze swoimi przyjaciółmi w naszym unikalnym świecie survival!",
    btn_join_server: "Dołącz do Serwera",
    btn_faq: "Często Zadawane Pytania",
    server_ip_title: "IP Serwera",
    server_info: "Wsparcie Premium i Cracked • 99.9% dostępności",
    rules_title: "Zasady Serwera",
    rules_subtitle: "Podstawowe zasady zrównoważonego rozwoju naszej społeczności",
    rule1_title: "Uczciwa Gra",
    rule1_desc: "Cheaty, makra, x-ray i podobne przewagi są surowo zabronione.",
    rule2_title: "Szacunek dla Społeczności",
    rule2_desc: "Obelgi, toksyczne wypowiedzi i zachowania dyskryminacyjne prowadzą do permanentnego bana.",
    rule3_title: "Równowaga Ekonomiczna",
    rule3_desc: "Manipulacje rynkiem i dupe są systematycznie śledzone.",
    note: "Uwaga:",
    rules_note: "Szczegółowe zasady dostępne w config/rules.yml.",
    tos_title: "Warunki Świadczenia Usług",
    tos_subtitle: "Każdy korzystający z naszych usług uznawany jest za zaakceptowanego te warunki",
    tos1_title: "Zakres Usług",
    tos1_desc: "Serwer, usługi internetowe i infrastruktura launchera są dostarczane przez BlockCraft Network Sp. z o.o.",
    tos2_title: "Odpowiedzialność za Konto",
    tos2_desc: "Bezpieczeństwo konta użytkownika jest odpowiedzialnością gracza.",
    tos3_title: "Płatność i Zwroty",
    tos3_desc: "Zakupy w sklepie to treści cyfrowe zgodne z RODO.",
    tos4_title: "Sankcje",
    tos4_desc: "Naruszenia zasad mogą prowadzić do ostrzeżenia, tymczasowego bana lub permanentnego bana.",
    imprint_title: "Informacje Prawne",
    imprint_subtitle: "Nasze informacje o firmie i licencji",
    company_info: "Informacje o Firmie",
    company_name_label: "Nazwa:",
    company_name: "BlockCraft Network Sp. z o.o.",
    company_address_label: "Adres:",
    company_address: "Redstone Ave. No:21, Stambuł",
    company_tax_label: "NIP:",
    company_tax: "1234567890",
    company_contact_label: "Kontakt:",
    license_title: "Licencja i Prawa Autorskie",
    license_desc: "Wszystkie zasoby gry podlegają EULA Minecraft od Mojang Studios.",
    privacy_title: "Polityka Prywatności",
    privacy_subtitle: "Poważnie traktujemy ochronę danych",
    privacy1_title: "Zbierane Dane",
    privacy1_desc: "Adres IP, statystyki w grze, transakcje w sklepie, zapisy wsparcia.",
    privacy2_title: "Okres Przechowywania",
    privacy2_desc: "Dane są przechowywane zaszyfrowane, dopóki konto gracza jest aktywne.",
    privacy3_title: "Twoje Prawa",
    privacy3_desc: "W celu dostępu, poprawy, usunięcia i przeniesienia danych, skontaktuj się z privacy@blockcraft.pro.",
    policy_update: "Aktualizacja polityki:",
    policy_update_desc: "Publikujemy aktualną wersję w docs/privacy.pdf.",
    join_title: "Jak Dołączyć?",
    join_subtitle: "Rozpocznij swoją przygodę w trzech prostych krokach",
    step1_title: "Pobierz Launcher",
    step1_desc: "Pobierz launcher BlockCraft kompatybilny z Windows/Mac.",
    download_launcher: "Pobierz launcher",
    step2_title: "Połącz Swoje Konto",
    step2_desc: "Zsynchronizuj swoje konto Premium lub BlockCraft ID.",
    step3_title: "Wejdź na Serwer",
    step3_desc: "Połącz się z IP play.blockcraft.pro przez launcher.",
    apply_whitelist: "Aplikuj na whitelistę",
    social_title: "Media Społecznościowe i Społeczność",
    social_subtitle: "Śledź najnowsze wiadomości i wydarzenia",
    faq_title: "Często Zadawane Pytania",
    faq_subtitle: "Odpowiedzieliśmy na najbardziej ciekawe tematy naszej społeczności",
    faq1_question: "Jaka jest wersja serwera i mody?",
    faq1_answer: "Serwer działa na Paper 1.21.x z niestandardowymi pluginami.",
    faq2_question: "Czy mogę dołączyć z kontami nie-premium?",
    faq2_answer: "Tak, gracze nie-premium mogą bezpiecznie dołączyć z systemem BlockCraft ID.",
    faq3_question: "Czy serwer jest stabilny, czy jest lag?",
    faq3_answer: "Gwarantujemy 99.9% dostępności z monitorowaniem TPS na żywo.",
    faq4_question: "Jak są aktualizowane zasady serwera?",
    faq4_answer: "Zasady są przeglądane co najmniej raz w roku.",
    footer_description: "Najbardziej profesjonalny serwer Minecraft survival w Turcji. Dołącz do nas, aby uzyskać wyjątkowe doświadczenie!",
    footer_quick_links: "Szybkie linki",
    footer_support: "Wsparcie i kontakt",
    footer_discord: "Społeczność Discord",
    footer_made_with: "Wykonane z ❤️ w Turcji",
    footer_copyright: "© 2025 BlockCraft Network Sp. z o.o. Wszelkie prawa zastrzeżone.",
    footer_contact: "Wsparcie: support@blockcraft.pro | Tel: +90 212 000 00 00"
  },
  cz: {
    site_name: "TurkBlock",
    nav_rules: "Pravidla",
    nav_tos: "Podmínky",
    nav_imprint: "Právní informace",
    nav_privacy: "Soukromí",
    nav_faq: "Časté dotazy",
    btn_play: "Hrát nyní",
    ip_copied: "✓ IP zkopírováno!",
    hero_title: "Přidej se k dobrodružství!",
    hero_subtitle: "Prozkoumávej, stav a staň se legendou se svými přáteli v našem jedinečném survival světě!",
    btn_join_server: "Připojit se k serveru",
    btn_faq: "Časté dotazy",
    server_ip_title: "IP serveru",
    server_info: "Podpora Premium a Cracked • 99.9% dostupnost",
    rules_title: "Pravidla serveru",
    rules_subtitle: "Základní principy pro udržitelnost naší komunity",
    rule1_title: "Férová hra",
    rule1_desc: "Cheaty, makra, x-ray a podobné výhody jsou přísně zakázány. Podezřelé případy jsou prošetřeny.",
    rule2_title: "Respekt ke komunitě",
    rule2_desc: "Urážky, toxická řeč a diskriminační chování vedou k trvalému banu.",
    rule3_title: "Ekonomická rovnováha",
    rule3_desc: "Manipulace s trhem a dupe jsou systematicky sledovány, odhalené účty jsou resetovány.",
    note: "Poznámka:",
    rules_note: "Podrobná pravidla najdete v config/rules.yml, můžete rozšířit jazykovou podporu.",
    tos_title: "Podmínky služby (ToS)",
    tos_subtitle: "Každý, kdo používá naše služby, je považován za přijímajícího tyto podmínky",
    tos1_title: "Rozsah služby",
    tos1_desc: "Server, webové služby a infrastruktura launcheru jsou poskytovány společností TurkBlock A.Ş. Je vynakládáno přiměřené úsilí pro kontinuitu služeb.",
    tos2_title: "Odpovědnost za účet",
    tos2_desc: "Zabezpečení uživatelského účtu je odpovědností hráče. V případě zjištění neoprávněného přístupu kontaktujte náš tým podpory.",
    tos3_title: "Platba a vratky",
    tos3_desc: "Nákupy v obchodě jsou digitální obsah a podmínky vrácení peněz jsou v souladu s GDPR a příslušnými nařízeními.",
    tos4_title: "Sankce",
    tos4_desc: "Porušení pravidel může vést k varování, dočasnému nebo trvalému banu. Důvody rozhodnutí jsou transparentně sdíleny.",
    imprint_title: "Právní informace",
    imprint_subtitle: "Informace o naší společnosti a licenci",
    company_info: "Informace o společnosti",
    company_name_label: "Název:",
    company_name: "TurkBlock A.Ş.",
    company_address_label: "Adresa:",
    company_address: "Redstone Cad. No:21, Istanbul",
    company_tax_label: "Daňové číslo:",
    company_tax: "1234567890",
    company_contact_label: "Kontakt:",
    license_title: "Licence a autorská práva",
    license_desc: "Všechny herní assety podléhají Minecraft EULA od Mojang Studios. Skripty a modely specifické pro server patří TurkBlock.",
    privacy_title: "Zásady ochrany osobních údajů",
    privacy_subtitle: "Bereme ochranu dat vážně",
    privacy1_title: "Shromažďované údaje",
    privacy1_desc: "IP adresa, herní statistiky, obchodní transakce, záznamy podpory. Vše je uloženo v souladu s GDPR.",
    privacy2_title: "Doba uchovávání",
    privacy2_desc: "Data jsou uložena šifrovaně, dokud je účet hráče aktivní; po 12 měsících nečinnosti jsou anonymizována.",
    privacy3_title: "Vaše práva",
    privacy3_desc: "Pro přístup k datům, opravu, vymazání a přenositelnost vytvořte žádost na privacy@turkblock.net.",
    policy_update: "Aktualizace zásad:",
    policy_update_desc: "Aktuální verzi zveřejňujeme v docs/privacy.pdf s číslem verze.",
    social_title: "Sociální média a komunita",
    social_subtitle: "Sledujte nejnovější zprávy a události",
    faq_title: "Často kladené otázky",
    faq_subtitle: "Odpověděli jsme na nejzajímavější témata naší komunity",
    faq1_question: "Jaká je verze serveru a módy?",
    faq1_answer: "Server běží na Paper 1.21.x. Pro optimalizaci výkonu nabízíme vlastní pluginy a obsah podporovaný ItemsAdder a Oraxen.",
    faq2_question: "Mohu se připojit s non-premium účty?",
    faq2_answer: "Ano, hráči bez premium mohou bezpečně vstoupit pomocí systému TurkBlock ID. Dvoufaktorová autentizace je povinná.",
    faq3_question: "Je server stabilní, je tam lag?",
    faq3_answer: "Garantujeme 99.9% dostupnost a nabízíme stavový panel, kde můžete sledovat hodnoty TPS živě. Případy lagů jsou logovány a hlášeny.",
    faq4_question: "Jak se aktualizují pravidla serveru?",
    faq4_answer: "Pravidla jsou přezkoumávána alespoň jednou ročně. Aktuální verze je zveřejněna jako docs/rules.pdf a oznámena na Discord kanálu.",
    footer_description: "Nejprofesionálnější Minecraft survival server v Turecku. Připojte se k nám pro jedinečný zážitek!",
    footer_quick_links: "Rychlé odkazy",
    footer_support: "Podpora a kontakt",
    footer_discord: "Komunita Discord",
    footer_made_with: "Vytvořeno s ❤️ v Turecku",
    footer_copyright: "© 2025 TurkBlock A.Ş. Všechna práva vyhrazena.",
    footer_contact: "Podpora: support@turkblock.net | Tel: +90 212 000 00 00"
  },
  ua: {
    site_name: "BlockCraft Network",
    nav_rules: "Правила",
    nav_tos: "Умови",
    nav_imprint: "Юридична інформація",
    nav_privacy: "Конфіденційність",
    nav_faq: "FAQ",
    btn_play: "Грати зараз",
    ip_copied: "✓ IP скопійовано!",
    hero_title: "Приєднуйся до пригоди!",
    hero_subtitle: "Досліджуй, будуй та стань легендою разом з друзями в нашому унікальному survival світі!",
    btn_join_server: "Приєднатися до сервера",
    btn_faq: "Часті питання",
    server_ip_title: "IP сервера",
    server_info: "Підтримка Premium та Cracked • 99.9% аптайму",
    rules_title: "Правила сервера",
    rules_subtitle: "Основні принципи стійкості нашої спільноти",
    rule1_title: "Чесна гра",
    rule1_desc: "Чіти, макроси, x-ray та подібні переваги суворо заборонені.",
    rule2_title: "Повага до спільноти",
    rule2_desc: "Образи, токсична мова та дискримінаційна поведінка призводять до постійного бану.",
    rule3_title: "Економічний баланс",
    rule3_desc: "Маніпуляції ринком та дюпи систематично відстежуються.",
    note: "Примітка:",
    rules_note: "Детальні правила доступні в config/rules.yml.",
    footer_description: "Найпрофесійніший сервер виживання Minecraft в Туреччині. Приєднуйтесь для унікального досвіду!",
    footer_quick_links: "Швидкі посилання",
    footer_support: "Підтримка та контакт",
    footer_discord: "Спільнота Discord",
    footer_made_with: "Зроблено з ❤️ в Туреччині",
    footer_copyright: "© 2025 BlockCraft Network. Усі права захищені.",
    footer_contact: "Підтримка: support@blockcraft.pro | Тел: +90 212 000 00 00"
  },
  sk: {
  site_name: "BlockCraft Network",
  nav_rules: "Pravidlá",
  nav_tos: "Podmienky",
  nav_imprint: "Právne informácie",
  nav_privacy: "Ochrana osobných údajov",
  nav_faq: "Často kladené otázky",
  btn_play: "Hraj teraz",
  ip_copied: "✓ IP skopírovaná!",
  hero_title: "Pridaj sa k dobrodružstvu!",
  hero_subtitle: "Preskúmaj, stavaj a staň sa legendou so svojimi priateľmi v našom jedinečnom survival svete!",
  btn_join_server: "Pripoj sa na server",
  btn_faq: "Často kladené otázky",
  server_ip_title: "IP servera",
  server_info: "Podpora Premium aj Cracked • 99,9 % dostupnosť",
  rules_title: "Pravidlá servera",
  rules_subtitle: "Základné princípy pre udržateľnú komunitu",
  rule1_title: "Fair play",
  rule1_desc: "Cheaty, makrá, x-ray a podobné výhody sú prísne zakázané.",
  rule2_title: "Rešpekt ku komunite",
  rule2_desc: "Urážky, toxické správanie a diskriminácia vedú k trvalému banu.",
  rule3_title: "Ekonomická rovnováha",
  rule3_desc: "Manipulácia trhu a duplicity sú systematicky sledované.",
  note: "Poznámka:",
  rules_note: "Podrobné pravidlá sú dostupné v config/rules.yml.",
  footer_description: "Najprofesionálnejší Minecraft survival server v Turecku. Pridaj sa a zaži jedinečný zážitok!",
  footer_quick_links: "Rýchle odkazy",
  footer_support: "Podpora a kontakt",
  footer_discord: "Discord komunita",
  footer_made_with: "Vytvorené s ❤️ v Turecku",
  footer_copyright: "© 2025 BlockCraft Network. Všetky práva vyhradené.",
  footer_contact: "Podpora: support@blockcraft.pro | Tel.: +90 212 000 00 00"
},

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
  if (!translations[lang]) {
    console.warn(`Language "${lang}" not found, defaulting to Turkish`);
    lang = "tr";
  }
  
  // Tüm [data-i18n] elementlerini bul ve güncelle
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    } else {
      console.warn(`Translation key "${key}" not found for language "${lang}"`);
    }
  });
  
  console.log(`Language changed to: ${lang}`);

  // Dil bayrağını güncelle
  const langFlags = {
    tr: "🇹🇷 TR",
    en: "🇬🇧 EN",
    de: "🇩🇪 DE",
    fr: "🇫🇷 FR",
    es: "🇪🇸 ES",
    it: "🇮🇹 IT",
    pt: "🇵🇹 PT",
    br: "🇧🇷 BR",
    ru: "🇷🇺 RU",
    ja: "🇯🇵 JA",
    zh: "🇨🇳 ZH",
    ar: "🇸🇦 AR",
    pl: "🇵🇱 PL",
    cz: "🇨🇿 CZ",
    dk: "🇩🇰 DK",
    nl: "🇳🇱 NL",
    no: "🇳🇴 NO",
    se: "🇸🇪 SE",
    ua: "🇺🇦 UA",
    il: "🇮🇱 IL",
    ro: "🇷🇴 RO"
  };
  
  const currentLangEl = document.getElementById("currentLang");
  if (currentLangEl) {
    currentLangEl.textContent = langFlags[lang] || langFlags.tr;
  }

  // LocalStorage'a kaydet
  localStorage.setItem("preferred_language", lang);
  
  // HTML lang attribute güncelle
  document.documentElement.setAttribute("lang", lang);
}

// Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", () => {
  // Tarayıcı dilini veya kaydedilmiş dili al
  const savedLang = localStorage.getItem("preferred_language");
  const browserLang = navigator.language.split("-")[0];
  const defaultLang = savedLang || (translations[browserLang] ? browserLang : "tr");
  
  // Başlangıç dilini ayarla
  changeLanguage(defaultLang);
  
  // Dil dropdown click event
  document.querySelectorAll(".dropdown-item[data-lang]").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.closest('.dropdown-item');
      const selectedLang = target.getAttribute("data-lang");
      if (selectedLang) {
        changeLanguage(selectedLang);
        
        // Dropdown'u kapat (Bootstrap)
        const dropdownEl = document.getElementById("langDropdown");
        const dropdown = bootstrap.Dropdown.getInstance(dropdownEl);
        if (dropdown) {
          dropdown.hide();
        } else {
          // Dropdown'u manuel kapat
          const menu = document.querySelector('.language-menu');
          if (menu) menu.classList.remove('show');
        }
      }
    });
  });
});

