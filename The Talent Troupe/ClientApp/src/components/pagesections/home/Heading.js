export default function Heading() {
    return (
        <header>
            <article className="home-banner">
                <section className="home-banner-text">
                    
                    <h1>Talent Troupe</h1>
                    <h2>Singapore</h2>
                    <p className="home-banner-subsection">We are a troupe of 5 aspiring software engineers with a range of skills and experience committed to creating a successful and innovative website</p>
                    <div className="home-banner-dps-container">
                        <img className="home-banner-dps" src={require('../../../assets/talentjoseph.png')} alt="joseph"></img>
                        <img className="home-banner-dps" src={require('../../../assets/talentjingwen.png')} alt="jingwen"></img>
                        <img className="home-banner-dps" src={require('../../../assets/talentjiaearn.png')} alt="jiaearn"></img>
                        <img className="home-banner-dps" src={require('../../../assets/talentweiherng.png')} alt="tanweiherng"></img>
                        <img className="home-banner-dps" src={require('../../../assets/talentram.png')} alt="ram"></img>
                    </div>
                    <br></br>
                </section>

                <section className="home-banner-image">
                    <img src={require('../../../assets/pic1.webp')} alt="pic1"></img>
                </section>
            </article>
      </header>
    );
}