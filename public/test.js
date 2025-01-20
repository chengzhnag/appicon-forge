;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const s of o.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
function yt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var N = { exports: {} },
  O = {}
const bt = React
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var q
function vt() {
  if (q) return O
  q = 1
  var e = bt,
    t = Symbol.for('react.element'),
    n = Symbol.for('react.fragment'),
    r = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 }
  function s(c, a, u) {
    var l,
      f = {},
      p = null,
      C = null
    u !== void 0 && (p = '' + u),
      a.key !== void 0 && (p = '' + a.key),
      a.ref !== void 0 && (C = a.ref)
    for (l in a) r.call(a, l) && !o.hasOwnProperty(l) && (f[l] = a[l])
    if (c && c.defaultProps)
      for (l in ((a = c.defaultProps), a)) f[l] === void 0 && (f[l] = a[l])
    return { $$typeof: t, type: c, key: p, ref: C, props: f, _owner: i.current }
  }
  return (O.Fragment = n), (O.jsx = s), (O.jsxs = s), O
}
var U
function xt() {
  return U || ((U = 1), (N.exports = vt())), N.exports
}
var g = xt(),
  it = React.createContext({})
function P() {
  return (
    (P = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    P.apply(null, arguments)
  )
}
function wt(e) {
  if (Array.isArray(e)) return e
}
function Ct(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (n != null) {
    var r,
      i,
      o,
      s,
      c = [],
      a = !0,
      u = !1
    try {
      if (((o = (n = n.call(e)).next), t !== 0))
        for (
          ;
          !(a = (r = o.call(n)).done) && (c.push(r.value), c.length !== t);
          a = !0
        );
    } catch (l) {
      ;(u = !0), (i = l)
    } finally {
      try {
        if (!a && n.return != null && ((s = n.return()), Object(s) !== s))
          return
      } finally {
        if (u) throw i
      }
    }
    return c
  }
}
function V(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
  return r
}
function _t(e, t) {
  if (e) {
    if (typeof e == 'string') return V(e, t)
    var n = {}.toString.call(e).slice(8, -1)
    return (
      n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set'
        ? Array.from(e)
        : n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? V(e, t)
          : void 0
    )
  }
}
function St() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function ot(e, t) {
  return wt(e) || Ct(e, t) || _t(e, t) || St()
}
function _(e) {
  '@babel/helpers - typeof'
  return (
    (_ =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    _(e)
  )
}
function Rt(e, t) {
  if (_(e) != 'object' || !e) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (_(r) != 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function Ot(e) {
  var t = Rt(e, 'string')
  return _(t) == 'symbol' ? t : t + ''
}
function y(e, t, n) {
  return (
    (t = Ot(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function jt(e, t) {
  if (e == null) return {}
  var n = {}
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue
      n[r] = e[r]
    }
  return n
}
function st(e, t) {
  if (e == null) return {}
  var n,
    r,
    i = jt(e, t)
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    for (r = 0; r < o.length; r++)
      (n = o[r]),
        t.includes(n) || ({}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]))
  }
  return i
}
var k = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var W
function Tt() {
  return (
    W ||
      ((W = 1),
      (function (e) {
        ;(function () {
          var t = {}.hasOwnProperty
          function n() {
            for (var o = '', s = 0; s < arguments.length; s++) {
              var c = arguments[s]
              c && (o = i(o, r(c)))
            }
            return o
          }
          function r(o) {
            if (typeof o == 'string' || typeof o == 'number') return o
            if (typeof o != 'object') return ''
            if (Array.isArray(o)) return n.apply(null, o)
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes('[native code]')
            )
              return o.toString()
            var s = ''
            for (var c in o) t.call(o, c) && o[c] && (s = i(s, c))
            return s
          }
          function i(o, s) {
            return s ? (o ? o + ' ' + s : o + s) : o
          }
          e.exports
            ? ((n.default = n), (e.exports = n))
            : (window.classNames = n)
        })()
      })(k)),
    k.exports
  )
}
var Mt = Tt()
const Pt = yt(Mt),
  m = Math.round
function A(e, t) {
  const n =
      e
        .replace(/^[^(]*\((.*)/, '$1')
        .replace(/\).*/, '')
        .match(/\d*\.?\d+%?/g) || [],
    r = n.map((i) => parseFloat(i))
  for (let i = 0; i < 3; i += 1) r[i] = t(r[i] || 0, n[i] || '', i)
  return n[3] ? (r[3] = n[3].includes('%') ? r[3] / 100 : r[3]) : (r[3] = 1), r
}
const J = (e, t, n) => (n === 0 ? e : e / 100)
function j(e, t) {
  const n = t || 255
  return e > n ? n : e < 0 ? 0 : e
}
class S {
  constructor(t) {
    y(this, 'isValid', !0),
      y(this, 'r', 0),
      y(this, 'g', 0),
      y(this, 'b', 0),
      y(this, 'a', 1),
      y(this, '_h', void 0),
      y(this, '_s', void 0),
      y(this, '_l', void 0),
      y(this, '_v', void 0),
      y(this, '_max', void 0),
      y(this, '_min', void 0),
      y(this, '_brightness', void 0)
    function n(i) {
      return i[0] in t && i[1] in t && i[2] in t
    }
    if (t)
      if (typeof t == 'string') {
        let o = function (s) {
          return i.startsWith(s)
        }
        var r = o
        const i = t.trim()
        ;/^#?[A-F\d]{3,8}$/i.test(i)
          ? this.fromHexString(i)
          : o('rgb')
            ? this.fromRgbString(i)
            : o('hsl')
              ? this.fromHslString(i)
              : (o('hsv') || o('hsb')) && this.fromHsvString(i)
      } else if (t instanceof S)
        (this.r = t.r),
          (this.g = t.g),
          (this.b = t.b),
          (this.a = t.a),
          (this._h = t._h),
          (this._s = t._s),
          (this._l = t._l),
          (this._v = t._v)
      else if (n('rgb'))
        (this.r = j(t.r)),
          (this.g = j(t.g)),
          (this.b = j(t.b)),
          (this.a = typeof t.a == 'number' ? j(t.a, 1) : 1)
      else if (n('hsl')) this.fromHsl(t)
      else if (n('hsv')) this.fromHsv(t)
      else
        throw new Error(
          '@ant-design/fast-color: unsupported input ' + JSON.stringify(t),
        )
  }
  setR(t) {
    return this._sc('r', t)
  }
  setG(t) {
    return this._sc('g', t)
  }
  setB(t) {
    return this._sc('b', t)
  }
  setA(t) {
    return this._sc('a', t, 1)
  }
  setHue(t) {
    const n = this.toHsv()
    return (n.h = t), this._c(n)
  }
  getLuminance() {
    function t(o) {
      const s = o / 255
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
    }
    const n = t(this.r),
      r = t(this.g),
      i = t(this.b)
    return 0.2126 * n + 0.7152 * r + 0.0722 * i
  }
  getHue() {
    if (typeof this._h > 'u') {
      const t = this.getMax() - this.getMin()
      t === 0
        ? (this._h = 0)
        : (this._h = m(
            60 *
              (this.r === this.getMax()
                ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0)
                : this.g === this.getMax()
                  ? (this.b - this.r) / t + 2
                  : (this.r - this.g) / t + 4),
          ))
    }
    return this._h
  }
  getSaturation() {
    if (typeof this._s > 'u') {
      const t = this.getMax() - this.getMin()
      t === 0 ? (this._s = 0) : (this._s = t / this.getMax())
    }
    return this._s
  }
  getLightness() {
    return (
      typeof this._l > 'u' && (this._l = (this.getMax() + this.getMin()) / 510),
      this._l
    )
  }
  getValue() {
    return typeof this._v > 'u' && (this._v = this.getMax() / 255), this._v
  }
  getBrightness() {
    return (
      typeof this._brightness > 'u' &&
        (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3),
      this._brightness
    )
  }
  darken(t = 10) {
    const n = this.getHue(),
      r = this.getSaturation()
    let i = this.getLightness() - t / 100
    return i < 0 && (i = 0), this._c({ h: n, s: r, l: i, a: this.a })
  }
  lighten(t = 10) {
    const n = this.getHue(),
      r = this.getSaturation()
    let i = this.getLightness() + t / 100
    return i > 1 && (i = 1), this._c({ h: n, s: r, l: i, a: this.a })
  }
  mix(t, n = 50) {
    const r = this._c(t),
      i = n / 100,
      o = (c) => (r[c] - this[c]) * i + this[c],
      s = { r: m(o('r')), g: m(o('g')), b: m(o('b')), a: m(o('a') * 100) / 100 }
    return this._c(s)
  }
  tint(t = 10) {
    return this.mix({ r: 255, g: 255, b: 255, a: 1 }, t)
  }
  shade(t = 10) {
    return this.mix({ r: 0, g: 0, b: 0, a: 1 }, t)
  }
  onBackground(t) {
    const n = this._c(t),
      r = this.a + n.a * (1 - this.a),
      i = (o) => m((this[o] * this.a + n[o] * n.a * (1 - this.a)) / r)
    return this._c({ r: i('r'), g: i('g'), b: i('b'), a: r })
  }
  isDark() {
    return this.getBrightness() < 128
  }
  isLight() {
    return this.getBrightness() >= 128
  }
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a
  }
  clone() {
    return this._c(this)
  }
  toHexString() {
    let t = '#'
    const n = (this.r || 0).toString(16)
    t += n.length === 2 ? n : '0' + n
    const r = (this.g || 0).toString(16)
    t += r.length === 2 ? r : '0' + r
    const i = (this.b || 0).toString(16)
    if (
      ((t += i.length === 2 ? i : '0' + i),
      typeof this.a == 'number' && this.a >= 0 && this.a < 1)
    ) {
      const o = m(this.a * 255).toString(16)
      t += o.length === 2 ? o : '0' + o
    }
    return t
  }
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a,
    }
  }
  toHslString() {
    const t = this.getHue(),
      n = m(this.getSaturation() * 100),
      r = m(this.getLightness() * 100)
    return this.a !== 1
      ? `hsla(${t},${n}%,${r}%,${this.a})`
      : `hsl(${t},${n}%,${r}%)`
  }
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a,
    }
  }
  toRgb() {
    return { r: this.r, g: this.g, b: this.b, a: this.a }
  }
  toRgbString() {
    return this.a !== 1
      ? `rgba(${this.r},${this.g},${this.b},${this.a})`
      : `rgb(${this.r},${this.g},${this.b})`
  }
  toString() {
    return this.toRgbString()
  }
  _sc(t, n, r) {
    const i = this.clone()
    return (i[t] = j(n, r)), i
  }
  _c(t) {
    return new this.constructor(t)
  }
  getMax() {
    return (
      typeof this._max > 'u' && (this._max = Math.max(this.r, this.g, this.b)),
      this._max
    )
  }
  getMin() {
    return (
      typeof this._min > 'u' && (this._min = Math.min(this.r, this.g, this.b)),
      this._min
    )
  }
  fromHexString(t) {
    const n = t.replace('#', '')
    function r(i, o) {
      return parseInt(n[i] + n[o || i], 16)
    }
    n.length < 6
      ? ((this.r = r(0)),
        (this.g = r(1)),
        (this.b = r(2)),
        (this.a = n[3] ? r(3) / 255 : 1))
      : ((this.r = r(0, 1)),
        (this.g = r(2, 3)),
        (this.b = r(4, 5)),
        (this.a = n[6] ? r(6, 7) / 255 : 1))
  }
  fromHsl({ h: t, s: n, l: r, a: i }) {
    if (
      ((this._h = t % 360),
      (this._s = n),
      (this._l = r),
      (this.a = typeof i == 'number' ? i : 1),
      n <= 0)
    ) {
      const p = m(r * 255)
      ;(this.r = p), (this.g = p), (this.b = p)
    }
    let o = 0,
      s = 0,
      c = 0
    const a = t / 60,
      u = (1 - Math.abs(2 * r - 1)) * n,
      l = u * (1 - Math.abs((a % 2) - 1))
    a >= 0 && a < 1
      ? ((o = u), (s = l))
      : a >= 1 && a < 2
        ? ((o = l), (s = u))
        : a >= 2 && a < 3
          ? ((s = u), (c = l))
          : a >= 3 && a < 4
            ? ((s = l), (c = u))
            : a >= 4 && a < 5
              ? ((o = l), (c = u))
              : a >= 5 && a < 6 && ((o = u), (c = l))
    const f = r - u / 2
    ;(this.r = m((o + f) * 255)),
      (this.g = m((s + f) * 255)),
      (this.b = m((c + f) * 255))
  }
  fromHsv({ h: t, s: n, v: r, a: i }) {
    ;(this._h = t % 360),
      (this._s = n),
      (this._v = r),
      (this.a = typeof i == 'number' ? i : 1)
    const o = m(r * 255)
    if (((this.r = o), (this.g = o), (this.b = o), n <= 0)) return
    const s = t / 60,
      c = Math.floor(s),
      a = s - c,
      u = m(r * (1 - n) * 255),
      l = m(r * (1 - n * a) * 255),
      f = m(r * (1 - n * (1 - a)) * 255)
    switch (c) {
      case 0:
        ;(this.g = f), (this.b = u)
        break
      case 1:
        ;(this.r = l), (this.b = u)
        break
      case 2:
        ;(this.r = u), (this.b = f)
        break
      case 3:
        ;(this.r = u), (this.g = l)
        break
      case 4:
        ;(this.r = f), (this.g = u)
        break
      case 5:
      default:
        ;(this.g = u), (this.b = l)
        break
    }
  }
  fromHsvString(t) {
    const n = A(t, J)
    this.fromHsv({ h: n[0], s: n[1], v: n[2], a: n[3] })
  }
  fromHslString(t) {
    const n = A(t, J)
    this.fromHsl({ h: n[0], s: n[1], l: n[2], a: n[3] })
  }
  fromRgbString(t) {
    const n = A(t, (r, i) => (i.includes('%') ? m((r / 100) * 255) : r))
    ;(this.r = n[0]), (this.g = n[1]), (this.b = n[2]), (this.a = n[3])
  }
}
var M = 2,
  K = 0.16,
  Ht = 0.05,
  Et = 0.05,
  Lt = 0.15,
  at = 5,
  ct = 4,
  Nt = [
    { index: 7, amount: 15 },
    { index: 6, amount: 25 },
    { index: 5, amount: 30 },
    { index: 5, amount: 45 },
    { index: 5, amount: 65 },
    { index: 5, amount: 85 },
    { index: 4, amount: 90 },
    { index: 3, amount: 95 },
    { index: 2, amount: 97 },
    { index: 1, amount: 98 },
  ]
