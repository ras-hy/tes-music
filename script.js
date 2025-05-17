let varaudio = document.getElementsByClassName('audio')
let arryaudio = Array.from(varaudio)
arryaudio.forEach(audio => {
    audio.addEventListener('ended', function () {
        let lagu = arryaudio.filter(a => a !== audio)
        let lagurandom = Math.floor(Math.random() * lagu.length)
        let laguterpilih = lagu[lagurandom]
        laguterpilih.play();
    })
});
let varaudio2 = document.getElementsByClassName('audio2')
let arryaudio2 = Array.from(varaudio2)
arryaudio2.forEach(audio => {
    audio.addEventListener('ended', function () {
        let lagu = arryaudio2.filter(a => a !== audio)
        let lagurandom = Math.floor(Math.random() * lagu.length)
        let laguterpilih = lagu[lagurandom]
        laguterpilih.play();
    })
});
let varaudio3 = document.getElementsByClassName('audio3')
let arryaudio3 = Array.from(varaudio3)
arryaudio3.forEach(audio => {
    audio.addEventListener('ended', function () {
        let lagu = arryaudio3.filter(a => a !== audio)
        let lagurandom = Math.floor(Math.random() * lagu.length)
        let laguterpilih = lagu[lagurandom]
        laguterpilih.play();
    })
});
let varaudio4 = document.getElementsByClassName('audio4')
let arryaudio4 = Array.from(varaudio4)
arryaudio4.forEach(audio => {
    audio.addEventListener('ended', function () {
        let lagu = arryaudio4.filter(a => a !== audio)
        let lagurandom = Math.floor(Math.random() * lagu.length)
        let laguterpilih = lagu[lagurandom]
        laguterpilih.play();
    })
});
let pp2 = document.getElementsByClassName('gambartombolpause')[1]
let dio = document.querySelectorAll(
    "#musik1py1, #musik2py1, #musik3py1, #musik4py1, #musik5py1, #musik6py1, #musik7py1, #musik8py1, #musik9py1, #musik10py1, #musik11py1, #musik12py1, #musik13py1, #musik14py1, #musik15py1, #musik16py1, #musik17py1, #musik18py1, #musik19py1, #musik20py1"
);
let dio2 = document.querySelectorAll(
    "#musik1py2, #musik2py2, #musik3py2, #musik4py2, #musik5py2, #musik6py2, #musik7py2, #musik8py2, #musik9py2, #musik10py2, #musik11py2, #musik12py2, #musik13py2, #musik14py2, #musik15py2, #musik16py2, #musik17py2, #musik18py2, #musik19py2, #musik20py2"
);
let dio3 = document.querySelectorAll(
    "#musik1py3, #musik2py3, #musik3py3, #musik4py3, #musik5py3, #musik6py3, #musik7py3, #musik8py3, #musik9py3, #musik10py3, #musik11py3, #musik12py3, #musik13py3, #musik14py3, #musik15py3, #musik16py3, #musik17py3, #musik18py3, #musik19py3, #musik20py3"
);
let dio4 = document.querySelectorAll(
    "#musik1py4, #musik2py4, #musik3py4, #musik4py4, #musik5py4, #musik6py4, #musik7py4, #musik8py4, #musik9py4, #musik10py4, #musik11py4, #musik12py4, #musik13py4, #musik14py4, #musik15py4, #musik16py4, #musik17py4, #musik18py4, #musik19py4, #musik20py4"
);
let pulg1 = document.querySelectorAll(
    ".pulg1, .pulg2, .pulg3, .pulg4, .pulg5, .pulg6, .pulg7, .pulg8, .pulg9, .pulg10, .pulg11, .pulg12, .pulg13, .pulg14, .pulg15, .pulg16, .pulg17, .pulg18, .pulg19, .pulg20"
);

let pulg2 = document.querySelectorAll(
    ".pulg1222, .pulg222, .pulg322, .pulg422, .pulg522, .pulg622, .pulg722, .pulg822, .pulg922, .pulg102, .pulg112, .pulg122, .pulg132, .pulg142, .pulg152, .pulg162, .pulg172, .pulg182, .pulg192, .pulg202"
);

let pulg3 = document.querySelectorAll(
    ".pulg1333, .pulg233, .pulg333, .pulg433, .pulg533, .pulg633, .pulg733, .pulg833, .pulg933, .pulg103, .pulg113, .pulg123, .pulg133, .pulg143, .pulg153, .pulg163, .pulg173, .pulg183, .pulg193, .pulg203"
);

let pulg4 = document.querySelectorAll(
    ".pulg1444, .pulg244, .pulg344, .pulg444, .pulg544, .pulg644, .pulg744, .pulg844, .pulg944, .pulg104, .pulg114, .pulg124, .pulg134, .pulg144, .pulg154, .pulg164, .pulg174, .pulg184, .pulg194, .pulg204"
);

