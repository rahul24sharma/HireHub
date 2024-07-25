import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import React from "react"

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,54,948",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "76,925",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,09,967",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,90,464",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h4>
              Discover career opportunities that align with your expertise and
              passions.
            </h4>
            <p>
              We provide a platform tailored to match your unique skills and
              interests with the perfect job roles. Whether you're seeking to
              advance in your current field or explore new professional avenues,
              our service connects you with employers who value your talents and
              aspirations. Start your journey towards a fulfilling career today.
            </p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
