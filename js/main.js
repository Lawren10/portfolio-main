// jquery min start

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    E = C.document,
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.concat,
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    c = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0,
    };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.4.1",
    k = function (e, t) {
      return new k.fn.init(e, t);
    },
    p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function d(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (k.fn = k.prototype =
    {
      jquery: f,
      constructor: k,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = k.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return k.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          k.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (k.extend = k.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || k.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = k.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    k.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t) {
        b(e, {
          nonce: t && t.nonce,
        });
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (d(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(p, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (d(Object(e))
              ? k.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (d(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g.apply([], a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var h = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      k = "sizzle" + 1 * new Date(),
      m = n.document,
      S = 0,
      r = 0,
      p = ue(),
      x = ue(),
      N = ue(),
      A = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      $ =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      F = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp($),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ne = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        {
          dir: "parentNode",
          next: "legend",
        }
      );
    try {
      H.apply((t = O.call(m.childNodes)), m.childNodes),
        t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (
        !r &&
        ((e ? e.ownerDocument || e : m) !== C && T(e), (e = e || C), E)
      ) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !A[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && U.test(t))) {
            (s = e.getAttribute("id"))
              ? (s = s.replace(re, ie))
              : e.setAttribute("id", (s = k)),
              (o = (l = h(t)).length);
            while (o--) l[o] = "#" + s + " " + xe(l[o]);
            (c = l.join(",")), (f = (ee.test(t) && ye(e.parentNode)) || e);
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[k] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : m;
        return (
          r !== C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            m !== C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = k),
                !C.getElementsByName || !C.getElementsByName(k).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  k +
                  "'></a><select id='" +
                  k +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + k + "+*").length ||
                    v.push(".#.+[+~]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", $);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === C || (e.ownerDocument === m && y(m, e))
                        ? -1
                        : t === C || (t.ownerDocument === m && y(m, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === C
                      ? -1
                      : t === C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] === m
                    ? -1
                    : s[r] === m
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== C && T(e),
        d.matchesSelector &&
          E &&
          !A[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          A(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0,
          },
          " ": {
            dir: "parentNode",
          },
          "+": {
            dir: "previousSibling",
            first: !0,
          },
          "~": {
            dir: "previousSibling",
          },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = p[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                p(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [S, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [S, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[k]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
            return s[k]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0,
    }))
      b.pseudos[e] = de(e);
    for (e in {
      submit: !0,
      reset: !0,
    })
      b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [S, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[k] || (e[k] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === S && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[k] && (v = Ce(v)),
        y && !y[k] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e.slice(0, s - 1).concat({
                    value: " " === e[s - 2].type ? "*" : "",
                  })
                ).replace(B, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({
                value: n,
                type: r[0].replace(B, " "),
              }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({
                  value: n,
                  type: o,
                  matches: r,
                }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = N[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
            (a = N(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (S += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t === C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument === C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (S = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((S = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = k.split("").sort(D).join("") === k),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (k.find = h),
    (k.expr = h.selectors),
    (k.expr[":"] = k.expr.pseudos),
    (k.uniqueSort = k.unique = h.uniqueSort),
    (k.text = h.getText),
    (k.isXMLDoc = h.isXML),
    (k.contains = h.contains),
    (k.escapeSelector = h.escape);
  var T = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && k(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    N = k.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? k.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? k.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? k.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : k.filter(n, e, r);
  }
  (k.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? k.find.matchesSelector(r, e)
          ? [r]
          : []
        : k.find.matches(
            e,
            k.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    k.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            k(e).filter(function () {
              for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
        return 1 < r ? k.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1)
          .length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || q), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : L.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof k ? t[0] : t),
          k.merge(
            this,
            k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          D.test(r[1]) && k.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(k)
      : k.makeArray(e, this);
  }).prototype = k.fn),
    (q = k(E));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  k.fn.extend({
    has: function (e) {
      var t = k(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && k(e);
      if (!N.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && k.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(k(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    k.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return T(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return T(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return T(e, "nextSibling");
        },
        prevAll: function (e) {
          return T(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return T(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return T(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return "undefined" != typeof e.contentDocument
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              k.merge([], e.childNodes));
        },
      },
      function (r, i) {
        k.fn[r] = function (e, t) {
          var n = k.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length &&
              (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var R = /[^\x20\t\r\n\f]+/g;
  function M(e) {
    return e;
  }
  function I(e) {
    throw e;
  }
  function W(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (k.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          k.each(e.match(R) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : k.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                k.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            k.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = k.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < k.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    k.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              k.Callbacks("memory"),
              k.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return k
                .Deferred(function (r) {
                  k.each(o, function (e, t) {
                    var n = m(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, M, s), l(u, o, I, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, M, s),
                                  l(u, o, I, s),
                                  l(u, o, M, o.notifyWith)
                                ))
                            : (a !== M && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            k.Deferred.exceptionHook &&
                              k.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== I && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (k.Deferred.getStackHook &&
                        (t.stackTrace = k.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return k
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                    o[1][3].add(l(0, e, m(t) ? t : M)),
                    o[2][3].add(l(0, e, m(n) ? n : I));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? k.extend(e, a) : a;
            },
          },
          s = {};
        return (
          k.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (W(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) W(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (k.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      $.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (k.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = k.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      k.ready();
  }
  (k.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        k.readyException(e);
      }),
      this
    );
  }),
    k.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --k.readyWait : k.isReady) ||
          ((k.isReady = !0) !== e && 0 < --k.readyWait) ||
          F.resolveWith(E, [k]);
      },
    }),
    (k.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(k.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var _ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) _(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(k(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    U = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }
  var G = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = k.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            G(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in r
              ? [t]
              : t.match(R) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || k.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !k.isEmptyObject(t);
      },
    });
  var Q = new Y(),
    J = new Y(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(Z, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : K.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        J.set(e, t, n);
      } else n = void 0;
    return n;
  }
  k.extend({
    hasData: function (e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function (e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function (e, t) {
      J.remove(e, t);
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function (e, t) {
      Q.remove(e, t);
    },
  }),
    k.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = J.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = V(r.slice(5))), ee(o, r, i[r]));
            Q.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              J.set(this, n);
            })
          : _(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = J.get(o, n))
                    ? t
                    : void 0 !== (t = ee(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  J.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          J.remove(this, e);
        });
      },
    }),
    k.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Q.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Q.access(e, t, k.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                k.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Q.get(e, n) ||
          Q.access(e, n, {
            empty: k.Callbacks("once memory").add(function () {
              Q.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    k.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? k.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          k.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Q.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    re = ["Top", "Right", "Bottom", "Left"],
    ie = E.documentElement,
    oe = function (e) {
      return k.contains(e.ownerDocument, e);
    },
    ae = {
      composed: !0,
    };
  ie.getRootNode &&
    (oe = function (e) {
      return (
        k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
      );
    });
  var se = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && oe(e) && "none" === k.css(e, "display"))
      );
    },
    ue = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
      return i;
    };
  function le(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return k.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (k.cssNumber[t] || ("px" !== l && +u)) &&
        ne.exec(k.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        k.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), k.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ce = {};
  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Q.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              se(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ce[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = k.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ce[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Q.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  k.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            se(this) ? k(this).show() : k(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? k.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
  }
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  var me,
    xe,
    be = /<|&#?\w+;/;
  function we(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
        else if (be.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          k.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < k.inArray(o, r)) i && i.push(o);
      else if (
        ((l = oe(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  (me = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (xe = E.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    me.appendChild(xe),
    (y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (me.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue);
  var Te = /^key/,
    Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ee = /^([^.]*)(?:\.(.+)|)/;
  function ke() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function Ne(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ae(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ae(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Se;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return k().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = k.guid++))),
      e.each(function () {
        k.event.add(this, t, i, r, n);
      })
    );
  }
  function De(e, i, o) {
    o
      ? (Q.set(e, i, !1),
        k.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Q.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (k.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Q.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Q.set(this, i, {
                  value: k.event.trigger(
                    k.extend(r[0], k.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }
  (k.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.get(t);
      if (v) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && k.find.matchesSelector(ie, i),
          n.guid || (n.guid = k.guid++),
          (u = v.events) || (u = v.events = {}),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof k && k.event.triggered !== e.type
                  ? k.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(R) || [""]).length);
        while (l--)
          (d = g = (s = Ee.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = k.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = k.event.special[d] || {}),
              (c = k.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && k.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (k.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.hasData(e) && Q.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Ee.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = k.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                k.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = k.event.fix(e),
        u = new Array(arguments.length),
        l = (Q.get(this, "events") || {})[s.type] || [],
        c = k.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, s))
      ) {
        (a = k.event.handlers.call(this, s, l)), (t = 0);
        while ((i = a[t++]) && !s.isPropagationStopped()) {
          (s.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
            (s.rnamespace &&
              !1 !== o.namespace &&
              !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (r = (
                  (k.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, u)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < k(i, this).index(l)
                  : k.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length &&
              s.push({
                elem: l,
                handlers: o,
              });
          }
      return (
        (l = this),
        u < t.length &&
          s.push({
            elem: l,
            handlers: t.slice(u),
          }),
        s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: {
        noBubble: !0,
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Q.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (k.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (k.Event = function (e, t) {
      if (!(this instanceof k.Event)) return new k.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? ke
              : Se),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && k.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[k.expando] = !0);
    }),
    (k.Event.prototype = {
      constructor: k.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ke),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ke),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ke),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    k.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && Te.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ce.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      k.event.addProp
    ),
    k.each(
      {
        focus: "focusin",
        blur: "focusout",
      },
      function (e, t) {
        k.event.special[e] = {
          setup: function () {
            return De(this, e, Ne), !1;
          },
          trigger: function () {
            return De(this, e), !0;
          },
          delegateType: t,
        };
      }
    ),
    k.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        k.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || k.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    k.fn.extend({
      on: function (e, t, n, r) {
        return Ae(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ae(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            k(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Se),
          this.each(function () {
            k.event.remove(this, e, n, t);
          })
        );
      },
    });
  var je =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    qe = /<script|<style|<link/i,
    Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
    He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Oe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        k(e).children("tbody")[0]) ||
      e
    );
  }
  function Pe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Re(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Me(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        Q.hasData(e) &&
        ((o = Q.access(e)), (a = Q.set(t, o)), (l = o.events))
      )
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
      J.hasData(e) && ((s = J.access(e)), (u = k.extend({}, s)), J.set(t, u));
    }
  }
  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Le.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = k.clone(u, !0, !0)), s && k.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Q.access(u, "globalEval") &&
              k.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? k._evalUrl &&
                  !u.noModule &&
                  k._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce"),
                  })
                : b(u.textContent.replace(He, ""), u, l));
    }
    return n;
  }
  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || k.cleanData(ve(r)),
        r.parentNode &&
          (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = oe(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          k.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Me(o[r], a[r]);
        else Me(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (G(n)) {
          if ((t = n[Q.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            n[Q.expando] = void 0;
          }
          n[J.expando] && (n[J.expando] = void 0);
        }
    },
  }),
    k.fn.extend({
      detach: function (e) {
        return We(this, e, !0);
      },
      remove: function (e) {
        return We(this, e);
      },
      text: function (e) {
        return _(
          this,
          function (e) {
            return void 0 === e
              ? k.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Ie(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Oe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ie(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Oe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (k.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return k.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return _(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !qe.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = k.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (k.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Ie(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            k.inArray(this, n) < 0 &&
              (k.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    k.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        k.fn[e] = function (e) {
          for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              k(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    Fe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Be = new RegExp(re.join("|"), "i");
  function _e(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Fe(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          oe(e) ||
          (a = k.style(e, t)),
        !y.pixelBoxStyles() &&
          $e.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (u) {
        (s.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        (n = "1%" !== e.top),
          (a = 12 === t(e.marginLeft)),
          (u.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (u.style.position = "absolute"),
          (i = 12 === t(u.offsetWidth / 3)),
          ie.removeChild(s),
          (u = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s = E.createElement("div"),
      u = E.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === u.style.backgroundClip),
      k.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), a;
        },
        scrollboxSize: function () {
          return e(), i;
        },
      }));
  })();
  var Ue = ["Webkit", "Moz", "ms"],
    Xe = E.createElement("div").style,
    Ve = {};
  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return (
      t ||
      (e in Xe
        ? e
        : (Ve[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
              while (n--) if ((e = Ue[n] + t) in Xe) return e;
            })(e) || e))
    );
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
    Qe = /^--/,
    Je = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    Ke = {
      letterSpacing: "0",
      fontWeight: "400",
    };
  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += k.css(e, n + re[a], !0, i)),
        r
          ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
            "margin" !== n &&
              (u -= k.css(e, "border" + re[a] + "Width", !0, i)))
          : ((u += k.css(e, "padding" + re[a], !0, i)),
            "padding" !== n
              ? (u += k.css(e, "border" + re[a] + "Width", !0, i))
              : (s += k.css(e, "border" + re[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function tt(e, t, n) {
    var r = Fe(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === k.css(e, "boxSizing", !1, r),
      o = i,
      a = _e(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === k.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === k.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        et(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = _e(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = Qe.test(t),
          l = e.style;
        if (
          (u || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = ne.exec(n)) &&
          i[1] &&
          ((n = le(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (k.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return (
        Qe.test(t) || (t = Ge(s)),
        (a = k.cssHooks[t] || k.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = _e(e, t, r)),
        "normal" === i && t in Ke && (i = Ke[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    k.each(["height", "width"], function (e, u) {
      k.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ye.test(k.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tt(e, u, n)
              : ue(e, Je, function () {
                  return tt(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  et(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = ne.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = k.css(e, u))),
            Ze(0, t, s)
          );
        },
      };
    }),
    (k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(_e(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ue(
                e,
                {
                  marginLeft: 0,
                },
                function () {
                  return e.getBoundingClientRect().left;
                }
              )) + "px"
        );
    })),
    k.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (i, o) {
        (k.cssHooks[i + o] = {
          expand: function (e) {
            for (
              var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            )
              n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
            return n;
          },
        }),
          "margin" !== i && (k.cssHooks[i + o].set = Ze);
      }
    ),
    k.fn.extend({
      css: function (e, t) {
        return _(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Fe(e), i = t.length; a < i; a++)
                o[t[a]] = k.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((k.Tween = nt).prototype = {
      constructor: nt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || k.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (k.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = nt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                k.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : nt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = nt.prototype),
    ((nt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          k.fx.step[e.prop]
            ? k.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : k.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = nt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (k.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (k.fx = nt.prototype.init),
    (k.fx.step = {});
  var rt,
    it,
    ot,
    at,
    st = /^(?:toggle|show|hide)$/,
    ut = /queueHooks$/;
  function lt() {
    it &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(lt)
        : C.setTimeout(lt, k.fx.interval),
      k.fx.tick());
  }
  function ct() {
    return (
      C.setTimeout(function () {
        rt = void 0;
      }),
      (rt = Date.now())
    );
  }
  function ft(e, t) {
    var n,
      r = 0,
      i = {
        height: e,
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function pt(e, t, n) {
    for (
      var r,
        i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function dt(o, e, t) {
    var n,
      a,
      r = 0,
      i = dt.prefilters.length,
      s = k.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = rt || ct(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: k.extend({}, e),
        opts: k.extend(
          !0,
          {
            specialEasing: {},
            easing: k.easing._default,
          },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: rt || ct(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = k.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = V(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = k.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = dt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      k.map(c, pt, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      k.fx.timer(
        k.extend(u, {
          elem: o,
          anim: l,
          queue: l.opts.queue,
        })
      ),
      l
    );
  }
  (k.Animation = k.extend(dt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return le(n.elem, e, ne.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (dt.tweeners[n] = dt.tweeners[n] || []),
          dt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = k._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), st.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || k.style(e, r);
          }
        if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Q.get(e, "display")),
            "none" === (c = k.css(e, "display")) &&
              (l
                ? (c = l)
                : (fe([e], !0),
                  (l = e.style.display || l),
                  (c = k.css(e, "display")),
                  fe([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === k.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Q.access(e, "fxshow", {
                    display: l,
                  })),
              o && (v.hidden = !g),
              g && fe([e], !0),
              p.done(function () {
                for (r in (g || fe([e]), Q.remove(e, "fxshow"), d))
                  k.style(e, r, d[r]);
              })),
              (u = pt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    },
  })),
    (k.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? k.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        k.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in k.fx.speeds
              ? (r.duration = k.fx.speeds[r.duration])
              : (r.duration = k.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
        }),
        r
      );
    }),
    k.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(se).css("opacity", 0).show().end().animate(
          {
            opacity: t,
          },
          e,
          n,
          r
        );
      },
      animate: function (t, e, n, r) {
        var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function () {
            var e = dt(this, k.extend({}, t), o);
            (i || Q.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = k.timers,
              r = Q.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || k.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Q.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = k.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    k.each(["toggle", "show", "hide"], function (e, r) {
      var i = k.fn[r];
      k.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(ft(r, !0), e, t, n);
      };
    }),
    k.each(
      {
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (e, r) {
        k.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (k.timers = []),
    (k.fx.tick = function () {
      var e,
        t = 0,
        n = k.timers;
      for (rt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || k.fx.stop(), (rt = void 0);
    }),
    (k.fx.timer = function (e) {
      k.timers.push(e), k.fx.start();
    }),
    (k.fx.interval = 13),
    (k.fx.start = function () {
      it || ((it = !0), lt());
    }),
    (k.fx.stop = function () {
      it = null;
    }),
    (k.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    }),
    (k.fn.delay = function (r, e) {
      return (
        (r = (k.fx && k.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (ot = E.createElement("input")),
    (at = E.createElement("select").appendChild(E.createElement("option"))),
    (ot.type = "checkbox"),
    (y.checkOn = "" !== ot.value),
    (y.optSelected = at.selected),
    ((ot = E.createElement("input")).value = "t"),
    (ot.type = "radio"),
    (y.radioValue = "t" === ot.value);
  var ht,
    gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function (e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    },
  }),
    k.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? k.prop(e, t, n)
            : ((1 === o && k.isXMLDoc(e)) ||
                (i =
                  k.attrHooks[t.toLowerCase()] ||
                  (k.expr.match.bool.test(t) ? ht : void 0)),
              void 0 !== n
                ? null === n
                  ? void k.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = k.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(R);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ht = {
      set: function (e, t, n) {
        return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = gt[t] || k.find.attr;
      gt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = gt[o]),
            (gt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (gt[o] = i)),
          r
        );
      };
    });
  var vt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  function mt(e) {
    return (e.match(R) || []).join(" ");
  }
  function xt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function bt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(R)) || [];
  }
  k.fn.extend({
    prop: function (e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    },
  }),
    k.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && k.isXMLDoc(e)) ||
              ((t = k.propFix[t] || t), (i = k.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = k.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: {
        for: "htmlFor",
        class: "className",
      },
    }),
    y.optSelected ||
      (k.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    k.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        k.propFix[this.toLowerCase()] = this;
      }
    ),
    k.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).addClass(t.call(this, e, xt(this)));
          });
        if ((e = bt(t)).length)
          while ((n = this[u++]))
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).removeClass(t.call(this, e, xt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = bt(t)).length)
          while ((n = this[u++]))
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              k(this).toggleClass(i.call(this, e, xt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = k(this)), (r = bt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var wt = /\r/g;
  k.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, k(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = k.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                k.valHooks[this.type] ||
                k.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(wt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    k.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = k.find.attr(e, "value");
            return null != t ? t : mt(k.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = k(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    k.each(["radio", "checkbox"], function () {
      (k.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < k.inArray(k(e).val(), t));
        },
      }),
        y.checkOn ||
          (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var Tt = /^(?:focusinfocus|focusoutblur)$/,
    Ct = function (e) {
      e.stopPropagation();
    };
  k.extend(k.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Tt.test(d + k.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[k.expando]
            ? e
            : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : k.makeArray(t, [e])),
          (c = k.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) &&
              l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              G(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !G(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (k.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Ct),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Ct),
              (k.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = k.extend(new k.Event(), n, {
        type: e,
        isSimulated: !0,
      });
      k.event.trigger(r, null, t);
    },
  }),
    k.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          k.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return k.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      k.each(
        {
          focus: "focusin",
          blur: "focusout",
        },
        function (n, r) {
          var i = function (e) {
            k.event.simulate(r, e.target, k.event.fix(e));
          };
          k.event.special[r] = {
            setup: function () {
              var e = this.ownerDocument || this,
                t = Q.access(e, r);
              t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this,
                t = Q.access(e, r) - 1;
              t
                ? Q.access(e, r, t)
                : (e.removeEventListener(n, i, !0), Q.remove(e, r));
            },
          };
        }
      );
  var Et = C.location,
    kt = Date.now(),
    St = /\?/;
  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        k.error("Invalid XML: " + e),
      t
    );
  };
  var Nt = /\[\]$/,
    At = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      k.each(e, function (e, t) {
        r || Nt.test(n)
          ? i(n, t)
          : qt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) qt(n + "[" + t + "]", e[t], r, i);
  }
  (k.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
      k.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) qt(n, e[n], t, i);
    return r.join("&");
  }),
    k.fn.extend({
      serialize: function () {
        return k.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = k.prop(this, "elements");
          return e ? k.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !k(this).is(":disabled") &&
              jt.test(this.nodeName) &&
              !Dt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = k(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? k.map(n, function (e) {
                  return {
                    name: t.name,
                    value: e.replace(At, "\r\n"),
                  };
                })
              : {
                  name: t.name,
                  value: n.replace(At, "\r\n"),
                };
          })
          .get();
      },
    });
  var Lt = /%20/g,
    Ht = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Rt = /^(?:GET|HEAD)$/,
    Mt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Ft = E.createElement("a");
  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(R) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function _t(t, i, o, a) {
    var s = {},
      u = t === Wt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        k.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = k.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && k.extend(!0, e, r), e;
  }
  (Ft.href = Et.href),
    k.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": k.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (e, t) {
        return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
      },
      ajaxPrefilter: Bt(It),
      ajaxTransport: Bt(Wt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Pt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            Mt,
            Et.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = k.param(v.data, v.traditional)),
          _t(It, v, t, T),
          h)
        )
          return T;
        for (i in ((g = k.event && v.global) &&
          0 == k.active++ &&
          k.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Rt.test(v.type)),
        (f = v.url.replace(Ht, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Lt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (St.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Ot, "$1")),
              (o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (k.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
          k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = _t(Wt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return {
                state: "success",
                data: t,
              };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (k.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --k.active || k.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return k.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return k.get(e, void 0, t, "script");
      },
    }),
    k.each(["get", "post"], function (e, i) {
      k[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          k.ajax(
            k.extend(
              {
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n,
              },
              k.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (k._evalUrl = function (e, t) {
      return k.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function () {},
        },
        dataFilter: function (e) {
          k.globalEval(e, t);
        },
      });
    }),
    k.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              k(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = k(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          k(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              k(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (k.expr.pseudos.hidden = function (e) {
      return !k.expr.pseudos.visible(e);
    }),
    (k.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (k.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Ut = {
      0: 200,
      1223: 204,
    },
    Xt = k.ajaxSettings.xhr();
  (y.cors = !!Xt && "withCredentials" in Xt),
    (y.ajax = Xt = !!Xt),
    k.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (Xt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Ut[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? {
                              binary: r.response,
                            }
                          : {
                              text: r.responseText,
                            },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    k.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    k.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /\b(?:java|ecma)script\b/,
      },
      converters: {
        "text script": function (e) {
          return k.globalEval(e), e;
        },
      },
    }),
    k.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    k.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = k("<script>")
              .attr(n.scriptAttrs || {})
              .prop({
                charset: n.scriptCharset,
                src: n.url,
              })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Vt,
    Gt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return (this[e] = !0), e;
    },
  }),
    k.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Yt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Yt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Yt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? k(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Vt = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Vt.childNodes.length)),
    (k.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = D.exec(e))
            ? [t.createElement(i[1])]
            : ((i = we([e], t, o)),
              o && o.length && k(o).remove(),
              k.merge([], i.childNodes)));
      var r, i, o;
    }),
    (k.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          k
            .ajax({
              url: e,
              type: i || "GET",
              dataType: "html",
              data: t,
            })
            .done(function (e) {
              (o = arguments),
                a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    k.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        k.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (k.expr.pseudos.animated = function (t) {
      return k.grep(k.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (k.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = k.css(e, "top")),
          (u = k.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, k.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    k.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                k.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset,
              })
            : {
                top: 0,
                left: 0,
              }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = {
              top: 0,
              left: 0,
            };
          if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === k.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
              (i.left += k.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - k.css(r, "marginTop", !0),
            left: t.left - i.left - k.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === k.css(e, "position")) e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    k.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function (e) {
          return _(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    k.each(["top", "left"], function (e, n) {
      k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
        if (t)
          return (t = _e(e, n)), $e.test(t) ? k(e).position()[n] + "px" : t;
      });
    }),
    k.each(
      {
        Height: "height",
        Width: "width",
      },
      function (a, s) {
        k.each(
          {
            padding: "inner" + a,
            content: s,
            "": "outer" + a,
          },
          function (r, o) {
            k.fn[o] = function (e, t) {
              var n = arguments.length && (r || "boolean" != typeof e),
                i = r || (!0 === e || !0 === t ? "margin" : "border");
              return _(
                this,
                function (e, t, n) {
                  var r;
                  return x(e)
                    ? 0 === o.indexOf("outer")
                      ? e["inner" + a]
                      : e.document.documentElement["client" + a]
                    : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        r["scroll" + a],
                        e.body["offset" + a],
                        r["offset" + a],
                        r["client" + a]
                      ))
                    : void 0 === n
                    ? k.css(e, t, i)
                    : k.style(e, t, n, i);
                },
                s,
                n ? e : void 0,
                n
              );
            };
          }
        );
      }
    ),
    k.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        k.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    k.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    k.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (k.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
        return (
          (r = s.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)));
          }).guid = e.guid =
            e.guid || k.guid++),
          i
        );
    }),
    (k.holdReady = function (e) {
      e ? k.readyWait++ : k.ready(!0);
    }),
    (k.isArray = Array.isArray),
    (k.parseJSON = JSON.parse),
    (k.nodeName = A),
    (k.isFunction = m),
    (k.isWindow = x),
    (k.camelCase = V),
    (k.type = w),
    (k.now = Date.now),
    (k.isNumeric = function (e) {
      var t = k.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return k;
      });
  var Qt = C.jQuery,
    Jt = C.$;
  return (
    (k.noConflict = function (e) {
      return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
    }),
    e || (C.jQuery = C.$ = k),
    k
  );
});

// jquery min end

// Bootsrap main start

/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery);
})(this, function (t, p) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(r).filter(function (t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
          })
        )),
        e.forEach(function (t) {
          var e, n, i;
          (e = o),
            (i = r[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = i);
        });
    }
    return o;
  }
  p = p && p.hasOwnProperty("default") ? p.default : p;
  var e = "transitionend";
  function n(t) {
    var e = this,
      n = !1;
    return (
      p(this).one(m.TRANSITION_END, function () {
        n = !0;
      }),
      setTimeout(function () {
        n || m.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  var m = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = p(t).css("transition-duration"),
        n = p(t).css("transition-delay"),
        i = parseFloat(e),
        o = parseFloat(n);
      return i || o
        ? ((e = e.split(",")[0]),
          (n = n.split(",")[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      p(t).trigger(e);
    },
    supportsTransitionEnd: function () {
      return Boolean(e);
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            s =
              r && m.isElement(r)
                ? "element"
                : ((a = r),
                  {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase());
          if (!new RegExp(o).test(s))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var a;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode)
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
          ? m.findShadowRoot(t.parentNode)
          : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    },
  };
  (p.fn.emulateTransitionEnd = n),
    (p.event.special[m.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function (t) {
        if (p(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var o = "alert",
    r = "bs.alert",
    a = "." + r,
    c = p.fn[o],
    h = {
      CLOSE: "close" + a,
      CLOSED: "closed" + a,
      CLICK_DATA_API: "click" + a + ".data-api",
    },
    u = "alert",
    f = "fade",
    d = "show",
    g = (function () {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (t.dispose = function () {
          p.removeData(this._element, r), (this._element = null);
        }),
        (t._getRootElement = function (t) {
          var e = m.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            n || (n = p(t).closest("." + u)[0]),
            n
          );
        }),
        (t._triggerCloseEvent = function (t) {
          var e = p.Event(h.CLOSE);
          return p(t).trigger(e), e;
        }),
        (t._removeElement = function (e) {
          var n = this;
          if ((p(e).removeClass(d), p(e).hasClass(f))) {
            var t = m.getTransitionDurationFromElement(e);
            p(e)
              .one(m.TRANSITION_END, function (t) {
                return n._destroyElement(e, t);
              })
              .emulateTransitionEnd(t);
          } else this._destroyElement(e);
        }),
        (t._destroyElement = function (t) {
          p(t).detach().trigger(h.CLOSED).remove();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p(this),
              e = t.data(r);
            e || ((e = new i(this)), t.data(r, e)), "close" === n && e[n](this);
          });
        }),
        (i._handleDismiss = function (e) {
          return function (t) {
            t && t.preventDefault(), e.close(this);
          };
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
        ]),
        i
      );
    })();
  p(document).on(
    h.CLICK_DATA_API,
    '[data-dismiss="alert"]',
    g._handleDismiss(new g())
  ),
    (p.fn[o] = g._jQueryInterface),
    (p.fn[o].Constructor = g),
    (p.fn[o].noConflict = function () {
      return (p.fn[o] = c), g._jQueryInterface;
    });
  var _ = "button",
    v = "bs.button",
    y = "." + v,
    E = ".data-api",
    b = p.fn[_],
    w = "active",
    C = "btn",
    T = "focus",
    S = '[data-toggle^="button"]',
    D = '[data-toggle="buttons"]',
    I = 'input:not([type="hidden"])',
    A = ".active",
    O = ".btn",
    N = {
      CLICK_DATA_API: "click" + y + E,
      FOCUS_BLUR_DATA_API: "focus" + y + E + " blur" + y + E,
    },
    k = (function () {
      function n(t) {
        this._element = t;
      }
      var t = n.prototype;
      return (
        (t.toggle = function () {
          var t = !0,
            e = !0,
            n = p(this._element).closest(D)[0];
          if (n) {
            var i = this._element.querySelector(I);
            if (i) {
              if ("radio" === i.type)
                if (i.checked && this._element.classList.contains(w)) t = !1;
                else {
                  var o = n.querySelector(A);
                  o && p(o).removeClass(w);
                }
              if (t) {
                if (
                  i.hasAttribute("disabled") ||
                  n.hasAttribute("disabled") ||
                  i.classList.contains("disabled") ||
                  n.classList.contains("disabled")
                )
                  return;
                (i.checked = !this._element.classList.contains(w)),
                  p(i).trigger("change");
              }
              i.focus(), (e = !1);
            }
          }
          e &&
            this._element.setAttribute(
              "aria-pressed",
              !this._element.classList.contains(w)
            ),
            t && p(this._element).toggleClass(w);
        }),
        (t.dispose = function () {
          p.removeData(this._element, v), (this._element = null);
        }),
        (n._jQueryInterface = function (e) {
          return this.each(function () {
            var t = p(this).data(v);
            t || ((t = new n(this)), p(this).data(v, t)),
              "toggle" === e && t[e]();
          });
        }),
        s(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
        ]),
        n
      );
    })();
  p(document)
    .on(N.CLICK_DATA_API, S, function (t) {
      t.preventDefault();
      var e = t.target;
      p(e).hasClass(C) || (e = p(e).closest(O)),
        k._jQueryInterface.call(p(e), "toggle");
    })
    .on(N.FOCUS_BLUR_DATA_API, S, function (t) {
      var e = p(t.target).closest(O)[0];
      p(e).toggleClass(T, /^focus(in)?$/.test(t.type));
    }),
    (p.fn[_] = k._jQueryInterface),
    (p.fn[_].Constructor = k),
    (p.fn[_].noConflict = function () {
      return (p.fn[_] = b), k._jQueryInterface;
    });
  var L = "carousel",
    x = "bs.carousel",
    P = "." + x,
    H = ".data-api",
    j = p.fn[L],
    R = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    F = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    M = "next",
    W = "prev",
    U = "left",
    B = "right",
    q = {
      SLIDE: "slide" + P,
      SLID: "slid" + P,
      KEYDOWN: "keydown" + P,
      MOUSEENTER: "mouseenter" + P,
      MOUSELEAVE: "mouseleave" + P,
      TOUCHSTART: "touchstart" + P,
      TOUCHMOVE: "touchmove" + P,
      TOUCHEND: "touchend" + P,
      POINTERDOWN: "pointerdown" + P,
      POINTERUP: "pointerup" + P,
      DRAG_START: "dragstart" + P,
      LOAD_DATA_API: "load" + P + H,
      CLICK_DATA_API: "click" + P + H,
    },
    K = "carousel",
    Q = "active",
    V = "slide",
    Y = "carousel-item-right",
    z = "carousel-item-left",
    X = "carousel-item-next",
    G = "carousel-item-prev",
    $ = "pointer-event",
    J = ".active",
    Z = ".active.carousel-item",
    tt = ".carousel-item",
    et = ".carousel-item img",
    nt = ".carousel-item-next, .carousel-item-prev",
    it = ".carousel-indicators",
    ot = "[data-slide], [data-slide-to]",
    rt = '[data-ride="carousel"]',
    st = {
      TOUCH: "touch",
      PEN: "pen",
    },
    at = (function () {
      function r(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(it)),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            0 < navigator.maxTouchPoints),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var t = r.prototype;
      return (
        (t.next = function () {
          this._isSliding || this._slide(M);
        }),
        (t.nextWhenVisible = function () {
          !document.hidden &&
            p(this._element).is(":visible") &&
            "hidden" !== p(this._element).css("visibility") &&
            this.next();
        }),
        (t.prev = function () {
          this._isSliding || this._slide(W);
        }),
        (t.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(nt) &&
              (m.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (t.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (t.to = function (t) {
          var e = this;
          this._activeElement = this._element.querySelector(Z);
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              p(this._element).one(q.SLID, function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var i = n < t ? M : W;
              this._slide(i, this._items[t]);
            }
        }),
        (t.dispose = function () {
          p(this._element).off(P),
            p.removeData(this._element, x),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (t._getConfig = function (t) {
          return (t = l({}, R, t)), m.typeCheckConfig(L, t, F), t;
        }),
        (t._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            0 < e && this.prev(), e < 0 && this.next();
          }
        }),
        (t._addEventListeners = function () {
          var e = this;
          this._config.keyboard &&
            p(this._element).on(q.KEYDOWN, function (t) {
              return e._keydown(t);
            }),
            "hover" === this._config.pause &&
              p(this._element)
                .on(q.MOUSEENTER, function (t) {
                  return e.pause(t);
                })
                .on(q.MOUSELEAVE, function (t) {
                  return e.cycle(t);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (t._addTouchEventListeners = function () {
          var n = this;
          if (this._touchSupported) {
            var e = function (t) {
                n._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()]
                  ? (n.touchStartX = t.originalEvent.clientX)
                  : n._pointerEvent ||
                    (n.touchStartX = t.originalEvent.touches[0].clientX);
              },
              i = function (t) {
                n._pointerEvent &&
                  st[t.originalEvent.pointerType.toUpperCase()] &&
                  (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                  n._handleSwipe(),
                  "hover" === n._config.pause &&
                    (n.pause(),
                    n.touchTimeout && clearTimeout(n.touchTimeout),
                    (n.touchTimeout = setTimeout(function (t) {
                      return n.cycle(t);
                    }, 500 + n._config.interval)));
              };
            p(this._element.querySelectorAll(et)).on(
              q.DRAG_START,
              function (t) {
                return t.preventDefault();
              }
            ),
              this._pointerEvent
                ? (p(this._element).on(q.POINTERDOWN, function (t) {
                    return e(t);
                  }),
                  p(this._element).on(q.POINTERUP, function (t) {
                    return i(t);
                  }),
                  this._element.classList.add($))
                : (p(this._element).on(q.TOUCHSTART, function (t) {
                    return e(t);
                  }),
                  p(this._element).on(q.TOUCHMOVE, function (t) {
                    var e;
                    (e = t).originalEvent.touches &&
                    1 < e.originalEvent.touches.length
                      ? (n.touchDeltaX = 0)
                      : (n.touchDeltaX =
                          e.originalEvent.touches[0].clientX - n.touchStartX);
                  }),
                  p(this._element).on(q.TOUCHEND, function (t) {
                    return i(t);
                  }));
          }
        }),
        (t._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (t._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(tt))
                : []),
            this._items.indexOf(t)
          );
        }),
        (t._getItemByDirection = function (t, e) {
          var n = t === M,
            i = t === W,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return e;
          var s = (o + (t === W ? -1 : 1)) % this._items.length;
          return -1 === s
            ? this._items[this._items.length - 1]
            : this._items[s];
        }),
        (t._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            i = this._getItemIndex(this._element.querySelector(Z)),
            o = p.Event(q.SLIDE, {
              relatedTarget: t,
              direction: e,
              from: i,
              to: n,
            });
          return p(this._element).trigger(o), o;
        }),
        (t._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(this._indicatorsElement.querySelectorAll(J));
            p(e).removeClass(Q);
            var n = this._indicatorsElement.children[this._getItemIndex(t)];
            n && p(n).addClass(Q);
          }
        }),
        (t._slide = function (t, e) {
          var n,
            i,
            o,
            r = this,
            s = this._element.querySelector(Z),
            a = this._getItemIndex(s),
            l = e || (s && this._getItemByDirection(t, s)),
            c = this._getItemIndex(l),
            h = Boolean(this._interval);
          if (
            ((o = t === M ? ((n = z), (i = X), U) : ((n = Y), (i = G), B)),
            l && p(l).hasClass(Q))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
            s &&
            l
          ) {
            (this._isSliding = !0),
              h && this.pause(),
              this._setActiveIndicatorElement(l);
            var u = p.Event(q.SLID, {
              relatedTarget: l,
              direction: o,
              from: a,
              to: c,
            });
            if (p(this._element).hasClass(V)) {
              p(l).addClass(i), m.reflow(l), p(s).addClass(n), p(l).addClass(n);
              var f = parseInt(l.getAttribute("data-interval"), 10);
              this._config.interval = f
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  f)
                : this._config.defaultInterval || this._config.interval;
              var d = m.getTransitionDurationFromElement(s);
              p(s)
                .one(m.TRANSITION_END, function () {
                  p(l)
                    .removeClass(n + " " + i)
                    .addClass(Q),
                    p(s).removeClass(Q + " " + i + " " + n),
                    (r._isSliding = !1),
                    setTimeout(function () {
                      return p(r._element).trigger(u);
                    }, 0);
                })
                .emulateTransitionEnd(d);
            } else
              p(s).removeClass(Q),
                p(l).addClass(Q),
                (this._isSliding = !1),
                p(this._element).trigger(u);
            h && this.cycle();
          }
        }),
        (r._jQueryInterface = function (i) {
          return this.each(function () {
            var t = p(this).data(x),
              e = l({}, R, p(this).data());
            "object" == typeof i && (e = l({}, e, i));
            var n = "string" == typeof i ? i : e.slide;
            if (
              (t || ((t = new r(this, e)), p(this).data(x, t)),
              "number" == typeof i)
            )
              t.to(i);
            else if ("string" == typeof n) {
              if ("undefined" == typeof t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            } else e.interval && e.ride && (t.pause(), t.cycle());
          });
        }),
        (r._dataApiClickHandler = function (t) {
          var e = m.getSelectorFromElement(this);
          if (e) {
            var n = p(e)[0];
            if (n && p(n).hasClass(K)) {
              var i = l({}, p(n).data(), p(this).data()),
                o = this.getAttribute("data-slide-to");
              o && (i.interval = !1),
                r._jQueryInterface.call(p(n), i),
                o && p(n).data(x).to(o),
                t.preventDefault();
            }
          }
        }),
        s(r, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return R;
            },
          },
        ]),
        r
      );
    })();
  p(document).on(q.CLICK_DATA_API, ot, at._dataApiClickHandler),
    p(window).on(q.LOAD_DATA_API, function () {
      for (
        var t = [].slice.call(document.querySelectorAll(rt)),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = p(t[e]);
        at._jQueryInterface.call(i, i.data());
      }
    }),
    (p.fn[L] = at._jQueryInterface),
    (p.fn[L].Constructor = at),
    (p.fn[L].noConflict = function () {
      return (p.fn[L] = j), at._jQueryInterface;
    });
  var lt = "collapse",
    ct = "bs.collapse",
    ht = "." + ct,
    ut = p.fn[lt],
    ft = {
      toggle: !0,
      parent: "",
    },
    dt = {
      toggle: "boolean",
      parent: "(string|element)",
    },
    pt = {
      SHOW: "show" + ht,
      SHOWN: "shown" + ht,
      HIDE: "hide" + ht,
      HIDDEN: "hidden" + ht,
      CLICK_DATA_API: "click" + ht + ".data-api",
    },
    mt = "show",
    gt = "collapse",
    _t = "collapsing",
    vt = "collapsed",
    yt = "width",
    Et = "height",
    bt = ".show, .collapsing",
    wt = '[data-toggle="collapse"]',
    Ct = (function () {
      function a(e, t) {
        (this._isTransitioning = !1),
          (this._element = e),
          (this._config = this._getConfig(t)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                e.id +
                '"],[data-toggle="collapse"][data-target="#' +
                e.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(wt)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            s = m.getSelectorFromElement(r),
            a = [].slice
              .call(document.querySelectorAll(s))
              .filter(function (t) {
                return t === e;
              });
          null !== s &&
            0 < a.length &&
            ((this._selector = s), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var t = a.prototype;
      return (
        (t.toggle = function () {
          p(this._element).hasClass(mt) ? this.hide() : this.show();
        }),
        (t.show = function () {
          var t,
            e,
            n = this;
          if (
            !this._isTransitioning &&
            !p(this._element).hasClass(mt) &&
            (this._parent &&
              0 ===
                (t = [].slice
                  .call(this._parent.querySelectorAll(bt))
                  .filter(function (t) {
                    return "string" == typeof n._config.parent
                      ? t.getAttribute("data-parent") === n._config.parent
                      : t.classList.contains(gt);
                  })).length &&
              (t = null),
            !(
              t &&
              (e = p(t).not(this._selector).data(ct)) &&
              e._isTransitioning
            ))
          ) {
            var i = p.Event(pt.SHOW);
            if ((p(this._element).trigger(i), !i.isDefaultPrevented())) {
              t &&
                (a._jQueryInterface.call(p(t).not(this._selector), "hide"),
                e || p(t).data(ct, null));
              var o = this._getDimension();
              p(this._element).removeClass(gt).addClass(_t),
                (this._element.style[o] = 0),
                this._triggerArray.length &&
                  p(this._triggerArray)
                    .removeClass(vt)
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                s = m.getTransitionDurationFromElement(this._element);
              p(this._element)
                .one(m.TRANSITION_END, function () {
                  p(n._element).removeClass(_t).addClass(gt).addClass(mt),
                    (n._element.style[o] = ""),
                    n.setTransitioning(!1),
                    p(n._element).trigger(pt.SHOWN);
                })
                .emulateTransitionEnd(s),
                (this._element.style[o] = this._element[r] + "px");
            }
          }
        }),
        (t.hide = function () {
          var t = this;
          if (!this._isTransitioning && p(this._element).hasClass(mt)) {
            var e = p.Event(pt.HIDE);
            if ((p(this._element).trigger(e), !e.isDefaultPrevented())) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + "px"),
                m.reflow(this._element),
                p(this._element).addClass(_t).removeClass(gt).removeClass(mt);
              var i = this._triggerArray.length;
              if (0 < i)
                for (var o = 0; o < i; o++) {
                  var r = this._triggerArray[o],
                    s = m.getSelectorFromElement(r);
                  if (null !== s)
                    p([].slice.call(document.querySelectorAll(s))).hasClass(
                      mt
                    ) || p(r).addClass(vt).attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = "";
              var a = m.getTransitionDurationFromElement(this._element);
              p(this._element)
                .one(m.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    p(t._element)
                      .removeClass(_t)
                      .addClass(gt)
                      .trigger(pt.HIDDEN);
                })
                .emulateTransitionEnd(a);
            }
          }
        }),
        (t.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (t.dispose = function () {
          p.removeData(this._element, ct),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (t._getConfig = function (t) {
          return (
            ((t = l({}, ft, t)).toggle = Boolean(t.toggle)),
            m.typeCheckConfig(lt, t, dt),
            t
          );
        }),
        (t._getDimension = function () {
          return p(this._element).hasClass(yt) ? yt : Et;
        }),
        (t._getParent = function () {
          var t,
            n = this;
          m.isElement(this._config.parent)
            ? ((t = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (t = this._config.parent[0]))
            : (t = document.querySelector(this._config.parent));
          var e =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            i = [].slice.call(t.querySelectorAll(e));
          return (
            p(i).each(function (t, e) {
              n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
            }),
            t
          );
        }),
        (t._addAriaAndCollapsedClass = function (t, e) {
          var n = p(t).hasClass(mt);
          e.length && p(e).toggleClass(vt, !n).attr("aria-expanded", n);
        }),
        (a._getTargetFromElement = function (t) {
          var e = m.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (a._jQueryInterface = function (i) {
          return this.each(function () {
            var t = p(this),
              e = t.data(ct),
              n = l({}, ft, t.data(), "object" == typeof i && i ? i : {});
            if (
              (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
              e || ((e = new a(this, n)), t.data(ct, e)),
              "string" == typeof i)
            ) {
              if ("undefined" == typeof e[i])
                throw new TypeError('No method named "' + i + '"');
              e[i]();
            }
          });
        }),
        s(a, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return ft;
            },
          },
        ]),
        a
      );
    })();
  p(document).on(pt.CLICK_DATA_API, wt, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var n = p(this),
      e = m.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(e));
    p(i).each(function () {
      var t = p(this),
        e = t.data(ct) ? "toggle" : n.data();
      Ct._jQueryInterface.call(t, e);
    });
  }),
    (p.fn[lt] = Ct._jQueryInterface),
    (p.fn[lt].Constructor = Ct),
    (p.fn[lt].noConflict = function () {
      return (p.fn[lt] = ut), Ct._jQueryInterface;
    });
  for (
    var Tt = "undefined" != typeof window && "undefined" != typeof document,
      St = ["Edge", "Trident", "Firefox"],
      Dt = 0,
      It = 0;
    It < St.length;
    It += 1
  )
    if (Tt && 0 <= navigator.userAgent.indexOf(St[It])) {
      Dt = 1;
      break;
    }
  var At =
    Tt && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, Dt));
          };
        };
  function Ot(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function Nt(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function kt(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function Lt(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = Nt(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : Lt(kt(t));
  }
  var xt = Tt && !(!window.MSInputMethodContext || !document.documentMode),
    Pt = Tt && /MSIE 10/.test(navigator.userAgent);
  function Ht(t) {
    return 11 === t ? xt : 10 === t ? Pt : xt || Pt;
  }
  function jt(t) {
    if (!t) return document.documentElement;
    for (
      var e = Ht(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === Nt(n, "position")
        ? jt(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function Rt(t) {
    return null !== t.parentNode ? Rt(t.parentNode) : t;
  }
  function Ft(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s,
      a,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return "BODY" === (a = (s = l).nodeName) ||
        ("HTML" !== a && jt(s.firstElementChild) !== s)
        ? jt(l)
        : l;
    var c = Rt(t);
    return c.host ? Ft(c.host, e) : Ft(t, Rt(e).host);
  }
  function Mt(t) {
    var e =
        "top" ===
        (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top")
          ? "scrollTop"
          : "scrollLeft",
      n = t.nodeName;
    if ("BODY" !== n && "HTML" !== n) return t[e];
    var i = t.ownerDocument.documentElement;
    return (t.ownerDocument.scrollingElement || i)[e];
  }
  function Wt(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"], 10) +
      parseFloat(t["border" + i + "Width"], 10)
    );
  }
  function Ut(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      Ht(10)
        ? parseInt(n["offset" + t]) +
            parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
            parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
        : 0
    );
  }
  function Bt(t) {
    var e = t.body,
      n = t.documentElement,
      i = Ht(10) && getComputedStyle(n);
    return {
      height: Ut("Height", e, n, i),
      width: Ut("Width", e, n, i),
    };
  }
  var qt = (function () {
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
      };
    })(),
    Kt = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    Qt =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function Vt(t) {
    return Qt({}, t, {
      right: t.left + t.width,
      bottom: t.top + t.height,
    });
  }
  function Yt(t) {
    var e = {};
    try {
      if (Ht(10)) {
        e = t.getBoundingClientRect();
        var n = Mt(t, "top"),
          i = Mt(t, "left");
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      r = "HTML" === t.nodeName ? Bt(t.ownerDocument) : {},
      s = r.width || t.clientWidth || o.right - o.left,
      a = r.height || t.clientHeight || o.bottom - o.top,
      l = t.offsetWidth - s,
      c = t.offsetHeight - a;
    if (l || c) {
      var h = Nt(t);
      (l -= Wt(h, "x")), (c -= Wt(h, "y")), (o.width -= l), (o.height -= c);
    }
    return Vt(o);
  }
  function zt(t, e) {
    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = Ht(10),
      o = "HTML" === e.nodeName,
      r = Yt(t),
      s = Yt(e),
      a = Lt(t),
      l = Nt(e),
      c = parseFloat(l.borderTopWidth, 10),
      h = parseFloat(l.borderLeftWidth, 10);
    n && o && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
    var u = Vt({
      top: r.top - s.top - c,
      left: r.left - s.left - h,
      width: r.width,
      height: r.height,
    });
    if (((u.marginTop = 0), (u.marginLeft = 0), !i && o)) {
      var f = parseFloat(l.marginTop, 10),
        d = parseFloat(l.marginLeft, 10);
      (u.top -= c - f),
        (u.bottom -= c - f),
        (u.left -= h - d),
        (u.right -= h - d),
        (u.marginTop = f),
        (u.marginLeft = d);
    }
    return (
      (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) &&
        (u = (function (t, e) {
          var n =
              2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = Mt(e, "top"),
            o = Mt(e, "left"),
            r = n ? -1 : 1;
          return (
            (t.top += i * r),
            (t.bottom += i * r),
            (t.left += o * r),
            (t.right += o * r),
            t
          );
        })(u, e)),
      u
    );
  }
  function Xt(t) {
    if (!t || !t.parentElement || Ht()) return document.documentElement;
    for (var e = t.parentElement; e && "none" === Nt(e, "transform"); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function Gt(t, e, n, i) {
    var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      r = {
        top: 0,
        left: 0,
      },
      s = o ? Xt(t) : Ft(t, e);
    if ("viewport" === i)
      r = (function (t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = t.ownerDocument.documentElement,
          i = zt(t, n),
          o = Math.max(n.clientWidth, window.innerWidth || 0),
          r = Math.max(n.clientHeight, window.innerHeight || 0),
          s = e ? 0 : Mt(n),
          a = e ? 0 : Mt(n, "left");
        return Vt({
          top: s - i.top + i.marginTop,
          left: a - i.left + i.marginLeft,
          width: o,
          height: r,
        });
      })(s, o);
    else {
      var a = void 0;
      "scrollParent" === i
        ? "BODY" === (a = Lt(kt(e))).nodeName &&
          (a = t.ownerDocument.documentElement)
        : (a = "window" === i ? t.ownerDocument.documentElement : i);
      var l = zt(a, s, o);
      if (
        "HTML" !== a.nodeName ||
        (function t(e) {
          var n = e.nodeName;
          if ("BODY" === n || "HTML" === n) return !1;
          if ("fixed" === Nt(e, "position")) return !0;
          var i = kt(e);
          return !!i && t(i);
        })(s)
      )
        r = l;
      else {
        var c = Bt(t.ownerDocument),
          h = c.height,
          u = c.width;
        (r.top += l.top - l.marginTop),
          (r.bottom = h + l.top),
          (r.left += l.left - l.marginLeft),
          (r.right = u + l.left);
      }
    }
    var f = "number" == typeof (n = n || 0);
    return (
      (r.left += f ? n : n.left || 0),
      (r.top += f ? n : n.top || 0),
      (r.right -= f ? n : n.right || 0),
      (r.bottom -= f ? n : n.bottom || 0),
      r
    );
  }
  function $t(t, e, i, n, o) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var s = Gt(i, n, r, o),
      a = {
        top: {
          width: s.width,
          height: e.top - s.top,
        },
        right: {
          width: s.right - e.right,
          height: s.height,
        },
        bottom: {
          width: s.width,
          height: s.bottom - e.bottom,
        },
        left: {
          width: e.left - s.left,
          height: s.height,
        },
      },
      l = Object.keys(a)
        .map(function (t) {
          return Qt(
            {
              key: t,
            },
            a[t],
            {
              area: ((e = a[t]), e.width * e.height),
            }
          );
          var e;
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      c = l.filter(function (t) {
        var e = t.width,
          n = t.height;
        return e >= i.clientWidth && n >= i.clientHeight;
      }),
      h = 0 < c.length ? c[0].key : l[0].key,
      u = t.split("-")[1];
    return h + (u ? "-" + u : "");
  }
  function Jt(t, e, n) {
    var i =
      3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return zt(n, i ? Xt(e) : Ft(e, n), i);
  }
  function Zt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
      i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return {
      width: t.offsetWidth + i,
      height: t.offsetHeight + n,
    };
  }
  function te(t) {
    var e = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom",
    };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function ee(t, e, n) {
    n = n.split("-")[0];
    var i = Zt(t),
      o = {
        width: i.width,
        height: i.height,
      },
      r = -1 !== ["right", "left"].indexOf(n),
      s = r ? "top" : "left",
      a = r ? "left" : "top",
      l = r ? "height" : "width",
      c = r ? "width" : "height";
    return (
      (o[s] = e[s] + e[l] / 2 - i[l] / 2),
      (o[a] = n === a ? e[a] - i[c] : e[te(a)]),
      o
    );
  }
  function ne(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function ie(t, n, e) {
    return (
      (void 0 === e
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = ne(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", e)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var e = t.function || t.fn;
        t.enabled &&
          Ot(e) &&
          ((n.offsets.popper = Vt(n.offsets.popper)),
          (n.offsets.reference = Vt(n.offsets.reference)),
          (n = e(n, t)));
      }),
      n
    );
  }
  function oe(t, n) {
    return t.some(function (t) {
      var e = t.name;
      return t.enabled && e === n;
    });
  }
  function re(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? "" + o + n : t;
      if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function se(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function ae(t, e, n, i) {
    (n.updateBound = i),
      se(t).addEventListener("resize", n.updateBound, {
        passive: !0,
      });
    var o = Lt(t);
    return (
      (function t(e, n, i, o) {
        var r = "BODY" === e.nodeName,
          s = r ? e.ownerDocument.defaultView : e;
        s.addEventListener(n, i, {
          passive: !0,
        }),
          r || t(Lt(s.parentNode), n, i, o),
          o.push(s);
      })(o, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function le() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        se(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function ce(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function he(n, i) {
    Object.keys(i).forEach(function (t) {
      var e = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) &&
        ce(i[t]) &&
        (e = "px"),
        (n.style[t] = i[t] + e);
    });
  }
  var ue = Tt && /Firefox/i.test(navigator.userAgent);
  function fe(t, e, n) {
    var i = ne(t, function (t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = "`" + e + "`",
        s = "`" + n + "`";
      console.warn(
        s +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return o;
  }
  var de = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    pe = de.slice(3);
  function me(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      n = pe.indexOf(t),
      i = pe.slice(n + 1).concat(pe.slice(0, n));
    return e ? i.reverse() : i;
  }
  var ge = "flip",
    _e = "clockwise",
    ve = "counterclockwise";
  function ye(t, o, r, e) {
    var s = [0, 0],
      a = -1 !== ["right", "left"].indexOf(e),
      n = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
      i = n.indexOf(
        ne(n, function (t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    n[i] &&
      -1 === n[i].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/,
      c =
        -1 !== i
          ? [
              n.slice(0, i).concat([n[i].split(l)[0]]),
              [n[i].split(l)[1]].concat(n.slice(i + 1)),
            ]
          : [n];
    return (
      (c = c.map(function (t, e) {
        var n = (1 === e ? !a : a) ? "height" : "width",
          i = !1;
        return t
          .reduce(function (t, e) {
            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
              ? ((t[t.length - 1] = e), (i = !0), t)
              : i
              ? ((t[t.length - 1] += e), (i = !1), t)
              : t.concat(e);
          }, [])
          .map(function (t) {
            return (function (t, e, n, i) {
              var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                s = o[2];
              if (!r) return t;
              if (0 !== s.indexOf("%"))
                return "vh" !== s && "vw" !== s
                  ? r
                  : (("vh" === s
                      ? Math.max(
                          document.documentElement.clientHeight,
                          window.innerHeight || 0
                        )
                      : Math.max(
                          document.documentElement.clientWidth,
                          window.innerWidth || 0
                        )) /
                      100) *
                      r;
              var a = void 0;
              switch (s) {
                case "%p":
                  a = n;
                  break;
                case "%":
                case "%r":
                default:
                  a = i;
              }
              return (Vt(a)[e] / 100) * r;
            })(t, n, o, r);
          });
      })).forEach(function (n, i) {
        n.forEach(function (t, e) {
          ce(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1));
        });
      }),
      s
    );
  }
  var Ee = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                h = {
                  start: Kt({}, l, r[l]),
                  end: Kt({}, l, r[l] + r[c] - s[c]),
                };
              t.offsets.popper = Qt({}, s, h[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0;
            return (
              (l = ce(+n) ? [+n, 0] : ye(n, r, s, a)),
              "left" === a
                ? ((r.top += l[0]), (r.left -= l[1]))
                : "right" === a
                ? ((r.top += l[0]), (r.left += l[1]))
                : "top" === a
                ? ((r.left += l[0]), (r.top -= l[1]))
                : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
              (t.popper = r),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, i) {
            var e = i.boundariesElement || jt(t.instance.popper);
            t.instance.reference === e && (e = jt(e));
            var n = re("transform"),
              o = t.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[n];
            (o.top = ""), (o.left = ""), (o[n] = "");
            var l = Gt(
              t.instance.popper,
              t.instance.reference,
              i.padding,
              e,
              t.positionFixed
            );
            (o.top = r), (o.left = s), (o[n] = a), (i.boundaries = l);
            var c = i.priority,
              h = t.offsets.popper,
              u = {
                primary: function (t) {
                  var e = h[t];
                  return (
                    h[t] < l[t] &&
                      !i.escapeWithReference &&
                      (e = Math.max(h[t], l[t])),
                    Kt({}, t, e)
                  );
                },
                secondary: function (t) {
                  var e = "right" === t ? "left" : "top",
                    n = h[e];
                  return (
                    h[t] > l[t] &&
                      !i.escapeWithReference &&
                      (n = Math.min(
                        h[e],
                        l[t] - ("right" === t ? h.width : h.height)
                      )),
                    Kt({}, e, n)
                  );
                },
              };
            return (
              c.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                h = Qt({}, h, u[e](t));
              }),
              (t.offsets.popper = h),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
            return (
              n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
              n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!fe(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var o = t.placement.split("-")[0],
              r = t.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              u = h.toLowerCase(),
              f = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = Zt(i)[c];
            a[d] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[d] - p)),
              a[u] + p > s[d] && (t.offsets.popper[u] += a[u] + p - s[d]),
              (t.offsets.popper = Vt(t.offsets.popper));
            var m = a[u] + a[c] / 2 - p / 2,
              g = Nt(t.instance.popper),
              _ = parseFloat(g["margin" + h], 10),
              v = parseFloat(g["border" + h + "Width"], 10),
              y = m - t.offsets.popper[u] - _ - v;
            return (
              (y = Math.max(Math.min(s[c] - p, y), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (Kt((n = {}), u, Math.round(y)), Kt(n, f, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (p, m) {
            if (oe(p.instance.modifiers, "inner")) return p;
            if (p.flipped && p.placement === p.originalPlacement) return p;
            var g = Gt(
                p.instance.popper,
                p.instance.reference,
                m.padding,
                m.boundariesElement,
                p.positionFixed
              ),
              _ = p.placement.split("-")[0],
              v = te(_),
              y = p.placement.split("-")[1] || "",
              E = [];
            switch (m.behavior) {
              case ge:
                E = [_, v];
                break;
              case _e:
                E = me(_);
                break;
              case ve:
                E = me(_, !0);
                break;
              default:
                E = m.behavior;
            }
            return (
              E.forEach(function (t, e) {
                if (_ !== t || E.length === e + 1) return p;
                (_ = p.placement.split("-")[0]), (v = te(_));
                var n,
                  i = p.offsets.popper,
                  o = p.offsets.reference,
                  r = Math.floor,
                  s =
                    ("left" === _ && r(i.right) > r(o.left)) ||
                    ("right" === _ && r(i.left) < r(o.right)) ||
                    ("top" === _ && r(i.bottom) > r(o.top)) ||
                    ("bottom" === _ && r(i.top) < r(o.bottom)),
                  a = r(i.left) < r(g.left),
                  l = r(i.right) > r(g.right),
                  c = r(i.top) < r(g.top),
                  h = r(i.bottom) > r(g.bottom),
                  u =
                    ("left" === _ && a) ||
                    ("right" === _ && l) ||
                    ("top" === _ && c) ||
                    ("bottom" === _ && h),
                  f = -1 !== ["top", "bottom"].indexOf(_),
                  d =
                    !!m.flipVariations &&
                    ((f && "start" === y && a) ||
                      (f && "end" === y && l) ||
                      (!f && "start" === y && c) ||
                      (!f && "end" === y && h));
                (s || u || d) &&
                  ((p.flipped = !0),
                  (s || u) && (_ = E[e + 1]),
                  d &&
                    (y =
                      "end" === (n = y) ? "start" : "start" === n ? "end" : n),
                  (p.placement = _ + (y ? "-" + y : "")),
                  (p.offsets.popper = Qt(
                    {},
                    p.offsets.popper,
                    ee(p.instance.popper, p.offsets.reference, p.placement)
                  )),
                  (p = ie(p.instance.modifiers, p, "flip")));
              }),
              p
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
            return (
              (o[s ? "left" : "top"] =
                r[n] - (a ? o[s ? "width" : "height"] : 0)),
              (t.placement = te(e)),
              (t.offsets.popper = Vt(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!fe(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = ne(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = ne(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s,
              a,
              l,
              c,
              h,
              u,
              f,
              d,
              p,
              m,
              g,
              _,
              v,
              y,
              E = void 0 !== r ? r : e.gpuAcceleration,
              b = jt(t.instance.popper),
              w = Yt(b),
              C = {
                position: o.position,
              },
              T =
                ((s = t),
                (a = window.devicePixelRatio < 2 || !ue),
                (l = s.offsets),
                (c = l.popper),
                (h = l.reference),
                (u = Math.round),
                (f = Math.floor),
                (d = function (t) {
                  return t;
                }),
                (p = u(h.width)),
                (m = u(c.width)),
                (g = -1 !== ["left", "right"].indexOf(s.placement)),
                (_ = -1 !== s.placement.indexOf("-")),
                (y = a ? u : d),
                {
                  left: (v = a ? (g || _ || p % 2 == m % 2 ? u : f) : d)(
                    p % 2 == 1 && m % 2 == 1 && !_ && a ? c.left - 1 : c.left
                  ),
                  top: y(c.top),
                  bottom: y(c.bottom),
                  right: v(c.right),
                }),
              S = "bottom" === n ? "top" : "bottom",
              D = "right" === i ? "left" : "right",
              I = re("transform"),
              A = void 0,
              O = void 0;
            if (
              ((O =
                "bottom" === S
                  ? "HTML" === b.nodeName
                    ? -b.clientHeight + T.bottom
                    : -w.height + T.bottom
                  : T.top),
              (A =
                "right" === D
                  ? "HTML" === b.nodeName
                    ? -b.clientWidth + T.right
                    : -w.width + T.right
                  : T.left),
              E && I)
            )
              (C[I] = "translate3d(" + A + "px, " + O + "px, 0)"),
                (C[S] = 0),
                (C[D] = 0),
                (C.willChange = "transform");
            else {
              var N = "bottom" === S ? -1 : 1,
                k = "right" === D ? -1 : 1;
              (C[S] = O * N), (C[D] = A * k), (C.willChange = S + ", " + D);
            }
            var L = {
              "x-placement": t.placement,
            };
            return (
              (t.attributes = Qt({}, L, t.attributes)),
              (t.styles = Qt({}, C, t.styles)),
              (t.arrowStyles = Qt({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              he(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                he(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = Jt(o, e, t, n.positionFixed),
              s = $t(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", s),
              he(e, {
                position: n.positionFixed ? "fixed" : "absolute",
              }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    be = (function () {
      function r(t, e) {
        var n = this,
          i =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, r),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(n.update);
          }),
          (this.update = At(this.update.bind(this))),
          (this.options = Qt({}, r.Defaults, i)),
          (this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: [],
          }),
          (this.reference = t && t.jquery ? t[0] : t),
          (this.popper = e && e.jquery ? e[0] : e),
          (this.options.modifiers = {}),
          Object.keys(Qt({}, r.Defaults.modifiers, i.modifiers)).forEach(
            function (t) {
              n.options.modifiers[t] = Qt(
                {},
                r.Defaults.modifiers[t] || {},
                i.modifiers ? i.modifiers[t] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return Qt(
                {
                  name: t,
                },
                n.options.modifiers[t]
              );
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              Ot(t.onLoad) &&
              t.onLoad(n.reference, n.popper, n.options, t, n.state);
          }),
          this.update();
        var o = this.options.eventsEnabled;
        o && this.enableEventListeners(), (this.state.eventsEnabled = o);
      }
      return (
        qt(r, [
          {
            key: "update",
            value: function () {
              return function () {
                if (!this.state.isDestroyed) {
                  var t = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {},
                  };
                  (t.offsets.reference = Jt(
                    this.state,
                    this.popper,
                    this.reference,
                    this.options.positionFixed
                  )),
                    (t.placement = $t(
                      this.options.placement,
                      t.offsets.reference,
                      this.popper,
                      this.reference,
                      this.options.modifiers.flip.boundariesElement,
                      this.options.modifiers.flip.padding
                    )),
                    (t.originalPlacement = t.placement),
                    (t.positionFixed = this.options.positionFixed),
                    (t.offsets.popper = ee(
                      this.popper,
                      t.offsets.reference,
                      t.placement
                    )),
                    (t.offsets.popper.position = this.options.positionFixed
                      ? "fixed"
                      : "absolute"),
                    (t = ie(this.modifiers, t)),
                    this.state.isCreated
                      ? this.options.onUpdate(t)
                      : ((this.state.isCreated = !0), this.options.onCreate(t));
                }
              }.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return function () {
                return (
                  (this.state.isDestroyed = !0),
                  oe(this.modifiers, "applyStyle") &&
                    (this.popper.removeAttribute("x-placement"),
                    (this.popper.style.position = ""),
                    (this.popper.style.top = ""),
                    (this.popper.style.left = ""),
                    (this.popper.style.right = ""),
                    (this.popper.style.bottom = ""),
                    (this.popper.style.willChange = ""),
                    (this.popper.style[re("transform")] = "")),
                  this.disableEventListeners(),
                  this.options.removeOnDestroy &&
                    this.popper.parentNode.removeChild(this.popper),
                  this
                );
              }.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return function () {
                this.state.eventsEnabled ||
                  (this.state = ae(
                    this.reference,
                    this.options,
                    this.state,
                    this.scheduleUpdate
                  ));
              }.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return le.call(this);
            },
          },
        ]),
        r
      );
    })();
  (be.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (be.placements = de),
    (be.Defaults = Ee);
  var we = "dropdown",
    Ce = "bs.dropdown",
    Te = "." + Ce,
    Se = ".data-api",
    De = p.fn[we],
    Ie = new RegExp("38|40|27"),
    Ae = {
      HIDE: "hide" + Te,
      HIDDEN: "hidden" + Te,
      SHOW: "show" + Te,
      SHOWN: "shown" + Te,
      CLICK: "click" + Te,
      CLICK_DATA_API: "click" + Te + Se,
      KEYDOWN_DATA_API: "keydown" + Te + Se,
      KEYUP_DATA_API: "keyup" + Te + Se,
    },
    Oe = "disabled",
    Ne = "show",
    ke = "dropup",
    Le = "dropright",
    xe = "dropleft",
    Pe = "dropdown-menu-right",
    He = "position-static",
    je = '[data-toggle="dropdown"]',
    Re = ".dropdown form",
    Fe = ".dropdown-menu",
    Me = ".navbar-nav",
    We = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    Ue = "top-start",
    Be = "top-end",
    qe = "bottom-start",
    Ke = "bottom-end",
    Qe = "right-start",
    Ve = "left-start",
    Ye = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
    },
    ze = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
    },
    Xe = (function () {
      function c(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var t = c.prototype;
      return (
        (t.toggle = function () {
          if (!this._element.disabled && !p(this._element).hasClass(Oe)) {
            var t = c._getParentFromElement(this._element),
              e = p(this._menu).hasClass(Ne);
            if ((c._clearMenus(), !e)) {
              var n = {
                  relatedTarget: this._element,
                },
                i = p.Event(Ae.SHOW, n);
              if ((p(t).trigger(i), !i.isDefaultPrevented())) {
                if (!this._inNavbar) {
                  if ("undefined" == typeof be)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                    );
                  var o = this._element;
                  "parent" === this._config.reference
                    ? (o = t)
                    : m.isElement(this._config.reference) &&
                      ((o = this._config.reference),
                      "undefined" != typeof this._config.reference.jquery &&
                        (o = this._config.reference[0])),
                    "scrollParent" !== this._config.boundary &&
                      p(t).addClass(He),
                    (this._popper = new be(
                      o,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                "ontouchstart" in document.documentElement &&
                  0 === p(t).closest(Me).length &&
                  p(document.body).children().on("mouseover", null, p.noop),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  p(this._menu).toggleClass(Ne),
                  p(t).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, n));
              }
            }
          }
        }),
        (t.show = function () {
          if (
            !(
              this._element.disabled ||
              p(this._element).hasClass(Oe) ||
              p(this._menu).hasClass(Ne)
            )
          ) {
            var t = {
                relatedTarget: this._element,
              },
              e = p.Event(Ae.SHOW, t),
              n = c._getParentFromElement(this._element);
            p(n).trigger(e),
              e.isDefaultPrevented() ||
                (p(this._menu).toggleClass(Ne),
                p(n).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, t)));
          }
        }),
        (t.hide = function () {
          if (
            !this._element.disabled &&
            !p(this._element).hasClass(Oe) &&
            p(this._menu).hasClass(Ne)
          ) {
            var t = {
                relatedTarget: this._element,
              },
              e = p.Event(Ae.HIDE, t),
              n = c._getParentFromElement(this._element);
            p(n).trigger(e),
              e.isDefaultPrevented() ||
                (p(this._menu).toggleClass(Ne),
                p(n).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN, t)));
          }
        }),
        (t.dispose = function () {
          p.removeData(this._element, Ce),
            p(this._element).off(Te),
            (this._element = null),
            (this._menu = null) !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (t.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t._addEventListeners = function () {
          var e = this;
          p(this._element).on(Ae.CLICK, function (t) {
            t.preventDefault(), t.stopPropagation(), e.toggle();
          });
        }),
        (t._getConfig = function (t) {
          return (
            (t = l({}, this.constructor.Default, p(this._element).data(), t)),
            m.typeCheckConfig(we, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._getMenuElement = function () {
          if (!this._menu) {
            var t = c._getParentFromElement(this._element);
            t && (this._menu = t.querySelector(Fe));
          }
          return this._menu;
        }),
        (t._getPlacement = function () {
          var t = p(this._element.parentNode),
            e = qe;
          return (
            t.hasClass(ke)
              ? ((e = Ue), p(this._menu).hasClass(Pe) && (e = Be))
              : t.hasClass(Le)
              ? (e = Qe)
              : t.hasClass(xe)
              ? (e = Ve)
              : p(this._menu).hasClass(Pe) && (e = Ke),
            e
          );
        }),
        (t._detectNavbar = function () {
          return 0 < p(this._element).closest(".navbar").length;
        }),
        (t._getOffset = function () {
          var e = this,
            t = {};
          return (
            "function" == typeof this._config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets, e._element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset),
            t
          );
        }),
        (t._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: {
                enabled: this._config.flip,
              },
              preventOverflow: {
                boundariesElement: this._config.boundary,
              },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = {
                enabled: !1,
              }),
            t
          );
        }),
        (c._jQueryInterface = function (e) {
          return this.each(function () {
            var t = p(this).data(Ce);
            if (
              (t ||
                ((t = new c(this, "object" == typeof e ? e : null)),
                p(this).data(Ce, t)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof t[e])
                throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        (c._clearMenus = function (t) {
          if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
            for (
              var e = [].slice.call(document.querySelectorAll(je)),
                n = 0,
                i = e.length;
              n < i;
              n++
            ) {
              var o = c._getParentFromElement(e[n]),
                r = p(e[n]).data(Ce),
                s = {
                  relatedTarget: e[n],
                };
              if ((t && "click" === t.type && (s.clickEvent = t), r)) {
                var a = r._menu;
                if (
                  p(o).hasClass(Ne) &&
                  !(
                    t &&
                    (("click" === t.type &&
                      /input|textarea/i.test(t.target.tagName)) ||
                      ("keyup" === t.type && 9 === t.which)) &&
                    p.contains(o, t.target)
                  )
                ) {
                  var l = p.Event(Ae.HIDE, s);
                  p(o).trigger(l),
                    l.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        p(document.body)
                          .children()
                          .off("mouseover", null, p.noop),
                      e[n].setAttribute("aria-expanded", "false"),
                      p(a).removeClass(Ne),
                      p(o).removeClass(Ne).trigger(p.Event(Ae.HIDDEN, s)));
                }
              }
            }
        }),
        (c._getParentFromElement = function (t) {
          var e,
            n = m.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (c._dataApiKeydownHandler = function (t) {
          if (
            (/input|textarea/i.test(t.target.tagName)
              ? !(
                  32 === t.which ||
                  (27 !== t.which &&
                    ((40 !== t.which && 38 !== t.which) ||
                      p(t.target).closest(Fe).length))
                )
              : Ie.test(t.which)) &&
            (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !p(this).hasClass(Oe))
          ) {
            var e = c._getParentFromElement(this),
              n = p(e).hasClass(Ne);
            if (n && (!n || (27 !== t.which && 32 !== t.which))) {
              var i = [].slice.call(e.querySelectorAll(We));
              if (0 !== i.length) {
                var o = i.indexOf(t.target);
                38 === t.which && 0 < o && o--,
                  40 === t.which && o < i.length - 1 && o++,
                  o < 0 && (o = 0),
                  i[o].focus();
              }
            } else {
              if (27 === t.which) {
                var r = e.querySelector(je);
                p(r).trigger("focus");
              }
              p(this).trigger("click");
            }
          }
        }),
        s(c, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return Ye;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ze;
            },
          },
        ]),
        c
      );
    })();
  p(document)
    .on(Ae.KEYDOWN_DATA_API, je, Xe._dataApiKeydownHandler)
    .on(Ae.KEYDOWN_DATA_API, Fe, Xe._dataApiKeydownHandler)
    .on(Ae.CLICK_DATA_API + " " + Ae.KEYUP_DATA_API, Xe._clearMenus)
    .on(Ae.CLICK_DATA_API, je, function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        Xe._jQueryInterface.call(p(this), "toggle");
    })
    .on(Ae.CLICK_DATA_API, Re, function (t) {
      t.stopPropagation();
    }),
    (p.fn[we] = Xe._jQueryInterface),
    (p.fn[we].Constructor = Xe),
    (p.fn[we].noConflict = function () {
      return (p.fn[we] = De), Xe._jQueryInterface;
    });
  var Ge = "modal",
    $e = "bs.modal",
    Je = "." + $e,
    Ze = p.fn[Ge],
    tn = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0,
    },
    en = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    nn = {
      HIDE: "hide" + Je,
      HIDDEN: "hidden" + Je,
      SHOW: "show" + Je,
      SHOWN: "shown" + Je,
      FOCUSIN: "focusin" + Je,
      RESIZE: "resize" + Je,
      CLICK_DISMISS: "click.dismiss" + Je,
      KEYDOWN_DISMISS: "keydown.dismiss" + Je,
      MOUSEUP_DISMISS: "mouseup.dismiss" + Je,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + Je,
      CLICK_DATA_API: "click" + Je + ".data-api",
    },
    on = "modal-dialog-scrollable",
    rn = "modal-scrollbar-measure",
    sn = "modal-backdrop",
    an = "modal-open",
    ln = "fade",
    cn = "show",
    hn = ".modal-dialog",
    un = ".modal-body",
    fn = '[data-toggle="modal"]',
    dn = '[data-dismiss="modal"]',
    pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    mn = ".sticky-top",
    gn = (function () {
      function o(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(hn)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var t = o.prototype;
      return (
        (t.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (t.show = function (t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            p(this._element).hasClass(ln) && (this._isTransitioning = !0);
            var n = p.Event(nn.SHOW, {
              relatedTarget: t,
            });
            p(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p(this._element).on(nn.CLICK_DISMISS, dn, function (t) {
                  return e.hide(t);
                }),
                p(this._dialog).on(nn.MOUSEDOWN_DISMISS, function () {
                  p(e._element).one(nn.MOUSEUP_DISMISS, function (t) {
                    p(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return e._showElement(t);
                }));
          }
        }),
        (t.hide = function (t) {
          var e = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = p.Event(nn.HIDE);
            if (
              (p(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var i = p(this._element).hasClass(ln);
              if (
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p(document).off(nn.FOCUSIN),
                p(this._element).removeClass(cn),
                p(this._element).off(nn.CLICK_DISMISS),
                p(this._dialog).off(nn.MOUSEDOWN_DISMISS),
                i)
              ) {
                var o = m.getTransitionDurationFromElement(this._element);
                p(this._element)
                  .one(m.TRANSITION_END, function (t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(o);
              } else this._hideModal();
            }
          }
        }),
        (t.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return p(t).off(Je);
          }),
            p(document).off(nn.FOCUSIN),
            p.removeData(this._element, $e),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (t.handleUpdate = function () {
          this._adjustDialog();
        }),
        (t._getConfig = function (t) {
          return (t = l({}, tn, t)), m.typeCheckConfig(Ge, t, en), t;
        }),
        (t._showElement = function (t) {
          var e = this,
            n = p(this._element).hasClass(ln);
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            p(this._dialog).hasClass(on)
              ? (this._dialog.querySelector(un).scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && m.reflow(this._element),
            p(this._element).addClass(cn),
            this._config.focus && this._enforceFocus();
          var i = p.Event(nn.SHOWN, {
              relatedTarget: t,
            }),
            o = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                p(e._element).trigger(i);
            };
          if (n) {
            var r = m.getTransitionDurationFromElement(this._dialog);
            p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(r);
          } else o();
        }),
        (t._enforceFocus = function () {
          var e = this;
          p(document)
            .off(nn.FOCUSIN)
            .on(nn.FOCUSIN, function (t) {
              document !== t.target &&
                e._element !== t.target &&
                0 === p(e._element).has(t.target).length &&
                e._element.focus();
            });
        }),
        (t._setEscapeEvent = function () {
          var e = this;
          this._isShown && this._config.keyboard
            ? p(this._element).on(nn.KEYDOWN_DISMISS, function (t) {
                27 === t.which && (t.preventDefault(), e.hide());
              })
            : this._isShown || p(this._element).off(nn.KEYDOWN_DISMISS);
        }),
        (t._setResizeEvent = function () {
          var e = this;
          this._isShown
            ? p(window).on(nn.RESIZE, function (t) {
                return e.handleUpdate(t);
              })
            : p(window).off(nn.RESIZE);
        }),
        (t._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              p(document.body).removeClass(an),
                t._resetAdjustments(),
                t._resetScrollbar(),
                p(t._element).trigger(nn.HIDDEN);
            });
        }),
        (t._removeBackdrop = function () {
          this._backdrop &&
            (p(this._backdrop).remove(), (this._backdrop = null));
        }),
        (t._showBackdrop = function (t) {
          var e = this,
            n = p(this._element).hasClass(ln) ? ln : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = sn),
              n && this._backdrop.classList.add(n),
              p(this._backdrop).appendTo(document.body),
              p(this._element).on(nn.CLICK_DISMISS, function (t) {
                e._ignoreBackdropClick
                  ? (e._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ("static" === e._config.backdrop
                      ? e._element.focus()
                      : e.hide());
              }),
              n && m.reflow(this._backdrop),
              p(this._backdrop).addClass(cn),
              !t)
            )
              return;
            if (!n) return void t();
            var i = m.getTransitionDurationFromElement(this._backdrop);
            p(this._backdrop).one(m.TRANSITION_END, t).emulateTransitionEnd(i);
          } else if (!this._isShown && this._backdrop) {
            p(this._backdrop).removeClass(cn);
            var o = function () {
              e._removeBackdrop(), t && t();
            };
            if (p(this._element).hasClass(ln)) {
              var r = m.getTransitionDurationFromElement(this._backdrop);
              p(this._backdrop)
                .one(m.TRANSITION_END, o)
                .emulateTransitionEnd(r);
            } else o();
          } else t && t();
        }),
        (t._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (t._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (t._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (t._setScrollbar = function () {
          var o = this;
          if (this._isBodyOverflowing) {
            var t = [].slice.call(document.querySelectorAll(pn)),
              e = [].slice.call(document.querySelectorAll(mn));
            p(t).each(function (t, e) {
              var n = e.style.paddingRight,
                i = p(e).css("padding-right");
              p(e)
                .data("padding-right", n)
                .css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
            }),
              p(e).each(function (t, e) {
                var n = e.style.marginRight,
                  i = p(e).css("margin-right");
                p(e)
                  .data("margin-right", n)
                  .css(
                    "margin-right",
                    parseFloat(i) - o._scrollbarWidth + "px"
                  );
              });
            var n = document.body.style.paddingRight,
              i = p(document.body).css("padding-right");
            p(document.body)
              .data("padding-right", n)
              .css(
                "padding-right",
                parseFloat(i) + this._scrollbarWidth + "px"
              );
          }
          p(document.body).addClass(an);
        }),
        (t._resetScrollbar = function () {
          var t = [].slice.call(document.querySelectorAll(pn));
          p(t).each(function (t, e) {
            var n = p(e).data("padding-right");
            p(e).removeData("padding-right"), (e.style.paddingRight = n || "");
          });
          var e = [].slice.call(document.querySelectorAll("" + mn));
          p(e).each(function (t, e) {
            var n = p(e).data("margin-right");
            "undefined" != typeof n &&
              p(e).css("margin-right", n).removeData("margin-right");
          });
          var n = p(document.body).data("padding-right");
          p(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = n || "");
        }),
        (t._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = rn), document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (o._jQueryInterface = function (n, i) {
          return this.each(function () {
            var t = p(this).data($e),
              e = l({}, tn, p(this).data(), "object" == typeof n && n ? n : {});
            if (
              (t || ((t = new o(this, e)), p(this).data($e, t)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n](i);
            } else e.show && t.show(i);
          });
        }),
        s(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return tn;
            },
          },
        ]),
        o
      );
    })();
  p(document).on(nn.CLICK_DATA_API, fn, function (t) {
    var e,
      n = this,
      i = m.getSelectorFromElement(this);
    i && (e = document.querySelector(i));
    var o = p(e).data($e) ? "toggle" : l({}, p(e).data(), p(this).data());
    ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
    var r = p(e).one(nn.SHOW, function (t) {
      t.isDefaultPrevented() ||
        r.one(nn.HIDDEN, function () {
          p(n).is(":visible") && n.focus();
        });
    });
    gn._jQueryInterface.call(p(e), o, this);
  }),
    (p.fn[Ge] = gn._jQueryInterface),
    (p.fn[Ge].Constructor = gn),
    (p.fn[Ge].noConflict = function () {
      return (p.fn[Ge] = Ze), gn._jQueryInterface;
    });
  var _n = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    vn = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    yn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    En =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function bn(t, s, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);
    for (
      var n = new window.DOMParser().parseFromString(t, "text/html"),
        a = Object.keys(s),
        l = [].slice.call(n.body.querySelectorAll("*")),
        i = function (t, e) {
          var n = l[t],
            i = n.nodeName.toLowerCase();
          if (-1 === a.indexOf(n.nodeName.toLowerCase()))
            return n.parentNode.removeChild(n), "continue";
          var o = [].slice.call(n.attributes),
            r = [].concat(s["*"] || [], s[i] || []);
          o.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === _n.indexOf(n) ||
                  Boolean(t.nodeValue.match(yn) || t.nodeValue.match(En))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, r) || n.removeAttribute(t.nodeName);
          });
        },
        o = 0,
        r = l.length;
      o < r;
      o++
    )
      i(o);
    return n.body.innerHTML;
  }
  var wn = "tooltip",
    Cn = "bs.tooltip",
    Tn = "." + Cn,
    Sn = p.fn[wn],
    Dn = "bs-tooltip",
    In = new RegExp("(^|\\s)" + Dn + "\\S+", "g"),
    An = ["sanitize", "whiteList", "sanitizeFn"],
    On = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
    },
    Nn = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    kn = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: vn,
    },
    Ln = "show",
    xn = "out",
    Pn = {
      HIDE: "hide" + Tn,
      HIDDEN: "hidden" + Tn,
      SHOW: "show" + Tn,
      SHOWN: "shown" + Tn,
      INSERTED: "inserted" + Tn,
      CLICK: "click" + Tn,
      FOCUSIN: "focusin" + Tn,
      FOCUSOUT: "focusout" + Tn,
      MOUSEENTER: "mouseenter" + Tn,
      MOUSELEAVE: "mouseleave" + Tn,
    },
    Hn = "fade",
    jn = "show",
    Rn = ".tooltip-inner",
    Fn = ".arrow",
    Mn = "hover",
    Wn = "focus",
    Un = "click",
    Bn = "manual",
    qn = (function () {
      function i(t, e) {
        if ("undefined" == typeof be)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var t = i.prototype;
      return (
        (t.enable = function () {
          this._isEnabled = !0;
        }),
        (t.disable = function () {
          this._isEnabled = !1;
        }),
        (t.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (t.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = p(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                p(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (p(this.getTipElement()).hasClass(jn))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (t.dispose = function () {
          clearTimeout(this._timeout),
            p.removeData(this.element, this.constructor.DATA_KEY),
            p(this.element).off(this.constructor.EVENT_KEY),
            p(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && p(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null) !== this._popper &&
              this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (t.show = function () {
          var e = this;
          if ("none" === p(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var t = p.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            p(this.element).trigger(t);
            var n = m.findShadowRoot(this.element),
              i = p.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (t.isDefaultPrevented() || !i) return;
            var o = this.getTipElement(),
              r = m.getUID(this.constructor.NAME);
            o.setAttribute("id", r),
              this.element.setAttribute("aria-describedby", r),
              this.setContent(),
              this.config.animation && p(o).addClass(Hn);
            var s =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement,
              a = this._getAttachment(s);
            this.addAttachmentClass(a);
            var l = this._getContainer();
            p(o).data(this.constructor.DATA_KEY, this),
              p.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || p(o).appendTo(l),
              p(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new be(this.element, o, {
                placement: a,
                modifiers: {
                  offset: this._getOffset(),
                  flip: {
                    behavior: this.config.fallbackPlacement,
                  },
                  arrow: {
                    element: Fn,
                  },
                  preventOverflow: {
                    boundariesElement: this.config.boundary,
                  },
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
                onUpdate: function (t) {
                  return e._handlePopperPlacementChange(t);
                },
              })),
              p(o).addClass(jn),
              "ontouchstart" in document.documentElement &&
                p(document.body).children().on("mouseover", null, p.noop);
            var c = function () {
              e.config.animation && e._fixTransition();
              var t = e._hoverState;
              (e._hoverState = null),
                p(e.element).trigger(e.constructor.Event.SHOWN),
                t === xn && e._leave(null, e);
            };
            if (p(this.tip).hasClass(Hn)) {
              var h = m.getTransitionDurationFromElement(this.tip);
              p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h);
            } else c();
          }
        }),
        (t.hide = function (t) {
          var e = this,
            n = this.getTipElement(),
            i = p.Event(this.constructor.Event.HIDE),
            o = function () {
              e._hoverState !== Ln &&
                n.parentNode &&
                n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                p(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t();
            };
          if ((p(this.element).trigger(i), !i.isDefaultPrevented())) {
            if (
              (p(n).removeClass(jn),
              "ontouchstart" in document.documentElement &&
                p(document.body).children().off("mouseover", null, p.noop),
              (this._activeTrigger[Un] = !1),
              (this._activeTrigger[Wn] = !1),
              (this._activeTrigger[Mn] = !1),
              p(this.tip).hasClass(Hn))
            ) {
              var r = m.getTransitionDurationFromElement(n);
              p(n).one(m.TRANSITION_END, o).emulateTransitionEnd(r);
            } else o();
            this._hoverState = "";
          }
        }),
        (t.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (t.addAttachmentClass = function (t) {
          p(this.getTipElement()).addClass(Dn + "-" + t);
        }),
        (t.getTipElement = function () {
          return (this.tip = this.tip || p(this.config.template)[0]), this.tip;
        }),
        (t.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(p(t.querySelectorAll(Rn)), this.getTitle()),
            p(t).removeClass(Hn + " " + jn);
        }),
        (t.setElementContent = function (t, e) {
          "object" != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = bn(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? p(e).parent().is(t) || t.empty().append(e)
            : t.text(p(e).text());
        }),
        (t.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (t._getOffset = function () {
          var e = this,
            t = {};
          return (
            "function" == typeof this.config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e.config.offset(t.offsets, e.element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this.config.offset),
            t
          );
        }),
        (t._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : m.isElement(this.config.container)
            ? p(this.config.container)
            : p(document).find(this.config.container);
        }),
        (t._getAttachment = function (t) {
          return Nn[t.toUpperCase()];
        }),
        (t._setListeners = function () {
          var i = this;
          this.config.trigger.split(" ").forEach(function (t) {
            if ("click" === t)
              p(i.element).on(
                i.constructor.Event.CLICK,
                i.config.selector,
                function (t) {
                  return i.toggle(t);
                }
              );
            else if (t !== Bn) {
              var e =
                  t === Mn
                    ? i.constructor.Event.MOUSEENTER
                    : i.constructor.Event.FOCUSIN,
                n =
                  t === Mn
                    ? i.constructor.Event.MOUSELEAVE
                    : i.constructor.Event.FOCUSOUT;
              p(i.element)
                .on(e, i.config.selector, function (t) {
                  return i._enter(t);
                })
                .on(n, i.config.selector, function (t) {
                  return i._leave(t);
                });
            }
          }),
            p(this.element)
              .closest(".modal")
              .on("hide.bs.modal", function () {
                i.element && i.hide();
              }),
            this.config.selector
              ? (this.config = l({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (t._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (t._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || p(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            p(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? Wn : Mn] = !0),
            p(e.getTipElement()).hasClass(jn) || e._hoverState === Ln
              ? (e._hoverState = Ln)
              : (clearTimeout(e._timeout),
                (e._hoverState = Ln),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === Ln && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (t._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || p(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            p(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? Wn : Mn] = !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = xn),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    e._hoverState === xn && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (t._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (t._getConfig = function (t) {
          var e = p(this.element).data();
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== An.indexOf(t) && delete e[t];
            }),
            "number" ==
              typeof (t = l(
                {},
                this.constructor.Default,
                e,
                "object" == typeof t && t ? t : {}
              )).delay &&
              (t.delay = {
                show: t.delay,
                hide: t.delay,
              }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            m.typeCheckConfig(wn, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = bn(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (t._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (t._cleanTipClass = function () {
          var t = p(this.getTipElement()),
            e = t.attr("class").match(In);
          null !== e && e.length && t.removeClass(e.join(""));
        }),
        (t._handlePopperPlacementChange = function (t) {
          var e = t.instance;
          (this.tip = e.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (t._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (p(t).removeClass(Hn),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p(this).data(Cn),
              e = "object" == typeof n && n;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), p(this).data(Cn, t)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return kn;
            },
          },
          {
            key: "NAME",
            get: function () {
              return wn;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return Cn;
            },
          },
          {
            key: "Event",
            get: function () {
              return Pn;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return Tn;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return On;
            },
          },
        ]),
        i
      );
    })();
  (p.fn[wn] = qn._jQueryInterface),
    (p.fn[wn].Constructor = qn),
    (p.fn[wn].noConflict = function () {
      return (p.fn[wn] = Sn), qn._jQueryInterface;
    });
  var Kn = "popover",
    Qn = "bs.popover",
    Vn = "." + Qn,
    Yn = p.fn[Kn],
    zn = "bs-popover",
    Xn = new RegExp("(^|\\s)" + zn + "\\S+", "g"),
    Gn = l({}, qn.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    $n = l({}, qn.DefaultType, {
      content: "(string|element|function)",
    }),
    Jn = "fade",
    Zn = "show",
    ti = ".popover-header",
    ei = ".popover-body",
    ni = {
      HIDE: "hide" + Vn,
      HIDDEN: "hidden" + Vn,
      SHOW: "show" + Vn,
      SHOWN: "shown" + Vn,
      INSERTED: "inserted" + Vn,
      CLICK: "click" + Vn,
      FOCUSIN: "focusin" + Vn,
      FOCUSOUT: "focusout" + Vn,
      MOUSEENTER: "mouseenter" + Vn,
      MOUSELEAVE: "mouseleave" + Vn,
    },
    ii = (function (t) {
      var e, n;
      function i() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        ((e.prototype.constructor = e).__proto__ = n);
      var o = i.prototype;
      return (
        (o.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (o.addAttachmentClass = function (t) {
          p(this.getTipElement()).addClass(zn + "-" + t);
        }),
        (o.getTipElement = function () {
          return (this.tip = this.tip || p(this.config.template)[0]), this.tip;
        }),
        (o.setContent = function () {
          var t = p(this.getTipElement());
          this.setElementContent(t.find(ti), this.getTitle());
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(ei), e),
            t.removeClass(Jn + " " + Zn);
        }),
        (o._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (o._cleanTipClass = function () {
          var t = p(this.getTipElement()),
            e = t.attr("class").match(Xn);
          null !== e && 0 < e.length && t.removeClass(e.join(""));
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p(this).data(Qn),
              e = "object" == typeof n ? n : null;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), p(this).data(Qn, t)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return Gn;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Kn;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return Qn;
            },
          },
          {
            key: "Event",
            get: function () {
              return ni;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return Vn;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return $n;
            },
          },
        ]),
        i
      );
    })(qn);
  (p.fn[Kn] = ii._jQueryInterface),
    (p.fn[Kn].Constructor = ii),
    (p.fn[Kn].noConflict = function () {
      return (p.fn[Kn] = Yn), ii._jQueryInterface;
    });
  var oi = "scrollspy",
    ri = "bs.scrollspy",
    si = "." + ri,
    ai = p.fn[oi],
    li = {
      offset: 10,
      method: "auto",
      target: "",
    },
    ci = {
      offset: "number",
      method: "string",
      target: "(string|element)",
    },
    hi = {
      ACTIVATE: "activate" + si,
      SCROLL: "scroll" + si,
      LOAD_DATA_API: "load" + si + ".data-api",
    },
    ui = "dropdown-item",
    fi = "active",
    di = '[data-spy="scroll"]',
    pi = ".nav, .list-group",
    mi = ".nav-link",
    gi = ".nav-item",
    _i = ".list-group-item",
    vi = ".dropdown",
    yi = ".dropdown-item",
    Ei = ".dropdown-toggle",
    bi = "offset",
    wi = "position",
    Ci = (function () {
      function n(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            " " +
            mi +
            "," +
            this._config.target +
            " " +
            _i +
            "," +
            this._config.target +
            " " +
            yi),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          p(this._scrollElement).on(hi.SCROLL, function (t) {
            return n._process(t);
          }),
          this.refresh(),
          this._process();
      }
      var t = n.prototype;
      return (
        (t.refresh = function () {
          var e = this,
            t = this._scrollElement === this._scrollElement.window ? bi : wi,
            o = "auto" === this._config.method ? t : this._config.method,
            r = o === wi ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var e,
                  n = m.getSelectorFromElement(t);
                if ((n && (e = document.querySelector(n)), e)) {
                  var i = e.getBoundingClientRect();
                  if (i.width || i.height) return [p(e)[o]().top + r, n];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
              });
        }),
        (t.dispose = function () {
          p.removeData(this._element, ri),
            p(this._scrollElement).off(si),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (t._getConfig = function (t) {
          if (
            "string" !=
            typeof (t = l({}, li, "object" == typeof t && t ? t : {})).target
          ) {
            var e = p(t.target).attr("id");
            e || ((e = m.getUID(oi)), p(t.target).attr("id", e)),
              (t.target = "#" + e);
          }
          return m.typeCheckConfig(oi, t, ci), t;
        }),
        (t._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (t._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (t._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (t._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (t._activate = function (e) {
          (this._activeTarget = e), this._clear();
          var t = this._selector.split(",").map(function (t) {
              return (
                t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
              );
            }),
            n = p([].slice.call(document.querySelectorAll(t.join(","))));
          n.hasClass(ui)
            ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi))
            : (n.addClass(fi),
              n
                .parents(pi)
                .prev(mi + ", " + _i)
                .addClass(fi),
              n.parents(pi).prev(gi).children(mi).addClass(fi)),
            p(this._scrollElement).trigger(hi.ACTIVATE, {
              relatedTarget: e,
            });
        }),
        (t._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains(fi);
            })
            .forEach(function (t) {
              return t.classList.remove(fi);
            });
        }),
        (n._jQueryInterface = function (e) {
          return this.each(function () {
            var t = p(this).data(ri);
            if (
              (t ||
                ((t = new n(this, "object" == typeof e && e)),
                p(this).data(ri, t)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof t[e])
                throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        s(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return li;
            },
          },
        ]),
        n
      );
    })();
  p(window).on(hi.LOAD_DATA_API, function () {
    for (
      var t = [].slice.call(document.querySelectorAll(di)), e = t.length;
      e--;

    ) {
      var n = p(t[e]);
      Ci._jQueryInterface.call(n, n.data());
    }
  }),
    (p.fn[oi] = Ci._jQueryInterface),
    (p.fn[oi].Constructor = Ci),
    (p.fn[oi].noConflict = function () {
      return (p.fn[oi] = ai), Ci._jQueryInterface;
    });
  var Ti = "bs.tab",
    Si = "." + Ti,
    Di = p.fn.tab,
    Ii = {
      HIDE: "hide" + Si,
      HIDDEN: "hidden" + Si,
      SHOW: "show" + Si,
      SHOWN: "shown" + Si,
      CLICK_DATA_API: "click" + Si + ".data-api",
    },
    Ai = "dropdown-menu",
    Oi = "active",
    Ni = "disabled",
    ki = "fade",
    Li = "show",
    xi = ".dropdown",
    Pi = ".nav, .list-group",
    Hi = ".active",
    ji = "> li > .active",
    Ri = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    Fi = ".dropdown-toggle",
    Mi = "> .dropdown-menu .active",
    Wi = (function () {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.show = function () {
          var n = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                p(this._element).hasClass(Oi)) ||
              p(this._element).hasClass(Ni)
            )
          ) {
            var t,
              i,
              e = p(this._element).closest(Pi)[0],
              o = m.getSelectorFromElement(this._element);
            if (e) {
              var r = "UL" === e.nodeName || "OL" === e.nodeName ? ji : Hi;
              i = (i = p.makeArray(p(e).find(r)))[i.length - 1];
            }
            var s = p.Event(Ii.HIDE, {
                relatedTarget: this._element,
              }),
              a = p.Event(Ii.SHOW, {
                relatedTarget: i,
              });
            if (
              (i && p(i).trigger(s),
              p(this._element).trigger(a),
              !a.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              o && (t = document.querySelector(o)),
                this._activate(this._element, e);
              var l = function () {
                var t = p.Event(Ii.HIDDEN, {
                    relatedTarget: n._element,
                  }),
                  e = p.Event(Ii.SHOWN, {
                    relatedTarget: i,
                  });
                p(i).trigger(t), p(n._element).trigger(e);
              };
              t ? this._activate(t, t.parentNode, l) : l();
            }
          }
        }),
        (t.dispose = function () {
          p.removeData(this._element, Ti), (this._element = null);
        }),
        (t._activate = function (t, e, n) {
          var i = this,
            o = (
              !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                ? p(e).children(Hi)
                : p(e).find(ji)
            )[0],
            r = n && o && p(o).hasClass(ki),
            s = function () {
              return i._transitionComplete(t, o, n);
            };
          if (o && r) {
            var a = m.getTransitionDurationFromElement(o);
            p(o)
              .removeClass(Li)
              .one(m.TRANSITION_END, s)
              .emulateTransitionEnd(a);
          } else s();
        }),
        (t._transitionComplete = function (t, e, n) {
          if (e) {
            p(e).removeClass(Oi);
            var i = p(e.parentNode).find(Mi)[0];
            i && p(i).removeClass(Oi),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !1);
          }
          if (
            (p(t).addClass(Oi),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            m.reflow(t),
            t.classList.contains(ki) && t.classList.add(Li),
            t.parentNode && p(t.parentNode).hasClass(Ai))
          ) {
            var o = p(t).closest(xi)[0];
            if (o) {
              var r = [].slice.call(o.querySelectorAll(Fi));
              p(r).addClass(Oi);
            }
            t.setAttribute("aria-expanded", !0);
          }
          n && n();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p(this),
              e = t.data(Ti);
            if (
              (e || ((e = new i(this)), t.data(Ti, e)), "string" == typeof n)
            ) {
              if ("undefined" == typeof e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
        ]),
        i
      );
    })();
  p(document).on(Ii.CLICK_DATA_API, Ri, function (t) {
    t.preventDefault(), Wi._jQueryInterface.call(p(this), "show");
  }),
    (p.fn.tab = Wi._jQueryInterface),
    (p.fn.tab.Constructor = Wi),
    (p.fn.tab.noConflict = function () {
      return (p.fn.tab = Di), Wi._jQueryInterface;
    });
  var Ui = "toast",
    Bi = "bs.toast",
    qi = "." + Bi,
    Ki = p.fn[Ui],
    Qi = {
      CLICK_DISMISS: "click.dismiss" + qi,
      HIDE: "hide" + qi,
      HIDDEN: "hidden" + qi,
      SHOW: "show" + qi,
      SHOWN: "shown" + qi,
    },
    Vi = "fade",
    Yi = "hide",
    zi = "show",
    Xi = "showing",
    Gi = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number",
    },
    $i = {
      animation: !0,
      autohide: !0,
      delay: 500,
    },
    Ji = '[data-dismiss="toast"]',
    Zi = (function () {
      function i(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var t = i.prototype;
      return (
        (t.show = function () {
          var t = this;
          p(this._element).trigger(Qi.SHOW),
            this._config.animation && this._element.classList.add(Vi);
          var e = function () {
            t._element.classList.remove(Xi),
              t._element.classList.add(zi),
              p(t._element).trigger(Qi.SHOWN),
              t._config.autohide && t.hide();
          };
          if (
            (this._element.classList.remove(Yi),
            this._element.classList.add(Xi),
            this._config.animation)
          ) {
            var n = m.getTransitionDurationFromElement(this._element);
            p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n);
          } else e();
        }),
        (t.hide = function (t) {
          var e = this;
          this._element.classList.contains(zi) &&
            (p(this._element).trigger(Qi.HIDE),
            t
              ? this._close()
              : (this._timeout = setTimeout(function () {
                  e._close();
                }, this._config.delay)));
        }),
        (t.dispose = function () {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains(zi) &&
              this._element.classList.remove(zi),
            p(this._element).off(Qi.CLICK_DISMISS),
            p.removeData(this._element, Bi),
            (this._element = null),
            (this._config = null);
        }),
        (t._getConfig = function (t) {
          return (
            (t = l(
              {},
              $i,
              p(this._element).data(),
              "object" == typeof t && t ? t : {}
            )),
            m.typeCheckConfig(Ui, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._setListeners = function () {
          var t = this;
          p(this._element).on(Qi.CLICK_DISMISS, Ji, function () {
            return t.hide(!0);
          });
        }),
        (t._close = function () {
          var t = this,
            e = function () {
              t._element.classList.add(Yi), p(t._element).trigger(Qi.HIDDEN);
            };
          if ((this._element.classList.remove(zi), this._config.animation)) {
            var n = m.getTransitionDurationFromElement(this._element);
            p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n);
          } else e();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p(this),
              e = t.data(Bi);
            if (
              (e ||
                ((e = new i(this, "object" == typeof n && n)), t.data(Bi, e)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n](this);
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Gi;
            },
          },
          {
            key: "Default",
            get: function () {
              return $i;
            },
          },
        ]),
        i
      );
    })();
  (p.fn[Ui] = Zi._jQueryInterface),
    (p.fn[Ui].Constructor = Zi),
    (p.fn[Ui].noConflict = function () {
      return (p.fn[Ui] = Ki), Zi._jQueryInterface;
    }),
    (function () {
      if ("undefined" == typeof p)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = p.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        4 <= t[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(),
    (t.Util = m),
    (t.Alert = g),
    (t.Button = k),
    (t.Carousel = at),
    (t.Collapse = Ct),
    (t.Dropdown = Xe),
    (t.Modal = gn),
    (t.Popover = ii),
    (t.Scrollspy = Ci),
    (t.Tab = Wi),
    (t.Toast = Zi),
    (t.Tooltip = qn),
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
});
//# sourceMappingURL=bootstrap.bundle.min.js.map

// Bootsrap main end

// image loader start

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = {
      1: !0,
      9: !0,
      11: !0,
    };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });

// image loader end

// Isotope start

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return o.indexOf(e) == -1 && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return (o[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return o != -1 && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n],
              r = o && o[s];
            r && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        (r = 200 == Math.round(t(n.width))),
          (s.isBoxSizeOuter = r),
          i.removeChild(e);
      }
    }
    function s(e) {
      if (
        (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = o(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          l < h;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (I ? 0 : y + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + z)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var o = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? o.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = {
          x: 0,
          y: 0,
        }),
        this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (o.prototype = Object.create(t.prototype));
    (d.constructor = o),
      (d._create = function () {
        (this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {},
        }),
          this.css({
            position: "absolute",
          });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        o.indexOf("%") != -1 && (s = (s / 100) * a.width),
          n.indexOf("%") != -1 && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), n && !this.isTransitioning))
          return void this.layoutPosition();
        var s = t - i,
          r = e - o,
          a = {};
        (a.transform = this.getTranslate(s, r)),
          this.transition({
            to: a,
            onTransitionEnd: {
              transform: this.layoutPosition,
            },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = o ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + n(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = {
      "-webkit-transform": "transform",
    };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({
            display: "",
          }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden,
          this.css({
            display: "",
          });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0),
          this.css({
            display: "",
          });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({
            display: "none",
          }),
          this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      o
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e);
      var n = ++l;
      (this.element.outlayerGUID = n), (f[n] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: {
          position: "relative",
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)",
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)",
        },
      });
    var c = s.prototype;
    o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function () {
        return {
          x: 0,
          y: 0,
        };
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          r++, r == s && i();
        }
        var n = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (c.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              o.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (c.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = {
      ms: 1,
      s: 1e3,
    };
    return (s.Item = n), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments),
          this.css({
            display: "",
          });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype,
      n = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            s = this[n](o, t),
            r = {
              x: this.columnWidth * s.col,
              y: s.y,
            },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return {
          col: e.indexOf(i),
          y: i,
        };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
          {
            col: i,
            y: this._getColGroupY(i, t),
          }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft"),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (
          var h = this._getOption("originTop"),
            d = (h ? o.top : o.bottom) + i.outerHeight,
            l = a;
          l <= u;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
          height: this.maxY,
        };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0,
      };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = {
          x: this.x,
          y: this.y,
        };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return {
          height: this.maxY,
        };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0,
      }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (
          (this.y += t.size.outerHeight),
          {
            x: e,
            y: i,
          }
        );
      }),
      (i._getContainerSize = function () {
        return {
          height: this.y,
        };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return {
          matches: i,
          needReveal: o,
          needHide: n,
        };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });

// Isotope end

// Animated modal start

!(function (a) {
  a.fn.animatedModal = function (n) {
    var t = a(this),
      o = t.attr("href").replace("#", ""),
      i = a("#" + o).find("[data-modal-close]");
    var e = a.extend(
        {
          modalTarget: o,
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0px",
          left: "0px",
          zIndexIn: "9999",
          zIndexOut: "-9999",
          opacityIn: "1",
          opacityOut: "0",
          animatedIn: "fadeIn",
          animatedOut: "fadeOut",
          animationDuration: ".2s",
          beforeOpen: function () {
            a("html").css("overflowY", "scroll"),
              a("html").add(i).css("marginRight", "0"),
              a("#" + o).css("overflowY", "hidden");
          },
          afterOpen: function () {
            var n, t;
            a("html").css("overflowY", "hidden"),
              a("html")
                .add(i)
                .css(
                  "marginRight",
                  ((n = a("<div>")
                    .css({
                      visibility: "hidden",
                      width: 100,
                      overflow: "scroll",
                    })
                    .appendTo("body")),
                  (t = a("<div>")
                    .css({
                      width: "100%",
                    })
                    .appendTo(n)
                    .outerWidth()),
                  n.remove(),
                  100 - t)
                ),
              a("#" + o).css("overflowY", "scroll");
          },
          beforeClose: function () {
            a("html").css("overflowY", "scroll"),
              a("html").add(i).css("marginRight", "0"),
              a("#" + o).css("overflowY", "hidden");
          },
          afterClose: function () {},
        },
        n
      ),
      d = a(t).attr("href"),
      s = a("body").find("#" + e.modalTarget),
      l = "#" + s.attr("id");
    s.addClass("animated"), s.addClass(e.modalTarget + "-off");
    var r = {
      position: e.position,
      width: e.width,
      height: e.height,
      top: e.top,
      left: e.left,
      "z-index": e.zIndexOut,
      opacity: e.opacityOut,
      "-webkit-animation-duration": e.animationDuration,
      "-moz-animation-duration": e.animationDuration,
      "-ms-animation-duration": e.animationDuration,
      "animation-duration": e.animationDuration,
    };
    function m() {
      s.css({
        opacity: e.opacityOut,
        "z-index": e.zIndexOut,
      }),
        e.afterClose();
    }
    function f() {
      e.afterOpen();
    }
    s.css(r),
      t.click(function (a) {
        a.preventDefault(),
          d == l &&
            (s.hasClass(e.modalTarget + "-off") &&
              (s.removeClass(e.animatedOut),
              s.removeClass(e.modalTarget + "-off"),
              s.addClass(e.modalTarget + "-on")),
            s.hasClass(e.modalTarget + "-on") &&
              (e.beforeOpen(),
              s.css({
                opacity: e.opacityIn,
                "z-index": e.zIndexIn,
              }),
              s.addClass(e.animatedIn),
              s.one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                f
              )));
      }),
      i.click(function (a) {
        a.preventDefault(),
          e.beforeClose(),
          s.hasClass(e.modalTarget + "-on") &&
            (s.removeClass(e.modalTarget + "-on"),
            s.addClass(e.modalTarget + "-off")),
          s.hasClass(e.modalTarget + "-off") &&
            (s.removeClass(e.animatedIn),
            s.addClass(e.animatedOut),
            s.one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              m
            ));
      });
  };
})(jQuery);

// Animated modal end

// Tiny slider start

var tns = (function () {
  Object.keys ||
    (Object.keys = function (t) {
      var e = [];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
      return e;
    }),
    "remove" in Element.prototype ||
      (Element.prototype.remove = function () {
        this.parentNode && this.parentNode.removeChild(this);
      });
  var t = window,
    e =
      t.requestAnimationFrame ||
      t.webkitRequestAnimationFrame ||
      t.mozRequestAnimationFrame ||
      t.msRequestAnimationFrame ||
      function (t) {
        return setTimeout(t, 16);
      },
    n = window,
    i =
      n.cancelAnimationFrame ||
      n.mozCancelAnimationFrame ||
      function (t) {
        clearTimeout(t);
      };
  function a() {
    for (
      var t, e, n, i = arguments[0] || {}, a = 1, r = arguments.length;
      a < r;
      a++
    )
      if (null !== (t = arguments[a]))
        for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
    return i;
  }
  function r(t) {
    return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t;
  }
  function o(t, e, n, i) {
    if (i)
      try {
        t.setItem(e, n);
      } catch (t) {}
    return n;
  }
  function u() {
    var t = document,
      e = t.body;
    return e || ((e = t.createElement("body")).fake = !0), e;
  }
  var l = document.documentElement;
  function s(t) {
    var e = "";
    return (
      t.fake &&
        ((e = l.style.overflow),
        (t.style.background = ""),
        (t.style.overflow = l.style.overflow = "hidden"),
        l.appendChild(t)),
      e
    );
  }
  function c(t, e) {
    t.fake && (t.remove(), (l.style.overflow = e), l.offsetHeight);
  }
  function f(t, e, n, i) {
    "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i);
  }
  function d(t) {
    return ("insertRule" in t ? t.cssRules : t.rules).length;
  }
  function v(t, e, n) {
    for (var i = 0, a = t.length; i < a; i++) e.call(n, t[i], i);
  }
  var p = "classList" in document.createElement("_"),
    h = p
      ? function (t, e) {
          return t.classList.contains(e);
        }
      : function (t, e) {
          return 0 <= t.className.indexOf(e);
        },
    m = p
      ? function (t, e) {
          h(t, e) || t.classList.add(e);
        }
      : function (t, e) {
          h(t, e) || (t.className += " " + e);
        },
    y = p
      ? function (t, e) {
          h(t, e) && t.classList.remove(e);
        }
      : function (t, e) {
          h(t, e) && (t.className = t.className.replace(e, ""));
        };
  function g(t, e) {
    return t.hasAttribute(e);
  }
  function x(t, e) {
    return t.getAttribute(e);
  }
  function b(t) {
    return void 0 !== t.item;
  }
  function C(t, e) {
    if (
      ((t = b(t) || t instanceof Array ? t : [t]),
      "[object Object]" === Object.prototype.toString.call(e))
    )
      for (var n = t.length; n--; ) for (var i in e) t[n].setAttribute(i, e[i]);
  }
  function w(t, e) {
    t = b(t) || t instanceof Array ? t : [t];
    for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--; )
      for (var a = n; a--; ) t[i].removeAttribute(e[a]);
  }
  function M(t) {
    for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
    return e;
  }
  function T(t, e) {
    "none" !== t.style.display && (t.style.display = "none");
  }
  function E(t, e) {
    "none" === t.style.display && (t.style.display = "");
  }
  function N(t) {
    return "none" !== window.getComputedStyle(t).display;
  }
  function A(t) {
    if ("string" == typeof t) {
      var e = [t],
        n = t.charAt(0).toUpperCase() + t.substr(1);
      ["Webkit", "Moz", "ms", "O"].forEach(function (i) {
        ("ms" === i && "transform" !== t) || e.push(i + n);
      }),
        (t = e);
    }
    for (
      var i = document.createElement("fakeelement"), a = (t.length, 0);
      a < t.length;
      a++
    ) {
      var r = t[a];
      if (void 0 !== i.style[r]) return r;
    }
    return !1;
  }
  function L(t, e) {
    var n = !1;
    return (
      /^Webkit/.test(t)
        ? (n = "webkit" + e + "End")
        : /^O/.test(t)
        ? (n = "o" + e + "End")
        : t && (n = e.toLowerCase() + "end"),
      n
    );
  }
  var B = !1;
  try {
    var S = Object.defineProperty({}, "passive", {
      get: function () {
        B = !0;
      },
    });
    window.addEventListener("test", null, S);
  } catch (t) {}
  var O = !!B && {
    passive: !0,
  };
  function D(t, e, n) {
    for (var i in e) {
      var a = 0 <= ["touchstart", "touchmove"].indexOf(i) && !n && O;
      t.addEventListener(i, e[i], a);
    }
  }
  function H(t, e) {
    for (var n in e) {
      var i = 0 <= ["touchstart", "touchmove"].indexOf(n) && O;
      t.removeEventListener(n, e[n], i);
    }
  }
  function k() {
    return {
      topics: {},
      on: function (t, e) {
        (this.topics[t] = this.topics[t] || []), this.topics[t].push(e);
      },
      off: function (t, e) {
        if (this.topics[t])
          for (var n = 0; n < this.topics[t].length; n++)
            if (this.topics[t][n] === e) {
              this.topics[t].splice(n, 1);
              break;
            }
      },
      emit: function (t, e) {
        (e.type = t),
          this.topics[t] &&
            this.topics[t].forEach(function (n) {
              n(e, t);
            });
      },
    };
  }
  var R = function (t) {
    t = a(
      {
        container: ".slider",
        mode: "carousel",
        axis: "horizontal",
        items: 1,
        gutter: 0,
        edgePadding: 0,
        fixedWidth: !1,
        autoWidth: !1,
        viewportMax: !1,
        slideBy: 1,
        center: !1,
        controls: !0,
        controlsPosition: "top",
        controlsText: ["prev", "next"],
        controlsContainer: !1,
        prevButton: !1,
        nextButton: !1,
        nav: !0,
        navPosition: "top",
        navContainer: !1,
        navAsThumbnails: !1,
        arrowKeys: !1,
        speed: 300,
        autoplay: !1,
        autoplayPosition: "top",
        autoplayTimeout: 5e3,
        autoplayDirection: "forward",
        autoplayText: ["start", "stop"],
        autoplayHoverPause: !1,
        autoplayButton: !1,
        autoplayButtonOutput: !0,
        autoplayResetOnVisibility: !0,
        animateIn: "tns-fadeIn",
        animateOut: "tns-fadeOut",
        animateNormal: "tns-normal",
        animateDelay: !1,
        loop: !0,
        rewind: !1,
        autoHeight: !1,
        responsive: !1,
        lazyload: !1,
        lazyloadSelector: ".tns-lazy-img",
        touch: !0,
        mouseDrag: !1,
        swipeAngle: 15,
        nested: !1,
        preventActionWhenRunning: !1,
        preventScrollOnTouch: !1,
        freezable: !0,
        onInit: !1,
        useLocalStorage: !0,
      },
      t || {}
    );
    var n = document,
      l = window,
      p = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39,
      },
      b = {},
      B = t.useLocalStorage;
    if (B) {
      var S = navigator.userAgent,
        O = new Date();
      try {
        (b = l.localStorage)
          ? (b.setItem(O, O), (B = b.getItem(O) == O), b.removeItem(O))
          : (B = !1),
          B || (b = {});
      } catch (S) {
        B = !1;
      }
      B &&
        (b.tnsApp &&
          b.tnsApp !== S &&
          [
            "tC",
            "tPL",
            "tMQ",
            "tTf",
            "t3D",
            "tTDu",
            "tTDe",
            "tADu",
            "tADe",
            "tTE",
            "tAE",
          ].forEach(function (t) {
            b.removeItem(t);
          }),
        (localStorage.tnsApp = S));
    }
    var I,
      P,
      z,
      W,
      F,
      q,
      j,
      V = b.tC
        ? r(b.tC)
        : o(
            b,
            "tC",
            (function () {
              var t = document,
                e = u(),
                n = s(e),
                i = t.createElement("div"),
                a = !1;
              e.appendChild(i);
              try {
                for (
                  var r,
                    o = "(10px * 10)",
                    l = ["calc" + o, "-moz-calc" + o, "-webkit-calc" + o],
                    f = 0;
                  f < 3;
                  f++
                )
                  if (
                    ((r = l[f]), (i.style.width = r), 100 === i.offsetWidth)
                  ) {
                    a = r.replace(o, "");
                    break;
                  }
              } catch (t) {}
              return e.fake ? c(e, n) : i.remove(), a;
            })(),
            B
          ),
      G = b.tPL
        ? r(b.tPL)
        : o(
            b,
            "tPL",
            (function () {
              var t,
                e = document,
                n = u(),
                i = s(n),
                a = e.createElement("div"),
                r = e.createElement("div"),
                o = "";
              (a.className = "tns-t-subp2"), (r.className = "tns-t-ct");
              for (var l = 0; l < 70; l++) o += "<div></div>";
              return (
                (r.innerHTML = o),
                a.appendChild(r),
                n.appendChild(a),
                (t =
                  Math.abs(
                    a.getBoundingClientRect().left -
                      r.children[67].getBoundingClientRect().left
                  ) < 2),
                n.fake ? c(n, i) : a.remove(),
                t
              );
            })(),
            B
          ),
      Q = b.tMQ
        ? r(b.tMQ)
        : o(
            b,
            "tMQ",
            ((P = document),
            (W = s((z = u()))),
            (F = P.createElement("div")),
            (j =
              "@media all and (min-width:1px){.tns-mq-test{position:absolute}}"),
            ((q = P.createElement("style")).type = "text/css"),
            (F.className = "tns-mq-test"),
            z.appendChild(q),
            z.appendChild(F),
            q.styleSheet
              ? (q.styleSheet.cssText = j)
              : q.appendChild(P.createTextNode(j)),
            (I = window.getComputedStyle
              ? window.getComputedStyle(F).position
              : F.currentStyle.position),
            z.fake ? c(z, W) : F.remove(),
            "absolute" === I),
            B
          ),
      X = b.tTf ? r(b.tTf) : o(b, "tTf", A("transform"), B),
      Y = b.t3D
        ? r(b.t3D)
        : o(
            b,
            "t3D",
            (function (t) {
              if (!t) return !1;
              if (!window.getComputedStyle) return !1;
              var e,
                n = document,
                i = u(),
                a = s(i),
                r = n.createElement("p"),
                o =
                  9 < t.length ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
              return (
                (o += "transform"),
                i.insertBefore(r, null),
                (r.style[t] = "translate3d(1px,1px,1px)"),
                (e = window.getComputedStyle(r).getPropertyValue(o)),
                i.fake ? c(i, a) : r.remove(),
                void 0 !== e && 0 < e.length && "none" !== e
              );
            })(X),
            B
          ),
      K = b.tTDu ? r(b.tTDu) : o(b, "tTDu", A("transitionDuration"), B),
      J = b.tTDe ? r(b.tTDe) : o(b, "tTDe", A("transitionDelay"), B),
      U = b.tADu ? r(b.tADu) : o(b, "tADu", A("animationDuration"), B),
      _ = b.tADe ? r(b.tADe) : o(b, "tADe", A("animationDelay"), B),
      Z = b.tTE ? r(b.tTE) : o(b, "tTE", L(K, "Transition"), B),
      $ = b.tAE ? r(b.tAE) : o(b, "tAE", L(U, "Animation"), B),
      tt = l.console && "function" == typeof l.console.warn,
      et = [
        "container",
        "controlsContainer",
        "prevButton",
        "nextButton",
        "navContainer",
        "autoplayButton",
      ],
      nt = {};
    if (
      (et.forEach(function (e) {
        if ("string" == typeof t[e]) {
          var i = t[e],
            a = n.querySelector(i);
          if (((nt[e] = i), !a || !a.nodeName))
            return void (tt && console.warn("Can't find", t[e]));
          t[e] = a;
        }
      }),
      !(t.container.children.length < 1))
    ) {
      var it = t.responsive,
        at = t.nested,
        rt = "carousel" === t.mode;
      if (it) {
        0 in it && ((t = a(t, it[0])), delete it[0]);
        var ot = {};
        for (var ut in it) {
          var lt = it[ut];
          (lt =
            "number" == typeof lt
              ? {
                  items: lt,
                }
              : lt),
            (ot[ut] = lt);
        }
        (it = ot), (ot = null);
      }
      if (
        (rt ||
          (function t(e) {
            for (var n in e)
              rt ||
                ("slideBy" === n && (e[n] = "page"),
                "edgePadding" === n && (e[n] = !1),
                "autoHeight" === n && (e[n] = !1)),
                "responsive" === n && t(e[n]);
          })(t),
        !rt)
      ) {
        (t.axis = "horizontal"), (t.slideBy = "page"), (t.edgePadding = !1);
        var st = t.animateIn,
          ct = t.animateOut,
          ft = t.animateDelay,
          dt = t.animateNormal;
      }
      var vt,
        pt,
        ht = "horizontal" === t.axis,
        mt = n.createElement("div"),
        yt = n.createElement("div"),
        gt = t.container,
        xt = gt.parentNode,
        bt = gt.outerHTML,
        Ct = gt.children,
        wt = Ct.length,
        Mt = In(),
        Tt = !1;
      it && ni(), rt && (gt.className += " tns-vpfix");
      var Et,
        Nt,
        At,
        Lt,
        Bt,
        St,
        Ot,
        Dt = t.autoWidth,
        Ht = Fn("fixedWidth"),
        kt = Fn("edgePadding"),
        Rt = Fn("gutter"),
        It = zn(),
        Pt = Fn("center"),
        zt = Dt ? 1 : Math.floor(Fn("items")),
        Wt = Fn("slideBy"),
        Ft = t.viewportMax || t.fixedWidthViewportWidth,
        qt = Fn("arrowKeys"),
        jt = Fn("speed"),
        Vt = t.rewind,
        Gt = !Vt && t.loop,
        Qt = Fn("autoHeight"),
        Xt = Fn("controls"),
        Yt = Fn("controlsText"),
        Kt = Fn("nav"),
        Jt = Fn("touch"),
        Ut = Fn("mouseDrag"),
        _t = Fn("autoplay"),
        Zt = Fn("autoplayTimeout"),
        $t = Fn("autoplayText"),
        te = Fn("autoplayHoverPause"),
        ee = Fn("autoplayResetOnVisibility"),
        ne =
          ((Ot = document.createElement("style")),
          document.querySelector("head").appendChild(Ot),
          Ot.sheet ? Ot.sheet : Ot.styleSheet),
        ie = t.lazyload,
        ae = (t.lazyloadSelector, []),
        re = Gt
          ? ((Bt = (function () {
              if (Dt || (Ht && !Ft)) return wt - 1;
              var e = Ht ? "fixedWidth" : "items",
                n = [];
              if (((Ht || t[e] < wt) && n.push(t[e]), it))
                for (var i in it) {
                  var a = it[i][e];
                  a && (Ht || a < wt) && n.push(a);
                }
              return (
                n.length || n.push(0),
                Math.ceil(
                  Ht ? Ft / Math.min.apply(null, n) : Math.max.apply(null, n)
                )
              );
            })()),
            (St = rt ? Math.ceil((5 * Bt - wt) / 2) : 4 * Bt - wt),
            (St = Math.max(Bt, St)),
            Wn("edgePadding") ? St + 1 : St)
          : 0,
        oe = rt ? wt + 2 * re : wt + re,
        ue = !((!Ht && !Dt) || Gt),
        le = Ht ? Bi() : null,
        se = !rt || !Gt,
        ce = ht ? "left" : "top",
        fe = "",
        de = "",
        ve = Ht
          ? function () {
              return Pt && !Gt ? wt - 1 : Math.ceil(-le / (Ht + Rt));
            }
          : Dt
          ? function () {
              for (var t = oe; t--; ) if (Et[t] >= -le) return t;
            }
          : function () {
              return Pt && rt && !Gt
                ? wt - 1
                : Gt || rt
                ? Math.max(0, oe - Math.ceil(zt))
                : oe - 1;
            },
        pe = Hn(Fn("startIndex")),
        he = pe,
        me = (Dn(), 0),
        ye = Dt ? null : ve(),
        ge = t.preventActionWhenRunning,
        xe = t.swipeAngle,
        be = !xe || "?",
        Ce = !1,
        we = t.onInit,
        Me = new k(),
        Te = " tns-slider tns-" + t.mode,
        Ee =
          gt.id ||
          ((Lt = window.tnsId),
          (window.tnsId = Lt ? Lt + 1 : 1),
          "tns" + window.tnsId),
        Ne = Fn("disable"),
        Ae = !1,
        Le = t.freezable,
        Be = !(!Le || Dt) && ei(),
        Se = !1,
        Oe = {
          click: zi,
          keydown: function (t) {
            t = Xi(t);
            var e = [p.LEFT, p.RIGHT].indexOf(t.keyCode);
            0 <= e &&
              (0 === e ? Ze.disabled || zi(t, -1) : $e.disabled || zi(t, 1));
          },
        },
        De = {
          click: function (t) {
            if (Ce) {
              if (ge) return;
              Ii();
            }
            for (var e = Yi((t = Xi(t))); e !== an && !g(e, "data-nav"); )
              e = e.parentNode;
            if (g(e, "data-nav")) {
              var n = (ln = Number(x(e, "data-nav"))),
                i = Ht || Dt ? (n * wt) / on : n * zt;
              Pi(Fe ? n : Math.min(Math.ceil(i), wt - 1), t),
                sn === n && (hn && Vi(), (ln = -1));
            }
          },
          keydown: function (t) {
            t = Xi(t);
            var e = n.activeElement;
            if (g(e, "data-nav")) {
              var i = [p.LEFT, p.RIGHT, p.ENTER, p.SPACE].indexOf(t.keyCode),
                a = Number(x(e, "data-nav"));
              0 <= i &&
                (0 === i
                  ? 0 < a && Qi(nn[a - 1])
                  : 1 === i
                  ? a < on - 1 && Qi(nn[a + 1])
                  : Pi((ln = a), t));
            }
          },
        },
        He = {
          mouseover: function () {
            hn && (Fi(), (mn = !0));
          },
          mouseout: function () {
            mn && (Wi(), (mn = !1));
          },
        },
        ke = {
          visibilitychange: function () {
            n.hidden ? hn && (Fi(), (gn = !0)) : gn && (Wi(), (gn = !1));
          },
        },
        Re = {
          keydown: function (t) {
            t = Xi(t);
            var e = [p.LEFT, p.RIGHT].indexOf(t.keyCode);
            0 <= e && zi(t, 0 === e ? -1 : 1);
          },
        },
        Ie = {
          touchstart: _i,
          touchmove: Zi,
          touchend: $i,
          touchcancel: $i,
        },
        Pe = {
          mousedown: _i,
          mousemove: Zi,
          mouseup: $i,
          mouseleave: $i,
        },
        ze = Wn("controls"),
        We = Wn("nav"),
        Fe = !!Dt || t.navAsThumbnails,
        qe = Wn("autoplay"),
        je = Wn("touch"),
        Ve = Wn("mouseDrag"),
        Ge = "tns-slide-active",
        Qe = "tns-complete",
        Xe = {
          load: function (t) {
            fi(Yi(t));
          },
          error: function (t) {
            var e;
            (e = Yi(t)), m(e, "failed"), di(e);
          },
        },
        Ye = "force" === t.preventScrollOnTouch;
      if (ze)
        var Ke,
          Je,
          Ue = t.controlsContainer,
          _e = t.controlsContainer ? t.controlsContainer.outerHTML : "",
          Ze = t.prevButton,
          $e = t.nextButton,
          tn = t.prevButton ? t.prevButton.outerHTML : "",
          en = t.nextButton ? t.nextButton.outerHTML : "";
      if (We)
        var nn,
          an = t.navContainer,
          rn = t.navContainer ? t.navContainer.outerHTML : "",
          on = Dt ? wt : ea(),
          un = 0,
          ln = -1,
          sn = Rn(),
          cn = sn,
          fn = "tns-nav-active",
          dn = "Carousel Page ",
          vn = " (Current Slide)";
      if (qe)
        var pn,
          hn,
          mn,
          yn,
          gn,
          xn = "forward" === t.autoplayDirection ? 1 : -1,
          bn = t.autoplayButton,
          Cn = t.autoplayButton ? t.autoplayButton.outerHTML : "",
          wn = ["<span class='tns-visually-hidden'>", " animation</span>"];
      if (je || Ve)
        var Mn,
          Tn,
          En = {},
          Nn = {},
          An = !1,
          Ln = ht
            ? function (t, e) {
                return t.x - e.x;
              }
            : function (t, e) {
                return t.y - e.y;
              };
      Dt || On(Ne || Be),
        X &&
          ((ce = X),
          (fe = "translate"),
          Y
            ? ((fe += ht ? "3d(" : "3d(0px, "),
              (de = ht ? ", 0px, 0px)" : ", 0px)"))
            : ((fe += ht ? "X(" : "Y("), (de = ")"))),
        rt && (gt.className = gt.className.replace("tns-vpfix", "")),
        (function () {
          (Wn("gutter"),
          (mt.className = "tns-outer"),
          (yt.className = "tns-inner"),
          (mt.id = Ee + "-ow"),
          (yt.id = Ee + "-iw"),
          "" === gt.id && (gt.id = Ee),
          (Te += G || Dt ? " tns-subpixel" : " tns-no-subpixel"),
          (Te += V ? " tns-calc" : " tns-no-calc"),
          Dt && (Te += " tns-autowidth"),
          (Te += " tns-" + t.axis),
          (gt.className += Te),
          rt
            ? (((vt = n.createElement("div")).id = Ee + "-mw"),
              (vt.className = "tns-ovh"),
              mt.appendChild(vt),
              vt.appendChild(yt))
            : mt.appendChild(yt),
          Qt) && ((vt || yt).className += " tns-ah");
          if (
            (xt.insertBefore(mt, gt),
            yt.appendChild(gt),
            v(Ct, function (t, e) {
              m(t, "tns-item"),
                t.id || (t.id = Ee + "-item" + e),
                !rt && dt && m(t, dt),
                C(t, {
                  "aria-hidden": "true",
                  tabindex: "-1",
                });
            }),
            re)
          ) {
            for (
              var e = n.createDocumentFragment(),
                i = n.createDocumentFragment(),
                a = re;
              a--;

            ) {
              var r = a % wt,
                o = Ct[r].cloneNode(!0);
              if ((w(o, "id"), i.insertBefore(o, i.firstChild), rt)) {
                var u = Ct[wt - 1 - r].cloneNode(!0);
                w(u, "id"), e.appendChild(u);
              }
            }
            gt.insertBefore(e, gt.firstChild),
              gt.appendChild(i),
              (Ct = gt.children);
          }
        })(),
        (function () {
          if (!rt)
            for (var e = pe, n = pe + Math.min(wt, zt); e < n; e++) {
              var i = Ct[e];
              (i.style.left = (100 * (e - pe)) / zt + "%"), m(i, st), y(i, dt);
            }
          if (
            (ht &&
              (G || Dt
                ? (f(
                    ne,
                    "#" + Ee + " > .tns-item",
                    "font-size:" + l.getComputedStyle(Ct[0]).fontSize + ";",
                    d(ne)
                  ),
                  f(ne, "#" + Ee, "font-size:0;", d(ne)))
                : rt &&
                  v(Ct, function (t, e) {
                    var n;
                    t.style.marginLeft =
                      ((n = e),
                      V
                        ? V + "(" + 100 * n + "% / " + oe + ")"
                        : (100 * n) / oe + "%");
                  })),
            Q)
          ) {
            if (K) {
              var a = vt && t.autoHeight ? Xn(t.speed) : "";
              f(ne, "#" + Ee + "-mw", a, d(ne));
            }
            (a = qn(
              t.edgePadding,
              t.gutter,
              t.fixedWidth,
              t.speed,
              t.autoHeight
            )),
              f(ne, "#" + Ee + "-iw", a, d(ne)),
              rt &&
                ((a =
                  ht && !Dt
                    ? "width:" + jn(t.fixedWidth, t.gutter, t.items) + ";"
                    : ""),
                K && (a += Xn(jt)),
                f(ne, "#" + Ee, a, d(ne))),
              (a = ht && !Dt ? Vn(t.fixedWidth, t.gutter, t.items) : ""),
              t.gutter && (a += Gn(t.gutter)),
              rt || (K && (a += Xn(jt)), U && (a += Yn(jt))),
              a && f(ne, "#" + Ee + " > .tns-item", a, d(ne));
          } else {
            yi(),
              (yt.style.cssText = qn(kt, Rt, Ht, Qt)),
              rt && ht && !Dt && (gt.style.width = jn(Ht, Rt, zt));
            a = ht && !Dt ? Vn(Ht, Rt, zt) : "";
            Rt && (a += Gn(Rt)),
              a && f(ne, "#" + Ee + " > .tns-item", a, d(ne));
          }
          if (it && Q)
            for (var r in it) {
              r = parseInt(r);
              var o = it[r],
                u = ((a = ""), ""),
                s = "",
                c = "",
                p = "",
                h = Dt ? null : Fn("items", r),
                g = Fn("fixedWidth", r),
                x = Fn("speed", r),
                b = Fn("edgePadding", r),
                C = Fn("autoHeight", r),
                w = Fn("gutter", r);
              K &&
                vt &&
                Fn("autoHeight", r) &&
                "speed" in o &&
                (u = "#" + Ee + "-mw{" + Xn(x) + "}"),
                ("edgePadding" in o || "gutter" in o) &&
                  (s = "#" + Ee + "-iw{" + qn(b, w, g, x, C) + "}"),
                rt &&
                  ht &&
                  !Dt &&
                  ("fixedWidth" in o ||
                    "items" in o ||
                    (Ht && "gutter" in o)) &&
                  (c = "width:" + jn(g, w, h) + ";"),
                K && "speed" in o && (c += Xn(x)),
                c && (c = "#" + Ee + "{" + c + "}"),
                ("fixedWidth" in o ||
                  (Ht && "gutter" in o) ||
                  (!rt && "items" in o)) &&
                  (p += Vn(g, w, h)),
                "gutter" in o && (p += Gn(w)),
                !rt && "speed" in o && (K && (p += Xn(x)), U && (p += Yn(x))),
                p && (p = "#" + Ee + " > .tns-item{" + p + "}"),
                (a = u + s + c + p) &&
                  ne.insertRule(
                    "@media (min-width: " + r / 16 + "em) {" + a + "}",
                    ne.cssRules.length
                  );
            }
        })(),
        Kn();
      var Bn = Gt
          ? rt
            ? function () {
                var t = me,
                  e = ye;
                (t += Wt),
                  (e -= Wt),
                  kt
                    ? ((t += 1), (e -= 1))
                    : Ht && (It + Rt) % (Ht + Rt) && (e -= 1),
                  re && (e < pe ? (pe -= wt) : pe < t && (pe += wt));
              }
            : function () {
                if (ye < pe) for (; me + wt <= pe; ) pe -= wt;
                else if (pe < me) for (; pe <= ye - wt; ) pe += wt;
              }
          : function () {
              pe = Math.max(me, Math.min(ye, pe));
            },
        Sn = rt
          ? function () {
              var t, e, n, i, a, r, o, u, l, s, c;
              Ai(gt, ""),
                K || !jt
                  ? (Di(), (jt && N(gt)) || Ii())
                  : ((t = gt),
                    (e = ce),
                    (n = fe),
                    (i = de),
                    (a = Si()),
                    (r = jt),
                    (o = Ii),
                    (u = Math.min(r, 10)),
                    (l = 0 <= a.indexOf("%") ? "%" : "px"),
                    (a = a.replace(l, "")),
                    (s = Number(
                      t.style[e].replace(n, "").replace(i, "").replace(l, "")
                    )),
                    (c = ((a - s) / r) * u),
                    setTimeout(function a() {
                      (r -= u),
                        (s += c),
                        (t.style[e] = n + s + l + i),
                        0 < r ? setTimeout(a, u) : o();
                    }, u)),
                ht || ta();
            }
          : function () {
              ae = [];
              var t = {};
              (t[Z] = t[$] = Ii),
                H(Ct[he], t),
                D(Ct[pe], t),
                Hi(he, st, ct, !0),
                Hi(pe, dt, st),
                (Z && $ && jt && N(gt)) || Ii();
            };
      return {
        version: "2.9.2",
        getInfo: ia,
        events: Me,
        goTo: Pi,
        play: function () {
          _t && !hn && (ji(), (yn = !1));
        },
        pause: function () {
          hn && (Vi(), (yn = !0));
        },
        isOn: Tt,
        updateSliderHeight: xi,
        refresh: Kn,
        destroy: function () {
          if (
            ((ne.disabled = !0),
            ne.ownerNode && ne.ownerNode.remove(),
            H(l, {
              resize: $n,
            }),
            qt && H(n, Re),
            Ue && H(Ue, Oe),
            an && H(an, De),
            H(gt, He),
            H(gt, ke),
            bn &&
              H(bn, {
                click: Gi,
              }),
            _t && clearInterval(pn),
            rt && Z)
          ) {
            var e = {};
            (e[Z] = Ii), H(gt, e);
          }
          Jt && H(gt, Ie), Ut && H(gt, Pe);
          var i = [bt, _e, tn, en, rn, Cn];
          for (var a in (et.forEach(function (e, n) {
            var a = "container" === e ? mt : t[e];
            if ("object" == typeof a) {
              var r = !!a.previousElementSibling && a.previousElementSibling,
                o = a.parentNode;
              (a.outerHTML = i[n]),
                (t[e] = r ? r.nextElementSibling : o.firstElementChild);
            }
          }),
          (et =
            st =
            ct =
            ft =
            dt =
            ht =
            mt =
            yt =
            gt =
            xt =
            bt =
            Ct =
            wt =
            pt =
            Mt =
            Dt =
            Ht =
            kt =
            Rt =
            It =
            zt =
            Wt =
            Ft =
            qt =
            jt =
            Vt =
            Gt =
            Qt =
            ne =
            ie =
            Et =
            ae =
            re =
            oe =
            ue =
            le =
            se =
            ce =
            fe =
            de =
            ve =
            pe =
            he =
            me =
            ye =
            xe =
            be =
            Ce =
            we =
            Me =
            Te =
            Ee =
            Ne =
            Ae =
            Le =
            Be =
            Se =
            Oe =
            De =
            He =
            ke =
            Re =
            Ie =
            Pe =
            ze =
            We =
            Fe =
            qe =
            je =
            Ve =
            Ge =
            Qe =
            Xe =
            Nt =
            Xt =
            Yt =
            Ue =
            _e =
            Ze =
            $e =
            Ke =
            Je =
            Kt =
            an =
            rn =
            nn =
            on =
            un =
            ln =
            sn =
            cn =
            fn =
            dn =
            vn =
            _t =
            Zt =
            xn =
            $t =
            te =
            bn =
            Cn =
            ee =
            wn =
            pn =
            hn =
            mn =
            yn =
            gn =
            En =
            Nn =
            Mn =
            An =
            Tn =
            Ln =
            Jt =
            Ut =
              null),
          this))
            "rebuild" !== a && (this[a] = null);
          Tt = !1;
        },
        rebuild: function () {
          return R(a(t, nt));
        },
      };
    }
    function On(t) {
      t && (Xt = Kt = Jt = Ut = qt = _t = te = ee = !1);
    }
    function Dn() {
      for (var t = rt ? pe - re : pe; t < 0; ) t += wt;
      return (t % wt) + 1;
    }
    function Hn(t) {
      return (
        (t = t ? Math.max(0, Math.min(Gt ? wt - 1 : wt - zt, t)) : 0),
        rt ? t + re : t
      );
    }
    function kn(t) {
      for (null == t && (t = pe), rt && (t -= re); t < 0; ) t += wt;
      return Math.floor(t % wt);
    }
    function Rn() {
      var t,
        e = kn();
      return (
        (t = Fe
          ? e
          : Ht || Dt
          ? Math.ceil(((e + 1) * on) / wt - 1)
          : Math.floor(e / zt)),
        !Gt && rt && pe === ye && (t = on - 1),
        t
      );
    }
    function In() {
      return (
        l.innerWidth || n.documentElement.clientWidth || n.body.clientWidth
      );
    }
    function Pn(t) {
      return "top" === t ? "afterbegin" : "beforeend";
    }
    function zn() {
      var t = kt ? 2 * kt - Rt : 0;
      return (
        (function t(e) {
          var i,
            a,
            r = n.createElement("div");
          return (
            e.appendChild(r),
            (a = (i = r.getBoundingClientRect()).right - i.left),
            r.remove(),
            a || t(e.parentNode)
          );
        })(xt) - t
      );
    }
    function Wn(e) {
      if (t[e]) return !0;
      if (it) for (var n in it) if (it[n][e]) return !0;
      return !1;
    }
    function Fn(e, n) {
      if ((null == n && (n = Mt), "items" === e && Ht))
        return Math.floor((It + Rt) / (Ht + Rt)) || 1;
      var i = t[e];
      if (it)
        for (var a in it) n >= parseInt(a) && e in it[a] && (i = it[a][e]);
      return (
        "slideBy" === e && "page" === i && (i = Fn("items")),
        rt || ("slideBy" !== e && "items" !== e) || (i = Math.floor(i)),
        i
      );
    }
    function qn(t, e, n, i, a) {
      var r = "";
      if (void 0 !== t) {
        var o = t;
        e && (o -= e),
          (r = ht
            ? "margin: 0 " + o + "px 0 " + t + "px;"
            : "margin: " + t + "px 0 " + o + "px 0;");
      } else if (e && !n) {
        var u = "-" + e + "px";
        r = "margin: 0 " + (ht ? u + " 0 0" : "0 " + u + " 0") + ";";
      }
      return !rt && a && K && i && (r += Xn(i)), r;
    }
    function jn(t, e, n) {
      return t
        ? (t + e) * oe + "px"
        : V
        ? V + "(" + 100 * oe + "% / " + n + ")"
        : (100 * oe) / n + "%";
    }
    function Vn(t, e, n) {
      var i;
      if (t) i = t + e + "px";
      else {
        rt || (n = Math.floor(n));
        var a = rt ? oe : n;
        i = V ? V + "(100% / " + a + ")" : 100 / a + "%";
      }
      return (i = "width:" + i), "inner" !== at ? i + ";" : i + " !important;";
    }
    function Gn(t) {
      var e = "";
      return (
        !1 !== t &&
          (e =
            (ht ? "padding-" : "margin-") +
            (ht ? "right" : "bottom") +
            ": " +
            t +
            "px;"),
        e
      );
    }
    function Qn(t, e) {
      var n = t.substring(0, t.length - e).toLowerCase();
      return n && (n = "-" + n + "-"), n;
    }
    function Xn(t) {
      return Qn(K, 18) + "transition-duration:" + t / 1e3 + "s;";
    }
    function Yn(t) {
      return Qn(U, 17) + "animation-duration:" + t / 1e3 + "s;";
    }
    function Kn() {
      if (Wn("autoHeight") || Dt || !ht) {
        var t = gt.querySelectorAll("img");
        v(t, function (t) {
          var e = t.src;
          e && e.indexOf("data:image") < 0
            ? (D(t, Xe), (t.src = ""), (t.src = e), m(t, "loading"))
            : ie || fi(t);
        }),
          e(function () {
            hi(M(t), function () {
              Nt = !0;
            });
          }),
          !Dt && ht && (t = vi(pe, Math.min(pe + zt - 1, oe - 1))),
          ie
            ? Jn()
            : e(function () {
                hi(M(t), Jn);
              });
      } else rt && Oi(), _n(), Zn();
    }
    function Jn() {
      if (Dt) {
        var t = Gt ? pe : wt - 1;
        !(function e() {
          Ct[t - 1].getBoundingClientRect().right.toFixed(2) ===
          Ct[t].getBoundingClientRect().left.toFixed(2)
            ? Un()
            : setTimeout(function () {
                e();
              }, 16);
        })();
      } else Un();
    }
    function Un() {
      (ht && !Dt) ||
        (bi(),
        Dt
          ? ((le = Bi()), Le && (Be = ei()), (ye = ve()), On(Ne || Be))
          : ta()),
        rt && Oi(),
        _n(),
        Zn();
    }
    function _n() {
      if (
        (Ci(),
        mt.insertAdjacentHTML(
          "afterbegin",
          '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
            li() +
            "</span>  of " +
            wt +
            "</div>"
        ),
        (At = mt.querySelector(".tns-liveregion .current")),
        qe)
      ) {
        var e = _t ? "stop" : "start";
        bn
          ? C(bn, {
              "data-action": e,
            })
          : t.autoplayButtonOutput &&
            (mt.insertAdjacentHTML(
              Pn(t.autoplayPosition),
              '<button data-action="' +
                e +
                '">' +
                wn[0] +
                e +
                wn[1] +
                $t[0] +
                "</button>"
            ),
            (bn = mt.querySelector("[data-action]"))),
          bn &&
            D(bn, {
              click: Gi,
            }),
          _t && (ji(), te && D(gt, He), ee && D(gt, ke));
      }
      if (We) {
        if (an)
          C(an, {
            "aria-label": "Carousel Pagination",
          }),
            v((nn = an.children), function (t, e) {
              C(t, {
                "data-nav": e,
                tabindex: "-1",
                "aria-label": dn + (e + 1),
                "aria-controls": Ee,
              });
            });
        else {
          for (
            var n = "", i = Fe ? "" : 'style="display:none"', a = 0;
            a < wt;
            a++
          )
            n +=
              '<button data-nav="' +
              a +
              '" tabindex="-1" aria-controls="' +
              Ee +
              '" ' +
              i +
              ' aria-label="' +
              dn +
              (a + 1) +
              '"></button>';
          (n =
            '<div class="tns-nav" aria-label="Carousel Pagination">' +
            n +
            "</div>"),
            mt.insertAdjacentHTML(Pn(t.navPosition), n),
            (an = mt.querySelector(".tns-nav")),
            (nn = an.children);
        }
        if ((na(), K)) {
          var r = K.substring(0, K.length - 18).toLowerCase(),
            o = "transition: all " + jt / 1e3 + "s";
          r && (o = "-" + r + "-" + o),
            f(ne, "[aria-controls^=" + Ee + "-item]", o, d(ne));
        }
        C(nn[sn], {
          "aria-label": dn + (sn + 1) + vn,
        }),
          w(nn[sn], "tabindex"),
          m(nn[sn], fn),
          D(an, De);
      }
      ze &&
        (Ue ||
          (Ze && $e) ||
          (mt.insertAdjacentHTML(
            Pn(t.controlsPosition),
            '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' +
              Ee +
              '">' +
              Yt[0] +
              '</button><button data-controls="next" tabindex="-1" aria-controls="' +
              Ee +
              '">' +
              Yt[1] +
              "</button></div>"
          ),
          (Ue = mt.querySelector(".tns-controls"))),
        (Ze && $e) || ((Ze = Ue.children[0]), ($e = Ue.children[1])),
        t.controlsContainer &&
          C(Ue, {
            "aria-label": "Carousel Navigation",
            tabindex: "0",
          }),
        (t.controlsContainer || (t.prevButton && t.nextButton)) &&
          C([Ze, $e], {
            "aria-controls": Ee,
            tabindex: "-1",
          }),
        (t.controlsContainer || (t.prevButton && t.nextButton)) &&
          (C(Ze, {
            "data-controls": "prev",
          }),
          C($e, {
            "data-controls": "next",
          })),
        (Ke = Mi(Ze)),
        (Je = Mi($e)),
        Ni(),
        Ue ? D(Ue, Oe) : (D(Ze, Oe), D($e, Oe))),
        ii();
    }
    function Zn() {
      if (rt && Z) {
        var e = {};
        (e[Z] = Ii), D(gt, e);
      }
      Jt && D(gt, Ie, t.preventScrollOnTouch),
        Ut && D(gt, Pe),
        qt && D(n, Re),
        "inner" === at
          ? Me.on("outerResized", function () {
              ti(), Me.emit("innerLoaded", ia());
            })
          : (it || Ht || Dt || Qt || !ht) &&
            D(l, {
              resize: $n,
            }),
        Qt && ("outer" === at ? Me.on("innerLoaded", pi) : Ne || pi()),
        ci(),
        Ne ? oi() : Be && ri(),
        Me.on("indexChanged", mi),
        "inner" === at && Me.emit("innerLoaded", ia()),
        "function" == typeof we && we(ia()),
        (Tt = !0);
    }
    function $n(t) {
      e(function () {
        ti(Xi(t));
      });
    }
    function ti(e) {
      if (Tt) {
        "outer" === at && Me.emit("outerResized", ia(e)), (Mt = In());
        var i,
          a = pt,
          r = !1;
        it && (ni(), (i = a !== pt) && Me.emit("newBreakpointStart", ia(e)));
        var o,
          u,
          l,
          s,
          c = zt,
          p = Ne,
          h = Be,
          g = qt,
          x = Xt,
          b = Kt,
          C = Jt,
          w = Ut,
          M = _t,
          N = te,
          A = ee,
          L = pe;
        if (i) {
          var B = Ht,
            S = Qt,
            O = Yt,
            k = Pt,
            R = $t;
          if (!Q)
            var I = Rt,
              P = kt;
        }
        if (
          ((qt = Fn("arrowKeys")),
          (Xt = Fn("controls")),
          (Kt = Fn("nav")),
          (Jt = Fn("touch")),
          (Pt = Fn("center")),
          (Ut = Fn("mouseDrag")),
          (_t = Fn("autoplay")),
          (te = Fn("autoplayHoverPause")),
          (ee = Fn("autoplayResetOnVisibility")),
          i &&
            ((Ne = Fn("disable")),
            (Ht = Fn("fixedWidth")),
            (jt = Fn("speed")),
            (Qt = Fn("autoHeight")),
            (Yt = Fn("controlsText")),
            ($t = Fn("autoplayText")),
            (Zt = Fn("autoplayTimeout")),
            Q || ((kt = Fn("edgePadding")), (Rt = Fn("gutter")))),
          On(Ne),
          (It = zn()),
          (ht && !Dt) || Ne || (bi(), ht || (ta(), (r = !0))),
          (Ht || Dt) && ((le = Bi()), (ye = ve())),
          (i || Ht) &&
            ((zt = Fn("items")),
            (Wt = Fn("slideBy")),
            (u = zt !== c) && (Ht || Dt || (ye = ve()), Bn())),
          i &&
            Ne !== p &&
            (Ne
              ? oi()
              : (function () {
                  if (Ae) {
                    if (((ne.disabled = !1), (gt.className += Te), Oi(), Gt))
                      for (var t = re; t--; ) rt && E(Ct[t]), E(Ct[oe - t - 1]);
                    if (!rt)
                      for (var e = pe, n = pe + wt; e < n; e++) {
                        var i = Ct[e],
                          a = e < pe + zt ? st : dt;
                        (i.style.left = (100 * (e - pe)) / zt + "%"), m(i, a);
                      }
                    ai(), (Ae = !1);
                  }
                })()),
          Le &&
            (i || Ht || Dt) &&
            (Be = ei()) !== h &&
            (Be
              ? (Di(Si(Hn(0))), ri())
              : ((function () {
                  if (Se) {
                    if ((kt && Q && (yt.style.margin = ""), re))
                      for (var t = "tns-transparent", e = re; e--; )
                        rt && y(Ct[e], t), y(Ct[oe - e - 1], t);
                    ai(), (Se = !1);
                  }
                })(),
                (r = !0))),
          On(Ne || Be),
          _t || (te = ee = !1),
          qt !== g && (qt ? D(n, Re) : H(n, Re)),
          Xt !== x &&
            (Xt
              ? Ue
                ? E(Ue)
                : (Ze && E(Ze), $e && E($e))
              : Ue
              ? T(Ue)
              : (Ze && T(Ze), $e && T($e))),
          Kt !== b && (Kt ? E(an) : T(an)),
          Jt !== C && (Jt ? D(gt, Ie, t.preventScrollOnTouch) : H(gt, Ie)),
          Ut !== w && (Ut ? D(gt, Pe) : H(gt, Pe)),
          _t !== M &&
            (_t ? (bn && E(bn), hn || yn || ji()) : (bn && T(bn), hn && Vi())),
          te !== N && (te ? D(gt, He) : H(gt, He)),
          ee !== A && (ee ? D(n, ke) : H(n, ke)),
          i)
        ) {
          if (
            ((Ht === B && Pt === k) || (r = !0),
            Qt !== S && (Qt || (yt.style.height = "")),
            Xt && Yt !== O && ((Ze.innerHTML = Yt[0]), ($e.innerHTML = Yt[1])),
            bn && $t !== R)
          ) {
            var z = _t ? 1 : 0,
              W = bn.innerHTML,
              F = W.length - R[z].length;
            W.substring(F) === R[z] &&
              (bn.innerHTML = W.substring(0, F) + $t[z]);
          }
        } else Pt && (Ht || Dt) && (r = !0);
        if (
          ((u || (Ht && !Dt)) && ((on = ea()), na()),
          (o = pe !== L)
            ? (Me.emit("indexChanged", ia()), (r = !0))
            : u
            ? o || mi()
            : (Ht || Dt) && (ci(), Ci(), ui()),
          u &&
            !rt &&
            (function () {
              for (var t = pe + Math.min(wt, zt), e = oe; e--; ) {
                var n = Ct[e];
                pe <= e && e < t
                  ? (m(n, "tns-moving"),
                    (n.style.left = (100 * (e - pe)) / zt + "%"),
                    m(n, st),
                    y(n, dt))
                  : n.style.left && ((n.style.left = ""), m(n, dt), y(n, st)),
                  y(n, ct);
              }
              setTimeout(function () {
                v(Ct, function (t) {
                  y(t, "tns-moving");
                });
              }, 300);
            })(),
          !Ne && !Be)
        ) {
          if (
            i &&
            !Q &&
            ((Qt === autoheightTem && jt === speedTem) || yi(),
            (kt === P && Rt === I) ||
              (yt.style.cssText = qn(kt, Rt, Ht, jt, Qt)),
            ht)
          ) {
            rt && (gt.style.width = jn(Ht, Rt, zt));
            var q = Vn(Ht, Rt, zt) + Gn(Rt);
            (s = d((l = ne)) - 1),
              "deleteRule" in l ? l.deleteRule(s) : l.removeRule(s),
              f(ne, "#" + Ee + " > .tns-item", q, d(ne));
          }
          Qt && pi(), r && (Oi(), (he = pe));
        }
        i && Me.emit("newBreakpointEnd", ia(e));
      }
    }
    function ei() {
      if (!Ht && !Dt) return wt <= (Pt ? zt - (zt - 1) / 2 : zt);
      var t = Ht ? (Ht + Rt) * wt : Et[wt],
        e = kt ? It + 2 * kt : It + Rt;
      return (
        Pt && (e -= Ht ? (It - Ht) / 2 : (It - (Et[pe + 1] - Et[pe] - Rt)) / 2),
        t <= e
      );
    }
    function ni() {
      for (var t in ((pt = 0), it)) (t = parseInt(t)) <= Mt && (pt = t);
    }
    function ii() {
      !_t && bn && T(bn),
        !Kt && an && T(an),
        Xt || (Ue ? T(Ue) : (Ze && T(Ze), $e && T($e)));
    }
    function ai() {
      _t && bn && E(bn),
        Kt && an && E(an),
        Xt && (Ue ? E(Ue) : (Ze && E(Ze), $e && E($e)));
    }
    function ri() {
      if (!Se) {
        if ((kt && (yt.style.margin = "0px"), re))
          for (var t = "tns-transparent", e = re; e--; )
            rt && m(Ct[e], t), m(Ct[oe - e - 1], t);
        ii(), (Se = !0);
      }
    }
    function oi() {
      if (!Ae) {
        if (
          ((ne.disabled = !0),
          (gt.className = gt.className.replace(Te.substring(1), "")),
          w(gt, ["style"]),
          Gt)
        )
          for (var t = re; t--; ) rt && T(Ct[t]), T(Ct[oe - t - 1]);
        if (((ht && rt) || w(yt, ["style"]), !rt))
          for (var e = pe, n = pe + wt; e < n; e++) {
            var i = Ct[e];
            w(i, ["style"]), y(i, st), y(i, dt);
          }
        ii(), (Ae = !0);
      }
    }
    function ui() {
      var t = li();
      At.innerHTML !== t && (At.innerHTML = t);
    }
    function li() {
      var t = si(),
        e = t[0] + 1,
        n = t[1] + 1;
      return e === n ? e + "" : e + " to " + n;
    }
    function si(t) {
      null == t && (t = Si());
      var e,
        n,
        i,
        a = pe;
      if (
        (Pt || kt
          ? (Dt || Ht) && ((n = -(parseFloat(t) + kt)), (i = n + It + 2 * kt))
          : Dt && ((n = Et[pe]), (i = n + It)),
        Dt)
      )
        Et.forEach(function (t, r) {
          r < oe &&
            ((Pt || kt) && t <= n + 0.5 && (a = r), 0.5 <= i - t && (e = r));
        });
      else {
        if (Ht) {
          var r = Ht + Rt;
          Pt || kt
            ? ((a = Math.floor(n / r)), (e = Math.ceil(i / r - 1)))
            : (e = a + Math.ceil(It / r) - 1);
        } else if (Pt || kt) {
          var o = zt - 1;
          if ((Pt ? ((a -= o / 2), (e = pe + o / 2)) : (e = pe + o), kt)) {
            var u = (kt * zt) / It;
            (a -= u), (e += u);
          }
          (a = Math.floor(a)), (e = Math.ceil(e));
        } else e = a + zt - 1;
        (a = Math.max(a, 0)), (e = Math.min(e, oe - 1));
      }
      return [a, e];
    }
    function ci() {
      ie &&
        !Ne &&
        vi.apply(null, si()).forEach(function (t) {
          if (!h(t, Qe)) {
            var e = {};
            (e[Z] = function (t) {
              t.stopPropagation();
            }),
              D(t, e),
              D(t, Xe),
              (t.src = x(t, "data-src"));
            var n = x(t, "data-srcset");
            n && (t.srcset = n), m(t, "loading");
          }
        });
    }
    function fi(t) {
      m(t, "loaded"), di(t);
    }
    function di(t) {
      m(t, "tns-complete"), y(t, "loading"), H(t, Xe);
    }
    function vi(t, e) {
      for (var n = []; t <= e; )
        v(Ct[t].querySelectorAll("img"), function (t) {
          n.push(t);
        }),
          t++;
      return n;
    }
    function pi() {
      var t = vi.apply(null, si());
      e(function () {
        hi(t, xi);
      });
    }
    function hi(t, n) {
      return Nt
        ? n()
        : (t.forEach(function (e, n) {
            h(e, Qe) && t.splice(n, 1);
          }),
          t.length
            ? void e(function () {
                hi(t, n);
              })
            : n());
    }
    function mi() {
      ci(),
        Ci(),
        ui(),
        Ni(),
        (function () {
          if (Kt && ((sn = 0 <= ln ? ln : Rn()), (ln = -1), sn !== cn)) {
            var t = nn[cn],
              e = nn[sn];
            C(t, {
              tabindex: "-1",
              "aria-label": dn + (cn + 1),
            }),
              y(t, fn),
              C(e, {
                "aria-label": dn + (sn + 1) + vn,
              }),
              w(e, "tabindex"),
              m(e, fn),
              (cn = sn);
          }
        })();
    }
    function yi() {
      rt && Qt && (vt.style[K] = jt / 1e3 + "s");
    }
    function gi(t, e) {
      for (var n = [], i = t, a = Math.min(t + e, oe); i < a; i++)
        n.push(Ct[i].offsetHeight);
      return Math.max.apply(null, n);
    }
    function xi() {
      var t = Qt ? gi(pe, zt) : gi(re, wt),
        e = vt || yt;
      e.style.height !== t && (e.style.height = t + "px");
    }
    function bi() {
      Et = [0];
      var t = ht ? "left" : "top",
        e = ht ? "right" : "bottom",
        n = Ct[0].getBoundingClientRect()[t];
      v(Ct, function (i, a) {
        a && Et.push(i.getBoundingClientRect()[t] - n),
          a === oe - 1 && Et.push(i.getBoundingClientRect()[e] - n);
      });
    }
    function Ci() {
      var t = si(),
        e = t[0],
        n = t[1];
      v(Ct, function (t, i) {
        e <= i && i <= n
          ? g(t, "aria-hidden") && (w(t, ["aria-hidden", "tabindex"]), m(t, Ge))
          : g(t, "aria-hidden") ||
            (C(t, {
              "aria-hidden": "true",
              tabindex: "-1",
            }),
            y(t, Ge));
      });
    }
    function wi(t) {
      return t.nodeName.toLowerCase();
    }
    function Mi(t) {
      return "button" === wi(t);
    }
    function Ti(t) {
      return "true" === t.getAttribute("aria-disabled");
    }
    function Ei(t, e, n) {
      t ? (e.disabled = n) : e.setAttribute("aria-disabled", n.toString());
    }
    function Ni() {
      if (Xt && !Vt && !Gt) {
        var t = Ke ? Ze.disabled : Ti(Ze),
          e = Je ? $e.disabled : Ti($e),
          n = pe <= me,
          i = !Vt && ye <= pe;
        n && !t && Ei(Ke, Ze, !0),
          !n && t && Ei(Ke, Ze, !1),
          i && !e && Ei(Je, $e, !0),
          !i && e && Ei(Je, $e, !1);
      }
    }
    function Ai(t, e) {
      K && (t.style[K] = e);
    }
    function Li(t) {
      return (
        null == t && (t = pe),
        Dt
          ? (It - (kt ? Rt : 0) - (Et[t + 1] - Et[t] - Rt)) / 2
          : Ht
          ? (It - Ht) / 2
          : (zt - 1) / 2
      );
    }
    function Bi() {
      var t = It + (kt ? Rt : 0) - (Ht ? (Ht + Rt) * oe : Et[oe]);
      return (
        Pt &&
          !Gt &&
          (t = Ht ? -(Ht + Rt) * (oe - 1) - Li() : Li(oe - 1) - Et[oe - 1]),
        0 < t && (t = 0),
        t
      );
    }
    function Si(t) {
      var e;
      if ((null == t && (t = pe), ht && !Dt))
        if (Ht) (e = -(Ht + Rt) * t), Pt && (e += Li());
        else {
          var n = X ? oe : zt;
          Pt && (t -= Li()), (e = (100 * -t) / n);
        }
      else (e = -Et[t]), Pt && Dt && (e += Li());
      return ue && (e = Math.max(e, le)), e + (!ht || Dt || Ht ? "px" : "%");
    }
    function Oi(t) {
      Ai(gt, "0s"), Di(t);
    }
    function Di(t) {
      null == t && (t = Si()), (gt.style[ce] = fe + t + de);
    }
    function Hi(t, e, n, i) {
      var a = t + zt;
      Gt || (a = Math.min(a, oe));
      for (var r = t; r < a; r++) {
        var o = Ct[r];
        i || (o.style.left = (100 * (r - pe)) / zt + "%"),
          ft && J && (o.style[J] = o.style[_] = (ft * (r - t)) / 1e3 + "s"),
          y(o, e),
          m(o, n),
          i && ae.push(o);
      }
    }
    function ki(t, e) {
      se && Bn(),
        (pe !== he || e) &&
          (Me.emit("indexChanged", ia()),
          Me.emit("transitionStart", ia()),
          Qt && pi(),
          hn && t && 0 <= ["click", "keydown"].indexOf(t.type) && Vi(),
          (Ce = !0),
          Sn());
    }
    function Ri(t) {
      return t.toLowerCase().replace(/-/g, "");
    }
    function Ii(t) {
      if (rt || Ce) {
        if ((Me.emit("transitionEnd", ia(t)), !rt && 0 < ae.length))
          for (var e = 0; e < ae.length; e++) {
            var n = ae[e];
            (n.style.left = ""),
              _ && J && ((n.style[_] = ""), (n.style[J] = "")),
              y(n, ct),
              m(n, dt);
          }
        if (
          !t ||
          (!rt && t.target.parentNode === gt) ||
          (t.target === gt && Ri(t.propertyName) === Ri(ce))
        ) {
          if (!se) {
            var i = pe;
            Bn(), pe !== i && (Me.emit("indexChanged", ia()), Oi());
          }
          "inner" === at && Me.emit("innerLoaded", ia()), (Ce = !1), (he = pe);
        }
      }
    }
    function Pi(t, e) {
      if (!Be)
        if ("prev" === t) zi(e, -1);
        else if ("next" === t) zi(e, 1);
        else {
          if (Ce) {
            if (ge) return;
            Ii();
          }
          var n = kn(),
            i = 0;
          if (
            ("first" === t
              ? (i = -n)
              : "last" === t
              ? (i = rt ? wt - zt - n : wt - 1 - n)
              : ("number" != typeof t && (t = parseInt(t)),
                isNaN(t) ||
                  (e || (t = Math.max(0, Math.min(wt - 1, t))), (i = t - n))),
            !rt && i && Math.abs(i) < zt)
          ) {
            var a = 0 < i ? 1 : -1;
            i += me <= pe + i - wt ? wt * a : 2 * wt * a * -1;
          }
          (pe += i),
            rt && Gt && (pe < me && (pe += wt), ye < pe && (pe -= wt)),
            kn(pe) !== kn(he) && ki(e);
        }
    }
    function zi(t, e) {
      if (Ce) {
        if (ge) return;
        Ii();
      }
      var n;
      if (!e) {
        for (var i = Yi((t = Xi(t))); i !== Ue && [Ze, $e].indexOf(i) < 0; )
          i = i.parentNode;
        var a = [Ze, $e].indexOf(i);
        0 <= a && ((n = !0), (e = 0 === a ? -1 : 1));
      }
      if (Vt) {
        if (pe === me && -1 === e) return void Pi("last", t);
        if (pe === ye && 1 === e) return void Pi("first", t);
      }
      e &&
        ((pe += Wt * e),
        Dt && (pe = Math.floor(pe)),
        ki(n || (t && "keydown" === t.type) ? t : null));
    }
    function Wi() {
      (pn = setInterval(function () {
        zi(null, xn);
      }, Zt)),
        (hn = !0);
    }
    function Fi() {
      clearInterval(pn), (hn = !1);
    }
    function qi(t, e) {
      C(bn, {
        "data-action": t,
      }),
        (bn.innerHTML = wn[0] + t + wn[1] + e);
    }
    function ji() {
      Wi(), bn && qi("stop", $t[1]);
    }
    function Vi() {
      Fi(), bn && qi("start", $t[0]);
    }
    function Gi() {
      hn ? (Vi(), (yn = !0)) : (ji(), (yn = !1));
    }
    function Qi(t) {
      t.focus();
    }
    function Xi(t) {
      return Ki((t = t || l.event)) ? t.changedTouches[0] : t;
    }
    function Yi(t) {
      return t.target || l.event.srcElement;
    }
    function Ki(t) {
      return 0 <= t.type.indexOf("touch");
    }
    function Ji(t) {
      t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
    }
    function Ui() {
      return (
        (r = Nn.y - En.y),
        (o = Nn.x - En.x),
        (e = Math.atan2(r, o) * (180 / Math.PI)),
        (i = !1),
        90 - (n = xe) <= (a = Math.abs(90 - Math.abs(e)))
          ? (i = "horizontal")
          : a <= n && (i = "vertical"),
        i === t.axis
      );
      var e, n, i, a, r, o;
    }
    function _i(t) {
      if (Ce) {
        if (ge) return;
        Ii();
      }
      _t && hn && Fi(), (An = !0), Tn && (i(Tn), (Tn = null));
      var e = Xi(t);
      Me.emit(Ki(t) ? "touchStart" : "dragStart", ia(t)),
        !Ki(t) && 0 <= ["img", "a"].indexOf(wi(Yi(t))) && Ji(t),
        (Nn.x = En.x = e.clientX),
        (Nn.y = En.y = e.clientY),
        rt && ((Mn = parseFloat(gt.style[ce].replace(fe, ""))), Ai(gt, "0s"));
    }
    function Zi(t) {
      if (An) {
        var n = Xi(t);
        (Nn.x = n.clientX),
          (Nn.y = n.clientY),
          rt
            ? Tn ||
              (Tn = e(function () {
                !(function t(n) {
                  if (be) {
                    if (
                      (i(Tn),
                      An &&
                        (Tn = e(function () {
                          t(n);
                        })),
                      "?" === be && (be = Ui()),
                      be)
                    ) {
                      !Ye && Ki(n) && (Ye = !0);
                      try {
                        n.type &&
                          Me.emit(Ki(n) ? "touchMove" : "dragMove", ia(n));
                      } catch (t) {}
                      var a = Mn,
                        r = Ln(Nn, En);
                      if (!ht || Ht || Dt) (a += r), (a += "px");
                      else
                        (a += X
                          ? (r * zt * 100) / ((It + Rt) * oe)
                          : (100 * r) / (It + Rt)),
                          (a += "%");
                      gt.style[ce] = fe + a + de;
                    }
                  } else An = !1;
                })(t);
              }))
            : ("?" === be && (be = Ui()), be && (Ye = !0)),
          Ye && t.preventDefault();
      }
    }
    function $i(n) {
      if (An) {
        Tn && (i(Tn), (Tn = null)), rt && Ai(gt, ""), (An = !1);
        var a = Xi(n);
        (Nn.x = a.clientX), (Nn.y = a.clientY);
        var r = Ln(Nn, En);
        if (Math.abs(r)) {
          if (!Ki(n)) {
            var o = Yi(n);
            D(o, {
              click: function t(e) {
                Ji(e),
                  H(o, {
                    click: t,
                  });
              },
            });
          }
          rt
            ? (Tn = e(function () {
                if (ht && !Dt) {
                  var t = (-r * zt) / (It + Rt);
                  (t = 0 < r ? Math.floor(t) : Math.ceil(t)), (pe += t);
                } else {
                  var e = -(Mn + r);
                  if (e <= 0) pe = me;
                  else if (e >= Et[oe - 1]) pe = ye;
                  else
                    for (var i = 0; i < oe && e >= Et[i]; )
                      e > Et[(pe = i)] && r < 0 && (pe += 1), i++;
                }
                ki(n, r), Me.emit(Ki(n) ? "touchEnd" : "dragEnd", ia(n));
              }))
            : be && zi(n, 0 < r ? -1 : 1);
        }
      }
      "auto" === t.preventScrollOnTouch && (Ye = !1),
        xe && (be = "?"),
        _t && !hn && Wi();
    }
    function ta() {
      (vt || yt).style.height = Et[pe + zt] - Et[pe] + "px";
    }
    function ea() {
      var t = Ht ? ((Ht + Rt) * wt) / It : wt / zt;
      return Math.min(Math.ceil(t), wt);
    }
    function na() {
      if (Kt && !Fe && on !== un) {
        var t = un,
          e = on,
          n = E;
        for (on < un && ((t = on), (e = un), (n = T)); t < e; ) n(nn[t]), t++;
        un = on;
      }
    }
    function ia(t) {
      return {
        container: gt,
        slideItems: Ct,
        navContainer: an,
        navItems: nn,
        controlsContainer: Ue,
        hasControls: ze,
        prevButton: Ze,
        nextButton: $e,
        items: zt,
        slideBy: Wt,
        cloneCount: re,
        slideCount: wt,
        slideCountNew: oe,
        index: pe,
        indexCached: he,
        displayIndex: Dn(),
        navCurrentIndex: sn,
        navCurrentIndexCached: cn,
        pages: on,
        pagesCached: un,
        sheet: ne,
        isOn: Tt,
        event: t || {},
      };
    }
    tt && console.warn("No slides found in", t.container);
  };
  return R;
})();

// Tiny slider end

// Lity start

/*! Lity - v2.4.0 - 2019-08-10
 * http://sorgalla.com/lity/
 * Copyright (c) 2015-2019 Jan Sorgalla; Licensed MIT */

!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (c) {
        return b(a, c);
      })
    : "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = b(a, require("jquery")))
    : (a.lity = b(a, a.jQuery || a.Zepto));
})("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  function c(a) {
    var b = B();
    return (
      N && a.length
        ? (a.one(N, b.resolve), setTimeout(b.resolve, 500))
        : b.resolve(),
      b.promise()
    );
  }
  function d(a, c, d) {
    if (1 === arguments.length) return b.extend({}, a);
    if ("string" == typeof c) {
      if (void 0 === d) return void 0 === a[c] ? null : a[c];
      a[c] = d;
    } else b.extend(a, c);
    return this;
  }
  function e(a) {
    for (
      var b,
        c = decodeURI(a.split("#")[0]).split("&"),
        d = {},
        e = 0,
        f = c.length;
      e < f;
      e++
    )
      c[e] && ((b = c[e].split("=")), (d[b[0]] = b[1]));
    return d;
  }
  function f(a, c) {
    return a + (a.indexOf("?") > -1 ? "&" : "?") + b.param(c);
  }
  function g(a, b) {
    var c = a.indexOf("#");
    return -1 === c ? b : (c > 0 && (a = a.substr(c)), b + a);
  }
  function h(a) {
    return b('<span class="lity-error"/>').append(a);
  }
  function i(a, c) {
    var d =
        (c.opener() && c.opener().data("lity-desc")) ||
        "Image with no description",
      e = b('<img src="' + a + '" alt="' + d + '"/>'),
      f = B(),
      g = function () {
        f.reject(h("Failed loading image"));
      };
    return (
      e
        .on("load", function () {
          if (0 === this.naturalWidth) return g();
          f.resolve(e);
        })
        .on("error", g),
      f.promise()
    );
  }
  function j(a, c) {
    var d, e, f;
    try {
      d = b(a);
    } catch (a) {
      return !1;
    }
    return (
      !!d.length &&
      ((e = b('<i style="display:none !important"/>')),
      (f = d.hasClass("lity-hide")),
      c.element().one("lity:remove", function () {
        e.before(d).remove(),
          f && !d.closest(".lity-content").length && d.addClass("lity-hide");
      }),
      d.removeClass("lity-hide").after(e))
    );
  }
  function k(a) {
    var c = J.exec(a);
    return (
      !!c &&
      o(
        g(
          a,
          f(
            "https://www.youtube" + (c[2] || "") + ".com/embed/" + c[4],
            b.extend(
              {
                autoplay: 1,
              },
              e(c[5] || "")
            )
          )
        )
      )
    );
  }
  function l(a) {
    var c = K.exec(a);
    return (
      !!c &&
      o(
        g(
          a,
          f(
            "https://player.vimeo.com/video/" + c[3],
            b.extend(
              {
                autoplay: 1,
              },
              e(c[4] || "")
            )
          )
        )
      )
    );
  }
  function m(a) {
    var c = M.exec(a);
    return (
      !!c &&
      (0 !== a.indexOf("http") && (a = "https:" + a),
      o(
        g(
          a,
          f(
            "https://www.facebook.com/plugins/video.php?href=" + a,
            b.extend(
              {
                autoplay: 1,
              },
              e(c[4] || "")
            )
          )
        )
      ))
    );
  }
  function n(a) {
    var b = L.exec(a);
    return (
      !!b &&
      o(
        g(
          a,
          f("https://www.google." + b[3] + "/maps?" + b[6], {
            output: b[6].indexOf("layer=c") > 0 ? "svembed" : "embed",
          })
        )
      )
    );
  }
  function o(a) {
    return (
      '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen allow="autoplay; fullscreen" src="' +
      a +
      '"/></div>'
    );
  }
  function p() {
    return z.documentElement.clientHeight
      ? z.documentElement.clientHeight
      : Math.round(A.height());
  }
  function q(a) {
    var b = v();
    b &&
      (27 === a.keyCode && b.options("esc") && b.close(),
      9 === a.keyCode && r(a, b));
  }
  function r(a, b) {
    var c = b.element().find(G),
      d = c.index(z.activeElement);
    a.shiftKey && d <= 0
      ? (c.get(c.length - 1).focus(), a.preventDefault())
      : a.shiftKey ||
        d !== c.length - 1 ||
        (c.get(0).focus(), a.preventDefault());
  }
  function s() {
    b.each(D, function (a, b) {
      b.resize();
    });
  }
  function t(a) {
    1 === D.unshift(a) &&
      (C.addClass("lity-active"),
      A.on({
        resize: s,
        keydown: q,
      })),
      b("body > *")
        .not(a.element())
        .addClass("lity-hidden")
        .each(function () {
          var a = b(this);
          void 0 === a.data(F) && a.data(F, a.attr(E) || null);
        })
        .attr(E, "true");
  }
  function u(a) {
    var c;
    a.element().attr(E, "true"),
      1 === D.length &&
        (C.removeClass("lity-active"),
        A.off({
          resize: s,
          keydown: q,
        })),
      (D = b.grep(D, function (b) {
        return a !== b;
      })),
      (c = D.length ? D[0].element() : b(".lity-hidden")),
      c.removeClass("lity-hidden").each(function () {
        var a = b(this),
          c = a.data(F);
        c ? a.attr(E, c) : a.removeAttr(E), a.removeData(F);
      });
  }
  function v() {
    return 0 === D.length ? null : D[0];
  }
  function w(a, c, d, e) {
    var f,
      g = "inline",
      h = b.extend({}, d);
    return (
      e && h[e]
        ? ((f = h[e](a, c)), (g = e))
        : (b.each(["inline", "iframe"], function (a, b) {
            delete h[b], (h[b] = d[b]);
          }),
          b.each(h, function (b, d) {
            return (
              !d ||
              !(!d.test || d.test(a, c)) ||
              ((f = d(a, c)), !1 !== f ? ((g = b), !1) : void 0)
            );
          })),
      {
        handler: g,
        content: f || "",
      }
    );
  }
  function x(a, e, f, g) {
    function h(a) {
      (k = b(a).css("max-height", p() + "px")),
        j.find(".lity-loader").each(function () {
          var a = b(this);
          c(a).always(function () {
            a.remove();
          });
        }),
        j.removeClass("lity-loading").find(".lity-content").empty().append(k),
        (m = !0),
        k.trigger("lity:ready", [l]);
    }
    var i,
      j,
      k,
      l = this,
      m = !1,
      n = !1;
    (e = b.extend({}, H, e)),
      (j = b(e.template)),
      (l.element = function () {
        return j;
      }),
      (l.opener = function () {
        return f;
      }),
      (l.options = b.proxy(d, l, e)),
      (l.handlers = b.proxy(d, l, e.handlers)),
      (l.resize = function () {
        m && !n && k.css("max-height", p() + "px").trigger("lity:resize", [l]);
      }),
      (l.close = function () {
        if (m && !n) {
          (n = !0), u(l);
          var a = B();
          if (
            g &&
            (z.activeElement === j[0] || b.contains(j[0], z.activeElement))
          )
            try {
              g.focus();
            } catch (a) {}
          return (
            k.trigger("lity:close", [l]),
            j.removeClass("lity-opened").addClass("lity-closed"),
            c(k.add(j)).always(function () {
              k.trigger("lity:remove", [l]),
                j.remove(),
                (j = void 0),
                a.resolve();
            }),
            a.promise()
          );
        }
      }),
      (i = w(a, l, e.handlers, e.handler)),
      j
        .attr(E, "false")
        .addClass("lity-loading lity-opened lity-" + i.handler)
        .appendTo("body")
        .focus()
        .on("click", "[data-lity-close]", function (a) {
          b(a.target).is("[data-lity-close]") && l.close();
        })
        .trigger("lity:open", [l]),
      t(l),
      b.when(i.content).always(h);
  }
  function y(a, c, d) {
    a.preventDefault
      ? (a.preventDefault(),
        (d = b(this)),
        (a = d.data("lity-target") || d.attr("href") || d.attr("src")))
      : (d = b(d));
    var e = new x(
      a,
      b.extend({}, d.data("lity-options") || d.data("lity"), c),
      d,
      z.activeElement
    );
    if (!a.preventDefault) return e;
  }
  var z = a.document,
    A = b(a),
    B = b.Deferred,
    C = b("html"),
    D = [],
    E = "aria-hidden",
    F = "lity-" + E,
    G =
      'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',
    H = {
      esc: !0,
      handler: null,
      handlers: {
        image: i,
        inline: j,
        youtube: k,
        vimeo: l,
        googlemaps: n,
        facebookvideo: m,
        iframe: o,
      },
      template:
        '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>',
    },
    I = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,
    J =
      /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,
    K = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,
    L = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,
    M = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,
    N = (function () {
      var a = z.createElement("div"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return b[c];
      return !1;
    })();
  return (
    (i.test = function (a) {
      return I.test(a);
    }),
    (y.version = "2.4.0"),
    (y.options = b.proxy(d, y, H)),
    (y.handlers = b.proxy(d, y, H.handlers)),
    (y.current = v),
    b(z).on("click.lity", "[data-lity]", y),
    y
  );
});

// Lity end

// Simple bar start

/**
 * SimpleBar.js - v4.2.3
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 *
 * Under MIT License
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).SimpleBar = e());
})(this, function () {
  "use strict";
  var t = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    },
    e = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    i = {}.toString,
    r = function (t) {
      return i.call(t).slice(8, -1);
    },
    n = "".split,
    s = e(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == r(t) ? n.call(t, "") : Object(t);
        }
      : Object,
    o = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    a = function (t) {
      return Object(o(t));
    },
    l = Math.ceil,
    c = Math.floor,
    u = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? c : l)(t);
    },
    h = Math.min,
    f = function (t) {
      return t > 0 ? h(u(t), 9007199254740991) : 0;
    },
    d = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    p =
      Array.isArray ||
      function (t) {
        return "Array" == r(t);
      },
    v =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function g(t, e) {
    return (
      t(
        (e = {
          exports: {},
        }),
        e.exports
      ),
      e.exports
    );
  }
  var b,
    m,
    y,
    x,
    E =
      "object" == typeof window && window && window.Math == Math
        ? window
        : "object" == typeof self && self && self.Math == Math
        ? self
        : Function("return this")(),
    w = !e(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
    O = E.document,
    _ = d(O) && d(O.createElement),
    S =
      !w &&
      !e(function () {
        return (
          7 !=
          Object.defineProperty(
            ((t = "div"), _ ? O.createElement(t) : {}),
            "a",
            {
              get: function () {
                return 7;
              },
            }
          ).a
        );
        var t;
      }),
    L = function (t) {
      if (!d(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    A = function (t, e) {
      if (!d(t)) return t;
      var i, r;
      if (e && "function" == typeof (i = t.toString) && !d((r = i.call(t))))
        return r;
      if ("function" == typeof (i = t.valueOf) && !d((r = i.call(t)))) return r;
      if (!e && "function" == typeof (i = t.toString) && !d((r = i.call(t))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    },
    M = Object.defineProperty,
    k = {
      f: w
        ? M
        : function (t, e, i) {
            if ((L(t), (e = A(e, !0)), L(i), S))
              try {
                return M(t, e, i);
              } catch (t) {}
            if ("get" in i || "set" in i)
              throw TypeError("Accessors not supported");
            return "value" in i && (t[e] = i.value), t;
          },
    },
    W = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    },
    T = w
      ? function (t, e, i) {
          return k.f(t, e, W(1, i));
        }
      : function (t, e, i) {
          return (t[e] = i), t;
        },
    R = function (t, e) {
      try {
        T(E, t, e);
      } catch (i) {
        E[t] = e;
      }
      return e;
    },
    j = g(function (t) {
      var e = E["__core-js_shared__"] || R("__core-js_shared__", {});
      (t.exports = function (t, i) {
        return e[t] || (e[t] = void 0 !== i ? i : {});
      })("versions", []).push({
        version: "3.0.1",
        mode: "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    }),
    C = 0,
    N = Math.random(),
    z = function (t) {
      return "Symbol(".concat(
        void 0 === t ? "" : t,
        ")_",
        (++C + N).toString(36)
      );
    },
    D = !e(function () {
      return !String(Symbol());
    }),
    V = j("wks"),
    I = E.Symbol,
    B = function (t) {
      return V[t] || (V[t] = (D && I[t]) || (D ? I : z)("Symbol." + t));
    },
    P = B("species"),
    H = function (t, e) {
      var i;
      return (
        p(t) &&
          ("function" != typeof (i = t.constructor) ||
          (i !== Array && !p(i.prototype))
            ? d(i) && null === (i = i[P]) && (i = void 0)
            : (i = void 0)),
        new (void 0 === i ? Array : i)(0 === e ? 0 : e)
      );
    },
    F = function (e, i) {
      var r = 1 == e,
        n = 2 == e,
        o = 3 == e,
        l = 4 == e,
        c = 6 == e,
        u = 5 == e || c,
        h = i || H;
      return function (i, d, p) {
        for (
          var v,
            g,
            b = a(i),
            m = s(b),
            y = (function (e, i, r) {
              if ((t(e), void 0 === i)) return e;
              switch (r) {
                case 0:
                  return function () {
                    return e.call(i);
                  };
                case 1:
                  return function (t) {
                    return e.call(i, t);
                  };
                case 2:
                  return function (t, r) {
                    return e.call(i, t, r);
                  };
                case 3:
                  return function (t, r, n) {
                    return e.call(i, t, r, n);
                  };
              }
              return function () {
                return e.apply(i, arguments);
              };
            })(d, p, 3),
            x = f(m.length),
            E = 0,
            w = r ? h(i, x) : n ? h(i, 0) : void 0;
          x > E;
          E++
        )
          if ((u || E in m) && ((g = y((v = m[E]), E, b)), e))
            if (r) w[E] = g;
            else if (g)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return v;
                case 6:
                  return E;
                case 2:
                  w.push(v);
              }
            else if (l) return !1;
        return c ? -1 : o || l ? l : w;
      };
    },
    q = B("species"),
    $ = {}.propertyIsEnumerable,
    Y = Object.getOwnPropertyDescriptor,
    X = {
      f:
        Y &&
        !$.call(
          {
            1: 2,
          },
          1
        )
          ? function (t) {
              var e = Y(this, t);
              return !!e && e.enumerable;
            }
          : $,
    },
    G = function (t) {
      return s(o(t));
    },
    K = {}.hasOwnProperty,
    U = function (t, e) {
      return K.call(t, e);
    },
    J = Object.getOwnPropertyDescriptor,
    Q = {
      f: w
        ? J
        : function (t, e) {
            if (((t = G(t)), (e = A(e, !0)), S))
              try {
                return J(t, e);
              } catch (t) {}
            if (U(t, e)) return W(!X.f.call(t, e), t[e]);
          },
    },
    Z = j("native-function-to-string", Function.toString),
    tt = E.WeakMap,
    et = "function" == typeof tt && /native code/.test(Z.call(tt)),
    it = j("keys"),
    rt = {},
    nt = E.WeakMap;
  if (et) {
    var st = new nt(),
      ot = st.get,
      at = st.has,
      lt = st.set;
    (b = function (t, e) {
      return lt.call(st, t, e), e;
    }),
      (m = function (t) {
        return ot.call(st, t) || {};
      }),
      (y = function (t) {
        return at.call(st, t);
      });
  } else {
    var ct = it[(x = "state")] || (it[x] = z(x));
    (rt[ct] = !0),
      (b = function (t, e) {
        return T(t, ct, e), e;
      }),
      (m = function (t) {
        return U(t, ct) ? t[ct] : {};
      }),
      (y = function (t) {
        return U(t, ct);
      });
  }
  var ut,
    ht,
    ft = {
      set: b,
      get: m,
      has: y,
      enforce: function (t) {
        return y(t) ? m(t) : b(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var i;
          if (!d(e) || (i = m(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return i;
        };
      },
    },
    dt = g(function (t) {
      var e = ft.get,
        i = ft.enforce,
        r = String(Z).split("toString");
      j("inspectSource", function (t) {
        return Z.call(t);
      }),
        (t.exports = function (t, e, n, s) {
          var o = !!s && !!s.unsafe,
            a = !!s && !!s.enumerable,
            l = !!s && !!s.noTargetGet;
          "function" == typeof n &&
            ("string" != typeof e || U(n, "name") || T(n, "name", e),
            (i(n).source = r.join("string" == typeof e ? e : ""))),
            t !== E
              ? (o ? !l && t[e] && (a = !0) : delete t[e],
                a ? (t[e] = n) : T(t, e, n))
              : a
              ? (t[e] = n)
              : R(e, n);
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && e(this).source) || Z.call(this);
        });
    }),
    pt = Math.max,
    vt = Math.min,
    gt =
      ((ut = !1),
      function (t, e, i) {
        var r,
          n = G(t),
          s = f(n.length),
          o = (function (t, e) {
            var i = u(t);
            return i < 0 ? pt(i + e, 0) : vt(i, e);
          })(i, s);
        if (ut && e != e) {
          for (; s > o; ) if ((r = n[o++]) != r) return !0;
        } else
          for (; s > o; o++)
            if ((ut || o in n) && n[o] === e) return ut || o || 0;
        return !ut && -1;
      }),
    bt = function (t, e) {
      var i,
        r = G(t),
        n = 0,
        s = [];
      for (i in r) !U(rt, i) && U(r, i) && s.push(i);
      for (; e.length > n; ) U(r, (i = e[n++])) && (~gt(s, i) || s.push(i));
      return s;
    },
    mt = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    yt = mt.concat("length", "prototype"),
    xt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return bt(t, yt);
        },
    },
    Et = {
      f: Object.getOwnPropertySymbols,
    },
    wt = E.Reflect,
    Ot =
      (wt && wt.ownKeys) ||
      function (t) {
        var e = xt.f(L(t)),
          i = Et.f;
        return i ? e.concat(i(t)) : e;
      },
    _t = function (t, e) {
      for (var i = Ot(e), r = k.f, n = Q.f, s = 0; s < i.length; s++) {
        var o = i[s];
        U(t, o) || r(t, o, n(e, o));
      }
    },
    St = /#|\.prototype\./,
    Lt = function (t, i) {
      var r = Mt[At(t)];
      return r == Wt || (r != kt && ("function" == typeof i ? e(i) : !!i));
    },
    At = (Lt.normalize = function (t) {
      return String(t).replace(St, ".").toLowerCase();
    }),
    Mt = (Lt.data = {}),
    kt = (Lt.NATIVE = "N"),
    Wt = (Lt.POLYFILL = "P"),
    Tt = Lt,
    Rt = Q.f,
    jt = function (t, e) {
      var i,
        r,
        n,
        s,
        o,
        a = t.target,
        l = t.global,
        c = t.stat;
      if ((i = l ? E : c ? E[a] || R(a, {}) : (E[a] || {}).prototype))
        for (r in e) {
          if (
            ((s = e[r]),
            (n = t.noTargetGet ? (o = Rt(i, r)) && o.value : i[r]),
            !Tt(l ? r : a + (c ? "." : "#") + r, t.forced) && void 0 !== n)
          ) {
            if (typeof s == typeof n) continue;
            _t(s, n);
          }
          (t.sham || (n && n.sham)) && T(s, "sham", !0), dt(i, r, s, t);
        }
    },
    Ct = F(2);
  jt(
    {
      target: "Array",
      proto: !0,
      forced: !((ht = "filter"),
      !e(function () {
        var t = [];
        return (
          ((t.constructor = {})[q] = function () {
            return {
              foo: 1,
            };
          }),
          1 !== t[ht](Boolean).foo
        );
      })),
    },
    {
      filter: function (t) {
        return Ct(this, t, arguments[1]);
      },
    }
  );
  var Nt = function (t, i) {
      var r = [][t];
      return (
        !r ||
        !e(function () {
          r.call(
            null,
            i ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    zt = [].forEach,
    Dt = F(0),
    Vt = Nt("forEach")
      ? function (t) {
          return Dt(this, t, arguments[1]);
        }
      : zt;
  jt(
    {
      target: "Array",
      proto: !0,
      forced: [].forEach != Vt,
    },
    {
      forEach: Vt,
    }
  );
  jt(
    {
      target: "Array",
      proto: !0,
      forced: Nt("reduce"),
    },
    {
      reduce: function (e) {
        return (function (e, i, r, n, o) {
          t(i);
          var l = a(e),
            c = s(l),
            u = f(l.length),
            h = o ? u - 1 : 0,
            d = o ? -1 : 1;
          if (r < 2)
            for (;;) {
              if (h in c) {
                (n = c[h]), (h += d);
                break;
              }
              if (((h += d), o ? h < 0 : u <= h))
                throw TypeError("Reduce of empty array with no initial value");
            }
          for (; o ? h >= 0 : u > h; h += d) h in c && (n = i(n, c[h], h, l));
          return n;
        })(this, e, arguments.length, arguments[1], !1);
      },
    }
  );
  var It = k.f,
    Bt = Function.prototype,
    Pt = Bt.toString,
    Ht = /^\s*function ([^ (]*)/;
  !w ||
    "name" in Bt ||
    It(Bt, "name", {
      configurable: !0,
      get: function () {
        try {
          return Pt.call(this).match(Ht)[1];
        } catch (t) {
          return "";
        }
      },
    });
  var Ft =
      Object.keys ||
      function (t) {
        return bt(t, mt);
      },
    qt = Object.assign,
    $t =
      !qt ||
      e(function () {
        var t = {},
          e = {},
          i = Symbol();
        return (
          (t[i] = 7),
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != qt({}, t)[i] || "abcdefghijklmnopqrst" != Ft(qt({}, e)).join("")
        );
      })
        ? function (t, e) {
            for (
              var i = a(t), r = arguments.length, n = 1, o = Et.f, l = X.f;
              r > n;

            )
              for (
                var c,
                  u = s(arguments[n++]),
                  h = o ? Ft(u).concat(o(u)) : Ft(u),
                  f = h.length,
                  d = 0;
                f > d;

              )
                l.call(u, (c = h[d++])) && (i[c] = u[c]);
            return i;
          }
        : qt;
  jt(
    {
      target: "Object",
      stat: !0,
      forced: Object.assign !== $t,
    },
    {
      assign: $t,
    }
  );
  var Yt = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    Xt = "[" + Yt + "]",
    Gt = RegExp("^" + Xt + Xt + "*"),
    Kt = RegExp(Xt + Xt + "*$"),
    Ut = E.parseInt,
    Jt = /^[-+]?0[xX]/,
    Qt =
      8 !== Ut(Yt + "08") || 22 !== Ut(Yt + "0x16")
        ? function (t, e) {
            var i = (function (t, e) {
              return (
                (t = String(o(t))),
                1 & e && (t = t.replace(Gt, "")),
                2 & e && (t = t.replace(Kt, "")),
                t
              );
            })(String(t), 3);
            return Ut(i, e >>> 0 || (Jt.test(i) ? 16 : 10));
          }
        : Ut;
  jt(
    {
      global: !0,
      forced: parseInt != Qt,
    },
    {
      parseInt: Qt,
    }
  );
  var Zt,
    te,
    ee = RegExp.prototype.exec,
    ie = String.prototype.replace,
    re = ee,
    ne =
      ((Zt = /a/),
      (te = /b*/g),
      ee.call(Zt, "a"),
      ee.call(te, "a"),
      0 !== Zt.lastIndex || 0 !== te.lastIndex),
    se = void 0 !== /()??/.exec("")[1];
  (ne || se) &&
    (re = function (t) {
      var e,
        i,
        r,
        n,
        s = this;
      return (
        se &&
          (i = new RegExp(
            "^" + s.source + "$(?!\\s)",
            function () {
              var t = L(this),
                e = "";
              return (
                t.global && (e += "g"),
                t.ignoreCase && (e += "i"),
                t.multiline && (e += "m"),
                t.unicode && (e += "u"),
                t.sticky && (e += "y"),
                e
              );
            }.call(s)
          )),
        ne && (e = s.lastIndex),
        (r = ee.call(s, t)),
        ne && r && (s.lastIndex = s.global ? r.index + r[0].length : e),
        se &&
          r &&
          r.length > 1 &&
          ie.call(r[0], i, function () {
            for (n = 1; n < arguments.length - 2; n++)
              void 0 === arguments[n] && (r[n] = void 0);
          }),
        r
      );
    });
  var oe = re;
  jt(
    {
      target: "RegExp",
      proto: !0,
      forced: /./.exec !== oe,
    },
    {
      exec: oe,
    }
  );
  var ae = function (t, e, i) {
      return (
        e +
        (i
          ? (function (t, e, i) {
              var r,
                n,
                s = String(o(t)),
                a = u(e),
                l = s.length;
              return a < 0 || a >= l
                ? i
                  ? ""
                  : void 0
                : (r = s.charCodeAt(a)) < 55296 ||
                  r > 56319 ||
                  a + 1 === l ||
                  (n = s.charCodeAt(a + 1)) < 56320 ||
                  n > 57343
                ? i
                  ? s.charAt(a)
                  : r
                : i
                ? s.slice(a, a + 2)
                : n - 56320 + ((r - 55296) << 10) + 65536;
            })(t, e, !0).length
          : 1)
      );
    },
    le = function (t, e) {
      var i = t.exec;
      if ("function" == typeof i) {
        var n = i.call(t, e);
        if ("object" != typeof n)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return n;
      }
      if ("RegExp" !== r(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return oe.call(t, e);
    },
    ce = B("species"),
    ue = !e(function () {
      var t = /./;
      return (
        (t.exec = function () {
          var t = [];
          return (
            (t.groups = {
              a: "7",
            }),
            t
          );
        }),
        "7" !== "".replace(t, "$<a>")
      );
    }),
    he = !e(function () {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function () {
        return e.apply(this, arguments);
      };
      var i = "ab".split(t);
      return 2 !== i.length || "a" !== i[0] || "b" !== i[1];
    }),
    fe = function (t, i, r, n) {
      var s = B(t),
        o = !e(function () {
          var e = {};
          return (
            (e[s] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        a =
          o &&
          !e(function () {
            var e = !1,
              i = /a/;
            return (
              (i.exec = function () {
                return (e = !0), null;
              }),
              "split" === t &&
                ((i.constructor = {}),
                (i.constructor[ce] = function () {
                  return i;
                })),
              i[s](""),
              !e
            );
          });
      if (!o || !a || ("replace" === t && !ue) || ("split" === t && !he)) {
        var l = /./[s],
          c = r(s, ""[t], function (t, e, i, r, n) {
            return e.exec === oe
              ? o && !n
                ? {
                    done: !0,
                    value: l.call(e, i, r),
                  }
                : {
                    done: !0,
                    value: t.call(i, e, r),
                  }
              : {
                  done: !1,
                };
          }),
          u = c[0],
          h = c[1];
        dt(String.prototype, t, u),
          dt(
            RegExp.prototype,
            s,
            2 == i
              ? function (t, e) {
                  return h.call(t, this, e);
                }
              : function (t) {
                  return h.call(t, this);
                }
          ),
          n && T(RegExp.prototype[s], "sham", !0);
      }
    };
  fe("match", 1, function (t, e, i) {
    return [
      function (e) {
        var i = o(this),
          r = null == e ? void 0 : e[t];
        return void 0 !== r ? r.call(e, i) : new RegExp(e)[t](String(i));
      },
      function (t) {
        var r = i(e, t, this);
        if (r.done) return r.value;
        var n = L(t),
          s = String(this);
        if (!n.global) return le(n, s);
        var o = n.unicode;
        n.lastIndex = 0;
        for (var a, l = [], c = 0; null !== (a = le(n, s)); ) {
          var u = String(a[0]);
          (l[c] = u), "" === u && (n.lastIndex = ae(s, f(n.lastIndex), o)), c++;
        }
        return 0 === c ? null : l;
      },
    ];
  });
  var de = Math.max,
    pe = Math.min,
    ve = Math.floor,
    ge = /\$([$&`']|\d\d?|<[^>]*>)/g,
    be = /\$([$&`']|\d\d?)/g;
  fe("replace", 2, function (t, e, i) {
    return [
      function (i, r) {
        var n = o(this),
          s = null == i ? void 0 : i[t];
        return void 0 !== s ? s.call(i, n, r) : e.call(String(n), i, r);
      },
      function (t, n) {
        var s = i(e, t, this, n);
        if (s.done) return s.value;
        var o = L(t),
          a = String(this),
          l = "function" == typeof n;
        l || (n = String(n));
        var c = o.global;
        if (c) {
          var h = o.unicode;
          o.lastIndex = 0;
        }
        for (var d = []; ; ) {
          var p = le(o, a);
          if (null === p) break;
          if ((d.push(p), !c)) break;
          "" === String(p[0]) && (o.lastIndex = ae(a, f(o.lastIndex), h));
        }
        for (var v, g = "", b = 0, m = 0; m < d.length; m++) {
          p = d[m];
          for (
            var y = String(p[0]),
              x = de(pe(u(p.index), a.length), 0),
              E = [],
              w = 1;
            w < p.length;
            w++
          )
            E.push(void 0 === (v = p[w]) ? v : String(v));
          var O = p.groups;
          if (l) {
            var _ = [y].concat(E, x, a);
            void 0 !== O && _.push(O);
            var S = String(n.apply(void 0, _));
          } else S = r(y, a, x, E, O, n);
          x >= b && ((g += a.slice(b, x) + S), (b = x + y.length));
        }
        return g + a.slice(b);
      },
    ];
    function r(t, i, r, n, s, o) {
      var l = r + t.length,
        c = n.length,
        u = be;
      return (
        void 0 !== s && ((s = a(s)), (u = ge)),
        e.call(o, u, function (e, o) {
          var a;
          switch (o.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return t;
            case "`":
              return i.slice(0, r);
            case "'":
              return i.slice(l);
            case "<":
              a = s[o.slice(1, -1)];
              break;
            default:
              var u = +o;
              if (0 === u) return e;
              if (u > c) {
                var h = ve(u / 10);
                return 0 === h
                  ? e
                  : h <= c
                  ? void 0 === n[h - 1]
                    ? o.charAt(1)
                    : n[h - 1] + o.charAt(1)
                  : e;
              }
              a = n[u - 1];
          }
          return void 0 === a ? "" : a;
        })
      );
    }
  });
  for (var me in {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  }) {
    var ye = E[me],
      xe = ye && ye.prototype;
    if (xe && xe.forEach !== Vt)
      try {
        T(xe, "forEach", Vt);
      } catch (t) {
        xe.forEach = Vt;
      }
  }
  var Ee = "Expected a function",
    we = NaN,
    Oe = "[object Symbol]",
    _e = /^\s+|\s+$/g,
    Se = /^[-+]0x[0-9a-f]+$/i,
    Le = /^0b[01]+$/i,
    Ae = /^0o[0-7]+$/i,
    Me = parseInt,
    ke = "object" == typeof v && v && v.Object === Object && v,
    We = "object" == typeof self && self && self.Object === Object && self,
    Te = ke || We || Function("return this")(),
    Re = Object.prototype.toString,
    je = Math.max,
    Ce = Math.min,
    Ne = function () {
      return Te.Date.now();
    };
  function ze(t, e, i) {
    var r,
      n,
      s,
      o,
      a,
      l,
      c = 0,
      u = !1,
      h = !1,
      f = !0;
    if ("function" != typeof t) throw new TypeError(Ee);
    function d(e) {
      var i = r,
        s = n;
      return (r = n = void 0), (c = e), (o = t.apply(s, i));
    }
    function p(t) {
      var i = t - l;
      return void 0 === l || i >= e || i < 0 || (h && t - c >= s);
    }
    function v() {
      var t = Ne();
      if (p(t)) return g(t);
      a = setTimeout(
        v,
        (function (t) {
          var i = e - (t - l);
          return h ? Ce(i, s - (t - c)) : i;
        })(t)
      );
    }
    function g(t) {
      return (a = void 0), f && r ? d(t) : ((r = n = void 0), o);
    }
    function b() {
      var t = Ne(),
        i = p(t);
      if (((r = arguments), (n = this), (l = t), i)) {
        if (void 0 === a)
          return (function (t) {
            return (c = t), (a = setTimeout(v, e)), u ? d(t) : o;
          })(l);
        if (h) return (a = setTimeout(v, e)), d(l);
      }
      return void 0 === a && (a = setTimeout(v, e)), o;
    }
    return (
      (e = Ve(e) || 0),
      De(i) &&
        ((u = !!i.leading),
        (s = (h = "maxWait" in i) ? je(Ve(i.maxWait) || 0, e) : s),
        (f = "trailing" in i ? !!i.trailing : f)),
      (b.cancel = function () {
        void 0 !== a && clearTimeout(a), (c = 0), (r = l = n = a = void 0);
      }),
      (b.flush = function () {
        return void 0 === a ? o : g(Ne());
      }),
      b
    );
  }
  function De(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  function Ve(t) {
    if ("number" == typeof t) return t;
    if (
      (function (t) {
        return (
          "symbol" == typeof t ||
          ((function (t) {
            return !!t && "object" == typeof t;
          })(t) &&
            Re.call(t) == Oe)
        );
      })(t)
    )
      return we;
    if (De(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = De(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(_e, "");
    var i = Le.test(t);
    return i || Ae.test(t) ? Me(t.slice(2), i ? 2 : 8) : Se.test(t) ? we : +t;
  }
  var Ie = function (t, e, i) {
      var r = !0,
        n = !0;
      if ("function" != typeof t) throw new TypeError(Ee);
      return (
        De(i) &&
          ((r = "leading" in i ? !!i.leading : r),
          (n = "trailing" in i ? !!i.trailing : n)),
        ze(t, e, {
          leading: r,
          maxWait: e,
          trailing: n,
        })
      );
    },
    Be = "Expected a function",
    Pe = NaN,
    He = "[object Symbol]",
    Fe = /^\s+|\s+$/g,
    qe = /^[-+]0x[0-9a-f]+$/i,
    $e = /^0b[01]+$/i,
    Ye = /^0o[0-7]+$/i,
    Xe = parseInt,
    Ge = "object" == typeof v && v && v.Object === Object && v,
    Ke = "object" == typeof self && self && self.Object === Object && self,
    Ue = Ge || Ke || Function("return this")(),
    Je = Object.prototype.toString,
    Qe = Math.max,
    Ze = Math.min,
    ti = function () {
      return Ue.Date.now();
    };
  function ei(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  function ii(t) {
    if ("number" == typeof t) return t;
    if (
      (function (t) {
        return (
          "symbol" == typeof t ||
          ((function (t) {
            return !!t && "object" == typeof t;
          })(t) &&
            Je.call(t) == He)
        );
      })(t)
    )
      return Pe;
    if (ei(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = ei(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(Fe, "");
    var i = $e.test(t);
    return i || Ye.test(t) ? Xe(t.slice(2), i ? 2 : 8) : qe.test(t) ? Pe : +t;
  }
  var ri = function (t, e, i) {
      var r,
        n,
        s,
        o,
        a,
        l,
        c = 0,
        u = !1,
        h = !1,
        f = !0;
      if ("function" != typeof t) throw new TypeError(Be);
      function d(e) {
        var i = r,
          s = n;
        return (r = n = void 0), (c = e), (o = t.apply(s, i));
      }
      function p(t) {
        var i = t - l;
        return void 0 === l || i >= e || i < 0 || (h && t - c >= s);
      }
      function v() {
        var t = ti();
        if (p(t)) return g(t);
        a = setTimeout(
          v,
          (function (t) {
            var i = e - (t - l);
            return h ? Ze(i, s - (t - c)) : i;
          })(t)
        );
      }
      function g(t) {
        return (a = void 0), f && r ? d(t) : ((r = n = void 0), o);
      }
      function b() {
        var t = ti(),
          i = p(t);
        if (((r = arguments), (n = this), (l = t), i)) {
          if (void 0 === a)
            return (function (t) {
              return (c = t), (a = setTimeout(v, e)), u ? d(t) : o;
            })(l);
          if (h) return (a = setTimeout(v, e)), d(l);
        }
        return void 0 === a && (a = setTimeout(v, e)), o;
      }
      return (
        (e = ii(e) || 0),
        ei(i) &&
          ((u = !!i.leading),
          (s = (h = "maxWait" in i) ? Qe(ii(i.maxWait) || 0, e) : s),
          (f = "trailing" in i ? !!i.trailing : f)),
        (b.cancel = function () {
          void 0 !== a && clearTimeout(a), (c = 0), (r = l = n = a = void 0);
        }),
        (b.flush = function () {
          return void 0 === a ? o : g(ti());
        }),
        b
      );
    },
    ni = "Expected a function",
    si = "__lodash_hash_undefined__",
    oi = "[object Function]",
    ai = "[object GeneratorFunction]",
    li = /^\[object .+?Constructor\]$/,
    ci = "object" == typeof v && v && v.Object === Object && v,
    ui = "object" == typeof self && self && self.Object === Object && self,
    hi = ci || ui || Function("return this")();
  var fi = Array.prototype,
    di = Function.prototype,
    pi = Object.prototype,
    vi = hi["__core-js_shared__"],
    gi = (function () {
      var t = /[^.]+$/.exec((vi && vi.keys && vi.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })(),
    bi = di.toString,
    mi = pi.hasOwnProperty,
    yi = pi.toString,
    xi = RegExp(
      "^" +
        bi
          .call(mi)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Ei = fi.splice,
    wi = Wi(hi, "Map"),
    Oi = Wi(Object, "create");
  function _i(t) {
    var e = -1,
      i = t ? t.length : 0;
    for (this.clear(); ++e < i; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  function Si(t) {
    var e = -1,
      i = t ? t.length : 0;
    for (this.clear(); ++e < i; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  function Li(t) {
    var e = -1,
      i = t ? t.length : 0;
    for (this.clear(); ++e < i; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  function Ai(t, e) {
    for (var i, r, n = t.length; n--; )
      if ((i = t[n][0]) === (r = e) || (i != i && r != r)) return n;
    return -1;
  }
  function Mi(t) {
    return (
      !(!Ri(t) || ((e = t), gi && gi in e)) &&
      ((function (t) {
        var e = Ri(t) ? yi.call(t) : "";
        return e == oi || e == ai;
      })(t) ||
      (function (t) {
        var e = !1;
        if (null != t && "function" != typeof t.toString)
          try {
            e = !!(t + "");
          } catch (t) {}
        return e;
      })(t)
        ? xi
        : li
      ).test(
        (function (t) {
          if (null != t) {
            try {
              return bi.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        })(t)
      )
    );
    var e;
  }
  function ki(t, e) {
    var i,
      r,
      n = t.__data__;
    return (
      "string" == (r = typeof (i = e)) ||
      "number" == r ||
      "symbol" == r ||
      "boolean" == r
        ? "__proto__" !== i
        : null === i
    )
      ? n["string" == typeof e ? "string" : "hash"]
      : n.map;
  }
  function Wi(t, e) {
    var i = (function (t, e) {
      return null == t ? void 0 : t[e];
    })(t, e);
    return Mi(i) ? i : void 0;
  }
  function Ti(t, e) {
    if ("function" != typeof t || (e && "function" != typeof e))
      throw new TypeError(ni);
    var i = function () {
      var r = arguments,
        n = e ? e.apply(this, r) : r[0],
        s = i.cache;
      if (s.has(n)) return s.get(n);
      var o = t.apply(this, r);
      return (i.cache = s.set(n, o)), o;
    };
    return (i.cache = new (Ti.Cache || Li)()), i;
  }
  function Ri(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  (_i.prototype.clear = function () {
    this.__data__ = Oi ? Oi(null) : {};
  }),
    (_i.prototype.delete = function (t) {
      return this.has(t) && delete this.__data__[t];
    }),
    (_i.prototype.get = function (t) {
      var e = this.__data__;
      if (Oi) {
        var i = e[t];
        return i === si ? void 0 : i;
      }
      return mi.call(e, t) ? e[t] : void 0;
    }),
    (_i.prototype.has = function (t) {
      var e = this.__data__;
      return Oi ? void 0 !== e[t] : mi.call(e, t);
    }),
    (_i.prototype.set = function (t, e) {
      return (this.__data__[t] = Oi && void 0 === e ? si : e), this;
    }),
    (Si.prototype.clear = function () {
      this.__data__ = [];
    }),
    (Si.prototype.delete = function (t) {
      var e = this.__data__,
        i = Ai(e, t);
      return !(i < 0 || (i == e.length - 1 ? e.pop() : Ei.call(e, i, 1), 0));
    }),
    (Si.prototype.get = function (t) {
      var e = this.__data__,
        i = Ai(e, t);
      return i < 0 ? void 0 : e[i][1];
    }),
    (Si.prototype.has = function (t) {
      return Ai(this.__data__, t) > -1;
    }),
    (Si.prototype.set = function (t, e) {
      var i = this.__data__,
        r = Ai(i, t);
      return r < 0 ? i.push([t, e]) : (i[r][1] = e), this;
    }),
    (Li.prototype.clear = function () {
      this.__data__ = {
        hash: new _i(),
        map: new (wi || Si)(),
        string: new _i(),
      };
    }),
    (Li.prototype.delete = function (t) {
      return ki(this, t).delete(t);
    }),
    (Li.prototype.get = function (t) {
      return ki(this, t).get(t);
    }),
    (Li.prototype.has = function (t) {
      return ki(this, t).has(t);
    }),
    (Li.prototype.set = function (t, e) {
      return ki(this, t).set(t, e), this;
    }),
    (Ti.Cache = Li);
  var ji = Ti,
    Ci = (function () {
      if ("undefined" != typeof Map) return Map;
      function t(t, e) {
        var i = -1;
        return (
          t.some(function (t, r) {
            return t[0] === e && ((i = r), !0);
          }),
          i
        );
      }
      return (function () {
        function e() {
          this.__entries__ = [];
        }
        return (
          Object.defineProperty(e.prototype, "size", {
            get: function () {
              return this.__entries__.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.get = function (e) {
            var i = t(this.__entries__, e),
              r = this.__entries__[i];
            return r && r[1];
          }),
          (e.prototype.set = function (e, i) {
            var r = t(this.__entries__, e);
            ~r ? (this.__entries__[r][1] = i) : this.__entries__.push([e, i]);
          }),
          (e.prototype.delete = function (e) {
            var i = this.__entries__,
              r = t(i, e);
            ~r && i.splice(r, 1);
          }),
          (e.prototype.has = function (e) {
            return !!~t(this.__entries__, e);
          }),
          (e.prototype.clear = function () {
            this.__entries__.splice(0);
          }),
          (e.prototype.forEach = function (t, e) {
            void 0 === e && (e = null);
            for (var i = 0, r = this.__entries__; i < r.length; i++) {
              var n = r[i];
              t.call(e, n[1], n[0]);
            }
          }),
          e
        );
      })();
    })(),
    Ni =
      "undefined" != typeof window &&
      "undefined" != typeof document &&
      window.document === document,
    zi =
      "undefined" != typeof global && global.Math === Math
        ? global
        : "undefined" != typeof self && self.Math === Math
        ? self
        : "undefined" != typeof window && window.Math === Math
        ? window
        : Function("return this")(),
    Di =
      "function" == typeof requestAnimationFrame
        ? requestAnimationFrame.bind(zi)
        : function (t) {
            return setTimeout(function () {
              return t(Date.now());
            }, 1e3 / 60);
          },
    Vi = 2;
  var Ii = 20,
    Bi = [
      "top",
      "right",
      "bottom",
      "left",
      "width",
      "height",
      "size",
      "weight",
    ],
    Pi = "undefined" != typeof MutationObserver,
    Hi = (function () {
      function t() {
        (this.connected_ = !1),
          (this.mutationEventsAdded_ = !1),
          (this.mutationsObserver_ = null),
          (this.observers_ = []),
          (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
          (this.refresh = (function (t, e) {
            var i = !1,
              r = !1,
              n = 0;
            function s() {
              i && ((i = !1), t()), r && a();
            }
            function o() {
              Di(s);
            }
            function a() {
              var t = Date.now();
              if (i) {
                if (t - n < Vi) return;
                r = !0;
              } else (i = !0), (r = !1), setTimeout(o, e);
              n = t;
            }
            return a;
          })(this.refresh.bind(this), Ii));
      }
      return (
        (t.prototype.addObserver = function (t) {
          ~this.observers_.indexOf(t) || this.observers_.push(t),
            this.connected_ || this.connect_();
        }),
        (t.prototype.removeObserver = function (t) {
          var e = this.observers_,
            i = e.indexOf(t);
          ~i && e.splice(i, 1),
            !e.length && this.connected_ && this.disconnect_();
        }),
        (t.prototype.refresh = function () {
          this.updateObservers_() && this.refresh();
        }),
        (t.prototype.updateObservers_ = function () {
          var t = this.observers_.filter(function (t) {
            return t.gatherActive(), t.hasActive();
          });
          return (
            t.forEach(function (t) {
              return t.broadcastActive();
            }),
            t.length > 0
          );
        }),
        (t.prototype.connect_ = function () {
          Ni &&
            !this.connected_ &&
            (document.addEventListener("transitionend", this.onTransitionEnd_),
            window.addEventListener("resize", this.refresh),
            Pi
              ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                this.mutationsObserver_.observe(document, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                }))
              : (document.addEventListener("DOMSubtreeModified", this.refresh),
                (this.mutationEventsAdded_ = !0)),
            (this.connected_ = !0));
        }),
        (t.prototype.disconnect_ = function () {
          Ni &&
            this.connected_ &&
            (document.removeEventListener(
              "transitionend",
              this.onTransitionEnd_
            ),
            window.removeEventListener("resize", this.refresh),
            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
            this.mutationEventsAdded_ &&
              document.removeEventListener("DOMSubtreeModified", this.refresh),
            (this.mutationsObserver_ = null),
            (this.mutationEventsAdded_ = !1),
            (this.connected_ = !1));
        }),
        (t.prototype.onTransitionEnd_ = function (t) {
          var e = t.propertyName,
            i = void 0 === e ? "" : e;
          Bi.some(function (t) {
            return !!~i.indexOf(t);
          }) && this.refresh();
        }),
        (t.getInstance = function () {
          return this.instance_ || (this.instance_ = new t()), this.instance_;
        }),
        (t.instance_ = null),
        t
      );
    })(),
    Fi = function (t, e) {
      for (var i = 0, r = Object.keys(e); i < r.length; i++) {
        var n = r[i];
        Object.defineProperty(t, n, {
          value: e[n],
          enumerable: !1,
          writable: !1,
          configurable: !0,
        });
      }
      return t;
    },
    qi = function (t) {
      return (t && t.ownerDocument && t.ownerDocument.defaultView) || zi;
    },
    $i = Ji(0, 0, 0, 0);
  function Yi(t) {
    return parseFloat(t) || 0;
  }
  function Xi(t) {
    for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
    return e.reduce(function (e, i) {
      return e + Yi(t["border-" + i + "-width"]);
    }, 0);
  }
  function Gi(t) {
    var e = t.clientWidth,
      i = t.clientHeight;
    if (!e && !i) return $i;
    var r = qi(t).getComputedStyle(t),
      n = (function (t) {
        for (
          var e = {}, i = 0, r = ["top", "right", "bottom", "left"];
          i < r.length;
          i++
        ) {
          var n = r[i],
            s = t["padding-" + n];
          e[n] = Yi(s);
        }
        return e;
      })(r),
      s = n.left + n.right,
      o = n.top + n.bottom,
      a = Yi(r.width),
      l = Yi(r.height);
    if (
      ("border-box" === r.boxSizing &&
        (Math.round(a + s) !== e && (a -= Xi(r, "left", "right") + s),
        Math.round(l + o) !== i && (l -= Xi(r, "top", "bottom") + o)),
      !(function (t) {
        return t === qi(t).document.documentElement;
      })(t))
    ) {
      var c = Math.round(a + s) - e,
        u = Math.round(l + o) - i;
      1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(u) && (l -= u);
    }
    return Ji(n.left, n.top, a, l);
  }
  var Ki =
    "undefined" != typeof SVGGraphicsElement
      ? function (t) {
          return t instanceof qi(t).SVGGraphicsElement;
        }
      : function (t) {
          return (
            t instanceof qi(t).SVGElement && "function" == typeof t.getBBox
          );
        };
  function Ui(t) {
    return Ni
      ? Ki(t)
        ? (function (t) {
            var e = t.getBBox();
            return Ji(0, 0, e.width, e.height);
          })(t)
        : Gi(t)
      : $i;
  }
  function Ji(t, e, i, r) {
    return {
      x: t,
      y: e,
      width: i,
      height: r,
    };
  }
  var Qi = (function () {
      function t(t) {
        (this.broadcastWidth = 0),
          (this.broadcastHeight = 0),
          (this.contentRect_ = Ji(0, 0, 0, 0)),
          (this.target = t);
      }
      return (
        (t.prototype.isActive = function () {
          var t = Ui(this.target);
          return (
            (this.contentRect_ = t),
            t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
          );
        }),
        (t.prototype.broadcastRect = function () {
          var t = this.contentRect_;
          return (
            (this.broadcastWidth = t.width),
            (this.broadcastHeight = t.height),
            t
          );
        }),
        t
      );
    })(),
    Zi = (function () {
      return function (t, e) {
        var i,
          r,
          n,
          s,
          o,
          a,
          l,
          c =
            ((r = (i = e).x),
            (n = i.y),
            (s = i.width),
            (o = i.height),
            (a =
              "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
            (l = Object.create(a.prototype)),
            Fi(l, {
              x: r,
              y: n,
              width: s,
              height: o,
              top: n,
              right: r + s,
              bottom: o + n,
              left: r,
            }),
            l);
        Fi(this, {
          target: t,
          contentRect: c,
        });
      };
    })(),
    tr = (function () {
      function t(t, e, i) {
        if (
          ((this.activeObservations_ = []),
          (this.observations_ = new Ci()),
          "function" != typeof t)
        )
          throw new TypeError(
            "The callback provided as parameter 1 is not a function."
          );
        (this.callback_ = t), (this.controller_ = e), (this.callbackCtx_ = i);
      }
      return (
        (t.prototype.observe = function (t) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(t instanceof qi(t).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var e = this.observations_;
            e.has(t) ||
              (e.set(t, new Qi(t)),
              this.controller_.addObserver(this),
              this.controller_.refresh());
          }
        }),
        (t.prototype.unobserve = function (t) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(t instanceof qi(t).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var e = this.observations_;
            e.has(t) &&
              (e.delete(t), e.size || this.controller_.removeObserver(this));
          }
        }),
        (t.prototype.disconnect = function () {
          this.clearActive(),
            this.observations_.clear(),
            this.controller_.removeObserver(this);
        }),
        (t.prototype.gatherActive = function () {
          var t = this;
          this.clearActive(),
            this.observations_.forEach(function (e) {
              e.isActive() && t.activeObservations_.push(e);
            });
        }),
        (t.prototype.broadcastActive = function () {
          if (this.hasActive()) {
            var t = this.callbackCtx_,
              e = this.activeObservations_.map(function (t) {
                return new Zi(t.target, t.broadcastRect());
              });
            this.callback_.call(t, e, t), this.clearActive();
          }
        }),
        (t.prototype.clearActive = function () {
          this.activeObservations_.splice(0);
        }),
        (t.prototype.hasActive = function () {
          return this.activeObservations_.length > 0;
        }),
        t
      );
    })(),
    er = "undefined" != typeof WeakMap ? new WeakMap() : new Ci(),
    ir = (function () {
      return function t(e) {
        if (!(this instanceof t))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var i = Hi.getInstance(),
          r = new tr(e, i, this);
        er.set(this, r);
      };
    })();
  ["observe", "unobserve", "disconnect"].forEach(function (t) {
    ir.prototype[t] = function () {
      var e;
      return (e = er.get(this))[t].apply(e, arguments);
    };
  });
  var rr = void 0 !== zi.ResizeObserver ? zi.ResizeObserver : ir,
    nr = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    );
  function sr() {
    if ("undefined" == typeof document) return 0;
    var t = document.body,
      e = document.createElement("div"),
      i = e.style;
    (i.position = "fixed"),
      (i.left = 0),
      (i.visibility = "hidden"),
      (i.overflowY = "scroll"),
      t.appendChild(e);
    var r = e.getBoundingClientRect().right;
    return t.removeChild(e), r;
  }
  var or = (function () {
    function t(e, i) {
      var r = this;
      (this.onScroll = function () {
        r.scrollXTicking ||
          (window.requestAnimationFrame(r.scrollX), (r.scrollXTicking = !0)),
          r.scrollYTicking ||
            (window.requestAnimationFrame(r.scrollY), (r.scrollYTicking = !0));
      }),
        (this.scrollX = function () {
          r.axis.x.isOverflowing &&
            (r.showScrollbar("x"), r.positionScrollbar("x")),
            (r.scrollXTicking = !1);
        }),
        (this.scrollY = function () {
          r.axis.y.isOverflowing &&
            (r.showScrollbar("y"), r.positionScrollbar("y")),
            (r.scrollYTicking = !1);
        }),
        (this.onMouseEnter = function () {
          r.showScrollbar("x"), r.showScrollbar("y");
        }),
        (this.onMouseMove = function (t) {
          (r.mouseX = t.clientX),
            (r.mouseY = t.clientY),
            (r.axis.x.isOverflowing || r.axis.x.forceVisible) &&
              r.onMouseMoveForAxis("x"),
            (r.axis.y.isOverflowing || r.axis.y.forceVisible) &&
              r.onMouseMoveForAxis("y");
        }),
        (this.onMouseLeave = function () {
          r.onMouseMove.cancel(),
            (r.axis.x.isOverflowing || r.axis.x.forceVisible) &&
              r.onMouseLeaveForAxis("x"),
            (r.axis.y.isOverflowing || r.axis.y.forceVisible) &&
              r.onMouseLeaveForAxis("y"),
            (r.mouseX = -1),
            (r.mouseY = -1);
        }),
        (this.onWindowResize = function () {
          (r.scrollbarWidth = sr()), r.hideNativeScrollbar();
        }),
        (this.hideScrollbars = function () {
          (r.axis.x.track.rect = r.axis.x.track.el.getBoundingClientRect()),
            (r.axis.y.track.rect = r.axis.y.track.el.getBoundingClientRect()),
            r.isWithinBounds(r.axis.y.track.rect) ||
              (r.axis.y.scrollbar.el.classList.remove(r.classNames.visible),
              (r.axis.y.isVisible = !1)),
            r.isWithinBounds(r.axis.x.track.rect) ||
              (r.axis.x.scrollbar.el.classList.remove(r.classNames.visible),
              (r.axis.x.isVisible = !1));
        }),
        (this.onPointerEvent = function (t) {
          var e, i;
          (r.axis.x.scrollbar.rect =
            r.axis.x.scrollbar.el.getBoundingClientRect()),
            (r.axis.y.scrollbar.rect =
              r.axis.y.scrollbar.el.getBoundingClientRect()),
            (r.axis.x.isOverflowing || r.axis.x.forceVisible) &&
              (i = r.isWithinBounds(r.axis.x.scrollbar.rect)),
            (r.axis.y.isOverflowing || r.axis.y.forceVisible) &&
              (e = r.isWithinBounds(r.axis.y.scrollbar.rect)),
            (e || i) &&
              (t.preventDefault(),
              t.stopPropagation(),
              "mousedown" === t.type &&
                (e && r.onDragStart(t, "y"), i && r.onDragStart(t, "x")));
        }),
        (this.drag = function (e) {
          var i = r.axis[r.draggedAxis].track,
            n = i.rect[r.axis[r.draggedAxis].sizeAttr],
            s = r.axis[r.draggedAxis].scrollbar,
            o = r.contentWrapperEl[r.axis[r.draggedAxis].scrollSizeAttr],
            a = parseInt(r.elStyles[r.axis[r.draggedAxis].sizeAttr], 10);
          e.preventDefault(), e.stopPropagation();
          var l =
            ((("y" === r.draggedAxis ? e.pageY : e.pageX) -
              i.rect[r.axis[r.draggedAxis].offsetAttr] -
              r.axis[r.draggedAxis].dragOffset) /
              (n - s.size)) *
            (o - a);
          "x" === r.draggedAxis &&
            ((l =
              r.isRtl && t.getRtlHelpers().isRtlScrollbarInverted
                ? l - (n + s.size)
                : l),
            (l = r.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -l : l)),
            (r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr] = l);
        }),
        (this.onEndDrag = function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            r.el.classList.remove(r.classNames.dragging),
            document.removeEventListener("mousemove", r.drag, !0),
            document.removeEventListener("mouseup", r.onEndDrag, !0),
            (r.removePreventClickId = window.setTimeout(function () {
              document.removeEventListener("click", r.preventClick, !0),
                document.removeEventListener("dblclick", r.preventClick, !0),
                (r.removePreventClickId = null);
            }));
        }),
        (this.preventClick = function (t) {
          t.preventDefault(), t.stopPropagation();
        }),
        (this.el = e),
        this.flashTimeout,
        this.contentEl,
        this.contentWrapperEl,
        this.offsetEl,
        this.maskEl,
        this.globalObserver,
        this.mutationObserver,
        this.resizeObserver,
        this.scrollbarWidth,
        (this.minScrollbarWidth = 20),
        (this.options = Object.assign({}, t.defaultOptions, i)),
        (this.classNames = Object.assign(
          {},
          t.defaultOptions.classNames,
          this.options.classNames
        )),
        this.isRtl,
        (this.axis = {
          x: {
            scrollOffsetAttr: "scrollLeft",
            sizeAttr: "width",
            scrollSizeAttr: "scrollWidth",
            offsetAttr: "left",
            overflowAttr: "overflowX",
            dragOffset: 0,
            isOverflowing: !0,
            isVisible: !1,
            forceVisible: !1,
            track: {},
            scrollbar: {},
          },
          y: {
            scrollOffsetAttr: "scrollTop",
            sizeAttr: "height",
            scrollSizeAttr: "scrollHeight",
            offsetAttr: "top",
            overflowAttr: "overflowY",
            dragOffset: 0,
            isOverflowing: !0,
            isVisible: !1,
            forceVisible: !1,
            track: {},
            scrollbar: {},
          },
        }),
        (this.removePreventClickId = null),
        this.el.SimpleBar ||
          ((this.recalculate = Ie(this.recalculate.bind(this), 64)),
          (this.onMouseMove = Ie(this.onMouseMove.bind(this), 64)),
          (this.hideScrollbars = ri(
            this.hideScrollbars.bind(this),
            this.options.timeout
          )),
          (this.onWindowResize = ri(this.onWindowResize.bind(this), 64, {
            leading: !0,
          })),
          (t.getRtlHelpers = ji(t.getRtlHelpers)),
          this.init());
    }
    (t.getRtlHelpers = function () {
      var e = document.createElement("div");
      e.innerHTML =
        '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
      var i = e.firstElementChild;
      document.body.appendChild(i);
      var r = i.firstElementChild;
      i.scrollLeft = 0;
      var n = t.getOffset(i),
        s = t.getOffset(r);
      i.scrollLeft = 999;
      var o = t.getOffset(r);
      return {
        isRtlScrollingInverted: n.left !== s.left && s.left - o.left != 0,
        isRtlScrollbarInverted: n.left !== s.left,
      };
    }),
      (t.initHtmlApi = function () {
        (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
          "undefined" != typeof MutationObserver &&
            ((this.globalObserver = new MutationObserver(function (e) {
              e.forEach(function (e) {
                Array.prototype.forEach.call(e.addedNodes, function (e) {
                  1 === e.nodeType &&
                    (e.hasAttribute("data-simplebar")
                      ? !e.SimpleBar && new t(e, t.getElOptions(e))
                      : Array.prototype.forEach.call(
                          e.querySelectorAll("[data-simplebar]"),
                          function (e) {
                            !e.SimpleBar && new t(e, t.getElOptions(e));
                          }
                        ));
                }),
                  Array.prototype.forEach.call(e.removedNodes, function (t) {
                    1 === t.nodeType &&
                      (t.hasAttribute("data-simplebar")
                        ? t.SimpleBar && t.SimpleBar.unMount()
                        : Array.prototype.forEach.call(
                            t.querySelectorAll("[data-simplebar]"),
                            function (t) {
                              t.SimpleBar && t.SimpleBar.unMount();
                            }
                          ));
                  });
              });
            })),
            this.globalObserver.observe(document, {
              childList: !0,
              subtree: !0,
            })),
          "complete" === document.readyState ||
          ("loading" !== document.readyState &&
            !document.documentElement.doScroll)
            ? window.setTimeout(this.initDOMLoadedElements)
            : (document.addEventListener(
                "DOMContentLoaded",
                this.initDOMLoadedElements
              ),
              window.addEventListener("load", this.initDOMLoadedElements));
      }),
      (t.getElOptions = function (t) {
        return Array.prototype.reduce.call(
          t.attributes,
          function (t, e) {
            var i = e.name.match(/data-simplebar-(.+)/);
            if (i) {
              var r = i[1].replace(/\W+(.)/g, function (t, e) {
                return e.toUpperCase();
              });
              switch (e.value) {
                case "true":
                  t[r] = !0;
                  break;
                case "false":
                  t[r] = !1;
                  break;
                case void 0:
                  t[r] = !0;
                  break;
                default:
                  t[r] = e.value;
              }
            }
            return t;
          },
          {}
        );
      }),
      (t.removeObserver = function () {
        this.globalObserver.disconnect();
      }),
      (t.initDOMLoadedElements = function () {
        document.removeEventListener(
          "DOMContentLoaded",
          this.initDOMLoadedElements
        ),
          window.removeEventListener("load", this.initDOMLoadedElements),
          Array.prototype.forEach.call(
            document.querySelectorAll("[data-simplebar]"),
            function (e) {
              e.SimpleBar || new t(e, t.getElOptions(e));
            }
          );
      }),
      (t.getOffset = function (t) {
        var e = t.getBoundingClientRect();
        return {
          top:
            e.top + (window.pageYOffset || document.documentElement.scrollTop),
          left:
            e.left +
            (window.pageXOffset || document.documentElement.scrollLeft),
        };
      });
    var e = t.prototype;
    return (
      (e.init = function () {
        (this.el.SimpleBar = this),
          nr &&
            (this.initDOM(),
            (this.scrollbarWidth = sr()),
            this.recalculate(),
            this.initListeners());
      }),
      (e.initDOM = function () {
        var t = this;
        if (
          Array.prototype.filter.call(this.el.children, function (e) {
            return e.classList.contains(t.classNames.wrapper);
          }).length
        )
          (this.wrapperEl = this.el.querySelector(
            "." + this.classNames.wrapper
          )),
            (this.contentWrapperEl = this.el.querySelector(
              "." + this.classNames.contentWrapper
            )),
            (this.offsetEl = this.el.querySelector(
              "." + this.classNames.offset
            )),
            (this.maskEl = this.el.querySelector("." + this.classNames.mask)),
            (this.contentEl = this.el.querySelector(
              "." + this.classNames.contentEl
            )),
            (this.placeholderEl = this.el.querySelector(
              "." + this.classNames.placeholder
            )),
            (this.heightAutoObserverWrapperEl = this.el.querySelector(
              "." + this.classNames.heightAutoObserverWrapperEl
            )),
            (this.heightAutoObserverEl = this.el.querySelector(
              "." + this.classNames.heightAutoObserverEl
            )),
            (this.axis.x.track.el = this.findChild(
              this.el,
              "." + this.classNames.track + "." + this.classNames.horizontal
            )),
            (this.axis.y.track.el = this.findChild(
              this.el,
              "." + this.classNames.track + "." + this.classNames.vertical
            ));
        else {
          for (
            this.wrapperEl = document.createElement("div"),
              this.contentWrapperEl = document.createElement("div"),
              this.offsetEl = document.createElement("div"),
              this.maskEl = document.createElement("div"),
              this.contentEl = document.createElement("div"),
              this.placeholderEl = document.createElement("div"),
              this.heightAutoObserverWrapperEl = document.createElement("div"),
              this.heightAutoObserverEl = document.createElement("div"),
              this.wrapperEl.classList.add(this.classNames.wrapper),
              this.contentWrapperEl.classList.add(
                this.classNames.contentWrapper
              ),
              this.offsetEl.classList.add(this.classNames.offset),
              this.maskEl.classList.add(this.classNames.mask),
              this.contentEl.classList.add(this.classNames.contentEl),
              this.placeholderEl.classList.add(this.classNames.placeholder),
              this.heightAutoObserverWrapperEl.classList.add(
                this.classNames.heightAutoObserverWrapperEl
              ),
              this.heightAutoObserverEl.classList.add(
                this.classNames.heightAutoObserverEl
              );
            this.el.firstChild;

          )
            this.contentEl.appendChild(this.el.firstChild);
          this.contentWrapperEl.appendChild(this.contentEl),
            this.offsetEl.appendChild(this.contentWrapperEl),
            this.maskEl.appendChild(this.offsetEl),
            this.heightAutoObserverWrapperEl.appendChild(
              this.heightAutoObserverEl
            ),
            this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
            this.wrapperEl.appendChild(this.maskEl),
            this.wrapperEl.appendChild(this.placeholderEl),
            this.el.appendChild(this.wrapperEl);
        }
        if (!this.axis.x.track.el || !this.axis.y.track.el) {
          var e = document.createElement("div"),
            i = document.createElement("div");
          e.classList.add(this.classNames.track),
            i.classList.add(this.classNames.scrollbar),
            e.appendChild(i),
            (this.axis.x.track.el = e.cloneNode(!0)),
            this.axis.x.track.el.classList.add(this.classNames.horizontal),
            (this.axis.y.track.el = e.cloneNode(!0)),
            this.axis.y.track.el.classList.add(this.classNames.vertical),
            this.el.appendChild(this.axis.x.track.el),
            this.el.appendChild(this.axis.y.track.el);
        }
        (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
          "." + this.classNames.scrollbar
        )),
          (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
            "." + this.classNames.scrollbar
          )),
          this.options.autoHide ||
            (this.axis.x.scrollbar.el.classList.add(this.classNames.visible),
            this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
          this.el.setAttribute("data-simplebar", "init");
      }),
      (e.initListeners = function () {
        var t = this;
        this.options.autoHide &&
          this.el.addEventListener("mouseenter", this.onMouseEnter),
          ["mousedown", "click", "dblclick"].forEach(function (e) {
            t.el.addEventListener(e, t.onPointerEvent, !0);
          }),
          ["touchstart", "touchend", "touchmove"].forEach(function (e) {
            t.el.addEventListener(e, t.onPointerEvent, {
              capture: !0,
              passive: !0,
            });
          }),
          this.el.addEventListener("mousemove", this.onMouseMove),
          this.el.addEventListener("mouseleave", this.onMouseLeave),
          this.contentWrapperEl.addEventListener("scroll", this.onScroll),
          window.addEventListener("resize", this.onWindowResize),
          (this.resizeObserver = new rr(this.recalculate)),
          this.resizeObserver.observe(this.el),
          this.resizeObserver.observe(this.contentEl);
      }),
      (e.recalculate = function () {
        var t = this.heightAutoObserverEl.offsetHeight <= 1,
          e = this.heightAutoObserverEl.offsetWidth <= 1;
        (this.elStyles = window.getComputedStyle(this.el)),
          (this.isRtl = "rtl" === this.elStyles.direction),
          (this.contentEl.style.padding =
            this.elStyles.paddingTop +
            " " +
            this.elStyles.paddingRight +
            " " +
            this.elStyles.paddingBottom +
            " " +
            this.elStyles.paddingLeft),
          (this.wrapperEl.style.margin =
            "-" +
            this.elStyles.paddingTop +
            " -" +
            this.elStyles.paddingRight +
            " -" +
            this.elStyles.paddingBottom +
            " -" +
            this.elStyles.paddingLeft),
          (this.contentWrapperEl.style.height = t ? "auto" : "100%"),
          (this.placeholderEl.style.width = e
            ? this.contentEl.offsetWidth + "px"
            : "auto"),
          (this.placeholderEl.style.height =
            this.contentEl.scrollHeight + "px"),
          (this.axis.x.isOverflowing =
            this.contentWrapperEl.scrollWidth >
            this.contentWrapperEl.offsetWidth),
          (this.axis.y.isOverflowing =
            this.contentWrapperEl.scrollHeight >
            this.contentWrapperEl.offsetHeight),
          (this.axis.x.isOverflowing =
            "hidden" !== this.elStyles.overflowX && this.axis.x.isOverflowing),
          (this.axis.y.isOverflowing =
            "hidden" !== this.elStyles.overflowY && this.axis.y.isOverflowing),
          (this.axis.x.forceVisible =
            "x" === this.options.forceVisible ||
            !0 === this.options.forceVisible),
          (this.axis.y.forceVisible =
            "y" === this.options.forceVisible ||
            !0 === this.options.forceVisible),
          this.hideNativeScrollbar(),
          (this.axis.x.track.rect =
            this.axis.x.track.el.getBoundingClientRect()),
          (this.axis.y.track.rect =
            this.axis.y.track.el.getBoundingClientRect()),
          (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
          (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
          (this.axis.x.scrollbar.el.style.width =
            this.axis.x.scrollbar.size + "px"),
          (this.axis.y.scrollbar.el.style.height =
            this.axis.y.scrollbar.size + "px"),
          this.positionScrollbar("x"),
          this.positionScrollbar("y"),
          this.toggleTrackVisibility("x"),
          this.toggleTrackVisibility("y");
      }),
      (e.getScrollbarSize = function (t) {
        void 0 === t && (t = "y");
        var e,
          i = this.scrollbarWidth
            ? this.contentWrapperEl[this.axis[t].scrollSizeAttr]
            : this.contentWrapperEl[this.axis[t].scrollSizeAttr] -
              this.minScrollbarWidth,
          r = this.axis[t].track.rect[this.axis[t].sizeAttr];
        if (this.axis[t].isOverflowing) {
          var n = r / i;
          return (
            (e = Math.max(~~(n * r), this.options.scrollbarMinSize)),
            this.options.scrollbarMaxSize &&
              (e = Math.min(e, this.options.scrollbarMaxSize)),
            e
          );
        }
      }),
      (e.positionScrollbar = function (e) {
        void 0 === e && (e = "y");
        var i = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
          r = this.axis[e].track.rect[this.axis[e].sizeAttr],
          n = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
          s = this.axis[e].scrollbar,
          o = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
          a =
            (o =
              "x" === e &&
              this.isRtl &&
              t.getRtlHelpers().isRtlScrollingInverted
                ? -o
                : o) /
            (i - n),
          l = ~~((r - s.size) * a);
        (l =
          "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted
            ? l + (r - s.size)
            : l),
          (s.el.style.transform =
            "x" === e
              ? "translate3d(" + l + "px, 0, 0)"
              : "translate3d(0, " + l + "px, 0)");
      }),
      (e.toggleTrackVisibility = function (t) {
        void 0 === t && (t = "y");
        var e = this.axis[t].track.el,
          i = this.axis[t].scrollbar.el;
        this.axis[t].isOverflowing || this.axis[t].forceVisible
          ? ((e.style.visibility = "visible"),
            (this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll"))
          : ((e.style.visibility = "hidden"),
            (this.contentWrapperEl.style[this.axis[t].overflowAttr] =
              "hidden")),
          this.axis[t].isOverflowing
            ? (i.style.display = "block")
            : (i.style.display = "none");
      }),
      (e.hideNativeScrollbar = function () {
        if (
          ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
            this.axis.y.isOverflowing || this.axis.y.forceVisible
              ? "-" + (this.scrollbarWidth || this.minScrollbarWidth) + "px"
              : 0),
          (this.offsetEl.style.bottom =
            this.axis.x.isOverflowing || this.axis.x.forceVisible
              ? "-" + (this.scrollbarWidth || this.minScrollbarWidth) + "px"
              : 0),
          !this.scrollbarWidth)
        ) {
          var t = [this.isRtl ? "paddingLeft" : "paddingRight"];
          (this.contentWrapperEl.style[t] =
            this.axis.y.isOverflowing || this.axis.y.forceVisible
              ? this.minScrollbarWidth + "px"
              : 0),
            (this.contentWrapperEl.style.paddingBottom =
              this.axis.x.isOverflowing || this.axis.x.forceVisible
                ? this.minScrollbarWidth + "px"
                : 0);
        }
      }),
      (e.onMouseMoveForAxis = function (t) {
        void 0 === t && (t = "y"),
          (this.axis[t].track.rect =
            this.axis[t].track.el.getBoundingClientRect()),
          (this.axis[t].scrollbar.rect =
            this.axis[t].scrollbar.el.getBoundingClientRect()),
          this.isWithinBounds(this.axis[t].scrollbar.rect)
            ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover)
            : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),
          this.isWithinBounds(this.axis[t].track.rect)
            ? (this.showScrollbar(t),
              this.axis[t].track.el.classList.add(this.classNames.hover))
            : this.axis[t].track.el.classList.remove(this.classNames.hover);
      }),
      (e.onMouseLeaveForAxis = function (t) {
        void 0 === t && (t = "y"),
          this.axis[t].track.el.classList.remove(this.classNames.hover),
          this.axis[t].scrollbar.el.classList.remove(this.classNames.hover);
      }),
      (e.showScrollbar = function (t) {
        void 0 === t && (t = "y");
        var e = this.axis[t].scrollbar.el;
        this.axis[t].isVisible ||
          (e.classList.add(this.classNames.visible),
          (this.axis[t].isVisible = !0)),
          this.options.autoHide && this.hideScrollbars();
      }),
      (e.onDragStart = function (t, e) {
        void 0 === e && (e = "y");
        var i = this.axis[e].scrollbar.el,
          r = "y" === e ? t.pageY : t.pageX;
        (this.axis[e].dragOffset =
          r - i.getBoundingClientRect()[this.axis[e].offsetAttr]),
          (this.draggedAxis = e),
          this.el.classList.add(this.classNames.dragging),
          document.addEventListener("mousemove", this.drag, !0),
          document.addEventListener("mouseup", this.onEndDrag, !0),
          null === this.removePreventClickId
            ? (document.addEventListener("click", this.preventClick, !0),
              document.addEventListener("dblclick", this.preventClick, !0))
            : (window.clearTimeout(this.removePreventClickId),
              (this.removePreventClickId = null));
      }),
      (e.getContentElement = function () {
        return this.contentEl;
      }),
      (e.getScrollElement = function () {
        return this.contentWrapperEl;
      }),
      (e.removeListeners = function () {
        var t = this;
        this.options.autoHide &&
          this.el.removeEventListener("mouseenter", this.onMouseEnter),
          ["mousedown", "click", "dblclick"].forEach(function (e) {
            t.el.removeEventListener(e, t.onPointerEvent, !0);
          }),
          ["touchstart", "touchend", "touchmove"].forEach(function (e) {
            t.el.removeEventListener(e, t.onPointerEvent, {
              capture: !0,
              passive: !0,
            });
          }),
          this.el.removeEventListener("mousemove", this.onMouseMove),
          this.el.removeEventListener("mouseleave", this.onMouseLeave),
          this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
          window.removeEventListener("resize", this.onWindowResize),
          this.mutationObserver && this.mutationObserver.disconnect(),
          this.resizeObserver.disconnect(),
          this.recalculate.cancel(),
          this.onMouseMove.cancel(),
          this.hideScrollbars.cancel(),
          this.onWindowResize.cancel();
      }),
      (e.unMount = function () {
        this.removeListeners(), (this.el.SimpleBar = null);
      }),
      (e.isChildNode = function (t) {
        return null !== t && (t === this.el || this.isChildNode(t.parentNode));
      }),
      (e.isWithinBounds = function (t) {
        return (
          this.mouseX >= t.left &&
          this.mouseX <= t.left + t.width &&
          this.mouseY >= t.top &&
          this.mouseY <= t.top + t.height
        );
      }),
      (e.findChild = function (t, e) {
        var i =
          t.matches ||
          t.webkitMatchesSelector ||
          t.mozMatchesSelector ||
          t.msMatchesSelector;
        return Array.prototype.filter.call(t.children, function (t) {
          return i.call(t, e);
        })[0];
      }),
      t
    );
  })();
  return (
    (or.defaultOptions = {
      autoHide: !0,
      forceVisible: !1,
      classNames: {
        contentEl: "simplebar-content",
        contentWrapper: "simplebar-content-wrapper",
        offset: "simplebar-offset",
        mask: "simplebar-mask",
        wrapper: "simplebar-wrapper",
        placeholder: "simplebar-placeholder",
        scrollbar: "simplebar-scrollbar",
        track: "simplebar-track",
        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
        heightAutoObserverEl: "simplebar-height-auto-observer",
        visible: "simplebar-visible",
        horizontal: "simplebar-horizontal",
        vertical: "simplebar-vertical",
        hover: "simplebar-hover",
        dragging: "simplebar-dragging",
      },
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      timeout: 1e3,
    }),
    nr && or.initHtmlApi(),
    or
  );
});

// Simple bar end

// main function start
!(function (e) {
  "use strict";
  e(function () {
    e(document).on(
      "click",
      "[data-lightbox]",
      lity.options(
        "template",
        '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><div class="lity-close" data-lity-close aria-label="Close (Press escape to close)"><span class="btn-line"></span></div></div></div></div>'
      )
    ),
      e('.navbar .navbar-nav .nav-link[href^="#"]').each(function () {
        e(this).animatedModal({
          animatedIn: "fadeIn",
          animatedOut: "fadeOut",
          animationDuration: "0s",
          beforeOpen: function () {
            e("#overlay-effect")
              .addClass("animate-up")
              .removeClass("animate-down"),
              e("#" + this.modalTarget).css({
                animationDelay: ".5s",
                animationFillMode: "both",
              });
          },
          afterOpen: function () {
            e("#" + this.modalTarget).css({
              animationFillMode: "none",
            });
          },
          beforeClose: function () {
            e("#overlay-effect")
              .addClass("animate-down")
              .removeClass("animate-up"),
              e("#" + this.modalTarget).css({
                animationDelay: ".5s",
                animationFillMode: "both",
              });
          },
          afterClose: function () {
            e("#" + this.modalTarget).css({
              animationFillMode: "none",
            });
          },
        });
      }),
      e(".lightbox-wrapper").each(function () {
        e('.navbar .navbar-nav .nav-link[href^="#' + this.id + '"]').length ||
          e(this).hide();
      }),
      e(document).on("mouseup", function (a) {
        if (e(".navbar #navbarSupportedContent").hasClass("show")) {
          var t = e(".navbar .navbar-menu");
          t.is(a.target) || 0 !== t.has(a.target).length || t.trigger("click");
        }
      }),
      (function () {
        var a,
          t,
          i = 2500,
          s = 660,
          o = 1500;
        function n(e) {
          var a = (function (e) {
            return e.is(":last-child") ? e.parent().children().eq(0) : e.next();
          })(e);
          e.parents(".cd-headline").hasClass("clip") &&
            e.parents(".cd-words-wrapper").animate(
              {
                width: "2px",
              },
              s,
              function () {
                var t;
                (t = a),
                  e.removeClass("is-visible").addClass("is-hidden"),
                  t.removeClass("is-hidden").addClass("is-visible"),
                  (function (e, a) {
                    e.parents(".cd-headline").hasClass("clip") &&
                      e.parents(".cd-words-wrapper").animate(
                        {
                          width: e.width() + 10,
                        },
                        s,
                        function () {
                          setTimeout(function () {
                            n(e);
                          }, o);
                        }
                      );
                  })(a);
              }
            );
        }
        (a = e(".cd-headline")),
          (t = i),
          a.each(function () {
            var a = e(this);
            if (a.hasClass("clip")) {
              var i = a.find(".cd-words-wrapper"),
                s = i.width() + 10;
              i.css("width", s);
            }
            setTimeout(function () {
              n(a.find(".is-visible").eq(0));
            }, t);
          });
      })(),
      e(".home-area").hasClass("video-variant") && e("#homeVideo").YTPlayer();
    var a, t, i;
    // tns({
    //   container: "#about .testimonials-section .my-slider",
    //   items: 2,
    //   gutter: 30,
    //   responsive: {
    //     0: {
    //       items: 1,
    //       gutter: 0,
    //     },
    //     768: {
    //       items: 2,
    //       gutter: 30,
    //     },
    //   },
    //   preventScrollOnTouch: "auto",
    //   slideBy: "page",
    //   mouseDrag: !0,
    //   swipeAngle: !1,
    //   speed: 400,
    //   controls: !1,
    //   autoHeight: !0,
    //   navPosition: "bottom",
    // });
    (a = function () {
      e("#resume .skills-section .single-skill").each(function () {
        var a = Math.min(100, Math.max(0, e(this).data("percentage"))),
          t = e(this).find(".skill-progress").outerWidth(!0),
          i = t - t * (a / 100);
        e(this)
          .find(".skill-percentage")
          .text(a + "%")
          .css("margin-right", i),
          e(this)
            .find(".progress-bar")
            .attr("aria-valuenow", a)
            .css("width", a + "%");
      });
    })(),
      e(window).on("resize", function () {
        a();
      }),
      (t = e("#portfolio .portfolio-section .portfolio-grid")),
      (i = e("#portfolio .portfolio-section .filter-control li")),
      t.imagesLoaded(function () {
        t.isotope({
          itemSelector: "#portfolio .portfolio-section .single-item",
        }),
          i.on("click", function () {
            i.removeClass("tab-active"), e(this).addClass("tab-active");
            var a = e(this).data("filter");
            t.isotope({
              filter: a,
              transitionDuration: ".25s",
            });
          });
      }),
      e("#contact .contact-section .contact-form").on("submit", function (a) {
        // var t = e(this),
        //   i = t.find("#contact-submit"),
        //   s = i.text(),
        //   o = t.find(".contact-feedback");
        // a.preventDefault(),
        //   i.html("Wait...").addClass("wait").prop("disabled", !0),
        //   setTimeout(function () {
        //     e.ajax({
        //       url: t.attr("action"),
        //       type: "POST",
        //       data: t.serialize(),
        //     }).done(function (e) {
        //       "success" == e
        //         ? (i.removeClass("wait").html("Success").addClass("success"),
        //           o
        //             .addClass("success")
        //             .html("Thank you for your message. It has been sent.")
        //             .fadeIn(200),
        //           setTimeout(function () {
        //             i.html(s).removeClass("success").prop("disabled", !1),
        //               o.fadeOut(200).removeClass("success").html("");
        //           }, 6e3),
        //           t[0].reset())
        //         : (console.log(e),
        //           i.removeClass("wait").html("Error").addClass("error"),
        //           o
        //             .addClass("error")
        //             .html(
        //               "Server error! Please check your browser console log for more details."
        //             )
        //             .fadeIn(200),
        //           setTimeout(function () {
        //             i.html(s).removeClass("error").prop("disabled", !1),
        //               o.fadeOut(200).removeClass("error").html("");
        //           }, 6e3));
        //     });
        //   }, 1e3);
      });

    e("#contact-submit").on("click", function (event) {
      event.preventDefault();
      var contactName = e("#contact-name").val();
      var contactEmail = e("#contact-email").val();
      var message = e("#contact-message").val();
      var message_encode = `https://wa.me/+2347046220065?text=Hi my name is ${contactName},Email:${contactEmail}, ${message}`;

      // console.log(contactName, contactEmail, message);

      if (contactName === "" || contactEmail === "" || message === "") {
        e(".contact-feedback")
          .addClass("error")
          .html("sorry make sure all fields are filled and try again")
          .fadeIn(200);
        setTimeout(function () {
          e(".contact-feedback").fadeOut(200).removeClass("error").html("");
        }, 5000);
        return;
      }

      var sendelement = document.createElement("a");
      sendelement.href = message_encode;
      sendelement.setAttribute("target", "_blank");
      sendelement.click();
    });

    let spreeShop = 0;
    let cashbuddy = 0;
    let codebox = 0;
    let powpa = 0;

    e("#spreeShopLink").on("click", function () {
      if (spreeShop > 0) {
        return;
      }

      e("#spreeShopFrame").append(`<iframe
      src="https://spree-shop.netlify.app/"
      title="Spreeshop"
      loading="lazy"
      class="iframeStyle"
    ></iframe>`);
      spreeShop = 1;
    });

    e("#cashbuddyLink").on("click", function () {
      if (cashbuddy > 0) {
        return;
      }
      e("#cashBuddyFrame").append(`<iframe
      src="https://cashbuddy.ng/"
      title="cashbuddy"
      loading="lazy"
      class="iframeStyle"
    ></iframe>`);
      cashbuddy = 1;
    });

    e("#codeboxLink").on("click", function () {
      if (codebox > 0) {
        return;
      }
      e("#codeBoxFrame").append(`<iframe
      src="https://codebox0101.netlify.app/"
      title="code box"
      loading="lazy"
      class="iframeStyle"
    ></iframe>`);
      codebox = 1;
    });

    e("#powpaLink").on("click", function () {
      if (powpa > 0) {
        return;
      }
      e("#powpaFrame").append(`<iframe
      src="https://powpa.com/"
      title="powpa"
      loading="lazy"
      class="iframeStyle"
    ></iframe> `);
      powpa = 1;
    });
  }),
    e(window).on("load", function () {
      e(".preloader-icon").fadeOut(400),
        e(".preloader").delay(500).fadeOut("slow");
    });
})(jQuery);
