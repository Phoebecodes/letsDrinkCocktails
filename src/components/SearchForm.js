import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setInput } = useGlobalContext();
  const search = useRef("");

  useEffect(() => {
    search.current.focus();
  });

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">Search Your Favourite Cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={search}
            onChange={() => setInput(search.current.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
