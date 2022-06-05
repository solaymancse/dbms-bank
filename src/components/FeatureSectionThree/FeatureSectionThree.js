import { Wrapper,Left ,H1,Desc,Right,Img,Title} from './FeatureSectionThreeElements'
import img from '../../Assets/app.png'
import linkimg from '../../Assets/store.png'

const FeatureSectionThree = () => (
    <Wrapper>
        <Left>
            <Title>DBMS BANK MOBILE APP</Title>
            <H1>Stay connected, enjoy<br/> peace of mind</H1>
            <Desc>Download the DBMS Bank app and simplify your banking. Discover<br/> quick, simple and convenient way to take command of your bank<br/> account, on your mobile phone.</Desc>
            <img src={linkimg} alt="/"/>
        </Left>
        <Right>
            <Img src={img} alt="/"/>
        </Right>
    
    </Wrapper>
);

export default FeatureSectionThree;