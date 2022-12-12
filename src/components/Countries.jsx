import { async } from "q";
import React, { useState, useEffect } from "react";
import Article from "./Article";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data.slice(0,10));
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
  }, []);
  return (
    <>
      {!countries ? (
        <h1 className="text-gray-800 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">
          Loading...
        </h1>
      ) : (
        <section className="container mx-auto p-8">
          <div className="grid cols-1 gap-8 md:grid-cols-2
          lg:grid-cols-3 2xl:grid-cols-4">
          {countries.map((country) => (
            <Article key={country.name.common} {...country} />
          ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Countries;
