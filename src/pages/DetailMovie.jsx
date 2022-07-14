import React, { Component } from "react";
import axios from "axios";

import { WithRouter } from "../utils/Navigation";
import Header from "../components/Header";

class DetailMovie extends Component {
  state = {
    detailMovie: {},
    loading: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    /*
    React -> process.env
    Vite -> import.meta.env
    */
    this.setState({ loading: true });
    const { movie_id } = this.props.params;
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        const { data } = response;
        this.setState({ detailMovie: data });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Header />
        <p>{this.state.detailMovie.title}</p>
      </div>
    );
  }
}

export default WithRouter(DetailMovie);
