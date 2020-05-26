#@pkopy/dateformat

![xxx](https://img.shields.io/badge/npm-1.0.0.-blue.svg)

# Install
```
$ npm install @pkopy/changenumber
```

# Usage

```
const dateToFormat = require("@pkopy/datefomat")

const myDate = new dateToFormat.MyDate()

cont x = myDate.dateFormat(new Date('2001-04-01'), 'dmy', '*')

console.log(x)

//=> 01*04*2020

x.addDate(10, 'dmy', '-')


```

# Methods
### dateFormat([date][, format][,separator])
* date (optional) is a Date object, if date is null a default is a today date
* format (optional) is a format a data (string)
    * 'ymd' - year, month, day
    * can use any combination of this three characters
    * if empty a default value is 'mdy'
* separator (optional) string - if empty a default value is '/'

### addDay([number][,format][,separator]) - adds x days to today date
* number is a positive or negative number
* format (optional) is a format a data (string)
    * 'ymd' - year, month, day
    * can use any combination of this three characters
    * if empty a default value is 'mdy'
* separator (optional) string - if empty a default value is '/'
    
