import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.scss";
import { Routes } from "./components/router";
import { DocxActionCreator } from "./store";

function App() {
  const dispatch = useDispatch();
  const { getAll } = bindActionCreators(DocxActionCreator, dispatch);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
