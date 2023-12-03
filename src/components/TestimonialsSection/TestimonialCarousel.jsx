import Draggable from "../../common/Draggable";

function Carousel() {
  return (
    <Draggable>
      <div className="t-slides">
        <div className="t-slide ">
          <div className="top-section">
            Jack F<span>Ex Blackrock PM</span>
          </div>
          <p>
            “Love how Loch integrates portfolio analytics and whale watching
            into one unified app.”
          </p>
        </div>
        <div className="t-slide ">
          <div className="top-section">
            Yash P<span>Research, 3poch Crypto Hedge Fund</span>
          </div>
          <p>
            “I use Loch everyday now. I don't think I could analyze crypto whale
            trends markets without it. I'm addicted!”
          </p>
        </div>
        <div className="t-slide t-3">
          <div className="top-section">
            Shiv S<span>Co-Founder Magik Labs</span>
          </div>
          <p>
            “Managing my own portfolio is helpful and well designed. What’s
            really interesting is watching the whales though. No one else has
            made whale tracking so simple.”
          </p>
        </div>
        <div className="t-slide" />
      </div>
    </Draggable>
  );
}

export default Carousel;
