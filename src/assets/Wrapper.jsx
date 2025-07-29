import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'

import {BoxTwo} from './Boxes'; // Assuming these are exported from 'Boxes.js'

const Wrapper = () => {



  return (
    <div>
    <div className="relative flex items-center h-96 p-0 z-20">
      <BoxTwo/>
    </div>
    </div>
  );
};

export default Wrapper;


