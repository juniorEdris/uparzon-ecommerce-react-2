import React from 'react';
import { connect } from 'react-redux';
import FeatureSlider from '../Home/Component/Banner';
import SectionHeadingFour from '../PrimarySections/SectionUtils/SectionHeadingFour';
import CampaignCards from '../PrimarySections/SectionUtils/CampaignCards';
import './campaign.css';
import Features from '../Home/Component/Features';
import Skeleton from '@yisheng90/react-loading';

const Campaign = (props) => {
  const banners = [
    {
      id: 1,
      image: `./uparzonassets/uparzonimages/campaigncards/campaignbanner.png`,
      name: `campaign 1`,
    },
    {
      id: 2,
      image: `./uparzonassets/uparzonimages/campaigncards/campaignbanner.png`,
      name: `campaign 1`,
    },
  ];
  const campOne = [
    {
      id: 1,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp02.png`,
      name: `campaign 1`,
    },
    {
      id: 2,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp02.png`,
      name: `campaign 1`,
    },
    {
      id: 3,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp02.png`,
      name: `campaign 1`,
    },
    {
      id: 4,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp02.png`,
      name: `campaign 1`,
    },
    {
      id: 5,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp02.png`,
      name: `campaign 1`,
    },
    {
      id: 6,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp02.png`,
      name: `campaign 1`,
    },
    {
      id: 7,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp02.png`,
      name: `campaign 1`,
    },
    {
      id: 8,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp02.png`,
      name: `campaign 1`,
    },
  ];
  return (
    <div className="featured_brands">
      <FeatureSlider loading={props.loading} sliders={banners} demo />
      <SectionHeadingFour />
      <div className="container-md-fluid">
        {props.loading ? (
          <div className="campaign_card_wrapper row align-items-center">
            {Array(12)
              .fill()
              .map((card, i) => (
                <div
                  className="campaign_sigle_card col-6 col-md-3 mb-5"
                  key={i}>
                  <Skeleton key={i} height={'452px'} width={'100%'} />
                </div>
              ))}
          </div>
        ) : (
          <CampaignCards campaigns={campOne} />
        )}

        {/* <div className="primary-page-break"></div> */}
        <Features />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  sliders: state.HomeContent.homeSlider,
  campaigns: state.HomeContent.campaigns,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Campaign);
