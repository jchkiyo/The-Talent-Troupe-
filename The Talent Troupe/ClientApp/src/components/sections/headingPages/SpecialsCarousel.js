import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Service1 from '../../../assets/service1.png';
import Service2 from '../../../assets/service2.png';
import Service3 from '../../../assets/service3.png';
import SpecialCard from './CardInfo/SpecialCard';

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={Service1} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce"/>
            <SpecialCard image={Service2}name="Bruschetta" price="$16.99" description="Bread, mango, green onions"/>
            <SpecialCard image={Service3} name="Lemon Dessert" price="$8.50" description="Lemon bread, vanilla Icing"/>
        </Carousel>
    )
}