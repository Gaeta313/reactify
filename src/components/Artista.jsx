import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Artista = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    });

    const func = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id,
          {
            method: "GET",
            headers,
          }
        );

        if (response.ok) {
          let artist = await response.json();
          setArtist(artist);

        } 
        
        
        
        else {
          // something went wrong with the request --> i.e. headers missing, wrong HTTP Method
        }
      } catch (exception) {}
    };

    func();
  }, []);

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row mb-3">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-10 col-lg-10 mt-5">
          <h2 className="titleMain">{artist?.name}</h2>
          <div id="followers"></div>
          <div className="d-flex justify-content-center" id="button-container">
            {artist && (
              <>
                <button
                  className="btn btn-success mr-2 mainButton"
                  id="playButton"
                >
                  PLAY
                </button>
                <button
                  className="btn btn-outline-light mainButton "
                  id="followButton"
                >
                  FOLLOW
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <div className="row" id="apiLoaded">
                {

                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artista;
