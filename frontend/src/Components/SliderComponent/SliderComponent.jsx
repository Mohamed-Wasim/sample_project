import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../Img/img1.jpg";
import Image2 from "../../Img/img2.jpg";
import Image3 from "../../Img/img3.png";

function SliderComponent() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={Image1} alt="First slide" />
        <Carousel.Caption>
          <h5 style={{ color: "white" }}>First slide label</h5>
          <p style={{ color: "white" }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image2} alt="Second slide" />
        <Carousel.Caption>
          <h5 style={{ color: "white" }}>Second slide label</h5>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 dark-image"
          src={Image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: "white" }}>Third slide label</h5>
          <p style={{ color: "white" }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderComponent;
