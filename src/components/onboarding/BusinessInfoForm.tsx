import React, { useState, useCallback } from 'react';
import { BusinessType, BusinessInfo } from '../../types';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';
import Button from '../ui/Button';

interface BusinessInfoFormProps {
  onSubmit: (data: BusinessInfo) => void;
}

const BusinessInfoForm: React.FC<BusinessInfoFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<BusinessInfo>({
    name: '',
    type: 'retail',
    description: '',
    targetAudience: '',
    uniqueValueProposition: '',
    competitors: '',
    budget: '',
    timeline: '',
    goals: '',
    challenges: '',
    visualIdentity: '',
    brandVoice: '',
    brandValues: '',
    brandPersonality: '',
    brandStory: '',
    brandPromise: '',
    brandPositioning: '',
    brandMission: '',
    brandVision: '',
    brandTagline: '',
    brandColors: '',
    brandFonts: '',
    brandLogo: '',
    brandImages: '',
    brandVideos: '',
    brandAudio: '',
    brandSocialMedia: '',
    brandWebsite: '',
    brandEmail: '',
    brandPhone: '',
    brandAddress: '',
    brandHours: '',
    brandLocation: '',
    brandReviews: '',
    brandTestimonials: '',
    brandCaseStudies: '',
    brandAwards: '',
    brandCertifications: '',
    brandPartners: '',
    brandSponsors: '',
    brandEvents: '',
    brandNews: '',
    brandPress: '',
    brandBlog: '',
    brandPodcast: '',
    brandYouTube: '',
    brandTikTok: '',
    brandInstagram: '',
    brandFacebook: '',
    brandTwitter: '',
    brandLinkedIn: '',
    brandPinterest: '',
    brandSnapchat: '',
    brandReddit: '',
    brandQuora: '',
    brandMedium: '',
    brandTumblr: '',
    brandFlickr: '',
    brandVimeo: '',
    brandDribbble: '',
    brandBehance: '',
    brandGitHub: '',
    brandStackOverflow: '',
    brandProductHunt: '',
    brandAngelList: '',
    brandCrunchbase: '',
    brandPitchbook: '',
    brandLinkedInCompany: '',
    brandGlassdoor: '',
    brandIndeed: '',
    brandMonster: '',
    brandCareerBuilder: '',
    brandZipRecruiter: '',
    brandDice: '',
    brandHired: '',
    brandAngelListJobs: '',
    brandStackOverflowJobs: '',
    brandGitHubJobs: '',
    brandLinkedInJobs: '',
    brandIndeedJobs: '',
    brandGlassdoorJobs: '',
    brandMonsterJobs: '',
    brandCareerBuilderJobs: '',
    brandZipRecruiterJobs: '',
    brandDiceJobs: '',
    brandHiredJobs: '',
    brandAngelListCompanies: '',
    brandCrunchbaseCompanies: '',
    brandLinkedInCompanies: '',
    brandGlassdoorCompanies: '',
    brandIndeedCompanies: '',
    brandMonsterCompanies: '',
    brandCareerBuilderCompanies: '',
    brandZipRecruiterCompanies: '',
    brandDiceCompanies: '',
    brandHiredCompanies: '',
    brandAngelListInvestors: '',
    brandCrunchbaseInvestors: '',
    brandLinkedInInvestors: '',
    brandGlassdoorInvestors: '',
    brandIndeedInvestors: '',
    brandMonsterInvestors: '',
    brandCareerBuilderInvestors: '',
    brandZipRecruiterInvestors: '',
    brandDiceInvestors: '',
    brandHiredInvestors: '',
    brandAngelListStartups: '',
    brandCrunchbaseStartups: '',
    brandLinkedInStartups: '',
    brandGlassdoorStartups: '',
    brandIndeedStartups: '',
    brandMonsterStartups: '',
    brandCareerBuilderStartups: '',
    brandZipRecruiterStartups: '',
    brandDiceStartups: '',
    brandHiredStartups: '',
    brandAngelListPeople: '',
    brandCrunchbasePeople: '',
    brandLinkedInPeople: '',
    brandGlassdoorPeople: '',
    brandIndeedPeople: '',
    brandMonsterPeople: '',
    brandCareerBuilderPeople: '',
    brandZipRecruiterPeople: '',
    brandDicePeople: '',
    brandHiredPeople: ''
  });

  const [isValid, setIsValid] = useState(false);

  const validateForm = useCallback(() => {
    const valid = formData.name.trim() !== '' &&
      formData.description.trim() !== '' &&
      formData.targetAudience.trim() !== '' &&
      formData.uniqueValueProposition.trim() !== '' &&
      formData.competitors.trim() !== '';
    setIsValid(valid);
    return valid;
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const businessInfo: BusinessInfo = {
        ...formData,
        name: formData.name.trim(),
        description: formData.description.trim(),
        targetAudience: formData.targetAudience.trim(),
        uniqueValueProposition: formData.uniqueValueProposition.trim(),
        competitors: formData.competitors.trim()
      };
      onSubmit(businessInfo);
    }
  };

  // Form değiştiğinde validasyonu güncelle
  React.useEffect(() => {
    validateForm();
  }, [formData, validateForm]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Business Name"
        name="name"
        placeholder="Enter your business name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <Select
        label="Business Type"
        name="type"
        value={formData.type}
        onChange={handleChange}
        options={[
          { value: 'retail', label: 'Retail' },
          { value: 'dining', label: 'Dining' },
          { value: 'wellness', label: 'Wellness' },
          { value: 'hospitality', label: 'Hospitality' },
          { value: 'service', label: 'Service' },
          { value: 'entertainment', label: 'Entertainment' },
          { value: 'property', label: 'Property' },
          { value: 'automotive', label: 'Automotive' },
          { value: 'education', label: 'Education' },
          { value: 'other', label: 'Other' }
        ]}
        required
      />

      <Textarea
        label="Business Description"
        name="description"
        placeholder="Describe your current business operations and what you'd like to transform into a luxury experience"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <Textarea
        label="Target Audience"
        name="targetAudience"
        placeholder="Describe the luxury clientele you want to attract (lifestyle, preferences, spending habits)"
        value={formData.targetAudience}
        onChange={handleChange}
        required
      />

      <Textarea
        label="Unique Value Proposition"
        name="uniqueValueProposition"
        placeholder="What unique luxury experience or value will you offer to distinguish your business?"
        value={formData.uniqueValueProposition}
        onChange={handleChange}
        required
      />

      <Textarea
        label="Competitors"
        name="competitors"
        placeholder="List luxury brands or businesses you aspire to compete with"
        value={formData.competitors}
        onChange={handleChange}
        required
      />

      <Button type="submit" disabled={!isValid}>
        Continue
      </Button>
    </form>
  );
};

export default BusinessInfoForm;