import React from "react";

const BookCard = ({ imageUrl, title, category, price, variant = "simple" }) => {
  return (
    <div className={`grow px-4 pt-4 pb-2.5 w-full bg-white 
       rounded-lg border border-solid border-zinc-300 min-w-60 cursor-pointer 
       ${variant === "detailed" ? "min-h-[375px]" : "min-h-[339px]"}`}>
      <img
        src={imageUrl}
        alt={`Cover of ${title}`}
        className="object-cover w-full rounded-lg aspect-[0.84]"
      />
      <div className="flex flex-col mt-4 w-full max-w-52">
        <h3 className="flex-1 shrink w-full text-base leading-snug basis-0 text-stone-900">
          {title}
        </h3>
        {variant === "detailed" ? (
          <>
            {price && <p className="self-start mt-2 font-semibold">{price}</p>}
            <p className="mt-2 w-full text-sm text-neutral-500">{category}</p>
          </>
        ) : (
          <p className="self-start mt-2 text-sm font-medium tracking-normal text-neutral-500">
            {category}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookCard;