import {
  DiJava,
  DiJsBadge,
  DiAngularSimple,
  DiMysql,
  DiReact,
} from "react-icons/di";

import { SiSpringboot } from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "angular", name: "Angular CLI", icon: <DiAngularSimple /> },
  { id: "java", name: "Java", icon: <DiJava /> },
  { id: "springboot", name: "Spring Boot", icon: <SiSpringboot /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
