import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HomeSlider from './Component/Banner';
import BannerSection from './Component/BannerSection';
import BannerSectionTwo from './Component/BannerSectionTwo';
import BannerSectionThree from './Component/BannerSectionThree';
import FeatureBrands from './Component/FeatureBrands';
import { Features } from './Component/Features';
import ExpenseCategories from './Component/ExpenseCategories';
import { OnlinePharma } from './Component/OnlinePharma';
import PopularProduct from './Component/PopularProduct';
import HealthCareBanners from './Component/HealthCareBanner';
import NecessaryProducts from './Component/NecessaryProducts';
import HealthArticle from './Component/HealthArticle';
import AppBanner from './Component/AppBanner';
import { GetHomeContents } from '../Redux/Action/HomeProductsAction';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import HompageCategories from './Component/HompageCategories';
import FeatureProducts from './Component/FeatureProducts';
import HalfBanners from './Component/HalfBanners';
import HeadPhoneRow from './Component/HeadPhoneRow';
import PhoneSections from './Component/PhoneSections';
import ComputerSections from './Component/ComputerSections';
import PCAccessories from './Component/PCAccessories';
import FullBanner from './Component/FullBanner';
import HomeAllProducts from './Component/HomeAllProducts';
import ListProductsSection from './Component/ListProductsSection';
import AutomobileMotors from './Component/AutomobileMotors';
import HealthBeauty from './Component/HealthBeauty';

const Index = (props) => {
  // console.log('====================================');
  // console.log(props.allProducts);
  // console.log('====================================');
  useEffect(() => {
    toTheTop();
    props.setCategoryID('');
  }, []);
  // products and tittles for List Components
  const listSection = {
    titles: {
      title_1:
        props.allProducts?.home_footer_cat_products_section_1 &&
        props.allProducts?.home_footer_cat_products_section_1[0]?.category,
      title_2:
        props.allProducts?.home_footer_cat_products_section_2 &&
        props.allProducts?.home_footer_cat_products_section_2[0]?.category,
      title_3:
        props.allProducts?.home_footer_cat_products_section_3 &&
        props.allProducts?.home_footer_cat_products_section_3[0]?.category,
    },
    products: {
      product_1: props.allProducts?.home_footer_cat_products_section_1,
      product_2: props.allProducts?.home_footer_cat_products_section_2,
      product_3: props.allProducts?.home_footer_cat_products_section_3,
    },
  };
  return (
    <div>
      <HomeSlider loading={props.loading} sliders={props.sliders} />
      <Features />
      <ExpenseCategories />
      <HompageCategories />
      {/* <OnlinePharma
        loginSuccessPageRedirectTo={props.loginSuccessPageRedirectTo}
      /> */}
      <FeatureProducts />
      <div className="container-md-fluid">
        <HalfBanners />
        <HeadPhoneRow />
        <PhoneSections />
        <ComputerSections />
        {/* <PCAccessories /> */}
        <AutomobileMotors />
        <HealthBeauty />
        <FullBanner />
        <HomeAllProducts />
        <FeatureBrands />
        {props.allProducts && (
          <ListProductsSection
            titles={listSection.titles}
            products={listSection.products}
            loading={props.loading}
          />
        )}
      </div>
      {/* <BannerSection />
      <PopularProduct />
      <HealthCareBanners />
      <BannerSectionTwo />
      <BannerSectionThree />
      <NecessaryProducts />
      <HealthArticle /> */}
      <AppBanner />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  sliders: state.HomeContent.homeSlider,
  allProducts: state.HomeContent.allProducts,
  // categoryProducts: state.HomeContent.categoryProducts,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
