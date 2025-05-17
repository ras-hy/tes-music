let logicpy = 0
let lgall = document.querySelectorAll("#lg1, #lg2, #lg3, #lg4, #lg5, #lg6, #lg7, #lg8, #lg9, #lg10, #lg11, #lg12, #lg13, #lg14, #lg15, #lg16, #lg17, #lg18, #lg19, #lg20")
let dall = document.querySelectorAll("#d1, #d2, #d3, #d4, #d5, #d6, #d7, #d8, #d9, #d10, #d11, #d12, #d13, #d14, #d15, #d16, #d17, #d18, #d19, #d20")
let lgmd1 = [
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
let lgmd2 = ['dj goyang dumang', 'dj tetap dalam jiwa', 'dj cintamu itu hoax', 'dj as if your last', 'dj pura pura bahagia', 'dj danza kuduro', 'dj so sweet', 'dj akimilaku masih ganteng', 'dj joanna', 'dj jomblo happy', 'dj im a lady', 'dj gua mah gitu orangnya',
    'dj walaupun puasa seribu tahun', 'dj malam minggu aku tak punya pacar', 'dj bardansa dan menari-mari bercinta', 'dj jangan lupa bahagia', 'dj ciperipampam', 'dj rindu semalam', 'dj geleng geleng asia', 'dj the river simple']
let lgmd3 = [
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

let lgmd4 = [
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
let dpy1 = [
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
  
let dpy2 = ["dj nata rmx", "abang breakbeat", "dj haning", "dj aldi", "dj indah rmx", "dj yogie rmx", "dj goyang goyang", "dj spc on the mix", "catam cool", "king boyy sopan","noobeer remixer",
    'maman fvndy', 'sahrul ckn, dodi semetra', 'dj manay', 'abew fvnky', 'dj danvata', 'dariz rmx', 'dj babun official, fadly fvndy rmx', 'dariz rmx', 'dj thailander']
let dpy3 = [
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
  
let dpy4 = ""
let allimg = document.querySelectorAll("#fy1, #fy2, #fy3, #fy4, #fy5, #fy6, #fy7, #fy8, #fy9, #fy10, #fy11, #fy12, #fy13, #fy14, #fy15, #fy16, #fy17, #fy18, #fy19, #fy20");
let img1 = [
    "/fotolagu/foto1py1.jpg", "/fotolagu/foto2py1.jpg", "/fotolagu/foto3py1.jpg", "/fotolagu/foto4py1.jpg", 
    "/fotolagu/foto5py1.jpg", "/fotolagu/foto6py1.jpg", "/fotolagu/foto7py1.jpg", "/fotolagu/foto8py1.jpg", 
    "/fotolagu/foto9py1.jpg", "/fotolagu/foto10py1.jpg", "/fotolagu/foto11py1.jpg", "/fotolagu/foto12py1.jpg", 
    "/fotolagu/foto13py1.jpg", "/fotolagu/foto14py1.jpg", "/fotolagu/foto15py1.jpg", "/fotolagu/foto16py1.jpg", 
    "/fotolagu/foto17py1.jpg", "/fotolagu/foto18py1.jpg", "/fotolagu/foto19py1.jpg", "/fotolagu/foto20py1.jpg"
];
let img2 = [
    "/fotolagu/foto1py2.jpg", "/fotolagu/foto2py2.jpg", "/fotolagu/foto3py2.jpg", "/fotolagu/foto4py2.jpg", 
    "/fotolagu/foto5py2.jpg", "/fotolagu/foto6py2.jpg", "/fotolagu/foto7py2.jpg", "/fotolagu/foto8py2.jpg", 
    "/fotolagu/foto9py2.jpg", "/fotolagu/foto10py2.jpg", "/fotolagu/foto11py2.jpg", "/fotolagu/foto12py2.jpg", 
    "/fotolagu/foto13py2.jpg", "/fotolagu/foto14py2.jpg", "/fotolagu/foto15py2.jpg", "/fotolagu/foto16py2.jpg", 
    "/fotolagu/foto17py2.jpg", "/fotolagu/foto18py2.jpg", "/fotolagu/foto19py2.jpg", "/fotolagu/foto20py2.jpg"
];
let img3 = [
    "/fotolagu/foto1py3.jpg", "/fotolagu/foto2py3.jpg", "/fotolagu/foto3py3.jpg", "/fotolagu/foto4py3.jpg", 
    "/fotolagu/foto5py3.jpg", "/fotolagu/foto6py3.jpg", "/fotolagu/foto7py3.jpg", "/fotolagu/foto8py3.jpg", 
    "/fotolagu/foto9py3.jpg", "/fotolagu/foto10py3.jpg", "/fotolagu/foto11py3.jpg", "/fotolagu/foto12py3.jpg", 
    "/fotolagu/foto13py3.jpg", "/fotolagu/foto14py3.jpg", "/fotolagu/foto15py3.jpg", "/fotolagu/foto16py3.jpg", 
    "/fotolagu/foto17py3.jpg", "/fotolagu/foto18py3.jpg", "/fotolagu/foto19py3.jpg", "/fotolagu/foto20py3.jpg"
];
let img4 = "/fotolagu/fotopy4.jpg"
function playlist1() {
    if (logicpy === 0) {
        document.getElementsByClassName('hilangkan1')[0].classList.add('hilangkecil')
        document.getElementsByClassName('hilangkan1')[0].classList.remove('munculkecil')
        document.getElementsByClassName('fotopy12')[0].classList.add('hilangbesar')
        document.getElementsByClassName('fotopy12')[0].classList.remove('munculbesar')
        document.getElementsByClassName('judulpy12')[0].classList.add('hilangbesar')
        document.getElementsByClassName('judulpy12')[0].classList.remove('munculbesar')
        for (let g = 0; g < 20; g++) {
            lgall[g].textContent = lgmd1[g]
            lgall[g].style.setProperty("opacity", "1", "important")
            dall[g].style.setProperty("opacity", "1", "important")
            dall[g].textContent = dpy1[g]
            allimg[g].style.setProperty("opacity", "1", "important")
            allimg[g].src = img1[g]
        }
        setTimeout(() => {
            document.getElementsByClassName('hilangkan2')[0].classList.add('hilangkecil')
            document.getElementsByClassName('hilangkan2')[0].classList.remove('munculkecil')
            document.getElementsByClassName('fotopy22')[0].classList.add('hilangbesar')
            document.getElementsByClassName('fotopy22')[0].classList.remove('munculbesar')
            document.getElementsByClassName('judulpy22')[0].classList.add('hilangbesar')
            document.getElementsByClassName('judulpy22')[0].classList.remove('munculbesar')
        }, 75);
        setTimeout(() => {
            document.getElementsByClassName('hilangkan3')[0].classList.add('hilangkecil')
            document.getElementsByClassName('hilangkan3')[0].classList.remove('munculkecil')
            document.getElementsByClassName('fotopy32')[0].classList.add('hilangbesar')
            document.getElementsByClassName('fotopy32')[0].classList.remove('munculbesar')
            document.getElementsByClassName('judulpy32')[0].classList.add('hilangbesar')
            document.getElementsByClassName('judulpy32')[0].classList.remove('munculbesar')
        }, 125);
        setTimeout(() => {
            document.getElementsByClassName('hilangkan4')[0].classList.add('hilangkecil')
            document.getElementsByClassName('hilangkan4')[0].classList.remove('munculkecil')
            document.getElementsByClassName('fotopy42')[0].classList.add('hilangbesar')
            document.getElementsByClassName('fotopy42')[0].classList.remove('munculbesar')
            document.getElementsByClassName('judulpy42')[0].classList.add('hilangbesar')
            document.getElementsByClassName('judulpy42')[0].classList.remove('munculbesar')
        }, 175);
        document.getElementsByClassName('bannerpy1')[0].classList.add('ada')
        document.getElementsByClassName('pausepy')[0].classList.add('ada')
        document.getElementsByClassName('tengahcrop')[0].classList.add('ada')
        document.querySelector(".bannerpy1").style.setProperty("background-image", "url('/fotoplaylist/foto1.jpg')",);
        setTimeout(() => {
            document.getElementsByClassName('bannerpy1')[0].classList.add('munculbesar')
            document.getElementsByClassName('pausepy')[0].classList.add('munculbesar')
            document.getElementsByClassName('tengahcrop')[0].classList.add('munculbesar')
            document.getElementsByClassName('bannerpy1')[0].classList.remove('tidakada')
            document.getElementsByClassName('pausepy')[0].classList.remove('tidakada')
            document.getElementsByClassName('tengahcrop')[0].classList.remove('tidakada')
            document.getElementsByClassName('hilangkan1')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy12')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy22')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy32')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy42')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy12')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy22')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy32')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy42')[0].classList.add('tidakada')
            document.getElementsByClassName('hilangkan2')[0].classList.add('tidakada')
            document.getElementsByClassName('hilangkan3')[0].classList.add('tidakada')
            document.getElementsByClassName('hilangkan4')[0].classList.add('tidakada')
            document.getElementsByClassName('bannerpy1')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('pausepy')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('tengahcrop')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('hilangkan1')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy12')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy22')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy32')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy42')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy12')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy22')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy32')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy42')[0].classList.remove('ada')
            document.getElementsByClassName('hilangkan2')[0].classList.remove('ada')
            document.getElementsByClassName('hilangkan3')[0].classList.remove('ada')
            document.getElementsByClassName('hilangkan4')[0].classList.remove('ada')
        }, 400);
    }
    if (logicpy !== 1 && logicpy !== 0) {
        document.querySelector(".bannerpy1").style.setProperty("background-image", "url('/fotoplaylist/foto1.jpg')",);
        document.getElementsByClassName('pausepy')[0].classList.add('munculbesar')
        for (let g = 0; g < 20; g++) {
            lgall[g].style.setProperty("opacity", "0", "important")
            dall[g].style.setProperty("opacity", "0", "important")
            allimg[g].style.setProperty("opacity", "0", "important")
            setTimeout(() => {
                lgall[g].textContent = lgmd1[g]
                dall[g].textContent = dpy1[g]
                allimg[g].src = img1[g]
                dall[g].style.setProperty("opacity", "1", "important")
                lgall[g].style.setProperty("opacity", "1", "important")
                allimg[g].style.setProperty("opacity", "1", "important")
            }, 300);
        }
    }
    logicpy = 1;
}

