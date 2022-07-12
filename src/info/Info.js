import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Ayush",
    lastName: "Tiwari",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "A Frontend Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Looking For aJob"
        },
        {
            emoji: "📧",
            text: "ayushtiwari708090@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram'
        },
        {
            link: "https://github.com/Ayush144",
            icon: "fa fa-github"
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter"
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Ayush. I'm a Frontend Developer. I studied CompSci at GEC Bilaspur, I like to play BasketBall, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'Material UI'],
            exposedTo: ['nodejs', 'java']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'Exploring',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'BAsketBall',
            emoji: ' 🏀'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Restaurant Website",
            live: "https://gorgeous-crostata-fc963d.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Ayush144/HTML---CSS-Mini-Project---HTML---CSS-Mini-Project---kl59xp196mnb", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Spotify Clone",
            source: "https://github.com/Ayush144/Spotify",
            live: "https://effulgent-rugelach-1f3377.netlify.app/",
            image: mock2
        },
        {
            title: "Med Locator",
            live: "https://medlocfinal.vercel.app/",
            source: "https://github.com/Ayush144/medlocator-final-fronyend",
            image: mock3
        }
       
    ]
}