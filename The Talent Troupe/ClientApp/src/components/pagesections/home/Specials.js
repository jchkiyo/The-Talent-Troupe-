import Service1 from '../../../assets/service1.png';
import Service2 from '../../../assets/service2.png';
import Service3 from '../../../assets/service3.png';
import {Link} from 'react-router-dom';

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
                    description="Secure your financial future with in-depth analysis of your retirement goals, income sources and expenses"
                    direct="/Retirementplanner"/>
                    

                <SpecialCard 
                    image={Service2}
                    name="Big Purchase Planner"
                    price="FREE"
                    description="An invaluable advisor for anyone looking to make an big purchase such as cars/housing"
                    direct="/Retirementplanner"/>
                    

                <SpecialCard
                    image={Service3}
                    name="Car Prices"
                    price="COMING SOON"
                    description="Ultimate tool to get the best deal of your car purchase with our extensive database of car models and prices"/>
            </section>


        </section>
    );
}

function SpecialCard(props) {

    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
                <p>{props.description}</p>
                <Link className="special-button" to={props.direct}> Start Now!</Link>
            </section>
        </article>
    );
}