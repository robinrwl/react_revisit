import React from 'react';

const App = () => {
  // 1. Fixed typo: handelClick -> handleClick
  function handleClick() {
    console.log('Button Clicked via Reference');
  }

  function handleMouseOver(valX,valY) {
    console.log(valX, valY);
  }

  return (
    <div className='flex flex-col gap-10 p-20 w-200 items-center' >

      <button className='bg-blue-500 text-white px-4 py-2 rounded-xl'
        onMouseOver={(elem)=>{ handleMouseOver( elem.screenX, elem.screenY ) }} 
        onClick={() => console.log('Button Clicked via Inline')}
      >
        Inline Function with MouseOver
      </button>
      <button onClick={handleClick} className='bg-blue-500 text-white px-4 py-2 rounded-xl'>
        Function Reference
      </button>
      <button onClick={() => console.log('Calling function inside')} className='bg-amber-500 text-white px-4 py-2 rounded-xl'>
        Inline Arrow Function
      </button>
    </div>
  );
};

export default App;   git 