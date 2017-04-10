import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name: "getDatetime"})
export class GetDatetimePipe implements PipeTransform {
    // This method requires the value parameter object has the following elements: DatetimeUTC & TimeOffset. 
    // Default parameter is original
    transform(value: object, returnDate: string = "original"): Date {
        const millisecondsPerMinute: number = 60000;
        let epochDatetime: number = value["DatetimeUTC"].$date;
        let offsetMinutes: number = value["TimeOffset"];

        let localDatetime = new Date(epochDatetime);
        let utcDatetime = new Date(localDatetime.getUTCFullYear(), localDatetime.getUTCMonth(),localDatetime.getUTCDate(),
                                   localDatetime.getUTCHours(), localDatetime.getUTCMinutes(), localDatetime.getUTCSeconds(),
                                   localDatetime.getUTCMilliseconds())
        let originalDatetime = new Date(utcDatetime.getTime() - (offsetMinutes * millisecondsPerMinute));

        if (returnDate == "original") {
            // Returns the original datetime stored in the datebase: utc + timeoffset
            return originalDatetime;
        }
        else if (returnDate == "local") {
            // Converts utc datatime that was stored in database into local datetime of user's device
            return localDatetime;
        }
        else if (returnDate == "utc") {
            // Returns utc of the datetime stored in database
            return utcDatetime;
        }
    }
}