import React, {useState} from "react";
import './landing.css';
import Carousel from 'react-bootstrap/Carousel';
import { Redirect } from 'react-router-dom';

const ResponsiveCarousel = () => {

  const [index, setIndex] = useState(0);

  const [redirect, setRedirect] = useState(false)
  
  const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex)
  }

  const handleClick = e => {
      setRedirect(true)
  }
  if (redirect) {
    return <Redirect to='/register' />      
  }

  return (
      <div className="container-fluid">
        <div className="row">
        <div className="col">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>

            <div className="img"> 
              <img
                className="img d-block w-100"
                src="https://www.geeky-gadgets.com/wp-content/uploads/2020/08/Mulan-2020.jpg"
                alt="First slide"
                />
              </div>
            <Carousel.Caption>   
              <button onClick={handleClick} className="btn btn-md btn-success" id="button">Book Now!</button>
            </Carousel.Caption>
          </Carousel.Item>
            <Carousel.Item>
              
          <div className="img">
            <img
              className="img d-block w-100"
              src="https://lumiere-a.akamaihd.net/v1/images/moviepage_artemisfowl_mobile_5de44cce.jpeg?region=0,0,640,349"
              alt="Third slide"
            />
            </div>
          <Carousel.Caption>          
            <button onClick={handleClick} className="btn btn-md btn-success" id="button">Book Now!</button>
          </Carousel.Caption>
        </Carousel.Item>
          
          <Carousel.Item>              
          <div className="img">
          <img
            className="img d-block w-100"
            src="https://cdn.mos.cms.futurecdn.net/bTGNuxijMLKLoSJfwnzBBY-1200-80.jpg"
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>            
          <button onClick={handleClick} className="btn btn-md " id="button">Book Now!</button>
        </Carousel.Caption>
          </Carousel.Item>
            
            <Carousel.Item>
              
          <div className="img">  
          <img
            className="img d-block w-100"
            src="https://thehoneypop.com/wp-content/uploads/2020/06/Untitled-design-22.png"
            alt="Third slide"
          />
          </div>  
        <Carousel.Caption>            
          <button onClick={handleClick} className="btn btn-md btn-success" id="button">Book Now!</button>
        </Carousel.Caption>
          </Carousel.Item>

            <Carousel.Item>
          <div className="img">
          <img
            className="img d-block w-100"
            src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/06/Hamilton-_-Streaming-Exclusively-July-3-_-Disney-0-54-screenshot.png"
            alt="Third slide"
          />
          </div>
        <Carousel.Caption>              
          <button onClick={handleClick} className="btn btn-md btn-success" id="button">Book Now!</button>
        </Carousel.Caption>
      </Carousel.Item>
          
            
            <Carousel.Item>
              <div className="img">
          <img
            className="img d-block w-100"
            src="https://www.joblo.com/assets/images/joblo/news/2020/01/Ryan-Reynolds-Chris-Evans-North-Americas-Asses-fb.jpg"
            alt="Third slide"
          />
          </div>
          <Carousel.Caption>              
            <button onClick={handleClick} className="btn btn-md btn-success" id="button">Book Now!</button>
          </Carousel.Caption>
              </Carousel.Item>
            
            <Carousel.Item>
              <div className="img">
          <img
            className="img d-block w-100"
            src="https://movies.universalpictures.com/media/dolittle-universal-1080x793-5e1cc7ac93aa5-1.jpg"
            alt="Third slide"
          />
          </div>
          <Carousel.Caption>                
            <button onClick={handleClick} className="btn btn-md btn-success" id="button">Book Now!</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  </div>
       
       
    );
}

export default ResponsiveCarousel;
