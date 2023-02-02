// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

function makeString(s) {
    return s
        .split(" ")
        .map((word) => word[0])
        .join("");
}
