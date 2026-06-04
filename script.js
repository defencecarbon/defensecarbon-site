const SERVICE_GROUPS = [
  {
    id: 'mechanical', title: '복합재료 기계적 시험', label: 'Mechanical', note: '인장·압축·전단·굽힘 등 기본 물성평가', href: 'request.html#mechanical',
    items: [
      {name:'인장·압축 시험', href:'service-detail.html?service=tensile'},
      {name:'전단·굽힘 시험', href:'service-detail.html?service=shear'},
      {name:'층간파괴인성 시험', href:'service-detail.html?service=fracture'}
    ]
  },
  {
    id: 'temperature', title: '상온·저온·고온 환경 기계시험', label: 'Temperature', note: '-150℃ ~ 1600℃ 환경 조건 기계시험', href: 'request.html#temperature',
    items: [
      {name:'환경 조건별 기계시험', href:'service-detail.html?service=temperature'},
      {name:'저온·고온 인장/압축', href:'service-detail.html?service=temperature'},
      {name:'온도별 물성 비교', href:'service-detail.html?service=temperature'}
    ]
  },
  {
    id: 'pressure', title: '압력용기·구조 성능평가', label: 'Pressure Vessel', note: '수압시험과 내압 성능평가 중심', href: 'request.html#pressure',
    items: [
      {name:'복합재 압력용기 수압시험', href:'service-detail.html?service=pressure'},
      {name:'내압 성능평가', href:'service-detail.html?service=pressure'},
      {name:'반복 가압·누수 확인', href:'service-detail.html?service=pressure'}
    ]
  },
  {
    id: 'specimen-report', title: '시편가공·성적서·기술지원', label: 'Preparation / Report', note: '시편 준비부터 결과 정리까지 지원', href: 'request.html#specimen-report',
    items: [
      {name:'복합재 쿠폰 시편 가공', href:'service-detail.html?service=specimen'},
      {name:'탭 접착·홀/노치 가공', href:'service-detail.html?service=specimen'},
      {name:'시험성적서·데이터 정리', href:'service-detail.html?service=specimen'}
    ]
  }
];

const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const escapeHTML = (value) => String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));

function serviceListMarkup(group, compact = false){
  const items = compact ? group.items.slice(0, 6) : group.items;
  return items.map(item => `
    <li><a href="${escapeHTML(item.href)}">${escapeHTML(item.name)}</a></li>`).join('');
}

function renderServiceMenus(){
  document.querySelectorAll('[data-service-menu]').forEach(target => {
    target.innerHTML = SERVICE_GROUPS.map(group => `
      <article class="mega-card" id="mega-${escapeHTML(group.id)}">
        <a class="mega-card-title" href="${escapeHTML(group.href)}"><span>${escapeHTML(group.label)}</span><strong>${escapeHTML(group.title)}</strong></a>
        <p class="mega-card-note">${escapeHTML(group.note)}</p>
      </article>`).join('');
  });
  document.querySelectorAll('[data-service-directory]').forEach(target => {
    target.innerHTML = SERVICE_GROUPS.map(group => `
      <article class="service-directory-card" id="${escapeHTML(group.id)}">
        <div class="directory-card-head"><span>${escapeHTML(group.label)}</span><h3>${escapeHTML(group.title)}</h3><p>${escapeHTML(group.note)}</p></div>
        <a class="directory-more" href="${escapeHTML(group.href)}">분류 설명 보기</a>
      </article>`).join('');
  });
}
renderServiceMenus();

