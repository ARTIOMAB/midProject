
import MyCalendar from "../../components/MyCalender/MyCalender";
import AtTask from "../../components/AtTask/AtTask";
import "./WorkZone.css";

function WorkZone() {


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
