import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import Button from './Button';

interface ImageUploadProps {
  onImagesSelected: (images: string[]) => void;
  maxImages?: number;
  label?: string;
  helpText?: string;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImagesSelected,
  maxImages = 5,
  label = 'Upload Images',
  helpText = 'Upload images to help us better understand your business',
  className = '',
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // Check if adding new files exceeds the maximum
    if (images.length + files.length > maxImages) {
      setError(`You can only upload a maximum of ${maxImages} images`);
      return;
    }

    setError(null);
    
    const newImages: string[] = [];
    
    Array.from(files).forEach(file => {
      // Validate file is an image
      if (!file.type.startsWith('image/')) {
        setError('Only image files are allowed');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          newImages.push(event.target.result as string);
          
          // If all files have been processed
          if (newImages.length === files.length) {
            const updatedImages = [...images, ...newImages];
            setImages(updatedImages);
            onImagesSelected(updatedImages);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onImagesSelected(updatedImages);
    setError(null);
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-navy-800 mb-2">
          {label}
        </label>
      )}
      
      <div className="mt-2">
        {helpText && <p className="text-sm text-gray-500 mb-3">{helpText}</p>}
        
        <div className="flex items-center justify-center w-full">
          <label
            className={`
              flex flex-col items-center justify-center w-full h-32
              border-2 border-dashed rounded-lg cursor-pointer
              ${images.length >= maxImages 
                ? 'border-gray-300 bg-gray-50 opacity-50 cursor-not-allowed' 
                : 'border-gray-300 hover:border-gold-400 bg-gray-50 hover:bg-gray-100'
              }
            `}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-2 text-gray-500" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG or WEBP (Max: {maxImages} images)
              </p>
            </div>
            <input 
              type="file" 
              className="hidden" 
              accept="image/*" 
              multiple
              onChange={handleFileChange}
              disabled={images.length >= maxImages}
            />
          </label>
        </div>
        
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        
        {images.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-medium text-navy-800 mb-3">Uploaded Images</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {images.map((src, index) => (
                <div key={index} className="relative group">
                  <div className="relative aspect-square overflow-hidden rounded-md border border-gray-200">
                    <img 
                      src={src} 
                      alt={`Uploaded ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Remove image"
                  >
                    <X className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;