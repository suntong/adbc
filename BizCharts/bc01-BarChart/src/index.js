import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";

import SelectList from "./components/SelectList";

const chartOptions = [{ id: 1, name: "Filter" }, { id: 2, name: "Cap" }];

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const dataset = [
  { genre: "Sports", sold: 275, income: 2300 },
  { genre: "Strategy", sold: 95, income: 667 },
  { genre: "Action", sold: 120, income: 982 },
  { genre: "Shooter", sold: 350, income: 5271 },
  { genre: "Other", sold: 150, income: 3710 }
];

const cols = [
  { name: "种类", key: "genre" },
  { name: "销售量", key: "sold" },
  { name: "收入", key: "income" }
];

const getData = (dataset, chartOptionId, max) =>
  chartOptionId === 1
    ? dataset.filter(d => d.sold < max)
    : [...dataset].map(d => {
        d.sold = d.sold < max ? d.sold : max;
        return d;
      });

const BarChart = ({ query }) => {
  let [chartOptionId, setchartOptionId] = useState(1);

  const geomProps = {
    type: "interval",
    position: "genre*sold"
  };

  geomProps.color = "genre";

  const [max, setMax] = useState(4);
  return (
    <div style={styles}>
      <SelectList
        selections={chartOptions}
        onSelectChange={value => setchartOptionId(parseFloat(value))}
        selectedValue={chartOptionId}
      />
      <input
        value={max}
        type="number"
        min={1}
        max={5}
        onChange={event => setMax(event.target.value)}
      />
      <Chart
        height={400}
        data={getData(dataset, chartOptionId, max * 100)}
        scale={cols.map(item => item.key)}
        forceFit={true}
      >
        <Axis name="genre" />
        <Axis name="sold" />
        <Legend position="top" dy={-20} />
        <Tooltip />
        <Geom {...geomProps} />
      </Chart>
    </div>
  );
};

function App() {
  return <BarChart />;
}

ReactDOM.render(<App />, document.getElementById("root"));