function Q(e, t, n) {
  var r
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - M * t : Math.round(e.h) + M * t)
      : (r = n ? Math.round(e.h) + M * t : Math.round(e.h) - M * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  )
}
function Y(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s
  var r
  return (
    n ? (r = e.s - K * t) : t === ct ? (r = e.s + K) : (r = e.s + Ht * t),
    r > 1 && (r = 1),
    n && t === at && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Math.round(r * 100) / 100
  )
}
function G(e, t, n) {
  var r
  return (
    n ? (r = e.v + Et * t) : (r = e.v - Lt * t),
    (r = Math.max(0, Math.min(1, r))),
    Math.round(r * 100) / 100
  )
}
function kt(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = new S(e),
      i = r.toHsv(),
      o = at;
    o > 0;
    o -= 1
  ) {
    var s = new S({ h: Q(i, o, !0), s: Y(i, o, !0), v: G(i, o, !0) })
    n.push(s)
  }
  n.push(r)
  for (var c = 1; c <= ct; c += 1) {
    var a = new S({ h: Q(i, c), s: Y(i, c), v: G(i, c) })
    n.push(a)
  }
  return t.theme === 'dark'
    ? Nt.map(function (u) {
        var l = u.index,
          f = u.amount
        return new S(t.backgroundColor || '#141414').mix(n[l], f).toHexString()
      })
    : n.map(function (u) {
        return u.toHexString()
      })
}
var I = [
  '#e6f4ff',
  '#bae0ff',
  '#91caff',
  '#69b1ff',
  '#4096ff',
  '#1677ff',
  '#0958d9',
  '#003eb3',
  '#002c8c',
  '#001d66',
]
I.primary = I[5]
function X(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? X(Object(n), !0).forEach(function (r) {
          y(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : X(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return e
}
function At() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  )
}
function It(e, t) {
  if (!e) return !1
  if (e.contains) return e.contains(t)
  for (var n = t; n; ) {
    if (n === e) return !0
    n = n.parentNode
  }
  return !1
}
var Z = 'data-rc-order',
  tt = 'data-rc-priority',
  $t = 'rc-util-key',
  $ = new Map()
function ut() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : $t
}
function F(e) {
  if (e.attachTo) return e.attachTo
  var t = document.querySelector('head')
  return t || document.body
}
function Dt(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append'
}
function z(e) {
  return Array.from(($.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE'
  })
}
function lt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  if (!At()) return null
  var n = t.csp,
    r = t.prepend,
    i = t.priority,
    o = i === void 0 ? 0 : i,
    s = Dt(r),
    c = s === 'prependQueue',
    a = document.createElement('style')
  a.setAttribute(Z, s),
    c && o && a.setAttribute(tt, ''.concat(o)),
    n != null && n.nonce && (a.nonce = n == null ? void 0 : n.nonce),
    (a.innerHTML = e)
  var u = F(t),
    l = u.firstChild
  if (r) {
    if (c) {
      var f = (t.styles || z(u)).filter(function (p) {
        if (!['prepend', 'prependQueue'].includes(p.getAttribute(Z))) return !1
        var C = Number(p.getAttribute(tt) || 0)
        return o >= C
      })
      if (f.length) return u.insertBefore(a, f[f.length - 1].nextSibling), a
    }
    u.insertBefore(a, l)
  } else u.appendChild(a)
  return a
}
function Bt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = F(t)
  return (t.styles || z(n)).find(function (r) {
    return r.getAttribute(ut(t)) === e
  })
}
function Ft(e, t) {
  var n = $.get(e)
  if (!n || !It(document, n)) {
    var r = lt('', t),
      i = r.parentNode
    $.set(e, i), e.removeChild(r)
  }
}
function zt(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = F(n),
    i = z(r),
    o = w(w({}, n), {}, { styles: i })
  Ft(r, o)
  var s = Bt(t, o)
  if (s) {
    var c, a
    if (
      (c = o.csp) !== null &&
      c !== void 0 &&
      c.nonce &&
      s.nonce !== ((a = o.csp) === null || a === void 0 ? void 0 : a.nonce)
    ) {
      var u
      s.nonce = (u = o.csp) === null || u === void 0 ? void 0 : u.nonce
    }
    return s.innerHTML !== e && (s.innerHTML = e), s
  }
  var l = lt(e, o)
  return l.setAttribute(ut(o), t), l
}
function ft(e) {
  var t
  return e == null || (t = e.getRootNode) === null || t === void 0
    ? void 0
    : t.call(e)
}
function qt(e) {
  return ft(e) instanceof ShadowRoot
}
function Ut(e) {
  return qt(e) ? ft(e) : null
}
var D = {},
  Vt = function (t) {}
