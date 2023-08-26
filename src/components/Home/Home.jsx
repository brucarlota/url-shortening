import Button, { Shape } from "../Button/Button";
import Input from "../Input/Input";
import { MainContent, SectionCards, SectionHighlights, ShortenLink, ShortenLinkResult } from "./Home.styles";

const Home = () => {
  const ariaLabel = { 'aria-label': 'Shorten link input' };

  return (
    <MainContent>
      <SectionHighlights>
        <div>
          <h1 className="title">More than just links</h1>
          <p className="text">Build your brand&apos;s recognition and get detailed insights 
    on how your links are performing.</p>
          <Button id="highlights__getStarted" bgcolor="#2BD0D0" text="Get started" shape={Shape.circle}/>
        </div>
        <div>
          <img className="image" src="./src/assets/images/illustration-working.svg" alt="" />
        </div>
      </SectionHighlights>

      <SectionCards>
        <div>
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
        </div>
        
      </SectionCards>

    </MainContent>
  );
};

export default Home;