import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsuratPages = () => {
  const { nomor } = useParams();
  const [surat, setSurat] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://quran-api.santrikoding.com/api/surah/${nomor}`,
        );
        const data = await response.json();
        setSurat(data);
        console.log(data.ayat);
      } catch (error) {
        console.error("Error fetching surah detail:", error);
      }
    };

    fetchData();
  }, [nomor]);

  if (!surat) {
    return <p className="text-center text-gray-500">Loading...</p>; // loading indicator
  }

  return (
    <div className="p-4 w-96 content-center m-auto">
      {surat.ayat.map((ayat) => (
        <div
          className="border-b border-gray-200 py-4 flex justify-between items-center"
          key={ayat.id}>
          <div className="w-1/12 text-center">
            <p className="text-xl font-bold">{ayat.nomor}</p>
          </div>
          <div className="w-10/12">
            <p className="text-right text-2xl font-semibold">{ayat.ar}</p>
            <p className="text-left text-gray-700 mt-2">{ayat.idn}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsuratPages;
