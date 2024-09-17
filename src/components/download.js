import Image from 'next/image';

const Download = ({ href }) => {
  return (
    <div className="flex justify-center md:justify-start">
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
      >
        <img 
          src="/download.svg" 
          alt="Download App" 
          className="h-[70px] md:h-[100px]"
        />
      </a>
    </div>
  );
};

export default Download;
