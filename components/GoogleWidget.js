import Image from "next/image";
import ReviewStars from "./ReviewStars";

export default function GoogleWidget({ data }) {
    return (
     
          <div className="flex flex-col p-10 shadow-xl">
            <div className="flex">
                <div className="relative rounded-full h-14 w-14">
                  <Image src={data.profile_photo_url} fill alt={data.author_name} />
                </div>
                <div className="ml-2">
                  <div className="text-blue">{data.author_name}</div>
                  <div className="text-[#bfb1b2]">{data.relative_time_description}</div>
                </div>
            </div>
            <div className="flex items-center mt-10">{data.rating} <span className="ml-1">
                <ReviewStars stars={data.rating} size={20} />
            </span></div>
            <div>{data.text}</div>
          </div>
     
    );
  }