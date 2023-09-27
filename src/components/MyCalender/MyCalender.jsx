import React, { useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "./MyCalendar.css";
import { LoginContext } from "../../Context";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const { loginData } = useContext(LoginContext);

  const events = (loginData.tasks || []).map((task, index) => {
    const startDate = moment(
      task.dueDate + " " + task.startTime,
      "YYYY-MM-DD HH:mm"
    );
    const endDate = moment(
      task.dueDate + " " + task.finishTime,
      "YYYY-MM-DD HH:mm"
    );

    return {
      id: index,
      title: task.title,
      start: startDate.toDate(),
      end: endDate.toDate(),
    };
  });

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, color: "white" }}
        views={["month", "week", "day", "agenda"]}
        popup
        selectable
        onSelectEvent={(event) => console.log(event)}
      />
    </div>
  );
};

export default MyCalendar;
