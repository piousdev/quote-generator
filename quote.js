const localQuotes = [
    {
        "text": "I'm sorry, what were you asking me? Oh, yes, that stupid plastic container I asked you to buy. You see, hydrofluoric acid won't eat through plastic; it will however dissolve metal, rock, glass, ceramic. So there's that.",
        "author": "Walter White"
    },
    {
        "text": "Alright, I've got the talking pillow now... Okay?",
        "author": "Walter White"
    },
    {
        "text": "We tried to poison you. We tried to poison you because you are an insane, degenerate piece of filth and you deserve to die.",
        "author": "Walter White"
    },
    {
        "text": "Alright, tell you what. Both of you pull it out your butts right now, or I go grab a flashlight and some pliers and go exploring.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "I do not believe fear to be an effective motivator. I want investment. For now, I'm simply interested in time frame.",
        "author": "Gustavo Fring"
    },
    {
        "text": "When you have children, you always have family. They will always be your priority, your responsibility. And a man, a man provides. And he does it even when he's not appreciated or respected or even loved. He simply bears up and he does it. Because he's a man.",
        "author": "Gustavo Fring"
    },
    {
        "text": "Hey, tell your douchebag brother-in-law to head towards the light.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "Did you know that there's an acceptable level of rat turds that can go into candy bars? It's the government, jack. Even government doesn't care that much about quality. You know what is okay to put in hot dogs? Huh? Pig lips and *beep* But I say, hey, have at it bitches 'cause I love hot dogs.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "The one that says if I can't kill you, you'll sure as *beep* wish you were dead.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "You won, Walter. You got the job. Do yourself a favor and learn to take yes for an answer.",
        "author": "Mike Ehrmantraut"
    },
    {
        "text": "The thing is, if you just do stuff and nothing happens, what's it all mean? What's the point? Oh right, this whole thing is about self-acceptance.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "You are a time bomb, tick-tick-ticking. And I have no intention of being around for the boom.",
        "author": "Mike Ehrmantraut"
    },
    {
        "text": "Don't drink and drive but if you do, call me.",
        "author": "Saul Goodman"
    },
    {
        "text": "I am not in danger, Skyler. I AM the danger!",
        "author": "Walter White"
    },
    {
        "text": "A guy opens his door and gets shot and you think that of me? No. I am the one who knocks!",
        "author": "Walter White"
    },
    {
        "text": "If that’s true, if you don’t know who I am, then maybe your best course… would be to tread lightly.",
        "author": "Walter White"
    },
    {
        "text": "Someone has to protect this family from the man who protects this family.",
        "author": "Skyler White"
    },
    {
        "text": "Smoking marijuana, eating cheetos, and masturbating do not constitute plans in my book.",
        "author": "Walter White"
    },
    {
        "text": "Stay out of my territory.",
        "author": "Walter White"
    },
    {
        "text": "Because I say so.",
        "author": "Walter White"
    },
    {
        "text": "I'm not in the meth business. I'm in the empire business.",
        "author": "Walter White"
    },
    {
        "text": "You all know exactly who I am. Say my name.",
        "author": "Walter White"
    },
    {
        "text": "I watched Jane die. I was there. And I watched her die.",
        "author": "Walter White"
    },
    {
        "text": "I did it for me. I liked it. I was good at it. And... I was really... I was alive.",
        "author": "Walter White"
    },
    {
        "text": "\"Cap'n Cook?\" That's not you? Like I said, no one is looking for you.",
        "author": "Walter White"
    },
    {
        "text": "Do you know how much I make a year? I mean, even if I told you, you wouldn't believe it.",
        "author": "Walter White"
    },
    {
        "text": "Jesus! Just grow some fucking balls!",
        "author": "Walter White"
    },
    {
        "text": "F*ck you! And your eyebrows!",
        "author": "Walter White"
    },
    {
        "text": "Send him to Belize? I'll send YOU to Belize.",
        "author": "Walter White"
    },
    {
        "text": "We're done when I say we're done.",
        "author": "Walter White"
    },
    {
        "text": "Sitting around, smoking marijuana, eating Cheetos and masturbating do not constitute \"plans\".",
        "author": "Walter White"
    },
    {
        "text": "I did it for me. I liked it. I was good at it. And I was really... I was alive.",
        "author": "Walter White"
    },
    {
        "text": "Bitch!",
        "author": "Jesse Pinkman"
    },
    {
        "text": "So you do have a plan? Yeah, Mr. White! Yeah, science!",
        "author": "Jesse Pinkman"
    },
    {
        "text": "I'm a criminal, yo.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "Yeah, bitch! Magnets!",
        "author": "Jesse Pinkman"
    },
    {
        "text": "You're my free pass... bitch!",
        "author": "Jesse Pinkman"
    },
    {
        "text": "Fire in the hole, bitch!",
        "author": "Jesse Pinkman"
    },
    {
        "text": "Did you just bring a bomb into a hospital?",
        "author": "Jesse Pinkman"
    },
    {
        "text": "Seriously? \"Hello Kitty\"?",
        "author": "Jesse Pinkman"
    },
    {
        "text": "Speak into the mic, bitch.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "Better call Saul!",
        "author": "Saul Goodman"
    },
    {
        "text": "You do seem to have a little “shit creek” action going… You know, FYI, you can buy a paddle.",
        "author": "Saul Goodman"
    },
    {
        "text": "If I ever get anal polyps, I'll know what to name them.",
        "author": "Saul Goodman"
    },
    {
        "text": "You two suck at peddling meth.",
        "author": "Saul Goodman"
    },
    {
        "text": "Clearly, his taste in women is the same as his taste in lawyers.",
        "author": "Saul Goodman"
    },
    {
        "text": "Congratulations, you’ve just left your family a second-hand Subaru.",
        "author": "Saul Goodman"
    },
    {
        "text": "I’m not saying it’s not bad. It’s bad. But it could be worse.",
        "author": "Saul Goodman"
    },
    {
        "text": "I hide in plain sight, same as you.",
        "author": "Gustavo Fring"
    },
    {
        "text": "May his death satisfy you.",
        "author": "Gustavo Fring"
    },
    {
        "text": "I will kill your wife, I will kill your son, I will kill your infant daughter.",
        "author": "Gustavo Fring"
    },
    {
        "text": "Everyone sounds like Meryl Streep with a gun to their head.",
        "author": "Mike Ehrmantraut"
    },
    {
        "text": "You know how they say it's been a pleasure'? Well... it hasn't.",
        "author": "Mike Ehrmantraut"
    },
    {
        "text": "Just because you shot Jesse James doesn't mean you are Jesse James.",
        "author": "Mike Ehrmantraut"
    },
    {
        "text": "No more half-measures, Walter.",
        "author": "Mike Ehrmantraut"
    },
    {
        "text": "Shut the f*ck up and let me die in peace.",
        "author": "Mike Ehrmantraut"
    },
    {
        "text": "Keys, scumbag. It's the universal symbol for keys.",
        "author": "Mike Ehrmantraut"
    },
    {
        "text": "I will put you under the jail.",
        "author": "Hank Schrader"
    },
    {
        "text": "My name is ASAC Schrader, and you can go f*ck yourself.",
        "author": "Hank Schrader"
    },
    {
        "text": "They're minerals, Marie! Jesus!",
        "author": "Hank Schrader"
    },
    {
        "text": "Since when do vegans eat fried chicken?",
        "author": "Hank Schrader"
    },
    {
        "text": "You're the smartest guy I ever met, and you're too stupid to see he made up his mind 10 minutes ago.",
        "author": "Hank Schrader"
    },
    {
        "text": "All I can do is wait... for the cancer to come back.",
        "author": "Skyler White"
    },
    {
        "text": "Put me on your magical boat, man, and sail me down your chocolaty river of meth!",
        "author": "Badger"
    },
    {
        "text": "Buzz buzz buzz",
        "author": "The fly"
    },
    {
        "text": "The Universe is Random. Not Inevitable. It's simple Chaos.",
        "author": "Walter White"
    },
    {
        "text": "Sometimes it just feels better not to talk. At All. About Anything. To Anyone.",
        "author": "Walter White"
    },
    {
        "text": "Name one thing in this world that is non negotiable.",
        "author": "Walter White"
    },
    {
        "text": "You are not the guy. You're not capable of being the guy. I had a guy but now I don't. You are not the guy.",
        "author": "Mike Ehrmantraut"
    },
    {
        "text": "If you don’t know who I am, then maybe your best course would be to tread lightly.",
        "author": "Walter White"
    },
    {
        "text": "Walter Jr., you're my big man. There are going to be some things that you'll come to learn about me in the next few days. But just know that no matter how it may look, I only had you in my heart. Goodbye!",
        "author": "Walter White"
    },
    {
        "text": "What I came to realise is that fear, that's the worst of it. That's the real enemy. So, get up, get out in the real world and you kick that bastard as hard you can right in the teeth.",
        "author": "Walter White"
    },
    {
        "text": "You need to stop focusing on the darkness behind you. The past is the past. Nothing can change what we’ve done.",
        "author": "Walter White"
    },
    {
        "text": "This is my own private domicile and I will not be harassed... bitch!",
        "author": "Jesse Pinkman"
    },
    {
        "text": "You don't want a criminal lawyer. You want a criminal lawyer.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "So roll me further bitch!",
        "author": "Jesse Pinkman"
    },
    {
        "text": "I Won.",
        "author": "Walter White"
    },
    {
        "text": "You're never too old for balloons.",
        "author": "Mike Ehrmantraut"
    },
    {
        "text": "I have spent my whole life scared frightened of things that could happen, might happen, might not happen.",
        "author": "Walter White"
    },
    {
        "text": "Now, hey, remember, not all learning comes out of books.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "Then why don't you just fucking die, already?",
        "author": "Walter White Jr"
    },
    {
        "text": "He handles the businesses, and I handle him.",
        "author": "Walter White"
    },
    {
        "text": "Shit!",
        "author": "Walter White"
    },
    {
        "text": "You little bastard.",
        "author": "Walter White"
    },
    {
        "text": "Stop acting like such a baby.",
        "author": "Walter White"
    },
    {
        "text": "Is that your fly-sabre?",
        "author": "Jesse Pinkman"
    },
    {
        "text": "Don't bullshit a bullshitter.",
        "author": "Walter White"
    },
    {
        "text": "Some people are immune to good advice.",
        "author": "Walter White"
    },
    {
        "text": "Well, technically, chemistry is the study of matter. But I prefer to see it as the study of change.",
        "author": "Walter White"
    },
    {
        "text": "Find what you love and let it kill you.",
        "author": "Walter White"
    },
    {
        "text": "Let's see, how should i put this? I'm in, you're out.",
        "author": "Walter White"
    },
    {
        "text": "Never give up control. Live life on your own terms.",
        "author": "Walter White"
    },
    {
        "text": "Fear is the real enemy.",
        "author": "Walter White"
    },
    {
        "text": "All bad things must come to an end.",
        "author": "Walter White"
    },
    {
        "text": "Jesse, you asked me if I was in the meth business or the money business.. Neither. I'm in the empire business.",
        "author": "Walter White"
    },
    {
        "text": "Sometimes the forbidden fruit tastes the sweetest.",
        "author": "Hank Schrader"
    },
    {
        "text": "Free food always tastes good. Free drinks even better.",
        "author": "Hank Schrader"
    },
    {
        "text": "My friends, I promise you that together, we will prosper.",
        "author": "Gustavo Fring"
    },
    {
        "text": "Now look buddy, the last thing I want to do is get you in hot water, but some meth monkey had a feeding frenzy in here.",
        "author": "Hank Schrader"
    },
    {
        "text": "Fifty years I spent like that. Finding myself awake at three in the morning. But you know what? Ever since my diagnosis, I sleep just fine.",
        "author": "Walter White"
    },
    {
        "text": "I told you, Skyler, I warned you for a solid year: you cross me, and there will be consequences.",
        "author": "Walter White"
    },
    {
        "text": "I want my kids back. I want my life back. Please tell me – How much is enough? How big does this pile have to be?",
        "author": "Skyler White"
    },
    {
        "text": "It’s easy money. Until we catch you.",
        "author": "Hank Schrader"
    },
    {
        "text": "I once told a woman I was Kevin Costner and it worked because I believed it.",
        "author": "Saul Goodman"
    },
    {
        "text": "Scientists love lasers.",
        "author": "Saul Goodman"
    },
    {
        "text": "If you’re committed enough, you can make any story work.",
        "author": "Saul Goodman"
    },
    {
        "text": "Did I say you could open your mouth? And, hands off the car!",
        "author": "Hank Schrader"
    },
    {
        "text": "If you believe that there’s a hell, we’re pretty much already going there.",
        "author": "Walter White"
    },
    {
        "text": "You add plus a douchebag to a minus douchebag and you get, Like, Zero Douchebags.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "A guy that clean has to be dirty.",
        "author": "Hank Schrader"
    },
    {
        "text": "There is gold in the streets just waiting for someone to come and scoop it up.",
        "author": "Walter White"
    },
    {
        "text": "The fun’s over. From here on out, I’m Mr. Low Profile. Just another douche bag with a job and three pairs of Dockers. If I’m lucky, month from now, best-case scenario, I’m managing a Cinnabon in Omaha.",
        "author": "Saul Goodman"
    },
    {
        "text": "I am speaking to my family now. Skyler, you are the love of my life. I hope you know that.",
        "author": "Walter White"
    },
    {
        "text": "I could have saved her.",
        "author": "Walter White"
    },
    {
        "text": "I'm not a criminal. I'm a criminal lawyer.",
        "author": "Saul Goodman"
    },
    {
        "text": "I have lived under the threat of death for a year now, and because of that, I've made peace with it.",
        "author": "Walter White"
    },
    {
        "text": "I investigate everyone with whom I do business. What careful man wouldn't?",
        "author": "Gustavo Fring"
    },
    {
        "text": "It’s like Scarface had sex with Mr. Rogers or something.",
        "author": "Hank Schrader"
    },
    {
        "text": "Sitting around, smoking marijuana, eating Cheetos and masturbating do not constitute ‘plans.’",
        "author": "Walter White"
    },
    {
        "text": "Gatorade me, bitch!",
        "author": "Jesse Pinkman"
    },
    {
        "text": "We're done when I say we're done.",
        "author": "Walter White"
    },
    {
        "text": "My name is Skyler White yo. My husband is Walter White... yo.",
        "author": "Skyler White"
    },
    {
        "text": "To all law enforcement entities, this is not an admission of guilt.",
        "author": "Walter White"
    },
    {
        "text": "We're all on the same page. The one that says, if I can't kill you, you'll sure as shit wish you were dead.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "Coin flip is sacred.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "You either run from things, or you face them, Mr. White.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "Tight. Tight. Tight.",
        "author": "Tuco Salamanca"
    },
    {
        "text": "Get busy living or get busy dying.",
        "author": "Stephen King"
    },
    {
        "text": "Free to cook anytime, anywhere.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "Cooking is art. And the shit I cook is the bomb.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "I'm the guy your boss brought here to show you how it's done.",
        "author": "Jesse Pinkman"
    },
    {
        "text": "Moral of the story is: I chose a half measure when I should have gone all the way. I'll never make that mistake again. No more half measures, Walter.",
        "author": "Mike Ehrmantraut"
    },
    {
        "text": "I did it for the chemistry.",
        "author": "Gale Boetticher"
    },
    {
        "text": "You’re early lucky, you know that? You didn’t have to wait your whole life to do something special.",
        "author": "Walter White"
    },
    {
        "text": "You have a good rest of your life, kid.",
        "author": "Jesse Pinkman"
    }
];