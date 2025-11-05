(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6280], {
    13571: function(t, l, e) {
        Promise.resolve().then(e.bind(e, 45875))
    },
    45875: function(t, l, e) {
        "use strict";
        e.r(l),
        e.d(l, {
            default: function() {
                return V
            }
        });
        var o = e(63955)
          , n = e(82310)
          , a = e(15373);
        e(58379),
        e(76394),
        e(89134);
        var i = e(3097);
        function r(t) {
            let {solution: l, imagePath: e, onSolved: a, rows: r, cols: s, instructionSmallText: u, instructionLargeText: c, optionalBoxes: d=null, tinyBorders: v=!1, noBorders: h=!1, imagePathArray: m=null, additionalOnPress: g=null, additionalOnVerify: f=null, spin: p=!1, customErrorText: w=null} = t
              , [x,y] = (0,
            n.useState)(Array(r * s).fill(!1))
              , [P,S] = (0,
            n.useState)(!1)
              , [T,j] = (0,
            n.useState)(!1)
              , A = "captchaBox ".concat(h ? "noBorder" : v ? "thinBorder" : "")
              , O = "selected ".concat(!p && (v || h) ? "thinSelected" : "")
              , b = "captchaCheck ".concat(!p && (v || h) ? "thinCaptchaCheck" : "")
              , k = "".concat(v ? "thinInstructions" : "", " ").concat(h ? "noBorderInstructions" : "")
              , M = () => {
                for (let t = 0; t < l.length; t++)
                    if ((null == d || !d[t]) && ((null == x ? void 0 : x[t]) !== (null == l ? void 0 : l[t]) || (null == l ? void 0 : l[t]) < 0))
                        return !1;
                if (f) {
                    let t = f(x, {
                        imagePathArray: m
                    });
                    return t || y(Array(r * s).fill(!1)),
                    t
                }
                return !0
            }
            ;
            return (0,
            o.jsxs)(i.E.div, {
                className: "captchaContainer ".concat(p ? "withSpin" : ""),
                children: [(0,
                o.jsxs)("div", {
                    className: "captchaInstructions ".concat(k),
                    children: [(0,
                    o.jsx)("div", {
                        className: "smallText",
                        children: u
                    }), (0,
                    o.jsx)("div", {
                        className: "boldText",
                        children: c
                    })]
                }), (0,
                o.jsx)("div", {
                    className: "captchaGrid",
                    style: {
                        gridTemplateColumns: "repeat(".concat(s, ", 1fr)")
                    },
                    children: x.map( (t, l) => (0,
                    o.jsxs)("div", {
                        className: "".concat(A, " ").concat(t ? O : ""),
                        onMouseDown: () => {
                            let t = [...x];
                            t[l] = !t[l],
                            y(t),
                            S(!1),
                            g && g(l, x, y, {
                                imagePathArray: m
                            })
                        }
                        ,
                        children: [t && (0,
                        o.jsx)("img", {
                            className: b,
                            src: "assets/captcha-game/check.png",
                            alt: "captcha image",
                            draggable: !1
                        }), !1, (0,
                        o.jsx)("img", {
                            className: "captchaImage",
                            src: (null == m ? void 0 : m[l]) ? m[l] : "".concat(e, "image_").concat(l + 1, ".png"),
                            alt: "captcha image",
                            draggable: !1
                        })]
                    }, l))
                }), (0,
                o.jsxs)("div", {
                    className: "captchaBottomBar",
                    children: [(0,
                    o.jsx)("div", {
                        className: "redText",
                        children: P ? null != w ? w : "Please Try Again" : ""
                    }), (0,
                    o.jsx)(i.E.div, {
                        className: "verifyButton ".concat(p ? "extraPadding" : ""),
                        animate: T ? {
                            x: [-15, 15, -15, 15, 0]
                        } : {
                            x: 0
                        },
                        transition: {
                            duration: .5
                        },
                        onMouseDown: () => {
                            M() ? a() : (S(!0),
                            j(!0),
                            setTimeout( () => {
                                j(!1)
                            }
                            , 500))
                        }
                        ,
                        children: "Verify"
                    })]
                })]
            })
        }
        function s(t) {
            let {onSolved: l} = t
              , e = Array(9).fill(!0);
            return (0,
            o.jsx)(r, {
                solution: e,
                imagePath: "assets/captcha-game/trafficLights/",
                onSolved: l,
                rows: 3,
                cols: 3,
                instructionSmallText: "Select all squares with",
                instructionLargeText: "Traffic Lights"
            })
        }
        function u(t) {
            let {onSolved: l} = t
              , e = Array(16).fill(!1);
            e[15] = !0,
            e[14] = !0,
            e[10] = !0,
            e[11] = !0;
            let n = Array(16).fill(!1);
            return n[9] = !0,
            n[12] = !0,
            n[13] = !0,
            (0,
            o.jsx)(r, {
                solution: e,
                imagePath: "assets/captcha-game/crosswalk/",
                onSolved: l,
                rows: 4,
                cols: 4,
                instructionSmallText: "Select all squares with",
                instructionLargeText: "Crosswalks",
                optionalBoxes: n
            })
        }
        function c(t) {
            let {onSolved: l} = t
              , e = Array(9).fill(!1);
            return e[4] = !0,
            e[6] = !0,
            e[7] = !0,
            e[8] = !0,
            (0,
            o.jsx)(r, {
                solution: e,
                imagePath: "assets/captcha-game/birds/",
                onSolved: l,
                rows: 3,
                cols: 3,
                instructionSmallText: "Select all squares with",
                instructionLargeText: "Flightless Birds"
            })
        }
        function d(t) {
            let {onSolved: l} = t
              , e = Array(16).fill(!1);
            return e[3] = !0,
            e[5] = !0,
            e[6] = !0,
            e[8] = !0,
            e[10] = !0,
            e[12] = !0,
            e[14] = !0,
            e[15] = !0,
            (0,
            o.jsx)(r, {
                solution: e,
                imagePath: "assets/captcha-game/dogs/",
                onSolved: l,
                rows: 4,
                cols: 4,
                instructionSmallText: "Select all squares with",
                instructionLargeText: "Chihuahuas"
            })
        }
        function v(t) {
            let {onSolved: l} = t
              , e = Array(20).fill(!1)
              , n = Array(20).fill(!0);
            return (0,
            o.jsx)(r, {
                solution: e,
                imagePath: "assets/captcha-game/trolly/",
                onSolved: l,
                rows: 3,
                cols: 5,
                instructionSmallText: "Oh no",
                instructionLargeText: "A run away trolly!",
                optionalBoxes: n
            })
        }
        let h = (t, l, e) => {
            if (!t || !l || !e)
                return [];
            let o = Array(t * l).fill(!1);
            for (let t = 0; t < e.length; t++)
                o[e[t]] = !0;
            return o
        }
        ;
        function m(t) {
            var l, e;
            let {onSolved: a} = t
              , i = [{
                title: "0",
                rows: 8,
                cols: 8,
                solution: [32]
            }, {
                title: "1",
                rows: 8,
                cols: 8,
                solution: [21]
            }, {
                title: "2",
                rows: 8,
                cols: 8,
                solution: [29]
            }, {
                title: "3",
                rows: 8,
                cols: 8,
                solution: [22]
            }, {
                title: "4",
                rows: 8,
                cols: 8,
                solution: [41],
                optional: [49]
            }, {
                title: "5",
                rows: 8,
                cols: 8,
                solution: [10]
            }, {
                title: "6",
                rows: 8,
                cols: 8,
                solution: [11]
            }, {
                title: "7",
                rows: 8,
                cols: 8,
                solution: [5]
            }]
              , [s,u] = (0,
            n.useState)({});
            (0,
            n.useEffect)( () => {
                let t = Math.floor(Math.random() * i.length);
                u(i[t])
            }
            , []);
            let c = "assets/captcha-game/waldo/".concat(null == s ? void 0 : s.title, "/");
            return s.title ? (0,
            o.jsx)(r, {
                solution: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.solution),
                optionalBoxes: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.optional),
                imagePath: c,
                onSolved: a,
                rows: null !== (l = null == s ? void 0 : s.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == s ? void 0 : s.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Where's",
                instructionLargeText: "Waldo?",
                noBorders: !0
            }) : null
        }
        function g(t) {
            var l, e;
            let {onSolved: a} = t
              , i = [{
                title: "average",
                rows: 4,
                cols: 8,
                solution: [4, 5],
                optional: [0, 1, 2, 3, 6, 7]
            }, {
                title: "dayOfWeek",
                rows: 6,
                cols: 8,
                solution: [18, 26],
                optional: [8, 9, 10, 11, 16, 17, 19, 24, 25, 27, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31]
            }, {
                title: "fib",
                rows: 4,
                cols: 8,
                solution: [11],
                optional: [8, 9, 10, 12, 13, 14, 15]
            }, {
                title: "findMax",
                rows: 4,
                cols: 8,
                solution: [12],
                optional: [8, 9, 10, 11, 13, 14, 15]
            }]
              , [s,u] = (0,
            n.useState)({});
            (0,
            n.useEffect)( () => {
                let t = Math.floor(Math.random() * i.length);
                u(i[t])
            }
            , []);
            let c = "assets/captcha-game/code/".concat(null == s ? void 0 : s.title, "/");
            return s.title ? (0,
            o.jsx)(r, {
                solution: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.solution),
                optionalBoxes: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.optional),
                imagePath: c,
                onSolved: a,
                rows: null !== (l = null == s ? void 0 : s.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == s ? void 0 : s.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Select all squares with",
                instructionLargeText: "a Bug",
                noBorders: !0
            }) : null
        }
        function f(t) {
            var l, e;
            let {onSolved: a} = t
              , i = [{
                title: "0",
                rows: 8,
                cols: 8,
                solution: [61, 13]
            }, {
                title: "1",
                rows: 8,
                cols: 8,
                solution: [20, 4]
            }, {
                title: "2",
                rows: 8,
                cols: 8,
                solution: [21, 7]
            }, {
                title: "3",
                rows: 8,
                cols: 8,
                solution: [28, 7]
            }, {
                title: "4",
                rows: 8,
                cols: 8,
                solution: [28, 7]
            }, {
                title: "5",
                rows: 8,
                cols: 8,
                solution: [59, 3]
            }, {
                title: "6",
                rows: 8,
                cols: 8,
                solution: [28, 22]
            }, {
                title: "7",
                rows: 8,
                cols: 8,
                solution: [31, 15]
            }]
              , [s,u] = (0,
            n.useState)({});
            (0,
            n.useEffect)( () => {
                let t = Math.floor(Math.random() * i.length);
                u(i[t])
            }
            , []);
            let c = "assets/captcha-game/chess/".concat(null == s ? void 0 : s.title, "/");
            return s.title ? (0,
            o.jsx)(r, {
                solution: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.solution),
                optionalBoxes: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.optional),
                imagePath: c,
                onSolved: a,
                rows: null !== (l = null == s ? void 0 : s.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == s ? void 0 : s.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "White to move",
                instructionLargeText: "Mate in 1",
                noBorders: !0
            }) : null
        }
        let p = {
            "\uD83C\uDF11": 0,
            "\uD83C\uDF12": 1,
            "\uD83C\uDF13": 2,
            "\uD83C\uDF18": 3,
            "\uD83C\uDF14": 5,
            "\uD83C\uDF17": 6,
            "\uD83C\uDF16": 7,
            "\uD83C\uDF15": 8
        };
        function w(t) {
            var l, e;
            let {onSolved: a} = t
              , [i,s] = (0,
            n.useState)({
                title: "0",
                rows: 3,
                cols: 3,
                solution: [],
                optional: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            });
            (0,
            n.useEffect)( () => {
                let t = async () => {
                    try {
                        let t = await fetch("https://john.fun/api/moon")
                          , l = await t.json()
                          , e = null == l ? void 0 : l.emoji;
                        console.log(e);
                        let o = [null == p ? void 0 : p[e]];
                        s({
                            title: "0",
                            rows: 3,
                            cols: 3,
                            solution: o
                        })
                    } catch (t) {
                        console.log(t)
                    }
                }
                ;
                t()
            }
            , []);
            let u = "assets/captcha-game/moon/".concat(null == i ? void 0 : i.title, "/");
            return i.title ? (0,
            o.jsx)(r, {
                solution: h(null == i ? void 0 : i.rows, null == i ? void 0 : i.cols, null == i ? void 0 : i.solution),
                optionalBoxes: h(null == i ? void 0 : i.rows, null == i ? void 0 : i.cols, null == i ? void 0 : i.optional),
                imagePath: u,
                onSolved: a,
                rows: null !== (l = null == i ? void 0 : i.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == i ? void 0 : i.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "What's the current",
                instructionLargeText: "Moon Phase?",
                noBorders: !0
            }) : null
        }
        let x = ["angola", "antigua_and_barbuda", "argentina", "australia", "bahamas", "bangladesh", "barbados", "belize", "canada", "china", "cuba", "finland", "guatemala", "jamaica", "kiribati", "marshall_islands", "micronesia", "mozambique", "new_zealand", "palau", "papua_new_guinea", "seychelles", "solomon_islands", "south_africa", "thailand"]
          , y = ["afghanistan", "armenia", "belarus", "bhutan", "botswana", "burkina_faso", "car", "ethiopia", "kazakhstan", "kyrgyzstan", "mali", "mongolia", "niger", "paraguay", "rwanda", "south_sudan", "tajikistan", "uganda", "uzbekistan", "zambia", "zimbabwe"];
        function P(t) {
            var l, e;
            let {onSolved: a} = t
              , [i,s] = (0,
            n.useState)({});
            (0,
            n.useEffect)( () => {
                let t = Math.floor(3 * Math.random()) + 2
                  , l = y.sort( () => .5 - Math.random())
                  , e = l.slice(0, t)
                  , o = 9 - t
                  , n = x.sort( () => .5 - Math.random())
                  , a = n.slice(0, o)
                  , i = e.concat(a)
                  , r = i.sort( () => .5 - Math.random())
                  , u = [];
                for (let t = 0; t < r.length; t++)
                    e.includes(r[t]) && u.push(t);
                let c = r.map(t => {
                    let l = e.includes(t);
                    return "assets/captcha-game/flags/".concat(l ? "landlocked" : "water", "/").concat(t, ".png")
                }
                );
                s({
                    title: "0",
                    rows: 3,
                    cols: 3,
                    solution: u,
                    optional: [],
                    imagePathArray: c
                })
            }
            , []);
            let u = "assets/captcha-game/flags/".concat(null == i ? void 0 : i.title, "/");
            return i.title ? (0,
            o.jsx)(r, {
                solution: h(null == i ? void 0 : i.rows, null == i ? void 0 : i.cols, null == i ? void 0 : i.solution),
                optionalBoxes: h(null == i ? void 0 : i.rows, null == i ? void 0 : i.cols, null == i ? void 0 : i.optional),
                imagePath: u,
                imagePathArray: null == i ? void 0 : i.imagePathArray,
                onSolved: a,
                rows: null !== (l = null == i ? void 0 : i.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == i ? void 0 : i.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Select all the countries that are",
                instructionLargeText: "Landlocked"
            }) : null
        }
        function S(t) {
            for (let l of [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]) {
                let[e,o,n] = l;
                if (t[e] && t[e] === t[o] && t[e] === t[n])
                    return t[e]
            }
            return null
        }
        function T(t) {
            var l, e;
            let {onSolved: a} = t
              , i = t => "assets/captcha-game/ticTacToe/x.png" === t ? "X" : "assets/captcha-game/ticTacToe/o.png" === t ? "O" : ""
              , [s,u] = (0,
            n.useState)({})
              , c = (0,
            n.useRef)(0)
              , d = t => {
                u(l => {
                    let e = {
                        ...l
                    };
                    if ("assets/captcha-game/ticTacToe/x.png" === e.imagePathArray[t])
                        return e;
                    let o = e.imagePathArray.map(t => i(t))
                      , n = o.filter(t => "" === t).length;
                    return null !== S(o) || 0 === n || c.current % 2 == 1 || (e.imagePathArray[t] = "assets/captcha-game/ticTacToe/x.png",
                    c.current += 1,
                    setTimeout( () => {
                        v()
                    }
                    , 500)),
                    e
                }
                )
            }
              , v = () => {
                u(t => {
                    c.current += 1;
                    let l = {
                        ...t
                    }
                      , e = l.imagePathArray.map(t => i(t));
                    if (null !== S(e))
                        return l;
                    let o = function(t) {
                        let l;
                        let e = -1 / 0;
                        for (let o = 0; o < 9; o++)
                            if ("" === t[o]) {
                                t[o] = "O";
                                let n = function t(l, e, o) {
                                    let n = {
                                        X: -10,
                                        O: 10,
                                        draw: 0
                                    }
                                      , a = S(l);
                                    if (null !== a)
                                        return n[a];
                                    if (l.every(t => "" !== t))
                                        return n.draw;
                                    if (o) {
                                        let o = -1 / 0;
                                        for (let n = 0; n < 9; n++)
                                            if ("" === l[n]) {
                                                l[n] = "O";
                                                let a = t(l, e + 1, !1);
                                                l[n] = "",
                                                o = Math.max(a, o)
                                            }
                                        return o
                                    }
                                    {
                                        let o = 1 / 0;
                                        for (let n = 0; n < 9; n++)
                                            if ("" === l[n]) {
                                                l[n] = "X";
                                                let a = t(l, e + 1, !0);
                                                l[n] = "",
                                                o = Math.min(a, o)
                                            }
                                        return o
                                    }
                                }(t, 0, !1);
                                t[o] = "",
                                n > e && (e = n,
                                l = o)
                            }
                        return l
                    }(e);
                    return l.imagePathArray[o] = "assets/captcha-game/ticTacToe/o.png",
                    l
                }
                )
            }
              , m = (t, l) => {
                var e;
                c.current = 0;
                let o = null !== (e = null == l ? void 0 : l.imagePathArray) && void 0 !== e ? e : []
                  , n = o.map(t => i(t))
                  , a = [[n[0], n[1], n[2]], [n[3], n[4], n[5]], [n[6], n[7], n[8]], [n[0], n[3], n[6]], [n[1], n[4], n[7]], [n[2], n[5], n[8]], [n[0], n[4], n[8]], [n[2], n[4], n[6]]]
                  , r = a.some(t => "X" === t[0] && "X" === t[1] && "X" === t[2]);
                if (r)
                    return !0;
                let s = {
                    ...l
                }
                  , d = [];
                for (let t = 0; t < 9; t++)
                    d.push("assets/captcha-game/ticTacToe/empty.png");
                return s.imagePathArray = d,
                u(t => {
                    let l = {
                        ...t
                    };
                    return l.imagePathArray = d,
                    l
                }
                ),
                !1
            }
            ;
            return ((0,
            n.useEffect)( () => {
                let t = [];
                for (let l = 0; l < 9; l++)
                    t.push("assets/captcha-game/ticTacToe/empty.png");
                u({
                    title: "0",
                    rows: 3,
                    cols: 3,
                    solution: [],
                    optional: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                    imagePathArray: t,
                    additionalOnPress: d,
                    additionalOnVerify: m
                })
            }
            , []),
            s.title) ? (0,
            o.jsx)(r, {
                solution: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.solution),
                optionalBoxes: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.optional),
                imagePath: "",
                imagePathArray: null == s ? void 0 : s.imagePathArray,
                additionalOnPress: null == s ? void 0 : s.additionalOnPress,
                additionalOnVerify: null == s ? void 0 : s.additionalOnVerify,
                onSolved: a,
                rows: null !== (l = null == s ? void 0 : s.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == s ? void 0 : s.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Three in a row",
                instructionLargeText: "Tic Tac Toe"
            }) : null
        }
        function j(t) {
            var l, e;
            let {onSolved: a} = t
              , i = [{
                title: "0",
                rows: 3,
                cols: 3,
                solution: [3],
                optional: []
            }, {
                title: "1",
                rows: 4,
                cols: 4,
                solution: [5, 6],
                optional: []
            }, {
                title: "2",
                rows: 5,
                cols: 5,
                solution: [1, 8, 20],
                optional: []
            }]
              , [s,u] = (0,
            n.useState)({})
              , c = (0,
            n.useRef)(0);
            (0,
            n.useEffect)( () => {
                u(i[c.current])
            }
            , []);
            let d = "assets/captcha-game/colors/".concat(null == s ? void 0 : s.title, "/");
            return s.title ? (0,
            o.jsx)(r, {
                solution: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.solution),
                optionalBoxes: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.optional),
                imagePath: d,
                imagePathArray: null == s ? void 0 : s.imagePathArray,
                additionalOnPress: null == s ? void 0 : s.additionalOnPress,
                additionalOnVerify: null == s ? void 0 : s.additionalOnVerify,
                onSolved: a,
                rows: null !== (l = null == s ? void 0 : s.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == s ? void 0 : s.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Select the box(es) that",
                instructionLargeText: "Are a different color"
            }) : null
        }
        function A(t) {
            var l, e;
            let {onSolved: a} = t
              , i = [{
                title: "0",
                rows: 3,
                cols: 3,
                solution: [3],
                optional: []
            }, {
                title: "1",
                rows: 4,
                cols: 4,
                solution: [5, 6],
                optional: []
            }, {
                title: "2",
                rows: 5,
                cols: 5,
                solution: [1, 8, 20],
                optional: []
            }]
              , [s,u] = (0,
            n.useState)({})
              , c = (0,
            n.useRef)(1);
            (0,
            n.useEffect)( () => {
                u(i[c.current])
            }
            , []);
            let d = "assets/captcha-game/colors/".concat(null == s ? void 0 : s.title, "/");
            return s.title ? (0,
            o.jsx)(r, {
                solution: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.solution),
                optionalBoxes: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.optional),
                imagePath: d,
                imagePathArray: null == s ? void 0 : s.imagePathArray,
                additionalOnPress: null == s ? void 0 : s.additionalOnPress,
                additionalOnVerify: null == s ? void 0 : s.additionalOnVerify,
                onSolved: a,
                rows: null !== (l = null == s ? void 0 : s.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == s ? void 0 : s.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Select the box(es) that",
                instructionLargeText: "Are a different color"
            }) : null
        }
        function O(t) {
            var l, e;
            let {onSolved: a} = t
              , i = [{
                title: "0",
                rows: 3,
                cols: 3,
                solution: [3],
                optional: []
            }, {
                title: "1",
                rows: 4,
                cols: 4,
                solution: [5, 6],
                optional: []
            }, {
                title: "2",
                rows: 5,
                cols: 5,
                solution: [1, 8, 20],
                optional: []
            }]
              , [s,u] = (0,
            n.useState)({})
              , c = (0,
            n.useRef)(2);
            (0,
            n.useEffect)( () => {
                u(i[c.current])
            }
            , []);
            let d = "assets/captcha-game/colors/".concat(null == s ? void 0 : s.title, "/");
            return s.title ? (0,
            o.jsx)(r, {
                solution: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.solution),
                optionalBoxes: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.optional),
                imagePath: d,
                imagePathArray: null == s ? void 0 : s.imagePathArray,
                additionalOnPress: null == s ? void 0 : s.additionalOnPress,
                additionalOnVerify: null == s ? void 0 : s.additionalOnVerify,
                onSolved: a,
                rows: null !== (l = null == s ? void 0 : s.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == s ? void 0 : s.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Select the box(es) that",
                instructionLargeText: "Are a different color"
            }) : null
        }
        function b(t) {
            var l, e;
            let {onSolved: a} = t
              , i = [{
                title: "0",
                rows: 3,
                cols: 3,
                solution: [5],
                optional: []
            }]
              , [s,u] = (0,
            n.useState)({})
              , c = (0,
            n.useRef)(0);
            (0,
            n.useEffect)( () => {
                u(i[c.current])
            }
            , []);
            let d = "assets/captcha-game/donkey/".concat(null == s ? void 0 : s.title, "/");
            return s.title ? (0,
            o.jsx)(r, {
                solution: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.solution),
                optionalBoxes: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.optional),
                imagePath: d,
                imagePathArray: null == s ? void 0 : s.imagePathArray,
                additionalOnPress: null == s ? void 0 : s.additionalOnPress,
                additionalOnVerify: null == s ? void 0 : s.additionalOnVerify,
                onSolved: a,
                rows: null !== (l = null == s ? void 0 : s.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == s ? void 0 : s.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Pin the tale on the",
                instructionLargeText: "Donkey",
                noBorders: !0,
                spin: !0
            }) : null
        }
        function k(t) {
            var l, e;
            let {onSolved: a} = t
              , [i,s] = (0,
            n.useState)({})
              , u = (0,
            n.useRef)(0)
              , c = (t, l, e, o) => {
                u.current++,
                u.current % 2 == 0 && (e(Array(16).fill(!1)),
                s(e => {
                    let o = {
                        ...e
                    }
                      , n = l.findIndex(t => !0 === t)
                      , a = o.imagePathArray[n];
                    return o.imagePathArray[n] = o.imagePathArray[t],
                    o.imagePathArray[t] = a,
                    o
                }
                ))
            }
              , d = (t, l) => {
                let e = l.imagePathArray;
                for (let t = 0; t < 16; t++)
                    if (e[t] !== "assets/captcha-game/flower/0/image_".concat(t + 1, ".png"))
                        return !1;
                return !0
            }
            ;
            return ((0,
            n.useEffect)( () => {
                let t = [];
                for (let l = 0; l < 16; l++)
                    t.push("assets/captcha-game/flower/0/image_".concat(l + 1, ".png"));
                for (let l = 0; l < 16; l++) {
                    let e = Math.floor(16 * Math.random())
                      , o = t[l];
                    t[l] = t[e],
                    t[e] = o
                }
                let l = {
                    title: "0",
                    rows: 4,
                    cols: 4,
                    solution: [],
                    optional: Array(16).fill(!0),
                    imagePathArray: t,
                    additionalOnPress: c,
                    additionalOnVerify: d
                };
                s(l)
            }
            , []),
            i.title) ? (0,
            o.jsx)(r, {
                solution: h(null == i ? void 0 : i.rows, null == i ? void 0 : i.cols, null == i ? void 0 : i.solution),
                optionalBoxes: h(null == i ? void 0 : i.rows, null == i ? void 0 : i.cols, null == i ? void 0 : i.optional),
                imagePath: "",
                imagePathArray: null == i ? void 0 : i.imagePathArray,
                additionalOnPress: null == i ? void 0 : i.additionalOnPress,
                additionalOnVerify: null == i ? void 0 : i.additionalOnVerify,
                onSolved: a,
                rows: null !== (l = null == i ? void 0 : i.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == i ? void 0 : i.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Oh good, I was getting dizzy",
                instructionLargeText: "Now put me back together"
            }) : null
        }
        function M(t) {
            var l, e;
            let {onSolved: a} = t
              , [i,s] = (0,
            n.useState)({});
            (0,
            n.useRef)(0);
            let u = (0,
            n.useRef)(1)
              , c = (0,
            n.useRef)(!1)
              , d = (0,
            n.useRef)(!1)
              , v = (0,
            n.useRef)([])
              , m = (0,
            n.useRef)([])
              , g = (t, l, e, o) => {
                if (c.current)
                    return;
                e([, , , , ].fill(!1));
                let n = m.current[v.current.length];
                t === n ? (v.current.push(t),
                p(t, 200),
                v.current.length === u.current && (10 === u.current ? (w(),
                y(),
                c.current = !0) : (u.current++,
                v.current = [],
                setTimeout( () => {
                    j(u.current)
                }
                , 700)))) : (d.current = !0,
                T(),
                setTimeout( () => {
                    j(u.current)
                }
                , 700),
                v.current = [])
            }
              , f = (t, l) => c.current
              , p = function(t) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
                s(l => {
                    let e = {
                        ...l
                    };
                    return e.imagePathArray[t] = e.imagePathArray[t].replace("_d", "_l"),
                    e
                }
                ),
                setTimeout( () => {
                    s(l => {
                        let e = {
                            ...l
                        };
                        return e.imagePathArray[t] = e.imagePathArray[t].replace("_l", "_d"),
                        e
                    }
                    )
                }
                , l)
            }
              , w = () => {
                s(t => {
                    let l = {
                        ...t
                    };
                    return l.imagePathArray = l.imagePathArray.map(t => t.replace("_d", "_l")),
                    l
                }
                )
            }
              , x = () => {
                s(t => {
                    let l = {
                        ...t
                    };
                    return l.imagePathArray = l.imagePathArray.map(t => t.replace("_l", "_d")),
                    l
                }
                )
            }
              , y = async () => {
                w(),
                await new Promise(t => setTimeout(t, 200)),
                x(),
                await new Promise(t => setTimeout(t, 200)),
                w(),
                await new Promise(t => setTimeout(t, 200)),
                x(),
                await new Promise(t => setTimeout(t, 200)),
                w()
            }
              , P = () => {
                s(t => {
                    let l = {
                        ...t
                    }
                      , e = ["black", "black", "black", "black"]
                      , o = [];
                    for (let t = 0; t < 4; t++)
                        o.push("assets/captcha-game/simon/0/".concat(e[t], ".png"));
                    return l.imagePathArray = o,
                    l
                }
                )
            }
              , S = () => {
                s(t => {
                    let l = {
                        ...t
                    }
                      , e = ["green_d", "red_d", "yellow_d", "blue_d"]
                      , o = [];
                    for (let t = 0; t < 4; t++)
                        o.push("assets/captcha-game/simon/0/".concat(e[t], ".png"));
                    return l.imagePathArray = o,
                    l
                }
                )
            }
              , T = async () => {
                P(),
                await new Promise(t => setTimeout(t, 200)),
                S(),
                await new Promise(t => setTimeout(t, 200)),
                P(),
                await new Promise(t => setTimeout(t, 200)),
                S(),
                d.current = !1
            }
              , j = async t => {
                for (let l = 0; l < t; l++) {
                    if (d.current)
                        return;
                    await new Promise(t => setTimeout(t, 800)),
                    p(m.current[l])
                }
            }
            ;
            return ((0,
            n.useEffect)( () => {
                let t = ["green_d", "red_d", "yellow_d", "blue_d"]
                  , l = [];
                for (let e = 0; e < 4; e++)
                    l.push("assets/captcha-game/simon/0/".concat(t[e], ".png"));
                let e = {
                    title: "0",
                    rows: 2,
                    cols: 2,
                    solution: [],
                    optional: [, , , , ].fill(!0),
                    imagePathArray: l,
                    additionalOnPress: g,
                    additionalOnVerify: f
                };
                s(e);
                let o = [];
                for (let t = 0; t < 10; t++)
                    o.push(Math.floor(4 * Math.random()));
                m.current = o,
                setTimeout( () => {
                    j(1)
                }
                , 1e3)
            }
            , []),
            i.title) ? (0,
            o.jsx)(r, {
                solution: h(null == i ? void 0 : i.rows, null == i ? void 0 : i.cols, null == i ? void 0 : i.solution),
                optionalBoxes: h(null == i ? void 0 : i.rows, null == i ? void 0 : i.cols, null == i ? void 0 : i.optional),
                imagePath: "",
                imagePathArray: null == i ? void 0 : i.imagePathArray,
                additionalOnPress: null == i ? void 0 : i.additionalOnPress,
                additionalOnVerify: null == i ? void 0 : i.additionalOnVerify,
                onSolved: a,
                rows: null !== (l = null == i ? void 0 : i.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == i ? void 0 : i.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Click the boxes in the order that",
                instructionLargeText: "Simon Says",
                customErrorText: "You're not done yet!"
            }) : null
        }
        let C = "assets/captcha-game/swizzled/0/filled.png";
        function B(t) {
            var l, e;
            let {onSolved: a} = t
              , [i,s] = (0,
            n.useState)({})
              , u = (0,
            n.useRef)([])
              , c = (t, l, e, o) => {
                e(Array(25).fill(!1)),
                v(t)
            }
              , d = (t, l) => {
                let e = [...l]
                  , o = Math.floor(t / 5)
                  , n = t % 5
                  , a = [t, t - 1, t + 1, t - 5, t + 5];
                for (let t = 0; t < a.length; t++) {
                    let l = a[t];
                    if (l < 0 || l > 24)
                        continue;
                    let i = Math.floor(l / 5)
                      , r = l % 5;
                    Math.abs(o - i) + Math.abs(n - r) <= 1 && (e[l] === C ? e[l] = "assets/captcha-game/swizzled/0/empty.png" : e[l] = C)
                }
                return e
            }
              , v = t => {
                s(l => {
                    u.current[t] = !u.current[t],
                    f();
                    let e = {
                        ...l
                    };
                    return e.imagePathArray = d(t, l.imagePathArray),
                    e
                }
                )
            }
              , m = t => {
                for (let l = 0; l < 25; l++)
                    if (t[l] !== C)
                        return !1;
                return !0
            }
              , g = (t, l) => m(l.imagePathArray)
              , f = () => {
                for (let t = 0; t < 5; t++) {
                    let l = "".concat(t, ": ");
                    for (let e = 0; e < 5; e++)
                        l += u.current[5 * t + e] ? "1" : "0";
                    console.log(l)
                }
                console.log("======")
            }
            ;
            return ((0,
            n.useEffect)( () => {
                let t = Array(25).fill(C);
                u.current = Array(25).fill(!1);
                let l = [];
                for (let t = 0; t < 125; t++)
                    l.push(Math.floor(25 * Math.random()));
                for (let e = 0; e < l.length; e++) {
                    let o = l[e];
                    t = d(o, t),
                    u.current[l[e]] = !u.current[l[e]]
                }
                s({
                    title: "0",
                    rows: 5,
                    cols: 5,
                    solution: [],
                    imagePathArray: t,
                    optional: Array(25).fill(!0),
                    additionalOnPress: c,
                    additionalOnVerify: g
                }),
                console.log("1,2,3 => 2"),
                console.log("1,2,4,5 => 3"),
                console.log("1,3,4 => 5"),
                console.log("1,5 => 1,2"),
                console.log("2,3,5 => 1"),
                console.log("2,4 => 1,4"),
                console.log("3,4,5 => 4")
            }
            , []),
            i.title) ? (0,
            o.jsx)(r, {
                solution: h(null == i ? void 0 : i.rows, null == i ? void 0 : i.cols, null == i ? void 0 : i.solution),
                optionalBoxes: h(null == i ? void 0 : i.rows, null == i ? void 0 : i.cols, null == i ? void 0 : i.optional),
                imagePath: "",
                imagePathArray: null == i ? void 0 : i.imagePathArray,
                additionalOnPress: null == i ? void 0 : i.additionalOnPress,
                additionalOnVerify: null == i ? void 0 : i.additionalOnVerify,
                onSolved: a,
                rows: null !== (l = null == i ? void 0 : i.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == i ? void 0 : i.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Light up all the",
                instructionLargeText: "Tiles"
            }) : null
        }
        function N(t) {
            var l, e;
            let {onSolved: a} = t
              , i = [{
                title: "0",
                rows: 1,
                cols: 1,
                solution: [0],
                optional: []
            }]
              , [s,u] = (0,
            n.useState)({})
              , c = (0,
            n.useRef)(0);
            (0,
            n.useEffect)( () => {
                u(i[c.current])
            }
            , []);
            let d = "assets/captcha-game/seed/".concat(null == s ? void 0 : s.title, "/");
            return s.title ? (0,
            o.jsx)(r, {
                solution: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.solution),
                optionalBoxes: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.optional),
                imagePath: d,
                imagePathArray: null == s ? void 0 : s.imagePathArray,
                additionalOnPress: null == s ? void 0 : s.additionalOnPress,
                additionalOnVerify: null == s ? void 0 : s.additionalOnVerify,
                onSolved: a,
                rows: null !== (l = null == s ? void 0 : s.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == s ? void 0 : s.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Take good care of him",
                instructionLargeText: "Meet your new friend"
            }) : null
        }
        function _(t) {
            var l, e;
            let {onSolved: a} = t
              , i = [{
                title: "0",
                rows: 1,
                cols: 1,
                solution: [],
                optional: [0]
            }]
              , [s,u] = (0,
            n.useState)({})
              , c = (0,
            n.useRef)(0);
            (0,
            n.useEffect)( () => {
                u(i[c.current])
            }
            , []);
            let d = "assets/captcha-game/waterPlant/".concat(null == s ? void 0 : s.title, "/");
            return s.title ? (0,
            o.jsx)(r, {
                solution: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.solution),
                optionalBoxes: h(null == s ? void 0 : s.rows, null == s ? void 0 : s.cols, null == s ? void 0 : s.optional),
                imagePath: d,
                imagePathArray: null == s ? void 0 : s.imagePathArray,
                additionalOnPress: null == s ? void 0 : s.additionalOnPress,
                additionalOnVerify: null == s ? void 0 : s.additionalOnVerify,
                onSolved: a,
                rows: null !== (l = null == s ? void 0 : s.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == s ? void 0 : s.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Plantthew has sprouted!",
                instructionLargeText: "Remember to water him!"
            }) : null
        }
        function E(t) {
            var l, e;
            let {onSolved: a} = t;
            Array(16).fill(!0);
            let[i,s] = (0,
            n.useState)({})
              , u = (0,
            n.useRef)({})
              , c = (t, l, e, o) => {
                if (!m(t, o.imagePathArray)) {
                    let o = [...l];
                    o[t] = !1,
                    e(o);
                    return
                }
                u.current[t] = !0,
                s(l => {
                    let e = {
                        ...l
                    };
                    return e.imagePathArray = g(t, e.imagePathArray),
                    e
                }
                )
            }
              , d = () => {
                v(),
                setTimeout( () => {
                    d()
                }
                , Math.floor(2e3 * Math.random()) + 500)
            }
              , v = () => {
                s(t => {
                    let l = {
                        ...t
                    }
                      , e = [...l.imagePathArray]
                      , o = [];
                    for (let t = 0; t < e.length; t++)
                        m(t, e) || o.push(t);
                    let n = o[Math.floor(Math.random() * o.length)]
                      , a = g(n, e);
                    return l.imagePathArray = a,
                    setTimeout( () => {
                        s(t => {
                            let l = {
                                ...t
                            };
                            if (u.current[n])
                                return l;
                            let e = [...l.imagePathArray]
                              , o = f(n, e);
                            return l.imagePathArray = o,
                            l
                        }
                        )
                    }
                    , Math.floor(400 * Math.random()) + 300),
                    l
                }
                )
            }
              , m = (t, l) => "assets/captcha-game/mole/mole.png" === l[t]
              , g = (t, l) => {
                let e = [...l];
                return e[t] = "assets/captcha-game/mole/mole.png",
                e
            }
              , f = (t, l) => {
                let e = [...l];
                return e[t] = "assets/captcha-game/mole/dirt.png",
                e
            }
              , p = (t, l) => {
                let e = Object.keys(u.current).length;
                return 16 === e
            }
            ;
            return ((0,
            n.useEffect)( () => {
                let t = [];
                for (let l = 0; l < 16; l++)
                    t.push("assets/captcha-game/mole/dirt.png");
                let l = [];
                for (let t = 0; t < 16; t++)
                    l.push(t);
                s({
                    title: "0",
                    rows: 4,
                    cols: 4,
                    solution: [],
                    optional: l,
                    imagePathArray: t,
                    additionalOnPress: c,
                    additionalOnVerify: p
                }),
                d()
            }
            , []),
            i.title) ? (0,
            o.jsx)(r, {
                solution: h(null == i ? void 0 : i.rows, null == i ? void 0 : i.cols, null == i ? void 0 : i.solution),
                optionalBoxes: h(null == i ? void 0 : i.rows, null == i ? void 0 : i.cols, null == i ? void 0 : i.optional),
                imagePath: "",
                imagePathArray: null == i ? void 0 : i.imagePathArray,
                additionalOnPress: null == i ? void 0 : i.additionalOnPress,
                additionalOnVerify: null == i ? void 0 : i.additionalOnVerify,
                onSolved: a,
                rows: null !== (l = null == i ? void 0 : i.rows) && void 0 !== l ? l : 0,
                cols: null !== (e = null == i ? void 0 : i.cols) && void 0 !== e ? e : 0,
                instructionSmallText: "Catch the",
                instructionLargeText: "Moles",
                customErrorText: "Select all the moles!"
            }) : null
        }
        var D = e(47743);
        let L = t => t <= 5 ? "\uD83E\uDED8" : t < 12 ? "\uD83C\uDF31" : t < 19 ? "\uD83E\uDEB4" : "\uD83C\uDF3A";
        function V() {
            let[t,l] = (0,
            n.useState)(0)
              , e = (0,
            n.useRef)(t)
              , [r,s] = (0,
            n.useState)(1)
              , [u,c] = (0,
            n.useState)([])
              , d = (0,
            n.useRef)(0)
              , [v,h] = (0,
            n.useState)(!1)
              , m = (0,
            n.useRef)(!1)
              , [g,f] = (0,
            n.useState)(!1)
              , p = (0,
            n.useRef)(!1)
              , w = (0,
            n.useRef)(null)
              , [x,y] = (0,
            n.useState)("Plantthew died from thirst")
              , P = (0,
            n.useRef)({})
              , S = async () => {
                let o = t + 1;
                if (21 === o) {
                    O();
                    return
                }
                l(o),
                e.current = o,
                6 === o && (await new Promise(t => setTimeout(t, 1e3)),
                w.current = setInterval( () => {
                    C()
                }
                , 15e3),
                T()),
                o > 7 && ![10, 11, 21].includes(o) && setTimeout( () => {
                    j()
                }
                , 3e3)
            }
              , T = async () => {
                6 !== e.current || m.current || (j(),
                await new Promise(t => setTimeout(t, 3e3)),
                T())
            }
              , j = () => {
                c(t => {
                    let l = [...t]
                      , e = d.current;
                    return l.push({
                        x: Math.floor(250 * Math.random()),
                        y: Math.floor(400 * Math.random()),
                        id: e
                    }),
                    d.current += 1,
                    setTimeout( () => k(e), 2e3),
                    l
                }
                )
            }
              , A = t => {
                w.current && clearInterval(w.current),
                m.current || (h(!0),
                y(t),
                m.current = !0,
                a.ZP.track("lose", {
                    level: e.current,
                    reason: t
                }))
            }
              , O = () => {
                w.current && clearInterval(w.current),
                p.current || (f(!0),
                p.current = !0,
                a.ZP.track("win"))
            }
              , b = t => {
                32 === t.keyCode && (C(),
                j()),
                65 === t.keyCode && A("Plantthew died from thirst")
            }
              , k = t => {
                c(l => {
                    let e = [...l]
                      , o = e.findIndex(l => l.id === t);
                    return -1 !== o && e.splice(o, 1),
                    e
                }
                )
            }
              , M = t => {
                P.current[t] || (P.current[t] = !0,
                s(t => {
                    let l = t + 1;
                    return l > 10 && A("Plantthew drowned"),
                    l
                }
                ),
                k(t))
            }
              , C = () => {
                s(t => {
                    let l = t - 1;
                    return l < 0 && A("Plantthew ran out of water"),
                    l
                }
                )
            }
            ;
            n.useEffect( () => (document.addEventListener("keydown", b, !1),
            () => {
                document.removeEventListener("keydown", b, !1)
            }
            ), []);
            let B = "y'all this game is impossible\n\nhttps://john.fun/captcha-game";
            return (0,
            o.jsxs)("div", {
                className: "mainContainer",
                style: {
                    paddingTop: 30
                },
                children: [(0,
                o.jsx)(i.E.a, {
                    href: "/",
                    "aria-label": "Go to john.fun home",
                    onClick: () => a.ZP.track("captcha_link_to_main"),
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: .98
                    },
                    style: {
                        position: "absolute",
                        top: 10,
                        left: 12,
                        zIndex: 1e3,
                        display: "inline-block",
                        background: "transparent",
                        border: "none",
                        padding: 0,
                        margin: 0,
                        cursor: "pointer",
                        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 22,
                        lineHeight: 1,
                        color: "#111",
                        textDecoration: "none",
                        textTransform: "lowercase",
                        transformOrigin: "left top",
                        WebkitTapHighlightColor: "transparent"
                    },
                    children: "john.fun"
                }), (0,
                o.jsxs)(D.M, {
                    children: [v && (0,
                    o.jsx)(i.E.div, {
                        className: "fullScreenContainer",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 1
                        },
                        children: (0,
                        o.jsxs)("div", {
                            className: "deathPanel",
                            children: [(0,
                            o.jsx)("div", {
                                className: "loseText",
                                children: "☠️"
                            }), (0,
                            o.jsx)("div", {
                                className: "loseText",
                                children: x
                            }), (0,
                            o.jsxs)("div", {
                                className: "horizontalFlex",
                                children: [(0,
                                o.jsx)("div", {
                                    className: "actionButton",
                                    onClick: () => {
                                        h(!1),
                                        m.current = !1,
                                        s(1),
                                        l(0),
                                        e.current = 0,
                                        c([]),
                                        d.current = 0,
                                        P.current = {},
                                        a.ZP.track("play_again")
                                    }
                                    ,
                                    children: "Play Again"
                                }), (0,
                                o.jsxs)("div", {
                                    className: "actionButton",
                                    onClick: () => {
                                        a.ZP.track("share"),
                                        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(B))
                                    }
                                    ,
                                    children: [(0,
                                    o.jsx)("div", {
                                        className: "twitter-icon"
                                    }), (0,
                                    o.jsx)("div", {
                                        className: "spacer"
                                    }), "Complain"]
                                })]
                            })]
                        })
                    }), g && (0,
                    o.jsx)(i.E.div, {
                        className: "fullScreenContainer",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 1
                        },
                        children: (0,
                        o.jsxs)("div", {
                            className: "winPanel",
                            children: [(0,
                            o.jsx)("div", {
                                className: "winText",
                                children: "You did it! You win!"
                            }), (0,
                            o.jsxs)("div", {
                                className: "horizontalFlex",
                                children: [(0,
                                o.jsx)("div", {
                                    className: "actionButton",
                                    onClick: () => {
                                        h(!1),
                                        m.current = !1,
                                        s(1),
                                        l(0),
                                        e.current = 0,
                                        c([]),
                                        d.current = 0,
                                        P.current = {},
                                        f(!1),
                                        p.current = !1
                                    }
                                    ,
                                    children: "Play Again"
                                }), (0,
                                o.jsxs)("div", {
                                    className: "actionButton",
                                    onClick: () => {
                                        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(B))
                                    }
                                    ,
                                    children: [(0,
                                    o.jsx)("div", {
                                        className: "twitter-icon"
                                    }), (0,
                                    o.jsx)("div", {
                                        className: "spacer"
                                    }), "Brag"]
                                })]
                            })]
                        })
                    })]
                }), (0,
                o.jsxs)("div", {
                    className: "innerContainer",
                    children: [(0,
                    o.jsx)("div", {
                        className: "titleText",
                        children: "The Captcha Game"
                    }), (0,
                    o.jsxs)("div", {
                        className: "largeText",
                        children: ["Level ", t + 1]
                    }), t > 5 && (0,
                    o.jsxs)("div", {
                        className: "waterBar",
                        children: ["\uD83D\uDCA7".repeat(Math.max(r, 0)), " ", L(t)]
                    }), (0,
                    o.jsxs)("div", {
                        style: {
                            position: "relative",
                            width: "100%",
                            height: "100%"
                        },
                        children: [(0,
                        o.jsx)(D.M, {
                            children: (0,
                            o.jsx)(i.E.div, {
                                initial: {
                                    opacity: t > 0 ? 0 : 1
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 1
                                },
                                style: {
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%"
                                },
                                children: R(t, S)
                            }, t)
                        }), (0,
                        o.jsx)(D.M, {
                            children: u.map(t => (0,
                            o.jsx)(i.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 1
                                },
                                className: "wateringCanContainer",
                                onClick: () => {
                                    M(t.id)
                                }
                                ,
                                style: {
                                    position: "absolute",
                                    left: "".concat(t.x, "px"),
                                    top: "".concat(t.y, "px")
                                },
                                children: (0,
                                o.jsx)("img", {
                                    className: "wateringCan",
                                    src: "assets/captcha-game/water.png",
                                    alt: "watering can"
                                })
                            }, t.id))
                        }, "wateringCans")]
                    })]
                })]
            })
        }
        let R = (t, l) => {
            switch (t) {
            case 0:
                return (0,
                o.jsx)(u, {
                    onSolved: l
                }, "level".concat(t));
            case 1:
                return (0,
                o.jsx)(s, {
                    onSolved: l
                }, "level".concat(t));
            case 2:
                return (0,
                o.jsx)(c, {
                    onSolved: l
                }, "level".concat(t));
            case 3:
                return (0,
                o.jsx)(d, {
                    onSolved: l
                }, "level".concat(t));
            case 4:
                return (0,
                o.jsx)(v, {
                    onSolved: l
                }, "level".concat(t));
            case 5:
                return (0,
                o.jsx)(N, {
                    onSolved: l
                }, "level".concat(t));
            case 6:
                return (0,
                o.jsx)(_, {
                    onSolved: l
                }, "level".concat(t));
            case 7:
                return (0,
                o.jsx)(T, {
                    onSolved: l
                }, "level".concat(t));
            case 8:
                return (0,
                o.jsx)(E, {
                    onSolved: l
                }, "level".concat(t));
            case 9:
                return (0,
                o.jsx)(j, {
                    onSolved: l
                }, "level".concat(t));
            case 10:
                return (0,
                o.jsx)(A, {
                    onSolved: l
                }, "level".concat(t));
            case 11:
                return (0,
                o.jsx)(O, {
                    onSolved: l
                }, "level".concat(t));
            case 12:
                return (0,
                o.jsx)(w, {
                    onSolved: l
                }, "level".concat(t));
            case 13:
                return (0,
                o.jsx)(m, {
                    onSolved: l
                }, "level".concat(t));
            case 14:
                return (0,
                o.jsx)(P, {
                    onSolved: l
                }, "level".concat(t));
            case 15:
                return (0,
                o.jsx)(B, {
                    onSolved: l
                }, "level".concat(t));
            case 16:
                return (0,
                o.jsx)(f, {
                    onSolved: l
                }, "level".concat(t));
            case 17:
                return (0,
                o.jsx)(M, {
                    onSolved: l
                }, "level".concat(t));
            case 18:
                return (0,
                o.jsx)(g, {
                    onSolved: l
                }, "level".concat(t));
            case 19:
                return (0,
                o.jsx)(b, {
                    onSolved: l
                }, "level".concat(t));
            case 20:
                return (0,
                o.jsx)(k, {
                    onSolved: l
                }, "level".concat(t))
            }
            return null
        }
    },
    89134: function() {},
    58379: function() {}
}, function(t) {
    t.O(0, [2845, 3274, 2704, 8123, 1744], function() {
        return t(t.s = 13571)
    }),
    _N_E = t.O()
}
]);
