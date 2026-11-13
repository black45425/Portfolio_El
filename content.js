/* ===============================================================
   EDIT HERE / 이 파일에서 텍스트와 프로젝트 이미지를 수정하세요.
   1) email: 이메일 주소를 등록 (비워두면 연락 버튼 비활성)
   2) ui.ko / ui.en: 한국어·영어 사이트 공통 텍스트
   3) projects: 프로젝트 내용 + 이미지 파일 경로
   결과물 설명은 PM팀 기획과 디자이너의 시각디자인 역할을 구분합니다.
   실제 기여·연도·공개 권한을 확인한 후 문구를 수정하세요.
================================================================ */
window.PORTFOLIO_DATA = {
  email: 'leeel980913@gmail.com', // 예: 'name@example.com' — 공개 전에 본인 주소로 변경
  ui: {
    ko: {
      navWork:'WORKS', navAbout:'ABOUT', navContact:'CONTACT',
      eyebrow:'INDEPENDENT VISUAL DESIGN PORTFOLIO  /  2026',
      hero1:'Visually',hero2:'More Clear',hero3:'More creative',
      lead:'더 명확하고 더 실용적으로, 목적에 맞는 다양한 시각적 경험을 만듭니다.',
      explore:'작업물 더보기', scroll:'SCROLL TO EXPLORE',
      worksEyebrow:'01 / SELECTED PROJECTS',worksTitle:'Selected',worksTitleItalic:'works.',
      worksDesc:'실제 제작한 작업물과 사용 매체, 디자인의 의도를 함께 살펴볼 수 있는 작업물 모음입니다.',
      all:'전체', categoryCampaign:'광고',categoryContent:'콘텐츠',categoryDigital:'웹·디지털',categoryPrint:'인쇄',
      viewProject:'프로젝트 보기',
      aboutEyebrow:'02 / ABOUT',aboutTitle:'Design is',aboutTitleItalic:'communication.',
      aboutLead:'기획 내용을 목적에 맞는 결과물로 구현하는 시각·마케팅 디자이너.',
      aboutText:'광고대행사 및 마케팅 환경에서 PM팀과 협업하며 의료광고, 웹 배너, 안내문, 오프라인 홍보물을 제작했습니다. 전달받은 정보의 우선순위를 정리하고 사용 매체에 맞게 시각화하는 작업에 익숙합니다.',
      aboutExperience:'경력',aboutExperienceValue:'시각디자인 약 3년 4개월 · 전체 경력 4년 2개월',
      aboutFocus:'주요 업무',aboutFocusValue:'온라인 광고 · 정보 콘텐츠 · 웹 배너 · 인쇄 홍보물',
      aboutTools:'주요 도구',aboutToolsValue:'Adobe Photoshop · Illustrator',
      contactEyebrow:'03 / CONTACT',contactTitle:'Let’s make',contactTitleItalic:'something clear.',
      contactDesc:'면접 및 프로젝트 관련 문의는 이메일로 부탁드립니다.',
      emailLabel:'EMAIL',mailto:'이메일 보내기',emailPending:'이메일 주소 설정 전',
      back:'전체 프로젝트로',next:'다음 프로젝트',overview:'Overview',approach:'Design approach',deliverables:'Deliverables',role:'ROLE',year:'YEAR',media:'FORMAT',client:'CLIENT',
      galleryTitle:'Project visuals',galleryNote:'실제 작업물 원본 · 클릭하면 큰 이미지로 볼 수 있습니다.',
      footerNote:'SELECTED COMMERCIAL DESIGN WORKS',
      note:'작업 내용은 실제 프로젝트의 목적과 담당 범위에 맞춰 기술했습니다.',
      missingYear:'연도 확인 중'
    },
    en: {
      navWork:'WORKS',navAbout:'ABOUT',navContact:'CONTACT',
      eyebrow:'INDEPENDENT VISUAL DESIGN PORTFOLIO  /  2026',
      hero1:'VISUALISM',hero2:'MORE CLEAR',hero3:'MORE CREATIVE',
      lead:'I make visual communication clearer through advertising, content, and information design.',
      explore:'Explore selected works',scroll:'SCROLL TO EXPLORE',
      worksEyebrow:'01 / SELECTED PROJECTS',worksTitle:'Selected',worksTitleItalic:'works.',
      worksDesc:'A selection of real projects, with context, media formats, and visual design decisions.',
      all:'All',categoryCampaign:'Advertising',categoryContent:'Content',categoryDigital:'Web / Digital',categoryPrint:'Print',
      viewProject:'View project',
      aboutEyebrow:'02 / ABOUT',aboutTitle:'Design is',aboutTitleItalic:'communication.',
      aboutLead:'A visual and marketing designer turning briefs into purposeful outcomes.',
      aboutText:'Working alongside planning teams at a marketing agency, I produced healthcare campaigns, website banners, informational graphics, and print materials. My focus is translating approved briefs into legible, channel-appropriate visual work.',
      aboutExperience:'EXPERIENCE',aboutExperienceValue:'Approx. 3 years 4 months in visual design · 4 years 2 months total',
      aboutFocus:'FOCUS',aboutFocusValue:'Advertising · Information design · Web banners · Print',
      aboutTools:'TOOLS',aboutToolsValue:'Adobe Photoshop · Illustrator',
      contactEyebrow:'03 / CONTACT',contactTitle:'Let’s make',contactTitleItalic:'something clear.',
      contactDesc:'For interviews and project inquiries, please get in touch via email.',
      emailLabel:'EMAIL',mailto:'Send email',emailPending:'Email address not yet set',
      back:'Back to works',next:'Next project',overview:'Overview',approach:'Design approach',deliverables:'Deliverables',role:'ROLE',year:'YEAR',media:'FORMAT',client:'CLIENT',
      galleryTitle:'Project visuals',galleryNote:'Original project artwork · Click to view full-size.',
      footerNote:'SELECTED COMMERCIAL DESIGN WORKS',
      note:'Descriptions reflect project purposes and visual-design responsibilities.',
      missingYear:'Year to be verified'
    }
  },
  projects: [
    {
      id:'website-main-banners', number:'01', categories:['digital','campaign'], style:'wide', coverBg:'#e1e8e7',
      year:'',
      images:[
        {src:'images/web-safe-care.jpg',ko:'안심진료 시스템 — 홈페이지 메인 롤링 배너',en:'Safe dental care system — homepage slider'},
        {src:'images/web-implant-insurance.jpg',ko:'임플란트 건강보험 안내 — 홈페이지 메인 롤링 배너',en:'Implant insurance information — homepage slider'}
      ],
      ko:{title:'홈페이지 메인 배너',subtitle:'WEB / MAIN ROLLING BANNER',summary:'병원의 진료 시스템과 주요 서비스를 소개한 홈페이지 메인 롤링 배너 2종.',client:'치과 홈페이지',role:'PM팀 기획서 기반 시각디자인 · 레이아웃 · 그래픽 편집',media:'홈페이지 메인 롤링 배너',overview:'치과 홈페이지의 첫 화면에서 방문자에게 병원의 진료 시스템과 주요 서비스 정보를 전달하기 위해 제작된 롤링 배너입니다.',approach:'안심진료 배너는 여백과 아이콘을 활용해 정보별 구분을 명확히 했고, 임플란트 배너는 제품 이미지를 중심으로 핵심 메시지의 시각적 위계를 구성했습니다.',deliverables:'홈페이지 메인 롤링 배너 2종'},
      en:{title:'Website Main Banners',subtitle:'WEB / MAIN ROLLING BANNER',summary:'Two homepage slider banners introducing dental care systems and services.',client:'Dental clinic websites',role:'Visual design, layout and graphic editing based on PM briefs',media:'Homepage rolling banners',overview:'Homepage slider visuals created to introduce clinical care systems and key services to website visitors.',approach:'The care-system banner uses generous space and pictograms to separate information; the implant banner emphasizes service messaging through product imagery and typographic hierarchy.',deliverables:'Two homepage slider graphics'}
    },
    {
      id:'paldori-menu',number:'02',categories:['print','campaign'],style:'poster',coverBg:'#eadfd8',year:'2026',
      images:[
        {src:'images/paldori-a2.jpg',ko:'팔도리 신메뉴 안내문 · A2',en:'Paldori new menu promotion · A2 poster'},
        {src:'images/paldori-xbanner.jpg',ko:'팔도리 신메뉴 안내문 · X배너',en:'Paldori new menu promotion · X-banner'}
      ],
      ko:{title:'팔도리 신메뉴 홍보',subtitle:'RESTAURANT / PRINT PROMOTION',summary:'외식업 신메뉴를 A2 안내문과 X배너 두 규격으로 제작한 인쇄 홍보 디자인.',client:'팔도리',role:'요청 사항 기반 시각디자인 · 인쇄 규격별 레이아웃 구성',media:'A2 안내문 · X배너',overview:'식당의 신메뉴 세트를 알리기 위해 A2 안내문과 X배너로 제작한 인쇄용 홍보 디자인입니다.',approach:'짙은 적색과 금색의 대비로 메뉴명을 강조하고, 음식 사진과 가격 정보를 배치했습니다. 가로폭이 좁은 X배너에서는 정보가 위에서 아래로 읽히도록 구성 순서를 다시 조정했습니다.',deliverables:'A2 인쇄 안내문 1종 · X배너 1종'},
      en:{title:'Paldori Menu Promotion',subtitle:'RESTAURANT / PRINT PROMOTION',summary:'A restaurant menu promotion adapted for A2 print and a vertical X-banner.',client:'Paldori',role:'Visual design and format-specific layouts based on the brief',media:'A2 poster · X-banner',overview:'Print promotions introducing a new restaurant set menu, produced in A2 and vertical X-banner formats.',approach:'Deep red and gold highlight the menu name, while food imagery and pricing anchor the composition. The X-banner uses a reflowed vertical hierarchy rather than a simple crop of the A2 layout.',deliverables:'One A2 promotional poster · One X-banner'}
    },
    {
      id:'winter-orthodontics',number:'03',categories:['campaign','print'],style:'poster',coverBg:'#e3eaf3',year:'2025',
      images:[{src:'images/winter-orthodontics.jpg',ko:'겨울방학 교정 이벤트 · A4 안내문',en:'Winter orthodontic campaign · A4 notice'}],
      ko:{title:'겨울방학 교정 이벤트',subtitle:'SEASONAL CAMPAIGN / PRINT',summary:'겨울 풍경과 시즌 타이포그래피를 활용한 치과 교정 프로모션.',client:'하루소아치과',role:'PM팀 기획서 기반 시각디자인 · 안내문 편집',media:'A4 인쇄 안내문',overview:'겨울방학 기간의 교정 프로모션 내용을 안내하는 A4 인쇄물입니다.',approach:'눈이 쌓인 제목 표현과 겨울 풍경을 사용해 시기적 특성을 시각화하고, 세 가지 이벤트 정보를 별도의 영역으로 구분해 조건과 금액을 확인하기 쉽게 구성했습니다.',deliverables:'겨울방학 교정 이벤트 A4 안내문'},
      en:{title:'Winter Orthodontic Campaign',subtitle:'SEASONAL CAMPAIGN / PRINT',summary:'Seasonal orthodontic promotion with winter-themed lettering and illustrated scenery.',client:'Haru Pediatric Dental Clinic',role:'Visual design and print layout based on a PM brief',media:'A4 printed notice',overview:'An A4 promotional notice communicating orthodontic offers during the winter school break.',approach:'Snow-covered title lettering and a winter landscape express the season, while three separated information panels help readers compare the campaign offers.',deliverables:'One A4 winter orthodontic campaign poster'}
    },
    {
      id:'four-step-paincare',number:'04',categories:['content','print'],style:'poster',coverBg:'#dfeaf1',year:'',
      images:[{src:'images/four-step-paincare.jpg',ko:'4단계 통증케어 시스템 안내문',en:'Four-step pain care system information graphic'}],
      ko:{title:'4단계 통증케어',subtitle:'MEDICAL / INFORMATION DESIGN',summary:'진료 과정의 네 가지 통증 관리 방식을 단계별로 시각화한 정보형 안내문.',client:'서울박사치과',role:'PM팀 기획서 기반 정보 시각화 · 아이콘 및 레이아웃 구성',media:'진료 안내문',overview:'병원의 통증 관리 방식 네 가지를 환자에게 전달하기 위한 의료 정보 안내문입니다.',approach:'서로 다른 진료 방식을 원형 아이콘과 세로형 정보 패널로 분리하고, 핵심 설명에 타이포그래피 위계를 부여해 정보 탐색을 돕도록 구성했습니다.',deliverables:'4단계 통증케어 시스템 안내문'},
      en:{title:'Four-Step Pain Care',subtitle:'MEDICAL / INFORMATION DESIGN',summary:'An informational design presenting four approaches to pain management.',client:'Seoul PhD Dental Clinic',role:'Information graphics, pictograms and layout based on a PM brief',media:'Patient information graphic',overview:'An informational graphic created to introduce four approaches to pain management used at the dental clinic.',approach:'Circular pictograms and separate vertical panels distinguish the four topics, while typographic hierarchy supports quick scanning of the explanations.',deliverables:'One pain-care informational graphic'}
    },
    {
      id:'cashback-promotion',number:'05',categories:['campaign','print'],style:'poster',coverBg:'#dce8f6',year:'2026',
      images:[{src:'images/cashback-20.jpg',ko:'3개월간 캐시백 20% 확대 안내문',en:'20% cashback promotion poster'}],
      ko:{title:'캐시백 프로모션',subtitle:'PROMOTION / COMMERCIAL DESIGN',summary:'혜택 수치와 카드 그래픽을 강조한 캐시백 20% 프로모션 안내 디자인.',client:'연세아이웰어린이치과',role:'PM팀 기획서 기반 프로모션 시각디자인',media:'A4 프로모션 안내문',overview:'캐시백 혜택 확대 내용을 안내하는 상업용 홍보 디자인입니다.',approach:'파란색 배경과 큰 숫자를 사용해 핵심 할인 혜택을 먼저 전달하고, 카드·리본 이미지를 중심으로 캠페인의 시각적 집중도를 높였습니다.',deliverables:'캐시백 20% 확대 A4 안내문'},
      en:{title:'Cashback Promotion',subtitle:'PROMOTION / COMMERCIAL DESIGN',summary:'A commercial promotion focused on the expanded 20% cashback offer.',client:'Yonsei Iwell Pediatric Dental Clinic',role:'Promotional visual design based on a PM brief',media:'A4 promotional notice',overview:'A promotional graphic communicating an expanded cashback offer.',approach:'A blue palette and oversized numbers lead with the core offer, supported by card and ribbon imagery for immediate visual recognition.',deliverables:'One A4 cashback promotion notice'}
    },
    {
      id:'growth-examination',number:'06',categories:['content','print'],style:'poster',coverBg:'#ece8de',year:'2025',
      images:[{src:'images/growth-examination.jpg',ko:'성장예측검사 안내문',en:'Growth prediction examination information graphic'}],
      ko:{title:'성장예측검사 안내문',subtitle:'EDUCATIONAL / EDITORIAL DESIGN',summary:'성장예측검사 관련 질문과 내용을 학습지 콘셉트로 구성한 정보형 인쇄물.',client:'원업크리에이티브',role:'기획서 기반 시각디자인 · 안내문 레이아웃',media:'인쇄 안내문',overview:'성장예측검사에 대한 관심을 유도하고 검사 관련 정보를 소개하기 위한 안내 콘텐츠입니다.',approach:'격자 노트 배경과 포인트 컬러, 질문형 문장을 사용해 학부모가 주요 내용을 순차적으로 살펴볼 수 있도록 시각적 흐름을 구성했습니다.',deliverables:'성장예측검사 인쇄 안내문'},
      en:{title:'Growth Examination Guide',subtitle:'EDUCATIONAL / EDITORIAL DESIGN',summary:'An educational print design explaining growth-prediction examinations.',client:'Oneup Creative',role:'Visual design and informational layout based on a brief',media:'Printed information graphic',overview:'An informational print piece introducing growth-prediction examinations and related questions.',approach:'A graph-paper motif, accent colors and question-led sections organize the information into an approachable reading sequence.',deliverables:'One printed growth-examination guide'}
    }
  ]
};
