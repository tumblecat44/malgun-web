# Cloudflare Pages 배포 가이드

## 1. GitHub push

```bash
cd /Users/dgsw67/malgun-web
git add -A
git commit -m "feat: 맑은예약 Astro 랜딩 (카카오 심사용)"
gh repo create malgun-web --public --source=. --remote=origin --push
```

## 2. Cloudflare 배포 (Worker Git 연결 시)

Dashboard → **malgun-web** → Settings → Build:

| 항목 | 값 |
|------|-----|
| Build command | `npm run build` |
| **Deploy command** | `npx wrangler deploy` |
| Version command | **비움** |

`npx wrangler pages deploy`는 **Pages 프로젝트**용입니다.  
지금 UI가 **Worker Git**이면 `wrangler deploy` + repo의 `wrangler.toml` `[assets]`를 씁니다.

### Build API token 권한 (Authentication error 10000)

Settings → Build → API token → **Regenerate** 또는 [API Tokens](https://dash.cloudflare.com/profile/api-tokens)에서 `malgun-web build token` 수정:

| Permission | Access |
|------------|--------|
| Account → **Workers Scripts** | Edit |
| Account → **Workers Routes** | Edit |
| Account → **Account Settings** | Read |

Worker Git deploy는 **Cloudflare Pages Edit** 권한만으로는 부족할 수 있습니다.

---

## 2-B. Pages 전용으로 새로 만들기 (추천, 더 단순)

Worker Git 말고 **Pages → Connect to Git**:

| 항목 | 값 |
|------|-----|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Deploy command | 없음 (Pages가 dist 자동 업로드) |

Custom domain → `malgun.vibejason.com`

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
