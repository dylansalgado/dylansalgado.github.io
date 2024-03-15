// Array containing paths to sound files
var soundFiles = [
  'Media/Fun Projects/Random Noises/among-us-role-reveal-sound.mp3',
  'Media/Fun Projects/Random Noises/anime-wow-sound-effect.mp3',
  'Media/Fun Projects/Random Noises/bad-to-the-bone.mp3',
  'Media/Fun Projects/Random Noises/bruh.mp3',
  'Media/Fun Projects/Random Noises/cave.mp3',
  'Media/Fun Projects/Random Noises/clash-royale-hog-rider.mp3',
  'Media/Fun Projects/Random Noises/classic-hurt.mp3',
  'Media/Fun Projects/Random Noises/cotton-eye-joe-nuggets.mp3',
  'Media/Fun Projects/Random Noises/creeper-explosion.mp3',
  'Media/Fun Projects/Random Noises/discord-notification.mp3',
  'Media/Fun Projects/Random Noises/downer-noise.mp3',
  'Media/Fun Projects/Random Noises/error.mp3',
  'Media/Fun Projects/Random Noises/gnome-woo-reverb.mp3',
  'Media/Fun Projects/Random Noises/goofy-ahh-car-horn-sound-effect.mp3',
  'Media/Fun Projects/Random Noises/jixaw-metal-pipe-falling-sound.mp3',
  'Media/Fun Projects/Random Noises/minecraft-villager-sound-effect.mp3',
  'Media/Fun Projects/Random Noises/pikmin-gcn.mp3',
  'Media/Fun Projects/Random Noises/roblox-death-sound.mp3',
  'Media/Fun Projects/Random Noises/skibidi-toilet.mp3',
  'Media/Fun Projects/Random Noises/vine-boom.mp3',
  'Media/Fun Projects/Random Noises/wrong-answer-sound-effect.mp3',
  // Add more sound eventually
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
