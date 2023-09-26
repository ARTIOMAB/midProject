import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import DatePicker from "react-datepicker";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import StrictModeDroppable from "../components/StrictModeDroppable";
function Atasks() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    explanation: "",
    dueDate: null,
    hour: "",
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
    if (newTask.title.trim() !== "" && newTask.priority !== "") {
      setTasks([...tasks, newTask]);
      setNewTask({
        title: "",
        explanation: "",
        dueDate: null,
        hour: "",
        isAllDay: false,
        duration: "",
        notes: "",
        priority: "",
      });
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedTasks = [...tasks];
    const [movedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(reorderedTasks);
  };
  return (
    <>
      <h1>my missions</h1>
      <Button id="addTaskBTN" onClick={handleOpen}>
        Add Tasks
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

              <label>
                2. Write anything that will help you complete the task{" "}
              </label>
              <input
                className="inputGroup"
                id="explanation-input"
                type="text"
                placeholder="Task Explanation"
                value={newTask.explanation}
                onChange={(e) =>
                  setNewTask({ ...newTask, explanation: e.target.value })
                }
              />

              <label>3. Deadline Date: </label>
              <DatePicker
                className="inputGroup"
                place
                holder="Task Deadline Date"
                selected={newTask.dueDate}
                onChange={(date) => setNewTask({ ...newTask, dueDate: date })}
                dateFormat="yyyy-MM-dd"
              />

              <label>4. Hour:</label>
              <input
                className="inputGroup"
                id="hour-input"
                type="text"
                placeholder="Deadline hour"
                value={newTask.hour}
                onChange={(e) =>
                  setNewTask({ ...newTask, hour: e.target.value })
                }
              />

              <label>5. Duration:</label>
              <input
                className="inputGroup"
                id="duration-input"
                type="text"
                placeholder="Estimated Duration"
                value={newTask.duration}
                onChange={(e) =>
                  setNewTask({ ...newTask, duration: e.target.value })
                }
              />

              <label>6. Notes or Comments:</label>
              <textarea
                className="inputGroup"
                id="notes-input"
                placeholder="Notes or Comments"
                value={newTask.notes}
                onChange={(e) =>
                  setNewTask({ ...newTask, notes: e.target.value })
                }
              />

              <label>7. Priority:</label>
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
            <div id="2BTNS">
              <button onClick={addTask}>Add Task</button>
              <p id="parent-modal-description">
                Enter task details, select a due date, specify the time (HH:mm),
                select a priority, then click on 'Add Task', and click 'Close'
                to close the window!
              </p>
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
                          <td>{task.explanation}</td>
                          <td>
                            {task.dueDate
                              ? task.dueDate.toISOString().slice(0, 10)
                              : "Not Set"}
                          </td>
                          <td>{task.hour || "Not Set"}</td>
                          <td>{task.duration}</td>
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
