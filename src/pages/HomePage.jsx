import React, { Component } from "react";
import axios from "axios";

// import from export default
// import Card from "../components/Card";
// import from named export
import { Card2 } from "../components/Card";
import Header from "../components/Header";

class HomePage extends Component {
  // constructor
  state = {
    title: "-",
    content: "This is the home page",
    page: 1,
    datas: [],
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
    this.fetchData();
    // await this.fetchData2();
  }

  // ini fungsi yang dijalankan ketika component dimuat
  // Konsumsi API menggunakan Axios
  async fetchData() {
    this.setState({ loading: true });
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const { results } = response.data;
        if (results) {
          this.setState({ datas: results });
        }
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
    /*
      axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {})
      .catch((error) => {})
      .finally(() => {});
      */
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

  render() {
    return (
      <>
        <Header />
        <div className="w-full h-screen">
          <p>{this.state.content}</p>
          <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
            {this.state.datas.map((data) => (
              <Card2
                key={data.id}
                title={data.title}
                image={data.poster_path}
                votes={data.vote_average}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;

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
