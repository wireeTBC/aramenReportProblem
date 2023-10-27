"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

interface ProfileImageProps {
  imageUrl: string;
}

export default function ProfileImage({  imageUrl }: ProfileImageProps) {
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://mobile-app-dev.a-ramen.com/api/fileName?key=${imageUrl}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLWRldiEifQ._BI5WpZOfJren2VRUUNnK4LP7zQH28IYRn4COA2RRlI`,
          },
          responseType: 'arraybuffer', // To handle binary data
        });
          console.log(response);
        if (response.status === 200) {
          // Convert the binary data to a base64 string
          const base64Image = Buffer.from(response.data, 'binary').toString('base64');
          const dataUrl = `data:image/png,${base64Image}`;
          setImage(dataUrl);
        } else {
          console.error('Failed to fetch image from API');
        }
      } catch (error) {
        console.error('Error fetching image from API', error);
      }
    };

    fetchData();
  }, [imageUrl]);

  return (
    <>
      {image ? (
        <Image src={image} alt="profile" className="rounded-full" width={90} height={90} />
      ) : (
        <div className=""></div>
      )}
    </>
  );
}
