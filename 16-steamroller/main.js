/* Flatten a nested array. You must account for varying levels of nesting. */

let deepFlatten = arr => {
  let flat = arr.flat();
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}