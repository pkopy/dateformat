//This module formats date
module.exports = {

    MyDate: class MyDate {
        /**
         * MyDate([date])
         * @constructor
         * @param {Date} [date]
         */
        constructor(date) {
            this.date = date ? date : new Date(Date.now());

        }

        addZero(number) {
            return number < 10 ? '0' + number.toString() : number.toString();
        }

        /**
         * dateFormat([date][, format][,separator])
         * @param {Date} [date]
         * @param {string} [format]
         * @param {string} [separator]
         * @returns {string}
         */
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
                result.D = this.addZero(date.getDate());
                day = date.getDay();
                result.M = this.addZero(date.getMonth() + 1);
                result.Y = this.addZero(date.getFullYear());

                // console.log(date)
            } else {
                console.log(typeof date)
            }

            if (format && typeof format === 'string' && format.length === 3) {


                const form = format.toUpperCase().split('');
                // console.log(form)

                for (let e of form) {
                    rr += result[e] + separator
                }

                // console.log("test:", rr.substring(0, rr.length - separator.length))
                return rr.substring(0, rr.length - separator.length)
            } else {
                for (let e in result) {
                    rr += result[e] + separator
                }
                // console.log(rr.substring(0, rr.length - separator.length))
                return rr.substring(0, rr.length - separator.length)
            }
        }

        /**
         *
         * @param {number} num - a positive or negative number
         * @param {string} [separator]
         * @returns {string}
         */
        addDay(num, separator) {
            if (!separator) separator = '/'
            let x = Date.parse(this.date) + (num * 24 * 60 * 60 * 1000)
            this.date = new Date(x)
            // console.log()
            return this.dateFormat(new Date(x), 'ymd', separator)
        }
    }

}


