import { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import { useDispatch,useSelector } from 'react-redux'

const Gallery = ({ title, artists }) => {
    const artistsStore = useSelector((state) => state.obj.artists)
  const [randomArtists, setRandomArtists] = useState([]);
  const [fecthArtists, setFetchArtists] = useState([]);
  const dispatch = useDispatch()
 

  useEffect(() => {

    const func = async () => {
      while (randomArtists.length < 4) {
        // pushes elements inside the array until it has 4 strings
        let artist = artists[Math.floor(Math.random() * artists.length)]; // select an element from the array with an index between 0 and 7
        if (!randomArtists.includes(artist)) {
          // checks if the artist is not already present in the array
          randomArtists.push(artist); // pushes the artist in the array
        }
      }
      console.log(randomArtists);

      for (let j = 0; j < randomArtists.length; j++)
        await handleArtist(randomArtists[j]);
    };
    

    func();
  }, []);

  useEffect(() => {
    console.log('ciao');
  })

  const handleArtist = async (artistName) => {
    let headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
      })

      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
            artistName,
          {
            method: 'GET',
            headers,
          }
        ) // gets the information
        if (response.ok) {
          let result = await response.json() // transforms the response to json
          let songInfo = result.data
          fecthArtists.push(songInfo[0]);
          dispatch({
            type: 'ADD_TO_ARTISTS',
            payload: songInfo[0],
          })
          console.log(fecthArtists);
        } else {
          console.log('error')
        }
      } catch (err) {
        console.log(err)
      }
  };

  return (
    <div className="row">
      <div className="col-10">
        <div id="rock">
          <h2>{title}</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="rockSection"
          >
            {
                
             fecthArtists.map((artist, i) => (
              <AlbumCard key={i} songInfo={artist} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
