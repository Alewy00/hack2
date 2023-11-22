async function createEvent(event) {
  event.preventDefault();
  console.log("event start");
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const link = document.getElementById("link").value;

  const data = {
    title,
    description,
    date,
    link,
  };

  try {
    const response = await fetch("http://localhost:3000/events/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.message);
      window.location.href = "eventPage.html";
    } else {
      console.error("Error creating event:", response.statusText);
    }
  } catch (error) {
    console.error("Error during event creation:", error);
  }
}
