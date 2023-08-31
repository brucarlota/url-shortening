import Button, { Shape } from "../Button/Button";
import Input from "../Input/Input";
import {  CardsSection, 
          MainContent, 
          SectionCards, 
          SectionHighlights, 
          ShortenLink, 
          ShortenLinkResult, 
          SectionGetStarted 
        } from "./Home.styles";
import Card from "../Card/Card";

const Home = () => {
  const ariaLabel = { 'aria-label': 'Shorten link input' };

  return (
    <MainContent>
      <SectionHighlights>
        <div className="container">
          <div className="section-header">
            <h1 className="title">More than just links</h1>
            <p className="text">Build your brand&apos;s recognition and get detailed insights 
      on how your links are performing.</p>
            <Button id="highlights__getStarted" bgcolor="#2BD0D0" text="Get started" shape={Shape.circle}/>
          </div>
          <div>
            <img className="image" src="./src/assets/images/illustration-working.svg" alt="" />
          </div>
        </div>
      </SectionHighlights>

      <SectionCards>
          <div className="container">
            <ShortenLink role="inputLink">
              <Input id="input" placeholder="Shorten a link here..." inputProps={ariaLabel} />
              <Button id="Cards__ShortenLink" shape={Shape.square} text="Shorten It!" bgcolor="#2BD0D0" />
            </ShortenLink>
            <ShortenLinkResult>
              <div className="item">
                <p className="item__description">https://jocumpantanal.ong.br</p>
                <div className="item__copy">
                  <p className="shortlink">https://shortlink</p>
                  <Button id="copyButton" shape={Shape.square} bgcolor="#2BD0D0" text="Copy" />
                </div>
              </div>
              <div className="item">
                <p className="item__description">https://jocumpantanal.ong.br</p>
                <div className="item__copy">
                  <p className="shortlink">https://shortlink</p>
                  <Button id="copyButton" shape={Shape.square} bgcolor="#2BD0D0" text="Copy" />
                </div>
              </div>
            </ShortenLinkResult>

            <CardsSection>
              <div className="section-header">
                <h2 className="title2">Advanced Statistics</h2>
                <p className="text">Track how your links are performing across the web with our 
    advanced statistics dashboard.</p>
              </div>

              <div className="cards">
                <Card id="card-1" title="Brand Recognition" text="Boost your brand recognition with each click. Generic links don’t 
      mean a thing. Branded links help instil confidence in your content." image="icon-brand-recognition.svg"/>

                <Card id="card-2" title="Detailed Records" text="Gain insights into who is clicking your links. Knowing when and where 
      people engage with your content helps inform better decisions." image="icon-detailed-records.svg" />

                <Card id="card-3" title="Fully Customizable" text="Improve brand awareness and content discoverability through customizable 
      links, supercharging audience engagement." image="icon-fully-customizable.svg" />

                <div className="line"></div>
              </div>
            </CardsSection>
          </div>
      </SectionCards>

      <SectionGetStarted>
        <h2 className="title2">Boost your links today</h2>
        <Button id="highlights__getStarted" bgcolor="#2BD0D0" text="Get started" shape={Shape.circle} align="center"/>
      </SectionGetStarted>

    </MainContent>
  );
};

export default Home;