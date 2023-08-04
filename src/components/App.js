import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddBenchmark from "./AddBenchmark";
import Benchmarklist from "./Benchmarklist";

function App() {
  const LOCAL_STORAGE_KEY = "benchmarks";
  console.log(LOCAL_STORAGE_KEY)
  const [benchmarks, setBenchmarks] = useState(    
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addBenchmarkHandler = (Benchmark) => {
    console.log(Benchmark);
    setBenchmarks([...benchmarks, { id: uuid(), ...Benchmark }]);
  };

  const removeBenchmarkHandler = (id) => {
    console.log(id)
    const newBenchmarklist = benchmarks.filter((benchmark) => {
      return benchmark.id !== id;
    });

    setBenchmarks(newBenchmarklist);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(benchmarks));
  }, [benchmarks]);

  return (
    <div className="ui container">
      <Header />
      <AddBenchmark addBenchmarkHandler={addBenchmarkHandler} />
      <Benchmarklist benchmarks={benchmarks} getBenchmarkID={removeBenchmarkHandler} />
    </div>
  );
}

export default App;