import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";

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

const getData = max => dataset.filter(d => d.sold < max);

const BarChart = ({ query }) => {
  const geomProps = {
    type: "interval",
    position: "genre*sold"
  };

  geomProps.color = "genre";

  const [max, setMax] = useState(4);
  return (
    <div style={styles}>
      <input
        value={max}
        type="number"
        onChange={event => setMax(event.target.value)}
      />
      <Chart
        height={400}
        data={getData(max * 100)}
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
