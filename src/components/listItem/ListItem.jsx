import './listItem.css';
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import React, { useState } from 'react';


const ListItem = ({item}) => {
  const [seeAllIcon, setSeeAllIcon] = useState(false);
  const [seeAll, setSeeAll] = useState(false);

    return (
        <div key={item.id} className="listItem">
            <img src={item.thumbnail}  alt="products"/>
            <div className="prodInfo">
                <h4>{item.title}</h4>
                <p><b>Category: </b>{item.category}</p>
                <p><b>Price:</b> {item.price}$</p>
                {
                    seeAll ? (
                        <>
                            <p><b>Brand:</b> {item.brand}</p>
                            <p><b>Description:</b> {item.description}</p>
                            <p><b>DiscountPercentage:</b> {item.discountPercentage}</p>
                            <p><b>Stock:</b> {item.stock}</p>
                            <p><b>Rating:</b> {item.rating}</p>
                        </>
                    ) : ""    
                }
            </div>
            <span 
                className="seeAll" onClick={(e)=> {
                    setSeeAllIcon(!seeAllIcon);
                    setSeeAll(!seeAll);
            }}>
                {seeAllIcon ? <AiOutlineUp /> : <AiOutlineDown />} 
            </span>
        </div>
    )
}

export default ListItem