let pause = true
let audiodi = 0
let audiotersimpan = null
let c = 0
function c1() {
    c = 1
}
function c2() {
    c = 2
}
function c3() {
    c = 3
}
function c4() {
    c = 4
}
function jalankanaudio() {
    let semuaaudio = document.querySelectorAll('audio')
    let semuaaudio1 = document.querySelectorAll('.audio')
    let semuaaudio2 = document.querySelectorAll('.audio2')
    let semuaaudio3 = document.querySelectorAll('.audio3')
    let semuaaudio4 = document.querySelectorAll('.audio4')
    let kondisiaudio = false
    semuaaudio.forEach(audio => {
        if (!audio.paused) {
            kondisiaudio = true
            audiotersimpan = audio
            audio.pause()
            document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/pause.png';
            pp2.src = 'imgtombol/pause.png';
            semuaaudio1.forEach(a => {
                if (a.play) {
                    document.getElementsByClassName('pausepy')[0].src = 'imgtombol/pausewhite.png';
                }
            })
            semuaaudio2.forEach(a => {
                if (a.play) {
                    document.getElementsByClassName('pausepy')[1].src = 'imgtombol/pausewhite.png';
                }
            })
            semuaaudio3.forEach(a => {
                if (a.play) {
                    document.getElementsByClassName('pausepy')[2].src = 'imgtombol/pausewhite.png';
                }
            })
            semuaaudio4.forEach(a => {
                if (a.play) {
                    document.getElementsByClassName('pausepy')[3].src = 'imgtombol/pausewhite.png';
                }
            })
        }
    })
    if (audiotersimpan !== null) {
        console.log(audiotersimpan)
    }
    if (!kondisiaudio && audiotersimpan !== null) {
        audiotersimpan.play()
        document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/play.png';
        pp2.src = 'imgtombol/play.png';
        semuaaudio1.forEach(a => {
            if (audiotersimpan === a) {
                document.getElementsByClassName('pausepy')[0].src = 'imgtombol/playwhite.png';
            }
        })
        semuaaudio2.forEach(a => {
            if (audiotersimpan === a) {
                document.getElementsByClassName('pausepy')[1].src = 'imgtombol/playwhite.png';
            }
        })
        semuaaudio3.forEach(a => {
            if (audiotersimpan === a) {
                document.getElementsByClassName('pausepy')[2].src = 'imgtombol/playwhite.png';
            }
        })
        semuaaudio4.forEach(a => {
            if (audiotersimpan === a) {
                document.getElementsByClassName('pausepy')[3].src = 'imgtombol/playwhite.png';
            }
        })

    }
    if (audiotersimpan == null) {
        semuaaudio[0].play()
        pulg1[0].src = 'imgtombol/play2.png'
        document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/play.png';
        pp2.src = 'imgtombol/play.png';
        document.getElementsByClassName('pausepy')[0].src = 'imgtombol/playwhite.png';
    }
}

let pausepy1 = document.getElementsByClassName('pausepy')[0]
let pausepy2 = document.getElementsByClassName('pausepy')[1]
let pausepy3 = document.getElementsByClassName('pausepy')[2]
let pausepy4 = document.getElementsByClassName('pausepy')[3]
let audio0 = document.querySelectorAll("audio")
let audi1 = document.querySelectorAll('.audio')
let audi2 = document.querySelectorAll('.audio2')
let audi3 = document.querySelectorAll('.audio3')
let audi4 = document.querySelectorAll('.audio4')
if (c === 1) {
    audi1.forEach(a => {
        if (a.play) {
            document.getElementsByClassName('pausepy')[0].src = 'imgtombol/playwhite.png';
        }
        if (a.paused) {
            document.getElementsByClassName('pausepy')[0].src = 'imgtombol/pausewhite.png';
        }
    })
}
if (c === 2) {
    audi2.forEach(a => {
        if (a.play) {
            document.getElementsByClassName('pausepy')[1].src = 'imgtombol/playwhite.png';
        }
        if (a.paused) {
            document.getElementsByClassName('pausepy')[1].src = 'imgtombol/pausewhite.png';
        }
    })
}
if (c === 3) {
    audi3.forEach(a => {
        if (a.play) {
            document.getElementsByClassName('pausepy')[2].src = 'imgtombol/playwhite.png';
        }
        if (a.paused) {
            document.getElementsByClassName('pausepy')[2].src = 'imgtombol/pausewhite.png';
        }
    })
}
if (c === 4) {
    audi4.forEach(a => {
        if (a.play) {
            document.getElementsByClassName('pausepy')[3].src = 'imgtombol/playwhite.png';
        }
        if (a.paused) {
            document.getElementsByClassName('pausepy')[3].src = 'imgtombol/pausewhite.png';
        }
    })
}

