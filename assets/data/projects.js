export const projects = [
  {
    title: "Interviewy",
    summary:
      "Interviewy provides jobseekers an accessible environment where they can practice their interview skills at any time.",
    description: `<p>
                            Developed with a team of three in <b>36 hours</b> for <b>DeltaHacks 2022</b>. Won the <b>Best Use of Assembly AI</b> category.
                        </p>
                        <p>
                            Interviewy is an <b>Artificial Intelligence</b> based interface that allows users to practice their interview skills by providing them an analysis of
                            their video recorded interview based on their selected interview question. Users can reflect on their confidence levels and covered topics by 
                            selecting a specific time-stamp in their report.
                        </p>
                        <p>
                            An abundance of qualified applicants lose their chance to secure their dream job simply because they are unable to effectively present their
                            knowledge and skills when it comes to the interview. The transformation of interviews into the virtual format due to the Covid-19 pandemic has
                            created many challenges for the applicants, especially students as they have reduced access to in-person resources where they could develop their 
                            interview skills.
                        </p>
                        <p>
                            This Interface was built using the <b>MERN stack</b>. In the backend we used the AssemblyAI APIs for monitoring the confidence levels and covered topics.
                        </p>`,
    tools: ["React", "Express", "MongoDB", "Node", "Assembly AI"],
    githubRepoURL: "https://github.com/faizahsayyid/deltahacks2022",
    otherLinks: [],
    video: {
      path: "assets/videos/interviewy.mov",
      width: "640",
      height: "320",
    },
    highlight: true,
  },
  {
    title: "STDetector",
    summary:
      "STDetector is a social media esque platform that decreases the stigma of sharing STI test results with sexual partners.",
    description: `<p>
                            Developed with a team of three in <b>36 hours</b> for <b>QWER Hacks 2022</b>. Won the <b>Best Health and Wellness Hack</b> and <b>Most Innovative Hack</b> categories.
                        </p>
                        <p>
                            STDetector is <b>mobile app</b> that facilitates the sharing of sexual health information among people. Upon signing up, you can enter your sexual health information
                            and upload pictures of your lab tests as proof. Once that’s locked in, you can search for your partner’s username and start a connection request.
                            Upon accepting your request, you and your partner will exchange sexual health information at a glance.
                        </p>
                        <p>
                            Sexually transmitted infections are very common and costly to a nation’s health and economy. 1 in 5 people in the US have an STI and almost half
                            of new STIs were among youth aged 18-24. Additionally, most STIs have no signs of symptoms. The only way to know is to get tested. Not to mention,
                            once you know your status, you might want to share that information with prospective partners.
                        </p>`,
    tools: ["React-Native", "Javascript", "Airtable"],
    otherLinks: [
      { link: "https://devpost.com/software/stdetector", name: "Devpost" },
    ],
    video: {
      path: "assets/videos/stdetector.mp4",
      width: "600",
      height: "400",
    },
    highlight: true,
  },
  {
    title: "#ClimateChange",
    summary:
      "#ClimateChange uses Twitter data to create a visualization of the distribution of tweets surrounding climate change in the United States over time.",
    description: `<p>
                            <b>Project Question:</b> What can Twitter tell us about public conversations on climate change in the United States?
                        </p>
                        <p>
                            With a team of four, we processed and analyzed a Twitter data set from over the years, to assess where in the United States
                            people talk most about climate change-related events, and plot the processed data graph looking at specific keywords.
                        </p>
                        <p>
                            We filtered the Twitter data by geographical locations and dates using <b>twarc</b> and <b>Twitter API</b>, as well as
                            by hashtags and keywords using <b>nltk</b>. We used <b>plotly</b> and <b>dash</b> to display the data. Viewers/Users of
                            the graph are able to input a certain climate related hashtag or keyword to see the popularity of that topic in different
                            states. There is also be a timeline slider below the United States map, allowing the users to navigate the popularity of
                            this topic by date.
                        </p>`,
    tools: ["Python", "Twitter API", "twarc", "nltk"],
    githubRepoURL: "https://github.com/faizahsayyid/CSC110_Project",
    otherLinks: [],
    video: {
      path: "assets/videos/climate-change.mov",
      width: "640",
      height: "320",
    },
    highlight: false,
  },
  {
    title: "Slow Fashion",
    summary:
      "A website promoting sustainable fashion practices and brands, created for the SheHacks 2021 hackathon.",
    description: `<p>Created in <b>36 hours</b>.</p>
                        <p>
                            Includes information about the effects of fast fashion on the environment, ways to practice sustainable
                            fashion in your daily life, and promotion of sustain brands as an alternative to fast fashion.
                        </p>`,
    tools: ["HTML", "CSS", "JavaScript", "Unity", "C#"],
    githubRepoURL: "https://github.com/faizahsayyid/shehacks-submission",
    otherLinks: [
      {
        link: "https://faizahsayyid.github.io/shehacks-submission/FINAL%20WEBSITE%202/FINAL%20WEBSITE/main.html",
        name: "See Website",
      },
    ],
    video: {
      path: "assets/videos/slow-fashion.mov",
      width: "720",
      height: "355",
    },
    highlight: false,
  },
  {
    title: "Slime Climb",
    summary:
      "A 2D platformer game made during the University of Toronto Game Design and Development Club (UTGDDC) Fall 2020 Game Jam.",
    description: `<p>Created in <b>72 hours</b>.</p>
                        <p>
                            The main character of this tower climbing game is a slime creature who uses its mass to propel themself upward,
                            or to attack enemy ghosts. The main game mechanic revolves around the theme of the game jam, <b>"sacrifice"</b>. 
                            Players must guide slime dude to the top of the tower in order to win. They can sacrifice parts of their size
                            and mass, in order to jump higher, or to attack enemies. However, if they lose too much mass, the game will end.
                        </p>`,
    tools: ["Unity", "C#"],
    githubRepoURL: "https://github.com/faizahsayyid/SlimeClimbScripts",
    otherLinks: [
      { link: "https://fy-fy.itch.io/slime-climb", name: "Download" },
      { link: "https://i.simmer.io/@fyfy/slimb-climb", name: "Play Game" },
    ],
    video: {
      path: "assets/videos/slime-climb.mov",
      width: "760",
      height: "474",
    },
    highlight: true,
  },
];
