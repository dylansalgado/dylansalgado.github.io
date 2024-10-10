// Array containing paths to sound files
var soundFiles = [
  'Media/Fun Projects/Soundboard/among-us-role-reveal-sound.mp3',
  'Media/Fun Projects/Soundboard/anime-wow-sound-effect.mp3',
  'Media/Fun Projects/Soundboard/bad-to-the-bone.mp3',
  'Media/Fun Projects/Soundboard/bruh.mp3',
  'Media/Fun Projects/Soundboard/cave.mp3',
  'Media/Fun Projects/Soundboard/clash-royale-hog-rider.mp3',
  'Media/Fun Projects/Soundboard/classic-hurt.mp3',
  'Media/Fun Projects/Soundboard/cotton-eye-joe-nuggets.mp3',
  'Media/Fun Projects/Soundboard/creeper-explosion.mp3',
  'Media/Fun Projects/Soundboard/discord-notification.mp3',
  'Media/Fun Projects/Soundboard/downer-noise.mp3',
  'Media/Fun Projects/Soundboard/error.mp3',
  'Media/Fun Projects/Soundboard/excuse-me-i-need-your-help.mp3',
  'Media/Fun Projects/Soundboard/gnome-woo-reverb.mp3',
  'Media/Fun Projects/Soundboard/goofy-ahh-car-horn-sound-effect.mp3',
  'Media/Fun Projects/Soundboard/jixaw-metal-pipe-falling-sound.mp3',
  'Media/Fun Projects/Soundboard/ladies-and-gentlemen-we-got-him.mp3',
  'Media/Fun Projects/Soundboard/minecraft-villager-sound-effect.mp3',
  'Media/Fun Projects/Soundboard/pikmin-gcn.mp3',
  'Media/Fun Projects/Soundboard/roblox-death-sound.mp3',
  'Media/Fun Projects/Soundboard/skibidi-toilet.mp3',
  'Media/Fun Projects/Soundboard/vine-boom.mp3',
  'Media/Fun Projects/Soundboard/wow-owen-wilson.mp3',
  'Media/Fun Projects/Soundboard/wrong-answer-sound-effect.mp3',
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
