import React, { useEffect, useState } from "react";

function GitHub() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://github.com/users/SiddheshWandile")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center p-2 bg-gray-500 text-3xl text-white">
      GitHub Followers: {data.followrs}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
}

export default GitHub;
