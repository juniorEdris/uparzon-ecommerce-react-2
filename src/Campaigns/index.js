import React from 'react';
import { connect } from 'react-redux';
import FeatureSlider from '../Home/Component/Banner';
import SectionHeadingFour from '../PrimarySections/SectionUtils/SectionHeadingFour';
import CampaignCards from '../PrimarySections/SectionUtils/CampaignCards';
import './campaign.css';
import Features from '../Home/Component/Features';

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
  const camp = [
    {
      id: 1,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp01.png`,
      name: `campaign 1`,
    },
    {
      id: 2,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp01.png`,
      name: `campaign 1`,
    },
    {
      id: 3,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp01.png`,
      name: `campaign 1`,
    },
    {
      id: 4,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp01.png`,
      name: `campaign 1`,
    },
    {
      id: 5,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp01.png`,
      name: `campaign 1`,
    },
    {
      id: 6,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp01.png`,
      name: `campaign 1`,
    },
    {
      id: 7,
      photo: `./uparzonassets/uparzonimages/campaigncards/camp01.png`,
      name: `campaign 1`,
    },
  ];
  return (
    <div className="featured_brands">
      <FeatureSlider loading={props.loading} sliders={banners} demo />
      <SectionHeadingFour />
      <div className="container-md-fluid">
        <CampaignCards campaigns={camp} />
        <div className="primary-page-break"></div>
        <CampaignCards campaigns={camp} />
        <div className="primary-page-break"></div>
        <CampaignCards campaigns={camp} />
        <Features />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  sliders: state.HomeContent.homeSlider,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Campaign);
