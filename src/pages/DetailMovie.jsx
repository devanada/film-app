import React, { useState, useEffect } from "react";
import axios from "axios";

import { WithRouter } from "../utils/Navigation";
import Header from "../components/Header";

const DetailMovie = (props) => {
  const [detailMovie, setDetailMovie] = useState({});
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    /*
    React -> process.env
    Vite -> import.meta.env
    */
    setLoading(true);
    const { movie_id } = props.params;
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
      )
      .then((response) => {
        const { data } = response;
        setDetailMovie(data);
        setVideos(data.videos.results);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <p>{detailMovie.title}</p>
      {videos.map((video) => (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
};

export default WithRouter(DetailMovie);
