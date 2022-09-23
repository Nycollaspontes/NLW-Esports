export function convertMinutesToHours(minutesAmount: number) {
    const hours = minutesAmount / 60;
    const minutes = minutesAmount % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
} 
