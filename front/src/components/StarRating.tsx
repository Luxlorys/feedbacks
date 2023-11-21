import { useState } from 'react'
import ReactStars from 'react-rating-star-with-type'
import '../assets/css/index.css';


interface StarRatingProps {
    onStarChange: (value: number) => void;
}


export function StarRating({ onStarChange}: StarRatingProps) {

  // @ts-ignore
  const [star, setStar] = useState(0);

  const handleStar = (nextValue: number) => {
    setStar(nextValue);
    onStarChange(nextValue); // Call the callback function with the new value
  };


    return (
        <ReactStars 
            onChange={handleStar}
            value={0}
            count={5}
            isEdit={true}
            size={32}
            activeColors={[ "#FFCE00"]
        } />
    )
}