function scrollToSection(event) {
    event.preventDefault();
    let sectionId = event.target.getAttribute("href");
    let section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }




  function showSection(event) {
    event.preventDefault();
    let sectionId = event.target.getAttribute("href");
    let section = document.querySelector(sectionId);
    if (section.style.display === "block") {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  }

  let links = document.querySelectorAll("nav a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", showSection);
  }



   // часы
   function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Format the time as HH:MM:SS
    var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  
    // Update the element with the current time
    document.getElementById('current-time').textContent = timeString;
  }
  
  // Call the updateTime function initially to set the time immediately
  updateTime();
  
  // Update the time every second (1000 milliseconds)
  setInterval(updateTime, 1000);
  
 
   // Call the displayTime function every 1 second
   setInterval(displayTime, 1000);