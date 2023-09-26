import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ tasks }) => {
  return (
    <div className="calender-container">
      <div>
        <Calendar
          localizer={localizer}
          events={tasks}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, color: "white" }}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
