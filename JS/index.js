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
   const now = new Date();

   // Get the date of the 25th of the current month
   const targetDate = new Date(now.getFullYear(), now.getMonth(), 27);
 
   // Calculate the difference between the target date and the current date
   const diff = targetDate - now;
 
   // Convert the difference to days
   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
 
   // Update the countdown timer on the page
   document.getElementById("countdown").innerHTML = days + " дней";
 
   // Function to display the current time
   function displayTime() {
     const date = new Date();
     const time = date.toLocaleTimeString();
     document.getElementById("time").innerHTML = time;
   }
 
   // Call the displayTime function every 1 second
   setInterval(displayTime, 1000);