import React, { useState, useRef } from 'react';
import { Button, SectionHeading } from '../components/Shared';
import { editImageWithGemini } from '../services/geminiService';
import { Loader2, Upload, Wand2, Download } from 'lucide-react';

export const DesignStudio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        setGeneratedImage(null); // Reset previous generation
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      // Extract base64 data and mime type
      const mimeType = selectedImage.split(';')[0].split(':')[1];
      const base64Data = selectedImage.split(',')[1];

      const result = await editImageWithGemini(base64Data, mimeType, prompt);

      if (result.error) {
        setError(result.error);
      } else if (result.imageUrl) {
        setGeneratedImage(result.imageUrl);
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-stone-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <SectionHeading 
            title="AI Design Studio" 
            subtitle="Upload a photo of your space and use AI to visualize changes. Try prompts like 'Change the door to a modern black aluminium sliding door' or 'Add a glass partition'." 
            centered 
          />
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200">
          <div className="grid md:grid-cols-2 h-full min-h-[500px]">
            
            {/* Input Side */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-stone-100 flex flex-col">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center mr-3 text-sm">1</span>
                Upload Source Image
              </h3>
              
              <div 
                className={`flex-grow border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-4 transition-colors ${selectedImage ? 'border-slate-200 bg-slate-50' : 'border-slate-300 hover:border-amber-500 hover:bg-amber-50 cursor-pointer'}`}
                onClick={() => !selectedImage && fileInputRef.current?.click()}
              >
                {selectedImage ? (
                  <div className="relative w-full h-full">
                     <img src={selectedImage} alt="Original" className="w-full h-full object-contain" />
                     <button 
                       onClick={(e) => { e.stopPropagation(); setSelectedImage(null); setGeneratedImage(null); }}
                       className="absolute top-2 right-2 bg-slate-900/80 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                     >
                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                     </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-600 font-medium">Click to upload photo</p>
                    <p className="text-slate-400 text-sm">JPG or PNG</p>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                />
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center mr-3 text-sm">2</span>
                  Describe Changes
                </h3>
                <textarea
                  className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none h-24"
                  placeholder="e.g., Change the wooden door to a sleek aluminium glass door..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={isLoading}
                ></textarea>
                <div className="mt-4">
                  <Button 
                    onClick={handleGenerate} 
                    disabled={!selectedImage || !prompt || isLoading}
                    className="w-full py-3 text-lg flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <><Loader2 className="animate-spin w-5 h-5"/> Generating...</>
                    ) : (
                      <><Wand2 className="w-5 h-5"/> Generate Transformation</>
                    )}
                  </Button>
                  {error && (
                    <div className="mt-3 text-red-600 text-sm bg-red-50 p-2 rounded border border-red-100">
                      {error}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Output Side */}
            <div className="p-8 bg-stone-50 flex flex-col">
              <h3 className="text-lg font-bold mb-4 text-slate-700">Generated Result</h3>
              <div className="flex-grow bg-white rounded-xl shadow-inner border border-stone-200 flex items-center justify-center relative overflow-hidden">
                {isLoading ? (
                  <div className="text-center p-8">
                     <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                     <p className="text-slate-600 animate-pulse">Gemini 2.5 is reimagining your space...</p>
                     <p className="text-slate-400 text-sm mt-2">This may take a few seconds.</p>
                  </div>
                ) : generatedImage ? (
                  <div className="relative w-full h-full">
                     <img src={generatedImage} alt="Generated" className="w-full h-full object-contain" />
                     <a 
                       href={generatedImage} 
                       download="home-doors-ai-design.png"
                       className="absolute bottom-4 right-4 bg-white text-slate-900 px-4 py-2 rounded-lg shadow-lg font-medium flex items-center hover:bg-stone-100"
                     >
                       <Download className="w-4 h-4 mr-2" /> Download
                     </a>
                  </div>
                ) : (
                  <div className="text-center text-slate-400 p-6">
                    <Wand2 className="w-16 h-16 mx-auto mb-4 opacity-20" />
                    <p>Your AI-generated design will appear here.</p>
                  </div>
                )}
              </div>
              <div className="mt-4 text-xs text-slate-400 text-center">
                * AI generated images are for visualization purposes only. Actual fabrication results may vary.
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
