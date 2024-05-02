'use client'
import React, { ChangeEvent, useState } from 'react';
import  CogLoading  from '@/components/loading/cogLoading';
import BackgroundMain from '@/components/loading/backgroundMain';
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
    <div style={{height:'100vh', fontFamily:'times news roman', textAlign:'center',overflow:'hidden'}}>
     {/* <CogLoading></CogLoading> */}
     <BackgroundMain></BackgroundMain>
    </div>
  );
};

export default ImageUploader;
