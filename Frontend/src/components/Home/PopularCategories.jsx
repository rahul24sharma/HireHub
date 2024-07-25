import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import React from "react"

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Creative Design",
      subTitle: "415 Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "App Development",
      subTitle: "230 Open Positions",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Web Interface Design",
      subTitle: "570 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Postions",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Financial Services",
      subTitle: "350 Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "736 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Animation & Motion Graphics",
      subTitle: "150 Open Positions",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Interactive Gaming",
      subTitle: "280 Open Positions",
      icon: <IoGameController />,
    },
  ];
  return (
    <div className="categories">
      <h3>POPULAR CATEGORIES</h3>
      <div className="banner">
        {categories.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="text">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;