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

        // Create a new div to hold the button and the label
        var soundContainer = document.createElement('div');
        soundContainer.classList.add('sound-container'); // For styling

        // Create the button element
        var button = document.createElement('button');
        button.classList.add('sound-button'); // For styling
        button.innerText = ''; // Clear any inner text (visual button only)

        // Add an event listener to play the sound when the button is clicked
        button.addEventListener('click', function() {
          var audio = new Audio('Media/Fun Projects/Soundboard/' + sound);
          audio.play();
        });

        // Create the label below the button
        var label = document.createElement('p');
        label.classList.add('sound-label'); // For styling
        label.innerText = soundName;

        // Append the button and label to the container
        soundContainer.appendChild(button);
        soundContainer.appendChild(label);

        // Append the container to the soundboard section
        soundboard.appendChild(soundContainer);
      });
    })
    .catch(error => console.error('Error fetching sound files:', error));
}

// Call the function to create the buttons when the page loads
createSoundButtons();
