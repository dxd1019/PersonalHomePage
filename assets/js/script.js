// function to display song cards and their introductions
const songData = {
    1: {
        title: "You Better Believe!!!",
        duration: "4:53",
        lyrics: `We’re gonna get ourselves freed! 
                What do you think about the blood that I bleed?`
    },
    2: {
        title: "Be an Astronaut",
        duration: "4:35",
        lyrics: `Well you were born an astronaut, 
                and you’ll do that or die trying`
    },
    3: {
        title: "The Key to Life on Earth",
        duration: "4:06",
        lyrics: `they’ve got it in for me, 
                for what its worth, 
                the key to, life on earth`
    },
    4: {
        title: "Beautiful Faces",
        duration: "3:16",
        lyrics: `and as the earth returned to calmly dress itself in white`
    },
    5: {
        title: "Daniel, You're Still a Child",
        duration: "3:58",
        lyrics: `Daniel you know it, you wanted to 
                find a place on your own like you always do`
    },
    6: {
        title: "Emily",
        duration: "4:12",
        lyrics: `It takes more than one, it's true. 
                How's that broken heart for you? 
                How's that workin' out?`
    },
    7: {
        title: "Twice Your Size",
        duration: "3:19",
        lyrics: `Well it only means half as much when you say it’s twice, twice your size`
    },
    8: {
        title: "Rapture",
        duration: "3:59",
        lyrics: `You're part of something bigger than the Laws of Nature`
    },
    9: {
        title: "Sagittarius A*",
        duration: "3:57",
        lyrics: `I'm gonna travel away to the Andes, 
                like everybody wants to see them`
    },
    10: {
        title: "Eventually, Darling",
        duration: "3:19",
        lyrics: `It was nice to meet you, 
                for love is but a fleeting friend`
    }
};

function showPopup(songId) {
    // Get the song information from the map
    const song = songData[songId];
    if (song) {
        document.getElementById('popupTitle').textContent = song.title;
        document.getElementById('popupDuration').textContent = song.duration;
        document.getElementById('popupLyrics').textContent = song.lyrics;
        document.getElementById('songPopup').style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('songPopup').style.display = 'none';
}

// Add event listeners to all song elements
document.querySelectorAll('.song').forEach(function(songElement) {
    songElement.addEventListener('click', function() {
        const songId = songElement.getAttribute('data-song-id');
        showPopup(songId);
    });
});


// Function to return to the top
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}