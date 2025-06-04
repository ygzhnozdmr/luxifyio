import { MarketingPlan, MarketingTip, RoadmapSection } from '../types';

export const generateDummyTips = (businessType: string): MarketingTip[] => {
  const tips: MarketingTip[] = [
    {
      id: '1',
      title: 'Craft an Exclusive Brand Story',
      description: 'Develop a compelling narrative around your brand\'s heritage, craftsmanship, and exclusivity that resonates with luxury consumers.',
      category: 'storytelling',
      example: 'Like Hermès highlighting its artisanal leather craftsmanship dating back to 1837.'
    },
    {
      id: '2',
      title: 'Implement Invitation-Only Events',
      description: 'Create exclusive experiences for your top clients that aren\'t available to the general public.',
      category: 'exclusivity',
      example: 'Similar to Rolls-Royce\'s private showcases for new models available only to existing customers.'
    },
    {
      id: '3',
      title: 'Leverage High-Quality Visuals',
      description: 'Invest in professional photography and videography that highlights the exceptional quality and details of your products or services.',
      category: 'branding',
      example: 'Following Louis Vuitton\'s approach of artistic campaign photography showcasing craftsmanship details.'
    },
    {
      id: '4',
      title: 'Personalize Customer Communication',
      description: 'Implement personalized outreach strategies for your clientele, acknowledging their preferences and previous engagements.',
      category: 'experience',
      example: 'Like Cartier\'s personalized anniversary notes with custom product recommendations.'
    },
    {
      id: '5',
      title: 'Curate Limited Editions',
      description: 'Create limited availability products or services that increase desirability through scarcity.',
      category: 'exclusivity',
      example: 'Similar to Dom Pérignon\'s limited vintage releases with numbered bottles.'
    },
    {
      id: '6',
      title: 'Develop a Cohesive Digital Presence',
      description: 'Ensure your online presence across all platforms maintains the same level of sophistication as your physical touchpoints.',
      category: 'digital',
      example: 'Following Chanel\'s consistent aesthetic across Instagram, website, and digital campaigns.'
    }
  ];

  // Return all tips for now, in a real app we would filter based on the business type
  return tips;
};

export const generateDummyRoadmap = (): RoadmapSection[] => {
  return [
    {
      id: '1',
      title: 'Brand Positioning Refinement',
      description: 'Establish a clear, distinguished position in the luxury market that emphasizes your unique value proposition.',
      timeframe: 'immediate',
      steps: [
        {
          id: '1-1',
          title: 'Competitive Audit',
          description: 'Analyze top 5 luxury competitors in your space to identify market gaps.'
        },
        {
          id: '1-2',
          title: 'Value Proposition Development',
          description: 'Define what makes your brand uniquely valuable to luxury consumers.'
        },
        {
          id: '1-3',
          title: 'Brand Language Refinement',
          description: 'Update all communication materials to reflect luxury positioning.'
        }
      ]
    },
    {
      id: '2',
      title: 'Elevated Customer Experience',
      description: 'Design memorable, personalized interactions at every touchpoint of the customer journey.',
      timeframe: 'short-term',
      steps: [
        {
          id: '2-1',
          title: 'Journey Mapping',
          description: 'Document the complete luxury customer experience from discovery to post-purchase.'
        },
        {
          id: '2-2',
          title: 'Staff Training',
          description: 'Implement luxury service protocols for all customer-facing team members.'
        },
        {
          id: '2-3',
          title: 'Personalization Program',
          description: 'Develop a system for tracking and implementing client preferences.'
        }
      ]
    },
    {
      id: '3',
      title: 'Digital Excellence Strategy',
      description: 'Create a sophisticated online presence that conveys luxury and exclusivity.',
      timeframe: 'short-term',
      steps: [
        {
          id: '3-1',
          title: 'Website Refinement',
          description: 'Enhance your website with immersive storytelling and high-end visuals.'
        },
        {
          id: '3-2',
          title: 'Social Media Curation',
          description: 'Develop a cohesive content strategy for luxury-focused platforms.'
        },
        {
          id: '3-3',
          title: 'Email Program Development',
          description: 'Create sophisticated, personalized email communications for your clients.'
        }
      ]
    },
    {
      id: '4',
      title: 'Exclusive Community Building',
      description: 'Foster a sense of belonging among your clientele through exclusive experiences and recognition.',
      timeframe: 'long-term',
      steps: [
        {
          id: '4-1',
          title: 'VIP Program Development',
          description: 'Create a tiered loyalty system with exceptional benefits for top clients.'
        },
        {
          id: '4-2',
          title: 'Event Calendar Creation',
          description: 'Plan a year of exclusive events and experiences for different client segments.'
        },
        {
          id: '4-3',
          title: 'Referral Program',
          description: 'Implement a sophisticated referral program that rewards client advocacy.'
        }
      ]
    }
  ];
};

export const generateDummyMarketingPlan = (businessInfo: any): MarketingPlan => {
  return {
    businessInfo,
    summary: `Based on our analysis of ${businessInfo.name}, we've developed a comprehensive luxury marketing strategy focusing on exclusive brand positioning, elevated customer experiences, and sophisticated digital presence. This plan aims to differentiate your business in the competitive ${businessInfo.type} sector while appealing to your target demographic of ${businessInfo.targetAudience}.`,
    roadmap: generateDummyRoadmap(),
    tips: generateDummyTips(businessInfo.type),
    timestamp: new Date().toISOString()
  };
};