import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AllProducts from '../PrimarySections/AllProdPage/AllProducts';
import { useQuery } from '../PrimarySections/Utility';
import {
  GetCampaignResults,
  getCampaignSortedProducts,
} from '../Redux/Action/CampaignProductsAction';

const CampaignProducts = (props) => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const query = useQuery();
  const id = query.get('campaign-id');
  useEffect(() => {
    props.getProducts({ page, id });
  }, [page, id]);
  // useEffect(() => {
  //   props.getSortedProducts({ sortingType: sort });
  // }, [sort]);
  return (
    <div className="campaign_products_wrapper">
      <AllProducts
        categories={props.categories}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        page={page}
        setPage={setPage}
        loading={props.loading}
        products={props.products}
        pages={props.pages}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.HomeContent.categories,
  loading: state.CampaignProducts.loading,
  products: state.CampaignProducts.campaignProducts,
  pages: state.CampaignProducts.campaignPages,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (data) => dispatch(GetCampaignResults(data)),
  getSortedProducts: (data) => dispatch(getCampaignSortedProducts(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignProducts);
