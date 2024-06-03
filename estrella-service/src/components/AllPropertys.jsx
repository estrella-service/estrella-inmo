import React from 'react';

import HouseList from './HouseList';
import { useHouses } from '../context/houses-context';

const AllPropertys = () => {
  const { houses } = useHouses();
  return (
    <div className='w-full '>{houses && <HouseList houses={houses} />}</div>
  );
};

export default AllPropertys;
