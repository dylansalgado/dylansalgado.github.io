var playingSounds = {};

// Fetch sound files from JSON and create sound buttons
fetch('Media/Fun Projects/Soundboard/sounds.json')
  .then(response => response.json())
  .then(soundFiles => {
    createSoundButtons(soundFiles);  // Pass the sound files to the button creation function
    createStopAllButton();  // Create "Stop All Sounds" button after the sound buttons
  })
  .catch(error => {
    console.error('Error fetching sound files:', error);
  });

// Function to create a button for each sound file
function createSoundButtons(soundFiles) {
  var soundboard = document.getElementById('soundboard');
  if (!soundboard) {
    console.error('Soundboard element not found');
    return;
  }

  // Loop through the dynamically loaded sound files
  soundFiles.forEach(function(sound) {
    var soundPath = 'Media/Fun Projects/Soundboard/' + sound; // Create full path from JSON

    // Extract the file name by removing the directory path and '.mp3' extension
    var soundName = sound.replace('.mp3', '').replace(/-/g, ' ').toUpperCase();

    // Create a new button element
    var button = document.createElement('button');
    button.innerText = soundName;

    // Add an event listener to play the sound when the button is clicked
    button.addEventListener('click', function() {
      if (!playingSounds[soundPath]) {  // Check if the sound is already playing
        var audio = new Audio(soundPath);
        playingSounds[soundPath] = audio;
        audio.play();

        // When the audio ends, remove it from the playingSounds object
        audio.addEventListener('ended', function() {
          delete playingSounds[soundPath];
        });
      }
    });

    // Append the button to the soundboard section
    soundboard.appendChild(button);
  });
}

// Function to stop all playing sounds
function stopAllSounds() {
  for (var sound in playingSounds) {
    if (playingSounds[sound]) {
      playingSounds[sound].pause();
      playingSounds[sound].currentTime = 0;  // Reset sound to the beginning
      delete playingSounds[sound];
    }
  }
}

// Create the "Stop All Sounds" button
function createStopAllButton() {
  var soundboard = document.getElementById('soundboard');
  if (!soundboard) {
    console.error('Soundboard element not found');
    return;
  }

  // Create a wrapper for the stop button
  var stopButtonContainer = document.createElement('div');
  stopButtonContainer.style.textAlign = 'center';  // Center the button

  // Create the stop button element
  var stopButton = document.createElement('button');

  // Add event listener to stop all sounds
  stopButton.addEventListener('click', stopAllSounds);

  // Append the stop button to the container
  stopButtonContainer.appendChild(stopButton);

  // Append the container to the soundboard section
  soundboard.appendChild(stopButtonContainer);
}
