import React from 'react';

const primaryVariant = {
  default: `lg:pr-32 xl:pr-48 lg:w-1/2`,
  reverse: `lg:pl-32 xl:pl-48 lg:w-1/2`
};

const secondaryVariant = {
  default: `mt-10 lg:mt-0 w-full lg:w-1/2`,
  reverse: `order-last lg:order-first mt-10 lg:mt-0 w-full lg:w-1/2`
};

const SplitSection = ({ primarySlot, secondarySlot, reverseOrder }) => (
  <section className="py-20">
    <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
      <div className={reverseOrder ? primaryVariant.reverse : primaryVariant.default}>
        {primarySlot}
      </div>
      <div className={reverseOrder ? secondaryVariant.reverse : secondaryVariant.default}>
        {secondarySlot}
      </div>
    </div>
  </section>
);

export default SplitSection;
