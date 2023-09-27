<<<<<<< HEAD
import React from "react";
=======

>>>>>>> 28814a5eef9ef16f1793540046514f1f60cde545
import MyCalendar from "../components/MyCalender";
import AtTask from "../components/AtTask";
import './WorkZone.css';
import React, { useState, useContext, useEffect } from "react";
import { LoginContext } from "../Context";
function WorkZone() {
  const { loginData, setLoginData } = useContext(LoginContext);
  const [tasks, setTasks] = useState(loginData.tasks || []);

  return (
    <div className="workzone-container">
      <h2>WorkZone</h2>
      
      <div className="calender">
      <MyCalendar tasks={tasks} />
      </div>
      <div className="atTask">
        <AtTask tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
}

export default WorkZone;
