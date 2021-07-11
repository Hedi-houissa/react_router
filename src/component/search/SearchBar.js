import React , {useState} from "react";
import Rater from "./Rater";
import ListMovies from "../content/ListMovies";


import './search.css'

const SearchBar = () => {
const [text, setText] = useState("");
const [star, setStar] = useState(1);

const rating = x => {
  setStar(x);
  console.log('search rating : ',x);
}

const  inputChange = (e) => {
  // console.log('star ',star);
  setText(e.target.value);
}

const  starChange = (e) => {
  console.log('star ',star);
}


  return (
    <div>
      <div className="search_bar">
        <input type="text" name="search" placeholder="search ....." onChange = {inputChange} />
        <Rater rating={rating} onChange= {starChange(star)}/>
    </div>
    
    <ListMovies  search={text} star={star} />
    </div>
    
  );
};

export default SearchBar;
