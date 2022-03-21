/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import  i18next  from "./assets/locale/i8n";


// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chris Watson",
  title: i18next.t("greeting"),
  subTitle1: emoji(
    "🎮 Game designer with a professional and personal passion for all things gaming. "
  ) ,
  subTitle2: emoji(
    "🗾 Based in Osaka, Japan "
  ),
  subTitle3: emoji(
    "💼 Actively looking for opportunities."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/chrysostom-watson-631a55163/?originalSubdomain=jp",
  gmail: "chrysostom.watson@gmail.com",
  twitter: "https://twitter.com/elementart_",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "2+ years of experience in game design, specifically : ",
  skills: [
    emoji(
      "⚡ Game design documentation"
    ),
    emoji("⚡ System design and math sheets"),
    emoji("⚡ Game flow, wireframing & prototyping"),
    emoji("⚡ Storyboarding & conceptualization"),
    emoji("⚡ User experience and sound design"),
    emoji(
      "⚡ Game production and team management."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bachelor’s Degree in Engineering - Mechatronics",
      logo: require("./assets/images/mitelogo.png"),
      subHeader: "Mangalore Institute of Technology and Engineering",
      duration: "2014-2018",
      desc: "A four-year bachelor’s program where I studied various branches of mechanical, electronics, and computer engineering. Some relevant subjects were Advanced C Programming, Artificial Intelligence, Computer Graphics, and Ergonomics.",
      descBullets: [
        
      ]
    },
    {
      schoolName: "Japanese Language Proficiency Test - N2 ",
      logo: require("./assets/images/sigmalogo.png"),
      subHeader: "Seigan Japanese Language School, Osaka",
      duration: "2021-2022",
      desc: "Attained within 1.5 years of study"
    },
    {
      schoolName: "Lean Six Sigma - Green Belt ",
      logo: require("./assets/images/n2logo.png"),
      subHeader: "Binghamton University - SUNY",
      duration: "2020",
      
      descBullets:[
        "Certified Green Belt, scored highest at the university in my year.",
        "Also previously attained the Yellow Belt"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Game Designer",
      company: "Juego Studios",
      companylogo: require("./assets/images/juegoLogo.png"),
      date: "Jun 2019 – Nov 2020",
      desc: "In addition to the responsibilities of game design and planning, I also took up mentorship as Lead for junior game designers",
      descBullets: [
        "Deep interaction with team leads and members of the Programming, Art, Testing, and Business departments.",
        "Supervision and responsibility of 3 Junior Game Designers, overseeing their work and facilitating communication between other departments.",
        "Higher involvement with management and project stakeholders.",
        "Game design management using tools like JIRA and Redmine."
      ]
    },
    {
      role: "Game Designer",
      company: "Juego Studios",
      companylogo: require("./assets/images/juegoLogo.png"),
      date: "Jun 2018 – Jun 2019",
      desc: "As a game planner, I created Game Design Documents, wireframes, concept and pitch documents, and worked on balancing and level design. Additionally, I also worked on UI/UX, game audio, and end-user testing. ",
      descBullets: [
        "Creation of GDD, math sheets, level design, and storyboards.",
        "Interactive wireframes and prototypes for game flow and user experience using tools like Adobe XD.",
        "Game audio design starting from sound lists, to mixing audio using Audacity and FL Studio.",
        "End-user testing to ensure the game follows the vision."
      ]
    },
    {
      role: "Associate Game Producer",
      company: "Juego Studios",
      companylogo: require("./assets/images/juegoLogo.png"),
      date: "Jan 2018 – Jun 2018",
      desc: "Worked with all departments of the studio to ensure smooth flow of the game development process. Being an internship role, I was able to learn and grow rapidly in a short span of time due to being involved in all the various processes of game development. At the end of the internship, I was transferred to the Game Design department to make best use of my creative and design skills."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Past Projects",
  subtitle: "Stuff I've Worked On",
  projects: [
    {
      image: require("./assets/images/game1.jpg"),
      projectName: "School of Dragons",
      projectDesc: "A mobile RPG game based on the acclaimed ‘How to Train Your Dragon’ movie series.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.schoolofdragons.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/game2.jpg"),
      projectName: "Raids of Glory",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/game3.jpg"),
      projectName: "Medals of War",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },{
      image: require("./assets/images/game4.jpg"),
      projectName: "Coin Kings",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/game5.jpg"),
      projectName: "Tribal Ludo",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Qualifications and stuff",

  achievementsCards: [
    {
      title: "Bachelor's Degree in Engineering - Mechatronics @ Mangalore Institute of Technology & Engineering",
      subtitle:
        "A four-year bachelor/’s program where I studied various branches of mechanical, electronics, and computer engineering. Some relevant subjects were Advanced C Programming, Artificial Intelligence, Computer Graphics, and Ergonomics.",
      image: require("./assets/images/mitelogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
          name: "Award Letter",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
      ]
    },
    {
      title: "Lean Six Sigma Green Belt",
      subtitle:
        "Binghamton University",
      image: require("./assets/images/binghamton.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
          name: "Award Letter",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Come say hi",
  number1: "(+81) 070-1409-5834 ",
  number2: "(+91) 9620113298 ",
  email_address: "chrysostom.watson@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "elementart_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
