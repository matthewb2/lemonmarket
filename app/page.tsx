// app/page.tsx
import Link from 'next/link';

const DUMMY_PARTS = [
  {
    id: '1',
    title: '고장난 스마트 쓰레기통 (센서 및 모터 구동부 멀쩡함)',
    category: '가전/로봇공학',
    price: 35,
    seller: '맥가이버',
    mobileDate: '05/24',
    desktopDate: '2026.05.24',
    status: '분해가능',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&q=80',
  },
  {
    id: '2',
    title: '모터 축 고장난 선풍기 (BLDC 모터 코일 추출용)',
    category: '모터/DIY재료',
    price: 15,
    seller: '납땜장인',
    mobileDate: '05/23',
    desktopDate: '2026.05.23',
    status: '부품추출가능',
    image: 'https://images.unsplash.com/photo-1585144860131-245d551c77f6?w=500&q=80',
  },
  {
    id: '3',
    title: '유압식 브레이크 고장난 자전거 (프레임 및 기어 양호)',
    category: '자전거/기계부품',
    price: 120,
    seller: '바이시클리사이클',
    mobileDate: '05/20',
    desktopDate: '2026.05.20',
    status: '통째로재활용',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&q=80',
  },
];

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* 헤더 섹션 */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div>
          <h1 className="text-3xl font-black text-yellow-500 tracking-tight">
            LEMON <span className="text-amber-600">MARKET</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            버려지는 고장난 물건을 DIY 재료로 가치 있게 리사이클링
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-full px-4 py-2 flex items-center gap-2">
          <span className="text-lg">🍑</span>
          <span className="font-bold text-amber-700 text-sm">보유 피치: 450 PCH</span>
        </div>
      </div>

      {/* [업데이트] 배송비 페이백 및 가치 변동 유의 통합 안내 배너 */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-green-600 text-lg mt-0.5">🚚</span>
          <div>
            <h4 className="font-bold text-green-900 text-sm md:text-base">판매자 배송비 100% 페이백 제도</h4>
            <p className="text-xs text-green-800 mt-1 leading-relaxed">
              레몬마켓은 판매자 선불 배송을 원칙으로 하되, 발송 후 <strong>운송장을 등록하면 배송비 전액을 피치코인($PCH)으로 즉시 돌려드립니다.</strong> 부담 없이 리사이클 재료를 공유하세요!
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-blue-600 text-lg mt-0.5">⚠️</span>
          <div>
            <h4 className="font-bold text-blue-900 text-sm md:text-base">내부 자산 가치 유의 안내</h4>
            <p className="text-xs text-blue-800 mt-1 leading-relaxed">
              현재 피치코인은 외부 거래소에서 거래되지 않는 생태계 유틸리티 토큰입니다. <strong>내부 가치 변동 및 실제 배송비 가치를 고려하여</strong> 신중하게 판매가를 결정해 주시기 바랍니다.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">구조를 기다리는 리사이클 DIY 재료</h2>
      </div>

      {/* 1. 모바일 뷰: 카드 형태 */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {DUMMY_PARTS.map((part) => (
          <Link href={`/products/${part.id}`} key={part.id}>
            <div className="bg-white border rounded-2xl overflow-hidden p-4 flex gap-4 active:bg-gray-50 transition">
              <img src={part.image} alt={part.title} className="w-24 h-24 object-cover rounded-xl bg-gray-100 flex-shrink-0" />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm">{part.title}</h3>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{part.mobileDate}</span>
                  </div>
                  <div className="flex gap-2 items-center mt-1">
                    <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">{part.category}</span>
                    <span className="text-xs text-gray-500">👤 {part.seller}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-1">
                    <span className="text-sm">🍑</span>
                    <span className="font-black text-amber-600 text-lg">{part.price}</span>
                    <span className="text-xs text-amber-700 font-bold">PCH</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-amber-100 text-amber-800">
                    {part.status}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 2. 데스크톱 뷰: 테이블 형태 */}
      <div className="hidden md:block overflow-hidden border border-gray-200 rounded-2xl bg-white shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm font-semibold">
              <th className="p-4 w-24 text-center">이미지</th>
              <th className="p-4">리사이클링 매물 및 추출 가능 부품</th>
              <th className="p-4 text-center w-32">카테고리</th>
              <th className="p-4 text-center w-32">상태 분류</th>
              <th className="p-4 text-right w-40">재료 단가 ($PCH)</th>
              <th className="p-4 text-center w-32">기부/판매자</th>
              <th className="p-4 text-center w-36">등록일</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {DUMMY_PARTS.map((part) => (
              <tr key={part.id} className="hover:bg-amber-50/30 transition cursor-pointer">
                <td className="p-4 text-center">
                  <img src={part.image} alt={part.title} className="w-12 h-12 object-cover rounded-lg mx-auto" />
                </td>
                <td className="p-4 font-medium text-gray-900">
                  <Link href={`/products/${part.id}`} className="hover:text-amber-600 block">
                    {part.title}
                  </Link>
                </td>
                <td className="p-4 text-center text-sm">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">{part.category}</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-amber-100 text-amber-800">
                    {part.status}
                  </span>
                </td>
                <td className="p-4 text-right font-bold text-lg text-amber-600">
                  🍑 {part.price.toLocaleString()} <span className="text-xs text-amber-700">PCH</span>
                </td>
                <td className="p-4 text-center text-sm text-gray-500">{part.seller}</td>
                <td className="p-4 text-center text-sm text-gray-400">{part.desktopDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}