export function filterTime(startDate) {
  let now = new Date().getTime()
  let differenceValue = Math.floor((now - startDate) / 1000)
  return `${getDays(differenceValue)}天${getHours(differenceValue)<10?'0'+getHours(differenceValue):getHours(differenceValue)}小时${getMinutes(differenceValue)<10?'0'+getMinutes(differenceValue):getMinutes(differenceValue)}分钟${getSeconds(differenceValue)<10?'0'+getSeconds(differenceValue):getSeconds(differenceValue)}秒`
}

function getDays(timeStr){
  return Math.floor(timeStr/86400)
}


function getHours(timeStr) {
  return Math.floor((timeStr - getDays(timeStr)*86400)/3600)
}

function getMinutes(timeStr) {
  return Math.floor((timeStr - getDays(timeStr)*86400 - getHours(timeStr)*3600)/60)
}

function getSeconds(timeStr) {
  return Math.floor(timeStr - getDays(timeStr)*86400 - getHours(timeStr)*3600 - getMinutes(timeStr)*60)
}
