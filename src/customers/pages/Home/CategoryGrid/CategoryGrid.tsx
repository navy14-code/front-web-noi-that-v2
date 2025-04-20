import React from "react";

const CategoryGrid = () => {
    return (
        <div className="grid gap-3 grid-rows-2 grid-cols-12 lg:has-[600px] px-5 lg:px-20 " >

            <div className="col-span-2 row-span-1 text-white ">
                <img
                    className="transition-transform duration-300 hover:scale-105 w-full h-full object-cover object-top rounded-md"
                    src="https://product.hstatic.net/200000058312/product/b50e13b30bb648588b1c3e777ce7bce2_7b65287a78b14a1aac9685471624f429_grande.jpg"
                    alt=""
                />
            </div>

            <div className="col-span-7 row-span-2 text-white ">
                <img
                    className="w-full h-full object-cover object-top rounded-md"

                    src="https://theme.hstatic.net/200000058312/1001080561/14/slider_1.jpg?v=472"
                    alt=""
                />
            </div>

            <div className="col-span-3 row-span-1 text-white ">
                <img
                    className="w-full h-full object-cover object-top rounded-md"

                    src="https://product.hstatic.net/200000058312/product/1_955f8a42583949a9a53a592ac20c8fae_grande.jpg"
                    alt=""
                />
            </div>

            <div className="col-span-2 row-span-1 text-white ">
                <img
                    className="w-full h-full object-cover object-top rounded-md"
                    src="https://product.hstatic.net/200000058312/product/vlthpl-213_43e95d00b64f4b20a1ef03c4fe2da108_grande.jpg"
                    alt=""
                />
            </div>

            <div className="col-span-3 row-span-1 text-white ">
                <img
                    className="w-full h-full object-cover object-top rounded-md"
                    src="https://theme.hstatic.net/200000058312/1001080561/14/section_hot.jpg?v=472"
                    alt=""
                />
            </div>

        </div>
    );
}
export default CategoryGrid;