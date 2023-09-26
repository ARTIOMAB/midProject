import React from "react";
import ToDoList from "../components/ToDoList";
import MyCalendar from "../components/MyCalender";
import AtTask from "../components/AtTask";

function WorkZone() {
  return (
    <div className="workzone-container">
      <h2>WorkZone</h2>
      <div className="todolist">
        <ToDoList />
      </div>
      <div className="calender">
        <MyCalendar />
      </div>
      <div className="atTask">
        <AtTask />
      </div>
    </div>
  );
}

export default WorkZone;