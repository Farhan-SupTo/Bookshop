import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex items-center justify-center h-[calc(100vh-72px)]'>
            <p className='font-thin text-7xl'>L</p>
           
            <div className='h-10 w-10 rounded-full border-dashed border-8 border-blue-500 animate-spin mt-5'></div>
            <p className='font-thin text-7xl'>ading.....</p>
        </div>
    );
};

export default LoadingSpinner;