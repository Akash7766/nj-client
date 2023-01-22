import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import Footer from "../../Shared/Footer/Footer";

const Project = () => {
  const {
    data: projects,
    error,
    isError,
    isLoading,
    refetch,
  } = useQuery("projects", async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/project");
    return data;
  });
  return (
    <div id="tm-wrapper">
      <div class="uk-container uk-container-center tm-main-content">
        <div
          id="tm-middle"
          class="tm-middle uk-grid"
          data-uk-grid-match
          data-uk-grid-margin
        >
          <div class="uk-width-1-1">
            <main id="tm-content" class="tm-">
              <div
                className="tm-blob-column-2 uk-grid-width-1-1 uk-grid-width-small-1-1 uk-grid-width-medium-1-2 uk-grid-width-xlarge-1-3"
                data-uk-grid="{gutter: 25}"
              >
                {projects?.data?.map((project) => (
                  <div className="card m- p-1 col">
                    <article className="uk-article uk-article-list">
                      <a className="uk-display-block uk-text-center" href="#">
                        <img
                          style={{ width: "450px", height: "300px" }}
                          alt=""
                          src={`${project.img}`}
                        />
                      </a>

                      <p className="uk-article-meta">
                        <time datetime="2016-03-11">{project.date}</time>
                      </p>

                      <h2 className="uk-article-title">
                        <a className="uk-display-block">{project.title}</a>
                      </h2>

                      <p> {project?.dec?.slice(0, 170)}</p>

                      <Link
                        to={`/project/${project._id}`}
                        className="tm-animate-button "
                      >
                        <span>Read More</span>
                      </Link>
                      <div className="uk-text-center uk-margin-bottom">
                        <ul className="uk-article-navbar">
                          <li className="uk-social-button">
                            <a href="#">
                              <span className="uk-icon-instagram"></span>
                            </a>
                          </li>
                          <li className="uk-social-button">
                            <a href="#">
                              <span className="uk-icon-github"></span>
                            </a>
                          </li>
                          <li className="uk-social-button">
                            <a href="#">
                              <span className="uk-icon-linkedin"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                ))}
                {isLoading && <Spinner value="projects" />}
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
