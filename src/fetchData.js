import axios from 'axios';
import React, { useState, useEffect } from 'react';
import moment from 'moment';

/**
 * @author
 * @function Fetchdata
 **/

const url = `https://api.covid19api.com/summary`;

const Fetchdata = (props) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await axios.get(url);
      setCountries(response.data.Countries);
      console.log(response.data.Countries);
      setIsLoading(false);
      setSearchTerm(response.data.Countries);
    };
    fetchCountryData();
  }, []);

  return (
    <>
      <h1 className="text-center pt-10 heading">Covid-19 Details</h1>
      {isLoading ? (
        <h1 className="text-5xl text-center mt-40">Loading ....</h1>
      ) : (
        <section className="grid grid-clos-1 gap-10 text-white p-10 sm:grid-cols-2 lg:grid-cols-32xl:grid-cols-4 ">
          {countries.map((country) => {
            const {
              ID,
              Country,
              NewConfirmed,
              TotalConfirmed,
              NewDeaths,
              TotalDeaths,
              NewRecovered,
              TotalRecovered,
              Date,
            } = country;

            return (
              <article
                key={ID}
                className="bg-gray-700 px-5 py-4 rounded-lg bg-gradient-to-r from-black-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
              >
                <h2 className="text-green-700 font-bold  d-flex">
                  <i className="fa fa-home" aria-hidden="true"></i> {Country}
                </h2>

                <ul>
                  <li className="my-3 flex items-center justify-between">
                    <span className="text-yellow">New Confirmed Case</span>
                    {NewConfirmed}
                  </li>
                  <li className="my-3 flex items-center justify-between">
                    <span className="text-black">New Total Confirmed</span>
                    {TotalConfirmed}
                  </li>
                  <li className="my-3 flex items-center justify-between">
                    <span className="text-black">New Deaths </span> {NewDeaths}
                  </li>
                  <li className="my-3 flex items-center justify-between">
                    <span className="text-black">Total Deaths</span>
                    {TotalDeaths}
                  </li>
                  <li className="my-3 flex items-center justify-between">
                    <span className="text-from-red-200	">New Recovered</span>
                    {NewRecovered}
                  </li>
                  <li className="my-3 flex items-center justify-between">
                    <span className="text-red">Total Recovered</span>
                    {TotalRecovered}
                  </li>
                  <li className="my-3 flex items-center justify-between">
                    <span className="text-black">Date</span>
                    {moment(`${Date}`).format('MMM Do YYYY hh:mm:ss')}
                  </li>
                </ul>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Fetchdata;