function jalankanaudio1() {
    let semuaaudio = document.querySelectorAll('.audio')
    let kondisiaudio = false
    audi2.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
    })
    audi3.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
    })
    audi4.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
    })
    pausepy2.src = 'imgtombol/pausewhite.png'
    pausepy3.src = 'imgtombol/pausewhite.png'
    pausepy4.src = 'imgtombol/pausewhite.png'
    semuaaudio.forEach(audio => {
        if (!audio.paused) {
            kondisiaudio = true;
            audiotersimpan = audio;
            audio.pause();
            document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/pause.png';
            pp2.src = 'imgtombol/pause.png';
            pausepy1.src = 'imgtombol/pausewhite.png'
        }
    })
    semuaaudio.forEach(audio => {
        if (!kondisiaudio && audiotersimpan !== audio) {
            semuaaudio[0].play()
            document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/play.png';
            pp2.src = 'imgtombol/play.png';
            pausepy1.src = 'imgtombol/playwhite.png'
        }
    })
    semuaaudio.forEach(audio => {
        if (!kondisiaudio && audiotersimpan === audio) {
            audiotersimpan.play()
            audiotersimpan.addEventListener("play", () => {
                semuaaudio.forEach(a => {
                    if (a !== audiotersimpan) {
                        a.pause()
                        a.currentTime = 0;
                    }
                })
            })
            document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/play.png';
            pp2.src = 'imgtombol/play.png';
            pausepy1.src = 'imgtombol/playwhite.png'
        }
    })
    if (audiotersimpan === null) {
        semuaaudio[0].play()
        document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/play.png';
        pp2.src = 'imgtombol/play.png';
        pausepy1.src = 'imgtombol/playwhite.png'
    }
}
function jalankanaudio2() {
    let semuaaudio = document.querySelectorAll('.audio2')
    let kondisiaudio = false
    audi1.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
    })
    audi3.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
    })
    audi4.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
    })
    pausepy1.src = 'imgtombol/pausewhite.png'
    pausepy3.src = 'imgtombol/pausewhite.png'
    pausepy4.src = 'imgtombol/pausewhite.png'
    semuaaudio.forEach(audio => {
        if (!audio.paused) {
            kondisiaudio = true
            audiotersimpan = audio
            audio.pause()
            document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/pause.png';
            pp2.src = 'imgtombol/pause.png';
            pausepy2.src = 'imgtombol/pausewhite.png'
        }
    })
    semuaaudio.forEach(audio => {
        if (!kondisiaudio && audiotersimpan !== audio) {
            semuaaudio[0].play()
            document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/play.png';
            pp2.src = 'imgtombol/play.png';
            pausepy2.src = 'imgtombol/playwhite.png'
        }
    })
    semuaaudio.forEach(audio => {
        if (!kondisiaudio && audiotersimpan === audio) {
            audiotersimpan.play()
            audiotersimpan.addEventListener("play", () => {
                semuaaudio.forEach(a => {
                    if (a !== audiotersimpan) {
                        a.pause()
                        a.currentTime = 0;
                    }
                })
            })
            document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/play.png';
            pp2.src = 'imgtombol/play.png';
            pausepy2.src = 'imgtombol/playwhite.png'
        }
    })

    if (audiotersimpan == null) {
        semuaaudio[0].play()
        pausepy2.src = 'imgtombol/playwhite.png'
    }
}
function jalankanaudio3() {
    let semuaaudio = document.querySelectorAll('.audio3')
    let kondisiaudio = false
    audi1.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
    })
    audi2.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
    })
    audi4.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
    })
    pausepy1.src = 'imgtombol/pausewhite.png'
    pausepy2.src = 'imgtombol/pausewhite.png'
    pausepy4.src = 'imgtombol/pausewhite.png'
    semuaaudio.forEach(audio => {
        if (!audio.paused) {
            kondisiaudio = true
            audiotersimpan = audio
            audio.pause()
            document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/pause.png';
            pp2.src = 'imgtombol/pause.png';
            pausepy3.src = 'imgtombol/pausewhite.png'
        }
    })
    semuaaudio.forEach(audio => {
        if (!kondisiaudio && audiotersimpan !== audio) {
            semuaaudio[0].play()
            document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/play.png';
            pp2.src = 'imgtombol/play.png';
            pausepy3.src = 'imgtombol/playwhite.png'
        }
    })
    semuaaudio.forEach(audio => {
        if (!kondisiaudio && audiotersimpan === audio) {
            audiotersimpan.play()
            audiotersimpan.addEventListener("play", () => {
                semuaaudio.forEach(a => {
                    if (a !== audiotersimpan) {
                        a.pause()
                        a.currentTime = 0;
                    }
                })
            })
            document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/play.png';
            pp2.src = 'imgtombol/play.png';
            pausepy3.src = 'imgtombol/playwhite.png'
        }
    })

    if (audiotersimpan == null) {
        semuaaudio[0].play()
        pausepy3.src = 'imgtombol/playwhite.png'
    }
}
function jalankanaudio4() {
    let semuaaudio = document.querySelectorAll('.audio4')
    let kondisiaudio = false
    audi1.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
    })
    audi2.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
    })
    audi3.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
    })
    pausepy1.src = 'imgtombol/pausewhite.png'
    pausepy2.src = 'imgtombol/pausewhite.png'
    pausepy3.src = 'imgtombol/pausewhite.png'
    semuaaudio.forEach(audio => {
        if (!audio.paused) {
            kondisiaudio = true
            audiotersimpan = audio
            audio.pause()
            document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/pause.png';
            pp2.src = 'imgtombol/pause.png';
            pausepy4.src = 'imgtombol/pausewhite.png'
        }
    })
    semuaaudio.forEach(audio => {
        if (!kondisiaudio && audiotersimpan !== audio) {
            semuaaudio[0].play()
            document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/play.png';
            pp2.src = 'imgtombol/play.png';
            pausepy4.src = 'imgtombol/playwhite.png'
        }
    })
    semuaaudio.forEach(audio => {
        if (!kondisiaudio && audiotersimpan === audio) {
            audiotersimpan.play()
            audiotersimpan.addEventListener("play", () => {
                semuaaudio.forEach(a => {
                    if (a !== audiotersimpan) {
                        a.pause()
                        a.currentTime = 0
                    }
                })
            })
            document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/play.png';
            pp2.src = 'imgtombol/play.png';
            pausepy4.src = 'imgtombol/playwhite.png'
        }
    })

    if (audiotersimpan == null) {
        semuaaudio[0].play()
        pausepy4.src = 'imgtombol/playwhite.png'
    }
}
let playlistdi = 0
let ply1 = []
let pus1 = []
let ply2 = []
let pus2 = []
let ply3 = []
let pus3 = []
let ply4 = []
let pus4 = []
for (let g = 0; g < 20; g++) {
    ply1[g] = function () {
        pulg1[g].src = "/imgtombol/play2.png"
    }
    pus1[g] = function () {
        pulg1[g].src = "/imgtombol/pause2.png"
    }
    ply2[g] = function () {
        pulg2[g].src = "/imgtombol/play2.png"
    }
    pus2[g] = function () {
        pulg2[g].src = "/imgtombol/pause2.png"
    }
    ply3[g] = function () {
        pulg3[g].src = "/imgtombol/play2.png"
    }
    pus3[g] = function () {
        pulg3[g].src = "/imgtombol/pause2.png"
    }
    ply4[g] = function () {
        pulg4[g].src = "/imgtombol/play2.png"
    }
    pus4[g] = function () {
        pulg4[g].src = "/imgtombol/pause2.png"
    }
}
let ps1 = document.getElementById('ps1')
let ps2 = document.getElementById('ps2')
let ps3 = document.getElementById('ps3')
let ps4 = document.getElementById('ps4')
function p1() {
    playlistdi = 1
    ps1.style.setProperty("display", "block")
    ps2.style.setProperty("display", "none")
    ps3.style.setProperty("display", "none")
    ps4.style.setProperty("display", "none")
    for (let g = 0; g < 20; g++) {
        dio[g].addEventListener("play", ply1[g]);
        dio[g].addEventListener("pause", pus1[g]);
        if (!window.matchMedia("(hover:hover)").matches) {
            pulg2[g].style.display = 'none'
            pulg3[g].style.display = 'none'
            pulg4[g].style.display = 'none'
            pulg1[g].style.display = 'block'
        }
    }

}

