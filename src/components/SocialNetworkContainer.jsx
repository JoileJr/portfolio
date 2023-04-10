import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { href: "https://www.linkedin.com/in/jo%C3%ADle-j%C3%BAnior-36607b1b7/",name: "linkedin", icon: <FaLinkedinIn /> },
  { href: "https://github.com/JoileJr",name: "github", icon: <FaGithub /> },
  { href: "https://www.instagram.com/joile_jr/?igshid=ZDdkNTZiNTM%3D",name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.href} className="social-btn" id={network.name} key={network.name} target="_blank">
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
