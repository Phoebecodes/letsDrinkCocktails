import React, { useState } from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";

const Home = () => {
  const { isLoading } = useGlobalContext();
  return (
    <>
      <SearchForm />

      <CocktailList />
    </>
  );
};

export default Home;
