import React,{useState} from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { Button } from './ScrollBtnElements';


export const ScrollBtn = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };

      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
      window.addEventListener('scroll', toggleVisible);
  return (
    
          <Button>
     <BsArrowUpCircleFill onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>




  )
}
