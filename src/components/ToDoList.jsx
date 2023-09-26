import { useContext, useState, useEffect } from "react";
import { LoginContext, UserContext } from "../Context";

function ToDoList() {
  const { loginData, setLoginData } = useContext(LoginContext);
  const { userData, setUserData } = useContext(UserContext);
  const [input, setInput] = useState("");
  const [taskData, setTaskData] = useState(loginData.tasks || []);

  const userIndex = userData.findIndex(
    (user) => user.username === loginData.username
  );

  function deleteTask(element) {
    const updatedTasks = taskData.filter((item) => item !== element);
    setTaskData(updatedTasks);

    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      tasks: updatedTasks,
    }));

    const updatedUserData = [...userData];
    updatedUserData[userIndex] = { ...loginData, tasks: updatedTasks };
    setUserData(updatedUserData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTasks = [...taskData, input];
    setTaskData(updatedTasks);

    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      tasks: updatedTasks,
    }));

    const updatedUserData = [...userData];
    updatedUserData[userIndex] = { ...loginData, tasks: updatedTasks };

    setUserData(updatedUserData);
    console.log(updatedUserData);

    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("logins", JSON.stringify(loginData));
    localStorage.setItem("users", JSON.stringify(userData));
  }, [loginData, userData]);

  return (
    <main>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          <ul>
            {taskData.map((element, i) => (
              <li key={i}>
                {element}
                <button onClick={() => deleteTask(element)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </main>
  );
}

export default ToDoList;
