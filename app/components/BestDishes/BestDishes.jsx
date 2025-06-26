"use client"
import React from 'react';
import SectionTitle from './Section-title/SectionTitle';
import FoodMenuSection from './Food-Menu-Section/FoodMenuSection';

const BestDishes = () => {
    return (
        <div className='max-w-6xl mx-auto pt-[152px]'>
            <SectionTitle />
            <FoodMenuSection />
        </div>
    );
};

export default BestDishes;