const SERVICE_DETAILS = {
  tensile: {
    category:'복합재료 기계적 시험', title:'복합재 인장시험', english:'Composite Tensile Test',
    fixtureImage:'images/fixture-tensile.jpg', fixtureAlt:'인장시험용 시험 치구 예시 이미지',
    summary:'복합재 적층판 및 성형 부품의 하중 방향 인장 특성을 평가하여 인장강도, 탄성계수, 파단변형률 및 응력-변형률 곡선을 산출합니다.',
    purpose:'섬유 방향, 적층 구성, 탭 적용 여부에 따른 복합재료의 기본 인장 물성을 확인하고 설계·논문·과제용 기초 데이터를 확보합니다.',
    table:[['적용 대상','CFRP, GFRP, 프리프레그 적층판, 복합재 성형 부품, coupon 시편'],['측정 조건','상온 시험을 기본으로 하며, 저온·고온 조건은 장비·치구·시편 조건 검토 후 협의'],['적용 규격','ASTM/ISO 등 고객 요구 규격 기반 협의'],['주요 산출값','인장강도, 인장탄성계수, 파단변형률, S-S curve, 파단 위치'],['의뢰 필요 정보','소재명, 적층 구성, 시편 치수, 수량, 시험 온도, 탭 적용 여부']],
    result:'응력-변형률 곡선과 반복 시편별 강도·탄성계수·CV 값을 정리하여 시험 재현성과 파손 양상을 함께 검토합니다.',
    specimen:'직사각형 coupon 또는 탭 적용 coupon을 사용하며, 시편 형상은 적용 규격과 고객 도면을 기준으로 검토합니다.'
  },
  compression: {
    category:'복합재료 기계적 시험', title:'복합재 압축시험', english:'Composite Compression Test',
    fixtureImage:'images/fixture-compression.jpg', fixtureAlt:'압축시험용 시험 치구 예시 이미지',
    summary:'압축 하중 조건에서 복합재 적층판의 압축강도, 압축탄성계수, 좌굴 및 압궤 파손 거동을 평가합니다.',
    purpose:'항공우주·방산 복합재 구조에서 중요한 압축 지배 파손을 확인하고 설계 허용값 산정을 위한 데이터를 확보합니다.',
    table:[['적용 대상','CFRP/GFRP 적층판, 항공우주용 패널, 프리프레그 성형재'],['측정 조건','상온 시험을 기본으로 하며, 저온·고온 조건은 장비·치구·시편 조건 검토 후 협의'],['적용 규격','ASTM/ISO 등 고객 요구 규격 기반 협의'],['주요 산출값','압축강도, 압축탄성계수, 하중-변위 곡선, 좌굴/압궤 양상'],['의뢰 필요 정보','시편 두께, 탭 유무, 적층 방향, 시험 온도, fixture 요구사항']],
    result:'파손 위치가 유효 게이지부에서 발생하는지 확인하고, 좌굴·층간분리·압궤 양상을 결과표와 사진으로 정리합니다.',
    specimen:'압축 coupon, 탭 적용 시편, 고객 도면 기반 시편을 시험 목적에 맞게 검토합니다.'
  },
  flexural: {
    category:'복합재료 기계적 시험', title:'복합재 굽힘시험', english:'Composite Flexural Test',
    fixtureImage:'images/fixture-flexural.png', fixtureAlt:'굽힘시험용 시험 치구 예시 이미지',
    summary:'3점 또는 4점 굽힘 조건에서 복합재 beam 시편의 굽힘강도, 굽힘탄성계수 및 하중-변위 거동을 평가합니다.',
    purpose:'적층판의 굽힘 지배 구조 성능과 표면 압축/인장 파손, 층간분리 발생 여부를 확인합니다.',
    table:[['적용 대상','복합재 적층판, sandwich panel, beam 시편, 성형 부품 절취 시편'],['측정 조건','상온 시험을 기본으로 하며, 저온·고온 조건은 장비·치구·시편 조건 검토 후 협의'],['적용 규격','ASTM/ISO 등 고객 요구 규격 기반 협의'],['주요 산출값','굽힘강도, 굽힘탄성계수, 최대하중, 하중-변위 곡선'],['의뢰 필요 정보','시편 치수, span 조건, 3점/4점 여부, 시험 온도']],
    result:'하중-변위 곡선, 최대하중, 굽힘강도와 함께 압축면·인장면·층간분리 파손을 구분해 정리합니다.',
    specimen:'직사각형 beam 시편을 기본으로 하며 span-to-thickness 조건은 적용 규격과 시편 두께에 따라 조정합니다.'
  },
  shear: {
    category:'복합재료 기계적 시험', title:'복합재 전단 / ILSS 시험', english:'Composite Shear & ILSS Test',
    fixtureImage:'images/fixture-shear.jpg', fixtureAlt:'전단시험용 시험 치구 예시 이미지',
    summary:'복합재의 층간 전단강도, in-plane shear 특성 및 전단 지배 파손 거동을 평가합니다.',
    purpose:'수지·계면·층간 특성이 지배적인 복합재 전단 물성을 확인하고 적층 조건별 취약 파손 모드를 비교합니다.',
    table:[['적용 대상','CFRP/GFRP 적층판, short-beam 시편, Iosipescu 시편, 고객 도면 시편'],['측정 조건','상온 시험을 기본으로 하며, 저온·고온 조건은 장비·치구·시편 조건 검토 후 협의'],['적용 규격','ASTM/ISO 등 고객 요구 규격 기반 협의'],['주요 산출값','ILSS, 전단강도, 전단탄성계수, 하중-변위 곡선, 파손 모드'],['의뢰 필요 정보','전단 방식, 시편 치수, 적층 구성, 시험 온도, fixture 조건']],
    result:'층간분리, 전단 파손, 압축성 손상 등 파손 모드를 사진과 함께 기록하여 결과 해석 신뢰성을 높입니다.',
    specimen:'Short beam, Iosipescu, rail shear 등 시험 목적에 맞는 시편 형상과 치구를 검토합니다.'
  },
  fracture: {
    category:'복합재료 기계적 시험', title:'층간파괴인성 시험', english:'Interlaminar Fracture Toughness Test',
    fixtureImage:'images/fixture-mixed-mode.jpg', fixtureAlt:'Mixed-mode 층간파괴인성 시험 치구 예시 이미지',
    summary:'층간파괴인성 및 균열 성장 거동 평가는 시편 형상, 시험 규격, 치구 조건을 검토한 뒤 수행 조건을 협의합니다.',
    purpose:'복합재 구조의 delamination 저항성, 접착 계면 안정성, 적층 설계별 균열 성장 거동은 의뢰 조건을 확인한 뒤 평가 범위를 협의합니다.',
    table:[['적용 대상','일방향/직물 복합재 적층판 및 고객 도면 기반 시편'],['측정 조건','상온 시험 및 필요 시 온도 조건 협의'],['적용 규격','시험 목적, 시편 형상, 치구 조건에 따라 목적별 검토'],['주요 산출값','GIC, GIIC, Gc, 하중-변위 곡선, 균열 성장 저항곡선'],['의뢰 필요 정보','초기 균열 길이, insert 위치, 적층 방향, 시편 치수, 균열 관찰 방식']],
    result:'수행 조건이 확정된 경우 균열 길이 변화와 하중-변위 데이터를 연결해 결과를 정리합니다.',
    specimen:'시편 형상, 초기 균열 조건, 관찰 방식 및 치구 구성을 사전에 검토합니다.'
  },
  temperature: {
    category:'고온·저온 환경 기계시험', title:'상온·저온·고온 환경 기계시험', english:'Low / High Temperature Mechanical Test',
    fixtureImage:'images/equipment-environment-mechanical.png', fixtureAlt:'고온 환경 기계시험 장비 예시 이미지',
    summary:'복합재료의 인장·압축·굽힘·전단 시험은 상온을 기본으로 하며, 환경시험 온도 범위는 -150℃부터 1600℃까지 시험 항목과 장비 조건에 따라 협의합니다.',
    purpose:'극저온, 저온, 고온, 열노화 등 환경 조건의 반영 여부는 목표 온도, 유지 시간, 장비 및 치구 조건을 확인한 뒤 검토합니다.',
    table:[['적용 시험','인장, 압축, 굽힘, 전단 등 주요 기계시험'],['측정 조건','환경시험 온도 범위는 -150℃ ~ 1600℃이며, 세부 조건은 장비·치구·시편 조건 검토 후 협의'],['적용 규격','ASTM/ISO 등 기본 규격에 온도 조건을 조합하여 협의'],['주요 산출값','온도별 강도, 탄성계수, 파단변형률, 강도 유지율, 파손 양상 변화'],['의뢰 필요 정보','시험 온도, 유지 시간, 가열/냉각 조건, 시편 수량, 기준 상온 데이터 여부']],
    result:'온도별 시험 결과를 하나의 표와 그래프로 비교하여 강도 유지율과 온도 민감도를 제시합니다.',
    specimen:'상온 시험과 동일 형상을 우선 검토하되, 고온/저온 grip 및 치구 간섭을 고려해 시편 길이와 탭 조건을 조정할 수 있습니다.'
  },
  pressure: {
    category:'압력용기·구조 성능평가', title:'복합재 압력용기 성능평가', english:'Composite Pressure Vessel Evaluation',
    fixtureImage:'images/equipment-hydrostatic.png', fixtureAlt:'복합재 압력용기 수압시험 장비 예시 이미지',
    summary:'복합재 압력용기는 수압시험 및 내압 성능평가를 중심으로 검토하며, 한계 압력 조건은 용기 사양·목표 압력·방호 조건 확인 후 협의합니다.',
    purpose:'설계 압력 대비 성능, 제작 조건별 차이, 라이너/섬유 보강부의 취약부 확인 여부를 사전 협의합니다.',
    table:[['적용 대상','복합재 압력용기, 수소저장 용기, 필라멘트 와인딩 구조물, 구조 시제품'],['측정 조건','수압시험, 반복 가압, 누수 확인 등 목적별 조건 설정'],['적용 규격','고객 요구 규격, 제품 사양, 산업 규격 기반 협의'],['주요 산출값','최대 압력, 압력-시간 이력, 누수 여부, 파손 위치 등'],['의뢰 필요 정보','용기 체적, 설계압력, end fitting, 시험 압력 조건, 방호 요구사항']],
    result:'압력-시간 이력, 파손 사진, 누수 여부, 라이너 입구부 손상 여부를 정리하여 구조 개선 판단 자료로 제공합니다.',
    specimen:'고객 제공 압력용기 또는 제작 용기를 대상으로 하며 체결부, sealing, 목표 압력 및 방호 조건을 사전에 확인합니다.'
  },
  specimen: {
    category:'시편가공·성적서·기술지원', title:'시편가공 및 시험 기술지원', english:'Specimen Preparation & Technical Support',
    fixtureImage:'images/specimen-machining.png', fixtureAlt:'복합재 시편 가공 및 치수 측정 실사 이미지',
    summary:'복합재 coupon 시편 가공, 탭 접착, 홀/노치 가공, 치수 측정, 시험 조건 검토 및 결과 정리를 지원합니다.',
    purpose:'시험 전 단계의 시편 품질과 규격 적합성을 확보하여 시험 결과의 재현성과 신뢰성을 높입니다.',
    table:[['지원 항목','쿠폰 가공, 탭 접착, 홀 가공, 노치 가공, 표면 연마, 치수 측정'],['적용 대상','복합재 적층판, 압력용기 절취 시편, 접합부 시편, 고객 도면 시편'],['적용 규격','ASTM/ISO 또는 고객 도면 기반 검토'],['주요 산출물','가공 시편, 치수 확인 결과, 시험성적서, raw data, 그래프'],['의뢰 필요 정보','도면, 원판 크기, 적층 방향, 수량, 납기, 시험 항목']],
    result:'시험성적서에는 시편 정보, 시험 조건, 결과표, 그래프, 파손 사진, 필요 시 평균·표준편차·CV를 포함할 수 있습니다.',
    specimen:'시험 항목에 따라 시편 방향, 탭 재질, 가공 공차, 홀/노치 위치를 사전에 검토합니다.'
  }
};

