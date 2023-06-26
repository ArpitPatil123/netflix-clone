import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../API/requests";

const HomeScreen = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row title="Kids" fetchUrl={requests.fetchKids} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
    </div>
  );
};

export default HomeScreen;
