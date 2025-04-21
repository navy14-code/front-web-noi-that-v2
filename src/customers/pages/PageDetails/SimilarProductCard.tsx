import React from 'react'
import '../Product/ProductCard.css'

const SimilarProductCard = () => {
    return (
        <div >
            <div className='group px-4 relative flex flex-col'>
                <div className='card'>

                    <img
                        className='card-media w-full h-full object-top'
                        src={"https://product.hstatic.net/200000058312/product/vlchdo-289-ab_7_14c81c60ec98439599283fdd6ce8f2dd_1024x1024.jpg"} alt=''
                    />

                </div>
                <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
                    <div className='name'>
                        <h1>Đèn Chùm LED </h1>
                        <p>Đèn chùm LED auto</p>

                    </div>
                    <div className='price flex items-center gap-3'>

                        <span className='font-sans text-gray-800'>
                            1.200.000<span className='text-gray-400 text-sm'>đ</span>
                        </span>
                        <span className='thin-line-through text-gray-400'>
                            1.500.000<span className='text-gray-400 text-sm'>đ</span>
                        </span>
                        <span className='discount text-red-500 font-semibold'>
                            20%
                        </span>

                    </div>

                </div>

            </div >
        </div>
    )
}

export default SimilarProductCard