function p2() {
    playlistdi = 2
    console.log(playlistdi)
    ps2.style.setProperty("display", "block")
    ps1.style.setProperty("display", "none")
    ps3.style.setProperty("display", "none")
    ps4.style.setProperty("display", "none")
    for (let g = 0; g < 20; g++) {
        dio2[g].addEventListener("play", ply2[g]);
        dio2[g].addEventListener("pause", pus2[g]);
        if (!window.matchMedia("(hover:hover)").matches) {
            pulg1[g].style.display = 'none'
            pulg3[g].style.display = 'none'
            pulg4[g].style.display = 'none'
            pulg2[g].style.display = 'block'
        }
    }
}


function p3() {
    playlistdi = 3
    console.log(playlistdi)
    ps3.style.setProperty("display", "block")
    ps1.style.setProperty("display", "none")
    ps2.style.setProperty("display", "none")
    ps4.style.setProperty("display", "none")
    for (let g = 0; g < 20; g++) {
        dio3[g].addEventListener("play", ply3[g]);
        dio3[g].addEventListener("pause", pus3[g]);
        if (!window.matchMedia("(hover:hover)").matches) {
            pulg1[g].style.display = 'none'
            pulg2[g].style.display = 'none'
            pulg4[g].style.display = 'none'
            pulg3[g].style.display = 'block'
        }
    }
}
function p4() {
    playlistdi = 4
    console.log(playlistdi)
    ps4.style.setProperty("display", "block")
    ps1.style.setProperty("display", "none")
    ps2.style.setProperty("display", "none")
    ps3.style.setProperty("display", "none")
    for (let g = 0; g < 20; g++) {
        dio4[g].addEventListener("play", ply4[g]);
        dio4[g].addEventListener("pause", pus4[g]);
        if (!window.matchMedia("(hover:hover)").matches) {
            pulg1[g].style.display = 'none'
            pulg2[g].style.display = 'none'
            pulg3[g].style.display = 'none'
            pulg4[g].style.display = 'block'
        }
    }
}
function h() {
    playlistdi = 0
}


