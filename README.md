# 엑셀 단축키 가이드 | Excel Shortcuts Guide

엑셀 작업을 더욱 효율적으로 만들어주는 단축키와 함수 생성기 웹사이트입니다.

![엑셀 단축키 가이드](https://img.shields.io/badge/Excel-Shortcuts-blue?style=for-the-badge&logo=microsoft-excel)
![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 주요 기능

### 📋 엑셀 단축키 사전
- **검색 기능**: "셀 병합", "굵게" 등으로 빠른 검색
- **키보드 시각화**: 해당 키가 눌려있는 상태로 하이라이트 표시
- **플랫폼 지원**: Windows / Mac 전환 가능
- **카테고리별 분류**: 서식, 이동, 데이터, 시트, 파일 관리
- **즐겨찾기**: 자주 사용하는 단축키 저장 및 관리

### 🤖 함수 생성기
- **자연어 처리**: "날짜에서 연도만 추출하고 싶어" → `=YEAR(A1)`
- **실시간 추천**: 입력하는 즉시 관련 함수 추천
- **예시 제공**: 실제 사용 예시와 결과값 표시
- **대체 함수**: 같은 기능을 다른 방식으로 하는 함수도 제안
- **원클릭 복사**: 함수를 클립보드에 바로 복사

### 🌍 다국어 지원
- **한국어** (기본)
- **English**
- **日本語**
- 언어 설정은 로컬 스토리지에 자동 저장

### 📱 반응형 디자인
- **모바일 최적화**: 터치 친화적 인터페이스
- **태블릿 지원**: 중간 화면 크기 최적화
- **데스크톱**: 대화면에서 최대 효율성

## 🚀 기술 스택

### Frontend
- **Next.js 15.5.3** - React 기반 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS 4** - 유틸리티 퍼스트 CSS
- **Lucide React** - 아이콘 라이브러리
- **Radix UI** - 접근성 우선 컴포넌트

### 상태 관리
- **React Hooks** - useState, useEffect, useMemo
- **로컬 스토리지** - 즐겨찾기 및 설정 저장

### 개발 도구
- **ESLint** - 코드 품질 관리
- **TypeScript** - 정적 타입 검사

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치
```bash
# 저장소 클론
git clone https://github.com/your-username/excel-shortcut-guide.git

# 프로젝트 디렉토리로 이동
cd excel-shortcut-guide

# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드
```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/            # 재사용 가능한 컴포넌트
│   ├── FunctionGenerator.tsx
│   ├── KeyboardVisualizer.tsx
│   ├── LanguageSelector.tsx
│   ├── PlatformToggle.tsx
│   ├── SearchBar.tsx
│   └── ShortcutCard.tsx
├── data/                  # 정적 데이터
│   ├── functionMappings.ts
│   └── shortcuts.ts
├── hooks/                 # 커스텀 훅
│   ├── useFavorites.ts
│   └── useLanguage.ts
├── lib/                   # 유틸리티 함수
│   ├── i18n.ts
│   └── utils.ts
└── types/                 # TypeScript 타입 정의
    └── shortcuts.ts
```

## 🎯 주요 컴포넌트

### ShortcutCard
- 단축키 정보 표시
- 즐겨찾기 토글 기능
- 복사 기능
- 키보드 시각화

### FunctionGenerator
- 자연어 입력 처리
- 함수 매핑 및 추천
- 예시 및 대체 함수 표시

### KeyboardVisualizer
- 키보드 키 하이라이트
- 플랫폼별 단축키 표시
- 애니메이션 효과

## 🌐 다국어 지원

새로운 언어를 추가하려면:

1. `src/lib/i18n.ts`에 언어 코드와 번역 추가
2. `src/types/shortcuts.ts`의 Language 타입에 언어 코드 추가
3. `src/components/LanguageSelector.tsx`에 언어 옵션 추가

## 📊 단축키 데이터 구조

```typescript
interface Shortcut {
  id: string;           // 고유 식별자
  name: string;         // 단축키 이름
  description: string;  // 설명
  category: string;     // 카테고리 (format, navigation, data, sheet, file)
  windows: string;      // Windows 단축키
  mac: string;         // Mac 단축키
  keywords: string[];   // 검색 키워드
}
```

## 🔧 커스터마이징

### 새로운 단축키 추가
`src/data/shortcuts.ts`에 새로운 단축키 객체를 추가하면 됩니다.

### 새로운 함수 추가
`src/data/functionMappings.ts`에 새로운 함수 매핑을 추가하면 됩니다.

### 스타일 변경
Tailwind CSS 클래스를 수정하거나 `src/app/globals.css`에서 커스텀 스타일을 추가할 수 있습니다.

## 📈 성능 최적화

- **이미지 최적화**: Next.js Image 컴포넌트 사용
- **코드 분할**: 동적 임포트로 번들 크기 최적화
- **메모이제이션**: useMemo로 검색 결과 캐싱
- **지연 로딩**: 필요시에만 컴포넌트 로드

## 🚀 배포

### Vercel (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 기타 플랫폼
- **Netlify**: `npm run build` 후 `out` 폴더 배포
- **GitHub Pages**: 정적 사이트로 빌드 후 배포
- **AWS S3**: 정적 웹사이트 호스팅

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

프로젝트 링크: [https://github.com/your-username/excel-shortcut-guide](https://github.com/your-username/excel-shortcut-guide)

## 🙏 감사의 말

- [Next.js](https://nextjs.org/) - 훌륭한 React 프레임워크
- [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 퍼스트 CSS 프레임워크
- [Lucide](https://lucide.dev/) - 아름다운 아이콘 라이브러리
- [Radix UI](https://www.radix-ui.com/) - 접근성 우선 컴포넌트

---

⭐ 이 프로젝트가 도움이 되었다면 별표를 눌러주세요!