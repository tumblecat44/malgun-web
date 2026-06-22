# malgun-web

맑은예약 공식 랜딩 페이지 (Astro). 카카오 비즈니스 채널 심사 및 SEO용.

- **URL:** https://malgun.vibejason.com
- **사업자 정보:** `src/content/site.ts` (single source)

## 로컬 개발

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
npm run preview
```

## Cloudflare Pages 배포

1. GitHub에 `malgun-web` repo push
2. Cloudflare Dashboard → Workers & Pages → Create → Connect to Git
3. Build command: `npm run build`
4. Build output directory: `dist`
5. DNS: `vibejason.com` zone에 CNAME `malgun` → `<project>.pages.dev`

CLI 배포 (Wrangler 로그인 필요):

```bash
npm run build
npx wrangler pages deploy dist --project-name=malgun-web
```

## 카카오 재신청

홈페이지 URL: `https://malgun.vibejason.com`

사업자-채널 연관성 소명 예시:

> 맑은예약은 출장 청소업체 예약 관리 모바일 서비스이며, 바이브 제이슨(대표 이건희)이 운영합니다. 홈페이지 하단에 사업자 정보가 게시되어 있습니다.
