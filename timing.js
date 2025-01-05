document.addEventListener("DOMContentLoaded", () => {
    const hoursTimetable = document.getElementById("hours-timetable");
    const todayTimetable = document.getElementById("today-timetable");

    const hours = [
        { day: "Monday", time: "8:00 AM - 6:00 PM" },
        { day: "Tuesday", time: "8:00 AM - 6:00 PM" },
        { day: "Wednesday", time: "8:00 AM - 6:00 PM" },
        { day: "Thursday", time: "8:00 AM - 6:00 PM" },
        { day: "Friday", time: "8:00 AM - 6:00 PM" },
        { day: "Saturday", time: "9:00 AM - 4:00 PM" },
        { day: "Sunday", time: "Closed" },
    ];

    const today = new Date().getDay();
    const todayHours = hours[today === 0 ? 6 : today - 1].time;

    hours.forEach(hour => {
        const entry = document.createElement("p");
        entry.textContent = `${hour.day}: ${hour.time}`;
        hoursTimetable.appendChild(entry);
    });

    todayTimetable.textContent = `Today: ${todayHours}`;
});
 