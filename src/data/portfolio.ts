import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Shiven Shiv Senkumar",
    "title": "Electronics and Communication Engineering Student",
    "email": "shivensen5@gmail.com",
    "phone": "+91-9284708188",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "location": "Vellore, India",
    "summary": "Aspiring electronics and communication engineer with a strong foundation in design and simulation of antennas for wireless communications and expertise in data visualization. Proficient in developing insights using tools like Tableau and Power BI to drive strategic decision-making."
  },
  "experience": [
    {
      "title": "Outreach Team Member",
      "company": "Entrepreneurship Cell (VIT)",
      "dates": "Jun–Jul 2024",
      "description": "Spearheaded outreach initiatives to local colleges and corporate sponsors to promote the annual fest and secure funding.",
      "highlights": [
        "Collaborated with 10+ colleges to diversify participation, increasing external registrations by 30%."
      ]
    }
  ],
  "education": [
    {
      "degree": "B. Tech in Electronics and Communication Engineering",
      "institution": "Vellore Institute of Technology, Vellore",
      "years": "Sep 2022-Jul 2026",
      "gpa": "8.32"
    }
  ],
  "skills": {
    "RF & Antenna Design": [
      "Ansys HFSS",
      "5G Technology",
      "Wireless Communications",
      "Meta Surface Design"
    ],
    "Data Visualization": [
      "Tableau",
      "Power BI",
      "Dashboard Development",
      "Data Analysis"
    ],
    "Engineering Skills": [
      "Simulation Design",
      "Technical Documentation",
      "Performance Analysis"
    ],
    "Leadership & Communication": [
      "Team Collaboration",
      "Outreach Initiatives",
      "Stakeholder Engagement"
    ]
  },
  "projects": [
    {
      "name": "Design and analysis of filtering antenna for wireless communication",
      "description": "Designed and simulated an integrated filtering antenna for 5G sub-6 GHz applications, achieving a resonant frequency of 4.36 GHz with a 31% fractional bandwidth and stable gain of 2.3 dB using Ansys HFSS.",
      "technologies": [
        "Ansys HFSS"
      ],
      "link": "LINK",
      "github": ""
    },
    {
      "name": "Designed and analysed a high-gain meta surface-based filtering antenna for next-generation wireless systems",
      "description": "Pioneered a compact filter antenna design by integrating a 4x4 meta surface layer and defected ground structure (DGS), achieving a wide bandwidth of 5.45-6.9 GHz and a high peak gain of 7.9 dB.",
      "technologies": [
        "Ansys HFSS"
      ],
      "link": "LINK",
      "github": ""
    },
    {
      "name": "IPL Data Visualization and Analysis using Tableau",
      "description": "Built an interactive Tableau dashboard to evaluate IPL match data, assessing team performance, player metrics, and seasonal trends.",
      "technologies": [
        "Tableau"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Sales Performance & Housing Market Review using Power BI",
      "description": "Designed an interactive Power BI dashboard to analyse sales trends and housing market dynamics across regions, uncovering actionable insights.",
      "technologies": [
        "Power BI"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "split",
  "experience": "timeline",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "slate"
};
