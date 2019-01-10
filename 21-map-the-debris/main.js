/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

Intermediate Algorithm Scripting: Map the Debris
let orbitalPeriod = arr => {
    const gm = 398600.4418;
    const earthRadius = 6367.4447;
    let seconds = avgAltitute => Math.round(2*Math.PI*(Math.sqrt(Math.pow(earthRadius + avgAltitute, 3)/gm)))
    return arr.map(obj => ({name: obj.name, orbitalPeriod: seconds(obj.avgAlt)}));
}