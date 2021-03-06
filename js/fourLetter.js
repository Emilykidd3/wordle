document.addEventListener("DOMContentLoaded", () => {
    // import Toastify from 'toastify-js';
    createSquares();
    let word;
    
    const wordsArr = ['abet', 'abut', 'ache', 'alit', 'ante', 'arch', 'aver', 'avow', 'bach', 'back', 'bade', 'bail', 'bait', 'bake', 'bale', 'balk', 'ball', 'band', 'bang', 'bank', 'barb', 'bard', 'bare', 'barf', 'bark', 'base', 'bash', 'bask', 'bate', 'bawl', 'bead', 'beam', 'bean', 'bear', 'beat', 'beef', 'been', 'beep', 'bell', 'belt', 'bend', 'bent', 'bias', 'bide', 'biff', 'bike', 'bilk', 'bill', 'bind', 'bird', 'birl', 'birr', 'bite', 'bitt', 'blab', 'blat', 'bled', 'blew', 'blob', 'blot', 'blow', 'blub', 'blue', 'blur', 'boat', 'bode', 'body', 'boil', 'bolt', 'bomb', 'bond', 'bone', 'bong', 'bonk', 'book', 'boom', 'boot', 'bore', 'born', 'boss', 'bowl', 'brag', 'bray', 'bred', 'brew', 'brim', 'buck', 'buff', 'bulk', 'bull', 'bump', 'bung', 'bunk', 'bunt', 'buoy', 'burl', 'burn', 'burp', 'burr', 'bury', 'bush', 'busk', 'buss', 'bust', 'busy', 'butt', 'buzz', 'caca', 'cage', 'cake', 'calk', 'call', 'calm', 'came', 'camp', 'cane', 'cant', 'card', 'care', 'cart', 'case', 'cash', 'cast', 'cave', 'cede', 'cere', 'chap', 'char', 'chat', 'chaw', 'chid', 'chin', 'chip', 'chop', 'chug', 'chum', 'cite', 'clad', 'clam', 'clap', 'claw', 'clew', 'clip', 'clog', 'clop', 'clot', 'cloy', 'club', 'clue', 'coal', 'coat', 'coax', 'cock', 'code', 'coif', 'coil', 'coin', 'coke', 'comb', 'come', 'comp', 'cone', 'conk', 'cook', 'cool', 'coop', 'cope', 'copy', 'cord', 'core', 'cork', 'corn', 'cosh', 'cost', 'cowl', 'crab', 'cram', 'crap', 'crew', 'crib', 'crop', 'crow', 'cube', 'cuff', 'cull', 'curb', 'cure', 'curl', 'cuss', 'dado', 'damn', 'damp', 'dang', 'dare', 'darn', 'dart', 'dash', 'date', 'daub', 'dawn', 'daze', 'deal', 'deck', 'deed', 'deem', 'defy', 'deke', 'demo', 'dent', 'deny', 'dial', 'dice', 'died', 'diet', 'dike', 'dine', 'ding', 'disc', 'dish', 'disk', 'diss', 'dive', 'dock', 'doff', 'dole', 'done', 'doom', 'dope', 'doss', 'dote', 'dove', 'down', 'doze', 'drag', 'draw', 'drew', 'drip', 'drop', 'drub', 'drug', 'drum', 'duck', 'duel', 'dull', 'dump', 'dung', 'dunk', 'dupe', 'dusk', 'dust', 'earn', 'ease', 'echo', 'edge', 'edit', 'emit', 'envy', 'espy', 'etch', 'even', 'exit', 'face', 'fade', 'fail', 'fake', 'fall', 'fare', 'farm', 'fart', 'fast', 'fate', 'fawn', 'faze', 'fear', 'feed', 'feel', 'fell', 'felt', 'fend', 'fess', 'fete', 'feud', 'file', 'fill', 'film', 'find', 'fine', 'fink', 'fire', 'firm', 'fish', 'fist', 'fizz', 'flag', 'flap', 'flat', 'flaw', 'flay', 'fled', 'flee', 'flew', 'flex', 'flip', 'flit', 'flog', 'flop', 'flow', 'flub', 'flux', 'foal', 'foam', 'foil', 'fold', 'fond', 'fool', 'foot', 'ford', 'fork', 'form', 'foul', 'fowl', 'frag', 'frap', 'fray', 'free', 'fret', 'frit', 'fuel', 'full', 'fume', 'fund', 'funk', 'furl', 'fuse', 'fuss', 'futz', 'gain', 'gait', 'gall', 'game', 'gang', 'gaol', 'gape', 'garb', 'gash', 'gasp', 'gate', 'gave', 'gawk', 'gawp', 'gaze', 'gear', 'geld', 'gibe', 'gift', 'gild', 'gimp', 'gird', 'give', 'glom', 'glow', 'glue', 'glug', 'glut', 'gnaw', 'goad', 'golf', 'gone', 'gong', 'goof', 'gore', 'gown', 'grab', 'gray', 'grew','grey', 'grid', 'grin', 'grip', 'grit', 'grow', 'grub', 'gull', 'gulp', 'gush', 'gust', 'gybe', 'hack', 'hail', 'hale', 'halt', 'hand', 'hang', 'hare', 'hark', 'harm', 'harp', 'hash', 'hasp', 'hast', 'hate', 'hath', 'haul', 'have', 'hawk', 'haze', 'head', 'heal', 'heap', 'hear', 'heat', 'heed', 'heel', 'heft', 'held', 'helm', 'help', 'herd', 'hewn', 'hide', 'hike', 'hill', 'hint', 'hire', 'hiss', 'hive', 'hoax', 'hock', 'hold', 'hole', 'home', 'hone', 'honk', 'hood', 'hoof', 'hook', 'hoop', 'hoot', 'hope', 'horn', 'hose', 'host', 'hove', 'howl', 'huff', 'hulk', 'hull', 'hump', 'hung', 'hunt', 'hurl', 'hurt', 'hush', 'husk', 'hymn', 'hype', 'idle', 'inch', 'iron', 'itch', 'jack', 'jade', 'jail', 'jape', 'jazz', 'jeer', 'jell', 'jerk', 'jest', 'jibe', 'jilt', 'jinx', 'jive', 'join', 'joke', 'jolt', 'josh', 'juke', 'jump', 'junk', 'kayo', 'keel', 'keen', 'keep', 'kept', 'kern', 'kick', 'kill', 'kink', 'kiss', 'kite', 'knap', 'knew', 'knit', 'knot', 'know', 'lace', 'lack', 'laid', 'lain', 'lamb', 'lame', 'land', 'lard', 'lark', 'lash', 'last', 'laud', 'lave', 'laze', 'lead', 'leaf', 'leak', 'lean', 'leap', 'leer', 'left', 'lend', 'lent', 'levy', 'lick', 'lift', 'like', 'lilt', 'lime', 'limp', 'line', 'link', 'lisp', 'list', 'live', 'load', 'loaf', 'loan', 'lock', 'loft', 'loll', 'long', 'look', 'loom', 'loop', 'loot', 'lope', 'lord', 'lose', 'lost', 'lour', 'love', 'lube', 'luck', 'luff', 'luge', 'lull', 'lump', 'lure', 'lurk', 'lust', 'made', 'mail', 'maim', 'make', 'mark', 'mask', 'mate', 'maul', 'meet', 'meld', 'melt', 'mend', 'meow', 'mess', 'miff', 'milk', 'mime', 'mind', 'mine', 'miss', 'moan', 'mock', 'moor', 'moot', 'mope', 'move', 'muck', 'muff', 'muse', 'mush', 'must', 'mute', 'nail', 'name', 'near', 'neck', 'need', 'nest', 'nick', 'nock', 'nose', 'note', 'nuke', 'numb', 'obey', 'ogle', 'okay', 'omen', 'omit', 'ooze', 'open', 'oust', 'pace', 'pack', 'page', 'pain', 'pair', 'palm', 'pant', 'pare', 'park', 'part', 'pass', 'pave', 'pawn', 'peak', 'peal', 'peck', 'peek', 'peel', 'peep', 'peer', 'perk', 'pick', 'pile', 'pine', 'plan', 'plat', 'play', 'plod', 'plop', 'plot', 'plow', 'plug', 'pock', 'poke', 'pool', 'pore', 'pose', 'post', 'pour', 'pout', 'pray', 'prim', 'prod', 'prop', 'puff', 'pull', 'pulp', 'pump', 'purl', 'purr', 'push', 'putt', 'quip', 'quit', 'quiz', 'race', 'rage', 'raid', 'rain', 'rake', 'rang', 'rank', 'rant', 'rape', 'rate', 'raze', 'read', 'ream', 'reap', 'reef', 'reek', 'reel', 'rein', 'rely', 'rend', 'rent', 'rest', 'rice', 'ride', 'rile', 'ring', 'riot', 'rise', 'risk', 'rive', 'roam', 'roar', 'rock', 'rode', 'roil', 'roll', 'romp', 'roof', 'room', 'root', 'rope', 'rout', 'rove', 'ruin', 'rule', 'rush', 'rust', 'sack', 'said', 'sail', 'sale', 'salt', 'sass', 'sate', 'save', 'sawn', 'scab', 'scam', 'scan', 'scar', 'scat', 'scud', 'scum', 'seal', 'seam', 'seat', 'seed', 'seek', 'seem', 'seen', 'seep', 'sell', 'send', 'sent', 'sewn', 'shag', 'sham', 'shed', 'ship', 'shit', 'shoe', 'shoo', 'shop', 'shot', 'show', 'shun', 'shut', 'side', 'sift', 'sigh', 'sign', 'sing', 'sink', 'sire', 'site', 'size', 'skew', 'skid', 'skim', 'skin', 'skip', 'slab', 'slag', 'slam', 'slap', 'slat', 'slay', 'sled', 'slew', 'slid', 'slim', 'slip', 'slit', 'slog', 'slop', 'slot', 'slow', 'slue', 'slug', 'slum', 'slur', 'smut', 'snag', 'snap', 'snip', 'snow', 'snub', 'soak', 'soap', 'soar', 'sock', 'soil', 'sold', 'sole', 'solo', 'sort', 'sour', 'sown', 'spam', 'span', 'spar', 'spat', 'spay', 'sped', 'spew', 'spin', 'spit', 'spot', 'spud', 'spur', 'stab', 'stag', 'star', 'stay', 'stem', 'step', 'stet', 'stew', 'stir', 'stop', 'stow', 'stub', 'stud', 'stun', 'suck', 'suit', 'sulk', 'sung', 'sunk', 'surf', 'swab', 'swam', 'swap', 'swat', 'sway', 'swig', 'swim', 'swob', 'swot', 'swum', 'tack', 'tail', 'talc', 'talk', 'tame', 'tamp', 'tank', 'tape', 'task', 'taxi', 'team', 'tear', 'teem', 'tell', 'tend', 'tent', 'term', 'test', 'text', 'thaw', 'thin', 'thud', 'tick', 'tide', 'tile', 'tilt', 'time', 'ting', 'tint', 'tire', 'toil', 'told', 'toll', 'tone', 'took', 'tool', 'toot', 'tope', 'tore', 'torn', 'toss', 'tote', 'tour', 'tout', 'tram', 'trap', 'tree', 'trek', 'trim', 'trip', 'trod', 'trot', 'true', 'tube', 'tuck', 'tune', 'turf', 'turn', 'tusk', 'twin', 'twit', 'type', 'undo', 'urge', 'vamp', 'vary', 'veer', 'veil', 'vein', 'vend', 'vent', 'vest', 'veto', 'vide', 'view', 'visa', 'vise', 'void', 'vote', 'wade', 'waft', 'wage', 'wail', 'wait', 'wake', 'walk', 'wall', 'wane', 'want', 'ward', 'warm', 'warn', 'warp', 'wash', 'waul', 'wave', 'wawl', 'wean', 'wear', 'weed', 'weep', 'weld', 'well', 'welt', 'wend', 'went', 'wept', 'were', 'wert', 'wham', 'whap', 'whet', 'whip', 'whir', 'whiz', 'whop', 'will', 'wilt', 'wine', 'wink', 'wipe', 'wire', 'wish', 'wist', 'wive', 'woke', 'wolf', 'woof', 'word', 'wore', 'work', 'worm', 'worn', 'wove', 'wrap', 'writ', 'xray', 'yack', 'yank', 'yarn', 'yaup', 'yawn', 'yawp', 'yean', 'yell', 'yelp', 'yoke', 'yowl', 'zero', 'zest', 'zing', 'zone', 'zonk', 'zoom',
    ]
    
    getNewWord();

    let guessedWords = [[]]
    let availableSpace = 1;

    let guessedWordCount = 0;

    const keys = document.querySelectorAll('.keyboard-row button')

    // function to color keyboard based on user input
    function colorKeyboard(letter, color) {
        console.log("here")
        for (const elem of document.getElementsByClassName("keyboard-button")) {
            if (elem.textContent === letter) {
                let oldColor = elem.style.backgroundColor
                console.log(oldColor)
                if (oldColor === "rgb(83, 141, 78)"){
                    return
                }
                if (oldColor === "rgb(181, 159, 59)" && color !== "rgb(83, 141, 78)") {
                    return
                }
                elem.style.backgroundColor = color
                break
            }
        }
    }

    function getNewWord() {
        let randomNumer = Math.floor(Math.random() * wordsArr.length);
        word = wordsArr[randomNumer];
        console.log(word);
        return wordsArr[randomNumer];
    }

    function getCurrentWordArr() {
        const numberOfGuessedWords = guessedWords.length;
        return guessedWords[numberOfGuessedWords - 1]
    }

    function updateGuessedWords(letter){
        const currentWordArr = getCurrentWordArr();

        if (currentWordArr && currentWordArr.length < 4) {
            currentWordArr.push(letter)

            const availableSpaceEl = document.getElementById(String(availableSpace))
            availableSpace = availableSpace + 1;

            availableSpaceEl.textContent = letter;
        }
    }

    function getTileColor(letter, index) {
        let color;
        const isCorrectLetter = word.includes(letter)

        if (!isCorrectLetter) {
            color === "rgb(58, 58, 60)";
            return "rgb(58, 58, 60)"
        }

        const letterInThatPosition = word.charAt(index);
        const isCorrectPosition = letter === letterInThatPosition

        if (isCorrectPosition) {
            color === "rgb(83, 141, 78)";
            return "rgb(83, 141, 78)"
        }

        color === "rgb(181, 159, 59)";
        square.style.backgroundColor = color;
        colorKeyboard(letter, color);
        return "rgb(181, 159, 59)"
    }

    function handleSubmitWord() {
        const currentWordArr = getCurrentWordArr();
        if (currentWordArr.length !== 4) {
            window.alert("word must be 4 letters")
        }

        const currentWord = currentWordArr.join('');

        if (wordsArr.includes(currentWord)){
            const firstLetterId = guessedWordCount * 4 + 1;
            const interval = 200;
            currentWordArr.forEach((letter, index) => {
                setTimeout(() => {
                    const tileColor = getTileColor(letter, index);
    
                    const letterId = firstLetterId + index;
                    const letterEl = document.getElementById(letterId)
                    letterEl.classList.add("animate__flipInX");
                    letterEl.style = `background-color:${tileColor}; border-color:${tileColor}`
    
                }, interval * index);
            })
    
            guessedWordCount += 1;
    
            if (currentWord === word) {
                // window.alert("Congratulations!")
            }
    
            if (guessedWords.length === 5) {
                window.alert(`Sorry, you have no more guesses! the words is ${word}`)
            }
    
            guessedWords.push([]);
        } else {
            window.alert("that's not a word!")
            return;
        }
    }

    function createSquares() {
        const gameBoard = document.getElementById("four-board")

        for (let i = 0; i < 24; i++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("animate__animated");
            square.setAttribute("id", i + 1)
            gameBoard.appendChild(square);
        }
    }

    function handleDeleteLetter() {
        const currentWordArr = getCurrentWordArr();
        const removedLetter = currentWordArr.pop();

        guessedWords[guessedWords.length - 1] = currentWordArr;

        const lastLetterEl = document.getElementById(String(availableSpace - 1))

        lastLetterEl.textContent = ''
        availableSpace -=1;
    }

    for (let i = 0; i <keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const letter = target.getAttribute("data-key");

            if (letter === "enter"){
                handleSubmitWord();
                return;
            }

            if (letter === "del"){
                handleDeleteLetter();
                return;
            }

            updateGuessedWords(letter);
        }
    }
})