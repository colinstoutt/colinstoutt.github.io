# Porfolio

## Project Schedule

| Day   | Deliverable                                  | Status   |
| ----- | -------------------------------------------- | -------- |
| Day 1 | Project Description                          | Complete |
| Day 2 | Wireframes / Priority Matrix / Timeline      | Complete |
| Day 3 | Core Application Structure (HTML, CSS, etc.) | Complete |
| Day 4 | MVP & Bug Fixes                              | Complete |
| Day 5 | Final Touches                                | Complete |
| Day 6 | Present                                      | Complete |

## Wireframes

<img src='wireframes/portfolio-wireframe-desktop.jpg' width='600px'>

<img src='wireframes/portfolio-wireframe-mobile.jpg' width='300px'>

## Time/Priority Matrix

#### MVP

| Component               | Priority | Estimated Time | Actual Time |
| ----------------------- | :------: | :------------: | :---------: |
| Project Previews        |    H     |      3hr       |     3hr     |
| Regular Nav             |    H     |     30min      |     1hr     |
| Other sections and flex |    M     |      3hr       |     3hr     |
| Javascript animation    |    H     |      3hr       |     1hr     |
| Responsive              |    H     |      3hr       |     3hr     |
| Social Media Icons      |    L     |      1hr       |     1hr     |
| Total                   |    H     |    13.5hrs     |    12hrs    |

#### PostMVP

| Component            | Priority | Estimated Time | Actual Time |
| -------------------- | :------: | :------------: | :---------: |
| Dark mode/light mode |    L     |      3hr       |     DNF     |
| Direct Contact form  |    H     |      3hr       |     DNF     |
| Hover effects        |    L     |     40min      |     1hr     |
| TOTAL                |    L     |     6.66hr     |     1hr     |

## Outline of content

### Nav

Three anchor tags. About, Projects, and Contact.

The contact link will have two social logos animate out from the side on hover.

If I have time I will try to impliment a dark mode/light mode switch.

### About section

Where I'm from, a brand statment of some kind.
Relevent skills

### Projects section

A z-grid layout of my projects with titles and descriptions explaing what the project is, why I did it, and what technologies were used.

Each preview will link directly to its github repo.

### Contact section

This will be a functional contact form that will send an email straight to my account.
If I can't get this to work I will create a card with my contact information.

Add clickable logo links to both my Github and my LinedIn.

## Technologies used

HTML

CSS

JS

## Additional Libraries Used

## Code Snippet

This code snippet is for my little icon animation for when the user hovers over the contact link.

```
const githubIcon = document.getElementById("github-contact");
const linkedInIcon = document.getElementById("linkedin-contact");
const contactLink = document.getElementById("contact-link");
const hoverAnimation = [githubIcon, linkedInIcon, contactLink];

hoverAnimation.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    githubIcon.style.opacity = "100";
    githubIcon.style.right = "13.5rem";
    githubIcon.style.transition = "all 0.2s";
    linkedInIcon.style.opacity = "100";
    linkedInIcon.style.right = "10.5rem";
    linkedInIcon.style.transition = "all 0.2s";
  });
  link.addEventListener("mouseout", function () {
    githubIcon.style.opacity = "0";
    githubIcon.style.right = "15rem";
    githubIcon.style.transition = "all 0.1s";
    linkedInIcon.style.opacity = "0";
    linkedInIcon.style.right = "15rem";
    linkedInIcon.style.transition = "all 0.1s";
  });
});

```

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.
