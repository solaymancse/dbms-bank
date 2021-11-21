import { Parallax } from 'react-parallax';
import './FeatureSectionTwo.css';
import Banner from '../images/features-banner-2.jpg';

const FeatureSectionTwo = () => (
    <Parallax className="image" bgImage={Banner} strength={800}>
       <div className="content">
           <div className="content-txt">
               <h1>Image 02</h1>
           </div>
       </div>
    </Parallax>
);

export default FeatureSectionTwo;