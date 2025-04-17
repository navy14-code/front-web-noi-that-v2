import React from "react";
import FanCategoryCard from "./FanCategoryCard";

const FanCategory = () => {
    return (
        <div className="flex flex-wrap justify-between py-5 lg:px-10 border-b">
            {[1, 1, 1, 1, 1, 1].map((item) => <FanCategoryCard />)}
        </div>
    );
}
export default FanCategory;