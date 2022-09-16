import { Link } from "react-router-dom";

const AlbumCard = ({ songInfo }) => {
  return (
    <div class="col text-center" id={songInfo.id}>
      <a href="!" id={songInfo.album.id}>
        <img class="img-fluid" src={songInfo.album.cover_medium} alt="1" />
      </a>
      <p>
        <a href="/album_page.html?" id={songInfo.album.id}>
          Album:{" "}
          {songInfo.album.title.length < 16
            ? songInfo.album.title
            : songInfo.album.title.substring(0, 16)}
        </a>
        <Link
          className="nav-item nav-link"
          to={"/artist_page/"+songInfo.artist.id}
        >
          {" "}
          Artist: {songInfo.artist.name}
        </Link>
      </p>
    </div>
  );
};

export default AlbumCard;
