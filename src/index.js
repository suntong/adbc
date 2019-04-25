import React, { useState } from "react";
import { render } from "react-dom";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
  Coord,
  GeomProps
} from "bizcharts";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const dataset = [
  { genre: "Sports", sold: 275, income: 2300 },
  { genre: "Strategy", sold: 115, income: 667 },
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showColor: true
    };
  }

  handleBtnClick = () => {
    this.setState({
      showColor: !this.state.showColor
    });
  };

  render() {
    const geomProps: GeomProps = {
      type: "interval",
      position: "genre*sold"
    };

    if (this.state.showColor) {
      geomProps.color = "genre";
    }

    //let [max, setMax] = useState(4);
    return (
      <div style={styles}>
        {/* <button onClick={this.handleBtnClick}>toggle</button> */}
        {/* <input
          value={max}
          type="number"
          onChange={event => setMax(event.target.value)}
        /> */}
        <Chart
          height={400}
          data={getData(400)}
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
  }
}

render(<App />, document.getElementById("root"));
