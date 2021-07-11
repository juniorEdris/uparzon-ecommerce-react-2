import { useState } from 'react';
import PopUpTwo from '../../../PrimarySections/SectionUtils/PopUpTwo';
import SpinLoader from '../../../PrimarySections/SectionUtils/SpinLoader';
import {API, ENDPOINTS} from '../../../PrimarySections/Utility/API_Links';
const CashBack = (props) => {
  /*
    serverRCAdjustedPrice
    setServerRCAdjustedPrice
  */
 const [rewardPopUp, setRewardPopUp] = useState(false);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState({success:'',error:''});
  const getRewardCash = e => {
    setLoading(true)
    API().post(`${ENDPOINTS.GET_REWARD_CASH}`).then(res => {
      console.log('cb', res);
      if (res.data.status) {
        props.setServerRCAdjustedPrice(res.data.reward_cashback)
        setRewardPopUp(true)
        setLoading(false)
        setError({success:'Cash Reward success!'})
      } else {
        setLoading(false)
        setError({error:'Cash Reward failed!'})
      }
    }
    ).catch(err => {
      console.log(err);
    })
  }
  const rewardCashSubmit = e => {
        if (props.adjusted_amount > props.serverRCAdjustedPrice) {
            props.setFinalRewardCash(0)
        } else {
            props.setFinalRewardCash(props.serverRCAdjustedPrice)
        }
  }
  const closeRewardPopUp = e => {
    setRewardPopUp(false)
  }
    return (
      <div className="cashback_wrapper">
        {loading && <SpinLoader/>}
        {rewardPopUp && <PopUpTwo access={rewardCashSubmit} response={props.serverRCAdjustedPrice} close={closeRewardPopUp}/>}
            <div className="col p-0">
          <button type='button' className='btn col' onClick={getRewardCash}>Adjust Reward Cashback</button>
            </div>
            <div className="cashback_text">
                <p className='m-0 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="33.954" height="31.832" viewBox="0 0 33.954 31.832">
  <g id="coins" transform="translate(0 -16)">
    <g id="Group_67075" data-name="Group 67075" transform="translate(10.611 16)">
      <g id="Group_67074" data-name="Group 67074" transform="translate(0 0)">
        <path id="Path_21214" data-name="Path 21214" d="M171.672,16C166.014,16,160,17.859,160,21.305v4.244a1.061,1.061,0,1,0,2.122,0V24.444c2.252,1.42,5.969,2.167,9.549,2.167s7.3-.747,9.549-2.167v1.106c0,1.038-2.61,2.693-7.516,3.1a1.061,1.061,0,0,0,.087,2.118c.032,0,.059,0,.091,0a17,17,0,0,0,7.338-2.107v1.135c0,.906-1.923,2.209-5.49,2.839a1.061,1.061,0,0,0,.183,2.105.927.927,0,0,0,.187-.017,14.174,14.174,0,0,0,5.121-1.791v1.108c0,.906-1.923,2.209-5.49,2.839a1.061,1.061,0,0,0,.182,2.105.927.927,0,0,0,.187-.017,14.214,14.214,0,0,0,5.121-1.791v1.108c0,.906-1.923,2.209-5.49,2.839a1.061,1.061,0,0,0,.182,2.105.927.927,0,0,0,.187-.017,14.214,14.214,0,0,0,5.121-1.791v1.108c0,1.038-2.61,2.693-7.516,3.1a1.061,1.061,0,0,0,.087,2.118c.032,0,.059,0,.091,0,4.709-.395,9.46-2.158,9.46-5.216V21.305C183.343,17.859,177.329,16,171.672,16Zm0,8.488c-5.829,0-9.549-1.887-9.549-3.183s3.72-3.183,9.549-3.183,9.549,1.887,9.549,3.183S177.5,24.488,171.672,24.488Z" transform="translate(-160 -16)" fill="#15a6b1"/>
      </g>
    </g>
    <g id="Group_67077" data-name="Group 67077" transform="translate(0 28.733)">
      <g id="Group_67076" data-name="Group 67076">
        <path id="Path_21215" data-name="Path 21215" d="M11.672,208C6.014,208,0,209.859,0,213.305v8.488c0,3.446,6.014,5.305,11.672,5.305s11.672-1.859,11.672-5.305v-8.488C23.343,209.859,17.329,208,11.672,208Zm9.549,13.794c0,1.3-3.72,3.183-9.549,3.183s-9.549-1.887-9.549-3.183v-1.106c2.252,1.42,5.969,2.167,9.549,2.167s7.3-.747,9.549-2.167Zm0-4.244c0,1.3-3.72,3.183-9.549,3.183s-9.549-1.887-9.549-3.183v-1.106c2.252,1.42,5.969,2.167,9.549,2.167s7.3-.747,9.549-2.167Zm-9.549-1.061c-5.829,0-9.549-1.887-9.549-3.183s3.72-3.183,9.549-3.183,9.549,1.887,9.549,3.183S17.5,216.488,11.672,216.488Z" transform="translate(0 -208)" fill="#15a6b1"/>
      </g>
    </g>
  </g>
                    </svg>{' '}

                    Cashback {props.cashBack || 0} Taka
                </p>
        </div>
        {error.error && (
          <div className="error-handler text-center">
            <small>{error}</small>
          </div>
        ) }
        </div>
     );
}
 
export default CashBack;