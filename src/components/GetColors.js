
export default function GetColors(dayQuality) {
  const color = `rgb(${(dayQuality.nah * 23) % 255}, ${(dayQuality.alright * 52) % 255}, ${(dayQuality.yeah * 27) % 255})`
  return color
}