function renderServiceDetail(){
  const target = document.querySelector('[data-service-detail]');
  if(!target) return;
  const params = new URLSearchParams(location.search);
  const key = SERVICE_DETAILS[params.get('service')] ? params.get('service') : 'tensile';
  const svc = SERVICE_DETAILS[key];
  document.title = `${svc.title} | 디펜스카본 분석서비스`;
  const rows = svc.table.map(([k,v]) => `<tr><th>${escapeHTML(k)}</th><td>${escapeHTML(v)}</td></tr>`).join('');
  const related = Object.entries(SERVICE_DETAILS).map(([id,item]) => `<a class="${id===key?'active':''}" href="service-detail.html?service=${escapeHTML(id)}">${escapeHTML(item.title)}</a>`).join('');
  const fixtureFigureMarkup = svc.fixtureImage ? `<img class="paper-fixture-photo" src="${escapeHTML(svc.fixtureImage)}" alt="${escapeHTML(svc.fixtureAlt || svc.title + ' 치구 예시 이미지')}" loading="lazy" decoding="async" />` : `<svg viewBox="0 0 520 210" role="img" aria-label="시편 형상 예시"><rect x="40" y="82" width="440" height="46" rx="8" fill="#eaf2fb" stroke="#6684a3"/><rect x="80" y="90" width="360" height="30" rx="4" fill="#fff" stroke="#0b315f"/><line x1="80" y1="145" x2="440" y2="145" stroke="#0b63ce"/><path d="M80 138 L80 152 M440 138 L440 152" stroke="#0b63ce"/><text x="245" y="165" font-size="13" fill="#667085">Gauge / Bonded Area</text></svg>`;
  target.innerHTML = `
    <aside class="service-paper-nav">
      <strong>분석서비스</strong>
      ${related}
    </aside>
    <article class="service-paper">
      <div class="paper-toolbar"><span>Defence Carbon Service Sheet</span><button type="button" onclick="window.print()">PDF처럼 인쇄</button></div>
      <header class="paper-head">
        <div><span>${escapeHTML(svc.category)}</span><h1>${escapeHTML(svc.title)}</h1><p>${escapeHTML(svc.english)}</p></div>
        <img src="images/logo.png" alt="디펜스카본 로고" />
      </header>
      <section class="paper-section paper-summary"><h2>시험 개요</h2><p>${escapeHTML(svc.summary)}</p><p>${escapeHTML(svc.purpose)}</p></section>
      <section class="paper-section"><h2>서비스 개요</h2><div class="table-scroll"><table class="service-info-table"><tbody>${rows}</tbody></table></div></section>
      <section class="paper-section paper-two-col">
        <div><h2>결과 예시</h2><div class="paper-figure"><svg viewBox="0 0 520 210" role="img" aria-label="시험 결과 그래프 예시"><rect x="20" y="15" width="480" height="160" fill="#fff" stroke="#d5dce7"/><path d="M50 155 C120 140 160 105 210 84 S315 54 385 48" fill="none" stroke="#0b63ce" stroke-width="4"/><path d="M50 155 C120 144 170 112 220 89 S318 62 400 58" fill="none" stroke="#15a3a3" stroke-width="3"/><line x1="50" y1="175" x2="480" y2="175" stroke="#7c8aa0"/><line x1="50" y1="175" x2="50" y2="35" stroke="#7c8aa0"/><text x="235" y="202" font-size="13" fill="#667085">Strain / Displacement</text><text x="8" y="104" font-size="13" fill="#667085" transform="rotate(-90 14,104)">Stress / Load</text></svg></div><p>${escapeHTML(svc.result)}</p></div>
        <div><h2>시편·치구 예시</h2><div class="paper-figure specimen-figure">${fixtureFigureMarkup}</div><p>${escapeHTML(svc.specimen)}</p></div>
      </section>
      <section class="paper-section"><h2>의뢰 진행 절차</h2><div class="paper-flow"><span>시험 항목 확인</span><span>시편/조건 협의</span><span>견적</span><span>시험 수행</span><span>성적서 발행</span></div></section>
      <div class="paper-actions"><a class="btn btn-primary" href="contact.html">시험 문의하기</a><a class="btn btn-outline-dark" href="request.html">전체 서비스 보기</a></div>
    </article>`;
}
renderServiceDetail();

