import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  // centerMode: true,
  rows:1,
  variableWidth: true,

};

export default function Carousel() {
  return (
    <Slider {...settings}>

     <div className="n-slide n-1">
        <div className="top-section">
          <img src="bell_2.svg" alt="bell" />
          <button className="small-btn">Save</button>
        </div>
        <div className="bottom-section">
          <p>We’ll be sending notifications to you here</p>
          <input type="text" value="hello@gmail.com" />
        </div>
      </div>
      <div className="n-slide n-2">
        <div className="top-section">
          <img src="bar_chart.svg" alt="bell" />
          <input type="checkbox" checked onChange={() => { }} />
        </div>
        <div className="bottom-section">
          <p>Notify me when any wallets move more than</p>
          <select>
            <option value="1">$1,000.00</option>
            <option value="2">$2,000.00</option>
            <option value="3">$3,000.00</option>
          </select>
        </div>
      </div>
      <div className="n-slide n-3">
        <div className="top-section">
          <img src="clock.svg" alt="bell" />
          <input type="checkbox" checked onChange={() => { }} />
        </div>
        <div className="bottom-section">
          <p>
            Notify me when any
            <br />
            wallet dormant for
          </p>
          <select>
            <option value="1">&gt; 30 days</option>
            <option value="1">&gt; 60 days</option>
            <option value="1">&gt; 90 days</option>
          </select>
          <p>becomes active</p>
        </div>
      </div> 
    </Slider>
  );
}
