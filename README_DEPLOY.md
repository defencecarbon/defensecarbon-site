# Defence Carbon B2B Site - Final Conservative Deployment Version

이 압축본은 GitHub Pages에 업로드 가능한 정적 HTML/CSS/JS 홈페이지입니다.

## 주요 반영 사항
- 분석서비스와 장비·시험 치구 항목에서 제공 범위가 불명확한 문구를 제거했습니다.
- 실제 확인되지 않은 시험 능력·장비 표현은 조건 검토 및 협의 표현으로 완화했습니다.
- 메뉴명: 장비·시험 치구, 적용 분야, 수행 실적, 주요 수행 기관, 시험 문의로 정리했습니다.
- 시험 의뢰 페이지를 항목별 상세 브라우저 형태로 구성했습니다.
- 시험 항목별 관련 규격은 고객 요구 규격 기반 협의 또는 목적별 검토 표현으로 정리했습니다.
- 실제 사진이 없는 위치는 사진 준비 중 또는 조건 협의 안내로 표시했습니다.
- 모바일 메뉴, active 상태, 접근성 focus-visible, reduced motion, 페이지별 meta/OG/canonical을 반영했습니다.

## 배포 방법
1. 압축을 해제합니다.
2. GitHub Pages 저장소 루트에 모든 파일을 업로드합니다.
3. 실제 장비/시편/시험 사진을 확보하면 `images/placeholder-*.svg` 위치를 실제 이미지로 교체합니다.
4. 문의 양식은 사용자의 메일 프로그램을 여는 방식입니다. 실제 서버로 접수하려면 Formspree, Netlify Forms 또는 자체 API로 `contact.html`의 form action을 교체합니다.
