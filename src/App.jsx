import React, { useEffect, useState } from 'react';
import { NavbarComp } from './assets/components/NavbarComp';

const App = () => {


  return (
    <div>
      <NavbarComp />
      <div className='container mx-auto px-24 flex items-center flex-col'>

        <input type="text" class="py-3 px-4 w-1/3 border block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="This is placeholder" />
        <textarea class="py-3 px-4 block w-1/3 border mt-5 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows="3" placeholder="This is a textarea placeholder"></textarea>
        <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          Solid
        </button>
      </div>
    </div>
  );
};

export default App;

