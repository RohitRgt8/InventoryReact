import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns';



const currentDate = new Date();
const firstDayOfMonth = startOfMonth(currentDate);
const lastDayOfMonth = endOfMonth(currentDate);
const startDate = startOfWeek(firstDayOfMonth);
const endDate = endOfWeek(lastDayOfMonth);

const days = [];
let currentDatePointer = startDate;

while (currentDatePointer <= endDate) {
  days.push({
    day: format(currentDatePointer, 'yyyy-MM-dd'),
    value: Math.floor(Math.random() * 5) + 1, // Mock value for each day
  });
  currentDatePointer = addDays(currentDatePointer, 1);
}

export const mockCalendarData = days.map((day, index) => ({
  id: index.toString(), // Generating unique IDs for each day
  value: day.value,
}));