function Wt(e, t) {}
function Jt(e, t) {}
function Kt() {
  D = {}
}
function ht(e, t, n) {
  !t && !D[n] && (e(!1, n), (D[n] = !0))
}
function H(e, t) {
  ht(Wt, e, t)
}
function Qt(e, t) {
  ht(Jt, e, t)
}
H.preMessage = Vt
H.resetWarned = Kt
H.noteOnce = Qt
function Yt(e) {
  return e.replace(/-(.)/g, function (t, n) {
    return n.toUpperCase()
  })
}
function Gt(e, t) {
  H(e, '[@ant-design/icons] '.concat(t))
}
function et(e) {
  return (
    _(e) === 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (_(e.icon) === 'object' || typeof e.icon == 'function')
  )
}
function nt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n]
    switch (n) {
      case 'class':
        ;(t.className = r), delete t.class
        break
      default:
        delete t[n], (t[Yt(n)] = r)
    }
    return t
  }, {})
}
function B(e, t, n) {
  return n
    ? React.createElement(
        e.tag,
        w(w({ key: t }, nt(e.attrs)), n),
        (e.children || []).map(function (r, i) {
          return B(r, ''.concat(t, '-').concat(e.tag, '-').concat(i))
        }),
      )
    : React.createElement(
        e.tag,
        w({ key: t }, nt(e.attrs)),
        (e.children || []).map(function (r, i) {
          return B(r, ''.concat(t, '-').concat(e.tag, '-').concat(i))
        }),
      )
}
function dt(e) {
  return kt(e)[0]
}
function gt(e) {
  return e ? (Array.isArray(e) ? e : [e]) : []
}
var Xt = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  Zt = function (t) {
    var n = React.useContext(it),
      r = n.csp,
      i = n.prefixCls,
      o = Xt
    i && (o = o.replace(/anticon/g, i)),
      React.useEffect(function () {
        var s = t.current,
          c = Ut(s)
        zt(o, '@ant-design-icons', { prepend: !0, csp: r, attachTo: c })
      }, [])
  },
  te = [
    'icon',
    'className',
    'onClick',
    'style',
    'primaryColor',
    'secondaryColor',
  ],
  T = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 }
