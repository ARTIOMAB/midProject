import React, { useState, useContext } from "react";
import { Button, Modal, Box } from "@mui/material";
import { LoginContext, UserContext } from "../Context";
import DatePicker from "react-datepicker";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import StrictModeDroppable from "../components/StrictModeDroppable";
<<<<<<< HEAD
/* import "./AtTasks.css"; */
function AtTasks() {
=======
import "react-datepicker/dist/react-datepicker.css";
import "./AtTasks.css";

function Atasks({tasks, setTasks}) {
>>>>>>> 28814a5eef9ef16f1793540046514f1f60cde545
  const { loginData, setLoginData } = useContext(LoginContext);
  const { userData, setUserData } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const userIndex = userData.findIndex(
    (user) => user.username === loginData.username
  );
  // const [tasks, setTasks] = useState(loginData.tasks || []);
  const [newTask, setNewTask] = useState({
    title: "",
    explanation: "",
    dueDate: new Date(),
    startTime: new Date(),
    finishTime: new Date(),
    isAllDay: false,
    duration: "",
    notes: "",
    priority: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addTask = () => {
<<<<<<< HEAD
    setNewTask({
      title: "",
      explanation: "",
      dueDate: new Date(),
      startTime: new Date(),
      finishTime: new Date(),
      isAllDay: false,
      duration: "",
      notes: "",
      priority: "",
    });
=======
    if (newTask.title.trim() !== "" && newTask.priority !== "") {
      // Format dates as strings in a specific format
      const formattedNewTask = {
        ...newTask,
        dueDate: newTask.dueDate.toISOString(),
        startTime: newTask.startTime.toISOString(),
        finishTime: newTask.finishTime.toISOString(),
      };

      const listCopy = ([...tasks, formattedNewTask]);
      setTasks(listCopy);
      loginData.tasks = listCopy;
      setLoginData(loginData);
      userData.splice(userIndex, 1, loginData);
      setUserData(userData);
      setNewTask({
        title: "",
        explanation: "",
        dueDate: new Date(),
        startTime: new Date(),
        finishTime: new Date(),
        isAllDay: false,
        duration: "",
        notes: "",
        priority: "",
      });
    }
>>>>>>> 28814a5eef9ef16f1793540046514f1f60cde545
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    loginData.tasks = updatedTasks;
    setLoginData(loginData);
    userData.splice(userIndex, 1, loginData);
    setUserData(userData);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedTasks = [...tasks];
    const [movedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(reorderedTasks);
    loginData.tasks = reorderedTasks;
    setLoginData(loginData);
    userData.splice(userIndex, 1, loginData);
    setUserData(userData);
  };

  useEffect(() => {
    localStorage.setItem("logins", JSON.stringify(loginData));
    localStorage.setItem("users", JSON.stringify(userData));
  }, [loginData.tasks, userData[userIndex].tasks]);

  // When retrieving tasks from localStorage
  useEffect(() => {
    const storedLoginData = JSON.parse(localStorage.getItem("logins")) || {};
    const storedUserData = JSON.parse(localStorage.getItem("users")) || [];

    // Parse the date strings back to Date objects
    const parsedUserData = storedUserData.map((user) => ({
      ...user,
      tasks: user.tasks.map((task) => ({
        ...task,
        dueDate: new Date(task.dueDate),
        startTime: new Date(task.startTime),
        finishTime: new Date(task.finishTime),
      })),
    }));

    setLoginData(storedLoginData);
    setUserData(parsedUserData);
  }, []);

  return (
    <>
      <h1>My Missions</h1>
      <Button id="addTaskBTN" onClick={handleOpen}>
        Add Task
      </Button>
      <div id="Container">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <div className="NTWindow">
              <h2 id="parent-modal-title">Please add your task details</h2>

              <label>1. Write the name of your task</label>
              <input
                className="inputGroup"
                id="title-input"
                type="text"
                placeholder="Task Title"
                value={newTask.title}
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
              />

              <label>3. Deadline Date:</label>
              <DatePicker
                className="inputGroup"
                placeholderText="Task Deadline Date"
                selected={newTask.dueDate}
                onChange={(date) => {
                  setNewTask({ ...newTask, dueDate: date });
                }}
                dateFormat="dd-MM-yyyy"
              />

              <label>4. Start Time:</label>
              <DatePicker
                className="inputGroup"
                placeholderText="Start Time"
                selected={newTask.startTime}
                onChange={(date) => setNewTask({ ...newTask, startTime: date })}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />

              <label>5. Finish Time:</label>
              <DatePicker
                className="inputGroup"
                placeholderText="Finish Time"
                selected={newTask.finishTime}
                onChange={(date) =>
                  setNewTask({ ...newTask, finishTime: date })
                }
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />

              <label>6. All Day Event:</label>
              <input
                type="checkbox"
                checked={newTask.isAllDay}
                onChange={(e) =>
                  setNewTask({ ...newTask, isAllDay: e.target.checked })
                }
              />

              <label>8. Notes or Comments:</label>
              <textarea
                className="inputGroup"
                id="notes-input"
                placeholder="Notes or Comments"
                value={newTask.notes}
                onChange={(e) =>
                  setNewTask({ ...newTask, notes: e.target.value })
                }
              />

              <label>9. Priority:</label>
              <select
                className="inputGroup"
                id="priority-input"
                value={newTask.priority}
                onChange={(e) =>
                  setNewTask({ ...newTask, priority: e.target.value })
                }
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div id="2BTNs">
              <button onClick={addTask}>Add Task</button>
              <button onClick={handleClose}>Close window</button>
            </div>
          </Box>
        </Modal>
        <DragDropContext onDragEnd={handleDragEnd}>
          <StrictModeDroppable droppableId="tasks" direction="vertical">
            {(provided) => (
              <table
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="table"
              >
                <tbody>
                  {tasks.map((task, index) => (
                    <Draggable
                      key={index}
                      draggableId={`task-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <tr
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <td>{task.title}</td>

                          <td>
                            {task.dueDate
                              ? task.dueDate.toString().slice(0, 10)
                              : "Not yet scheduled"}
                          </td>
                          <td>
                            {task.isAllDay
                              ? "All Day"
                              : task.startTime &&
                                task.finishTime &&
                                `${
                                  Number(task.startTime.slice(11, 13)) + 3
                                }${task.finishTime.slice(13, 16)} - ${
                                  Number(task.finishTime.slice(11, 13)) + 3
                                }${task.finishTime.slice(13, 16)}`}
                          </td>
                          <td>{task.notes}</td>
                          <td>{task.priority}</td>
                          <td>
                            <button onClick={() => deleteTask(index)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      )}
                    </Draggable>
                  ))}
                </tbody>
              </table>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      </div>
    </>
  );
}

export default Atasks;
