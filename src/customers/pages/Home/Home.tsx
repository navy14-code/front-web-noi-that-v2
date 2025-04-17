import React from 'react';
import FanCategory from '../FanCategory/FanCategory';
import CategoryGrid from '../CategoryGrid/CategoryGrid';

const Home = () => {
    return (
        <>
            <div className="space-y-5 lg:space-y-10 px-5 lg:px-20 relative">
                <FanCategory />
                <CategoryGrid />
            </div>

        </>
    );
}
export default Home;