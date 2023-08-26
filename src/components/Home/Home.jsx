import Button, { Shape } from "../Button/Button";
import { MainContent, SectionCards, SectionHighlights } from "./Home.styles";

const Home = () => {
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
        help
      </SectionCards>

    </MainContent>
  );
};

export default Home;