import React, { useEffect, useState } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  

  useEffect(() => {
    const getColors = () => {
      axiosWithAuth()
      .get('/colors')
      .then(res => {
      setColorList(res.data)
      })
      .catch(err=> {
        console.log(err)
      })
    }
    getColors();
  },
  []
  )

  return (
    <>
    <h1>click on color name to edit!</h1>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
