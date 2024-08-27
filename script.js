let projectCount = 1;
let certificationCount = 1;
let linkedinCount = 1;

// Add new project fields dynamically
document.getElementById('add-project').addEventListener('click', function() {
  const projectSection = document.getElementById('project-section');
  const newProject = `
    <label for="project-title-${projectCount}">Project Title:</label>
    <input type="text" id="project-title-${projectCount}" name="project-title-${projectCount}" placeholder="Project title" required>

    <label for="project-desc-${projectCount}">Project Description:</label>
    <textarea id="project-desc-${projectCount}" name="project-desc-${projectCount}" placeholder="Describe your project" required></textarea>
  `;
  projectSection.insertAdjacentHTML('beforeend', newProject);
  projectCount++;
});

// Add new certification fields dynamically
document.getElementById('add-certification').addEventListener('click', function() {
  const certificationsSection = document.getElementById('certifications');
  const newCertification = `
    <label for="certification-${certificationCount}">Certification:</label>
    <input type="text" id="certification-${certificationCount}" name="certification-${certificationCount}" placeholder="Enter certification">
  `;
  certificationsSection.insertAdjacentHTML('beforeend', newCertification);
  certificationCount++;
});

// Add new LinkedIn URL fields dynamically
document.getElementById('add-linkedin').addEventListener('click', function() {
  const linkedinSection = document.getElementById('linkedin-section');
  const newLinkedin = `
    <label for="linkedin-${linkedinCount}">LinkedIn URL:</label>
    <input type="text" id="linkedin-${linkedinCount}" name="linkedin-${linkedinCount}" placeholder="Enter LinkedIn URL">
  `;
  linkedinSection.insertAdjacentHTML('beforeend', newLinkedin);
  linkedinCount++;
});

// Toggle sections based on user input
document.getElementById('experience-toggle').addEventListener('change', function() {
  const experienceSection = document.getElementById('experience-section');
  experienceSection.style.display = this.value === 'yes' ? 'block' : 'none';
});

document.getElementById('linkedin-toggle').addEventListener('change', function() {
  const linkedinSection = document.getElementById('linkedin-section');
  linkedinSection.style.display = this.value === 'yes' ? 'block' : 'none';
});

// Generate portfolio dynamically
document.getElementById('portfolio-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const bio = document.getElementById('bio').value;
  const college = document.getElementById('college').value;
  const techStack = document.getElementById('tech-stack').value;
  const experienceToggle = document.getElementById('experience-toggle').value;
  const experience = experienceToggle === 'yes' ? document.getElementById('experience').value : '';
  const projectTimeline = document.getElementById('project-timeline').value;

  let certifications = '';
  for (let i = 0; i < certificationCount; i++) {
    const cert = document.getElementById(`certification-${i}`)?.value;
    if (cert) {
      certifications += `<li>${cert}</li>`;
    }
  }

  let linkedins = '';
  for (let i = 0; i < linkedinCount; i++) {
    const linkedin = document.getElementById(`linkedin-${i}`)?.value;
    if (linkedin) {
      linkedins += `<li><a href="${linkedin}" target="_blank">${linkedin}</a></li>`;
    }
  }

  let portfolioContent = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>College:</strong> ${college}</p>
    <p><strong>Tech Stack:</strong> ${techStack}</p>
    <p><strong>Bio:</strong> ${bio}</p>
    <p><strong>Experience:</strong> ${experience}</p>
    <p><strong>Project Timeline:</strong> ${projectTimeline}</p>
    <h4>Projects</h4>
  `;

  // Loop through all the projects
  for (let i = 0; i < projectCount; i++) {
    const projectTitle = document.getElementById(`project-title-${i}`).value;
    const projectDesc = document.getElementById(`project-desc-${i}`).value;
    portfolioContent += `<h5>${projectTitle}</h5><p>${projectDesc}</p>`;
  }

  if (certifications) {
    portfolioContent += `<h4>Certifications</h4><ul>${certifications}</ul>`;
  }

  if (linkedins) {
    portfolioContent += `<h4>Linked
