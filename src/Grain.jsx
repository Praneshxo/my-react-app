// src/NoiseBackground.js

import React, { useEffect } from 'react';
import { Noise } from 'noisejs';

const Grain = () => {
  useEffect(() => {
    // Create a new instance of the noise generator
    const noise = new Noise(Math.random());

    // Get the window dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create a canvas element for the grainy effect
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    // Append the canvas to the body or your app container
    document.body.appendChild(canvas);

    // Generate the noise pattern
    const grainEffect = () => {
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          // Generate a Perlin noise value between -1 and 1
          const value = noise.perlin2(x / 100, y / 100);

          // Map the value to grayscale color (0-255)
          const colorValue = Math.floor((value + 1) * 128);

          // Set the pixel color to the computed grayscale value
          ctx.fillStyle = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    };

    // Draw the grain effect continuously
    grainEffect();

    // Optional: Adjust the canvas periodically to get a dynamic grain effect
    const interval = setInterval(grainEffect, 100); // Redraw every 100ms

    // Cleanup: Remove canvas on component unmount
    return () => {
      clearInterval(interval);
      document.body.removeChild(canvas);
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default Grain;
