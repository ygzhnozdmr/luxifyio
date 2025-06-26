import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';

interface ContactFormProps {
  selectedPackage?: string;
  onClose: () => void;
}

const SERVICE_ID = 'service_d92tkye';
const TEMPLATE_ID = 'template_a1pybx2';
const USER_ID = 'Rzs5EENl1kygm-siN';

const businessTypes = [
  { value: 'retail', label: 'Retail & Boutiques' },
  { value: 'dining', label: 'Restaurants & Fine Dining' },
  { value: 'wellness', label: 'Beauty & Wellness' },
  { value: 'hospitality', label: 'Hotels & Hospitality' },
  { value: 'service', label: 'Professional Services' },
  { value: 'entertainment', label: 'Entertainment & Events' },
  { value: 'property', label: 'Real Estate & Properties' },
  { value: 'automotive', label: 'Automotive & Luxury Vehicles' },
  { value: 'jewelry', label: 'Jewelry & Watches' },
  { value: 'fashion', label: 'Fashion & Couture' },
  { value: 'other', label: 'Other Luxury Business' }
];

const subjects = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'consultation', label: 'Marketing Consultation' },
  { value: 'partnership', label: 'Partnership Opportunities' },
  { value: 'enterprise', label: 'Enterprise Solutions' },
  { value: 'support', label: 'Customer Support' },
  { value: 'media', label: 'Media & Press' }
];

const ContactForm: React.FC<ContactFormProps> = ({ selectedPackage, onClose }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    businessType: 'retail',
    subject: selectedPackage ? selectedPackage : 'general',
    message: '',
    budget: '',
    timeline: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.firstName.trim()) newErrors.firstName = 'Ad gerekli';
    if (!form.lastName.trim()) newErrors.lastName = 'Soyad gerekli';
    if (!form.email.trim()) newErrors.email = 'E-posta gerekli';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Geçerli bir e-posta girin';
    if (!form.company.trim()) newErrors.company = 'Şirket adı gerekli';
    if (!form.message.trim()) newErrors.message = 'Mesaj gerekli';
    else if (form.message.length < 20) newErrors.message = 'Daha detaylı bir mesaj girin';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
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
        setErrors({ message: 'Bir hata oluştu. Lütfen tekrar deneyin.' });
        setLoading(false);
      });
  };

  if (success) {
    return (
      <div className="p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Talebiniz Alındı</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">Başvurunuz alındı, en kısa sürede sizinle iletişime geçeceğiz.</p>
        <Button onClick={onClose} size="lg">Kapat</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-2">İletişim Formu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Ad" name="firstName" value={form.firstName} onChange={handleChange} error={errors.firstName} required />
        <Input label="Soyad" name="lastName" value={form.lastName} onChange={handleChange} error={errors.lastName} required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="E-posta" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} required />
        <Input label="Telefon" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Şirket Adı" name="company" value={form.company} onChange={handleChange} error={errors.company} required />
        <Select label="İş Türü" name="businessType" value={form.businessType} onChange={handleChange} options={businessTypes} required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select label="Konu" name="subject" value={form.subject} onChange={handleChange} options={subjects.concat(selectedPackage ? [{ value: selectedPackage, label: selectedPackage }] : [])} required />
        <Input label="Bütçe (Opsiyonel)" name="budget" value={form.budget} onChange={handleChange} />
      </div>
      <Input label="Zaman (Opsiyonel)" name="timeline" value={form.timeline} onChange={handleChange} />
      <Textarea label="Mesajınız" name="message" value={form.message} onChange={handleChange} error={errors.message} required rows={6} />
      {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onClose}>Vazgeç</Button>
        <Button type="submit" size="lg" disabled={loading} icon={!loading ? <Send className="w-4 h-4" /> : undefined}>
          {loading ? 'Gönderiliyor...' : 'Gönder'}
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        Formu göndererek gizlilik politikamızı ve hizmet şartlarımızı kabul etmiş olursunuz. Bilgileriniz sadece başvurunuza yanıt vermek ve lüks pazarlama içgörüleri sunmak için kullanılacaktır.
      </p>
    </form>
  );
};

export default ContactForm; 