# date-mirror

Like the native **date** function in PHP but modified to include a range of dates.

```javascript
const date = require('php-date-range')
date('F jS, Y')
```

## Installation

This is a simple JavaScript module available through the [npm registry](https://www.npmjs.com/).

Installation is done using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```
npm install date-mirror
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

Plain text can also be added and needs to be between open- and closing-brackets: []. Anything in between the brackets will be treated as plain text and returned along with the dates.

## Gotchas

A few things to watch out for when inputting strings ...

1. If you don't include a year with your input, then it'll assume the current year.

## People

The author and maintainer of **date-mirror** is [Tyler Willis](https://tylerewillis.com).