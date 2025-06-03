import { Button } from '../components/ui/Button';

const PricingPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gold-300">
          Premium AI Destekli Pazarlama Çözümleri
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-300">
          Lüks markalar için özel olarak tasarlanmış, yapay zeka destekli pazarlama ve strateji platformu
        </p>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Essential Plan */}
            <div className="rounded-lg border border-gold-300/20 bg-navy-800/50 p-8">
              <h3 className="mb-4 text-2xl font-bold text-gold-300">Essential</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$999</span>
                <span className="text-gray-400">/ay</span>
              </div>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-gold-300">✓</span>
                  Temel AI Analiz Araçları
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-gold-300">✓</span>
                  Sosyal Medya Yönetimi
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-gold-300">✓</span>
                  Haftalık Raporlar
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Şimdi Başlayın
              </Button>
            </div>

            {/* Professional Plan */}
            <div className="rounded-lg border-2 border-gold-300 bg-navy-800/50 p-8">
              <div className="mb-4 inline-block rounded-full bg-gold-300 px-4 py-1 text-sm font-semibold text-navy-900">
                En Popüler
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gold-300">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$2,499</span>
                <span className="text-gray-400">/ay</span>
              </div>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-gold-300">✓</span>
                  Gelişmiş AI Analiz Araçları
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-gold-300">✓</span>
                  Özel Strateji Danışmanlığı
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-gold-300">✓</span>
                  Günlük Raporlar
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-gold-300">✓</span>
                  7/24 Destek
                </li>
              </ul>
              <Button variant="primary" className="w-full">
                Şimdi Başlayın
              </Button>
            </div>

            {/* Elite Plan */}
            <div className="rounded-lg border border-gold-300/20 bg-navy-800/50 p-8">
              <h3 className="mb-4 text-2xl font-bold text-gold-300">Elite</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$4,999</span>
                <span className="text-gray-400">/ay</span>
              </div>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-gold-300">✓</span>
                  Özel AI Modeli
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-gold-300">✓</span>
                  VIP Strateji Danışmanlığı
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-gold-300">✓</span>
                  Gerçek Zamanlı Analizler
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-gold-300">✓</span>
                  Öncelikli Destek
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Şimdi Başlayın
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Luxify Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gold-300">
            Neden Luxify?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-4xl text-gold-300">🎯</div>
              <h3 className="mb-2 text-xl font-bold">Hedef Odaklı</h3>
              <p className="text-gray-300">
                Lüks markaların ihtiyaçlarına özel olarak tasarlanmış çözümler
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl text-gold-300">🤖</div>
              <h3 className="mb-2 text-xl font-bold">AI Destekli</h3>
              <p className="text-gray-300">
                En son yapay zeka teknolojileri ile güçlendirilmiş analizler
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl text-gold-300">📈</div>
              <h3 className="mb-2 text-xl font-bold">Ölçülebilir Sonuçlar</h3>
              <p className="text-gray-300">
                Detaylı raporlar ve gerçek zamanlı performans takibi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gold-300">
            Lüks Markanızı Bir Üst Seviyeye Taşıyın
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-lg text-gray-300">
            Luxify ile markanızın potansiyelini keşfedin ve rakiplerinizden bir adım önde olun.
          </p>
          <Button variant="primary" size="lg">
            Ücretsiz Demo İsteyin
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage; 