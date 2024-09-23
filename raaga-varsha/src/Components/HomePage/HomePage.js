// src/Components/HomePage.js
import React from 'react';
import './HomePage.css'; // Assuming you have a CSS file for styling

function HomePage() {
  return (
    <div>
      <header>
        <h1>Welcome to Harmony Music School</h1>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>About Us</h2>
        <p>Harmony Music School offers a variety of music courses for all ages and skill levels. Our experienced instructors are passionate about helping you achieve your musical goals.</p>
      </section>

      <section id="courses">
        <h2>Our Courses</h2>
        <ul>
          <li>Beginner Guitar</li>
          <li>Intermediate Piano</li>
          <li>Advanced Violin</li>
          <li>Vocal Training</li>
          <li>Music Theory</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: info@harmonymusicschool.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Music Lane, Melody City, CA 12345</p>
      </section>

      <footer>
        <p>&copy; 2023 Harmony Music School. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;