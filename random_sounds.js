// Array containing paths to sound files
var soundFiles = [
  'Media/Fun Projects/Random Noises/sound1.mp3',
  'Media/Fun Projects/Random Noises/sound2.mp3',
  'Media/Fun Projects/Random Noises/sound3.mp3',
  // Add more sound
];

// Function to play a random sound from the soundFiles array
function playRandomSound() {
  // Generate a random index to select a sound from the array
  var randomIndex = Math.floor(Math.random() * soundFiles.length);
  // Create an Audio object with the selected sound file
  var audio = new Audio(soundFiles[randomIndex]);
  // Play the selected sound
  audio.play();
}

// Function to play random sounds at random intervals
function playRandomSounds() {
  // Generate a random interval between 50 milliseconds and 10 seconds
  var randomInterval = Math.random() * (10000 - 50) + 50; // Random number between 50 and 10000 milliseconds
  // Call playRandomSound after the random interval
  setTimeout(function() {
    playRandomSound();
    // Call playRandomSounds again recursively to play the next random sound
    playRandomSounds();
  }, randomInterval);
}

// Call the playRandomSounds function to start playing random sounds
playRandomSounds();
