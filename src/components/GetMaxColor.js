export default function GetMaxColor(dayQuality) {
  const maxVoted = Math.max(dayQuality.nah, dayQuality.alright, dayQuality.yeah)
    let nahVal = dayQuality.nah===maxVoted ? (dayQuality.nah * 27) % 255: 255
    let alrightVal = dayQuality.alright===maxVoted ? (dayQuality.alright * 23) % 255: 255
    let yeahVal = dayQuality.yeah===maxVoted ? (dayQuality.yeah * 52) % 255: 255
    if (nahVal===0 && alrightVal===0 && yeahVal===0) {
      nahVal = 255
      alrightVal = 255
      yeahVal = 255
    }
    const maxColor = `rgb(${nahVal}, ${alrightVal}, ${yeahVal})`
    return maxColor
}
