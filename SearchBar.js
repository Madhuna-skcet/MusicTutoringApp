import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = ({ setSearchQuery }) => (
  <form
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <TextField
      id="search-bar"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Music Styles"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
  </form>
);

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      fetch(`https://api.deezer.com/search?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.data) {
            setMusicData(data.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching music data:", error);
        });
    }
  }, [searchQuery]);

  return (
    <div
    >
      <SearchBar setSearchQuery={setSearchQuery} />
      <div style={{ marginTop: "20px", color: "white" }}>
        {musicData.map((track) => (
          <div key={track.id}>
            <h3>{track.title}</h3>
            <p>{track.artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
