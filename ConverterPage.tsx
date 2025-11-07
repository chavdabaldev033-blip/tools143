
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ImageConverter } from '../components/ImageConverter';
import { CONVERSIONS } from '../constants';
import type { Conversion } from '../types';

export default function ConverterPage() {
  const { type } = useParams<{ type: string }>();

  const conversion: Conversion | undefined = CONVERSIONS.find(c => c.path === type);

  if (!conversion) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ImageConverter conversion={conversion} />
      </div>
    </div>
  );
}
