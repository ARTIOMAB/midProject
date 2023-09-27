import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="home-page">
      <h2 className="main-heading">
        welcome to ScheduPro professional schedule system
      </h2>
      <div className="contant">
        <b>Scedualpro</b> is a smart and easy way to manage your daily tasks and
        appointments. Whether you need to plan your work, study, or personal
        life, <b>Scedualpro</b> helps you create and organize your schedule in
        minutes. You can also sync your schedule with your calendar, share it
        with others, and get reminders and notifications. With <b>Scedualpro</b>
        , you can save time and energy, and focus on what matters most. Try it
        today and see the difference!
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswPSgdEtr_nEeCBhX3rT6L2gLUcmxGz81N2_RWExK2LHYbfvZlZMLS3mYRjdDPZV-pJk&usqp=CAU"
        className="home-image"
      />
    </main>
  );
}

export default HomePage;
