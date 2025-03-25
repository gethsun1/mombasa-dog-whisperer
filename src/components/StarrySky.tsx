"use client";

import React from "react";
import anime from "animejs";
import styles from "./StarrySky.module.css";

export default class StarrySky extends React.Component {
  state = {
    num: 60,
    vw: 0,
    vh: 0,
    hasMounted: false,
  };

  // Animate the dog paw "stars"
  starryNight = () => {
    anime({
      targets: ['#sky .star'],
      opacity: [
        { duration: 700, value: '0' },
        { duration: 700, value: '1' }
      ],
      easing: 'linear',
      loop: true,
      delay: (el, i) => 50 * i,
    });
  };

  // Animate the shooting stars (unchanged)
  shootingStars = () => {
    anime({
      targets: ['#shootingstars .wish'],
      easing: 'linear',
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [{ duration: 700, value: '1' }],
      width: [
        { value: '150px' },
        { value: '0px' }
      ],
      translateX: 350,
    });
  };

  // Return a random font size between 10px and 20px for the paw
  randomSize = () => Math.floor(Math.random() * 10 + 10);

  // Return random positions based on viewport dimensions
  getRandomX = () => Math.floor(Math.random() * this.state.vw).toString();
  getRandomY = () => Math.floor(Math.random() * this.state.vh).toString();

  componentDidMount() {
    // Set viewport dimensions on the client
    this.setState({
      vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      hasMounted: true,
    }, () => {
      this.starryNight();
      this.shootingStars();
    });
  }

  render() {
    const { num, hasMounted } = this.state;
    if (!hasMounted) return null;

    return (
      <div id="starry-sky">
        <svg id="sky" className={styles.sky}>
          {[...Array(num)].map((_, y) => (
            <text
              key={y}
              x={this.getRandomX()}
              y={this.getRandomY()}
              fontSize={this.randomSize()}
              fill="red"
              className={`${styles.star} star`}
            >
              🐾
            </text>
          ))}
        </svg>
        <div id="shootingstars" className={styles.shootingstars}>
          {[...Array(60)].map((_, y) => (
            <div
              key={y}
              className={`${styles.wish} wish`}
              style={{
                
                left: `${this.getRandomX()}px`,
                top: `${this.getRandomY()}px`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
