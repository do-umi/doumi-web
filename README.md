# 도움이 (Doumi) 웹

디지털 소외계층을 위한 AI 웹 대리인 서비스 — 랜딩·서비스 소개·설치 안내 원페이지.

- **Next.js 14** (App Router) + TypeScript + Tailwind CSS
- **Docker** / **Docker Compose** 로 로컬·배포 실행

## 로컬 개발

```bash
pnpm install
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속.

## Docker로 실행

### 프로덕션 빌드 후 실행

```bash
docker-compose up --build
```

이미지 빌드 후 [http://localhost:3000](http://localhost:3000) 에서 확인.

### 개발 모드 (hot reload)

```bash
docker-compose -f docker-compose.dev.yml up --build
```

## 프로젝트 구조

```
doumi-web/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 랜딩 원페이지
│   └── globals.css
├── components/
│   ├── Header.tsx      # 상단 네비게이션 (d_o umi, 소개/가이드/이용약관, 다운로드)
│   ├── Hero.tsx        # 메인 비주얼 섹션
│   ├── Partners.tsx    # 파트너 로고 (정부24, 국민건강보험, KORAIL)
│   ├── DownloadCTA.tsx # 다운로드 유도 + Mac/Windows 버튼
│   ├── TerminalInstall.tsx # curl 설치 명령
│   └── Footer.tsx      # 푸터 (선린인터넷고등학교, 저작권)
├── Dockerfile          # Next.js standalone 빌드
├── docker-compose.yml  # 프로덕션 서비스
└── docker-compose.dev.yml # 개발용 서비스
```

상세 기획은 `doumi_project_plan.md` 참고.
