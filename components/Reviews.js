import React from "react";
import ReviewStars from "./ReviewStars";
import Image from "next/image";
import Link from "next/link";
import GoogleWidget from "./GoogleWidget";

async function resData() {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${process.env.PLACE_ID}&key=${process.env.API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

const Reviews = async () => {
  const res = await resData();

  try{
    const reviews = res.result.reviews;
    const totalReviews = res.result.user_ratings_total;
    const rating = res.result.rating;
  
  
    return (
      <div className="">
        <div className="flex items-center text-2xl">
          Обща оценка: {parseFloat(rating).toFixed(1)}
          <div className="ml-2">
            <ReviewStars stars={rating} size={30} />
          </div>
        </div>
        <div className="text-lg text-blue">Общо {totalReviews} google ревюта</div>
        <div className="mt-2"><Link href="https://g.page/r/CbxkIKpAnUE0EBM/review">Създай ревю</Link></div>
  
        <div className="grid grid-cols-3 gap-10 mt-10">
            {reviews.map(review=>{
                return <GoogleWidget data={review} key={review.time}/>
            })}
           {/* <SwiperMultiple data={reviews} /> */}
        </div>
      </div>
    );
  }catch(e){
    console.log(e)
  if(e) return <div>Проблеми със сървъра!</div>
    
  }
  
};

export default Reviews;


