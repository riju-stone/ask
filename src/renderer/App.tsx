import { useState } from "react";
import ResponseComponent from "./components/response/response";
import SearchComponent from "./components/search/search";
import './index.scss'

function App()
{
  const [search, setSearching] = useState(false)
  return <div className="appWrapper">
    <SearchComponent searching={search} setSearching={setSearching} />
    <ResponseComponent searching={search} />
  </div>;
}

export default App;
