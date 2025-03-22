
import { ProgramSlot } from "../types/program";

export const programData: ProgramSlot[] = [
  // Grade 5 - Monday 1:30-2:30
  {
    day: "Monday",
    time: "1:30-2:30",
    group: "D",
    grade: 5,
    activities: [
      { id: "kickboxing-5-mon-130", name: "Kickboxing", location: "Basement" },
      { id: "throwball-5-mon-130", name: "Throwball", location: "Atrium" },
      { id: "chess-5-mon-130", name: "Chess", location: "5D" },
      { id: "vedicmath-5-mon-130", name: "Vedic Math", location: "5B, 5C" },
    ]
  },
  // Grade 5 - Monday 2:30-3:30
  {
    day: "Monday",
    time: "2:30-3:30",
    group: "B",
    grade: 5,
    activities: [
      { id: "spanish-5-mon-230", name: "Spanish", location: "5B, 5C" },
      { id: "german-5-mon-230", name: "German", location: "6C" },
      { id: "mandarin-5-mon-230", name: "Mandarin", location: "5D" },
      { id: "bollywood-5-mon-230", name: "Bollywood Dance", location: "Music room" },
      { id: "khokho-5-mon-230", name: "Kho-Kho", location: "4th Floor next to staff room" },
    ]
  },
  // Grade 5 - Wednesday 1:30-2:30
  {
    day: "Wednesday",
    time: "1:30-2:30",
    group: "STEAM",
    grade: 5,
    activities: [
      { id: "steam-5-wed-130", name: "STEAM", location: "5ABCD" },
    ]
  },
  // Grade 5 - Wednesday 2:30-3:30
  {
    day: "Wednesday",
    time: "2:30-3:30",
    group: "C",
    grade: 5,
    activities: [
      { id: "gymnastics-5-wed-230", name: "Gymnastics", location: "Basement" },
      { id: "speech-5-wed-230", name: "Speech and Drama", location: "5B" },
      { id: "archery-5-wed-230", name: "Archery", location: "4th Floor next to staff room" },
      { id: "basketball-5-wed-230", name: "Basketball", location: "Atrium" },
    ]
  },
  // Grade 5 - Friday 1:30-2:30
  {
    day: "Friday",
    time: "1:30-2:30",
    group: "B",
    grade: 5,
    activities: [
      { id: "spanish-5-fri-130", name: "Spanish", location: "5B, 5C" },
      { id: "german-5-fri-130", name: "German", location: "5D" },
      { id: "mandarin-5-fri-130", name: "Mandarin", location: "6A" },
      { id: "bollywood-5-fri-130", name: "Bollywood Dance", location: "Music room, Yoga room" },
      { id: "khokho-5-fri-130", name: "Kho-Kho", location: "Basement" },
    ]
  },
  // Grade 5 - Friday 2:30-3:30
  {
    day: "Friday",
    time: "2:30-3:30",
    group: "A",
    grade: 5,
    activities: [
      { id: "calligraphy-5-fri-230", name: "Calligraphy", location: "5B" },
      { id: "creativeart-5-fri-230", name: "Creative Art", location: "5C" },
      { id: "creativewriting-5-fri-230", name: "Creative Writing", location: "5D" },
      { id: "football-5-fri-230", name: "Football", location: "Ground" },
    ]
  },
  
  // Grade 6 - Monday 1:30-2:30
  {
    day: "Monday",
    time: "1:30-2:30",
    group: "STEAM",
    grade: 6,
    activities: [
      { id: "steam-6-mon-130", name: "STEAM", location: "6ABC" },
    ]
  },
  // Grade 6 - Monday 2:30-3:30
  {
    day: "Monday",
    time: "2:30-3:30",
    group: "D",
    grade: 6,
    activities: [
      { id: "kickboxing-6-mon-230", name: "Kickboxing", location: "Basement" },
      { id: "throwball-6-mon-230", name: "Throwball", location: "Atrium" },
      { id: "chess-6-mon-230", name: "Chess", location: "6A" },
      { id: "vedicmath-6-mon-230", name: "Vedic Math", location: "6B" },
    ]
  },
  // Grade 6 - Wednesday 1:30-2:30
  {
    day: "Wednesday",
    time: "1:30-2:30",
    group: "B",
    grade: 6,
    activities: [
      { id: "spanish-6-wed-130", name: "Spanish", location: "6A" },
      { id: "german-6-wed-130", name: "German", location: "6B" },
      { id: "bollywood-6-wed-130", name: "Bollywood Dance", location: "Music room, Yoga room" },
      { id: "khokho-6-wed-130", name: "Kho-Kho", location: "4th Floor next to staff room" },
    ]
  },
  // Grade 6 - Wednesday 2:30-3:30
  {
    day: "Wednesday",
    time: "2:30-3:30",
    group: "A",
    grade: 6,
    activities: [
      { id: "calligraphy-6-wed-230", name: "Calligraphy", location: "6A" },
      { id: "creativeart-6-wed-230", name: "Creative Art", location: "6B" },
      { id: "creativewriting-6-wed-230", name: "Creative Writing", location: "6C" },
      { id: "football-6-wed-230", name: "Football", location: "Ground" },
    ]
  },
  // Grade 6 - Friday 1:30-2:30
  {
    day: "Friday",
    time: "1:30-2:30",
    group: "C",
    grade: 6,
    activities: [
      { id: "gymnastics-6-fri-130", name: "Gymnastics", location: "Basement" },
      { id: "speech-6-fri-130", name: "Speech and Drama", location: "6B" },
      { id: "archery-6-fri-130", name: "Archery", location: "4th Floor next to staff room" },
      { id: "basketball-6-fri-130", name: "Basketball", location: "Atrium" },
    ]
  },
  // Grade 6 - Friday 2:30-3:30
  {
    day: "Friday",
    time: "2:30-3:30",
    group: "B",
    grade: 6,
    activities: [
      { id: "spanish-6-fri-230", name: "Spanish", location: "6A" },
      { id: "german-6-fri-230", name: "German", location: "6B" },
      { id: "bollywood-6-fri-230", name: "Bollywood Dance", location: "Music room, Yoga room" },
      { id: "khokho-6-fri-230", name: "Kho-Kho", location: "Basement" },
    ]
  },
  
  // Grade 7 - Monday 1:30-2:30
  {
    day: "Monday",
    time: "1:30-2:30",
    group: "B",
    grade: 7,
    activities: [
      { id: "spanish-7-mon-130", name: "Spanish", location: "7A" },
      { id: "german-7-mon-130", name: "German", location: "7B, 7C" },
      { id: "khokho-7-mon-130", name: "Kho-Kho", location: "4th Floor next to staff room" },
    ]
  },
  // Grade 7 - Monday 2:30-3:30
  {
    day: "Monday",
    time: "2:30-3:30",
    group: "A",
    grade: 7,
    activities: [
      { id: "calligraphy-7-mon-230", name: "Calligraphy", location: "7A" },
      { id: "creativewriting-7-mon-230", name: "Creative Writing", location: "7B" },
      { id: "football-7-mon-230", name: "Football", location: "Ground" },
    ]
  },
  // Grade 7 - Wednesday 1:30-2:30
  {
    day: "Wednesday",
    time: "1:30-2:30",
    group: "D",
    grade: 7,
    activities: [
      { id: "throwball-7-wed-130", name: "Throwball", location: "Atrium" },
      { id: "chess-7-wed-130", name: "Chess", location: "7A" },
      { id: "vedicmath-7-wed-130", name: "Vedic Math", location: "7B" },
    ]
  },
  // Grade 7 - Wednesday 2:30-3:30
  {
    day: "Wednesday",
    time: "2:30-3:30",
    group: "B",
    grade: 7,
    activities: [
      { id: "spanish-7-wed-230", name: "Spanish", location: "7A" },
      { id: "german-7-wed-230", name: "German", location: "7B, 7C" },
      { id: "khokho-7-wed-230", name: "Kho-Kho", location: "Yoga room" },
    ]
  },
  // Grade 7 - Friday 1:30-2:30
  {
    day: "Friday",
    time: "1:30-2:30",
    group: "STEAM",
    grade: 7,
    activities: [
      { id: "steam-7-fri-130", name: "STEAM", location: "7ABC" },
    ]
  },
  // Grade 7 - Friday 2:30-3:30
  {
    day: "Friday",
    time: "2:30-3:30",
    group: "C",
    grade: 7,
    activities: [
      { id: "speech-7-fri-230", name: "Speech and Drama", location: "7A" },
      { id: "basketball-7-fri-230", name: "Basketball", location: "Atrium" },
    ]
  },
];

export const getGroupColor = (group: string): string => {
  switch (group.toUpperCase()) {
    case 'A':
      return 'program-group-a';
    case 'B':
      return 'program-group-b';
    case 'C':
      return 'program-group-c';
    case 'D':
      return 'program-group-d';
    case 'STEAM':
      return 'program-group-steam';
    default:
      return '';
  }
};

export const getDayColor = (day: string): string => {
  switch (day) {
    case 'Monday':
      return 'program-monday';
    case 'Wednesday':
      return 'program-wednesday';
    case 'Friday':
      return 'program-friday';
    default:
      return '';
  }
};
