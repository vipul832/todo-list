import React, { useState } from "react";

const todayDate = new Date().getDate(); // (day)
const todayDay = new Date().getDay(); // (week)
const todayMonth = new Date().getMonth(); // (month)
const todayYear = new Date().getFullYear(); // )(Year)

const days = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

let month = months[todayMonth];
let day = days[todayDay];

export default function AppBar() {
  return (
    <div className="mt-4 p-2">
      <div className="d-flex justify-content-between align-items-center mx-5">
        <div className="date-area d-flex justify-content-around align-items-center">
          <div className="">
            <p className="day-date">{todayDate}</p>
          </div>
          <div className="month-year-area">
            <p className="fw-bold">{month}</p>
            <p>{todayYear}</p>
          </div>
        </div>
        <div className="">
          <p className="fw-bold m-0 fs-5">{day}</p>
        </div>
      </div>
    </div>
  );
}