function playlist3() {
    if (logicpy === 0) {
        document.getElementsByClassName('hilangkan3')[0].classList.add('hilangkecil')
        document.getElementsByClassName('hilangkan3')[0].classList.remove('munculkecil')
        document.getElementsByClassName('fotopy32')[0].classList.add('hilangbesar')
        document.getElementsByClassName('fotopy32')[0].classList.remove('munculbesar')
        document.getElementsByClassName('judulpy32')[0].classList.add('hilangbesar')
        document.getElementsByClassName('judulpy32')[0].classList.remove('munculbesar')
        for (let g = 0; g < 20; g++) {
            lgall[g].textContent = lgmd2[g]
            lgall[g].style.setProperty("opacity", "1", "important")
            dall[g].style.setProperty("opacity", "1", "important")
            allimg[g].style.setProperty("opacity", "1", "important")
            dall[g].textContent = dpy2[g]
            allimg[g].src = img2[g]
        }
        setTimeout(() => {
            document.getElementsByClassName('hilangkan1')[0].classList.add('hilangkecil')
            document.getElementsByClassName('hilangkan1')[0].classList.remove('munculkecil')
            document.getElementsByClassName('fotopy12')[0].classList.add('hilangbesar')
            document.getElementsByClassName('fotopy12')[0].classList.remove('munculbesar')
            document.getElementsByClassName('judulpy12')[0].classList.add('hilangbesar')
            document.getElementsByClassName('judulpy12')[0].classList.remove('munculbesar')
        }, 75);
        setTimeout(() => {
            document.getElementsByClassName('hilangkan2')[0].classList.add('hilangkecil')
            document.getElementsByClassName('hilangkan2')[0].classList.remove('munculkecil')
            document.getElementsByClassName('fotopy22')[0].classList.add('hilangbesar')
            document.getElementsByClassName('fotopy22')[0].classList.remove('munculbesar')
            document.getElementsByClassName('judulpy22')[0].classList.add('hilangbesar')
            document.getElementsByClassName('judulpy22')[0].classList.remove('munculbesar')
        }, 125);
        setTimeout(() => {
            document.getElementsByClassName('hilangkan4')[0].classList.add('hilangkecil')
            document.getElementsByClassName('hilangkan4')[0].classList.remove('munculkecil')
            document.getElementsByClassName('fotopy42')[0].classList.add('hilangbesar')
            document.getElementsByClassName('fotopy42')[0].classList.remove('munculbesar')
            document.getElementsByClassName('judulpy42')[0].classList.add('hilangbesar')
            document.getElementsByClassName('judulpy42')[0].classList.remove('munculbesar')
        }, 175);
        document.getElementsByClassName('bannerpy1')[0].classList.add('ada')
        document.getElementsByClassName('pausepy')[2].classList.add('ada')
        document.getElementsByClassName('tengahcrop')[0].classList.add('ada')
        document.querySelector(".bannerpy1").style.setProperty("background-image", "url('/fotoplaylist/foto3.jpg')",);
        setTimeout(() => {
            document.getElementsByClassName('bannerpy1')[0].classList.add('munculbesar')
            document.getElementsByClassName('pausepy')[2].classList.add('munculbesar')
            document.getElementsByClassName('tengahcrop')[0].classList.add('munculbesar')
            document.getElementsByClassName('bannerpy1')[0].classList.remove('tidakada')
            document.getElementsByClassName('pausepy')[2].classList.remove('tidakada')
            document.getElementsByClassName('tengahcrop')[0].classList.remove('tidakada')
            document.getElementsByClassName('hilangkan1')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy12')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy22')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy32')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy42')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy12')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy22')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy32')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy42')[0].classList.add('tidakada')
            document.getElementsByClassName('hilangkan2')[0].classList.add('tidakada')
            document.getElementsByClassName('hilangkan3')[0].classList.add('tidakada')
            document.getElementsByClassName('hilangkan4')[0].classList.add('tidakada')
            document.getElementsByClassName('bannerpy1')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('pausepy')[2].classList.remove('hilangbesar')
            document.getElementsByClassName('tengahcrop')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('hilangkan1')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy12')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy22')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy32')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy42')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy12')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy22')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy32')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy42')[0].classList.remove('ada')
            document.getElementsByClassName('hilangkan2')[0].classList.remove('ada')
            document.getElementsByClassName('hilangkan3')[0].classList.remove('ada')
            document.getElementsByClassName('hilangkan4')[0].classList.remove('ada')
        }, 400);
    }
    if (logicpy !== 2 && logicpy !== 0) {
        document.querySelector(".bannerpy1").style.setProperty("background-image", "url('/fotoplaylist/foto3.jpg')",);
        document.getElementsByClassName('pausepy')[2].classList.add('munculbesar')
        for (let g = 0; g < 20; g++) {
            lgall[g].style.setProperty("opacity", "0", "important")
            dall[g].style.setProperty("opacity", "0", "important")
            allimg[g].style.setProperty("opacity", "0", "important")
            setTimeout(() => {
                lgall[g].textContent = lgmd2[g]
                dall[g].textContent = dpy2[g]
                allimg[g].src = img2[g]
                lgall[g].style.setProperty("opacity", "1", "important")
                dall[g].style.setProperty("opacity", "1", "important")
                allimg[g].style.setProperty("opacity", "1", "important")
            }, 400);
        }
    }
    logicpy = 2;
}
function playlist2() {
    if (logicpy === 0) {
        document.getElementsByClassName('hilangkan2')[0].classList.add('hilangkecil')
        document.getElementsByClassName('hilangkan2')[0].classList.remove('munculkecil')
        document.getElementsByClassName('fotopy22')[0].classList.add('hilangbesar')
        document.getElementsByClassName('fotopy22')[0].classList.remove('munculbesar')
        document.getElementsByClassName('judulpy22')[0].classList.add('hilangbesar')
        document.getElementsByClassName('judulpy22')[0].classList.remove('munculbesar')
        for (let g = 0; g < 20; g++) {
            lgall[g].textContent = lgmd3[g]
            lgall[g].style.setProperty("opacity", "1", "important")
            dall[g].style.setProperty("opacity", "1", "important")
            dall[g].textContent = dpy3[g]
            allimg[g].style.setProperty("opacity", "1", "important")
            allimg[g].src = img3[g]
        }
        setTimeout(() => {
            document.getElementsByClassName('hilangkan1')[0].classList.add('hilangkecil')
            document.getElementsByClassName('hilangkan1')[0].classList.remove('munculkecil')
            document.getElementsByClassName('fotopy12')[0].classList.add('hilangbesar')
            document.getElementsByClassName('fotopy12')[0].classList.remove('munculbesar')
            document.getElementsByClassName('judulpy12')[0].classList.add('hilangbesar')
            document.getElementsByClassName('judulpy12')[0].classList.remove('munculbesar')
        }, 75);
        setTimeout(() => {
            document.getElementsByClassName('hilangkan3')[0].classList.add('hilangkecil')
            document.getElementsByClassName('hilangkan3')[0].classList.remove('munculkecil')
            document.getElementsByClassName('fotopy32')[0].classList.add('hilangbesar')
            document.getElementsByClassName('fotopy32')[0].classList.remove('munculbesar')
            document.getElementsByClassName('judulpy32')[0].classList.add('hilangbesar')
            document.getElementsByClassName('judulpy32')[0].classList.remove('munculbesar')
        }, 125);
        setTimeout(() => {
            document.getElementsByClassName('hilangkan4')[0].classList.add('hilangkecil')
            document.getElementsByClassName('hilangkan4')[0].classList.remove('munculkecil')
            document.getElementsByClassName('fotopy42')[0].classList.add('hilangbesar')
            document.getElementsByClassName('fotopy42')[0].classList.remove('munculbesar')
            document.getElementsByClassName('judulpy42')[0].classList.add('hilangbesar')
            document.getElementsByClassName('judulpy42')[0].classList.remove('munculbesar')
        }, 175);
        document.getElementsByClassName('bannerpy1')[0].classList.add('ada')
        document.getElementsByClassName('pausepy')[1].classList.add('ada')
        document.getElementsByClassName('tengahcrop')[0].classList.add('ada')
        document.querySelector(".bannerpy1").style.setProperty("background-image", "url('/fotoplaylist/foto2.jpg')",);
        setTimeout(() => {
            document.getElementsByClassName('bannerpy1')[0].classList.add('munculbesar')
            document.getElementsByClassName('pausepy')[1].classList.add('munculbesar')
            document.getElementsByClassName('tengahcrop')[0].classList.add('munculbesar')
            document.getElementsByClassName('bannerpy1')[0].classList.remove('tidakada')
            document.getElementsByClassName('pausepy')[1].classList.remove('tidakada')
            document.getElementsByClassName('tengahcrop')[0].classList.remove('tidakada')
            document.getElementsByClassName('hilangkan1')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy12')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy22')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy32')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy42')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy12')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy22')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy32')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy42')[0].classList.add('tidakada')
            document.getElementsByClassName('hilangkan2')[0].classList.add('tidakada')
            document.getElementsByClassName('hilangkan3')[0].classList.add('tidakada')
            document.getElementsByClassName('hilangkan4')[0].classList.add('tidakada')
            document.getElementsByClassName('bannerpy1')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('pausepy')[1].classList.remove('hilangbesar')
            document.getElementsByClassName('tengahcrop')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('hilangkan1')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy12')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy22')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy32')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy42')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy12')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy22')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy32')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy42')[0].classList.remove('ada')
            document.getElementsByClassName('hilangkan2')[0].classList.remove('ada')
            document.getElementsByClassName('hilangkan3')[0].classList.remove('ada')
            document.getElementsByClassName('hilangkan4')[0].classList.remove('ada')
        }, 400);
    }
    if (logicpy !== 3 && logicpy !== 0) {
        document.querySelector(".bannerpy1").style.setProperty("background-image", "url('/fotoplaylist/foto2.jpg')",);
        document.getElementsByClassName('pausepy')[1].classList.add('munculbesar')
        for (let g = 0; g < 20; g++) {
            lgall[g].style.setProperty("opacity", "0", "important")
            dall[g].style.setProperty("opacity", "0", "important")
            allimg[g].style.setProperty("opacity", "0", "important")
            setTimeout(() => {
                lgall[g].textContent = lgmd3[g]
                dall[g].textContent = dpy3[g]
                allimg[g].src = img3[g]
                dall[g].style.setProperty("opacity", "1", "important")
                lgall[g].style.setProperty("opacity", "1", "important")
                allimg[g].style.setProperty("opacity", "1", "important")
            }, 300);
        }
    }
    logicpy = 3;
}
function playlist4() {
    if (logicpy === 0) {
        document.getElementsByClassName('hilangkan4')[0].classList.add('hilangkecil')
        document.getElementsByClassName('hilangkan4')[0].classList.remove('munculkecil')
        document.getElementsByClassName('fotopy42')[0].classList.add('hilangbesar')
        document.getElementsByClassName('fotopy42')[0].classList.remove('munculbesar')
        document.getElementsByClassName('judulpy42')[0].classList.add('hilangbesar')
        document.getElementsByClassName('judulpy42')[0].classList.remove('munculbesar')
        for (let g = 0; g < 20; g++) {
            lgall[g].textContent = lgmd4[g]
            lgall[g].style.setProperty("opacity", "1", "important")
            dall[g].style.setProperty("opacity", "1", "important")
            allimg[g].style.setProperty("opacity", "1", "important")
            dall[g].textContent = dpy4
            allimg[g].src = img4
        }
        setTimeout(() => {
            document.getElementsByClassName('hilangkan2')[0].classList.add('hilangkecil')
            document.getElementsByClassName('hilangkan2')[0].classList.remove('munculkecil')
            document.getElementsByClassName('fotopy22')[0].classList.add('hilangbesar')
            document.getElementsByClassName('fotopy22')[0].classList.remove('munculbesar')
            document.getElementsByClassName('judulpy22')[0].classList.add('hilangbesar')
            document.getElementsByClassName('judulpy22')[0].classList.remove('munculbesar')
        }, 75);
        setTimeout(() => {
            document.getElementsByClassName('hilangkan3')[0].classList.add('hilangkecil')
            document.getElementsByClassName('hilangkan3')[0].classList.remove('munculkecil')
            document.getElementsByClassName('fotopy32')[0].classList.add('hilangbesar')
            document.getElementsByClassName('fotopy32')[0].classList.remove('munculbesar')
            document.getElementsByClassName('judulpy32')[0].classList.add('hilangbesar')
            document.getElementsByClassName('judulpy32')[0].classList.remove('munculbesar')
        }, 125);
        setTimeout(() => {
            document.getElementsByClassName('hilangkan1')[0].classList.add('hilangkecil')
            document.getElementsByClassName('hilangkan1')[0].classList.remove('munculkecil')
            document.getElementsByClassName('fotopy12')[0].classList.add('hilangbesar')
            document.getElementsByClassName('fotopy12')[0].classList.remove('munculbesar')
            document.getElementsByClassName('judulpy12')[0].classList.add('hilangbesar')
            document.getElementsByClassName('judulpy12')[0].classList.remove('munculbesar')
        }, 175);
        document.getElementsByClassName('bannerpy1')[0].classList.add('ada')
        document.getElementsByClassName('pausepy')[3].classList.add('ada')
        document.getElementsByClassName('tengahcrop')[0].classList.add('ada')
        document.querySelector(".bannerpy1").style.setProperty("background-image", "url('/fotoplaylist/foto4.jpg')",);
        setTimeout(() => {
            document.getElementsByClassName('bannerpy1')[0].classList.add('munculbesar')
            document.getElementsByClassName('pausepy')[3].classList.add('munculbesar')
            document.getElementsByClassName('tengahcrop')[0].classList.add('munculbesar')
            document.getElementsByClassName('bannerpy1')[0].classList.remove('tidakada')
            document.getElementsByClassName('pausepy')[3].classList.remove('tidakada')
            document.getElementsByClassName('tengahcrop')[0].classList.remove('tidakada')
            document.getElementsByClassName('hilangkan1')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy12')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy22')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy32')[0].classList.add('tidakada')
            document.getElementsByClassName('fotopy42')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy12')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy22')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy32')[0].classList.add('tidakada')
            document.getElementsByClassName('judulpy42')[0].classList.add('tidakada')
            document.getElementsByClassName('hilangkan2')[0].classList.add('tidakada')
            document.getElementsByClassName('hilangkan3')[0].classList.add('tidakada')
            document.getElementsByClassName('hilangkan4')[0].classList.add('tidakada')
            document.getElementsByClassName('bannerpy1')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('pausepy')[3].classList.remove('hilangbesar')
            document.getElementsByClassName('tengahcrop')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('hilangkan1')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy12')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy22')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy32')[0].classList.remove('ada')
            document.getElementsByClassName('fotopy42')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy12')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy22')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy32')[0].classList.remove('ada')
            document.getElementsByClassName('judulpy42')[0].classList.remove('ada')
            document.getElementsByClassName('hilangkan2')[0].classList.remove('ada')
            document.getElementsByClassName('hilangkan3')[0].classList.remove('ada')
            document.getElementsByClassName('hilangkan4')[0].classList.remove('ada')
        }, 400);
    }
    if (logicpy !== 4 && logicpy !== 0) {
        document.querySelector(".bannerpy1").style.setProperty("background-image", "url('/fotoplaylist/foto4.jpg')",);
        document.getElementsByClassName('pausepy')[3].classList.add('munculbesar')
        for (let g = 0; g < 20; g++) {
            lgall[g].style.setProperty("opacity", "0", "important")
            dall[g].style.setProperty("opacity", "0", "important")
            allimg[g].style.setProperty("opacity", "0", "important")
            setTimeout(() => {
                lgall[g].textContent = lgmd4[g]
                dall[g].textContent = dpy4
                allimg[g].src = img4
                lgall[g].style.setProperty("opacity", "1", "important")
                dall[g].style.setProperty("opacity", "1", "important")
                allimg[g].style.setProperty("opacity", "1", "important")
            }, 400);
        }
    }
    logicpy = 4;
}
function home() {
    if (logicpy !== 0) {
        document.getElementsByClassName('bannerpy1')[0].classList.add('hilangbesar')
        document.getElementsByClassName('pausepy')[0].classList.add('hilangbesar')
        document.getElementsByClassName('pausepy')[1].classList.add('hilangbesar')
        document.getElementsByClassName('pausepy')[2].classList.add('hilangbesar')
        document.getElementsByClassName('pausepy')[3].classList.add('hilangbesar')
        document.getElementsByClassName('tengahcrop')[0].classList.add('hilangbesar')
        document.getElementsByClassName('bannerpy1')[0].classList.remove('munculbesar')
        document.getElementsByClassName('pausepy')[0].classList.remove('munculbesar')
        document.getElementsByClassName('pausepy')[1].classList.remove('munculbesar')
        document.getElementsByClassName('pausepy')[2].classList.remove('munculbesar')
        document.getElementsByClassName('pausepy')[3].classList.remove('munculbesar')
        document.getElementsByClassName('tengahcrop')[0].classList.remove('munculbesar')
        setTimeout(() => {
            document.getElementsByClassName('hilangkan1')[0].classList.add('ada')
            document.getElementsByClassName('hilangkan1')[0].classList.add('munculkecil')
            document.getElementsByClassName('hilangkan1')[0].classList.remove('hilangkecil')
            document.getElementsByClassName('hilangkan1')[0].classList.remove('tidakada')
            document.getElementsByClassName('fotopy12')[0].classList.add('ada')
            document.getElementsByClassName('fotopy12')[0].classList.add('munculbesar')
            document.getElementsByClassName('fotopy12')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('fotopy12')[0].classList.remove('tidakada')
            document.getElementsByClassName('judulpy12')[0].classList.add('ada')
            document.getElementsByClassName('judulpy12')[0].classList.add('munculbesar')
            document.getElementsByClassName('judulpy12')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('judulpy12')[0].classList.remove('tidakada')
        }, 35);
        setTimeout(() => {
            document.getElementsByClassName('hilangkan2')[0].classList.add('ada')
            document.getElementsByClassName('hilangkan2')[0].classList.add('munculkecil')
            document.getElementsByClassName('hilangkan2')[0].classList.remove('hilangkecil')
            document.getElementsByClassName('hilangkan2')[0].classList.remove('tidakada')
            document.getElementsByClassName('fotopy22')[0].classList.add('ada')
            document.getElementsByClassName('fotopy22')[0].classList.add('munculbesar')
            document.getElementsByClassName('fotopy22')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('fotopy22')[0].classList.remove('tidakada')
            document.getElementsByClassName('judulpy22')[0].classList.add('ada')
            document.getElementsByClassName('judulpy22')[0].classList.add('munculbesar')
            document.getElementsByClassName('judulpy22')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('judulpy22')[0].classList.remove('tidakada')
        }, 75);
        setTimeout(() => {
            document.getElementsByClassName('hilangkan3')[0].classList.add('ada')
            document.getElementsByClassName('hilangkan3')[0].classList.add('munculkecil')
            document.getElementsByClassName('hilangkan3')[0].classList.remove('hilangkecil')
            document.getElementsByClassName('hilangkan3')[0].classList.remove('tidakada')
            document.getElementsByClassName('fotopy32')[0].classList.add('ada')
            document.getElementsByClassName('fotopy32')[0].classList.add('munculbesar')
            document.getElementsByClassName('fotopy32')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('fotopy32')[0].classList.remove('tidakada')
            document.getElementsByClassName('judulpy32')[0].classList.add('ada')
            document.getElementsByClassName('judulpy32')[0].classList.add('munculbesar')
            document.getElementsByClassName('judulpy32')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('judulpy32')[0].classList.remove('tidakada')
        }, 125);
        setTimeout(() => {
            document.getElementsByClassName('hilangkan4')[0].classList.add('ada')
            document.getElementsByClassName('hilangkan4')[0].classList.add('munculkecil')
            document.getElementsByClassName('hilangkan4')[0].classList.remove('hilangkecil')
            document.getElementsByClassName('hilangkan4')[0].classList.remove('tidakada')
            document.getElementsByClassName('fotopy42')[0].classList.add('ada')
            document.getElementsByClassName('fotopy42')[0].classList.add('munculbesar')
            document.getElementsByClassName('fotopy42')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('fotopy42')[0].classList.remove('tidakada')
            document.getElementsByClassName('judulpy42')[0].classList.add('ada')
            document.getElementsByClassName('judulpy42')[0].classList.add('munculbesar')
            document.getElementsByClassName('judulpy42')[0].classList.remove('hilangbesar')
            document.getElementsByClassName('judulpy42')[0].classList.remove('tidakada')
        }, 175);
        setTimeout(() => {
            document.getElementsByClassName('bannerpy1')[0].classList.remove('ada')
            document.getElementsByClassName('pausepy')[0].classList.remove('ada')
            document.getElementsByClassName('pausepy')[1].classList.remove('ada')
            document.getElementsByClassName('pausepy')[2].classList.remove('ada')
            document.getElementsByClassName('pausepy')[3].classList.remove('ada')
            document.getElementsByClassName('tengahcrop')[0].classList.remove('ada')
            document.getElementsByClassName('bannerpy1')[0].classList.add('tidakada')
            document.getElementsByClassName('pausepy')[0].classList.add('tidakada')
            document.getElementsByClassName('pausepy')[1].classList.add('tidakada')
            document.getElementsByClassName('pausepy')[2].classList.add('tidakada')
            document.getElementsByClassName('pausepy')[3].classList.add('tidakada')
            document.getElementsByClassName('tengahcrop')[0].classList.add('tidakada')
        }, 400);
        logicpy = 0
    }
}
