import NotificationCarousel from './NotificationCarousel';

const NotificationSection = () => (
  <section className="notification-section">
    <div className="left-sec">
      <img src="/bell.svg" alt="bell" />
      <h1 className="section-title has-text-shadow">
        Get notified when a highly correlated whale makes a move
      </h1>
      <p className="section-subtitle">
        Find out when a certain whale moves more than any preset amount on-chain
        or when a dormant whale you care about becomes active.
      </p>
    </div>
    <div className='right-sec'>
      <NotificationCarousel />
    </div>

  </section>
);

export default NotificationSection;