function toggleAudio(index) {
    if (pause) {
        if (playlistdi === 1) {
            dio[index].play();
            let semuaaudio = document.querySelectorAll('audio')
            semuaaudio.forEach(a => {
                if (a !== dio[index]) {
                    a.currentTime = 0
                    a.pause();
                }
            })
            document.getElementsByClassName('pausepy')[0].src = 'imgtombol/playwhite.png';
            document.getElementsByClassName('pausepy')[1].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[2].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[3].src = 'imgtombol/pausewhite.png';
        }
        if (playlistdi === 2) {
            dio2[index].play();
            let semuaaudio = document.querySelectorAll('audio')
            semuaaudio.forEach(a => {
                if (a !== dio2[index]) {
                    a.currentTime = 0;
                    a.pause();
                }
            })
            document.getElementsByClassName('pausepy')[1].src = 'imgtombol/playwhite.png';
            document.getElementsByClassName('pausepy')[0].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[2].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[3].src = 'imgtombol/pausewhite.png';
        }
        if (playlistdi === 3) {
            dio3[index].play();
            let semuaaudio = document.querySelectorAll('audio')
            semuaaudio.forEach(a => {
                if (a !== dio3[index]) {
                    a.pause();
                    a.currentTime = 0;
                }

            })
            document.getElementsByClassName('pausepy')[2].src = 'imgtombol/playwhite.png';
            document.getElementsByClassName('pausepy')[1].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[0].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[3].src = 'imgtombol/pausewhite.png';
        }
        if (playlistdi === 4) {
            dio4[index].play();
            let semuaaudio = document.querySelectorAll('audio')
            semuaaudio.forEach(a => {
                if (a !== dio4[index]) {
                    a.pause();
                    a.currentTime = 0;
                }
            })
            document.getElementsByClassName('pausepy')[3].src = 'imgtombol/playwhite.png';
            document.getElementsByClassName('pausepy')[1].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[2].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[0].src = 'imgtombol/pausewhite.png';
        }
        document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/play.png';
        pp2.src = 'imgtombol/play.png';
        pause = false;
        audiodi = index + 1;
    } else if (audiodi !== index + 1) {
        if (playlistdi === 1) {
            dio[index].play();
            dio[index].currentTime = 0;
            let semuaaudio = document.querySelectorAll('audio')
            semuaaudio.forEach(a => {
                if (a !== dio[index]) {
                    a.pause()
                }
            })
            document.getElementsByClassName('pausepy')[0].src = 'imgtombol/playwhite.png';
            document.getElementsByClassName('pausepy')[1].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[2].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[3].src = 'imgtombol/pausewhite.png';
        }
        if (playlistdi === 2) {
            dio2[index].play();
            dio2[index].currentTime = 0;
            let semuaaudio = document.querySelectorAll('audio')
            semuaaudio.forEach(a => {
                if (a !== dio2[index]) {
                    a.pause()
                }
            })
            document.getElementsByClassName('pausepy')[1].src = 'imgtombol/playwhite.png';
            document.getElementsByClassName('pausepy')[0].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[2].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[3].src = 'imgtombol/pausewhite.png';
        }
        if (playlistdi === 3) {
            dio3[index].play();
            dio3[index].currentTime = 0;
            let semuaaudio = document.querySelectorAll('audio')
            semuaaudio.forEach(a => {
                if (a !== dio3[index]) {
                    a.pause()
                }
            })
            document.getElementsByClassName('pausepy')[2].src = 'imgtombol/playwhite.png';
            document.getElementsByClassName('pausepy')[0].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[1].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[3].src = 'imgtombol/pausewhite.png';
        }
        if (playlistdi === 4) {
            dio4[index].play();
            dio4[index].currentTime = 0;
            let semuaaudio = document.querySelectorAll('audio')
            semuaaudio.forEach(a => {
                if (a !== dio4[index]) {
                    a.pause()
                }
            })
            document.getElementsByClassName('pausepy')[3].src = 'imgtombol/playwhite.png';
            document.getElementsByClassName('pausepy')[0].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[1].src = 'imgtombol/pausewhite.png';
            document.getElementsByClassName('pausepy')[2].src = 'imgtombol/pausewhite.png';
        }
        document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/play.png';
        pp2.src = 'imgtombol/play.png';
        pause = false;
        audiodi = index + 1;
    } else {
        if (playlistdi === 1) {
            dio[index].pause();
            document.getElementsByClassName('pausepy')[0].src = 'imgtombol/pausewhite.png';
        }
        if (playlistdi === 2) {
            dio2[index].pause();
            document.getElementsByClassName('pausepy')[1].src = 'imgtombol/pausewhite.png';
        }
        if (playlistdi === 3) {
            dio3[index].pause();
            document.getElementsByClassName('pausepy')[2].src = 'imgtombol/pausewhite.png';
        }
        if (playlistdi === 4) {
            dio2[index].pause();
            document.getElementsByClassName('pausepy')[3].src = 'imgtombol/pausewhite.png';
        }
        document.getElementsByClassName('gambartombolpause')[0].src = 'imgtombol/pause.png';
        pp2.src = 'imgtombol/pause.png';
        pause = true;
    }
}

function lg1() { toggleAudio(0); }
function lg2() { toggleAudio(1); }
function lg3() { toggleAudio(2); }
function lg4() { toggleAudio(3); }
function lg5() { toggleAudio(4); }
function lg6() { toggleAudio(5); }
function lg7() { toggleAudio(6); }
function lg8() { toggleAudio(7); }
function lg9() { toggleAudio(8); }
function lg10() { toggleAudio(9); }
function lg11() { toggleAudio(10); }
function lg12() { toggleAudio(11); }
function lg13() { toggleAudio(12); }
function lg14() { toggleAudio(13); }
function lg15() { toggleAudio(14); }
function lg16() { toggleAudio(15); }
function lg17() { toggleAudio(16); }
function lg18() { toggleAudio(17); }
function lg19() { toggleAudio(18); }
function lg20() { toggleAudio(19); }

