import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { TimelineEventItem, EventCategory } from '../types';

const getIconColorClasses = (category: EventCategory): string => {
    // Changed bg to slate-800 to better match the page's gradient
    const classMap: Record<EventCategory, string> = {
        [EventCategory.WORK]: 'bg-slate-800 border-sky-500 text-sky-400',
        [EventCategory.PROJECT]: 'bg-slate-800 border-amber-500 text-amber-400',
        [EventCategory.EDUCATION]: 'bg-slate-800 border-violet-500 text-violet-400',
        [EventCategory.LIFE]: 'bg-slate-800 border-teal-500 text-teal-400',
    };
    return classMap[category] || 'bg-slate-800 border-gray-500 text-gray-400';
}

const EventCard: React.FC<{ event: TimelineEventItem }> = ({ event }) => {
    const { category, date, title, subtitle, description, link } = event;

    // Determine hover classes based on category and if it's a link (for group-hover)
    const hoverShadowClasses = {
        [EventCategory.WORK]: 'hover:shadow-sky-500/10 group-hover:shadow-sky-500/10',
        [EventCategory.PROJECT]: 'hover:shadow-amber-500/10 group-hover:shadow-amber-500/10',
        [EventCategory.EDUCATION]: 'hover:shadow-violet-500/10 group-hover:shadow-violet-500/10',
        [EventCategory.LIFE]: 'hover:shadow-teal-500/10 group-hover:shadow-teal-500/10',
    }[category] || 'hover:shadow-gray-500/10 group-hover:shadow-gray-500/10';

    const hoverBorderClasses = link ? {
        [EventCategory.WORK]: 'group-hover:border-sky-500/50',
        [EventCategory.PROJECT]: 'group-hover:border-amber-500/50',
        [EventCategory.EDUCATION]: 'group-hover:border-violet-500/50',
        [EventCategory.LIFE]: 'group-hover:border-teal-500/50',
    }[category] || 'group-hover:border-gray-500/50' : '';

    return (
        <div className={`w-full max-w-md p-6 rounded-xl shadow-lg border bg-slate-800/80 border-slate-700 transition-all duration-300 hover:-translate-y-1 group-hover:-translate-y-1 ${hoverShadowClasses} ${hoverBorderClasses} text-left`}>
            <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center">
                <p className={`text-sm font-semibold tracking-wider ${getIconColorClasses(category).replace('bg-slate-800','bg-opacity-25')} mb-1 sm:mb-0 px-2 py-0.5 rounded-full`}>{category.toUpperCase()}</p>
                <p className="text-sm font-medium text-slate-400">{date}</p>
            </div>
            <h3 className="text-2xl font-bold text-slate-50 mt-2">{title}</h3>
            <p className="text-lg font-medium text-slate-300 mb-4">{subtitle}</p>
            <ul className="space-y-2 text-slate-400 list-disc list-inside">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};


const Timeline: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:block relative">
        {/* The central line */}
        <div className="absolute top-0 h-full w-0.5 bg-slate-700 left-1/2 -translate-x-1/2" aria-hidden="true"></div>
        
        <div className="grid grid-cols-2">
          {TIMELINE_DATA.map((event, index) => {
            const isRightSide = index % 2 === 0;

            const Icon = (
              <div className={`flex items-center justify-center w-12 h-12 rounded-full shrink-0 border-2 ring-8 ring-slate-800 ${getIconColorClasses(event.category)}`}>
                {event.icon}
              </div>
            );
            
            const card = <EventCard event={event} />;
            const renderedCard = event.link ? (
                <a href={event.link} target={event.link === '#' ? '_self' : '_blank'} rel="noopener noreferrer" className="block group">
                    {card}
                </a>
            ) : card;


            if (isRightSide) {
              return (
                <React.Fragment key={event.id}>
                  <div></div> {/* Empty cell for left column */}
                  <div className="relative pl-12 pb-8">
                    <div className="absolute top-0 left-0 -translate-x-1/2 z-10">{Icon}</div>
                    {renderedCard}
                  </div>
                </React.Fragment>
              );
            } else { // Left side
              return (
                <React.Fragment key={event.id}>
                  <div className="relative pr-12 pb-8">
                    <div className="absolute top-0 right-0 translate-x-1/2 z-10">{Icon}</div>
                    <div className="flex justify-end">
                      {renderedCard}
                    </div>
                  </div>
                  <div></div> {/* Empty cell for right column */}
                </React.Fragment>
              );
            }
          })}
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="md:hidden relative max-w-xl mx-auto">
        {/* The central line */}
        <div className="absolute top-0 h-full w-0.5 bg-slate-700 left-6" aria-hidden="true"></div>
        
        <div className="flex flex-col gap-y-8">
          {TIMELINE_DATA.map((event) => {
            const card = <EventCard event={event} />;
            const renderedCard = event.link ? (
                <a href={event.link} target={event.link === '#' ? '_self' : '_blank'} rel="noopener noreferrer" className="block group">
                    {card}
                </a>
            ) : card;

            return (
              <div key={event.id} className="relative pl-16">
                <div className="absolute top-0 left-6 -translate-x-1/2 z-10">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full shrink-0 border-2 ring-8 ring-slate-800 ${getIconColorClasses(event.category)}`}>
                    {event.icon}
                  </div>
                </div>
                <div className="pt-0.5">
                  {renderedCard}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;