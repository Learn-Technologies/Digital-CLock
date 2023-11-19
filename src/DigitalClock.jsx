import moment from "moment/moment";
import React from "react";

function DigitalClock() {
  // use moment library to show the date in format now
  const [isDate, setIsDate] = React.useState();
  // now using the setTimeout function to set it in one second

  setTimeout(() => {
    // Date.now() is javascript function gives you current date
    setIsDate(Date.now());
  }, 1000);
  return (
    // here showing the date
    // just import the moment from the moment library
    <div>{moment(isDate).format("MMMM Do YYYY, h:mm:ss a")}</div>
  );
}

export default DigitalClock;
