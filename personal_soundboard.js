// Array containing paths to sound files
var soundFiles = [
  'Media/Fun Projects/Soundboard/among-us-role-reveal-sound.mp3',
  'Media/Fun Projects/Soundboard/anime-wow-sound-effect.mp3',
  // Add more sound file paths
];

// Store references to playing audio elements
var playingSounds = {};

// Function to create a button for each sound file
function createSoundButtons() {
  var soundboard = document.getElementById('soundboard');
  if (!soundboard) {
    console.error('Soundboard element not found');
    return;
  }

  soundFiles.forEach(function(sound) {
    // Extract the file name by removing the directory path and '.mp3' extension
    var soundName = sound.substring(sound.lastIndexOf('/') + 1).replace('.mp3', '');

    // Replace dashes with spaces and convert to uppercase
    var formattedName = soundName.replace(/-/g, ' ').toUpperCase();

    // Create a new button element
    var button = document.createElement('button');
    button.innerText = formattedName; // Set the button text to the formatted name

    // Add an event listener to play the sound when the button is clicked
    button.addEventListener('click', function() {
      if (!playingSounds[sound]) { // Check if the sound is already playing
        var audio = new Audio(sound);
        playingSounds[sound] = audio; // Store the currently playing audio
        audio.play();

        // When the audio ends, remove it from the playingSounds object
        audio.addEventListener('ended', function() {
          delete playingSounds[sound];
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
      playingSounds[sound].pause(); // Pause the sound
      playingSounds[sound].currentTime = 0; // Reset the sound to the beginning
      delete playingSounds[sound]; // Remove from the playingSounds object
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

  var stopButton = document.createElement('button');
  stopButton.innerText = 'Stop All Sounds';
  stopButton.style.marginTop = '20px'; // Add some space above the button

  // Add event listener to stop all sounds
  stopButton.addEventListener('click', stopAllSounds);

  // Append the button to the soundboard section
  soundboard.appendChild(stopButton);
}

// Call the functions to create the buttons and stop all button when the page loads
createSoundButtons();
createStopAllButton();
