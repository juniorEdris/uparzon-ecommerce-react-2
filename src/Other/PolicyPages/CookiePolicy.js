import { useEffect } from 'react';
import { toTheTop } from '../../PrimarySections/SectionUtils/WindowTop';
import './policypage.css'

const CookiePolicy = () => {
    useEffect(() => {
        toTheTop()
    }, [])
    return (
        <div className="cookie_policy policy_wrapper">
            <div className="container mt-3">
        <h3 className="text-center mb-1">Cookie Policy</h3>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ab obcaecati ducimus consequatur itaque, veniam sapiente ratione expedita impedit exercitationem fugit amet est unde reprehenderit dignissimos eaque aspernatur animi aliquam assumenda eligendi qui corrupti deserunt non molestias. Accusamus, exercitationem. Doloremque, labore culpa quis nulla alias adipisci corrupti quas quasi quos ipsa omnis sint consequatur similique deleniti dolorem possimus ad distinctio non veniam reprehenderit accusamus maiores magni. Deserunt iure aperiam expedita ipsam recusandae minus reprehenderit error eveniet suscipit illo unde tempora animi sed officia nulla, laudantium inventore vero magni architecto! Velit corporis unde repellat modi doloremque facere vero ipsam soluta voluptate mollitia magnam sint minima dolorum fugit officiis deleniti quod voluptatum consequuntur distinctio, enim eius! Laboriosam at animi omnis assumenda sint? Magnam explicabo quaerat molestiae quis omnis excepturi obcaecati blanditiis eveniet possimus et. Libero dolore recusandae repellat natus a non nihil adipisci perferendis eligendi. Dolorem nihil pariatur suscipit non, illum recusandae.
                </p>
                <br />
                <br />
                <br />
                <p>
                
                </p>

            </div>
        </div>
     );
}
 
export default CookiePolicy;