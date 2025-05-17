let lagu1 = document.querySelectorAll('.audio')
let lagu2 = document.querySelectorAll('.audio2')
let lagu3 = document.querySelectorAll('.audio3')
let lagu4 = document.querySelectorAll('.audio4')
let d1 = null
let d2 = null
let d3 = null
let d4 = null
const all = document.querySelectorAll('audio')
lagu1.forEach(a => {
    d1 = a
})
lagu2.forEach(a => {
    d2 = a
})
lagu3.forEach(a => {
    d3 = a
})
lagu4.forEach(a => {
    d4 = a
})
const gb1 = document.getElementsByClassName("gambartombolpause")[0];
const gb2 = document.getElementsByClassName("gambartombolpause")[1];
function skip() {
    let conf = 0;
    if (conf === 0) {
        lagu1.forEach(a => {
            if (a.currentTime !== 0 && a.play) {
                let lagurandom = Math.floor(Math.random() * 20)
                let dapatlagu = lagu1[lagurandom]
                dapatlagu.play()
                dapatlagu.currentTime = 0
                if (a !== dapatlagu) {
                    a.pause()
                    a.currentTime = 0
                }
                document.getElementById('ps1').src = 'imgtombol/playwhite.png';
                gb1.src = 'imgtombol/play.png'
                gb2.src = 'imgtombol/play.png'
                d2.pause()
                d3.pause()
                d4.pause()
            }
        })
        lagu2.forEach(a => {
            if (a.currentTime !== 0 && a.play) {
                let lagurandom = Math.floor(Math.random() * 20)
                let dapatlagu = lagu2[lagurandom]
                dapatlagu.play()
                dapatlagu.currentTime = 0
                if (a !== dapatlagu) {
                    a.pause()
                    a.currentTime = 0
                }
                document.getElementById('ps2').src = 'imgtombol/playwhite.png';
                gb1.src = 'imgtombol/play.png'
                gb2.src = 'imgtombol/play.png'
                d1.pause()
                d3.pause()
                d4.pause()
            }
        })
        lagu3.forEach(a => {
            if (a.currentTime !== 0 && a.play) {
                let lagurandom = Math.floor(Math.random() * 20)
                let dapatlagu = lagu3[lagurandom]
                dapatlagu.play()
                dapatlagu.currentTime = 0
                if (a !== dapatlagu) {
                    a.pause()
                    a.currentTime = 0
                }
                document.getElementById('ps3').src = 'imgtombol/playwhite.png';
                gb1.src = 'imgtombol/play.png'
                gb2.src = 'imgtombol/play.png'
                d2.pause()
                d1.pause()
                d4.pause()
            }
        })
        lagu4.forEach(a => {
            if (a.currentTime !== 0 && a.play) {
                let lagurandom = Math.floor(Math.random() * 20)
                let dapatlagu = lagu4[lagurandom]
                dapatlagu.play()
                dapatlagu.currentTime = 0
                if (a !== dapatlagu) {
                    a.pause()
                    a.currentTime = 0
                }
                document.getElementById('ps4').src = 'imgtombol/playwhite.png';
                gb1.src = 'imgtombol/play.png'
                gb2.src = 'imgtombol/play.png'
                d2.pause()
                d3.pause()
                d4.pause()
            }
        })
    }
    conf = 1;
}
function time0() {
    all.forEach(a => {
        if (a.currentTime !== 0) {
            a.currentTime = 0
        }
    })
}

