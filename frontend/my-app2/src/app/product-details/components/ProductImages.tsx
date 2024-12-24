import React from 'react';
import { Box } from '@mui/material';

interface ProductImagesProps {
  mainImage: string;
  images: string[];
  onImageSelect: (image: string) => void;
}

const ProductImages: React.FC<ProductImagesProps> = ({ mainImage, images, onImageSelect }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Main Image */}
      <Box
        component="img"
        src={mainImage}
        alt="Product Image"
        sx={{
          width: { xs: '50', md: '50' },
          height: '50',
          borderRadius: 2,
          boxShadow: 3,
          mb: 2,
        }}
      />

      {/* Thumbnail Images */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`Thumbnail ${index + 1}`}
            sx={{
              width: 50,
              height: 60,
              cursor: 'pointer',
              borderRadius: 2,
              boxShadow: 1,
              '&:hover': {
                boxShadow: 3,
              },
            }}
            onClick={() => onImageSelect(img)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductImages;