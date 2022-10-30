export default function GetMaxColor(dayQuality) {
  const maxVoted = Math.max(dayQuality.nah, dayQuality.alright, dayQuality.yeah)
    let nahVal = dayQuality.nah===maxVoted ? (dayQuality.nah * 10) % 255: 255 - ((dayQuality.nah * 3) % 255)
    let alrightVal = dayQuality.alright===maxVoted ? (dayQuality.alright * 10) % 255: 255 - ((dayQuality.alright * 3) % 255)
    let yeahVal = dayQuality.yeah===maxVoted ? (dayQuality.yeah * 10) % 255: 255 - ((dayQuality.yeah * 3) % 255)
    if (nahVal===0 && alrightVal===0 && yeahVal===0) {
      nahVal = 255
      alrightVal = 255
      yeahVal = 255
    }
    const maxColor = `rgb(${nahVal}, ${alrightVal}, ${yeahVal})`
    return maxColor
}