function ee(e) {
  var t = e.primaryColor,
    n = e.secondaryColor
  ;(T.primaryColor = t), (T.secondaryColor = n || dt(t)), (T.calculated = !!n)
}
function ne() {
  return w({}, T)
}
var R = function (t) {
  var n = t.icon,
    r = t.className,
    i = t.onClick,
    o = t.style,
    s = t.primaryColor,
    c = t.secondaryColor,
    a = st(t, te),
    u = React.useRef(),
    l = T
  if (
    (s && (l = { primaryColor: s, secondaryColor: c || dt(s) }),
    Zt(u),
    Gt(et(n), 'icon should be icon definiton, but got '.concat(n)),
    !et(n))
  )
    return null
  var f = n
  return (
    f &&
      typeof f.icon == 'function' &&
      (f = w(w({}, f), {}, { icon: f.icon(l.primaryColor, l.secondaryColor) })),
    B(
      f.icon,
      'svg-'.concat(f.name),
      w(
        w(
          {
            className: r,
            onClick: i,
            style: o,
            'data-icon': f.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          a,
        ),
        {},
        { ref: u },
      ),
    )
  )
}
R.displayName = 'IconReact'
R.getTwoToneColors = ne
R.setTwoToneColors = ee
function mt(e) {
  var t = gt(e),
    n = ot(t, 2),
    r = n[0],
    i = n[1]
  return R.setTwoToneColors({ primaryColor: r, secondaryColor: i })
}
function re() {
  var e = R.getTwoToneColors()
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
}
var ie = [
  'className',
  'icon',
  'spin',
  'rotate',
  'tabIndex',
  'onClick',
  'twoToneColor',
]
mt(I.primary)
var E = React.forwardRef(function (e, t) {
  var n = e.className,
    r = e.icon,
    i = e.spin,
    o = e.rotate,
    s = e.tabIndex,
    c = e.onClick,
    a = e.twoToneColor,
    u = st(e, ie),
    l = React.useContext(it),
    f = l.prefixCls,
    p = f === void 0 ? 'anticon' : f,
    C = l.rootClassName,
    h = Pt(
      C,
      p,
      y(
        y({}, ''.concat(p, '-').concat(r.name), !!r.name),
        ''.concat(p, '-spin'),
        !!i || r.name === 'loading',
      ),
      n,
    ),
    d = s
  d === void 0 && c && (d = -1)
  var b = o
      ? {
          msTransform: 'rotate('.concat(o, 'deg)'),
          transform: 'rotate('.concat(o, 'deg)'),
        }
      : void 0,
    x = gt(a),
    v = ot(x, 2),
    L = v[0],
    pt = v[1]
  return React.createElement(
    'span',
    P({ role: 'img', 'aria-label': r.name }, u, {
      ref: t,
      tabIndex: d,
      onClick: c,
      className: h,
    }),
    React.createElement(R, {
      icon: r,
      primaryColor: L,
      secondaryColor: pt,
      style: b,
    }),
  )
})
E.displayName = 'AntdIcon'
E.getTwoToneColor = re
E.setTwoToneColor = mt
var oe = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z',
          },
        },
      ],
    },
    name: 'inbox',
    theme: 'outlined',
  },
  se = function (t, n) {
    return React.createElement(E, P({}, t, { ref: n, icon: oe }))
  },
  ae = React.forwardRef(se)
