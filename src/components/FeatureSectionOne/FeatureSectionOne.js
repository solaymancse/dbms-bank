import { Parallax } from 'react-parallax';
import './FeatureSectionOne.css';
import Banner from '../images/features-banner-4.jpg';


const FeatureSectionOne = () => (
    <Parallax className="image" bgImage={Banner} strength={800}>
       <div className="content">
           <div className="content-txt">
               <h1>Image 01</h1>
           </div>
       </div>
    </Parallax>
     
);

export default FeatureSectionOne;