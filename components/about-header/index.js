import { AboutHeaderWrap } from './style';
import siteConfig from "content/site";

const AboutHeader = () => (
  <AboutHeaderWrap>
    <div className="container container-small">
      <div className="author-info">
        <img className='author-img d-none d-sm-none d-md-block d-lg-block d-xl-block' src="/brand.png" />
        <div className="author-msg">
          <h1>Our Organization</h1>
          <p>Startup.js is a nonprofit organization devoted to spreading actions that worth executing, usually in the form of and an end-to-end process.</p>
          <div className="author-links">
            <a href="mailto:startup.js.org@gmail.com">startup.js.org@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  </AboutHeaderWrap>
);

export default AboutHeader;
