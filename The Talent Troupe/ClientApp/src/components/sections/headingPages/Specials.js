import Carousel from './SpecialsCarousel';
import Service1 from '../../../assets/service1.png';
import Service2 from '../../../assets/service2.png';
import Service3 from '../../../assets/service3.png';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">

            <article className="specials-topbar">
                <h1>Our services</h1>
            </article>

            <section className="specials-cards">

                <SpecialCard
                    image={Service1}
                    name="Retirement Planner"
                    price="FREE"
                    description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."/>

                <SpecialCard 
                    image={Service2}
                    name="Big Purchase Planner"
                    price="FREE"
                    description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>

                <SpecialCard
                    image={Service3}
                    name="Car Prices"
                    price="FREE"
                    description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}