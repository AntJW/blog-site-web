export class IPosts {
    "Title": string;
    "Body": string;
    "Author": {"FirstName": string, "LastName": string};
    "CreatedOn": {"DatetimeUTC": any, "TimeOffset": number};
    "Tags": Array<string>;
}