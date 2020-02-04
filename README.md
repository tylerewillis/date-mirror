# date-mirror

Like the native **date** function in PHP but modified to include date ranges and plain text.

```javascript
const date = require('date-mirror')
date('F jS, Y')
```

## Installation

This is a simple JavaScript module available through the [npm registry](https://www.npmjs.com/).

Installation is done using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```
npm install date-mirror
```

Or in the browser by loading the library from unpkg and using the ```date()``` variable:

```html
<script src='https://unpkg.com/date-mirror'></script>
```

## Usage

This is the function's signature:

```javascript
date (template: string, start: string = null, end: string = null): string
````

It can be used to retrieve and format today's date:

```javascript
date('Y') // 2020
date('n/j/y') // 1/1/20
date('m-d-Y') // 01-01-2020
date('F jS, Y') // January 1st, 2020
````

Format a specific date:

```javascript
date('F jS, Y', '07/04/1776') // July 4th, 1776
date('n/j/y', '25 March 1807') // 3/25/07
date('D, F jS', '8-18-1920') // Wed, August 18th
```

Or format a range of dates:

```javascript
date('F jS - jS, Y', '7/16/69', '7/24/69') // July 16th - 24th, 1969
date('m/d/Y [until] m/d/Y', 'Sep 1 1939', 'Sep 2 1945') // 09/01/1939 until 09/02/1945
````

A complete list of accepted parameters is below.

## Parameters

Below is a complete list of the parameters that can be used inside of the function.

 | Character | Description | Returns |
 | --- | --- | --- |
 | d | Day of the month with leading zeros | 01 to 31 |
 | D | Textual representation of the week day | Sun through Sat |
 | j | Day of the month - no leading zeroes | 1 to 31 |
 | l | Textual representation of the day of the week | Sunday through Saturday |
 | N | ISO-8601 numeric representation of the day of the week | 1 (for Monday) through 7 (for Sunday) |
 | S | English ordinal suffix for the day of the month | st, nd, rd or th |
 | w | Numeric representation of the day of the week | 0 (for Sunday) through 6 (for Saturday) |
 | z | The day of the year starting from 0 | 0 through 365 |
 | W | ISO-8601 week number of year | e.g. 12, 40 |
 | F | Textual representation of a month | January through December |
 | m | Numeric representation of a month with leading zeros | 01 through 12 |
 | M | Short textual representation of a month | Jan through Dec |
 | n | Numeric representation of a month without leading zeros | 1 through 12 |
 | t | Number of days in the given month | 28 through 31 |
 | L | Whether it's a leap year | true or false |
 | o | ISO-8601 week-numbering year | e.g. 2008, 2020 |
 | Y | Full numeric representation of a year | e.g. 2008, 2020 |
 | y | 2-digit representation of a year | e.g. 08, 20 |
 | a | Lowercase Ante meridiem and Post meridiem | am or pm |
 | A | Uppercase Ante meridiem and Post meridiem | AM or PM |
 | g | 12-hour format without leading zeros | 1 through 12 |
 | G | 24-hour format without leading zeros | 0 through 23 |
 | h | 12-hour format with leading zeros | 01 through 12 |
 | H | 24-hour format with leading zeros | 00 through 23 |
 | i | Minutes with leading zeros | 00 through 59 |
 | K | Minutes without leading zeros | 0 through 59 |
 | s | Seconds with leading zeros | 00 through 59 |
 | P | Seconds without leading zeros | 0 through 59 |
 | v | Milliseconds, 3-digit | 789 |
 | e | Timezone name | Eastern Standard Time |
 | T | Timezone abbreviation | EST |
 | I | Whether or not date is in daylight savings time | true or false |
 | Z | Timezone offset in minutes | -720 through 840 |
 | c | ISO 8601 date | 2020-01-01T12:30:30.000+05:00 |
 | r | RFC 2822 compliant date | Sun Nov 01 2020 02:00:00 GMT-0500 (Eastern Standard Time) |
 | U | Seconds since the Unix Epoch | 1970 was a long time ago, so ... |


Plain text can also be added and needs to be between open- and closing-brackets: []. Anything in between the brackets will be treated as plain text and returned along with the dates.

## How It Works

Returned strings are meant to perfectly mirror the inputted format (including special characters and spaces).

```javascript
date('&^%$') // &^%$
date('pie') // pie
````

The reason why the above parameters returned an exact match of what was inputted is because those characters aren't valid date parameters (see table above). If the function detects a valid date parameter, it will substitute the character for the relevant date value. If not, it will just return the character.

## Date Ranges

You can return date ranges by inputting 2 additional parameters:

```javascript
date('F jS - jS, Y', '7/16/69', '7/24/69') // July 16th - 24th, 1969
date('m/d/Y [until] m/d/Y', 'Sep 1 1939', 'Sep 2 1945') // 09/01/1939 until 09/02/1945
````

When building the formatting string, know that the first occurrence of a valid date character will call the 1st date and a repeat of the same character will then call the 2nd date:

```javascript
date('m - m', '1-5-20', '3-8-20') // 01 - 03
date('m/d - m/d', '1-5-20', '3-8-20') // 01/05 - 03/08
````

But keep in mind that the returned string will **mirror** the format. That could create a problem like this:

```javascript
date('F jS - jS', '1-5-20', '3-8-20') // January 5th - 8th
````

Where the returned string suggests a date range of January 5th - 8th even though the literal date range is January 5th through March 8th.

We may decide to build a function to fix this in the future but, for now, we recommend doing something like this to review the date range first and then building a format based on the results:

```javascript
const date1 = '1-5-20'
const date2 = '3-8-20'
if (date('F', date1) == date('F', date2)) {
  console.log(date('F jS - jS', date1, date2))
} else {
  console.log(date('F jS - F jS', date1, date2)) // January 5th - March 8th
}
````

## Plain Text

Sometimes you want to include some text between dates in a range:

```javascript
date('M jS - jS', '1/5/20', '1/8/20') // Jan 5th - 8th
date('M jS [through] jS', '1/5/20', '1/8/20') // Jan 5th through 8th
date('M jS [until the] jS', '1/5/20', '1/8/20') // Jan 5th until the 8th
```

This can be done one of 2 ways - either by including a character not included in the list of parameters above (see table) like the hyphen used in the first example, or by putting any desired plain text inside of opening- and closing-brackets '[]'.

## Gotchas

A few things to watch out for when inputting strings ...

1. If you don't include a year with your input, then it'll assume the current year.
2. If returning a range, check for matching months or years first before building your formatting string.
3. We would recommend getting in the habit of putting plain text between brackets '[]'. You don't want to make the mistake of including a valid date parameter in text that you want to be printed as plain and getting a result like this:

```javascript
date('M jS to jS', '1/5/20', '1/8/20') // Jan 5th 312020 8th
````

## People

The author and maintainer of **date-mirror** is [Tyler Willis](https://tylerewillis.com). Support me [on Patreon](https://www.patreon.com/tylerwillis)!