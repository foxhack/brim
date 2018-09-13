import * as Time from "./lib/Time"

export default function([start, end]) {
  const duration = Time.moment.duration(Time.moment(end).diff(Time.moment(start)))

  if (duration.asMinutes() <= 5)
    return {number: 1, unit: "second", roundingUnit: "second"}

  if (duration.asHours() <= 2)
    return {number: 5, unit: "minute", roundingUnit: "hour"}

  if (duration.asHours() <= 5)
    return {number: 15, unit: "minute", roundingUnit: "hour"}

  if (duration.asDays() <= 1)
    return {number: 30, unit: "minute", roundingUnit: "hour"}

  if (duration.asDays() <= 3)
    return {number: 1, unit: "hour", roundingUnit: "hour"}

  if (duration.asDays() <= 14)
    return {number: 6, unit: "hour", roundingUnit: "day"}

  if (duration.asDays() <= 60)
    return {number: 12, unit: "hour", roundingUnit: "day"}

  if (duration.asDays() <= 120)
    return {number: 1, unit: "day", roundingUnit: "day"}

  if (duration.asMonths() <= 12)
    return {number: 7, unit: "day", roundingUnit: "day"}

  return {number: 1, unit: "month", roundingUnit: "day"}
}
