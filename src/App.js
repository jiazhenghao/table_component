import { useEffect, useState } from "react";
import Table from "./components/Table";
import { URL } from "./config";
import { fetchData } from "./api/fetchData";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData(URL).then((data) => setData(data));
  }, []);

  return <Table data={data} handleData={setData} />;
}

export default App;
