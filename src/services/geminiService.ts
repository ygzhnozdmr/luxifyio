import { BusinessInfo, MarketingPlan } from '../types';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('Gemini API key is missing. Please check your .env file.');
}

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export const saveBusinessInfoToGemini = async (businessInfo: BusinessInfo): Promise<void> => {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key is missing');
  }

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Analyze this business information and provide insights: ${JSON.stringify(businessInfo)}`
          }]
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error:', errorData);
      throw new Error('Gemini API request failed');
    }

    const data = await response.json();
    console.log('Business info saved to Gemini:', data);
  } catch (error) {
    console.error('Error saving to Gemini:', error);
    throw error;
  }
};

export const saveMarketingPlanToGemini = async (marketingPlan: MarketingPlan): Promise<MarketingPlan> => {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key is missing');
  }

  try {
    const prompt = `
      Based on the following business information, please provide a detailed marketing plan in the following format:
      
      Business Info:
      - Name: ${marketingPlan.businessInfo.name}
      - Type: ${marketingPlan.businessInfo.type}
      - Description: ${marketingPlan.businessInfo.description}
      
      Please provide strategies for:
      1. Brand Positioning Refinement
      2. Elevated Customer Experience
      3. Digital Excellence Strategy
      
      For each section, provide:
      - Short-term actions (3-5 items)
      - Long-term goals
      - Key performance indicators
      
      Format your response as a valid JSON object with the following structure:
      {
        "summary": "Overall marketing plan summary",
        "roadmap": [
          {
            "title": "Brand Positioning Refinement",
            "description": "Description of the strategy",
            "shortTermActions": ["Action 1", "Action 2", "Action 3"],
            "longTermGoals": ["Goal 1", "Goal 2"],
            "kpis": ["KPI 1", "KPI 2"]
          },
          {
            "title": "Elevated Customer Experience",
            "description": "Description of the strategy",
            "shortTermActions": ["Action 1", "Action 2", "Action 3"],
            "longTermGoals": ["Goal 1", "Goal 2"],
            "kpis": ["KPI 1", "KPI 2"]
          },
          {
            "title": "Digital Excellence Strategy",
            "description": "Description of the strategy",
            "shortTermActions": ["Action 1", "Action 2", "Action 3"],
            "longTermGoals": ["Goal 1", "Goal 2"],
            "kpis": ["KPI 1", "KPI 2"]
          }
        ],
        "tips": ["Tip 1", "Tip 2", "Tip 3"]
      }
    `;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error:', errorData);
      throw new Error('Gemini API request failed');
    }

    const data = await response.json();
    console.log('Marketing plan saved to Gemini:', data);

    // Extract the text from the response
    const responseText = data.candidates[0].content.parts[0].text;
    
    // Try to find JSON in the response text
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No valid JSON found in the response');
    }

    // Parse the JSON
    const parsedResponse = JSON.parse(jsonMatch[0]);

    // Update the marketing plan with the new strategies
    const updatedPlan: MarketingPlan = {
      ...marketingPlan,
      summary: parsedResponse.summary,
      roadmap: parsedResponse.roadmap,
      tips: parsedResponse.tips
    };

    return updatedPlan;
  } catch (error) {
    console.error('Error saving to Gemini:', error);
    throw error;
  }
}; 