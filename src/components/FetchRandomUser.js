import React, { useState, useEffect } from "react";

const FetchRandomUser = () => {
  const [state, setState] = useState({
    loading: true,
    person: null,
  });

  useEffect(() => {
    const fetchRandomUser = async () => {
      const url = "https://api.randomuser.me/";
      const response = await fetch(url);
      const data = await response.json();
      setState({
        loading: false,
        person: data.results[0],
      });
    };

    fetchRandomUser();
  }, []);

  return (
    <div>
      {state.loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <h1>{`${state.person.name.first} ${state.person.name.last}`}</h1>
          <img src={state.person.picture.large} alt="profile" />
        </div>
      )}
    </div>
  );
};

export default FetchRandomUser;
