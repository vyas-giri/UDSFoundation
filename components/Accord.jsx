import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Accord = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg w-96">
      <button
        className="flex justify-start text-lg font-semibold items-center p-1 w-full text-left text-[#003F7D] rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {/* <ChevronDownIcon className='w-5' /> */}
      </button>
      {isOpen && (
        <div className="p-2 text-[#5F6265] font-extralight text-xs">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accord;