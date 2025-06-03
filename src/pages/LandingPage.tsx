import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const LandingPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gold-300">
          Lüks Markalar İçin AI Destekli Pazarlama
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-300">
          Luxify ile markanızın dijital varlığını güçlendirin ve hedef kitlenizle daha derin bağlar kurun.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="primary" size="lg" asChild>
            <Link to="/pricing">Planları İncele</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/offer">Teklif Al</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
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
          <Button variant="primary" size="lg" asChild>
            <Link to="/contact">Ücretsiz Demo İsteyin</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 