import { DateTime } from "luxon";

export const formatToLocalTime = (
  secs: number,
  zone: string,
  format = "hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
