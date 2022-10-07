import React from "react";
const education = [
  {
    title: "PhD Candidate",
    organization: "University of Thessaly",
    location: "Lamia, Greece",
    date: "2021 - Present",
    description: (
      <p className="text-muted">
        PhD Candidate in Computer Science at the Department of Informatics and
        Telecommunications of the University of Thessaly.
      </p>
    ),
    thesis: "",
  },
  {
    title: "MSc in Data Science",
    organization: "University of Peloponnese",
    location: "Lamia, Greece",
    date: "2019 - 2021",
    description: `MSc in Data Science at the Department of Informatics and Telecommunications of the University of Peloponnese in collaboration with the  the National Centre for Scientific Research “Demokritos”.`,
    thesis: (
      <p className="text-muted">
        Thesis:
        <a
          href="https://labs-repos.iit.demokritos.gr/MagCIL/theses/2021_Psallidas_Multimodal_summarization_of_user-generated_videos_from_wearable_cameras.pdf"
          target="_blank"
          rel="noreferrer"
        >
          "Multimodal summarization of user-generated videos from wearable
          cameras".
        </a>
      </p>
    ),
  },
  {
    title: "BSc in Computer Science",
    organization: "University of Thessaly",
    location: "Lamia, Greece",
    date: "2013 - 2018",
    description:
      "BSc in Computer Science at the Department of Informatics and Telecommunications of the University of Thessaly.",
    thesis: (
      <p className="text-muted">
        Thesis: "Big Data Management to achieve urban sustainabulity
        developement".
      </p>
    ),
  },
];

export default education;
