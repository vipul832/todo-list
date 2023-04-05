import React, { useState } from "react";

// let todaydate = new Date().getDate();
// let todayday = new Date().getDay();

export default function AppBar() {
  //   const [date, setDate] = useState(todaydate);
  //   const [day, setDay] = useState(todayday);
  return (
    <div className="mt-5 p-2">
      <div className="d-flex justify-content-around align-items-center">
        <div className="date-area d-flex justify-content-around align-items-center">
          <div className="">
            <p className="day-date">12</p>
          </div>
          <div className="month-year-area">
            <p>JAN</p>
            <p>2023</p>
          </div>
        </div>
        <div className="">
          <p className="disable m-0">WEDNESDAY</p>
        </div>
      </div>
    </div>
  );
}
