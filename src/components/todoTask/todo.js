import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPhotos = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
  return response.data;
};

export const Todo = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['photos'],
    queryFn: fetchPhotos,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Photo Gallery</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {data.slice(0, 10).map((photo) => (
          <div
            key={photo.id}
            className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-4 basis-[48%] md:basis-[48%] lg:basis-[32%] max-w-[48%]"
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="w-24 h-24 rounded-md object-cover mb-4 md:mb-0 md:mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{photo.title}</h3>
              <p className="text-sm text-gray-500">Photo ID: {photo.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
