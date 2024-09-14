import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Subheading from "../../../components/Subheading";
import ReviewCard from "./ReviewCard";

const Testimonial = () => {
  const reviewData = [
    {
      id: 0,
      name: "Winson Herry",
      address: "California",
      reviewDetail:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      id: 2,
      name: "Winson Herry",
      address: "California",
      reviewDetail:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      id: 1,
      name: "Winson Herry",
      address: "Australia",
      reviewDetail:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];
  return (
    <section className="testimonial-section py-20 lg:py-28">
      <div className="flex justify-between">
        <div className="basis-2/4 lg:w-auto">
          <Subheading>Testimonial</Subheading>
          <h1 className="text-3xl  md:text-4xl  font-semi-bold">What Our Patients Says</h1>
        </div>
        <div className="">
          <img className="basis-2/4 w-20 items-center lg:w-3/4" src={quote} alt="" />
        </div>
      </div>
      {/* reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-14 lg:mt-20">
                                    {reviewData.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)}
      </div>
    </section>
  );
};

export default Testimonial;
