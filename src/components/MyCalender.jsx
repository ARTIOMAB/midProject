import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "./MyCalendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ tasks }) => {
  const events = tasks.map((task, index) => ({
    id: index,
    title: task.title,
    start: new Date(task.startTime),
    end: new Date(task.finishTime), 
    
  }));
  
  
  console.log(tasks);
  console.log(events);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, color: "white" }}
        views={["month", "week", "day","agenda"]}
        popup
        selectable
        onSelectEvent={(event, e) => console.log(event)}
      />
    </div>
  );
};

export default MyCalendar;
