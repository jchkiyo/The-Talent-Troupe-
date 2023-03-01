import "../../page/Home.css";

export default function About() {
    return (
        <article className="about-container">
            <section className="hero-text">
                <h1>Talent Troupe</h1>
                <h2>Singapore</h2>
                <p className="about-subtext">The Talent Troupe launched in 2023 by 5 talents from Nanyang Technological University. 
                Jing Wen, Jia Earn, Joseph, Wei Herng, Ram were inspired to bring the importance of early financial planning for key purchases.</p>
            </section>

            <section className="double-image-container">
                <img className="double-image-1" src={require('../../../assets/pic2.png')} alt="FinancialPlanningPic"></img>
                <img className="double-image-2" src={require('../../../assets/pic3.png')} alt="FinancialPlanningPic"></img>
            </section>
    </article>
    );
}