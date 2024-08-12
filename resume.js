document.addEventListener('DOMContentLoaded', function() {
  var resumeContentElement = document.getElementById('resume-content');
  var downloadLinkElement = document.getElementById('download-link');

  // Path to your resume HTML file
  var resumePath = 'Media/Fun Projects/Resume/my_resume.html';  // Update this path if needed

  // Fetch and display resume content
  fetch(resumePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.text();
    })
    .then(text => {
      resumeContentElement.innerHTML = text;  // Insert HTML content
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      resumeContentElement.textContent = 'Failed to load resume content.';
    });

  // Set the download link href
  downloadLinkElement.href = 'Media/Fun Projects/Resume/my_resume.docx'; // Update this path if needed
});
