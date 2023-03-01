import React from 'react';
import Star from '../../../assets/star.png';
import "./Ourreviews.css";


export default function Ourreviews() {
    return (
        <section className="testimonials">
            
            <article className="testimonials-topbar">
                <h1>Our Reviews</h1>
            </article>

            <section className="testimonials-cards">
                <TestimonialCard name="Ethan Kim" description="This planner is a game changer! I trust the advice and feel confident in my financial decisions now!"/>
                <TestimonialCard name="Chloe Thompson" description="Thanks to this, I now have a solid financial plan to my retirement!"/>
                <TestimonialCard name="Amelia Lee" description="This website helped create a roadmap for my financial future and I couldn't be happier with the results!"/>
                <TestimonialCard name="Caleb Tan" description="I thought financial planning is overwhelming and confusing but this website made it so much easier and accessible!"/>
                <TestimonialCard name="Victoria Nguyen" description="Thanks to the planning, I can now retire comfortably !"/>
                <TestimonialCard name="Madison Garcia" description="This website is an invaluable resource to navigate the world of retirement planning !"/>
                <TestimonialCard name="Ava Scott" description="This is like a professional advisor except it's free!"/>
                <TestimonialCard name="Sophia Brown" description="Wow just wow, this website is knowledgeable and have expert financial guidance!"/>
            </section>
            
        </section>
    );
}

function TestimonialCard(props) {
    return (
        <article className="testimonial-card">
            <img src={Star} alt="Star-Icon"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}


