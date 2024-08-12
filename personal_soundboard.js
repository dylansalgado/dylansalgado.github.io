// Path to the folder containing sound files
var folderPath = 'Media/Fun Projects/Random Noises/';
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
  // Add more sound file paths eventually
];

// Function to create a button for each sound file
function createSoundButtons() {
  var soundboard = document.getElementById('soundboard');

  soundFiles.forEach(function(sound) {
    // Extract the file name from the full path and remove the '.mp3' extension
    var soundName = sound.split('/').pop().replace('.mp3', '');

    // Create a new button element
    var button = document.createElement('button');
    button.innerText = soundName; // Set the button text to the sound name
    
    // Add an event listener to play the sound when the button is clicked
    button.addEventListener('click', function() {
      var audio = new Audio(sound);
      audio.play();
    });
    
    // Append the button to the soundboard section
    soundboard.appendChild(button);
  });
}

// Call the function to create the buttons when the page loads
createSoundButtons();;
