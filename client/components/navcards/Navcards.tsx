"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Briefcase, Calendar, Users, UserPlus } from 'lucide-react';

const NavigationCards = () => {
  const router = useRouter();

  const cards = [
    {
      title: 'Jobs',
      path: '/jobs',
      bgColor: 'bg-red-200 hover:bg-red-300',
      icon: <Briefcase size={32} className="text-blue-600 mb-2" />,
    },
    {
      title: 'Events',
      path: '/events',
      bgColor: 'bg-blue-900 hover:bg-blue-950',
      icon: <Calendar size={32} className="text-white mb-2" />,
    },
    {
      title: 'Forums',
      path: '/forums',
      bgColor: 'bg-yellow-400 hover:bg-yellow-500',
      icon: <Users size={32} className="text-blue-600 mb-2" />,
    },
    {
      title: 'Mentors',
      path: '/mentors',
      bgColor: 'bg-white hover:bg-gray-100',
      icon: <UserPlus size={32} className="text-blue-600 mb-2" />,
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <button
            key={card.title}
            onClick={() => router.push(card.path)}
            className={`${card.bgColor} rounded-3xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center min-h-[200px] w-full focus:outline-none focus:ring-4 focus:ring-blue-300`}
          >
            {card.icon}
            <span className={`text-3xl font-bold ${card.title === 'Events' ? 'text-white' : 'text-blue-600'}`}>
              {card.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationCards;