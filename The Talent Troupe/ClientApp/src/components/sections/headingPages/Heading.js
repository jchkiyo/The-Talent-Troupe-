export default function Heading() {
    return (
        <header>
            <article className="home-banner">
                <section className="home-banner-text">
                    
                    <h1>Talent Troupe</h1>
                    <h2>Singapore</h2>
                    <p className="subsection">We are a troupe of 5 passionate programmers.</p>

                    <div className="home-banner-dps-container">
                        <img className="home-banner-dps" src={require('../../../assets/talentjoseph.png')} alt="talent1"></img>
                        <img className="home-banner-dps" src={require('../../../assets/talentjingwen.png')} alt="talent1"></img>
                        <img className="home-banner-dps" src={require('../../../assets/talentjiaearn.png')} alt="talent1"></img>
                        <img className="home-banner-dps" src={require('../../../assets/talentweiherng.png')} alt="talent1"></img>
                        <img className="home-banner-dps" src={require('../../../assets/talentram.png')} alt="talent1"></img>
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