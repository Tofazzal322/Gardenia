import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";


const Review = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [latestNews, setLatestNews] = useState([]);
  console.log(latestNews);

  useEffect(() => {
    fetch("https://pacific-meadow-17159.herokuapp.com/happyreview")
      .then((res) => res.json())
      .then((data) => setLatestNews(data));
  }, []);
  return (
    
  );
};

export default Review;
