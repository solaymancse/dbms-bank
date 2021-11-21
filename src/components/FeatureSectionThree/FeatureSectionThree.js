import { Parallax } from 'react-parallax';
import './FeatureSectionThree.css';
import Banner from '../images/family_1.jpg';

const FeatureSectionThree = () => (
    <Parallax className="image" bgImage={Banner} strength={800}>
       <div className="content">
           <div className="content-txt">
               <h1>Image 01</h1>
           </div>
       </div>
    </Parallax>
);

export default FeatureSectionThree;