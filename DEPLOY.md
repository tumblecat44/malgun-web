# Cloudflare Pages 배포 가이드

## 1. GitHub push

```bash
cd /Users/dgsw67/malgun-web
git add -A
git commit -m "feat: 맑은예약 Astro 랜딩 (카카오 심사용)"
gh repo create malgun-web --public --source=. --remote=origin --push
```

## 2. Cloudflare Pages (Dashboard)

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create application → Pages → Connect to Git
2. Repo: `malgun-web`
3. Framework preset: Astro (또는 None)
4. Build command: `npm run build`
5. Build output: `dist`
6. Environment: Node.js 22

## 3. 커스텀 도메인

`vibejason.com` zone에서:

| Type | Name | Content |
|------|------|---------|
| CNAME | malgun | `<your-project>.pages.dev` |

Pages 프로젝트 → Custom domains → `malgun.vibejason.com` 추가 후 SSL Active 확인.

## 4. CLI 배포 (선택)

```bash
export CLOUDFLARE_API_TOKEN=your_token
npm run deploy
```

## 5. 배포 후 확인

- https://malgun.vibejason.com/ 첫 화면에 **맑은예약** + 운영 문구
- 푸터: 상호, 대표, 사업자번호, 주소(108동 2804호), 전화, 이메일
- /privacy, /terms, /sitemap-index.xml, /robots.txt

## 카카오 재신청

- 홈페이지 URL: `https://malgun.vibejason.com`
- 불일치 소명: `src/content/site.ts`의 `relationLine` 문구 사용
