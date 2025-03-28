import React from "react";
import { useNavigate } from "react-router-dom";

const BookCard = ({ id, cover, title, genre, price, isDetailed = true }) => {
  const navigate = useNavigate();


  const handleClick = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div className={`grow px-4 pt-4 pb-2.5 w-full bg-white 
       rounded-lg border border-solid border-zinc-300 min-w-60 cursor-pointer 
       ${isDetailed ? "min-h-[375px]" : "min-h-[339px]"}`}
      onClick={handleClick}
    >
      <img
        src={cover}
        alt={`Cover of ${title}`}
        className="object-cover w-full rounded-lg"
      />
      <div className="flex flex-col mt-4 w-full max-w-52">
        <h3 className="flex-1 shrink w-full font-sans text-base leading-snug basis-0 text-stone-900">
          {title}
        </h3>
        {isDetailed ? (
          <>
            {price === 0 ?
              <p className="self-start mt-1 font-semibold">Free</p> :
              <p className="self-start mt-1 font-semibold">Rs.{price}</p>
            }
            <p className="mt-1 w-full text-sm text-neutral-500">{genre}</p>
          </>
        ) : (
          <>
            <p className="self-start mt-2 text-sm font-medium tracking-normal text-neutral-500">
              {genre}
            </p>
            {/* <p className="">
              {progess}
            </p> */}
          </>
        )}
      </div>
    </div>
  );
};

export default BookCard;