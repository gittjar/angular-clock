export interface Helsinki 
{
    location: Location;
    current: Current;
}

export interface Location
{
    name: String;
    region: String;
    country: String;
    lat: Number;
    lon: Number;
    tz_id: String;
    localtime_epoch: Number;
    localtime: String;

}
export interface Current
{

}