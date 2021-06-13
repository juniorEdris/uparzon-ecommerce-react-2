import './campaign_card.css';
const CampaignCards = (props) => {
  return (
    <div className="campaign_card_wrapper row align-items-center">
      {props.campaigns.map((card) => (
        <div className="campaign_sigle_card col-6 col-md-3 mb-5" key={card.id}>
          <div className="campaign_image">
            <img src={card.photo} alt="campaign card" />
          </div>
          {/* <div className="campaign_name text-center">
            <span>{card.name}</span>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default CampaignCards;
