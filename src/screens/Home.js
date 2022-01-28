import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import ResultList from "../components/ResultList";
import useResult from "../hooks/useResult";
import SearchBar from '../components/SearchBar';

function Home({ navigation }) {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResult();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
    <SearchBar 
    term={term} 
    onTermChange={setTerm} 
    onTermSubmit={() => searchApi(term)}
    />
     {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          title="Moins Cher"
          navigation={navigation}
          results={filterResultsByPrice("$")}
        />
        <ResultList
          title="Un peu Cher"
          navigation={navigation}
          results={filterResultsByPrice("$$")}
        />
        <ResultList
          title="Très Cher"
          navigation={navigation}
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
}

export default Home;
