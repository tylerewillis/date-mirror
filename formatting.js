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

module.exports = { d,D,j,l,N,S,w,z,W,F,m,M,n,t,L,o,Y,y }




