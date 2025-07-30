import React from 'react';
import './Pricing.css';

const cardData = [
  {
    title: 'Regular Member',
    price: '$50',
    topBorder: '#00aaff',
    priceColor: '#00aaff',
  },
  {
    title: 'Premium Member',
    price: '$70',
    topBorder: '#6C5CE7',
    priceColor: '#6C5CE7',
  },
  {
    title: 'Standard Member',
    price: '$100',
    topBorder: '#00997a',
    priceColor: '#00997a',
  },
];

const Pricing = () => {
  return (
    <section className="pricing_section">
      <div className="container">
        <div className="pricing_top">
          <h2 className="section_title">
            Gym <span className="highlight">Pricing</span> Plan
          </h2>
          <p>
            Let love be pursued with a desire for pleasure.
            <br />
            Let all the harsher things of pleasure be in reason.
          </p>
        </div>

        <div className="pricing_wrapper">
          {cardData.map((card, index) => (
            <div
              className="pricing_card"
              key={index}
              style={{ borderTop: `6px solid ${card.topBorder}` }}
            >
              <div className="card_body">
                <h3>{card.title}</h3>
                <h2>
                  <span className="price" style={{ color: card.priceColor }}>
                    {card.price}
                  </span>
                  <span className="month"> /Month</span>
                </h2>

                <hr />
                <ul className="features_list">
                  <li>Unlimited access to the gym</li>
                  <li>Customer support</li>
                  <li>Personal trainer</li>
                  <li>Standard options</li>
                  <li>5 classes per week</li>
                </ul>
                <button className="join_btn">Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
