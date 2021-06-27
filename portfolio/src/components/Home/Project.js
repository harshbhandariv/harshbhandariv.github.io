import React, { useState, useEffect } from 'react';
import { project } from '../../assets/config';
import '../../scss/project.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
export default function Project() {
  const [projects, setProjects] = useState([]);
  useEffect(function () {
    fetch(`https://api.github.com/users/${project.gitHubUsername}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(
          data.filter((repo) => project.repos.includes(repo.name)).reverse()
        );
      });
  }, []);
  return (
    <div className="Project" id="projects">
      <h1>Projects</h1>
      <div className="project-card-container">
        {projects.map((project) => {
          return (
            <div key={project.id} className="project-card">
              <h2 className="project-name">{project.name}</h2>
              <div className="project-description">{project.description}</div>
              <div className="project-language">
                Language: {project.language}
              </div>
              <div className="links">
                <div className="link-github">
                  <a href={project.html_url}>
                    <GitHubIcon style={{ color: 'black' }} />
                  </a>
                </div>
                {project.homepage && (
                  <div className="link-deployment">
                    <a href={project.homepage}>
                      <LinkIcon style={{ color: 'black' }} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
