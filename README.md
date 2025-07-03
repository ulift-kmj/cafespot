# CafeSpot ☕

카페 정보를 검색하고 탐색할 수 있는 웹 애플리케이션입니다. 다양한 카페들을 찾아보고, 즐겨찾기에 추가하며, 상세 정보와 위치를 확인할 수 있습니다.

## 📋 주요 기능

### 🔍 카페 검색 및 필터링

- **검색**: 카페 이름이나 주소로 검색
- **카테고리 필터**: 근교, 대형, 디저트, 루프탑, 북카페, 뷰맛집, 복합문화, 건축/테마 등
- **실시간 검색**: 디바운스를 적용한 실시간 검색 결과

### 📱 카페 목록 및 상세 정보

- **무한 스크롤**: 페이지네이션을 통한 효율적인 데이터 로딩
- **카페 카드**: 이미지, 이름, 주소가 포함된 카드 형태의 목록
- **상세 페이지**: 카페의 모든 정보를 한눈에 볼 수 있는 상세 페이지

### ⭐ 즐겨찾기 시스템

- **찜하기**: 마음에 드는 카페를 즐겨찾기에 추가
- **사이드바**: 찜한 카페들을 모아서 볼 수 있는 전용 사이드바
- **로컬 저장**: 브라우저 로컬 스토리지를 활용한 데이터 유지

### 🗺️ 위치 정보

- **카카오 지도**: 카페 위치를 지도에서 확인
- **주소 검색**: 주소를 통한 자동 위치 설정
- **마커 표시**: 카페 위치에 마커 표시

### 🏢 카페 시설 정보

- **편의시설**: 와이파이, 주차, 화장실, 반려동물 동반, 포장, 배달, 단체석, 애플페이 등
- **아이콘 표시**: 직관적인 아이콘을 통한 시설 정보 표시

## 🛠️ 기술 스택

### Frontend

- **React 19** - 최신 React 버전
- **TypeScript** - 타입 안전성
- **Vite** - 빠른 개발 환경
- **TailwindCSS** - 유틸리티 기반 CSS 프레임워크
- **React Router** - 클라이언트 사이드 라우팅

### 상태 관리 및 데이터 패칭

- **TanStack Query (React Query)** - 서버 상태 관리
- **Zustand** - 클라이언트 상태 관리

### UI 컴포넌트

- **Radix UI** - 접근성이 뛰어난 UI 프리미티브
- **Lucide React** - 아이콘 라이브러리
- **React Icons** - 추가 아이콘 세트
- **Embla Carousel** - 이미지 캐러셀

### 백엔드 & 데이터베이스

- **Supabase** - Backend as a Service
- **PostgreSQL** - 관계형 데이터베이스

### 외부 API

- **카카오 지도 API** - 지도 및 위치 서비스

## 📁 프로젝트 구조

```
src/
├── api/                    # API 관련 함수들
│   └── cafeApi.ts         # 카페 API 호출 함수
├── components/            # 재사용 가능한 컴포넌트들
│   ├── CafeDetail/       # 카페 상세 페이지 컴포넌트
│   ├── CafeList/         # 카페 목록 컴포넌트
│   ├── Layout/           # 레이아웃 컴포넌트
│   ├── commons/          # 공통 컴포넌트
│   └── ui/               # 기본 UI 컴포넌트
├── constants/            # 상수 정의
├── context/              # React Context
├── hooks/                # 커스텀 훅
├── lib/                  # 라이브러리 설정
├── pages/                # 페이지 컴포넌트
├── routes/               # 라우팅 설정
├── stores/               # Zustand 스토어
└── types/                # TypeScript 타입 정의
```

## 🚀 시작하기

### 환경 요구사항

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**

```bash
git clone <repository-url>
cd cafespot
```

2. **의존성 설치**

```bash
npm install
```

3. **환경 변수 설정**
   `.env` 파일을 생성하고 다음 변수들을 설정하세요:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_KAKAO_MAP_API_KEY=your_kakao_map_api_key
```

4. **개발 서버 실행**

```bash
npm run dev
```

5. **빌드**

```bash
npm run build
```

### 환경 변수 설정 가이드

#### Supabase 설정

1. [Supabase](https://supabase.com)에서 새 프로젝트 생성
2. 프로젝트 설정에서 API URL과 anon key 확인
3. `.env` 파일에 추가

#### 카카오 지도 API 설정

1. [카카오 개발자 센터](https://developers.kakao.com)에서 애플리케이션 등록
2. 웹 플랫폼 추가 및 도메인 설정
3. JavaScript 키를 `.env` 파일에 추가

## 📊 데이터베이스 구조

### 주요 테이블

- **cafes**: 카페 기본 정보 (id, name, address, description)
- **photos**: 카페 사진 (cafe_id, url)
- **facilities**: 카페 시설 정보 (cafe_id, facility_type, is_available)
- **summaries**: 카페 특성 정보 (cafe_id, summary_type, is_available)

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: 브랜드 메인 컬러
- **Dark Brown**: 텍스트 및 강조 색상
- **Gray Scale**: 다양한 회색 톤

### 반응형 디자인

- **Mobile First**: 모바일 우선 디자인
- **Breakpoints**: TailwindCSS 기본 브레이크포인트 사용

## 🔧 주요 기능 구현

### 1. 무한 스크롤

```typescript
const { data, hasNextPage, fetchNextPage } = useCafeList(10, query, summary);
const { loadMoreRef } = useInfiniteScroll({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
});
```

### 2. 검색 디바운스

```typescript
const debouncedSearchQuery = useDebounce(searchQuery, 500);
```

### 3. 카카오 지도 연동

```typescript
const { initMap, updateMapWithAddress } = useKakaoMap(mapRef);
```

### 4. 즐겨찾기 관리

```typescript
const { isFavorite, toggleFavorite, favoriteCafes } = useFavorite();
```

## 📱 반응형 지원

- **Desktop**: 1024px 이상
- **Tablet**: 768px - 1023px
- **Mobile**: 767px 이하

## 🧪 개발 도구

### 린팅 및 포매팅

```bash
npm run lint        # ESLint 실행
```

### 타입 체크

```bash
npx tsc --noEmit    # TypeScript 타입 체크
```
