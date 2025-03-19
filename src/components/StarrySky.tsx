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

  randomRadius = () => Math.random() * 0.7 + 0.6;

  getRandomX = () => Math.floor(Math.random() * this.state.vw).toString();
  getRandomY = () => Math.floor(Math.random() * this.state.vh).toString();

  componentDidMount() {
    // Now that we're on the client, set the dimensions and the flag
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
    // Until mounted, render nothing (or a placeholder)
    if (!hasMounted) return null;

    return (
      <div id="starry-sky">
        <svg id="sky" className={styles.sky}>
          {[...Array(num)].map((_, y) => (
            <circle
              key={y}
              cx={this.getRandomX()}
              cy={this.getRandomY()}
              r={this.randomRadius()}
              stroke="none"
              strokeWidth="0"
              fill="red"
              className={`${styles.star} star`}
            />
          ))}
        </svg>
        <div id="shootingstars" className={styles.shootingstars}>
          {[...Array(60)].map((_, y) => (
            <div
              key={y}
              className={`${styles.wish} wish`}
              style={{
                left: `${this.getRandomY()}px`,
                top: `${this.getRandomX()}px`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
