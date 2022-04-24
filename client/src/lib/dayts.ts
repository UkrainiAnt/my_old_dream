import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import calendarTime from "dayjs/plugin/calendar";

dayjs.extend(relativeTime);
dayjs.extend(calendarTime);

export const dayts = dayjs;
