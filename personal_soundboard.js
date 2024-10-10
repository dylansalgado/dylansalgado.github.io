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
  'Media/Fun Projects/Random Noises/Excuse me I need your help.mp3',
  'Media/Fun Projects/Random Noises/gnome-woo-reverb.mp3',
  'Media/Fun Projects/Random Noises/goofy-ahh-car-horn-sound-effect.mp3',
  'Media/Fun Projects/Random Noises/jixaw-metal-pipe-falling-sound.mp3',
  'Media/Fun Projects/Random Noises/Ladies and Gentlemen we got him.mp3',
  'Media/Fun Projects/Random Noises/minecraft-villager-sound-effect.mp3',
  'Media/Fun Projects/Random Noises/pikmin-gcn.mp3',
  'Media/Fun Projects/Random Noises/roblox-death-sound.mp3',
  'Media/Fun Projects/Random Noises/skibidi-toilet.mp3',
  'Media/Fun Projects/Random Noises/vine-boom.mp3',
  'Media/Fun Projects/Random Noises/Wow Owen Wilson.mp3',
  'Media/Fun Projects/Random Noises/wrong-answer-sound-effect.mp3',
  // Add more sound file paths eventually
];

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
      var audio = new Audio(sound);
      audio.play();
    });
    
    // Append the button to the soundboard section
    soundboard.appendChild(button);
  });
}

// Call the function to create the buttons when the page loads
createSoundButtons();
