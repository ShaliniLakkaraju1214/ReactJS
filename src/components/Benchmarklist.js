import React from "react";
import Benchmark from "./Benchmark";

const Benchmarklist = (props) => {
  console.log(props);

  const deleteBenchmarkHandler = (id) => {
    props.getBenchmarkID(id);
  };
  const renderBenchmarklist = props.benchmarks.map((benchmark) => {
    console.log(benchmark)
    return (      
      <Benchmark
        benchmark={benchmark}
        clickHander={deleteBenchmarkHandler}
        key={benchmark.id}
      />
    );
  });
  return <div className="ui celled list">{renderBenchmarklist}</div>;
};

export default Benchmarklist;