let pausepy = document.querySelectorAll('.pausepy')
let bgscroll = document.getElementsByClassName('tengahcrop')[0]
bgscroll.addEventListener("scroll", function () {
    let saatini = bgscroll.scrollTop;
    let ke = 50
    pausepy.forEach(el => {
        if (window.matchMedia("(hover:hover)").matches) {
            if (saatini >= ke) {
                el.style.setProperty("left", "100%",);
            }
            if (saatini <= ke) {
                el.style.setProperty("left", "570px",);
            }
        } else {
            if (saatini >= ke) {
                el.style.setProperty("left", "100%",);
            }
            if (saatini <= ke) {
                el.style.setProperty("left", "840px",);
            }
        }
    })
})
let mos = 0
let lgpy1 = document.querySelectorAll(
    ".lg1py1, .lg1py2, .lg1py3, .lg1py4, .lg1py5, .lg1py6, .lg1py7, .lg1py8, .lg1py9, .lg1py10, .lg1py11, .lg1py12, .lg1py13, .lg1py14, .lg1py15, .lg1py16, .lg1py17, .lg1py18, .lg1py19, .lg1py20"
);

let pall = document.querySelectorAll(
    ".p1, .p2, .p3, .p4, .p5, .p6, .p7, .p8, .p9, .p10, .p11, .p12, .p13, .p14, .p15, .p16, .p17, .p18, .p19, .p20"
);

let pulg = document.querySelectorAll(
    ".pulg1, .pulg2, .pulg3, .pulg4, .pulg5, .pulg6, .pulg7, .pulg8, .pulg9, .pulg10, .pulg11, .pulg12, .pulg13, .pulg14, .pulg15, .pulg16, .pulg17, .pulg18, .pulg19, .pulg20"
);
if (window.matchMedia("(hover:hover)").matches) {
    for (let f = 0; f < 20; f++) {
        lgpy1[f].addEventListener("mouseover", function () {
            if (playlistdi === 1) {
                pulg1[f].style.display = 'block'
                pulg2[f].style.display = 'none'
                pulg3[f].style.display = 'none'
                pulg4[f].style.display = 'none'
            }
            if (playlistdi === 2) {
                pulg2[f].style.display = 'block'
                pulg1[f].style.display = 'none'
                pulg3[f].style.display = 'none'
                pulg4[f].style.display = 'none'
            }
            if (playlistdi === 3) {
                pulg3[f].style.display = 'block'
                pulg2[f].style.display = 'none'
                pulg1[f].style.display = 'none'
                pulg4[f].style.display = 'none'
            }
            if (playlistdi === 4) {
                pulg4[f].style.display = 'block'
                pulg2[f].style.display = 'none'
                pulg1[f].style.display = 'none'
                pulg3[f].style.display = 'none'
            }
            lgpy1[f].style.opacity = 1
            pall[f].style.display = 'none'
            mos = 0
        })

        pulg[f].addEventListener("mouseover", function () {
            mos = 1
        })
        lgpy1[f].addEventListener("mouseout", function () {
            if (mos === 0) {
                setTimeout(() => {
                    if (playlistdi === 1) {
                        pulg1[f].style.display = 'none'
                    }
                    if (playlistdi === 2) {
                        pulg2[f].style.display = 'none'
                    }
                    if (playlistdi === 3) {
                        pulg3[f].style.display = 'none'
                    }
                    if (playlistdi === 4) {
                        pulg4[f].style.display = 'none'
                    }
                    lgpy1[f].style.opacity = 0.6
                    pall[f].style.display = 'block'
                }, 150);
            }
        })
    }
}
let thumb = document.getElementById('barlagu')
thumb.addEventListener("mousedown", () => {
    thumb.style.setProperty("--thumb-scale", 1.3)
})
thumb.addEventListener("mouseup", () => {
    thumb.style.setProperty("--thumb-scale", 1)
})
thumb.addEventListener("touchstart", () => {
    thumb.style.setProperty("--thumb-scale", "2.4");
});

thumb.addEventListener("touchend", () => {
    thumb.style.setProperty("--thumb-scale", "2");
});

let thumb2 = document.getElementById('barlagu2')
thumb2.addEventListener("mousedown", () => {
    thumb2.style.setProperty("--thumb-scale", 1.3)
})
thumb2.addEventListener("mouseup", () => {
    thumb2.style.setProperty("--thumb-scale", 1)
})

