import React from 'react';
import '../UI/Exercise.css';
import lunges from '../../assets/lunges.png';
import yoga from '../../assets/yoga-pose.png';
import extended from '../../assets/extended.png';

const Exercise = () => {
  return (
    <section>
      <div className="container exercise_container">
        <div className="exercise_top">
          <h2 className="section_title">
            Benefits of <span className="highlights">Exercise</span>
          </h2>
          <p>"Pain itself is something that must be avoided."</p>
        </div>

        {/* All exercises inside one box */}
        <div className="exercise_single_box">
          {/* Item 1 */}
          <div className="exercise_item">
            <span className="exercise_icon">
              <img src={lunges} alt="Lunges" />
            </span>
            <div className="exercise_content">
              <h4>Healthy Life</h4>
              <p>Helps maintain physical fitness and strength.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="exercise_item">
            <span className="exercise_icon">
              <img src={yoga} alt="Yoga" />
            </span>
            <div className="exercise_content">
              <h4>Increased Flexibility</h4>
              <p>Improves balance, posture, and mental clarity.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="exercise_item">
            <span className="exercise_icon">
              <img src={extended} alt="Extended" />
            </span>
            <div className="exercise_content">
              <h4>Reducing Blood Pressure</h4>
              <p>Regular physical activity helps relax blood vessels and improves circulation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercise;
