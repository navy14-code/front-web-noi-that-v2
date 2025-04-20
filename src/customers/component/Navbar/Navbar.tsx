/* eslint-disable no-constant-condition */

import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../../data/category/mainCategory";
import { useState } from "react";
const Navbar = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    const [selectedCategory, setSelectedCategory] = useState("denChum");
    const [showCategotySheet, setShowCategorySheet] = useState(false);
    return (
        // <div className="bg-[#218F76] text-white">
        <Box
            className="sticky top-0 left-0 right-0 bg-[#218F76] text-white"
            sx={{ zIndex: 2 }}
        >
            <div className="flex items-center justify-between px-5 lg:px-20 has-[70px] border-b">
                <div className="flex items-center gap-9">
                    <div className="flex items-center gap-2">
                        {!isLarge && <IconButton>
                            <MenuIcon className="text-white" sx={{ fontSize: 30 }} />
                        </IconButton>}
                        <img src="/images/logo.webp"
                            alt="Logo"
                            width={200}
                            height={50}
                            className=".img-fluid cursor-pointer"
                        />
                        <ul className="flex items-center font-medium ">
                            {mainCategory.map((item) => <li
                                onMouseLeave={() => {
                                    setShowCategorySheet(false);
                                }}
                                onMouseEnter={() => {
                                    setShowCategorySheet(true);
                                    setSelectedCategory(item.categoryId);
                                }}
                                className="mainCategory  text-white
                                 hover:text-primary1-color
                                 hover:border-b-2 h-[70px] px-4 border-primary1-color
                                 flex items-center ">
                                {item.name}
                            </li>)}
                        </ul>
                    </div>
                </div>
                <div className="flex gap-4 lg:gap-6 items-center">
                    <IconButton>
                        <SearchIcon className="text-white" sx={{ fontSize: 30 }} />
                    </IconButton>
                    {
                        false ? <Button className="flex items-center gap-2">
                            <Avatar
                                sx={{ width: 30, height: 30 }}
                                src="https://yt3.ggpht.com/K3JsYlhN3Hg0NyhYcZNlNd-v-Xesv0ou38gmz9zfqwZVpfXPE_nb0xfYZApQvYDGv6u-6WYJ=s88-c-k-c0x00ffffff-no-rj" />
                            <h1 className="font-semibold hidden lg:block">
                                Nam
                            </h1>

                        </Button> : <Button variant="contained">Login</Button>
                    }

                    <IconButton>
                        <AddShoppingCartIcon className="text-white" sx={{ fontSize: 30 }} />
                    </IconButton>
                    {/* {isLarge && <Button startIcon={<Storefront />} variant="outlined" className="bg-[#00927c] hover:bg-[#007f6b] text-white">
                            Get Started
                        </Button>} */}
                </div>
            </div>
            {showCategotySheet && <div
                onMouseLeave={() => setShowCategorySheet(false)}
                onMouseEnter={() => setShowCategorySheet(true)}
                className="categorySheet absolute w-[1325px] top-[4.41rem] left-1/2 -translate-x-1/2 border bg-slate-500 ">
                <CategorySheet selectedCategory={selectedCategory} />
            </div>}
        </Box>
        // </div>
    );
}
export default Navbar;