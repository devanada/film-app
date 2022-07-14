import React, { Component } from "react";
import axios from "axios";

// import from export default
// import Card from "../components/Card";
// import from named export
import Card from "../components/Card";
import Header from "../components/Header";
import { WithRouter } from "../utils/Navigation";

class HomePage extends Component {
  // constructor
  state = {
    title: "-",
    content: "This is the home page",
    page: 1,
    movies: [],
    information: {},
    loading: false,
  };
  /*
  1. asynchronous, artinya dia tidak bisa langsung dipakai
  2. ketika value dirubah, maka dia melakukan re-rendering
  3. selain dibaca, sebuah state bisa dirubah value-nya
  */

  // side effect
  async componentDidMount() {
    await this.fetchData();
    // this.state.movies.map((movie) => {
    //   console.log(movie.title);
    // });
  }

  // ini fungsi yang dijalankan ketika component dimuat
  // Konsumsi API menggunakan Axios
  async fetchData(page) {
    this.setState({ loading: true });
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        const { results } = response.data;
        if (results) {
          this.setState({ movies: results });
        }
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  // Konsumsi API menggunakan Fetch API
  async fetchData2() {
    this.setState({ loading: true });
    var config = {
      method: "get",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      headers: {
        "Content-Type": "application/json", // ngasih info ke BE nya bahwa data yang dikirimkan adalah JSON
      },
    };
    axios(config)
      .then((response) => {
        const { results } = response.data;
        console.log(results);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
    // await fetch(
    //   `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     alert(error.toString());
    //   })
    //   .finally(() => this.setState({ loading: false }));
  }

  handleScroll = (e) => {
    let element = e.target;
    const bottom =
      element.scrollHeight - element.scrollTop === element.clientHeight;
    if (bottom) {
      this.fetchData(this.state.page + 1);
    }
  };

  render() {
    return (
      <div
        className="w-full h-screen overflow-auto"
        onScroll={this.handleScroll}
      >
        <Header />
        <p>{this.state.content}</p>
        <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
          {this.state.movies.map((movie) => (
            <Card key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default WithRouter(HomePage);

/*
let strVal = "Hello World";
strVal = "Testing"

state = {
  title: "Home Page",
  content: "This is the home page"
}

this.state.title = "Home Test";
this.state.content = "This is the home page bruv";

this.setState({
  title: "Home Test",
  content: "This is the home page bruv"
})
*/
