import { useEffect } from "react";
import { useState } from "react";
import Gallery from "./Gallery";
const Home = () => {
  const [rockArtists, setRockArtists] = useState([
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ]);
  const [popArtists, setPopArtists] = useState([
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ]);
  const [hipHopArtists, setHipHopArtists] = useState([
    "eminem",
    "snoopdogg",
    "lilwayne",
    "drake",
    "kanyewest",
  ]);


  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage" style={{marginBottom : "150px"}}>
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="searchResults" style={{ display: "none" }}>
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
          </div>
        </div>
      </div>
      <Gallery title={"Rock Classics"} artists={rockArtists} />
      <Gallery title={"Pop Culture"} artists={popArtists} />
      <Gallery title={"#HipHop"}  artists={hipHopArtists}/>
    </div>
  );
};

export default Home;
