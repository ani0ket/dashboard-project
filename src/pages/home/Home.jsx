import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  const boxesData = [
    { title: "Introducing", text: "How's it going?" },
    { title: "Welcome", text: "Hello there!" },
    { title: "Greetings", text: "Nice to meet you!" },
    { title: "Hey!", text: "What's up?" },
  ];

  const heroImage =
    "https://images.unsplash.com/photo-1504208020-6f1c2f8d6997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaW85fHwxNXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80";

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="content">
          <div className="hero-section">
            <img src={heroImage} alt="Hero Image" className="hero-image" />
            <div className="hero-text-container">
              <h1>Welcome to InnovateHub!</h1>
              <p>
                {/* Add a concise and engaging description of your website or services here */}
              </p>
            </div>
          </div>
          <div className="boxes">
            {boxesData.map((box, index) => (
              <div className="box" key={index}>
                <h2>{box.title}</h2>
                <p>{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
