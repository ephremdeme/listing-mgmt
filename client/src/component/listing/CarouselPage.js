import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import style from '../custom.module.css';

const CarouselPage = (props) => {
  var i = 0;
  return (
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1">
      <MDBCarouselInner>
        {i = 1}
        {props.images.map(img=>(
          <ImgItem full={props.full} key={img.id} img={img} itemId ={i++} />
        ))}
        </MDBCarouselInner>
    </MDBCarousel>
  );
}

const ImgItem = (props)=>{
  return(
    <MDBCarouselItem itemId={props.itemId}>
          <MDBView>
            <img
              className={!props.full ? style.cardimage + " d-block w-100" : style.cardimagefull +  " d-block w-100" }
              src={"/uploads/" + props.img.name}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>
    </MDBCarouselItem>
      
  )
}

export default CarouselPage;