const slider = document.getElementById("barlagu");
const slider2 = document.getElementById("barlagu2");
function updateProgress() {
    let value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(90deg, black ${value}%, white ${value}%)`;
    let value2 = (slider2.value - slider2.min) / (slider2.max - slider2.min) * 100;
    slider2.style.background = `linear-gradient(90deg, black ${value2}%, white ${value2}%)`;
}

let allaudio = document.querySelectorAll("audio");
let barlagu = document.getElementById('barlagu');
let barlagu2 = document.getElementById('barlagu2');

slider.addEventListener("input", updateProgress);
updateProgress();
allaudio.forEach(audio => {
    audio.addEventListener("timeupdate", () => {
        if (!audio.paused) {
            barlagu.max = audio.duration;
            barlagu.value = audio.currentTime;
            barlagu2.max = audio.duration;
            barlagu2.value = audio.currentTime;
            updateProgress()
        }
    });
});
slider2.addEventListener("input", updateProgress);
updateProgress();
allaudio.forEach(audio => {
    audio.addEventListener("timeupdate", () => {
        if (!audio.paused) {
            barlagu.max = audio.duration;
            barlagu.value = audio.currentTime;
            barlagu2.max = audio.duration;
            barlagu2.value = audio.currentTime;
            updateProgress()
        }
    });
});
barlagu.addEventListener("input", () => {
    allaudio.forEach(audio => {
        audio.currentTime = barlagu.value;
        barlagu2.value = barlagu.value;
        updateProgress()

    })
});
barlagu2.addEventListener("input", () => {
    allaudio.forEach(audio => {
        audio.currentTime = barlagu2.value;
        barlagu.value = barlagu2.value;
        updateProgress()

    })
});

const allmusik = document.querySelectorAll("audio");

allmusik.forEach(audio => {
    audio.addEventListener("timeupdate", () => {
        if (!audio.paused) {
            console.log("play");
        } else {
            console.log("pause");
        }
    });
});

let lgmd11 = [
    'Pompeii',
    'Night Changes',
    'Strong',
    '18',
    'Story of My Life',
    'Right Now',
    'Take Me Home',
    'Kings & Queens',
    'Unconditionally',
    'The Nights',
    'Rewrite The Stars (with James Arthur)',
    'Symphony (feat. Zara Larsson)',
    'As It Was',
    'Lonely',
    'SNAP',
    'Heart Attack',
    'The Greatest',
    'Hold On',
    'Hero (feat. Christina Perri)',
    'Tie Me Down'
];
let lgmd22 = ['dj goyang dumang', 'dj tetap dalam jiwa', 'dj cintamu itu hoax', 'dj as if your last', 'dj pura pura bahagia', 'dj danza kuduro', 'dj so sweet', 'dj akimilaku masih ganteng', 'dj joanna', 'dj jomblo happy', 'dj im a lady', 'dj gua mah gitu orangnya',
    'dj walaupun puasa seribu tahun', 'dj malam minggu aku tak punya pacar', 'dj bardansa dan menari-mari bercinta', 'dj jangan lupa bahagia', 'dj ciperipampam', 'dj rindu semalam', 'dj geleng geleng asia', 'dj the river simple']
let lgmd33 = [
    "Someone to You",
    "All Falls Down",
    "People",
    "Tourner Dans Le Vide",
    "Close Your Eyes",
    "The Spaces",
    "Minefields",
    "Ignite",
    "Wide Awake",
    "It Ain't Me",
    "Rockabye (feat. Sean Paul & Anne-Marie)",
    "Hurts So Good",
    "In the Name of Love",
    "Faded",
    "Set Fire to the Rain",
    "Burn",
    "Umbrella",
    "Only Love Can Hurt Like This",
    "Wonderland",
    "Alone, Pt. II"
];

let lgmd44 = [
    "Al-Fatihah",
    "Al-Mulk",
    "Ar-Rahman",
    "Al-Kahfi 1 - 10",
    "As-Sajdah",
    "Ya-Sin",
    "Al-Fath",
    "An-Naba",
    "Abasa",
    "Al-Adiyat",
    "Ad-duha",
    "Al-a'la",
    "Al-Qadr",
    "At-tin",
    "Al-zalzalah",
    "Al-Bayyina",
    "Al-balad",
    "Al-maun",
    "Al-Qari'ah",
    "ayat kursi"
]
let dpy11 = [
    "Bastille",
    "One Direction",
    "One Direction",
    "One Direction",
    "One Direction",
    "One Direction",
    "Cash Cash, Bebe Rexha",
    "Ava Max",
    "Katy Perry",
    "Avicii",
    "James Arthur, Anne-Marie",
    "Clean Bandit, Zara Larsson",
    "Harry Styles",
    "Akon",
    "Rosa Linn",
    "Demi Lovato",
    "Sia",
    "Chord Overstreet",
    "Cash Cash, Christina Perri",
    "Gryffin, Elley Duhé"
];

let dpy22 = ["dj nata rmx", "abang breakbeat", "dj haning", "dj aldi", "dj indah rmx", "dj yogie rmx", "dj goyang goyang", "dj spc on the mix", "catam cool", "king boyy sopan", "noobeer remixer",
    'maman fvndy', 'sahrul ckn, dodi semetra', 'dj manay', 'abew fvnky', 'dj danvata', 'dariz rmx', 'dj babun official, fadly fvndy rmx', 'dariz rmx', 'dj thailander']
let dpy33 = [
    "BANNERS",
    "Alan Walker",
    "Libianca",
    "Indila",
    "KSHMR, Tungevaag",
    "Alan Walker",
    "Faouzia, John Legend",
    "Alan Walker",
    "Katy Perry",
    "Kygo, Selena Gomez",
    "Clean Bandit, Anne-Marie, Sean Paul",
    "Astrid S",
    "Martin Garrix, Bebe Rexha",
    "Alan Walker",
    "Adele",
    "Ellie Goulding",
    "Ember Island",
    "Benedetta Caretta",
    "Axel Johansson",
    "Alan Walker, Ava Max"
];
let dpy44 = "";
let namalagu = document.getElementById('namelagu')
let subnamalagu = document.getElementById('subnamelagu')
let namalagu2 = document.getElementById('namelagugede')
let subnamalagu2 = document.getElementById('subnamelagugede')
audio0.forEach(a => {
    a.addEventListener('timeupdate', () => {
        for (let q = 0; q < 20; q++) {
            if (window.matchMedia("(hover:hover)").matches) {
                if (!dio[q].paused) {
                    let judul1 = lgmd11[q];
                    let subjudul1 = dpy11[q];
                    namalagu.textContent = judul1.length > 23 ? judul1.slice(0, 23) + '........)' : judul1;
                    subnamalagu.textContent = subjudul1.length > 23 ? subjudul1.slice(0, 23) + '........' : subjudul1;
                    namalagu2.textContent = judul1.length > 21 ? judul1.slice(0, 21) + '........)' : judul1;
                    subnamalagu2.textContent = subjudul1.length > 23 ? subjudul1.slice(0, 23) + '........' : subjudul1;
                }
                if (!dio2[q].paused) {
                    let judul1 = lgmd33[q];
                    let subjudul1 = dpy33[q];
                    namalagu.textContent = judul1.length > 23 ? judul1.slice(0, 23) + '........)' : judul1;
                    subnamalagu.textContent = subjudul1.length > 23 ? subjudul1.slice(0, 23) + '........' : subjudul1;
                    namalagu2.textContent = judul1.length > 21 ? judul1.slice(0, 21) + '........)' : judul1;
                    subnamalagu2.textContent = subjudul1.length > 23 ? subjudul1.slice(0, 23) + '........' : subjudul1;
                }
                if (!dio3[q].paused) {
                    let judul1 = lgmd22[q];
                    let subjudul1 = dpy22[q];
                    namalagu.textContent = judul1.length > 23 ? judul1.slice(0, 23) + '........' : judul1;
                    subnamalagu.textContent = subjudul1.length > 23 ? subjudul1.slice(0, 23) + '........' : subjudul1;
                    namalagu2.textContent = judul1.length > 21 ? judul1.slice(0, 21) + '........' : judul1;
                    subnamalagu2.textContent = subjudul1.length > 23 ? subjudul1.slice(0, 23) + '........' : subjudul1;
                }
                if (!dio4[q].paused) {
                    let judul1 = lgmd44[q];
                    let subjudul1 = dpy44;
                    namalagu.textContent = judul1.length > 23 ? judul1.slice(0, 23) + '........)' : judul1;
                    subnamalagu.textContent = subjudul1.length > 23 ? subjudul1.slice(0, 23) + '........' : subjudul1;
                    namalagu2.textContent = judul1.length > 21 ? judul1.slice(0, 21) + '........)' : judul1;
                    subnamalagu2.textContent = subjudul1.length > 23 ? subjudul1.slice(0, 23) + '........' : subjudul1;
                }
            }
            if (!(window.matchMedia("(hover:hover)").matches)) {
                if (!dio[q].paused) {
                    let judul1 = lgmd11[q];
                    let subjudul1 = dpy11[q];
                    namalagu.textContent = judul1.length > 16 ? judul1.slice(0, 16) + '......' : judul1;
                    subnamalagu.textContent = subjudul1.length > 16 ? subjudul1.slice(0, 16) + '......' : subjudul1;
                    namalagu2.textContent = judul1.length > 14 ? judul1.slice(0, 14) + '......' : judul1;
                    subnamalagu2.textContent = subjudul1.length > 16 ? subjudul1.slice(0, 16) + '......' : subjudul1;
                }
                if (!dio2[q].paused) {
                    let judul1 = lgmd33[q];
                    let subjudul1 = dpy33[q];
                    namalagu.textContent = judul1.length > 16 ? judul1.slice(0, 16) + '......' : judul1;
                    subnamalagu.textContent = subjudul1.length > 16 ? subjudul1.slice(0, 16) + '......' : subjudul1;
                    namalagu2.textContent = judul1.length > 14 ? judul1.slice(0, 14) + '......' : judul1;
                    subnamalagu2.textContent = subjudul1.length > 16 ? subjudul1.slice(0, 16) + '......' : subjudul1;
                }
                if (!dio3[q].paused) {
                    let judul1 = lgmd22[q];
                    let subjudul1 = dpy22[q];
                    namalagu.textContent = judul1.length > 16 ? judul1.slice(0, 16) + '......' : judul1;
                    subnamalagu.textContent = subjudul1.length > 16 ? subjudul1.slice(0, 16) + '......' : subjudul1;
                    namalagu2.textContent = judul1.length > 14 ? judul1.slice(0, 14) + '......' : judul1;
                    subnamalagu2.textContent = subjudul1.length > 16 ? subjudul1.slice(0, 16) + '......' : subjudul1;
                }
                if (!dio4[q].paused) {
                    let judul1 = lgmd44[q];
                    let subjudul1 = dpy44;
                    namalagu.textContent = judul1.length > 16 ? judul1.slice(0, 16) + '......' : judul1;
                    subnamalagu.textContent = subjudul1.length > 16 ? subjudul1.slice(0, 16) + '......' : subjudul1;
                    namalagu2.textContent = judul1.length > 14 ? judul1.slice(0, 14) + '......' : judul1;
                    subnamalagu2.textContent = subjudul1.length > 16 ? subjudul1.slice(0, 16) + '......' : subjudul1;
                }
            }
        }
    })
})
