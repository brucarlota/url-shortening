import { ImageWrapper, StyledCard } from "./Card.styles";
import CardContent from "@mui/material/CardContent";

const Card = ({ id, image, title, text }) => {
  return (
    <StyledCard className={id} variant="outlined">
      { image && 
        <ImageWrapper>
          <img src={`./src/assets/images/${image}`} alt="Brand recognition icon" />
        </ImageWrapper>
      }
      <CardContent className="cardContent">
        <h4 className="subtitle">{title}</h4>
        <p className="text">{text}</p>
      </CardContent>
    </StyledCard>
  );
};

export default Card;