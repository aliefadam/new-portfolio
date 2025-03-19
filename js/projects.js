const projects = [
  {
    id: 1,
    imageThumbnail: "/imgs/projects/wedding-1.png",
    title: "Wedding Package Website",
    description:
      "This site, designed and developed by me using React.js and TailwindCSS, focuses on providing comprehensive information about various wedding packages, supported by a gallery of wedding results as a source of inspiration. The site's elegant and professional design reflects creativity, while the goal is to provide clear guidance for brides-to-be to choose a wedding package that suits them.",
    images: ["/imgs/projects/wedding-2.png", "/imgs/projects/wedding-3.png"],
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/aliefadam/web-paket-nikah",
    demo: "https://hati-kita.netlify.app/",
  },
  {
    id: 2,
    imageThumbnail: "/imgs/projects/ticket-1.png",
    title: "Ticketing Management System",
    description:
      "This website, built with React.js for the frontend and Laravel for the backend, serves as a comprehensive ticketing management system designed to provide a seamless user experience. It offers a wide range of concert tickets, each accompanied by detailed event information, such as the venue, date, time, and performer details. The intuitive and user-friendly interface ensures easy navigation, allowing users to quickly browse and purchase tickets to their favorite events. With a fully responsive design, the platform guarantees a smooth browsing experience across all devices, making it the perfect solution for music enthusiasts to secure their concert tickets effortlessly.",
    images: ["/imgs/projects/ticket-1.png", "/imgs/projects/ticket-2.png"],
    tech: ["React", "Laravel", "Tailwind CSS"],
    github: "https://github.com/aliefadam/s-tix-react",
    demo: "https://s-ticket.online/",
  },
  {
    id: 3,
    imageThumbnail: "/imgs/projects/ecommerce-1.png",
    title: "E-Commerce Website",
    description:
      "This e-commerce website is a platform that provides a variety of quality second-hand goods, ranging from cabinets, tables, chairs, and various other furniture. Built using Laravel and TailwindCSS, this website offers a fast, secure, and convenient shopping experience with a modern and responsive look on various devices. With the support of payment gateway, users can make transactions easily and securely using various available payment methods. The website is designed to provide solutions for those looking for second-hand goods at affordable prices without compromising on quality.",
    images: [
      "/imgs/projects/ecommerce-1.png",
      "/imgs/projects/ecommerce-2.png",
    ],
    tech: ["Laravel", "Tailwind CSS"],
    github: "https://github.com/aliefadam/sentra-fix",
    demo: "https://sentrafix.com/",
  },
  {
    id: 4,
    imageThumbnail: "/imgs/projects/fitnes-1.png",
    title: "Wellness & Salon Website",
    description:
      "This website is a wellness and salon platform designed to make it easy for customers to book fitness classes and purchase various salon care products practically and efficiently. Built using Laravel and TailwindCSS, the website features a modern, intuitive, and responsive interface across multiple devices, ensuring a comfortable user experience. With an integrated booking system, members can easily schedule classes as needed, while the e-commerce feature allows direct purchase of treatment products. This website provides a complete solution for those who want to take care of themselves more easily and in an organized manner.",
    images: ["/imgs/projects/fitnes-1.png", "/imgs/projects/fitnes-2.png"],
    tech: ["Laravel", "Tailwind CSS"],
    github: "https://github.com/aliefadam/tangerine",
    demo: "https://tangerine.my.id/",
  },
];

let htmlProject = "";
projects.forEach((project, i) => {
  htmlProject += `
  <div
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="${i * 200}"
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 p-5">
    <img
      src="${project.imageThumbnail}"
      alt="${project.title}"
      class="w-full h-[230px] object-cover rounded-lg shadow-md"
    />
    <div class="mt-5">
      <h3 class="text-lg font-semibold mb-2">${project.title}</h3>
      <p class="text-gray-600 mb-4">${project.description.substring(
        0,
        70
      )}...</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${project.tech
          .map(
            (tech) =>
              `<span class="px-3 py-1.5 bg-gray-100 border border-white text-black text-xs rounded-full">${tech}</span>`
          )
          .join("")}
      </div>
      <button
        class="project-detail bg-[#0f0e17] text-sm mt-1 cursor-pointer text-white px-8 py-3 rounded-md inline-block transition duration-300 font-medium"
        data-project="${project.id}"
      >
        Lihat Detail <i class="fas fa-arrow-right ml-2"></i>
      </button>
    </div>
  </div>
  `;
});
document.getElementById("projects-container").innerHTML = htmlProject;

const projectButtons = document.querySelectorAll(".project-detail");
const modal = document.getElementById("project-modal");
const closeModal = document.getElementById("close-modal");

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectId = button.dataset.project;
    const project = projects.find((p) => p.id === parseInt(projectId));
    document.getElementById("modal-title").textContent = project.title;

    const content = `
        <div class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            ${project.images
              .map(
                (img) => `
                  <img
                    src="${img}"
                    alt="Project Screenshot"
                    class="rounded-lg w-full shadow-md h-[200px] object-cover"
                  />
                `
              )
              .join("")}
          </div>
          <p class="text-gray-600">${project.description}</p>
          <div class="flex flex-wrap gap-2">
            ${project.tech
              .map(
                (tech) => `
                  <span
                    class="px-3 py-1 bg-gray-100 text-sm rounded-full"
                  >
                    ${tech}
                  </span>
                `
              )
              .join("")}
          </div>
          <div class="flex gap-4">
            <a
              href="${project.demo}"
              target="_blank"
              class="bg-[#0f0e17] text-sm mt-1 cursor-pointer text-white px-8 py-3 rounded-md inline-block transition duration-300 font-medium"
            >
              Live Demo <i class="fas fa-external-link-alt ml-2"></i>
            </a>
            <a
              href="${project.github}"
              target="_blank"
              class="border border-[#0f0e17] text-[#0f0e17] hover:bg-gray-100 text-sm mt-1 cursor-pointer px-8 py-3 rounded-md inline-block transition duration-300 font-medium"
            >
              Source Code <i class="fab fa-github ml-2"></i>
            </a>
          </div>
        </div>
    `;

    document.getElementById("modal-content").innerHTML = content;
    modal.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
