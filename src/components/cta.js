import React from 'react';
import Download from './download';

const CTA = ({ href, text, subtext, footnote }) => {
  return (
    <div className="w-full px-6 text-center">
      <div className="max-w-4xl mx-auto pt-[3rem] md:pt-[6rem]">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{text}</h2>
        <p className="text-md md:text-lg mb-8">{subtext}</p>
        <div className="flex justify-center pb-[3rem] md:pb-[6rem]">
          <Download href={href} />
        </div>
        {footnote ? <p className="text-xs md:text-sm text-gray-600 pb-6">{footnote}</p> : <></>}
      </div>
    </div>
  );
};

export default CTA;
