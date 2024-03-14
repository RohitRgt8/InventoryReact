import React from 'react';


  const ProductImage = ({ imageUrl, altText }) => {
    console.log(imageUrl);
    return (
      <img
        src={imageUrl}  
        alt={altText}
        style={{ width: 50, height: 50 }}  
        onLoad={() => console.log(`Image loaded: ${imageUrl}`)}
        onError={() => console.error(`Error loading image: ${imageUrl}`)}
      />
    
  );
};

export default ProductImage;
