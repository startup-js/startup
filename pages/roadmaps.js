import { faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DefaultLayout from 'layouts/default/index';
import SiteNav from 'components/site-nav';
import PageFooter from 'components/page-footer';
import PageHeader from 'components/page-header';
import roadmaps from 'content/roadmaps';
import RowBlock from 'components/row-block';
import siteConfig from 'content/site';
import { BadgeLink, BadgesList, PrimaryBadge, SecondaryBadge } from 'components/badges';
import Helmet from 'components/helmet';

const PageTitle = "Startup.js";
const PageDescription = "Startup.js is a nonprofit organization devoted to spreading actions that worth executing, usually in the form of and an end-to-end process.";

function getBadgeText(roadmap) {
  if (roadmap.upcoming) {
    return 'Upcoming';
  }
  
  if (roadmap.communityResource) {
    return 'Community';
  }
  
  return '';
}

const RoadmapsList = () => (
  <DefaultLayout>
    <Helmet title={PageTitle} desciption={PageDescription} />
    <SiteNav />
    <div className="container">
      <PageHeader
        title={PageTitle}
        subtitle={PageDescription}>
        <BadgesList className="mt-4">
          <BadgeLink href={siteConfig.url.contribute} target="_blank">
            <SecondaryBadge>
              <FontAwesomeIcon icon={faCodeBranch}/>
              Submit an Article
            </SecondaryBadge>
          </BadgeLink>
          <BadgeLink href="/signup">
            <PrimaryBadge>
              <FontAwesomeIcon icon={faEnvelope}/>
              Send me Updates
            </PrimaryBadge>
          </BadgeLink>
        </BadgesList>
      </PageHeader>
    </div>
    <div className="pt-5 pb-5 bg-light border-top">
      <div className="container">
        <div className="row">
          { roadmaps.map(roadmap => (
            <RowBlock
              key={ roadmap.url }
              title={ roadmap.title.replace(/roadmap|developer/i, '') }
              subtitle={ roadmap.featuredDescription || roadmap.description }
              url={ roadmap.url }
              disabled={ roadmap.upcoming }
              badge={ getBadgeText(roadmap) }
            />
          )) }

          {/*<IconRowBlock*/}
          {/*  url={ siteConfig.url.addRoadmap }*/}
          {/*  icon={ faPlus }*/}
          {/*  openExternal={true}*/}
          {/*  text="Submit a Roadmap"*/}
          {/*/>*/}
        </div>
      </div>
    </div>
    <PageFooter />
  </DefaultLayout>
);

export default RoadmapsList;
