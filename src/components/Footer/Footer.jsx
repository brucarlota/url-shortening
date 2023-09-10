import { StyledFooter, StyleAttribution } from "./Footer.styles";
const Footer = () => {
  return (
    <>
    <StyledFooter>
      <div className="container">
        <div className="logo">
          <img src="/images/logo-white.svg" alt="Logo" />
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
            <li><a href=""><img src="/images/icon-facebook.svg" alt="social icon facebook" /></a></li>
            <li><a href=""><img src="/images/icon-instagram.svg" alt="social icon instagram" /></a></li>
            <li><a href=""><img src="/images/icon-pinterest.svg" alt="social icon pinterest" /></a></li>
            <li><a href=""><img src="/images/icon-twitter.svg" alt="social icon twitter" /></a></li>
          </ul>
        </div>
      </div>
    </StyledFooter>
    <StyleAttribution>
      Challenge by <a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
      Coded by <a href="https://brucarlota.github.io/profile/">Bruna Carlota</a>.
    </StyleAttribution>
    </>
  );
};

export default Footer;