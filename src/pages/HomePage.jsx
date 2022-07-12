import React, { Component } from "react";

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
    datas: [
      {
        id: 1,
        title: "Wandavision Season 1",
        image:
          "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
      {
        id: 2,
        title: "Wandavision Season 2",
        image:
          "https://image.tmdb.org/t/p/original/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
      },
      {
        id: 3,
        title: "Wandavision Season 3",
        image:
          "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
      {
        id: 4,
        title: "Wandavision Season 4 Wandavision Season 4 Wandavision Season 4",
        image:
          "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
      {
        id: 5,
        title: "Wandavision Season 5",
        image:
          "https://image.tmdb.org/t/p/original/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
      },
      {
        id: 6,
        title: "Wandavision Season 6",
        image:
          "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
    ],
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
  }

  // ini fungsi yang dijalankan ketika component dimuat
  async fetchData() {
    // setTimeout(() => {
    this.setState({
      title: "Home Test",
    });
    console.log(this.state.title);
    // }, 2000);
  }

  render() {
    return (
      <>
        <Header />
        <div className="w-full h-screen">
          <p>{this.state.content}</p>
          <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
            {this.state.datas.map((data) => (
              <Card2 key={data.id} title={data.title} image={data.image} />
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
