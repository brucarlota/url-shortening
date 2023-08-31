import { StyledFooter } from "./Footer.styles";
const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="logo">
          <img src="./src/assets/images/logo-white.svg" alt="Logo" />
        </div>
        <div className="links">
          <div>
            <h6 className="title2">Features</h6>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>

          <div>
            <h6 className="title2">Resources</h6>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h6 className="title2">Company</h6>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <ul>
            <li><a href=""><img src="./src/assets/images/icon-facebook.svg" alt="" /></a></li>
            <li><a href=""><img src="./src/assets/images/icon-instagram.svg" alt="" /></a></li>
            <li><a href=""><img src="./src/assets/images/icon-pinterest.svg" alt="" /></a></li>
            <li><a href=""><img src="./src/assets/images/icon-twitter.svg" alt="" /></a></li>
          </ul>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;