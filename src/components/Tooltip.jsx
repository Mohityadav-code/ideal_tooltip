import React from 'react';
 

const Tooltip = ({ position, content, children, width, height }) => {
  const tooltipClassNames = `absolute hidden w-${width} h-${height} group-hover:inline-block rounded-lg bg-white shadow-2xl z-50 border-[2px] text-black text-xs p-2 whitespace-nowrap ${
    position === 'top' ? 'left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]' : ''
  } ${position === 'bottom' ? 'left-1/2 -translate-x-1/2 z-50 top-[calc(100%+5px)]' : ''} ${
    position === 'left' ? 'top-1/2 -translate-y-1/2 right-[calc(100%+5px)]' : ''
  } ${position === 'right' ? 'top-1/2 -translate-y-1/2 left-[calc(100%+5px)]' : ''}`;

  const arrowClassNames = `absolute hidden group-hover:inline-block w-2 h-2 ${
    position === 'top'
      ? 'left-[48%] bottom-[102%] border-[2px] rotate-45 border-b-gray-200 border-t-0 border-l-0 border-r-gray-200 z-10'
      : ''
  } ${
    position === 'bottom'
      ? 'left-[48%] top-[102%] bottom-0 border-[2px] rotate-[225deg] border-b-gray-200 border-t-0 border-l-0 border-r-gray-200 z-10'
      : ''
  } ${
    position === 'left'
      ? 'top-[40%] -left-[7%] border-[2px] -rotate-[45deg] border-b-gray-200 border-t-0 border-l-0 border-r-gray-200 z-10'
      : ''
  } ${
    position === 'right'
      ? 'top-[42%] -right-[7%] bottom-0 border-[2px] rotate-[135deg] border-b-gray-200 border-t-0 border-l-0 border-r-gray-200 z-10'
      : ''
  }`;

  return (
    <div id="tooltip" className="relative cursor-pointer group">
      <div className="mx-2 my-1">{children}</div>
      <span className={tooltipClassNames}>{content}</span>
      <span className={arrowClassNames}></span>
    </div>
  );
};
 
export default Tooltip;