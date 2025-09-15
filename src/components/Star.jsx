import { Star, StarHalf, Star as StarEmpty } from "lucide-react";

const StarRating = ({ rating }) => {
  // Round rating to nearest half (e.g. 4.3 -> 4.5)
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} fill="red" strokeWidth={0} />);
  }

  // Half star
  if (hasHalf) {
    stars.push(<StarHalf key="half" fill="red" strokeWidth={0} />);
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<StarEmpty key={`empty-${i}`} stroke="red" />);
  }

  return <div className="flex">{stars} <span className="px-2"> for {rating}</span></div>;
};

export default StarRating;  