let timeawal = document.getElementById('timeawal')
let timeakhir = document.getElementById('timeakhir')
let timeawal2 = document.getElementById('timeawal2')
let timeakhir2 = document.getElementById('timeakhir2')
all.forEach(a => {
    a.addEventListener('timeupdate', () => {
        timeakhir.textContent = Math.floor(a.duration / 60) + ':' + (Math.floor(a.duration % 60) < 10 ? '0' + Math.floor(a.duration % 60) : Math.floor(a.duration % 60))
        timeakhir2.textContent = Math.floor(a.duration / 60) + ':' + (Math.floor(a.duration % 60) < 10 ? '0' + Math.floor(a.duration % 60) : Math.floor(a.duration % 60))
        timeawal.textContent = Math.floor(a.currentTime / 60) + ':' + (Math.floor(a.currentTime % 60) < 10 ? '0' + Math.floor(a.currentTime % 60) : Math.floor(a.currentTime % 60))
        timeawal2.textContent = Math.floor(a.currentTime / 60) + ':' + (Math.floor(a.currentTime % 60) < 10 ? '0' + Math.floor(a.currentTime % 60) : Math.floor(a.currentTime % 60))
    })
})
let img11 = [
    "/fotolagu/foto1py1.jpg", "/fotolagu/foto2py1.jpg", "/fotolagu/foto3py1.jpg", "/fotolagu/foto4py1.jpg",
    "/fotolagu/foto5py1.jpg", "/fotolagu/foto6py1.jpg", "/fotolagu/foto7py1.jpg", "/fotolagu/foto8py1.jpg",
    "/fotolagu/foto9py1.jpg", "/fotolagu/foto10py1.jpg", "/fotolagu/foto11py1.jpg", "/fotolagu/foto12py1.jpg",
    "/fotolagu/foto13py1.jpg", "/fotolagu/foto14py1.jpg", "/fotolagu/foto15py1.jpg", "/fotolagu/foto16py1.jpg",
    "/fotolagu/foto17py1.jpg", "/fotolagu/foto18py1.jpg", "/fotolagu/foto19py1.jpg", "/fotolagu/foto20py1.jpg"
];
let img22 = [
    "/fotolagu/foto1py2.jpg", "/fotolagu/foto2py2.jpg", "/fotolagu/foto3py2.jpg", "/fotolagu/foto4py2.jpg",
    "/fotolagu/foto5py2.jpg", "/fotolagu/foto6py2.jpg", "/fotolagu/foto7py2.jpg", "/fotolagu/foto8py2.jpg",
    "/fotolagu/foto9py2.jpg", "/fotolagu/foto10py2.jpg", "/fotolagu/foto11py2.jpg", "/fotolagu/foto12py2.jpg",
    "/fotolagu/foto13py2.jpg", "/fotolagu/foto14py2.jpg", "/fotolagu/foto15py2.jpg", "/fotolagu/foto16py2.jpg",
    "/fotolagu/foto17py2.jpg", "/fotolagu/foto18py2.jpg", "/fotolagu/foto19py2.jpg", "/fotolagu/foto20py2.jpg"
];
let img33 = [
    "/fotolagu/foto1py3.jpg", "/fotolagu/foto2py3.jpg", "/fotolagu/foto3py3.jpg", "/fotolagu/foto4py3.jpg",
    "/fotolagu/foto5py3.jpg", "/fotolagu/foto6py3.jpg", "/fotolagu/foto7py3.jpg", "/fotolagu/foto8py3.jpg",
    "/fotolagu/foto9py3.jpg", "/fotolagu/foto10py3.jpg", "/fotolagu/foto11py3.jpg", "/fotolagu/foto12py3.jpg",
    "/fotolagu/foto13py3.jpg", "/fotolagu/foto14py3.jpg", "/fotolagu/foto15py3.jpg", "/fotolagu/foto16py3.jpg",
    "/fotolagu/foto17py3.jpg", "/fotolagu/foto18py3.jpg", "/fotolagu/foto19py3.jpg", "/fotolagu/foto20py3.jpg"
];
let img44 = "/fotolagu/fotopy4.jpg"