const { Dragger: ce } = antd.Upload,
  { Title: ue, Paragraph: rt, Text: le, Link: fe } = antd.Typography
function he({ navigate: e }) {
  const [t, n] = React.useState([]),
    [r, i] = React.useState(!1),
    [o, s] = React.useState('上传中...'),
    c = {
      name: 'file',
      multiple: !0,
      withCredentials: !0,
      listType: 'picture',
      fileList: t,
      beforeUpload: (h) => !1,
      onChange(h) {
        n(h.fileList || [])
      },
      showUploadList: {
        extra: (h) => {
          var d, b
          return h.status === 'done'
            ? g.jsx(le, {
                copyable: {
                  text:
                    ((d = h == null ? void 0 : h.response) == null
                      ? void 0
                      : d.url) ||
                    ((b = h == null ? void 0 : h.response) == null
                      ? void 0
                      : b.data) ||
                    '暂无链接',
                },
                style: { marginLeft: 8 },
              })
            : null
        },
      },
    }
  async function a(h, d) {
    try {
      const b = new FormData()
      b.set('file', h, h.name)
      const x = await fetch('/upload', { method: 'POST', body: b }),
        v = await u(x)
      console.log('responseData:', v),
        v.error
          ? (f(d, 'error'),
            antd.message.error(
              `第${d + 1}个文件上传失败！失败原因：${v.error}`,
            ))
          : (f(d, 'done'), antd.message.success(`第${d + 1}个文件上传成功！`))
    } catch {
      f(d, 'error'), antd.message.error(`第${d + 1}个文件上传失败！`)
    }
  }
  async function u(h) {
    return h.ok ? await h.json() : { error: (await h.json()).error }
  }
  async function l() {
    console.log('handleAllUpload', t)
    const h = t.map((d) => d.originFileObj)
    i(!0)
    for (let d = 0; d < h.length; d++)
      s(`正在上传第${d + 1}个文件...`), await a(h[d], d)
    i(!1)
  }
  function f(h, d) {
    n((b) => {
      const x = [...b]
      return x[h] && (x[h] = { ...x[h], status: d }), x
    })
  }
  function p() {
    n([])
  }
  const C = (h) => {
    const d = (h.clipboardData || h.originalEvent.clipboardData).items
    for (const b of d)
      if (b.type.indexOf('image') !== -1) {
        const x = b.getAsFile(),
          v = new File([x], `pasted-image-${Date.now()}.png`, { type: x.type })
        n((L) => [
          ...L,
          {
            uid: Date.now().toString(),
            name: v.name,
            type: v.type,
            size: v.size,
            lastModified: v.lastModified,
            originFileObj: v,
          },
        ])
        break
      }
  }
  return (
    React.useEffect(
      () => (
        window.addEventListener('paste', C),
        () => window.removeEventListener('paste', C)
      ),
      [],
    ),
    g.jsxs('div', {
      style: { minHeight: '100vh', padding: '16px' },
      children: [
        g.jsx(ue, { children: 'Telegraph文件床' }),
        g.jsxs(rt, {
          children: [
            '基于 Cloudflare Worker 和 Telegram 的图床/视频床/文件床，轻松实现无服务器部署！前往',
            g.jsx(fe, { onClick: () => e('/list'), children: '列表' }),
            ' 页面查看已上传的文件。',
          ],
        }),
        g.jsx(rt, {
          children:
            '生活中无关紧要的一些文件，存之无用，弃之可惜，通通使用这个上传，永久保存在 Telegraph 上。',
        }),
        t.length
          ? g.jsxs(antd.Space, {
              style: { marginBottom: 16 },
              children: [
                g.jsx(antd.Button, {
                  type: 'primary',
                  onClick: () => l(),
                  children: '上传',
                }),
                g.jsx(antd.Button, {
                  type: 'primary',
                  onClick: () => p(),
                  danger: !0,
                  children: '重置',
                }),
              ],
            })
          : null,
        g.jsxs(ce, {
          ...c,
          children: [
            g.jsx('p', {
              className: 'ant-upload-drag-icon',
              children: g.jsx(ae, {}),
            }),
            g.jsx('p', {
              className: 'ant-upload-text',
              children: '拖拽 / 粘贴 / 点击此处选择文件',
            }),
            g.jsx('p', {
              className: 'ant-upload-hint',
              children: '支持单次或批量上传，严禁上传被禁止的文件。',
            }),
          ],
        }),
        g.jsx(antd.Spin, { spinning: r, tip: o, fullscreen: !0 }),
      ],
    })
  )
}
function de() {
  return g.jsx('h1', { children: 'List Page' })
}
function ge() {
  const [e, t] = React.useState(window.location.pathname.slice(1) || 'home')
  React.useEffect(() => {
    const r = () => {
      t(window.location.pathname.slice(1) || 'home')
    }
    return (
      window.addEventListener('popstate', r),
      () => window.removeEventListener('popstate', r)
    )
  }, [])
  const n = (r) => {
    window.history.pushState({}, '', r), t(r.slice(1) || 'home')
  }
  return g.jsxs('div', {
    children: [
      e === 'home' && g.jsx(he, { navigate: n }),
      e === 'list' && g.jsx(de, {}),
    ],
  })
}
window.React = React
window.ReactDOM = ReactDOM
ReactDOM.createRoot(document.getElementById('root')).render(
  g.jsx(React.StrictMode, { children: g.jsx(ge, {}) }),
)
