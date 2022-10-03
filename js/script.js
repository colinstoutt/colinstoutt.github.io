const githubIcon = document.getElementById("github-contact");
const linkedInIcon = document.getElementById("linkedin-contact");
const contactLink = document.getElementById("contact-link");
const hoverAnimation = [githubIcon, linkedInIcon, contactLink];

hoverAnimation.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    githubIcon.style.opacity = "100";
    githubIcon.style.right = "14rem";
    githubIcon.style.transition = "all 0.5s";
    linkedInIcon.style.opacity = "100";
    linkedInIcon.style.right = "11rem";
    linkedInIcon.style.transition = "all 0.5s";
  });
  link.addEventListener("mouseout", function () {
    githubIcon.style.opacity = "0";
    githubIcon.style.right = "15rem";
    githubIcon.style.transition = "all 0.2s";
    linkedInIcon.style.opacity = "0";
    linkedInIcon.style.right = "15rem";
    linkedInIcon.style.transition = "all 0.2s";
  });
});
