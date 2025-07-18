import { ReactNode } from 'react';

export enum EventCategory {
  WORK = 'Work',
  PROJECT = 'Projects & Hobbies',
  EDUCATION = 'Education',
  LIFE = 'Life & Decisions'
}

export interface TimelineEventItem {
  id: number;
  category: EventCategory;
  date: string;
  title: string;
  subtitle: string;
  description: string[];
  icon: ReactNode;
  link?: string;
}