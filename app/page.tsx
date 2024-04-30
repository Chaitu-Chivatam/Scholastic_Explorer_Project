"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:9009/webscraping/api/v1/web-scraping/?search=${searchTerm}`,
        {
          headers: {
            accept: "*/*",
          },
        }
      );
      const res = response.data;
      setData(res.responseObject);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  const saveData = async () => {
    if (data.length != 0) {
      const url = `http://localhost:9009/webscraping/api/v1/web-scraping/?fileName=${searchTerm}`;
      const newArr = data.map((item) => {
        return { FirstURL: item.FirstURL, Text: item.Text };
      });

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(newArr),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };
  return (
    <>
      <div className="text-white h-screen flex flex-col items-center px-2 bg-[#343541]">
        <h1 className="text-5xl font-bold mb-10 mt-20">Academic Search Engine</h1>
        {/* search */}
        <form onSubmit={handleFormSubmit} className="flex my-10 space-x-1">
          <input
            className="focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300 border-gray-700 border bg py-[9] px-5 rounded-lg w-66 md:w-96 flex-grow flex-shrink"
            placeholder="Type here"
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <div className="items-center justify-center border-gray-700 border rounded-lg px-5 py-3 text-sm text-center flex hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out">
            <button type="submit">Search</button>
          </div>
          {data.length != 0 && (
            <div className="items-center justify-center bg-gray-400 border-gray-700 border rounded-lg px-5 py-3 text-sm text-center flex hover:bg-gray-700/70 cursor-pointer text-gray-700 hover:text-gray-300 transition-all duration-200 ease-out">
              <button onClick={saveData}>Save</button>
            </div>
          )}
        </form>
        {/* Table */}
        <table className="table-auto text-gray-700">
          <thead>
            <tr className="bg-white">
              <th className="px-4 py-2">Results</th>
              <th className="px-4 py-2">URL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}
              >
                <td className="border px-4 py-2">{item.Text}</td>
                <td className="border px-4 py-2">
                  <a href={item.FirstURL} className="text-blue-500">
                    {item.FirstURL}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
