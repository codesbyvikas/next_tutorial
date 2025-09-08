"use client";

import { useEffect, useState } from "react";

const ClientPage = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const [postdata, setPostData] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);

      setPostData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Vikas</h1>
      <button
        className="bg-[yellow] text-black border rounded-2xl p-2"
        onClick={() => alert("clicked")}
      >
        Click Me
      </button>

      <ul className="grid grid-cols-3 gap-5">
        {postdata.map((el, idx)=>{
          return <li key={idx}>{el.body} | </li>
        })}
      </ul>

     
    </div>
  );
};

export default ClientPage;
