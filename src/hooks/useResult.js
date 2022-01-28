import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "San jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Erreur, Quelque cloche");
    }
  };

  useEffect(() => {
    searchApi("limon");
  }, []);

  return [searchApi, results, errorMessage];
};
