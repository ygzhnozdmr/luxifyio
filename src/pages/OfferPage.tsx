import { Button } from '../components/ui/Button';

const OfferPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gold-300">
          Size Özel Teklif
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-300">
          Markanızın ihtiyaçlarına özel olarak hazırlanmış teklifimizi almak için formu doldurun.
        </p>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-lg border border-gold-300/20 bg-navy-800/50 p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-600 bg-navy-900 px-4 py-2 text-white focus:border-gold-300 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-600 bg-navy-900 px-4 py-2 text-white focus:border-gold-300 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-300">
                  Şirket Adı
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full rounded-md border border-gray-600 bg-navy-900 px-4 py-2 text-white focus:border-gold-300 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-gray-600 bg-navy-900 px-4 py-2 text-white focus:border-gold-300 focus:outline-none"
                  required
                ></textarea>
              </div>
              <Button variant="primary" className="w-full">
                Teklif İste
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferPage; 