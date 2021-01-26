import React from "react";
import "../App.css";
import SearchFrom from "./SearchForm";
import MovieCard from "./MovieCard";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        imgLink: "",
        imgs: []
      };
      this.setImg = this.setImgs.bind(this);
    }
}
return (
    <div>
      <SearchForm setImgs={this.setImg} />
      <div></div>
    </div>
  );
    
export default App;