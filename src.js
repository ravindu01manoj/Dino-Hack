var about = {sonic:'Changing the player to Sonic',dino: 'Changing the player to Trex',jumpsonicon: 'Changing the player to Sonic While Jumping',jumpsonicoff: 'Turn Off jumpsonicon Cheat',jumpdynoon: 'Changing the player to trex While Jumping',jumpdinooff: 'Turn Off jumpdynoon Cheat',speed : 'Change The Game Speed. usage: 20speed',score : 'Set The Score While Playing. Max core is 999999',stopscore : 'Stop The Score Update',runscore : 'Disable stopscore cheat code',fastscore : 'Speed up The Score Update',slowscore : 'Disable fastscore cheat code',hack : 'Freaze Game Over',autoplayon : 'Now Game Is Autoplaying...',autoplayoff : 'Turn Off Autoplay Mod'},xz = 'Enter',oldimg,xlt,backup_score,xmt, old,jumpsound, donthave = true,xte = '',spds = 50,ac = true,xxt, xdt
,sonicimage = "data:image/png;base64,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",
    ll = () => {
        let e = window.Runner.instance_,
            t = e.tRex;
        if (t.jumping || t.ducking) {
            if (ac) {
                manoj.sonic()
            } else {
                manoj.dino()
            }
        } else {
            if (!ac) {
                manoj.sonic()
            } else {
                manoj.dino()
            }
        }
        requestAnimationFrame(xxt);
    },
    mm = () => {
        Runner.instance_.distanceRan = backup_score
        requestAnimationFrame(xmt)
    },nn = () => {
        Runner.instance_.distanceRan = Runner.instance_.distanceRan + (spds * 400)
        requestAnimationFrame(xlt)
    },
    atp = () => {
        Runner.instance_.setSpeed(10);
        let e = window.Runner.instance_,
            t = e.tRex;
            var o,n,s;
            try {
                n = t.xPos,
                s = e.horizon.obstacles,
                o = s.find(e => e.xPos > n);
            } catch {}
            if (t.jumping || t.ducking) {
                if(o && o.xPos>= 120) {
                    t.setDuck()
                    window.Runner.instance_.tRex.ducking = false}
                requestAnimationFrame(xdt);
                return
            }
         
        if (o && o.xPos - n <= 120 && o.yPos != 50) {
            if(o.yPos != 75) {
                const resourceTemplate = document.getElementById('audio-resources').content;
            jumpsound = resourceTemplate.getElementById('offline-sound-press').src;
            var snd = new Audio(jumpsound);
            snd.play();
            t.startJump(50)
            } else {
                const resourceTemplate = document.getElementById('audio-resources').content;
            jumpsound = resourceTemplate.getElementById('offline-sound-press').src;
            var snd = new Audio(jumpsound);
            snd.play();
            t.setDuck(true)
            }
        }

        
        requestAnimationFrame(xdt)
    },
    ddk = (e) => {
        xte += e.key
        if (manojuse(xte.toLocaleLowerCase()) || e.key == xz) return xte = '';
    },
    manoj = {
        speed: spd => {
            spd = isNaN(spd) ? 10 : spd
            Runner.instance_.setSpeed(spd)
        },
        sonic: () => {
            document.getElementById('offline-resources-1x').src = sonicimage;
            document.getElementById('offline-resources-2x').src = sonicimage
        },
        jumpsonicon: () => {
            ac = true
            xxt = ll
            requestAnimationFrame(xxt)
        },
        jumpsonicoff: () => {
            xxt = () => {}
        },
        jumpdinoon: () => {
            ac = false
            xxt = ll
            requestAnimationFrame(xxt)
        },
        jumpdinooff: () => {
            xxt = () => {}
        },
        dino: () => {
            document.getElementById('offline-resources-1x').src = oldimg;
            document.getElementById('offline-resources-2x').src = oldimg
        },
        hack: () => Runner.prototype.gameOver = () => {},
        normal: () => {
            Runner.instance_.setSpeed(10);
            Runner.prototype.gameOver = old
            xdt = () => {}
            xmt = () => {}
        },
        autoplayon: () => {
            xdt = atp
            requestAnimationFrame(xdt);
        },
        autoplayoff: () => {
            xdt = () => {}
        },
        scoreset: (score) => {
            Runner.instance_.distanceRan = backup_score = score * 40
        },
        stopscore: () => {
            xmt = mm
            backup_score = Runner.instance_.distanceRan
            requestAnimationFrame(xmt)
        },
        runscore: () => {
            xmt = () => {}
        },
        fastscore: () => {
            xlt = nn
            requestAnimationFrame(xlt)
        },
        slowscore: () => {
            xlt = () => {}
        },
        cheat : () => {
            var msg = toset('Chrome Dyno Cheat Codes\nBy Ravindu Manoj') + '\n\n'
            var ab = Object.keys(about)
            console.log(ab)
                for (const key of ab) {
                    msg += toset(key) + ':- ' + toset(about[key],'italic') + '\n'
                }
                msg += '\n sources: https://github.com/ravindu01manoj/Dino-Hack'
                
            alert(msg)
        }
    }
