import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [images, setImages] = useState([]);
  const [imgIndex, setImageIndex] = useState(1) // Not used yet

  const getImages = async () => {
    try {
      const imageresponse = await axios.get(`https://picsum.photos/v2/list?page=${imgIndex}&limit=30`);
      setImages(imageresponse.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  useEffect(() => {
    getImages()
  }, [imgIndex])

const nxtClick = () => {
    setImageIndex(imgIndex + 1);
     setImages([])
};

const prevClick = () => {
  if (imgIndex > 1) {
    setImageIndex(imgIndex - 1);
     setImages([])
  }
};
  let imageDataResponse = <h3 className='flex justify-center items-center'>Loadind images...</h3>
  
  if (images.length > 0) {
    imageDataResponse = images.map((elem, id) => {
      return (
        <div key={id} className='flex flex-col shadow-md w-[280px] h-[320px] bg-white rounded-2xl overflow-hidden'>
          {/* Header */}
          <div className='flex justify-between items-center px-3 py-2 bg-gray-50 h-10'>
            <p className='text-xs font-bold truncate w-2/3'>{elem.author}</p>
            <img 
              src={elem.download_url} 
              alt=""  
              className='rounded-full w-[30px] h-[30px] object-cover flex-shrink-0' 
            />
          </div>
          {/* Image Body */}
          <div className='w-full flex-1 overflow-hidden'>
            <img 
              src={elem.download_url} 
              alt={elem.author} 
              className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' 
            />
          </div>
        </div>
      )
    })
  }

  return (
    // Main Container: Reduced gap to gap-2 (0.5rem) and centered content
    <div className='flex flex-col w-screen min-h-screen p-6 items-center justify-start bg-gray-100'>
      
      {/* Image Grid Wrapper: Removed justify-between/items-center to allow tight wrapping */}
      <div className='flex flex-wrap gap-2 justify-center w-full max-w-7xl'>
        {imageDataResponse}
      </div>

      {/* Pagination Controls */}
      <div className='flex gap-4 mt-6'>
        <button onClick={prevClick} 
        className='bg-green-300 text-black hover:scale-95 hover:bg-green-400 transition-all rounded-full py-2 px-6 text-sm font-semibold shadow-sm'>
          Prev
        </button>
        <div>{imgIndex}</div>
        <button onClick={nxtClick}
        className='bg-green-300 text-black hover:scale-95 hover:bg-green-400 transition-all rounded-full py-2 px-6 text-sm font-semibold shadow-sm'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App   