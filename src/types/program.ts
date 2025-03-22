
export type ActivityDay = 'Monday' | 'Wednesday' | 'Friday';
export type TimeSlot = '1:30-2:30' | '2:30-3:30';
export type ActivityGroup = 'A' | 'B' | 'C' | 'D' | 'STEAM';
export type Grade = 5 | 6 | 7;

export interface Activity {
  id: string;
  name: string;
  location: string;
  classes?: string; // e.g., "5B, 5C" or "7A"
}

export interface ProgramSlot {
  day: ActivityDay;
  time: TimeSlot;
  group: ActivityGroup;
  activities: Activity[];
  grade: Grade;
}

export interface SelectedProgram {
  monday130: string | null;
  monday230: string | null;
  wednesday130: string | null;
  wednesday230: string | null;
  friday130: string | null;
  friday230: string | null;
}
