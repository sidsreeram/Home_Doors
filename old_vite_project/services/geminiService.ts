import { GoogleGenAI } from "@google/genai";

// Ensure we have the API key
const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

export interface ImageEditResult {
  imageUrl?: string;
  error?: string;
}

/**
 * Edits an image based on a text prompt using Gemini 2.5 Flash Image.
 * @param base64Image The base64 encoded image string (without data URI prefix).
 * @param mimeType The mime type of the image (e.g., 'image/png').
 * @param prompt The text instruction for editing.
 */
export const editImageWithGemini = async (
  base64Image: string,
  mimeType: string,
  prompt: string
): Promise<ImageEditResult> => {
  try {
    if (!API_KEY) {
      return { error: 'API Key is missing. Please configure the environment.' };
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: base64Image,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      // No responseMimeType or responseSchema for nano banana series
    });

    let generatedImageUrl: string | undefined;

    // Iterate through parts to find the image
    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          generatedImageUrl = `data:image/png;base64,${base64EncodeString}`;
          break; // Found the image
        }
      }
    }

    if (generatedImageUrl) {
      return { imageUrl: generatedImageUrl };
    } else {
      return { error: 'No image was generated. The model might have returned only text.' };
    }

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return { error: error.message || 'An unexpected error occurred.' };
  }
};
