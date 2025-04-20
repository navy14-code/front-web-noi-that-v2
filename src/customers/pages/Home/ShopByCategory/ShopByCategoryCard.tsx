import React from 'react'
import './ShopByCategory.css'

const ShopByCategoryCard = () => {
    return (
        <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
            <div className='custom-border 
            w-[150px] h-[150px] 
            lg:w-[200px] lg:h-[200px]
            rounded-full bg-primary-color'>
                <img
                    className=" rounded-full group-hover:scale-95 transition-transform transform-duration-300 object-cover object-top h-full w-full"
                    src="https://theme.hstatic.net/200000058312/1001080561/14/coll_2.jpg?v=472"
                    alt="" />
            </div>
        </div>
    )
}

export default ShopByCategoryCard
