/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { denChumLevelTwo } from '../../../data/category/level two/denChumLevelTwo'
import { denBanLevelTwo } from '../../../data/category/level two/denBanLevelTwo'
import { denThaLevelTwo } from '../../../data/category/level two/denThaLevelTwo'
import { denTuongLevelTwo } from '../../../data/category/level two/denTuongLevelTwo'
import { denChumLevelThree } from '../../../data/category/level three/denChumLevelThree'
import { denBanLevelThree } from '../../../data/category/level three/denBanLevelThree'
import { denThaLevelThree } from '../../../data/category/level three/denThaLevelThree'
import { denTuongLevelThree } from '../../../data/category/level three/denTuongLevelThree'
import { Box } from '@mui/material'


const categoryTwo: { [key: string]: any[] } = {
    denChum: denChumLevelTwo,
    denBan: denBanLevelTwo,
    denTha: denThaLevelTwo,
    denTuong: denTuongLevelTwo,
}
const categoryThree: { [key: string]: any[] } = {
    denChum: denChumLevelThree,
    denBan: denBanLevelThree,
    denTha: denThaLevelThree,
    denTuong: denTuongLevelThree,
}
const CategorySheet = ({ selectedCategory, setShowSheet }: any) => {
    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => child.parentCategoryId == parentCategoryId)
    }
    return (

        <Box
            sx={{ zIndex: 2 }}
            className='bg-white shadow-lg lg:h-[350px] overflow-y-auto'>
            <div className='flex text-sm flex-wrap lg:p-5 lg:gap-5 gap-2'>

                {
                    categoryTwo[selectedCategory]?.map((item: any, index) =>
                        <div className={`p-8 lg:w-[20%] ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`} >
                            <p className='text-primary-color mb-5 font-semibold text-lg'>{item.name}</p>
                            <ul className='space-y-3'>
                                {childCategory(categoryThree[selectedCategory], item.categoryId).map((item: any) =>
                                    <div className='text-black'>
                                        <li className='hover:text-primary-color cursor-pointer'>
                                            {item.name}
                                        </li>
                                    </div>)}
                            </ul>
                        </div>
                    )}
            </div>
        </Box>
    )

}

export default CategorySheet
