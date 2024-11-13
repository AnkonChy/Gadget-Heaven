import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Charts from "../components/Charts";
import StatBanner from "../components/StatBanner";

const Statistics = () => {
  const allData = useLoaderData();

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(allData);
  }, [allData]);
  return (
    <div>
      <StatBanner></StatBanner>
      <Charts data={data}></Charts>
    </div>
  );
};

export default Statistics;
