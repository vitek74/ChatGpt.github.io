// Retrieve the textarea and save button elements
const textArea = document.getElementById('text-area');
const saveButton = document.getElementById('save-btn');

// Add click event listener to the save button
saveButton.addEventListener('click', function() {
  // Retrieve the text from the textarea
  const text = textArea.value;
  
  // Save the text to localStorage with a unique key
  localStorage.setItem('notepad', text);
  
  // Display a confirmation message
  alert('Note saved successfully!');
});

// Check if there is a saved note in localStorage
if (localStorage.getItem('notepad')) {
  // Retrieve the saved note from localStorage
  const savedNote = localStorage.getItem('notepad');
  
  // Set the text of the textarea to the saved note
  textArea.value = savedNote;
}