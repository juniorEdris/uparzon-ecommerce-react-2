import './campaign_card.css';
import { Link } from 'react-router-dom';
const CampaignCards = (props) => {
  return (
    <div className="campaign_card_wrapper row align-items-center">
      {props.campaigns.map((card) => (
        <div className="campaign_sigle_card col-6 col-md-3 mb-5" key={card.id}>
          {/* <div className="campaign_name text-center">
            <span>{card.name}</span>
          </div> */}
          <div className="campaign_image">
            <Link to={`/campaign-products?campaign-id=${card.id}`}>
              {/* <img src={`https://${card.photo}`} alt={card.name} /> */}
              <img src={`${card.photo}`} alt={card.name} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampaignCards;
