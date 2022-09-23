export function convertHourStringToMinutes(hourString: string) {
    const [hours, minutes] = hourString.split(':').map(Number)
    console.log(hours, minutes)
    const minutesAmount = (hours * 60) + minutes

    return minutesAmount;

}