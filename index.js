function shout(string) {
    return string.toUpperCase();
};
function whisper(string) {
    return string.toLowerCase();
};
function logShout(string) {
    console.log('HELLO');
    console.log(string.toUpperCase);
};
function logWhisper(string) {
    console.log('hello');
    console.log(string.toLowerCase);
};
function sayHiToHeadphonedRoommate(string) {
    if(string == string.toLowerCase()){
        return ("I can't hear you!");
    }
    return string;
};
function sayHiToHeadphonedRoommate(string){
    if(string == string.toUpperCase()){
        return ("YES INDEED!")
    }
    return string;
}