function closeMenu(){
  if(!header || !toggle) return;
  header.classList.remove('menu-open');
  document.querySelectorAll('.has-mega.mega-open').forEach(item => item.classList.remove('mega-open'));
  document.querySelectorAll('.mega-trigger').forEach(button => button.setAttribute('aria-expanded','false'));
  toggle.setAttribute('aria-expanded','false');
  toggle.setAttribute('aria-label','메뉴 열기');
}
if(toggle && header){
  toggle.addEventListener('click',()=>{
    const opened = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
    toggle.setAttribute('aria-label', opened ? '메뉴 닫기' : '메뉴 열기');
  });
  document.addEventListener('keydown',(e)=>{ if(e.key === 'Escape') closeMenu(); });
  document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',closeMenu));
}

document.querySelectorAll('.mega-trigger').forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const parent = button.closest('.has-mega');
    const opened = parent.classList.toggle('mega-open');
    button.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });
});
document.addEventListener('click', (event) => {
  if(!event.target.closest('.has-mega')){
    document.querySelectorAll('.has-mega.mega-open').forEach(item => item.classList.remove('mega-open'));
    document.querySelectorAll('.mega-trigger').forEach(button => button.setAttribute('aria-expanded','false'));
  }
});

const page = document.body.dataset.page;
document.querySelectorAll('[data-page]').forEach(el=>{ if(el.dataset.page === page) el.classList.add('active'); });
document.querySelectorAll('[data-current-year]').forEach(el=>{ el.textContent = new Date().getFullYear(); });

