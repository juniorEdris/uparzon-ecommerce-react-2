import { useEffect } from 'react';
import './policypage.css'
import {toTheTop} from '../../PrimarySections/SectionUtils/WindowTop';

const PurchasingPolicy = () => {
    useEffect(() => {
        toTheTop()
    }, [])
    return (
        <div className="purchasing_policy policy_wrapper">
            <div className="container mt-3">
        <h3 className="text-center mb-1">Purchasing Policy</h3>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eum placeat assumenda sint officiis quae reiciendis non aut ab architecto asperiores dolor obcaecati, error recusandae quia veritatis ex, iusto optio corrupti consequuntur temporibus tenetur. Culpa ipsum necessitatibus magnam dolorem eveniet quod blanditiis, id commodi numquam velit, hic animi earum est dicta possimus voluptas repellendus magni? Incidunt error ut necessitatibus voluptatem, magnam aspernatur eos inventore dicta, recusandae praesentium ab quibusdam atque molestiae commodi sunt aliquid? Voluptatem, nemo tenetur? Ad, dolorem perspiciatis. Fugiat dolores eaque, non incidunt repellat laudantium? Quasi quam dolore iste iusto nemo veniam, libero velit placeat consequatur qui voluptas nobis. Nostrum quo facere quos asperiores ipsam atque incidunt? Illum rem temporibus placeat animi, nihil iure eveniet molestias nam est! Praesentium accusantium cupiditate inventore voluptas, beatae quam accusamus dolore blanditiis dolorum sit! Aliquam, praesentium architecto! Modi repellendus consectetur unde ad provident error quod, alias quia, consequuntur commodi est natus aliquid illum mollitia, recusandae numquam quae animi. Error, cum porro? Possimus mollitia aliquam optio iste sint suscipit impedit hic alias, officia accusamus ullam, veritatis minus tempora quo laborum quis, voluptatibus excepturi quaerat vel sed perspiciatis facilis! Nobis nulla sunt maiores dolorum pariatur adipisci iusto. Ab, veritatis error excepturi nisi id minus!
        </p>
        
      </div>
        </div>
     );
}
 
export default PurchasingPolicy;