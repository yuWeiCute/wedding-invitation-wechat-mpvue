const key = ''

function doubleDigit(num) {
    num = num > 9 ? num : "0" + num
    return num
}

function getTimer(target) {
    let nowDate = new Date().getTime()
    let targetDate = new Date(target).getTime()
    let diff = targetDate - nowDate
    let day = parseInt(diff / (1000 * 60 * 60 * 24)) 
    day = (day <= 99) ? day : "99+"
    let hour = parseInt((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    hour = doubleDigit(hour)
    let minute = parseInt((diff % (1000 * 60 * 60)) / (1000 * 60))
    minute = doubleDigit(minute)
    let second = parseInt((diff % (1000 * 60)) / 1000)
    second = doubleDigit(second)
    return [day, hour, minute, second]
}




export default {
    key,
    getTimer
}