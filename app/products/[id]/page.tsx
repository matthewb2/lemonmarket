// app/products/[id]/page.tsx
import Link from 'next/link';

interface ProductDetailProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const part = {
    id: params.id,
    title: '고장난 스마트 쓰레기통 (센서 및 모터 구동부 멀쩡함)',
    category: '가전/로봇공학',
    price: 35,
    seller: '맥가이버',
    sellerRating: '부품 적출 전문가 (등급 S)',
    desktopDate: '2026.05.24',
    status: '분해가능',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    description: '메인보드 침수로 인해 전반적인 스마트 기능은 작동하지 않으나, 내부 적외선 거리감지 센서와 뚜껑 개폐용 서보 모터 드라이버는 계측기로 테스트 완료하여 정상 작동합니다. 아두이노나 라즈베리파이로 DIY 자동화 토이 만드실 분이 가져가서 적출하시면 최고의 재료입니다.',
    extractedTech: ['적외선 모션 센서', 'SG90 마이크로 서보 모터 계열', 'AA 배터리 홀더(4구)'],
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-6 md:py-12">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-6 group">
        <span className="transform group-hover:-translate-x-0.5 transition-transform">←</span> 분해 재료 목록으로
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 좌측: 상품 이미지 */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 border">
          <img src={part.image} alt={part.title} className="w-full h-full object-cover" />
        </div>

        {/* 우측: 재료 스펙 및 결제 제어 패널 */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded font-bold">{part.category}</span>
              <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-gray-100 text-gray-700">
                {part.status}
              </span>
            </div>

            <h1 className="text-2xl font-extrabold text-gray-900 mb-2">{part.title}</h1>
            <p className="text-xs text-gray-400 mb-4">등록일: {part.desktopDate}</p>

            {/* DIY 전용: 적출 부품 스펙 */}
            <div className="mb-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">적출 가능 핵심 부품</h3>
              <div className="flex flex-wrap gap-1.5">
                {part.extractedTech.map((tech, idx) => (
                  <span key={idx} className="bg-green-50 text-green-700 text-xs border border-green-200 px-2 py-1 rounded-md">
                    ⚙️ {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 피치코인 단가 및 거래 원칙 가이드 조항 */}
            <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-4 mb-4">
              <div className="text-xs text-amber-800 font-medium">부품 확보용 피치 소모량</div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl">🍑</span>
                <span className="text-2xl font-black text-amber-600">{part.price.toLocaleString()}</span>
                <span className="text-xs text-amber-700 font-bold ml-0.5">PCH</span>
              </div>
              
              {/* [업데이트] 배송비 페이백 공식 조항 바인딩 */}
              <div className="mt-3 pt-3 border-t border-amber-200/60 space-y-2 text-[11px] md:text-xs text-amber-900">
                <div className="bg-white/80 rounded-lg p-2.5 border border-amber-200/40">
                  <p className="flex items-center gap-1 font-bold text-green-700">
                    <span>📦</span> 배송비는 판매자가 부담하는 것을 원칙으로 합니다.
                  </p>
                  <p className="text-gray-500 text-[11px] mt-0.5 pl-4">
                    (단, 판매자가 선불 발송 후 송장번호를 입력하면 시스템에서 <strong>배송비 전액을 피치코인으로 페이백</strong>해 드립니다.)
                  </p>
                </div>
                <p className="text-gray-400 leading-tight pl-1">
                  ⚠️ 현재 피치코인은 거래소에서 거래되지 않고 있으므로 가격변동에 유의하여 판매가를 결정하세요.
                </p>
              </div>
            </div>

            {/* 기부자 정보 */}
            <div className="border-b pb-4 mb-4 flex items-center justify-between text-sm">
              <div>
                <p className="text-xs text-gray-400">재료 제공자</p>
                <p className="font-bold text-gray-800">@{part.seller}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">신뢰도 등급</p>
                <p className="text-xs font-semibold text-green-600">{part.sellerRating}</p>
              </div>
            </div>

            {/* 상세 설명 */}
            <div className="text-gray-600 leading-relaxed text-sm whitespace-pre-wrap">
              {part.description}
            </div>
          </div>

          {/* 구매 제어 단추 */}
          <div className="mt-6 pt-4 border-t flex gap-3">
            <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-xl transition shadow-sm text-center text-sm md:text-base">
              피치코인 결제 및 부품 확보하기
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 font-semibold px-4 rounded-xl transition text-sm">
              분해 문의
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}