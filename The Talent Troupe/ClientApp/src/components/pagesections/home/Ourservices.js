import Service1 from '../../../assets/service1.png';
import Service2 from '../../../assets/service2.png';
import Service3 from '../../../assets/service3.png';
import {Link} from 'react-router-dom';
import "./Ourservices.css";

export default function Ourservices() {
    return (
        <section className="our-services">

            <article className="our-services-topbar">
                <h1>Our services</h1>
            </article>

            <section className="our-services-cards">

                <ServiceCard
                    image={Service1}
                    name="Retirement Planner"
                    price="FREE"
                    description="Secure your financial future with in-depth analysis of your retirement goals, income sources and expenses"
                    direct="/Retirementplanner"/>
                    

                <ServiceCard 
                    image={Service2}
                    name="Big Purchase Planner"
                    price="FREE"
                    description="An invaluable advisor for anyone looking to make a big purchase such as cars/housing"
                    direct="/Bigpurchaseplanner"/>
                    

                <ServiceCard
                    image={Service3}
                    name="View HDB Prices"
                    price="FREE"
                    description="Ultimate tool to search recently sold HDB prices with filters for town, area and more!"
                    direct="/Viewhdbprices"/>
            </section>


        </section>
    );
}

function ServiceCard(props) {

    return (
        <article className="service-card">
            <img src={props.image} alt="service"></img>
            <section className="service-card-content">
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
                <p className="service-card-para">{props.description}</p>
                <Link className="start-now-button" to={props.direct}> Start Now!</Link>
            </section>
        </article>
    );
}