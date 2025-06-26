import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

interface ContactFormProps {
  selectedPackage?: string;
  onClose: () => void;
}

const SERVICE_ID = 'service_d92tkye';
const TEMPLATE_ID = 'template_a1pybx2';
const USER_ID = 'Rzs5EENl1kygm-siN';

const ContactForm: React.FC<ContactFormProps> = ({ selectedPackage, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        ...form,
        selectedPackage: selectedPackage || '',
      },
      USER_ID
    )
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch(() => {
        setError('Bir hata oluştu. Lütfen tekrar deneyin.');
        setLoading(false);
      });
  };

  if (success) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Talebiniz alınmıştır!</h2>
        <p className="mb-6">En kısa sürede sizinle iletişime geçeceğiz.</p>
        <Button onClick={onClose}>Kapat</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">İletişim Formu</h2>
      {selectedPackage && (
        <div className="mb-2 text-sm text-gray-700">
          <b>Seçilen Paket:</b> {selectedPackage}
        </div>
      )}
      <Input
        label="Ad Soyad"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        label="E-posta"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Textarea
        label="Mesajınız"
        name="message"
        value={form.message}
        onChange={handleChange}
        required
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onClose}>Vazgeç</Button>
        <Button type="submit" disabled={loading}>{loading ? 'Gönderiliyor...' : 'Gönder'}</Button>
      </div>
    </form>
  );
};

export default ContactForm; 