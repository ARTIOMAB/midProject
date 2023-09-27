import React, { useState, useContext } from "react";
import { LoginContext } from "../../Context";
import MyCalendar from "../../components/MyCalender/MyCalender";
import AtTask from "../../components/AtTask/AtTask";
import "./WorkZone.css";
import StrictModeDroppable from "../../components/StrictModeDroppable";
function WorkZone() {
  const { loginData } = useContext(LoginContext);
  const [tasks, setTasks] = useState(loginData.tasks || []);

  return (
    <div className="workzone-container">
      <h2>WorkZone</h2>

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
