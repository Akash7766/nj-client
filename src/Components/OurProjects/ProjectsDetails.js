import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ProjectsDetails = () => {
  const { projectId } = useParams();
  const [load, setLoad] = useState(true);
  const {
    data: project,
    error,
    isError,
    isLoading,
    refetch,
  } = useQuery("project", async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/project/${projectId}`
    );

    setLoad(false);
    return data;
  });
  if (load) {
    return <Spinner />;
  }

  console.log(project);

  return (
    <div className="container">
      <article class="uk-article uk-article-details">
        <div class="uk-article-content">
          <div class="uk-article-content-inner">
            <div class="uk-width-large-5-6 uk-width-xlarge-4-6 uk-container-center uk-padding-bottom">
              <h1 class="uk-article-title">{project?.data?.title}</h1>
              <p class="uk-article-introtext"></p>
              <p class="uk-article-dropcaps">{project?.data?.dec}</p>
            </div>
            <div class="uk-text-center uk-width-xlarge-5-6 uk-container-center">
              <img src={project?.data?.img} alt="" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectsDetails;
