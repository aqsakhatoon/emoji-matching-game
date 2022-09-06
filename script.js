document.addEventListener('DOMContentLoaded', () => {
    // I decided to go with a DOM game because even though it is  a bit difficult for me to understand, but canvas was even more difficult.

    //The const will be used for the boxes that are covering the emojis
    const boxes = document.querySelectorAll('.box');
    // The function of 'compare' is to compare the emojis once you click on the box that is hiding them.
    let compare = [];
    //I am using indexes so when a pair of emojis does not match, they can hide again.
    let indexes = [];
    //The 'score' and 'count' are being used to keep the count of how many emojis you have matched, and as soon as you have got all 12, the timer will stop.
    let score = 0;
    let count = 0;
    //The setup will initiate a function that will shuffle the emojis
    function setup() {
        const emojis = shuffle([`😀`, `🥳`, `🧐`, `😁`, `😀`, `🥳`, `😂`, `🥹`, `🧐`, `😁`, `🥹`, `😂` ])
    }
    function shuffle (arr) {
        //The lines 19-23 will shuffle the array and give us a value, and in order to get that value, you need to run a loop, which we have done below.
        for (let i = arr.length - 1; i > 0; i -- ) {
            const x = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        // When we return arr, we will get a random output of the emojis
        return arr; 
    }
})


