import React from "react";
import ReactDOM from "react-dom";

import { Chart, Axis, Geom, Tooltip } from "bizcharts";

import "./styles.css";

const data = [
  { temperature: 5.49, city: "'Eureka", state: "California", month: "1964-0" },
  { temperature: 5.89, city: "'Eureka", state: "California", month: "1965-8" },
  { temperature: 5.55, city: "'Eureka", state: "California", month: "1966-6" },
  { temperature: 4.62, city: "'Eureka", state: "California", month: "1967-4" },
  { temperature: 5.32, city: "'Eureka", state: "California", month: "1968-2" },
  { temperature: 4.65, city: "'Eureka", state: "California", month: "1968-2" },
  { temperature: 5.52, city: "'Eureka", state: "California", month: "1969-0" },
  { temperature: 5.53, city: "'Eureka", state: "California", month: "1970-8" },
  { temperature: 5.43, city: "'Eureka", state: "California", month: "1971-6" },
  { temperature: 4.91, city: "'Eureka", state: "California", month: "1972-4" },
  { temperature: 5.07, city: "'Eureka", state: "California", month: "1973-2" },
  { temperature: 5.12, city: "'Eureka", state: "California", month: "1973-2" },
  { temperature: 5.48, city: "'Lincoln", state: "Nebraska", month: "1964-0" },
  { temperature: 7.48, city: "'Lincoln", state: "Nebraska", month: "1965-8" },
  { temperature: 7.25, city: "'Lincoln", state: "Nebraska", month: "1966-6" },
  { temperature: 5.41, city: "'Lincoln", state: "Nebraska", month: "1967-4" },
  { temperature: 2.82, city: "'Lincoln", state: "Nebraska", month: "1968-2" },
  { temperature: 2.41, city: "'Lincoln", state: "Nebraska", month: "1968-2" },
  { temperature: 5.04, city: "'Lincoln", state: "Nebraska", month: "1969-0" },
  { temperature: 7.8, city: "'Lincoln", state: "Nebraska", month: "1970-8" },
  { temperature: 7.8, city: "'Lincoln", state: "Nebraska", month: "1971-6" },
  { temperature: 4.97, city: "'Lincoln", state: "Nebraska", month: "1972-4" },
  { temperature: 2.84, city: "'Lincoln", state: "Nebraska", month: "1973-2" },
  { temperature: 2.18, city: "'Lincoln", state: "Nebraska", month: "1973-2" },
  { temperature: 5.59, city: "'Newark", state: "NewJersey", month: "1964-0" },
  { temperature: 7.45, city: "'Newark", state: "NewJersey", month: "1965-8" },
  { temperature: 7.38, city: "'Newark", state: "NewJersey", month: "1966-6" },
  { temperature: 5.09, city: "'Newark", state: "NewJersey", month: "1967-4" },
  { temperature: 2.99, city: "'Newark", state: "NewJersey", month: "1968-2" },
  { temperature: 3.25, city: "'Newark", state: "NewJersey", month: "1968-2" },
  { temperature: 5.62, city: "'Newark", state: "NewJersey", month: "1969-0" },
  { temperature: 7.73, city: "'Newark", state: "NewJersey", month: "1970-8" },
  { temperature: 7.48, city: "'Newark", state: "NewJersey", month: "1971-6" },
  { temperature: 5.0, city: "'Newark", state: "NewJersey", month: "1972-4" },
  { temperature: 3.33, city: "'Newark", state: "NewJersey", month: "1973-2" },
  { temperature: 3.94, city: "'Newark", state: "NewJersey", month: "1973-2" }
];

const cols = {
  value: { min: 0 },
  year: { range: [0, 1] }
};

ReactDOM.render(
  <Chart height={400} data={data} forceFit>
    <Axis name="month" />
    <Axis name="temperature" label={{ formatter: val => `${val}°C` }} />
    <Tooltip crosshairs={{ type: "y" }} />
    <Geom type="line" position="month*temperature" size={2} color={"city"} />
    <Geom type="point" position="month*temperature" size={4} color={"city"} />
  </Chart>,
  document.getElementById("root")
);