oldimg = document.getElementById('offline-resources-1x').src;
old = Runner.prototype.gameOver;
if(donthave) {
    document.onkeypress = ddk
}
function manojuse(t) {
    if (t.includes('speed')) {
        manoj.speed(Number(t.replace('speed', '').trim()));
        alert(toset('Cheat Activated \n\n') + toset(t + 'speed - '+ about.speed,'m'))
        return true
    }
    if (t.includes('score') && !t.includes('stop') && !t.includes('run') && !t.includes('slow') && !t.includes('past')) {
        var number = Number(t.replace('score', '').trim())
        if (isNaN(number) || number > 999999) return alert(toset('use A number before the cheat code \nex:- 1520score\nwarn:- max score is 999999'))
        manoj.scoreset(number);
        alert(toset('Cheat Activated \n\n') + toset('score - '+ about.score,'m'))
        return true
    }
    if (manoj[t]) {
        manoj[t]()
        if(t !== 'cheat')alert(toset('Cheat Activated \n\n') + toset(t + '- '+ about[t],'m'))
        return true
    }
    return false
}
function toset(str, variant, flags) {
    const offsets = {m: [0x1d670, 0x1d7f6],b: [0x1d400, 0x1d7ce],i: [0x1d434, 0x00030],bi: [0x1d468, 0x00030],c: [0x1d49c, 0x00030],bc: [0x1d4d0, 0x00030],g: [0x1d504, 0x00030],d: [0x1d538, 0x1d7d8],bg: [0x1d56c, 0x00030],s: [0x1d5a0, 0x1d7e2],bs: [0x1d5d4, 0x1d7ec],is: [0x1d608, 0x00030],bis: [0x1d63c, 0x00030],o: [0x24B6, 0x2460],p: [0x249C, 0x2474],w: [0xff21, 0xff10],u: [0x2090, 0xff10]
    }
    const variantOffsets = {'monospace': 'm','bold': 'b','italic': 'i','bold italic': 'bi','script': 'c','bold script': 'bc','gothic': 'g','gothic bold': 'bg','doublestruck': 'd','sans': 's','bold sans': 'bs','italic sans': 'is','bold italic sans': 'bis','parenthesis': 'p','circled': 'o','fullwidth': 'w'
    }
    var special = {m: {    ' ': 0x2000,'-': 0x2013},i: {    'h': 0x210e},g: {    'C': 0x212d,'H': 0x210c,'I': 0x2111,'R': 0x211c,'Z': 0x2128},o: {    '0': 0x24EA,'1': 0x2460,'2': 0x2461,'3': 0x2462,'4': 0x2463,'5': 0x2464,'6': 0x2465,'7': 0x2466,'8': 0x2467,'9': 0x2468,},p: {},w: {}
    }
    for (var i = 97; i <= 122; i++) {special.p[String.fromCharCode(i)] = 0x249C + (i - 97)}
    for (var i = 97; i <= 122; i++) {special.w[String.fromCharCode(i)] = 0xff41 + (i - 97)}
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    var getType = (cv) => {return variantOffsets[cv] ? variantOffsets[cv] : offsets[cv] ?cv: 'bs'}
    var getFlag = function (flag, flags) {
        if (!flags) return false
        return flags.split(',').indexOf(flag) > -1
    }
    var type = getType(variant),underline = getFlag('underline', flags),strike = getFlag('strike', flags),result = '';
    for (var k of str) {
        let index,c = k
        if (special[type] && special[type][c]) c = String.fromCodePoint(special[type][c])
        if (type && (index = chars.indexOf(c)) > -1) {
            result += String.fromCodePoint(index + offsets[type][0])
        } else if (type && (index = numbers.indexOf(c)) > -1) {
            result += String.fromCodePoint(index + offsets[type][1])
        } else {
            result += c
        }
        if (underline) result += '\u0332'
        if (strike) result += '\u0336'
    }
    return result
}