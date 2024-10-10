// Function to fetch sound files from the sounds.json file and create buttons
function createSoundButtons() {
  var soundboard = document.getElementById('soundboard');
  if (!soundboard) {
    console.error('Soundboard element not found');
    return;
  }

  // Fetch sound files from the sounds.json file
  fetch('Media/Fun Projects/Soundboard/sounds.json')
    .then(response => response.json())
    .then(soundFiles => {
      soundFiles.forEach(function(sound) {
        // Extract the file name by removing the '.mp3' extension
        var soundName = sound.replace('.mp3', '').replace(/-/g, ' ').toUpperCase();

        // Create a new button element
        var button = document.createElement('button');
        button.innerText = soundName; // Set the button text to the formatted name
        
        // Add an event listener to play the sound when the button is clicked
        button.addEventListener('click', function() {
          var audio = new Audio('Media/Fun Projects/Soundboard/' + sound);
          audio.play();
        });
        
        // Append the button to the soundboard section
        soundboard.appendChild(button);
      });
    })
    .catch(error => console.error('Error fetching sound files:', error));
}

// Call the function to create the buttons when the page loads
createSoundButtons();
