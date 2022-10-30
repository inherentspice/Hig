
export default function GetColors(dayQuality) {
  const color = `rgb(${(dayQuality.nah * 23) % 255}, ${(dayQuality.alright * 23) % 255}, ${(dayQuality.yeah * 23) % 255})`
  return color
}
