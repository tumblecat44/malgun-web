export const site = {
  url: 'https://malgun.vibejason.com',
  serviceName: '맑은예약',
  serviceDescription: '출장 청소업체를 위한 예약·일정·매출 관리 모바일 서비스',
  companyName: '바이브 제이슨',
  representative: '이건희',
  businessNumber: '197-44-01291',
  address: '대구광역시 남구 명덕로 200, 108동 2804호',
  email: 'leegeh1213@gmail.com',
  phone: '010-9491-6725',
  privacyOfficer: '이건희',
  privacyEffectiveDate: '2026-05-12',
  termsEffectiveDate: '2026-04-21',
  relationLine:
    '맑은예약은 출장 청소업체 예약 관리 모바일 서비스이며, 바이브 제이슨(대표 이건희)이 운영합니다.',
} as const;

export type SiteConfig = typeof site;
