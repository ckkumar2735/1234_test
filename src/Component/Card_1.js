import React, { useState } from 'react';
import img2 from "../Images/tutor_logo.png";
import img3 from "../Images/classes.png";
import img4 from "../Images/colleges.png";
import '../Styles/Card.css';

const Card = () => {
  const [button1Active, setButton1Active] = useState(true);
  const [button2Active, setButton2Active] = useState(true);
  const [button3Active, setButton3Active] = useState(true);

  const handleButtonClick = (buttonNumber) => {
    switch (buttonNumber) {
      case 1:
        setButton1Active(false);
        break;
      case 2:
        setButton2Active(false);
        break;
      case 3:
        setButton3Active(false);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
            <div className={`btn1 ${button1Active ? '' : 'disabled'}`} onClick={() => handleButtonClick(1)}>
              <img src={img2} alt="" className="img-fluid logo_1" />
              <p className='txt1'>CareerManiaa Partner</p>
            </div>
            <div className={`btn1 mt-4 ${button2Active ? '' : 'disabled'}`} onClick={() => handleButtonClick(2)}>
              <img src={img3} alt="" className="img-fluid logo_1 " />
              <p className='txt1'>Classes/Educators</p>
            </div>
            <div className={`btn1 my-4 ${button3Active ? '' : 'disabled'}`} onClick={() => handleButtonClick(3)}>
              <img src={img4} alt="" className="img-fluid logo_1 " />
              <p className='txt1'>Colleges/Institution</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
