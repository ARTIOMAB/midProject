// import React from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import moment from "moment";
// import "./MyCalendar.css"




// const localizer = momentLocalizer(moment);

// const MyCalendar = ({ tasks }) => {
//   return (
//     <div>
//       <Calendar
//         localizer={localizer}
//         events={tasks}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500, color: "white" }}
//       />
//     </div>
//   );
// };

// export default MyCalendar;
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "./MyCalendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ tasks }) => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={tasks}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, color: "white" }}
        views={["month", "day"]}
        popup
        selectable
        onSelectEvent={(event, e) => console.log(event)}
      />
    </div>
  );
};

export default MyCalendar;
