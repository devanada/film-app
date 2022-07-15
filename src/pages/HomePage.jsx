import React, { useState, useEffect } from "react";
import axios from "axios";

// import from export default
// import Card from "../components/Card";
// import from named export
import Card from "../components/Card";
import Header from "../components/Header";
import { WithRouter } from "../utils/Navigation";

const HomePage = () => {
  // constructor
  // [state, updater] = useState(initialValue)
  const [title, setTitle] = useState("-");
  const [content, setContent] = useState("This is the home page");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(false);

  /*
  1. asynchronous, artinya dia tidak bisa langsung dipakai
  2. ketika value dirubah, maka dia melakukan re-rendering
  3. selain dibaca, sebuah state bisa dirubah value-nya
  */

  // side effect
  // -> useEffect dipanggil sekali ketika komponen dimuat, componentDidMount
  useEffect(() => {
    fetchData();
  }, []);
  // -> useEffect selalu dipanggil
  // useEffect(() => {
  //   this.fetchData();
  // })
  //  -> useEffect dipanggil setiap kali ada perubahan data/state, dia juga dipanggil ketika komponen dimuat, componentDidUpdate & componentDidMount
  // useEffect(() => {
  //   this.fetchData();
  // }, [page])

  // ini fungsi yang dijalankan ketika component dimuat
  // Konsumsi API menggunakan Axios
  const fetchData = async (page) => {
    setLoading(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        const { results } = response.data;
        if (results) {
          setMovies(results);
          setPage(2);
          fetchData2(2);
        }
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  // Konsumsi API menggunakan Fetch API
  const fetchData2 = (page) => {
    setLoading(true);
    var config = {
      method: "get",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
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
      .finally(() => setLoading(false));
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
    //   .finally(() => setLoading(false));
  };

  const handleScroll = (e) => {
    let element = e.target;
    const bottom =
      element.scrollHeight - element.scrollTop === element.clientHeight;
    if (bottom) {
      this.fetchData(page + 1);
    }
  };

  return (
    <div className="w-full h-screen overflow-auto" onScroll={handleScroll}>
      <Header />
      <p>{content}</p>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
        {movies.map((movie) => (
          <Card key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

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
