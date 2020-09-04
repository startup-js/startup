import siteConfig from 'content/site';
import { FooterWrap } from './style.js';
import './carbon.scss';

const PageFooter = () => (
  <FooterWrap className="border-top">
    <div className="container">
      <div className="foot-cols-wrap row">
        <div className="site-meta-wrap col-12 col-sm-12 col-lg col-xl col-md-12">
          <div className="site-meta">
            <div className="brand-detail">
              <a href="/" className='brand'><img src="/brand.png" alt="" /> Startup.js</a>
            </div>
            <div className="brand-explanation">
              <p>A nonprofit organization devoted to spreading actions that worth executing, usually in the form of and an end-to-end process.</p>
            </div>
            <p className='meta-links'>
              &copy; startup.js.org &middot;
              {/*&nbsp; <a href="/about">FAQ</a> &middot;*/}
              {/*&nbsp; <a href="/terms">Terms</a> &middot;*/}
              {/*&nbsp; <a href="/privacy">Privacy</a>*/}
            </p>
          </div>
        </div>
        <div className="site-contribute foot-col col-12 col-sm-4 col-lg-2">
          <ul>
            <li className='foot-header'>Contribute</li>
            <li><a href={ siteConfig.url.addGuide } target="_blank">Write a Guide</a></li>
            <li><a href={ siteConfig.url.addRoadmap } target="_blank">Submit a Roadmap</a></li>
            <li><a href='/about'>About this Site</a></li>
          </ul>
        </div>
      </div>
    </div>


    {/* Do not show on local */}
    { process.env.GA_SECRET && (
      <>
        <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CE7DLK3Y&placement=roadmapsh" id="_carbonads_js"></script>
        {/*<div id="codefund"></div>*/}
        {/*<script src="https://app.codefund.io/properties/681/funder.js" async></script>*/}
      </>
    ) }
  </FooterWrap>
);

export default PageFooter;
