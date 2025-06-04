import React, { useState } from 'react';
import Button from '../ui/Button';
import ImageUpload from '../ui/ImageUpload';

interface VisualUploadFormProps {
  onSubmit: (images: string[]) => void;
  onBack: () => void;
}

const VisualUploadForm: React.FC<VisualUploadFormProps> = ({ onSubmit, onBack }) => {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (uploadedImages: string[]) => {
    setImages(uploadedImages);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(images);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-8">
        <h3 className="text-lg font-medium text-navy-800 mb-2">Visual Analysis</h3>
        <p className="text-gray-600">
          Upload images of your business, products, or services to help our AI provide more tailored luxury marketing recommendations.
        </p>
      </div>
      
      <ImageUpload
        onImagesSelected={handleImageUpload}
        maxImages={5}
        label="Upload Business Images"
        helpText="Share images of your products, store/space, branding, or anything that represents your luxury business"
      />
      
      <div className="pt-6 flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="sm:w-1/2"
          onClick={onBack}
        >
          Back
        </Button>
        
        <Button
          type="submit"
          size="lg"
          className="sm:w-1/2"
        >
          Generate Luxury Marketing Plan
        </Button>
      </div>
      
      <p className="text-xs text-gray-500 text-center pt-4">
        This step is optional but highly recommended for more personalized results.
      </p>
    </form>
  );
};

export default VisualUploadForm;