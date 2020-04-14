// "YYYY/MM/DD"
//
module.exports = {


    MyDate: class MyDate {
        constructor(date) {
            this.date = date ? date : new Date(Date.now());
            console.log('init date: ', this.date)
        }

        addZero(number) {
            return number < 10 ? '0' + number.toString() : number.toString();
        }

        dateFormat(date, format, separator) {
            if (!date) date = this.date;
            let dateNumber = 0;
            let day = 0;
            let month = 0;
            let year = 0;
            let result = {
                M: this.addZero(month),
                D: this.addZero(dateNumber),
                Y: this.addZero(year)
            };
            let rr = ''


            if (!separator) separator = '/'

            if (date instanceof Date) {
                // for (let i of Object.keys(date)) {
                //     console.log(i)
                // }
                // console.log(date.constructor)
                result.D = this.addZero(date.getDate());
                day = date.getDay();
                result.M = this.addZero(date.getMonth() + 1);
                result.Y = this.addZero(date.getFullYear());

                console.log(date)
            } else {
                console.log(typeof date)
            }

            if (format && typeof format === 'string' && format.length === 3) {


                const form = format.toUpperCase().split('');
                console.log(form)

                for (let e of form) {
                    rr += result[e] + separator
                }

                console.log("test:", rr.substring(0, rr.length - separator.length))
            } else {
                for (let e in result) {
                    rr += result[e] + separator
                }
                console.log(rr.substring(0, rr.length - separator.length))
            }
        }

        addDay(num, separator) {
            if (!separator) separator = '/'
            let x = Date.parse(this.date) + (num * 24 * 60 * 60 * 1000)
            this.date = new Date(x)
            console.log()
            this.dateFormat(new Date(x), 'ymd', separator)
        }
    }

}


// const zz = new MyDate()
// console.log(zz.addZero(7))
// console.log(zz.dateFormat(null, null, ' o-o '))
// zz.addDay(5)