let foto1 = document.getElementById('fotodefault')
let foto2 = document.getElementById('fotodefaultkecil')
dio.forEach(a => {
    a.addEventListener('timeupdate', () => {
        for (let s = 0; s < 20; s++) {
            if (!dio[s].paused) {
                foto1.src = img11[s]
                foto2.src = img11[s]
            }
        }
    })
})
dio2.forEach(a => {
    a.addEventListener('timeupdate', () => {
        for (let s = 0; s < 20; s++) {
            if (!dio2[s].paused) {
                foto1.src = img33[s]
                foto2.src = img33[s]
            }
        }
    })
})
dio3.forEach(a => {
    a.addEventListener('timeupdate', () => {
        for (let s = 0; s < 20; s++) {
            if (!dio3[s].paused) {
                foto1.src = img22[s]
                foto2.src = img22[s]
            }
        }
    })
})
dio4.forEach(a => {
    a.addEventListener('timeupdate', () => {
        for (let s = 0; s < 20; s++) {
            if (!dio4[s].paused) {
                foto1.src = img44
                foto2.src = img44
            }
        }
    })
})
let kiri1 = document.getElementsByClassName('bodykiri1')[0]
let kiri2 = document.getElementsByClassName('bodykiri2')[0]
let kiri3 = document.getElementsByClassName('bodykiri3')[0]
let kiri4 = document.getElementsByClassName('bodykiri4')[0]
let poto1 = document.getElementsByClassName('fotopy1')[0]
let poto2 = document.getElementsByClassName('fotopy2')[0]
let poto3 = document.getElementsByClassName('fotopy3')[0]
let poto4 = document.getElementsByClassName('fotopy4')[0]
let jud1 = document.getElementsByClassName('judulpy1')[0]
let jud2 = document.getElementsByClassName('judulpy2')[0]
let jud3 = document.getElementsByClassName('judulpy3')[0]
let jud4 = document.getElementsByClassName('judulpy4')[0]
let cont1 = jud1.textContent;
let cont2 = jud2.textContent;
let cont3 = jud3.textContent;
let cont4 = jud4.textContent;
const trans = "left 0.9s ease-in-out";
let cari = document.getElementById('cari')
let kodisi1 = null
let kodisi2 = null
let kodisi3 = null
let kodisi4 = null
let allarray = [...lgmd11, ...lgmd22, ...lgmd33, ...lgmd44]
let allim = [...img11, ...img22, ...img33, img44,]
let alldio = [...dio, ...dio3, ...dio2, ...dio4]
cari.addEventListener('input', () => {
    let hs = cari.value.toLowerCase()
    if (hs.length > 0) {
        let cocokan = allarray.filter(i => i.toLowerCase().startsWith(hs))
        let noarray = cocokan.map(c => allarray.findIndex(a => a === c))
        let hsarray1 = noarray[0]
        let hsarray2 = noarray[1]
        let hsarray3 = noarray[2]
        let hsarray4 = noarray[3]
        if (cocokan.length > 0) {
            if (getComputedStyle(kiri1).left === '1px') {
                if (kodisi1 !== cocokan[0]) {
                    kiri1.style.left = "-300px"
                    jud1.style.left = "-250px"
                    poto1.style.left = '-218px'
                }
                setTimeout(() => {
                    kiri1.style.left = ''
                    jud1.style.left = ''
                    poto1.style.left = ''
                    jud1.textContent = cocokan[0] || 'empty'
                    poto1.src = allim[hsarray1] ?? img44;
                    let cut1 = jud1.textContent.length > 10 ? jud1.textContent.slice(0, 10) + '......' : jud1.textContent;
                    jud1.textContent = cut1
                    poto1.addEventListener("click", () => {
                        if (alldio !== alldio[hsarray1]) {
                            alldio.forEach(a => {
                                a.pause()
                            })
                        }
                        alldio[hsarray1].play()
                    })
                }, 900);
                kodisi1 = cocokan[0]
            }
            if (getComputedStyle(kiri1).left !== '1px') {
                kiri1.style.left = "-300px"
                jud1.style.left = "-250px"
                poto1.style.left = "-218px"
                setTimeout(() => {
                    kiri1.style.left = ""
                    jud1.style.left = ""
                    poto1.style.left = ""
                    jud1.textContent = cocokan[0] || 'empty'
                    poto1.src = allim[hsarray1] ?? img44;
                    let cut1 = jud1.textContent.length > 10 ? jud1.textContent.slice(0, 10) + '......' : jud1.textContent;
                    jud1.textContent = cut1
                    kodisi1 = cocokan[0]
                    poto1.addEventListener("click", () => {
                        if (alldio !== alldio[hsarray1]) {
                            alldio.forEach(a => {
                                a.pause()
                            })
                        }
                        alldio[hsarray1].play()
                    })
                }, 100);
            }
            if (getComputedStyle(kiri2).left === '1px') {
                if (kodisi2 !== cocokan[2]) {
                    kiri2.style.left = "-300px"
                    jud2.style.left = "-250px"
                    poto2.style.left = "-218px"
                }
                if (cocokan.length > 1) {
                    setTimeout(() => {
                        kiri2.style.left = ''
                        jud2.style.left = ''
                        poto2.style.left = ''
                        jud2.textContent = cocokan[1] || 'empty'
                        poto2.addEventListener("click", () => {
                            if (alldio !== alldio[hsarray2]) {
                                alldio.forEach(a => {
                                    a.pause()
                                })
                            }
                            alldio[hsarray2].play()
                        })
                        poto2.src = allim[hsarray2] ?? img44;
                        let cut2 = jud2.textContent.length > 10 ? jud2.textContent.slice(0, 10) + '......' : jud2.textContent;
                        jud2.textContent = cut2
                    }, 900);
                    kodisi2 = cocokan[1]
                }
            }
            if (getComputedStyle(kiri2).left !== '1px') {
                kiri2.style.left = "-300px"
                jud2.style.left = "-250px"
                poto2.style.left = "-250px"
                if (cocokan.length > 1) {
                    setTimeout(() => {
                        kiri2.style.left = ""
                        jud2.style.left = ""
                        poto2.style.left = ""
                        jud2.textContent = cocokan[1] || 'empty'
                        poto2.addEventListener("click", () => {
                            if (alldio !== alldio[hsarray2]) {
                                alldio.forEach(a => {
                                    a.pause()
                                })
                            }
                            alldio[hsarray2].play()
                        })
                        poto2.src = allim[hsarray2] ?? img44;
                        let cut2 = jud2.textContent.length > 10 ? jud2.textContent.slice(0, 10) + '......' : jud2.textContent;
                        jud2.textContent = cut2
                    }, 100);
                    kodisi2 = cocokan[1]
                }
            }
            if (getComputedStyle(kiri3).left === '1px') {
                if (kodisi3 !== cocokan[2]) {
                    kiri3.style.left = "-300px"
                    jud3.style.left = "-250px"
                    poto3.style.left = "-218px"
                }
                if (cocokan.length > 2) {
                    setTimeout(() => {
                        kiri3.style.left = ''
                        jud3.style.left = ''
                        poto3.style.left = ''
                        jud3.textContent = cocokan[2] || 'empty'
                        poto3.addEventListener("click", () => {
                            if (alldio !== alldio[hsarray3]) {
                                alldio.forEach(a => {
                                    a.pause()
                                })
                            }
                            alldio[hsarray3].play()
                        })
                        poto3.src = allim[hsarray3] ?? img44;
                        let cut3 = jud3.textContent.length > 10 ? jud3.textContent.slice(0, 10) + '......' : jud3.textContent;
                        jud3.textContent = cut3
                    }, 900);
                    kodisi3 = cocokan[2]
                }
            }
            if (getComputedStyle(kiri3).left !== '1px') {
                kiri3.style.left = "-300px"
                jud3.style.left = "-250px"
                poto3.style.left = "-218px"
                if (cocokan.length > 2) {
                    setTimeout(() => {
                        kiri3.style.left = ""
                        jud3.style.left = ""
                        poto3.style.left = ""
                        jud3.textContent = cocokan[2] || 'empty'
                        poto3.addEventListener("click", () => {
                            if (alldio !== alldio[hsarray3]) {
                                alldio.forEach(a => {
                                    a.pause()
                                })
                            }
                            alldio[hsarray3].play()
                        })
                        poto3.src = allim[hsarray3] ?? img44;
                        let cut3 = jud3.textContent.length > 10 ? jud3.textContent.slice(0, 10) + '......' : jud3.textContent;
                        jud3.textContent = cut3
                    }, 100);
                    kodisi3 = cocokan[2]
                }
            }
            if (getComputedStyle(kiri4).left === '1px') {
                if (kodisi4 !== cocokan[3]) {
                    kiri4.style.left = "-300px"
                    jud4.style.left = "-250px"
                    poto4.style.left = "-218px"
                }
                if (cocokan.length > 3) {
                    setTimeout(() => {
                        kiri4.style.left = ''
                        jud4.style.left = ''
                        poto4.style.left = ""
                        jud4.textContent = cocokan[3] || 'empty'
                        poto4.addEventListener("click", () => {
                            if (alldio !== alldio[hsarray4]) {
                                alldio.forEach(a => {
                                    a.pause()
                                })
                            }
                            alldio[hsarray4].play()
                        })
                        poto4.src = allim[hsarray4] ?? img44;
                        let cut4 = jud4.textContent.length > 10 ? jud4.textContent.slice(0, 10) + '......' : jud4.textContent;
                        jud4.textContent = cut4
                    }, 900);
                    kodisi4 = cocokan[3]
                }
            }
            if (getComputedStyle(kiri4).left !== '1px') {
                kiri4.style.left = "-300px"
                jud4.style.left = "-250px"
                poto4.style.left = "-218px"
                if (cocokan.length > 3) {
                    setTimeout(() => {
                        kiri4.style.left = ""
                        jud4.style.left = ""
                        poto4.style.left = ""
                        jud4.textContent = cocokan[3] || 'empty'
                        poto4.addEventListener("click", () => {
                            if (alldio !== alldio[hsarray4]) {
                                alldio.forEach(a => {
                                    a.pause()
                                })
                            }
                            alldio[hsarray4].play()
                        })
                        poto4.src = allim[hsarray4] ?? img44;
                        let cut4 = jud4.textContent.length > 10 ? jud4.textContent.slice(0, 10) + '......' : jud4.textContent;
                        jud4.textContent = cut4
                    }, 100);
                    kodisi4 = cocokan[3]
                }
            }
        } else {
            kiri1.style.left = '-300px'
            kiri2.style.left = '-300px'
            kiri3.style.left = '-300px'
            kiri4.style.left = '-300px'
            jud1.style.left = '-250px'
            jud2.style.left = '-250px'
            jud3.style.left = '-250px'
            jud4.style.left = '-250px'
            poto1.style.left = '-218px'
            poto2.style.left = '-218px'
            poto3.style.left = '-218px'
            poto4.style.left = '-218px'
        }
    } else {
        kiri1.style.left = '-300px'
        kiri2.style.left = '-300px'
        kiri3.style.left = '-300px'
        kiri4.style.left = '-300px'
        jud1.style.left = '-250px'
        jud2.style.left = '-250px'
        jud3.style.left = '-250px'
        jud4.style.left = '-250px'
        poto1.style.left = '-218px'
        poto2.style.left = '-218px'
        poto3.style.left = '-218px'
        poto4.style.left = '-218px'
    }

})
if (window.matchMedia("(hover:hover)").matches) {
    let cari = document.getElementById('cari')
    cari.addEventListener('input', () => {
        poto1.style.transition = trans
        poto2.style.transition = trans
        poto3.style.transition = trans
        poto4.style.transition = trans
        jud1.style.transition = trans
        jud2.style.transition = trans
        jud3.style.transition = trans
        jud4.style.transition = trans
    })
    cari.addEventListener('focus', () => {
        kiri1.style.left = '-300px'
        kiri2.style.left = '-300px'
        kiri3.style.left = '-300px'
        kiri4.style.left = '-300px'
        poto1.style.left = '-218px'
        poto2.style.left = '-218px'
        poto3.style.left = '-218px'
        poto4.style.left = '-218px'
        jud1.style.left = '-250px'
        jud2.style.left = '-210px'
        jud3.style.left = '-210px'
        jud4.style.left = '-210px'
        poto1.style.transition = trans
        poto2.style.transition = trans
        poto3.style.transition = trans
        poto4.style.transition = trans
        jud1.style.transition = trans
        jud2.style.transition = trans
        jud3.style.transition = trans
        jud4.style.transition = trans
        document.getElementsByClassName('bodykiri1')[0].removeAttribute('onclick')
        document.getElementsByClassName('bodykiri2')[0].removeAttribute('onclick')
        document.getElementsByClassName('bodykiri3')[0].removeAttribute('onclick')
        document.getElementsByClassName('bodykiri4')[0].removeAttribute('onclick')
        document.getElementsByClassName('fotopy1')[0].removeAttribute('onclick')
        document.getElementsByClassName('fotopy2')[0].removeAttribute('onclick')
        document.getElementsByClassName('fotopy3')[0].removeAttribute('onclick')
        document.getElementsByClassName('fotopy4')[0].removeAttribute('onclick')
    })
    cari.addEventListener('blur', () => {
        if (cari.value === "") {
            kiri1.style.left = ''
            kiri2.style.left = ''
            kiri3.style.left = ''
            kiri4.style.left = ''
            poto1.style.left = ''
            poto2.style.left = ''
            poto3.style.left = ''
            poto4.style.left = ''
            poto1.src = '/fotoplaylist/foto1.jpg'
            poto2.src = '/fotoplaylist/foto2.jpg'
            poto3.src = '/fotoplaylist/foto3.jpg'
            poto4.src = '/fotoplaylist/foto4.jpg'
            jud1.style.left = ''
            jud2.style.left = ''
            jud3.style.left = ''
            jud4.style.left = ''
            jud1.textContent = cont1
            jud2.textContent = cont2
            jud3.textContent = cont3
            jud4.textContent = cont4
            document.getElementsByClassName('bodykiri1')[0].setAttribute('onclick')
            document.getElementsByClassName('bodykiri2')[0].setAttribute('onclick')
            document.getElementsByClassName('bodykiri3')[0].setAttribute('onclick')
            document.getElementsByClassName('bodykiri4')[0].setAttribute('onclick')
            document.getElementsByClassName('fotopy1')[0].setAttribute('onclick')
            document.getElementsByClassName('fotopy2')[0].setAttribute('onclick')
            document.getElementsByClassName('fotopy3')[0].setAttribute('onclick')
            document.getElementsByClassName('fotopy4')[0].setAttribute('onclick')
        }
    })
}
let play1 = document.getElementsByClassName("gambartombolpause")[0]
let play2 = document.getElementsByClassName("gambartombolpause")[1]
allaudio.forEach(a => {
    a.addEventListener("play", () => {
        play1.src = "/imgtombol/play.png"
        play2.src = "/imgtombol/play.png"
    })
    a.addEventListener("pause", () => {
        play1.src = "/imgtombol/pause.png"
        play2.src = "/imgtombol/pause.png"
    })
})