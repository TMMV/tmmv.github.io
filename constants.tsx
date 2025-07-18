import React from 'react';
import { TimelineEventItem, EventCategory } from './types';

const WorkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ProjectIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const EducationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7.5m0-7.5l-6-3 6 3 6-3-6 3zm0 7.5V14" />
  </svg>
);

const LifeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 8.09l-3.82 3.82-3.82-3.82 3.82-3.82 3.82 3.82z" />
    </svg>
);

export const TIMELINE_DATA: TimelineEventItem[] = [
  {
    id: 1,
    category: EventCategory.WORK,
    date: 'Jan 2023 - Present',
    title: 'Senior Frontend Engineer',
    subtitle: 'Innovate Inc.',
    description: [
      'Led the development of a new design system using React and Storybook, improving developer efficiency by 40%.',
      'Architected and implemented a performant, server-side rendered public-facing website, boosting SEO scores by 25 points.',
      'Mentored junior engineers, conducted code reviews, and championed best practices for testing and accessibility.'
    ],
    icon: WorkIcon,
    link: 'https://example.com',
  },
  {
    id: 2,
    category: EventCategory.PROJECT,
    date: 'Oct 2022',
    title: 'Personal Portfolio Website',
    subtitle: 'Side Project',
    description: [
      'Designed and built this very website you are looking at!',
      'Utilized React, TypeScript, and Tailwind CSS to create a responsive and visually engaging timeline.',
      'Focused on clean code, component-based architecture, and a great user experience.'
    ],
    icon: ProjectIcon,
    link: '#',
  },
  {
    id: 3,
    category: EventCategory.WORK,
    date: 'Jun 2020 - Dec 2022',
    title: 'Frontend Developer',
    subtitle: 'Creative Solutions LLC',
    description: [
      'Developed and maintained client-facing web applications using Angular and RxJS.',
      'Collaborated with UI/UX designers to translate wireframes and mockups into functional, pixel-perfect user interfaces.',
      'Improved application load times by 30% through code splitting and performance optimization techniques.'
    ],
    icon: WorkIcon,
  },
  {
    id: 6,
    category: EventCategory.LIFE,
    date: 'August 2020',
    title: 'Moved to a New City',
    subtitle: 'San Francisco, CA',
    description: [
        'Relocated to pursue new career opportunities and experience life on the West Coast.',
        'A major life decision that opened up new personal and professional horizons.'
    ],
    icon: LifeIcon,
  },
  {
    id: 4,
    category: EventCategory.EDUCATION,
    date: 'Sep 2016 - May 2020',
    title: 'B.S. in Computer Science',
    subtitle: 'University of Technology',
    description: [
      'Graduated with Magna Cum Laude honors.',
      'Relevant coursework: Data Structures & Algorithms, Web Development, Database Systems, Human-Computer Interaction.',
      'President of the Coding Club, where I organized hackathons and workshops.'
    ],
    icon: EducationIcon,
  },
  {
    id: 5,
    category: EventCategory.PROJECT,
    date: 'Summer 2019',
    title: 'Mobile Recipe App',
    subtitle: 'Internship Capstone Project',
    description: [
      'Developed a cross-platform mobile application using React Native during a summer internship.',
      'Integrated with a third-party API to fetch and display recipe data.',
      'Implemented user authentication and the ability to save favorite recipes.'
    ],
    icon: ProjectIcon,
  },
];