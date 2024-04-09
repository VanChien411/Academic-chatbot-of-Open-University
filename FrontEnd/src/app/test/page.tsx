'use client'
import React, { ChangeEvent, useState } from 'react';

const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      console.log(reader)
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {image && (
        <img
          src={image as string}
          alt="Preview Image"
          style={{ maxWidth: '300px', maxHeight: '300px' }}
        />
      )}
    </div>
  );
};

export default ImageUploader;
