'use strict';

const currentYear = 2021;

function whatIsCurrentYear() {
  
  const currentMonth = "April";

  function week() {
    day();
  };
  const currentWeek = "first";
  
  function day() {
    const currentDay = "25th";
    console.log(
      `We are in ${currentDay}, ${currentWeek} week of ${currentMonth}, ${currentYear}.`
    );
  };

  week();
  
};

whatIsCurrentYear();