const tabs = [...document.querySelectorAll('[data-test-tab]')];
const panels = [...document.querySelectorAll('[data-test-panel]')];
function activateTest(id, replace=false){
  tabs.forEach(t=>t.classList.toggle('active', t.dataset.testTab === id));
  panels.forEach(p=>{ p.hidden = p.dataset.testPanel !== id; });
  if(replace && history.replaceState) history.replaceState(null,'',`#${id}`);
}
if(tabs.length){
  tabs.forEach((t,i)=>{
    if(i===0) t.classList.add('active');
    t.addEventListener('click',()=>activateTest(t.dataset.testTab, true));
  });
  const initial = location.hash.replace('#','');
  const first = tabs[0]?.dataset.testTab;
  if(initial && tabs.some(t=>t.dataset.testTab === initial)){
    activateTest(initial);
    setTimeout(()=>document.getElementById('test-browser')?.scrollIntoView({behavior:'smooth', block:'start'}), 80);
  } else if(first) activateTest(first);
}

const form = document.getElementById('request-form');
if(form){
  const params = new URLSearchParams(location.search);
  const test = params.get('test');
  if(test){
    const select = form.querySelector('select[name="test_item"]');
    const match = [...select.options].find(o => o.value === test || o.textContent.includes(test));
    if(match) select.value = match.value;
  }
  form.addEventListener('submit',(e)=>{
    const fd = new FormData(form);
    const labels = {
      company:'회사명/기관명', name:'담당자명', phone:'연락처', email:'이메일', test_item:'시험 항목', standard:'시험 규격', specimen:'소재/시편 정보', temperature:'시험 온도', quantity:'시편 수량', schedule:'희망 일정', attachment_note:'첨부 예정 파일명', message:'기타 요청사항'
    };
    const lines = [];
    for (const [key,value] of fd.entries()){
      const label = labels[key] || key;
      if(value instanceof File){ if(value.name) lines.push(`${label}: ${value.name} (메일에 직접 첨부 필요)`); }
      else if(String(value).trim()) lines.push(`${label}: ${value}`);
    }
    const subject = encodeURIComponent('복합재 시험 의뢰');
    const body = encodeURIComponent(lines.join('\n'));
    form.action = `mailto:shin955@hanbat.ac.kr&subject=${subject}&body=${body}`;
  });
}
