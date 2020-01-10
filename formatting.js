// Day

d = (date) => { // Day of the month, 2 digits with leading zeros, 01 to 31
	return (date.getDate() > 9) ? date.getDate() : '0' + String(date.getDate())
}

D = (date) => { // A textual representation of a day, three letters, Sun through Sat
	const day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
	return day[date.getDay()]
}

j = (date) => { // 	Day of the month without leading zeros, 1 to 31
	return date.getDate()
}

l = (date) => { // A full textual representation of the day of the week, Sunday through Saturday
	const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	return day[date.getDay()]
}

N = (date) => { // ISO-8601 numeric representation of the day of the week, 1 for Monday, 7 for Sunday
	return (date.getDay() == 0) ? 7 : date.getDay()
}

S = (date) => { // English ordinal suffix for the day of the month, 2 characters, st, nd, rd or th
	var th = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30]
	if (th.includes(date.getDate())) return 'th'
	else if (String(date.getDate()).charAt(date.getDate().length - 1) == '1') return 'st'
	else if (String(date.getDate()).charAt(date.getDate().length - 1) == '2') return 'nd'
	else return 'rd'
}

w = (date) => { // Numeric representation of the day of the week, 0 for Sunday, 6 for Saturday
	return date.getDay()
}

z = (date) => { // Day of the year starting at 1
	var start = new Date(date.getFullYear(), 0, 0)
	var diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000)
	var oneDay = 1000 * 60 * 60 * 24
	return Math.floor(diff / oneDay)
}

// Week

W = (date) => { // Week of year
	date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7))
	var year = new Date(Date.UTC(date.getUTCFullYear(),0,1))
	return Math.ceil((((date - year) / 86400000) + 1) / 7)
}

// Month

F = (date) => { // Full month
	const mon = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
	return mon[date.getMonth()]
}

m = (date) => { // 01 for January, 12 for December
	return ((date.getMonth() + 1) > 9) ? date.getMonth() + 1 : '0' + String(date.getMonth() + 1)
}

M = (date) => { // Jan through Dec
	const mon = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ]
	return mon[date.getMonth()]
}

n = (date) => { // Numeric representation of a month, without leading zeros, 1 through 12
	return date.getMonth() + 1
}

t = (date) => { // Number of days in the given month, 28 through 31
	return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

// Year

L = (date) => { // Whether it's a leap year, true or false
	var year = date.getFullYear()
	return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
}

o = (date) => { // ISO-8601 week-numbering year, 2019 or 2020
	if ((z(date) < 7 && W(date) > 50)) {
		return date.getFullYear() - 1
	} else if (z(date) > 350 && W(date) < 5) {
		return date.getFullYear()
	} else {
		return date.getFullYear()
	}
}

Y = (date) => { // Full year, 2020
	return date.getFullYear()
}

y = (date) => { // 2-digit year, 20
	return String(date.getFullYear()).substr(2)
}

// Time

a = (date) => { // am or pm
	return (date.getHours() < 12) ? 'am' : 'pm'
}

A = (date) => { // am or pm
	return (date.getHours() < 12) ? 'AM' : 'PM'
}

g = (date) => { // 12-hour format, 1 through 12
	return (date.getHours() > 12) ? date.getHours() - 12 : date.getHours()
}

G = (date) => { // 24-hour format, 0 through 23
	return date.getHours()
}

h = (date) => { // 12-hour format with leading zeros, 01 through 12
	return (g(date) < 10) ? '0' + g(date) : g(date)
}

H = (date) => { // 24-hour format with leading zeros, 00 through 23
	return (date.getHours() < 10) ? '0' + String(date.getHours()) : date.getHours()
}

i = (date) => { // Minutes with leading zeros, 00 to 59
	return (date.getMinutes() < 10) ? '0' + String(date.getMinutes()) : date.getMinutes()
}

K = (date) => { // Minutes without leading zeros, 0 to 59
	return date.getMinutes()
}

s = (date) => { // Seconds with leading zeros, 00 to 59
	return (date.getSeconds() < 10) ? '0' + String(date.getSeconds()) : date.getSeconds()
}

P = (date) => {
	return date.getSeconds()
}

v = (date) => { // Milliseconds, ex. 123
	if (date.getMilliseconds().length == 3) {
		return date.getMilliseconds()
	} else if (date.getMilliseconds().length == 2) {
		return String(date.getMilliseconds()) + '0'
	} else {
		return String(date.getMilliseconds()) + '00'
	}
}

e = (date) => { // Timezone full
	return String(date).split('(').pop().split(')')[0]
}

T = (date) => { // Timezone abbreviation -> experimental
	var name = e(date)
	var short = ''
	name.split(' ').forEach((i) => { short += i.charAt(0) })
	return short
}

Z = (date) => { // Timezone offset in minutes
	return date.getTimezoneOffset()
}

I = (date) => {
	var year = Y(date)
	var jan = new Date(year, 0, 1)
	var jul = new Date(year, 6, 1)
	return (Z(date) < (Math.max(Z(jan), Z(jul)))) ? true : false
}

// Full date/time

c = (date) => { // ISO 8601 date -> experimental
	const day = Y(date) + '-' + m(date) + '-' + d(date) + 'T'
	const time = G(date) + ':' + i(date) + ':' + s(date) + '.' + v(date)
	var tzd = (Z(date) >= 0) ? '+' : '-'
	if (Z(date) > 59) {
		tzd += (Math.floor(Z(date) / 60) < 10) ? '0' + String(Math.floor(Z(date) / 60)) : Math.floor(Z(date))
		tzd += ':'
		tzd += (Z(date) % 60 < 10) ? '0' + String(Z(date) % 60) : Z(date) % 60
	} else {
		tzd += '00:'
		tzd += (Z(date) < 10) ? '0' + String(Z(date)) : Z(date)
	}
	return day + time + tzd
}

r = (date) => { // RFC 2822 compliant date
	return date
}

U = (date) => { // Seconds since Unix Epoch (Jan 1, 1970)
	return Math.round(date.getTime() / 1000)
}

module.exports = { d,D,j,l,N,S,w,z,W,F,m,M,n,t,L,o,Y,y,a,A,g,G,h,H,i,K,s,P,v,e,T,Z,I,c,r,U }