document.addEventListener('DOMContentLoaded', () => {
    // I decided to go with a DOM game because even though it is  a bit difficult for me to understand, but canvas was even more difficult.

    const emojis = "`😀`, `😀`, `🧐`, `🧐`, `🥳`, `🥳`, `🥹`, `🥹`, `😁`, `😁`, `😂`, `😂`"
    const boxes = document.querySelectorAll('.box');
    let compare = [];
    //I am using indexes so when a pair of emojis does not match, they can hide again.
    let indexes = [];
    //The 'score' and 'count' are being used to keep the count of how many emojis you have matched, and as soon as you have got all 12, the timer will stop.
    let score = 0;
    let count = 0;
})