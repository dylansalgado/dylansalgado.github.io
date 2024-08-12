document.addEventListener('DOMContentLoaded', function() {
  var resumeContentElement = document.getElementById('resume-content');
  var downloadLinkElement = document.getElementById('download-link');

  // Path to your resume text file
  var resumePath = 'Media/my_resume.docx';  // Update this path if needed

  // Fetch and display resume content
  fetch(resumePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.text();
    })
    .then(text => {
      resumeContentElement.textContent = text;  // Display text content
      downloadLinkElement.href = resumePath;     // Set the download link href
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      resumeContentElement.textContent = 'Failed to load resume content.';
    });
});
