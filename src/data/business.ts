/**
 * Business / Publisher Information
 *
 * Legally required disclosures for the site operator (사업자 정보).
 * Displayed in Footer, Contact, Privacy Policy, and Terms of Service pages
 * to satisfy Google AdSense publisher identity requirements and Korean
 * e-commerce laws (전자상거래법, 정보통신망법).
 */

export const BUSINESS_INFO = {
  // 상호 / Business Name
  legalName: '큰바구니',
  legalNameRoman: 'Keunbaguni',
  brand: '모두모두',
  brandRoman: 'Modoo Modoo',

  // 대표자 / Representative
  representative: '임몽규',
  representativeRoman: 'Lim Monggyu',

  // 사업자등록번호 / Business Registration Number (Korea)
  businessRegistrationNumber: '806-58-00641',

  // 통신판매업 신고번호 / Mail-order Business Registration Number
  mailOrderRegistrationNumber: '2024-경기시흥-1913호',

  // 소재지 / Physical Address
  address: '경기도 시흥시',
  addressRoman: 'Siheung-si, Gyeonggi-do, Republic of Korea',
  country: 'Republic of Korea (South Korea)',

  // 연락처 / Contact
  email: 'modoomodoo88@gmail.com',
  phone: '010-8265-1123',
  phoneIntl: '+82-10-8265-1123',

  // Site
  siteName: 'LoveRedFlags.com',
  siteUrl: 'https://loveredflags.com'
} as const

export type BusinessInfo = typeof BUSINESS_INFO
