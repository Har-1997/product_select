import "./pagination.css";
import React, { useEffect, useState } from 'react';
import { paginationChange, getFetch } from '../../features/counter/userSlice'; 
import { useDispatch, useSelector } from 'react-redux';

const Pagination = ({paginationPages, count}) => {


  const pageNumbers = [];

  // const [paginate, setPaginate] = useState(1);

  for(let i = 1; i <= Math.ceil(paginationPages); i++){
    pageNumbers.push(i);
  }
  const dispatch = useDispatch();
  // console.log("count pagination" , count)
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
            <li key={number} className={`page-item ${number === count ? 'active': ''}`}>
                <a onClick={(e)=> {
                        e.preventDefault();
                        dispatch(paginationChange(number));
                        // setPaginate(number)
                    }} 
                    href="" 
                    className='page-link'
                >
                    {number}
                </a>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
