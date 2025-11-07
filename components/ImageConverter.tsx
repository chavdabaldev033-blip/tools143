
import React, { useState, useRef, useCallback, useEffect } from 'react';
import type { Conversion } from '../types';
import { DownloadIcon, UploadIcon, ResetIcon } from './Icons';

interface ImageConverterProps {
  conversion: Conversion;
}

const mimeTypeMap = {
    JPG: 'image/jpeg',
    PNG: 'image/png',
    WEBP: 'image/webp'
};

const acceptedFileTypes = "image/jpeg,image/png,image/webp";

export function ImageConverter({ conversion }: ImageConverterProps) {
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetState = useCallback(() => {
    setSourceFile(null);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    if (convertedUrl) URL.revokeObjectURL(convertedUrl);
    setConvertedUrl(null);
    setIsConverting(false);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [previewUrl, convertedUrl]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      if (convertedUrl) URL.revokeObjectURL(convertedUrl);
    };
  }, [previewUrl, convertedUrl]);

  const handleFileSelect = useCallback((file: File | null) => {
    if (!file) return;
    
    if (!acceptedFileTypes.includes(file.type)) {
      setError(`Invalid file type. Please upload a JPG, PNG, or WEBP image.`);
      return;
    }
    
    resetState();
    setSourceFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  }, [resetState]);

  const convertImage = useCallback(() => {
    if (!sourceFile) return;

    setIsConverting(true);
    setError(null);
    setConvertedUrl(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setError('Could not get canvas context.');
          setIsConverting(false);
          return;
        }

        if (conversion.to === 'JPG') {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);

        const targetMimeType = mimeTypeMap[conversion.to];
        const dataUrl = canvas.toDataURL(targetMimeType, 0.95);
        setConvertedUrl(dataUrl);
        setIsConverting(false);
      };
      img.onerror = () => {
        setError('Could not load image file.');
        setIsConverting(false);
      };
      img.src = e.target?.result as string;
    };
    reader.onerror = () => {
      setError('Could not read file.');
      setIsConverting(false);
    };
    reader.readAsDataURL(sourceFile);
  }, [sourceFile, conversion.to]);

  const handleDragEvents = (e: React.DragEvent<HTMLDivElement>, isEntering: boolean) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(isEntering);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    handleDragEvents(e, false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const downloadFileName = sourceFile ? `${sourceFile.name.split('.').slice(0, -1).join('.')}.${conversion.to.toLowerCase()}` : `converted.${conversion.to.toLowerCase()}`;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800 dark:text-white">
        Convert {conversion.from} to {conversion.to}
      </h2>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
        Fast, secure, and client-side image conversion.
      </p>

      {!sourceFile ? (
        <div
          onDragEnter={(e) => handleDragEvents(e, true)}
          onDragLeave={(e) => handleDragEvents(e, false)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative flex flex-col items-center justify-center w-full h-64 border-4 border-dashed rounded-lg cursor-pointer transition-all duration-300 ${isDragging ? 'border-primary bg-primary/10' : 'border-gray-300 dark:border-gray-600 hover:border-primary/50 dark:hover:border-primary-light/50 bg-gray-50 dark:bg-gray-700/50'}`}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
            <UploadIcon className={`w-12 h-12 mb-3 transition-colors duration-300 ${isDragging ? 'text-primary' : 'text-gray-400'}`} />
            <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
              <span className="text-primary dark:text-primary-light">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">JPG, PNG, WEBP (up to 10MB)</p>
          </div>
          <input ref={fileInputRef} type="file" className="hidden" accept={acceptedFileTypes} onChange={(e) => handleFileSelect(e.target.files ? e.target.files[0] : null)} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Original Image</h3>
            {previewUrl && <img src={previewUrl} alt="Preview" className="max-h-64 w-auto mx-auto rounded-lg shadow-md" />}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{sourceFile.name} ({(sourceFile.size / 1024 / 1024).toFixed(2)} MB)</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            {!convertedUrl && (
              <button
                onClick={convertImage}
                disabled={isConverting}
                className="w-full max-w-xs bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isConverting ? 'Converting...' : `Convert to ${conversion.to}`}
              </button>
            )}
            {convertedUrl && (
              <div className="w-full text-center p-4 bg-green-100 dark:bg-green-900/50 rounded-lg animate-fade-in">
                <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-300">Conversion Successful!</h3>
                <a
                  href={convertedUrl}
                  download={downloadFileName}
                  className="inline-flex items-center justify-center w-full max-w-xs bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  <DownloadIcon className="w-6 h-6 mr-2" />
                  Download {conversion.to}
                </a>
              </div>
            )}
            <button
              onClick={resetState}
              className="w-full max-w-xs flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <ResetIcon className="w-5 h-5 mr-2" />
              Convert Another Image
            </button>
          </div>
        </div>
      )}
      {error && <p className="text-red-500 text-center mt-4 animate-fade-in">{error}</p>}
    </div>
  );
}
