import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/1668362198450.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Joile Junior" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1UcZSBuhA9QVS3xU4yUmP4wqwp4zm0EJL/view?usp=sharing" className="btn" target="_blank">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
