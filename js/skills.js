const skills = [
  {
    name: "React.js",
    icon: "fab fa-react",
  },
  {
    name: "Laravel",
    icon: "fab fa-laravel",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
  },
  {
    name: "PHP",
    icon: "fab fa-php",
  },
  {
    name: "HTML5",
    icon: "fab fa-html5",
  },
  {
    name: "CSS3",
    icon: "fab fa-css3-alt",
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
  },
  {
    name: "SQL",
    icon: "fas fa-database",
  },
];

let html = "";

skills.forEach((skill, i) => {
  html += `
  <div class="text-center" 
    data-aos="fade-down"
    data-aos-duration="1000"
    data-aos-delay="${i * 200}">
    <div class="bg-[#e67b05] rounded-lg p-6 mb-4">
      <i class="${skill.icon} text-4xl text-white"></i>
    </div>
    <h3 class="font-medium text-white">${skill.name}</h3>
  </div>
  `;
});

document.getElementById("skills-container").innerHTML = html;
