async function getEvents() {
  try {
    const response = await fetch("http://localhost:3000/events/all");
    const result = await response.json();
    // console.log("mainpage =>" + result);
    if (response.ok) {
      const events = result.events;
      displayEvents(events);
    }
  } catch (error) {
    console.error("Error getting events:", error);
  }
}

function displayEvents(events) {
  const eventsContainer = document.getElementById("eventsCards");
  // eventsContainer.innerHTML = "";

  events.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("eventCard");
    eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p class="description">Description: ${event.description}</p>
            <p class="date">Date: ${event.date.split("T")[0]}</p>
            <a class="link" href=${event.link} target="_blank">Link</a>
          `;
    eventsContainer.appendChild(eventCard);
  });
}
