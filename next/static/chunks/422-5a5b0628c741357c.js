(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [422],
  {
    7213: function (e, t, a) {
      "use strict";
      a.d(t, {
        ZP: function () {
          return eg;
        },
      });
      var l = a(3366),
        o = a(7462),
        n = a(7294),
        r = a(8320),
        i = a(9707),
        s = a(4780),
        d = a(7124),
        p = a(9766);
      function c(e = "") {
        let t = (t, ...a) =>
          `var(--${e ? `${e}-` : ""}${t}${(function t(...a) {
            if (!a.length) return "";
            let l = a[0];
            return "string" != typeof l ||
              l.match(
                /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
              )
              ? `, ${l}`
              : `, var(--${e ? `${e}-` : ""}${l}${t(...a.slice(1))})`;
          })(...a)})`;
        return t;
      }
      var g = a(1796),
        u = a(1512),
        h = a(8373);
      let v = (e, t, a, l = []) => {
          let o = e;
          t.forEach((e, n) => {
            n === t.length - 1
              ? Array.isArray(o)
                ? (o[Number(e)] = a)
                : o && "object" == typeof o && (o[e] = a)
              : o &&
                "object" == typeof o &&
                (o[e] || (o[e] = l.includes(e) ? [] : {}), (o = o[e]));
          });
        },
        f = (e, t, a) => {
          !(function e(l, o = [], n = []) {
            Object.entries(l).forEach(([l, r]) => {
              (a && (!a || a([...o, l]))) ||
                null == r ||
                ("object" == typeof r && Object.keys(r).length > 0
                  ? e(r, [...o, l], Array.isArray(r) ? [...n, l] : n)
                  : t([...o, l], r, n));
            });
          })(e);
        },
        m = (e, t) => {
          if ("number" == typeof t) {
            if (
              ["lineHeight", "fontWeight", "opacity", "zIndex"].some((t) =>
                e.includes(t)
              )
            )
              return t;
            let a = e[e.length - 1];
            return a.toLowerCase().indexOf("opacity") >= 0 ? t : `${t}px`;
          }
          return t;
        };
      function b(e, t) {
        let { prefix: a, shouldSkipGeneratingVar: l } = t || {},
          o = {},
          n = {},
          r = {};
        return (
          f(
            e,
            (e, t, i) => {
              if (
                ("string" == typeof t || "number" == typeof t) &&
                (!l || !l(e, t))
              ) {
                let l = `--${a ? `${a}-` : ""}${e.join("-")}`;
                Object.assign(o, { [l]: m(e, t) }),
                  v(n, e, `var(${l})`, i),
                  v(r, e, `var(${l}, ${t})`, i);
              }
            },
            (e) => "vars" === e[0]
          ),
          { css: o, vars: n, varsWithDefaults: r }
        );
      }
      let C = ["colorSchemes", "components"],
        $ = ["light"];
      var y = function (e, t) {
          let { colorSchemes: a = {} } = e,
            n = (0, l.Z)(e, C),
            { vars: r, css: i, varsWithDefaults: s } = b(n, t),
            d = s,
            c = {},
            { light: g } = a,
            u = (0, l.Z)(a, $);
          if (
            (Object.entries(u || {}).forEach(([e, a]) => {
              let { vars: l, css: o, varsWithDefaults: n } = b(a, t);
              (d = (0, p.Z)(d, n)), (c[e] = { css: o, vars: l });
            }),
            g)
          ) {
            let { css: e, vars: a, varsWithDefaults: l } = b(g, t);
            (d = (0, p.Z)(d, l)), (c.light = { css: e, vars: a });
          }
          let h = (e) =>
            e
              ? { css: (0, o.Z)({}, c[e].css), vars: c[e].vars }
              : { css: (0, o.Z)({}, i), vars: r };
          return { vars: d, generateCssVars: h };
        },
        x = a(6523),
        w = a(4920);
      let B = (0, o.Z)({}, w.Z, {
        borderRadius: { themeKey: "radius" },
        boxShadow: { themeKey: "shadow" },
        fontFamily: { themeKey: "fontFamily" },
        fontSize: { themeKey: "fontSize" },
        fontWeight: { themeKey: "fontWeight" },
        letterSpacing: { themeKey: "letterSpacing" },
        lineHeight: { themeKey: "lineHeight" },
      });
      var S = {
        grey: {
          50: "#F7F7F8",
          100: "#EBEBEF",
          200: "#D8D8DF",
          300: "#B9B9C6",
          400: "#8F8FA3",
          500: "#73738C",
          600: "#5A5A72",
          700: "#434356",
          800: "#25252D",
          900: "#131318",
        },
        blue: {
          50: "#F4FAFF",
          100: "#DDF1FF",
          200: "#ADDBFF",
          300: "#6FB6FF",
          400: "#3990FF",
          500: "#096BDE",
          600: "#054DA7",
          700: "#02367D",
          800: "#072859",
          900: "#00153C",
        },
        yellow: {
          50: "#FFF8C5",
          100: "#FAE17D",
          200: "#EAC54F",
          300: "#D4A72C",
          400: "#BF8700",
          500: "#9A6700",
          600: "#7D4E00",
          700: "#633C01",
          800: "#4D2D00",
          900: "#3B2300",
        },
        red: {
          50: "#FFF8F6",
          100: "#FFE9E8",
          200: "#FFC7C5",
          300: "#FF9192",
          400: "#FA5255",
          500: "#D3232F",
          600: "#A10E25",
          700: "#77061B",
          800: "#580013",
          900: "#39000D",
        },
        green: {
          50: "#F3FEF5",
          100: "#D7F5DD",
          200: "#77EC95",
          300: "#4CC76E",
          400: "#2CA24D",
          500: "#1A7D36",
          600: "#0F5D26",
          700: "#034318",
          800: "#002F0F",
          900: "#001D09",
        },
        purple: {
          50: "#FDF7FF",
          100: "#F4EAFF",
          200: "#E1CBFF",
          300: "#C69EFF",
          400: "#A374F9",
          500: "#814DDE",
          600: "#5F35AE",
          700: "#452382",
          800: "#301761",
          900: "#1D0A42",
        },
      };
      function D(e) {
        var t;
        return (
          !!e[0].match(
            /^(typography|variants|breakpoints|colorInversion|colorInversionConfig)$/
          ) ||
          !!e[0].match(/sxConfig$/) ||
          ("palette" === e[0] &&
            !!(null != (t = e[1]) && t.match(/^(mode)$/))) ||
          ("focus" === e[0] && "thickness" !== e[1])
        );
      }
      var H = a(7621),
        F = a(1588);
      let k = (e, t) => (0, H.Z)(e, t, "Joy"),
        A = (e) =>
          e &&
          "object" == typeof e &&
          Object.keys(e).some((e) => {
            var t;
            return null == (t = e.match)
              ? void 0
              : t.call(
                  e,
                  /^(plain(Hover|Active|Disabled)?(Color|Bg)|outlined(Hover|Active|Disabled)?(Color|Border|Bg)|soft(Hover|Active|Disabled)?(Color|Bg)|solid(Hover|Active|Disabled)?(Color|Bg))$/
                );
          }),
        Z = (e, t, a) => {
          t.includes("Color") && (e.color = a),
            t.includes("Bg") && (e.backgroundColor = a),
            t.includes("Border") && (e.borderColor = a);
        },
        z = (e, t, a) => {
          let l = {};
          return (
            Object.entries(t || {}).forEach(([t, o]) => {
              if (t.match(RegExp(`${e}(color|bg|border)`, "i")) && o) {
                let e = a ? a(t) : o;
                t.includes("Disabled") &&
                  ((l.pointerEvents = "none"), (l.cursor = "default")),
                  t.match(/(Hover|Active|Disabled)/) ||
                    (l["--variant-borderWidth"] ||
                      (l["--variant-borderWidth"] = "0px"),
                    t.includes("Border") &&
                      ((l["--variant-borderWidth"] = "1px"),
                      (l.border = "var(--variant-borderWidth) solid"))),
                  Z(l, t, e);
              }
            }),
            l
          );
        },
        E = (e) => (t) => `--${e ? `${e}-` : ""}${t.replace(/^--/, "")}`,
        j = (e, t) => {
          let a = {};
          if (t) {
            let { getCssVar: l, palette: n } = t;
            Object.entries(n).forEach((t) => {
              let [r, i] = t;
              A(i) &&
                "object" == typeof i &&
                (a = (0, o.Z)({}, a, {
                  [r]: z(e, i, (e) => l(`palette-${r}-${e}`, n[r][e])),
                }));
            });
          }
          return (
            (a.context = z(e, {
              plainColor: "var(--variant-plainColor)",
              plainHoverColor: "var(--variant-plainHoverColor)",
              plainHoverBg: "var(--variant-plainHoverBg)",
              plainActiveBg: "var(--variant-plainActiveBg)",
              plainDisabledColor: "var(--variant-plainDisabledColor)",
              outlinedColor: "var(--variant-outlinedColor)",
              outlinedBorder: "var(--variant-outlinedBorder)",
              outlinedHoverColor: "var(--variant-outlinedHoverColor)",
              outlinedHoverBorder: "var(--variant-outlinedHoverBorder)",
              outlinedHoverBg: "var(--variant-outlinedHoverBg)",
              outlinedActiveBg: "var(--variant-outlinedActiveBg)",
              outlinedDisabledColor: "var(--variant-outlinedDisabledColor)",
              outlinedDisabledBorder: "var(--variant-outlinedDisabledBorder)",
              softColor: "var(--variant-softColor)",
              softBg: "var(--variant-softBg)",
              softHoverColor: "var(--variant-softHoverColor)",
              softHoverBg: "var(--variant-softHoverBg)",
              softActiveBg: "var(--variant-softActiveBg)",
              softDisabledColor: "var(--variant-softDisabledColor)",
              softDisabledBg: "var(--variant-softDisabledBg)",
              solidColor: "var(--variant-solidColor)",
              solidBg: "var(--variant-solidBg)",
              solidHoverColor: "var(--variant-solidHoverColor)",
              solidHoverBg: "var(--variant-solidHoverBg)",
              solidActiveBg: "var(--variant-solidActiveBg)",
              solidDisabledColor: "var(--variant-solidDisabledColor)",
              solidDisabledBg: "var(--variant-solidDisabledBg)",
            })),
            a
          );
        },
        I = (e, t) => {
          let a = c(e.cssVarPrefix),
            l = E(e.cssVarPrefix),
            o = {},
            n = t
              ? (t) => {
                  var l, o;
                  let n = t.split("-"),
                    r = n[1],
                    i = n[2];
                  return a(
                    t,
                    null == (l = e.palette)
                      ? void 0
                      : null == (o = l[r])
                      ? void 0
                      : o[i]
                  );
                }
              : a;
          return (
            Object.entries(e.palette).forEach((t) => {
              let [a, r] = t;
              A(r) &&
                (o[a] = {
                  "--Badge-ringColor": n(`palette-${a}-softBg`),
                  [l("--shadowChannel")]: n(`palette-${a}-darkChannel`),
                  [e.getColorSchemeSelector("dark")]: {
                    [l("--palette-focusVisible")]: n(`palette-${a}-300`),
                    [l("--palette-background-body")]: `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.1)`,
                    [l("--palette-background-surface")]: `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.08)`,
                    [l("--palette-background-level1")]: `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.2)`,
                    [l("--palette-background-level2")]: `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.4)`,
                    [l("--palette-background-level3")]: `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.6)`,
                    [l("--palette-text-primary")]: n(`palette-${a}-100`),
                    [l("--palette-text-secondary")]: `rgba(${n(
                      `palette-${a}-lightChannel`
                    )} / 0.72)`,
                    [l("--palette-text-tertiary")]: `rgba(${n(
                      `palette-${a}-lightChannel`
                    )} / 0.6)`,
                    [l("--palette-divider")]: `rgba(${n(
                      `palette-${a}-lightChannel`
                    )} / 0.2)`,
                    "--variant-plainColor": `rgba(${n(
                      `palette-${a}-lightChannel`
                    )} / 1)`,
                    "--variant-plainHoverColor": n(`palette-${a}-50`),
                    "--variant-plainHoverBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.16)`,
                    "--variant-plainActiveBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.32)`,
                    "--variant-plainDisabledColor": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.72)`,
                    "--variant-outlinedColor": `rgba(${n(
                      `palette-${a}-lightChannel`
                    )} / 1)`,
                    "--variant-outlinedHoverColor": n(`palette-${a}-50`),
                    "--variant-outlinedBg": "initial",
                    "--variant-outlinedBorder": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.4)`,
                    "--variant-outlinedHoverBorder": n(`palette-${a}-600`),
                    "--variant-outlinedHoverBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.16)`,
                    "--variant-outlinedActiveBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.32)`,
                    "--variant-outlinedDisabledColor": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.72)`,
                    "--variant-outlinedDisabledBorder": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.2)`,
                    "--variant-softColor": n(`palette-${a}-100`),
                    "--variant-softBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.24)`,
                    "--variant-softHoverColor": "#fff",
                    "--variant-softHoverBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.32)`,
                    "--variant-softActiveBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.48)`,
                    "--variant-softDisabledColor": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.72)`,
                    "--variant-softDisabledBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.12)`,
                    "--variant-solidColor": "#fff",
                    "--variant-solidBg": n(`palette-${a}-500`),
                    "--variant-solidHoverColor": "#fff",
                    "--variant-solidHoverBg": n(`palette-${a}-400`),
                    "--variant-solidActiveBg": n(`palette-${a}-400`),
                    "--variant-solidDisabledColor": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.72)`,
                    "--variant-solidDisabledBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.12)`,
                  },
                  [e.getColorSchemeSelector("light")]: {
                    [l("--palette-focusVisible")]: n(`palette-${a}-500`),
                    [l("--palette-background-body")]: `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.1)`,
                    [l("--palette-background-surface")]: `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.08)`,
                    [l("--palette-background-level1")]: `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.2)`,
                    [l("--palette-background-level2")]: `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.32)`,
                    [l("--palette-background-level3")]: `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.48)`,
                    [l("--palette-text-primary")]: n(`palette-${a}-700`),
                    [l("--palette-text-secondary")]: `rgba(${n(
                      `palette-${a}-darkChannel`
                    )} / 0.8)`,
                    [l("--palette-text-tertiary")]: `rgba(${n(
                      `palette-${a}-darkChannel`
                    )} / 0.68)`,
                    [l("--palette-divider")]: `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.32)`,
                    "--variant-plainColor": `rgba(${n(
                      `palette-${a}-darkChannel`
                    )} / 0.8)`,
                    "--variant-plainHoverColor": `rgba(${n(
                      `palette-${a}-darkChannel`
                    )} / 1)`,
                    "--variant-plainHoverBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.12)`,
                    "--variant-plainActiveBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.24)`,
                    "--variant-plainDisabledColor": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.6)`,
                    "--variant-outlinedColor": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 1)`,
                    "--variant-outlinedBorder": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.4)`,
                    "--variant-outlinedHoverColor": n(`palette-${a}-600`),
                    "--variant-outlinedHoverBorder": n(`palette-${a}-300`),
                    "--variant-outlinedHoverBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.12)`,
                    "--variant-outlinedActiveBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.24)`,
                    "--variant-outlinedDisabledColor": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.6)`,
                    "--variant-outlinedDisabledBorder": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.12)`,
                    "--variant-softColor": n(`palette-${a}-600`),
                    "--variant-softBg": `rgba(${n(
                      `palette-${a}-lightChannel`
                    )} / 0.72)`,
                    "--variant-softHoverColor": n(`palette-${a}-700`),
                    "--variant-softHoverBg": n(`palette-${a}-200`),
                    "--variant-softActiveBg": n(`palette-${a}-300`),
                    "--variant-softDisabledColor": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.6)`,
                    "--variant-softDisabledBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.08)`,
                    "--variant-solidColor": n("palette-common-white"),
                    "--variant-solidBg": n(`palette-${a}-600`),
                    "--variant-solidHoverColor": n("palette-common-white"),
                    "--variant-solidHoverBg": n(`palette-${a}-500`),
                    "--variant-solidActiveBg": n(`palette-${a}-500`),
                    "--variant-solidDisabledColor": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.6)`,
                    "--variant-solidDisabledBg": `rgba(${n(
                      `palette-${a}-mainChannel`
                    )} / 0.08)`,
                  },
                });
            }),
            o
          );
        },
        R = (e, t) => {
          let a = c(e.cssVarPrefix),
            l = E(e.cssVarPrefix),
            o = {},
            n = t
              ? (t) => {
                  let l = t.split("-"),
                    o = l[1],
                    n = l[2];
                  return a(t, e.palette[o][n]);
                }
              : a;
          return (
            Object.entries(e.palette).forEach((e) => {
              let [t, a] = e;
              A(a) &&
                ("warning" === t
                  ? (o.warning = {
                      "--Badge-ringColor": n(`palette-${t}-solidBg`),
                      [l("--shadowChannel")]: n(`palette-${t}-darkChannel`),
                      [l("--palette-focusVisible")]: n(`palette-${t}-700`),
                      [l("--palette-background-body")]: `rgba(${n(
                        `palette-${t}-darkChannel`
                      )} / 0.16)`,
                      [l("--palette-background-surface")]: `rgba(${n(
                        `palette-${t}-darkChannel`
                      )} / 0.1)`,
                      [l("--palette-background-popup")]: n(`palette-${t}-100`),
                      [l("--palette-background-level1")]: `rgba(${n(
                        `palette-${t}-darkChannel`
                      )} / 0.2)`,
                      [l("--palette-background-level2")]: `rgba(${n(
                        `palette-${t}-darkChannel`
                      )} / 0.36)`,
                      [l("--palette-background-level3")]: `rgba(${n(
                        `palette-${t}-darkChannel`
                      )} / 0.6)`,
                      [l("--palette-text-primary")]: n(`palette-${t}-900`),
                      [l("--palette-text-secondary")]: n(`palette-${t}-700`),
                      [l("--palette-text-tertiary")]: n(`palette-${t}-500`),
                      [l("--palette-divider")]: `rgba(${n(
                        `palette-${t}-darkChannel`
                      )} / 0.2)`,
                      "--variant-plainColor": n(`palette-${t}-700`),
                      "--variant-plainHoverColor": n(`palette-${t}-800`),
                      "--variant-plainHoverBg": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.12)`,
                      "--variant-plainActiveBg": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.32)`,
                      "--variant-plainDisabledColor": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.72)`,
                      "--variant-outlinedColor": n(`palette-${t}-700`),
                      "--variant-outlinedBorder": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.5)`,
                      "--variant-outlinedHoverColor": n(`palette-${t}-800`),
                      "--variant-outlinedHoverBorder": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.6)`,
                      "--variant-outlinedHoverBg": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.12)`,
                      "--variant-outlinedActiveBg": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.32)`,
                      "--variant-outlinedDisabledColor": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.72)`,
                      "--variant-outlinedDisabledBorder": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.2)`,
                      "--variant-softColor": n(`palette-${t}-800`),
                      "--variant-softHoverColor": n(`palette-${t}-900`),
                      "--variant-softBg": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.2)`,
                      "--variant-softHoverBg": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.28)`,
                      "--variant-softActiveBg": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.12)`,
                      "--variant-softDisabledColor": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.72)`,
                      "--variant-softDisabledBg": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.08)`,
                      "--variant-solidColor": "#fff",
                      "--variant-solidBg": n(`palette-${t}-600`),
                      "--variant-solidHoverColor": "#fff",
                      "--variant-solidHoverBg": n(`palette-${t}-700`),
                      "--variant-solidActiveBg": n(`palette-${t}-800`),
                      "--variant-solidDisabledColor": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.72)`,
                      "--variant-solidDisabledBg": `rgba(${n(
                        `palette-${t}-mainChannel`
                      )} / 0.08)`,
                    })
                  : (o[t] = {
                      colorScheme: "dark",
                      "--Badge-ringColor": n(`palette-${t}-solidBg`),
                      [l("--shadowChannel")]: n(`palette-${t}-darkChannel`),
                      [l("--palette-focusVisible")]: n(`palette-${t}-200`),
                      [l("--palette-background-body")]: "rgba(0 0 0 / 0.1)",
                      [l("--palette-background-surface")]: "rgba(0 0 0 / 0.06)",
                      [l("--palette-background-popup")]: n(`palette-${t}-700`),
                      [l("--palette-background-level1")]: `rgba(${n(
                        `palette-${t}-darkChannel`
                      )} / 0.2)`,
                      [l("--palette-background-level2")]: `rgba(${n(
                        `palette-${t}-darkChannel`
                      )} / 0.36)`,
                      [l("--palette-background-level3")]: `rgba(${n(
                        `palette-${t}-darkChannel`
                      )} / 0.6)`,
                      [l("--palette-text-primary")]: n("palette-common-white"),
                      [l("--palette-text-secondary")]: n(`palette-${t}-100`),
                      [l("--palette-text-tertiary")]: n(`palette-${t}-200`),
                      [l("--palette-divider")]: `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.32)`,
                      "--variant-plainColor": n(`palette-${t}-50`),
                      "--variant-plainHoverColor": "#fff",
                      "--variant-plainHoverBg": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.12)`,
                      "--variant-plainActiveBg": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.32)`,
                      "--variant-plainDisabledColor": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.72)`,
                      "--variant-outlinedColor": n(`palette-${t}-50`),
                      "--variant-outlinedBorder": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.5)`,
                      "--variant-outlinedHoverColor": "#fff",
                      "--variant-outlinedHoverBorder": n(`palette-${t}-300`),
                      "--variant-outlinedHoverBg": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.12)`,
                      "--variant-outlinedActiveBg": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.32)`,
                      "--variant-outlinedDisabledColor": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.72)`,
                      "--variant-outlinedDisabledBorder":
                        "rgba(255 255 255 / 0.2)",
                      "--variant-softColor": n("palette-common-white"),
                      "--variant-softHoverColor": n("palette-common-white"),
                      "--variant-softBg": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.24)`,
                      "--variant-softHoverBg": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.36)`,
                      "--variant-softActiveBg": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.16)`,
                      "--variant-softDisabledColor": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.72)`,
                      "--variant-softDisabledBg": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.1)`,
                      "--variant-solidColor": n(
                        `palette-${t}-${"neutral" === t ? "600" : "500"}`
                      ),
                      "--variant-solidBg": n("palette-common-white"),
                      "--variant-solidHoverColor": n(`palette-${t}-700`),
                      "--variant-solidHoverBg": n("palette-common-white"),
                      "--variant-solidActiveBg": n(`palette-${t}-200`),
                      "--variant-solidDisabledColor": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.72)`,
                      "--variant-solidDisabledBg": `rgba(${n(
                        `palette-${t}-lightChannel`
                      )} / 0.1)`,
                    }));
            }),
            o
          );
        },
        _ = [
          "cssVarPrefix",
          "breakpoints",
          "spacing",
          "components",
          "variants",
          "colorInversion",
          "shouldSkipGeneratingVar",
        ],
        P = ["colorSchemes"],
        O = (e = "joy") => c(e),
        W = (function (e) {
          var t,
            a,
            n,
            r,
            i,
            s,
            d,
            c,
            v,
            f,
            m,
            b,
            C,
            $,
            w,
            H,
            F,
            A,
            Z,
            z,
            E,
            W,
            N,
            T,
            L,
            M,
            V,
            q,
            U,
            J,
            K,
            G,
            Y,
            Q,
            X,
            ee,
            et,
            ea,
            el,
            eo,
            en,
            er,
            ei,
            es,
            ed,
            ep,
            ec,
            eg,
            eu,
            eh,
            ev,
            ef,
            em,
            eb,
            eC,
            e$,
            ey,
            ex,
            ew,
            eB,
            eS,
            eD,
            eH,
            eF,
            ek,
            eA,
            eZ,
            ez,
            eE,
            ej,
            eI,
            eR,
            e_,
            eP,
            eO,
            eW,
            eN,
            eT,
            eL,
            eM,
            eV,
            eq;
          let eU = e || {},
            {
              cssVarPrefix: eJ = "joy",
              breakpoints: eK,
              spacing: eG,
              components: eY,
              variants: eQ,
              colorInversion: eX,
              shouldSkipGeneratingVar: e0 = D,
            } = eU,
            e1 = (0, l.Z)(eU, _),
            e2 = O(eJ),
            e3 = {
              primary: S.blue,
              neutral: S.grey,
              danger: S.red,
              info: S.purple,
              success: S.green,
              warning: S.yellow,
              common: { white: "#FFF", black: "#09090D" },
            },
            e5 = (e) => {
              var t;
              let a = e.split("-"),
                l = a[1],
                o = a[2];
              return e2(e, null == (t = e3[l]) ? void 0 : t[o]);
            },
            e7 = (e) => ({
              plainColor: e5(`palette-${e}-600`),
              plainHoverBg: e5(`palette-${e}-100`),
              plainActiveBg: e5(`palette-${e}-200`),
              plainDisabledColor: e5(`palette-${e}-200`),
              outlinedColor: e5(`palette-${e}-500`),
              outlinedBorder: e5(`palette-${e}-200`),
              outlinedHoverBg: e5(`palette-${e}-100`),
              outlinedHoverBorder: e5(`palette-${e}-300`),
              outlinedActiveBg: e5(`palette-${e}-200`),
              outlinedDisabledColor: e5(`palette-${e}-100`),
              outlinedDisabledBorder: e5(`palette-${e}-100`),
              softColor: e5(`palette-${e}-600`),
              softBg: e5(`palette-${e}-100`),
              softHoverBg: e5(`palette-${e}-200`),
              softActiveBg: e5(`palette-${e}-300`),
              softDisabledColor: e5(`palette-${e}-300`),
              softDisabledBg: e5(`palette-${e}-50`),
              solidColor: "#fff",
              solidBg: e5(`palette-${e}-500`),
              solidHoverBg: e5(`palette-${e}-600`),
              solidActiveBg: e5(`palette-${e}-700`),
              solidDisabledColor: "#fff",
              solidDisabledBg: e5(`palette-${e}-200`),
            }),
            e8 = (e) => ({
              plainColor: e5(`palette-${e}-300`),
              plainHoverBg: e5(`palette-${e}-800`),
              plainActiveBg: e5(`palette-${e}-700`),
              plainDisabledColor: e5(`palette-${e}-800`),
              outlinedColor: e5(`palette-${e}-200`),
              outlinedBorder: e5(`palette-${e}-700`),
              outlinedHoverBg: e5(`palette-${e}-800`),
              outlinedHoverBorder: e5(`palette-${e}-600`),
              outlinedActiveBg: e5(`palette-${e}-900`),
              outlinedDisabledColor: e5(`palette-${e}-800`),
              outlinedDisabledBorder: e5(`palette-${e}-800`),
              softColor: e5(`palette-${e}-200`),
              softBg: e5(`palette-${e}-900`),
              softHoverBg: e5(`palette-${e}-800`),
              softActiveBg: e5(`palette-${e}-700`),
              softDisabledColor: e5(`palette-${e}-800`),
              softDisabledBg: e5(`palette-${e}-900`),
              solidColor: "#fff",
              solidBg: e5(`palette-${e}-600`),
              solidHoverBg: e5(`palette-${e}-700`),
              solidActiveBg: e5(`palette-${e}-800`),
              solidDisabledColor: e5(`palette-${e}-700`),
              solidDisabledBg: e5(`palette-${e}-900`),
            }),
            e6 = {
              palette: {
                mode: "light",
                primary: (0, o.Z)({}, e3.primary, e7("primary")),
                neutral: (0, o.Z)({}, e3.neutral, {
                  plainColor: e5("palette-neutral-800"),
                  plainHoverColor: e5("palette-neutral-900"),
                  plainHoverBg: e5("palette-neutral-100"),
                  plainActiveBg: e5("palette-neutral-200"),
                  plainDisabledColor: e5("palette-neutral-300"),
                  outlinedColor: e5("palette-neutral-800"),
                  outlinedBorder: e5("palette-neutral-200"),
                  outlinedHoverColor: e5("palette-neutral-900"),
                  outlinedHoverBg: e5("palette-neutral-100"),
                  outlinedHoverBorder: e5("palette-neutral-300"),
                  outlinedActiveBg: e5("palette-neutral-200"),
                  outlinedDisabledColor: e5("palette-neutral-300"),
                  outlinedDisabledBorder: e5("palette-neutral-100"),
                  softColor: e5("palette-neutral-800"),
                  softBg: e5("palette-neutral-100"),
                  softHoverColor: e5("palette-neutral-900"),
                  softHoverBg: e5("palette-neutral-200"),
                  softActiveBg: e5("palette-neutral-300"),
                  softDisabledColor: e5("palette-neutral-300"),
                  softDisabledBg: e5("palette-neutral-50"),
                  solidColor: e5("palette-common-white"),
                  solidBg: e5("palette-neutral-600"),
                  solidHoverBg: e5("palette-neutral-700"),
                  solidActiveBg: e5("palette-neutral-800"),
                  solidDisabledColor: e5("palette-neutral-300"),
                  solidDisabledBg: e5("palette-neutral-50"),
                }),
                danger: (0, o.Z)({}, e3.danger, e7("danger")),
                info: (0, o.Z)({}, e3.info, e7("info")),
                success: (0, o.Z)({}, e3.success, e7("success")),
                warning: (0, o.Z)({}, e3.warning, e7("warning"), {
                  solidColor: e5("palette-warning-800"),
                  solidBg: e5("palette-warning-200"),
                  solidHoverBg: e5("palette-warning-300"),
                  solidActiveBg: e5("palette-warning-400"),
                  solidDisabledColor: e5("palette-warning-200"),
                  solidDisabledBg: e5("palette-warning-50"),
                  softColor: e5("palette-warning-800"),
                  softBg: e5("palette-warning-50"),
                  softHoverBg: e5("palette-warning-100"),
                  softActiveBg: e5("palette-warning-200"),
                  softDisabledColor: e5("palette-warning-200"),
                  softDisabledBg: e5("palette-warning-50"),
                  outlinedColor: e5("palette-warning-800"),
                  outlinedHoverBg: e5("palette-warning-50"),
                  plainColor: e5("palette-warning-800"),
                  plainHoverBg: e5("palette-warning-50"),
                }),
                common: { white: "#FFF", black: "#09090D" },
                text: {
                  primary: e5("palette-neutral-800"),
                  secondary: e5("palette-neutral-600"),
                  tertiary: e5("palette-neutral-500"),
                },
                background: {
                  body: e5("palette-common-white"),
                  surface: e5("palette-common-white"),
                  popup: e5("palette-common-white"),
                  level1: e5("palette-neutral-50"),
                  level2: e5("palette-neutral-100"),
                  level3: e5("palette-neutral-200"),
                  tooltip: e5("palette-neutral-800"),
                  backdrop: "rgba(255 255 255 / 0.5)",
                },
                divider: `rgba(${e2(
                  "palette-neutral-mainChannel",
                  (0, g.n8)(e3.neutral[500])
                )} / 0.28)`,
                focusVisible: e5("palette-primary-500"),
              },
              shadowRing: "0 0 #000",
              shadowChannel: "187 187 187",
            },
            e4 = {
              palette: {
                mode: "dark",
                primary: (0, o.Z)({}, e3.primary, e8("primary")),
                neutral: (0, o.Z)({}, e3.neutral, {
                  plainColor: e5("palette-neutral-200"),
                  plainHoverColor: e5("palette-neutral-50"),
                  plainHoverBg: e5("palette-neutral-800"),
                  plainActiveBg: e5("palette-neutral-700"),
                  plainDisabledColor: e5("palette-neutral-700"),
                  outlinedColor: e5("palette-neutral-200"),
                  outlinedBorder: e5("palette-neutral-800"),
                  outlinedHoverColor: e5("palette-neutral-50"),
                  outlinedHoverBg: e5("palette-neutral-800"),
                  outlinedHoverBorder: e5("palette-neutral-700"),
                  outlinedActiveBg: e5("palette-neutral-800"),
                  outlinedDisabledColor: e5("palette-neutral-800"),
                  outlinedDisabledBorder: e5("palette-neutral-800"),
                  softColor: e5("palette-neutral-200"),
                  softBg: e5("palette-neutral-800"),
                  softHoverColor: e5("palette-neutral-50"),
                  softHoverBg: e5("palette-neutral-700"),
                  softActiveBg: e5("palette-neutral-600"),
                  softDisabledColor: e5("palette-neutral-700"),
                  softDisabledBg: e5("palette-neutral-900"),
                  solidColor: e5("palette-common-white"),
                  solidBg: e5("palette-neutral-600"),
                  solidHoverBg: e5("palette-neutral-700"),
                  solidActiveBg: e5("palette-neutral-800"),
                  solidDisabledColor: e5("palette-neutral-700"),
                  solidDisabledBg: e5("palette-neutral-900"),
                }),
                danger: (0, o.Z)({}, e3.danger, e8("danger")),
                info: (0, o.Z)({}, e3.info, e8("info")),
                success: (0, o.Z)({}, e3.success, e8("success"), {
                  solidColor: "#fff",
                  solidBg: e5("palette-success-600"),
                  solidHoverBg: e5("palette-success-700"),
                  solidActiveBg: e5("palette-success-800"),
                }),
                warning: (0, o.Z)({}, e3.warning, e8("warning"), {
                  solidColor: e5("palette-common-black"),
                  solidBg: e5("palette-warning-300"),
                  solidHoverBg: e5("palette-warning-400"),
                  solidActiveBg: e5("palette-warning-500"),
                }),
                common: { white: "#FFF", black: "#09090D" },
                text: {
                  primary: e5("palette-neutral-100"),
                  secondary: e5("palette-neutral-300"),
                  tertiary: e5("palette-neutral-400"),
                },
                background: {
                  body: e5("palette-neutral-900"),
                  surface: e5("palette-common-black"),
                  popup: e5("palette-neutral-900"),
                  level1: e5("palette-neutral-800"),
                  level2: e5("palette-neutral-700"),
                  level3: e5("palette-neutral-600"),
                  tooltip: e5("palette-neutral-600"),
                  backdrop: `rgba(${e2(
                    "palette-neutral-darkChannel",
                    (0, g.n8)(e3.neutral[800])
                  )} / 0.5)`,
                },
                divider: `rgba(${e2(
                  "palette-neutral-mainChannel",
                  (0, g.n8)(e3.neutral[500])
                )} / 0.24)`,
                focusVisible: e5("palette-primary-500"),
              },
              shadowRing: "0 0 #000",
              shadowChannel: "0 0 0",
            },
            e9 =
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            te = (0, o.Z)(
              {
                body: `"Public Sans", ${e2("fontFamily-fallback", e9)}`,
                display: `"Public Sans", ${e2("fontFamily-fallback", e9)}`,
                code: "Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
                fallback: e9,
              },
              e1.fontFamily
            ),
            tt = (0, o.Z)(
              {
                xs: 200,
                sm: 300,
                md: 500,
                lg: 600,
                xl: 700,
                xl2: 800,
                xl3: 900,
              },
              e1.fontWeight
            ),
            ta = (0, o.Z)(
              {
                xs3: "0.5rem",
                xs2: "0.625rem",
                xs: "0.75rem",
                sm: "0.875rem",
                md: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                xl2: "1.5rem",
                xl3: "1.875rem",
                xl4: "2.25rem",
                xl5: "3rem",
                xl6: "3.75rem",
                xl7: "4.5rem",
              },
              e1.fontSize
            ),
            tl = (0, o.Z)({ sm: 1.25, md: 1.5, lg: 1.7 }, e1.lineHeight),
            to = (0, o.Z)(
              { sm: "-0.01em", md: "0.083em", lg: "0.125em" },
              e1.letterSpacing
            ),
            tn = {
              colorSchemes: { light: e6, dark: e4 },
              fontSize: ta,
              fontFamily: te,
              fontWeight: tt,
              focus: {
                thickness: "2px",
                selector: `&.${k("", "focusVisible")}, &:focus-visible`,
                default: {
                  outlineOffset: `var(--focus-outline-offset, ${e2(
                    "focus-thickness",
                    null != (t = null == (a = e1.focus) ? void 0 : a.thickness)
                      ? t
                      : "2px"
                  )})`,
                  outline: `${e2(
                    "focus-thickness",
                    null != (n = null == (r = e1.focus) ? void 0 : r.thickness)
                      ? n
                      : "2px"
                  )} solid ${e2("palette-focusVisible", e3.primary[500])}`,
                },
              },
              lineHeight: tl,
              letterSpacing: to,
              radius: {
                xs: "4px",
                sm: "8px",
                md: "12px",
                lg: "16px",
                xl: "20px",
              },
              shadow: {
                xs: `${e2(
                  "shadowRing",
                  null !=
                    (i =
                      null == (s = e1.colorSchemes)
                        ? void 0
                        : null == (d = s.light)
                        ? void 0
                        : d.shadowRing)
                    ? i
                    : e6.shadowRing
                )}, 0 1px 2px 0 rgba(${e2(
                  "shadowChannel",
                  null !=
                    (c =
                      null == (v = e1.colorSchemes)
                        ? void 0
                        : null == (f = v.light)
                        ? void 0
                        : f.shadowChannel)
                    ? c
                    : e6.shadowChannel
                )} / 0.12)`,
                sm: `${e2(
                  "shadowRing",
                  null !=
                    (m =
                      null == (b = e1.colorSchemes)
                        ? void 0
                        : null == (C = b.light)
                        ? void 0
                        : C.shadowRing)
                    ? m
                    : e6.shadowRing
                )}, 0.3px 0.8px 1.1px rgba(${e2(
                  "shadowChannel",
                  null !=
                    ($ =
                      null == (w = e1.colorSchemes)
                        ? void 0
                        : null == (H = w.light)
                        ? void 0
                        : H.shadowChannel)
                    ? $
                    : e6.shadowChannel
                )} / 0.11), 0.5px 1.3px 1.8px -0.6px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (F =
                      null == (A = e1.colorSchemes)
                        ? void 0
                        : null == (Z = A.light)
                        ? void 0
                        : Z.shadowChannel)
                    ? F
                    : e6.shadowChannel
                )} / 0.18), 1.1px 2.7px 3.8px -1.2px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (z =
                      null == (E = e1.colorSchemes)
                        ? void 0
                        : null == (W = E.light)
                        ? void 0
                        : W.shadowChannel)
                    ? z
                    : e6.shadowChannel
                )} / 0.26)`,
                md: `${e2(
                  "shadowRing",
                  null !=
                    (N =
                      null == (T = e1.colorSchemes)
                        ? void 0
                        : null == (L = T.light)
                        ? void 0
                        : L.shadowRing)
                    ? N
                    : e6.shadowRing
                )}, 0.3px 0.8px 1.1px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (M =
                      null == (V = e1.colorSchemes)
                        ? void 0
                        : null == (q = V.light)
                        ? void 0
                        : q.shadowChannel)
                    ? M
                    : e6.shadowChannel
                )} / 0.12), 1.1px 2.8px 3.9px -0.4px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (U =
                      null == (J = e1.colorSchemes)
                        ? void 0
                        : null == (K = J.light)
                        ? void 0
                        : K.shadowChannel)
                    ? U
                    : e6.shadowChannel
                )} / 0.17), 2.4px 6.1px 8.6px -0.8px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (G =
                      null == (Y = e1.colorSchemes)
                        ? void 0
                        : null == (Q = Y.light)
                        ? void 0
                        : Q.shadowChannel)
                    ? G
                    : e6.shadowChannel
                )} / 0.23), 5.3px 13.3px 18.8px -1.2px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (X =
                      null == (ee = e1.colorSchemes)
                        ? void 0
                        : null == (et = ee.light)
                        ? void 0
                        : et.shadowChannel)
                    ? X
                    : e6.shadowChannel
                )} / 0.29)`,
                lg: `${e2(
                  "shadowRing",
                  null !=
                    (ea =
                      null == (el = e1.colorSchemes)
                        ? void 0
                        : null == (eo = el.light)
                        ? void 0
                        : eo.shadowRing)
                    ? ea
                    : e6.shadowRing
                )}, 0.3px 0.8px 1.1px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (en =
                      null == (er = e1.colorSchemes)
                        ? void 0
                        : null == (ei = er.light)
                        ? void 0
                        : ei.shadowChannel)
                    ? en
                    : e6.shadowChannel
                )} / 0.11), 1.8px 4.5px 6.4px -0.2px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (es =
                      null == (ed = e1.colorSchemes)
                        ? void 0
                        : null == (ep = ed.light)
                        ? void 0
                        : ep.shadowChannel)
                    ? es
                    : e6.shadowChannel
                )} / 0.13), 3.2px 7.9px 11.2px -0.4px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (ec =
                      null == (eg = e1.colorSchemes)
                        ? void 0
                        : null == (eu = eg.light)
                        ? void 0
                        : eu.shadowChannel)
                    ? ec
                    : e6.shadowChannel
                )} / 0.16), 4.8px 12px 17px -0.5px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (eh =
                      null == (ev = e1.colorSchemes)
                        ? void 0
                        : null == (ef = ev.light)
                        ? void 0
                        : ef.shadowChannel)
                    ? eh
                    : e6.shadowChannel
                )} / 0.19), 7px 17.5px 24.7px -0.7px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (em =
                      null == (eb = e1.colorSchemes)
                        ? void 0
                        : null == (eC = eb.light)
                        ? void 0
                        : eC.shadowChannel)
                    ? em
                    : e6.shadowChannel
                )} / 0.21)`,
                xl: `${e2(
                  "shadowRing",
                  null !=
                    (e$ =
                      null == (ey = e1.colorSchemes)
                        ? void 0
                        : null == (ex = ey.light)
                        ? void 0
                        : ex.shadowRing)
                    ? e$
                    : e6.shadowRing
                )}, 0.3px 0.8px 1.1px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (ew =
                      null == (eB = e1.colorSchemes)
                        ? void 0
                        : null == (eS = eB.light)
                        ? void 0
                        : eS.shadowChannel)
                    ? ew
                    : e6.shadowChannel
                )} / 0.11), 1.8px 4.5px 6.4px -0.2px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (eD =
                      null == (eH = e1.colorSchemes)
                        ? void 0
                        : null == (eF = eH.light)
                        ? void 0
                        : eF.shadowChannel)
                    ? eD
                    : e6.shadowChannel
                )} / 0.13), 3.2px 7.9px 11.2px -0.4px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (ek =
                      null == (eA = e1.colorSchemes)
                        ? void 0
                        : null == (eZ = eA.light)
                        ? void 0
                        : eZ.shadowChannel)
                    ? ek
                    : e6.shadowChannel
                )} / 0.16), 4.8px 12px 17px -0.5px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (ez =
                      null == (eE = e1.colorSchemes)
                        ? void 0
                        : null == (ej = eE.light)
                        ? void 0
                        : ej.shadowChannel)
                    ? ez
                    : e6.shadowChannel
                )} / 0.19), 7px 17.5px 24.7px -0.7px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (eI =
                      null == (eR = e1.colorSchemes)
                        ? void 0
                        : null == (e_ = eR.light)
                        ? void 0
                        : e_.shadowChannel)
                    ? eI
                    : e6.shadowChannel
                )} / 0.21), 10.2px 25.5px 36px -0.9px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (eP =
                      null == (eO = e1.colorSchemes)
                        ? void 0
                        : null == (eW = eO.light)
                        ? void 0
                        : eW.shadowChannel)
                    ? eP
                    : e6.shadowChannel
                )} / 0.24), 14.8px 36.8px 52.1px -1.1px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (eN =
                      null == (eT = e1.colorSchemes)
                        ? void 0
                        : null == (eL = eT.light)
                        ? void 0
                        : eL.shadowChannel)
                    ? eN
                    : e6.shadowChannel
                )} / 0.27), 21px 52.3px 74px -1.2px rgba(${e2(
                  "shadowChannel",
                  null !=
                    (eM =
                      null == (eV = e1.colorSchemes)
                        ? void 0
                        : null == (eq = eV.light)
                        ? void 0
                        : eq.shadowChannel)
                    ? eM
                    : e6.shadowChannel
                )} / 0.29)`,
              },
              zIndex: {
                badge: 1,
                table: 10,
                popup: 1e3,
                modal: 1300,
                tooltip: 1500,
              },
              typography: {
                display1: {
                  fontFamily: e2("fontFamily-display", te.display),
                  fontWeight: e2("fontWeight-xl", tt.xl.toString()),
                  fontSize: e2("fontSize-xl7", ta.xl7),
                  lineHeight: e2("lineHeight-sm", tl.sm.toString()),
                  letterSpacing: e2("letterSpacing-sm", to.sm),
                  color: e2("palette-text-primary", e6.palette.text.primary),
                },
                display2: {
                  fontFamily: e2("fontFamily-display", te.display),
                  fontWeight: e2("fontWeight-xl", tt.xl.toString()),
                  fontSize: e2("fontSize-xl6", ta.xl6),
                  lineHeight: e2("lineHeight-sm", tl.sm.toString()),
                  letterSpacing: e2("letterSpacing-sm", to.sm),
                  color: e2("palette-text-primary", e6.palette.text.primary),
                },
                h1: {
                  fontFamily: e2("fontFamily-display", te.display),
                  fontWeight: e2("fontWeight-lg", tt.lg.toString()),
                  fontSize: e2("fontSize-xl5", ta.xl5),
                  lineHeight: e2("lineHeight-sm", tl.sm.toString()),
                  letterSpacing: e2("letterSpacing-sm", to.sm),
                  color: e2("palette-text-primary", e6.palette.text.primary),
                },
                h2: {
                  fontFamily: e2("fontFamily-display", te.display),
                  fontWeight: e2("fontWeight-lg", tt.lg.toString()),
                  fontSize: e2("fontSize-xl4", ta.xl4),
                  lineHeight: e2("lineHeight-sm", tl.sm.toString()),
                  letterSpacing: e2("letterSpacing-sm", to.sm),
                  color: e2("palette-text-primary", e6.palette.text.primary),
                },
                h3: {
                  fontFamily: e2("fontFamily-body", te.body),
                  fontWeight: e2("fontWeight-md", tt.md.toString()),
                  fontSize: e2("fontSize-xl3", ta.xl3),
                  lineHeight: e2("lineHeight-sm", tl.sm.toString()),
                  color: e2("palette-text-primary", e6.palette.text.primary),
                },
                h4: {
                  fontFamily: e2("fontFamily-body", te.body),
                  fontWeight: e2("fontWeight-md", tt.md.toString()),
                  fontSize: e2("fontSize-xl2", ta.xl2),
                  lineHeight: e2("lineHeight-md", tl.md.toString()),
                  color: e2("palette-text-primary", e6.palette.text.primary),
                },
                h5: {
                  fontFamily: e2("fontFamily-body", te.body),
                  fontWeight: e2("fontWeight-md", tt.md.toString()),
                  fontSize: e2("fontSize-xl", ta.xl),
                  lineHeight: e2("lineHeight-md", tl.md.toString()),
                  color: e2("palette-text-primary", e6.palette.text.primary),
                },
                h6: {
                  fontFamily: e2("fontFamily-body", te.body),
                  fontWeight: e2("fontWeight-md", tt.md.toString()),
                  fontSize: e2("fontSize-lg", ta.lg),
                  lineHeight: e2("lineHeight-md", tl.md.toString()),
                  color: e2("palette-text-primary", e6.palette.text.primary),
                },
                body1: {
                  fontFamily: e2("fontFamily-body", te.body),
                  fontSize: e2("fontSize-md", ta.md),
                  lineHeight: e2("lineHeight-md", tl.md.toString()),
                  color: e2("palette-text-primary", e6.palette.text.primary),
                },
                body2: {
                  fontFamily: e2("fontFamily-body", te.body),
                  fontSize: e2("fontSize-sm", ta.sm),
                  lineHeight: e2("lineHeight-md", tl.md.toString()),
                  color: e2(
                    "palette-text-secondary",
                    e6.palette.text.secondary
                  ),
                },
                body3: {
                  fontFamily: e2("fontFamily-body", te.body),
                  fontSize: e2("fontSize-xs", ta.xs),
                  lineHeight: e2("lineHeight-md", tl.md.toString()),
                  color: e2("palette-text-tertiary", e6.palette.text.tertiary),
                },
                body4: {
                  fontFamily: e2("fontFamily-body", te.body),
                  fontSize: e2("fontSize-xs2", ta.xs2),
                  lineHeight: e2("lineHeight-md", tl.md.toString()),
                  color: e2("palette-text-tertiary", e6.palette.text.tertiary),
                },
                body5: {
                  fontFamily: e2("fontFamily-body", te.body),
                  fontSize: e2("fontSize-xs3", ta.xs3),
                  lineHeight: e2("lineHeight-md", tl.md.toString()),
                  color: e2("palette-text-tertiary", e6.palette.text.tertiary),
                },
              },
            },
            tr = e1 ? (0, p.Z)(tn, e1) : tn,
            { colorSchemes: ti } = tr,
            ts = (0, l.Z)(tr, P),
            td = (0, o.Z)({ colorSchemes: ti }, ts, {
              breakpoints: (0, u.Z)(null != eK ? eK : {}),
              components: (0, p.Z)(
                {
                  MuiSvgIcon: {
                    defaultProps: { fontSize: "xl" },
                    styleOverrides: {
                      root: ({ ownerState: e, theme: t }) => {
                        var a;
                        let l = e.instanceFontSize;
                        return (0, o.Z)(
                          {
                            color: "var(--Icon-color)",
                            margin: "var(--Icon-margin)",
                          },
                          e.fontSize &&
                            "inherit" !== e.fontSize && {
                              fontSize: `var(--Icon-fontSize, ${
                                t.vars.fontSize[e.fontSize]
                              })`,
                            },
                          e.color &&
                            "inherit" !== e.color &&
                            "context" !== e.color &&
                            t.vars.palette[e.color] && {
                              color: `rgba(${
                                null == (a = t.vars.palette[e.color])
                                  ? void 0
                                  : a.mainChannel
                              } / 1)`,
                            },
                          "context" === e.color && {
                            color: t.vars.palette.text.secondary,
                          },
                          l &&
                            "inherit" !== l && {
                              "--Icon-fontSize": t.vars.fontSize[l],
                            }
                        );
                      },
                    },
                  },
                },
                eY
              ),
              cssVarPrefix: eJ,
              getCssVar: e2,
              spacing: (0, h.Z)(eG),
              colorInversionConfig: {
                soft: ["plain", "outlined", "soft", "solid"],
                solid: ["plain", "outlined", "soft", "solid"],
              },
            });
          Object.entries(td.colorSchemes).forEach(([e, t]) => {
            !(function (e, t) {
              Object.keys(t).forEach((a) => {
                let l = { main: "500", light: "200", dark: "800" };
                "dark" === e && (l.main = 400),
                  !t[a].mainChannel &&
                    t[a][l.main] &&
                    (t[a].mainChannel = (0, g.n8)(t[a][l.main])),
                  !t[a].lightChannel &&
                    t[a][l.light] &&
                    (t[a].lightChannel = (0, g.n8)(t[a][l.light])),
                  !t[a].darkChannel &&
                    t[a][l.dark] &&
                    (t[a].darkChannel = (0, g.n8)(t[a][l.dark]));
              });
            })(e, t.palette);
          });
          let { vars: tp, generateCssVars: tc } = y(
            (0, o.Z)({ colorSchemes: ti }, ts),
            { prefix: eJ, shouldSkipGeneratingVar: e0 }
          );
          (td.vars = tp),
            (td.generateCssVars = tc),
            (td.unstable_sxConfig = (0, o.Z)(
              {},
              B,
              null == e ? void 0 : e.unstable_sxConfig
            )),
            (td.unstable_sx = function (e) {
              return (0, x.Z)({ sx: e, theme: this });
            }),
            (td.getColorSchemeSelector = (e) =>
              "light" === e
                ? "&"
                : `&[data-joy-color-scheme="${e}"], [data-joy-color-scheme="${e}"] &`);
          let tg = { getCssVar: e2, palette: td.colorSchemes.light.palette };
          return (
            (td.variants = (0, p.Z)(
              {
                plain: j("plain", tg),
                plainHover: j("plainHover", tg),
                plainActive: j("plainActive", tg),
                plainDisabled: j("plainDisabled", tg),
                outlined: j("outlined", tg),
                outlinedHover: j("outlinedHover", tg),
                outlinedActive: j("outlinedActive", tg),
                outlinedDisabled: j("outlinedDisabled", tg),
                soft: j("soft", tg),
                softHover: j("softHover", tg),
                softActive: j("softActive", tg),
                softDisabled: j("softDisabled", tg),
                solid: j("solid", tg),
                solidHover: j("solidHover", tg),
                solidActive: j("solidActive", tg),
                solidDisabled: j("solidDisabled", tg),
              },
              eQ
            )),
            (td.palette = (0, o.Z)({}, td.colorSchemes.light.palette, {
              colorScheme: "light",
            })),
            (td.shouldSkipGeneratingVar = e0),
            (td.colorInversion =
              "function" == typeof eX
                ? eX
                : (0, p.Z)({ soft: I(td, !0), solid: R(td, !0) }, eX || {}, {
                    clone: !1,
                  })),
            td
          );
        })();
      var N = "$$joy";
      let T = (0, d.ZP)({ defaultTheme: W, themeId: N });
      var L = a(7600),
        M = a(5893);
      let V = n.createContext(void 0),
        q = (e) => {
          let t = n.useContext(V);
          return {
            getColor: (a, l) =>
              t && e && t.includes(e) ? a || "context" : a || l,
          };
        };
      var U = a(6273),
        J = a(6010);
      function K(e) {
        if (void 0 === e) return {};
        let t = {};
        return (
          Object.keys(e)
            .filter((t) => !(t.match(/^on[A-Z]/) && "function" == typeof e[t]))
            .forEach((a) => {
              t[a] = e[a];
            }),
          t
        );
      }
      let G = [
          "className",
          "elementType",
          "ownerState",
          "externalForwardedProps",
          "getSlotOwnerState",
          "internalForwardedProps",
        ],
        Y = ["component", "slots", "slotProps"],
        Q = ["component"],
        X = ["disableColorInversion"];
      function ee(e, t) {
        var a, n, r;
        let {
            className: i,
            elementType: s,
            ownerState: d,
            externalForwardedProps: p,
            getSlotOwnerState: c,
            internalForwardedProps: g,
          } = t,
          u = (0, l.Z)(t, G),
          {
            component: h,
            slots: v = { [e]: void 0 },
            slotProps: f = { [e]: void 0 },
          } = p,
          m = (0, l.Z)(p, Y),
          b = v[e] || s,
          C = "function" == typeof (a = f[e]) ? a(d) : a,
          $ = (function (e) {
            let {
              getSlotProps: t,
              additionalProps: a,
              externalSlotProps: l,
              externalForwardedProps: n,
              className: r,
            } = e;
            if (!t) {
              let e = (0, J.Z)(
                  null == n ? void 0 : n.className,
                  null == l ? void 0 : l.className,
                  r,
                  null == a ? void 0 : a.className
                ),
                t = (0, o.Z)(
                  {},
                  null == a ? void 0 : a.style,
                  null == n ? void 0 : n.style,
                  null == l ? void 0 : l.style
                ),
                i = (0, o.Z)({}, a, n, l);
              return (
                e.length > 0 && (i.className = e),
                Object.keys(t).length > 0 && (i.style = t),
                { props: i, internalRef: void 0 }
              );
            }
            let i = (function (e, t = []) {
                if (void 0 === e) return {};
                let a = {};
                return (
                  Object.keys(e)
                    .filter(
                      (a) =>
                        a.match(/^on[A-Z]/) &&
                        "function" == typeof e[a] &&
                        !t.includes(a)
                    )
                    .forEach((t) => {
                      a[t] = e[t];
                    }),
                  a
                );
              })((0, o.Z)({}, n, l)),
              s = K(l),
              d = K(n),
              p = t(i),
              c = (0, J.Z)(
                null == p ? void 0 : p.className,
                null == a ? void 0 : a.className,
                r,
                null == n ? void 0 : n.className,
                null == l ? void 0 : l.className
              ),
              g = (0, o.Z)(
                {},
                null == p ? void 0 : p.style,
                null == a ? void 0 : a.style,
                null == n ? void 0 : n.style,
                null == l ? void 0 : l.style
              ),
              u = (0, o.Z)({}, p, a, d, s);
            return (
              c.length > 0 && (u.className = c),
              Object.keys(g).length > 0 && (u.style = g),
              { props: u, internalRef: p.ref }
            );
          })(
            (0, o.Z)({ className: i }, u, {
              externalForwardedProps: "root" === e ? m : void 0,
              externalSlotProps: C,
            })
          ),
          {
            props: { component: y },
            internalRef: x,
          } = $,
          w = (0, l.Z)($.props, Q),
          B = (0, U.Z)(x, null == C ? void 0 : C.ref, t.ref),
          S = c ? c(w) : {},
          { disableColorInversion: D = !1 } = S,
          H = (0, l.Z)(S, X),
          F = (0, o.Z)({}, d, H),
          { getColor: k } = q(F.variant);
        "root" === e
          ? (F.color = null != (n = w.color) ? n : d.color)
          : D || (F.color = k(w.color, F.color));
        let A = "root" === e ? y || h : y,
          Z =
            ((r = (0, o.Z)(
              {},
              "root" === e && !h && !v[e] && g,
              "root" !== e && !v[e] && g,
              w,
              A && { as: A },
              { ref: B }
            )),
            void 0 === b || "string" == typeof b
              ? r
              : (0, o.Z)({}, r, { ownerState: (0, o.Z)({}, r.ownerState, F) }));
        return (
          Object.keys(H).forEach((e) => {
            delete Z[e];
          }),
          [b, Z]
        );
      }
      function et(e) {
        return k("MuiTypography", e);
      }
      (0, F.Z)(
        "MuiTypography",
        [
          "root",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "body1",
          "body2",
          "body3",
          "noWrap",
          "gutterBottom",
          "startDecorator",
          "endDecorator",
          "colorPrimary",
          "colorNeutral",
          "colorDanger",
          "colorInfo",
          "colorSuccess",
          "colorWarning",
          "colorContext",
          "variantPlain",
          "variantOutlined",
          "variantSoft",
          "variantSolid",
        ],
        "Joy"
      );
      let ea = ["color", "textColor"],
        el = [
          "component",
          "gutterBottom",
          "noWrap",
          "level",
          "levelMapping",
          "children",
          "endDecorator",
          "startDecorator",
          "variant",
          "slots",
          "slotProps",
        ],
        eo = n.createContext(!1),
        en = n.createContext(!1),
        er = (e) => {
          let {
              gutterBottom: t,
              noWrap: a,
              level: l,
              color: o,
              variant: n,
            } = e,
            i = {
              root: [
                "root",
                l,
                t && "gutterBottom",
                a && "noWrap",
                o && `color${(0, r.Z)(o)}`,
                n && `variant${(0, r.Z)(n)}`,
              ],
              startDecorator: ["startDecorator"],
              endDecorator: ["endDecorator"],
            };
          return (0, s.Z)(i, et, {});
        },
        ei = T("span", {
          name: "JoyTypography",
          slot: "StartDecorator",
          overridesResolver: (e, t) => t.startDecorator,
        })(({ ownerState: e }) => {
          var t;
          return (0, o.Z)(
            {
              display: "inline-flex",
              marginInlineEnd:
                "clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)",
            },
            "string" != typeof e.startDecorator &&
              ("flex-start" === e.alignItems ||
                (null == (t = e.sx) ? void 0 : t.alignItems) ===
                  "flex-start") && { marginTop: "2px" }
          );
        }),
        es = T("span", {
          name: "JoyTypography",
          slot: "endDecorator",
          overridesResolver: (e, t) => t.endDecorator,
        })(({ ownerState: e }) => {
          var t;
          return (0, o.Z)(
            {
              display: "inline-flex",
              marginInlineStart:
                "clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)",
            },
            "string" != typeof e.endDecorator &&
              ("flex-start" === e.alignItems ||
                (null == (t = e.sx) ? void 0 : t.alignItems) ===
                  "flex-start") && { marginTop: "2px" }
          );
        }),
        ed = T("span", {
          name: "JoyTypography",
          slot: "Root",
          overridesResolver: (e, t) => t.root,
        })(({ theme: e, ownerState: t }) => {
          var a, l, n, r;
          return (0, o.Z)(
            {
              "--Icon-fontSize": "1.25em",
              margin: "var(--Typography-margin, 0px)",
            },
            t.nesting
              ? { display: "inline" }
              : { fontFamily: e.vars.fontFamily.body, display: "block" },
            (t.startDecorator || t.endDecorator) &&
              (0, o.Z)(
                { display: "flex", alignItems: "center" },
                t.nesting &&
                  (0, o.Z)(
                    { display: "inline-flex" },
                    t.startDecorator && { verticalAlign: "bottom" }
                  )
              ),
            t.level && "inherit" !== t.level && e.typography[t.level],
            {
              fontSize: `var(--Typography-fontSize, ${
                t.level &&
                "inherit" !== t.level &&
                null !=
                  (a =
                    null == (l = e.typography[t.level]) ? void 0 : l.fontSize)
                  ? a
                  : "inherit"
              })`,
            },
            t.noWrap && {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
            t.gutterBottom && { marginBottom: "0.35em" },
            t.color &&
              "context" !== t.color && {
                color: `rgba(${
                  null == (n = e.vars.palette[t.color]) ? void 0 : n.mainChannel
                } / 1)`,
              },
            t.variant &&
              (0, o.Z)(
                {
                  borderRadius: e.vars.radius.xs,
                  paddingBlock: "min(0.15em, 4px)",
                  paddingInline: "0.375em",
                },
                !t.nesting && { marginInline: "-0.375em" },
                null == (r = e.variants[t.variant]) ? void 0 : r[t.color]
              )
          );
        }),
        ep = {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          display1: "h1",
          display2: "h2",
          body1: "p",
          body2: "p",
          body3: "span",
          body4: "span",
          body5: "span",
          inherit: "p",
        },
        ec = n.forwardRef(function (e, t) {
          let a = (function ({ props: e, name: t }) {
              return (0, L.Z)({
                props: e,
                name: t,
                defaultTheme: (0, o.Z)({}, W, { components: {} }),
                themeId: N,
              });
            })({ props: e, name: "JoyTypography" }),
            { color: r, textColor: s } = a,
            d = (0, l.Z)(a, ea),
            p = n.useContext(eo),
            c = n.useContext(en),
            g = (0, i.Z)((0, o.Z)({}, d, { color: s })),
            {
              component: u,
              gutterBottom: h = !1,
              noWrap: v = !1,
              level: f = "body1",
              levelMapping: m = {
                h1: "h1",
                h2: "h2",
                h3: "h3",
                h4: "h4",
                h5: "h5",
                h6: "h6",
                body1: "p",
                body2: "p",
                body3: "p",
                inherit: "p",
              },
              children: b,
              endDecorator: C,
              startDecorator: $,
              variant: y,
              slots: x = {},
              slotProps: w = {},
            } = g,
            B = (0, l.Z)(g, el),
            { getColor: S } = q(y),
            D = S(e.color, y ? (null != r ? r : "neutral") : r),
            H = p || c ? e.level || "inherit" : f,
            F = u || (p ? "span" : m[H] || ep[H] || "span"),
            k = (0, o.Z)({}, g, {
              level: H,
              component: F,
              color: D,
              gutterBottom: h,
              noWrap: v,
              nesting: p,
              variant: y,
            }),
            A = er(k),
            Z = (0, o.Z)({}, B, { component: F, slots: x, slotProps: w }),
            [z, E] = ee("root", {
              ref: t,
              className: A.root,
              elementType: ed,
              externalForwardedProps: Z,
              ownerState: k,
            }),
            [j, I] = ee("startDecorator", {
              className: A.startDecorator,
              elementType: ei,
              externalForwardedProps: Z,
              ownerState: k,
            }),
            [R, _] = ee("endDecorator", {
              className: A.endDecorator,
              elementType: es,
              externalForwardedProps: Z,
              ownerState: k,
            });
          return (0,
          M.jsx)(eo.Provider, { value: !0, children: (0, M.jsxs)(z, (0, o.Z)({}, E, { children: [$ && (0, M.jsx)(j, (0, o.Z)({}, I, { children: $ })), b, C && (0, M.jsx)(R, (0, o.Z)({}, _, { children: C }))] })) });
        });
      var eg = ec;
    },
    9707: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return d;
        },
      });
      var l = a(7462),
        o = a(3366),
        n = a(9766),
        r = a(4920);
      let i = ["sx"],
        s = (e) => {
          var t, a;
          let l = { systemProps: {}, otherProps: {} },
            o =
              null !=
              (t =
                null == e
                  ? void 0
                  : null == (a = e.theme)
                  ? void 0
                  : a.unstable_sxConfig)
                ? t
                : r.Z;
          return (
            Object.keys(e).forEach((t) => {
              o[t] ? (l.systemProps[t] = e[t]) : (l.otherProps[t] = e[t]);
            }),
            l
          );
        };
      function d(e) {
        let t;
        let { sx: a } = e,
          r = (0, o.Z)(e, i),
          { systemProps: d, otherProps: p } = s(r);
        return (
          (t = Array.isArray(a)
            ? [d, ...a]
            : "function" == typeof a
            ? (...e) => {
                let t = a(...e);
                return (0, n.P)(t) ? (0, l.Z)({}, d, t) : d;
              }
            : (0, l.Z)({}, d, a)),
          (0, l.Z)({}, p, { sx: t })
        );
      }
    },
    3740: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(1309),
        o = a(4586);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      var n = a(4788),
        r = a(8754),
        i = a(1757),
        s = a(224),
        d = i._(a(7294)),
        p = r._(a(2636)),
        c = a(7757),
        g = a(3735),
        u = a(3341);
      a(4210);
      var h = r._(a(7746)),
        v = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "",
          loader: "akamai",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function f(e) {
        return void 0 !== e.default;
      }
      function m(e) {
        return "number" == typeof e || void 0 === e
          ? e
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function b(e, t, a, l, o, r, i) {
        e &&
          e["data-loaded-src"] !== t &&
          ((e["data-loaded-src"] = t),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(function () {})
            .then(function () {
              if (e.parentElement && e.isConnected) {
                if (("blur" === a && r(!0), null == l ? void 0 : l.current)) {
                  var t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  var i = !1,
                    s = !1;
                  l.current(
                    n._({}, t, {
                      nativeEvent: t,
                      currentTarget: e,
                      target: e,
                      isDefaultPrevented: function () {
                        return i;
                      },
                      isPropagationStopped: function () {
                        return s;
                      },
                      persist: function () {},
                      preventDefault: function () {
                        (i = !0), t.preventDefault();
                      },
                      stopPropagation: function () {
                        (s = !0), t.stopPropagation();
                      },
                    })
                  );
                }
                (null == o ? void 0 : o.current) && o.current(e);
              }
            }));
      }
      function C(e) {
        var t = l._(d.version.split("."), 2),
          a = t[0],
          o = t[1],
          n = parseInt(a, 10),
          r = parseInt(o, 10);
        return n > 18 || (18 === n && r >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      var $ = (0, d.forwardRef)(function (e, t) {
          var a = e.imgAttributes,
            l = e.heightInt,
            o = e.widthInt,
            r = (e.qualityInt, e.className),
            i = e.imgStyle,
            p = e.blurStyle,
            c = e.isLazy,
            g = e.fetchPriority,
            u = e.fill,
            h = e.placeholder,
            v = e.loading,
            f = e.srcString,
            m = (e.config, e.unoptimized),
            $ = (e.loader, e.onLoadRef),
            y = e.onLoadingCompleteRef,
            x = e.setBlurComplete,
            w = e.setShowAltText,
            B = (e.onLoad, e.onError),
            S = s._(e, [
              "imgAttributes",
              "heightInt",
              "widthInt",
              "qualityInt",
              "className",
              "imgStyle",
              "blurStyle",
              "isLazy",
              "fetchPriority",
              "fill",
              "placeholder",
              "loading",
              "srcString",
              "config",
              "unoptimized",
              "loader",
              "onLoadRef",
              "onLoadingCompleteRef",
              "setBlurComplete",
              "setShowAltText",
              "onLoad",
              "onError",
            ]);
          return (
            (v = c ? "lazy" : v),
            d.default.createElement(
              d.default.Fragment,
              null,
              d.default.createElement(
                "img",
                n._(
                  {},
                  S,
                  C(g),
                  {
                    loading: v,
                    width: o,
                    height: l,
                    decoding: "async",
                    "data-nimg": u ? "fill" : "1",
                    className: r,
                    style: n._({}, i, p),
                  },
                  a,
                  {
                    ref: (0, d.useCallback)(
                      function (e) {
                        t &&
                          ("function" == typeof t
                            ? t(e)
                            : "object" == typeof t && (t.current = e)),
                          e &&
                            (B && (e.src = e.src),
                            e.complete && b(e, f, h, $, y, x, m));
                      },
                      [f, h, $, y, x, B, m, t]
                    ),
                    onLoad: function (e) {
                      b(e.currentTarget, f, h, $, y, x, m);
                    },
                    onError: function (e) {
                      w(!0), "blur" === h && x(!0), B && B(e);
                    },
                  }
                )
              )
            )
          );
        }),
        y = (0, d.forwardRef)(function (e, t) {
          var a,
            r,
            i,
            b = e.src,
            y = e.sizes,
            x = e.unoptimized,
            w = void 0 !== x && x,
            B = e.priority,
            S = void 0 !== B && B,
            D = e.loading,
            H = e.className,
            F = e.quality,
            k = e.width,
            A = e.height,
            Z = e.fill,
            z = e.style,
            E = e.onLoad,
            j = e.onLoadingComplete,
            I = e.placeholder,
            R = void 0 === I ? "empty" : I,
            _ = e.blurDataURL,
            P = e.fetchPriority,
            O = e.layout,
            W = e.objectFit,
            N = e.objectPosition,
            T =
              (e.lazyBoundary,
              e.lazyRoot,
              s._(e, [
                "src",
                "sizes",
                "unoptimized",
                "priority",
                "loading",
                "className",
                "quality",
                "width",
                "height",
                "fill",
                "style",
                "onLoad",
                "onLoadingComplete",
                "placeholder",
                "blurDataURL",
                "fetchPriority",
                "layout",
                "objectFit",
                "objectPosition",
                "lazyBoundary",
                "lazyRoot",
              ])),
            L = (0, d.useContext)(u.ImageConfigContext),
            M = (0, d.useMemo)(
              function () {
                var e = v || L || g.imageConfigDefault,
                  t = o
                    ._(e.deviceSizes)
                    .concat(o._(e.imageSizes))
                    .sort(function (e, t) {
                      return e - t;
                    }),
                  a = e.deviceSizes.sort(function (e, t) {
                    return e - t;
                  });
                return n._({}, e, { allSizes: t, deviceSizes: a });
              },
              [L]
            ),
            V = T,
            q = V.loader || h.default;
          delete V.loader;
          var U = "_next_img_default" in q;
          if (U) {
            if ("custom" === M.loader)
              throw Error(
                'Image with src "'.concat(b, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
              );
          } else {
            var J = q;
            q = function (e) {
              return e.config, J(s._(e, ["config"]));
            };
          }
          if (O) {
            "fill" === O && (Z = !0);
            var K = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[O];
            K && (z = n._({}, z, K));
            var G = { responsive: "100vw", fill: "100vw" }[O];
            G && !y && (y = G);
          }
          var Y = "",
            Q = m(k),
            X = m(A);
          if ("object" == typeof (a = b) && (f(a) || void 0 !== a.src)) {
            var ee = f(b) ? b.default : b;
            if (!ee.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(ee)
                )
              );
            if (!ee.height || !ee.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(ee)
                )
              );
            if (
              ((r = ee.blurWidth),
              (i = ee.blurHeight),
              (_ = _ || ee.blurDataURL),
              (Y = ee.src),
              !Z)
            ) {
              if (Q || X) {
                if (Q && !X) {
                  var et = Q / ee.width;
                  X = Math.round(ee.height * et);
                } else if (!Q && X) {
                  var ea = X / ee.height;
                  Q = Math.round(ee.width * ea);
                }
              } else (Q = ee.width), (X = ee.height);
            }
          }
          var el = !S && ("lazy" === D || void 0 === D);
          (!(b = "string" == typeof b ? b : Y) ||
            b.startsWith("data:") ||
            b.startsWith("blob:")) &&
            ((w = !0), (el = !1)),
            M.unoptimized && (w = !0),
            U && b.endsWith(".svg") && !M.dangerouslyAllowSVG && (w = !0),
            S && (P = "high");
          var eo = l._((0, d.useState)(!1), 2),
            en = eo[0],
            er = eo[1],
            ei = l._((0, d.useState)(!1), 2),
            es = ei[0],
            ed = ei[1],
            ep = m(F),
            ec = Object.assign(
              Z
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: W,
                    objectPosition: N,
                  }
                : {},
              es ? {} : { color: "transparent" },
              z
            ),
            eg =
              "blur" === R && _ && !en
                ? {
                    backgroundSize: ec.objectFit || "cover",
                    backgroundPosition: ec.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,'.concat(
                        (0, c.getImageBlurSvg)({
                          widthInt: Q,
                          heightInt: X,
                          blurWidth: r,
                          blurHeight: i,
                          blurDataURL: _,
                          objectFit: ec.objectFit,
                        }),
                        '")'
                      ),
                  }
                : {},
            eu = (function (e) {
              var t = e.config,
                a = e.src,
                l = e.unoptimized,
                n = e.width,
                r = e.quality,
                i = e.sizes,
                s = e.loader;
              if (l) return { src: a, srcSet: void 0, sizes: void 0 };
              var d = (function (e, t, a) {
                  var l = e.deviceSizes,
                    n = e.allSizes;
                  if (a) {
                    for (
                      var r = /(^|\s)(1?\d?\d)vw/g, i = [];
                      (s = r.exec(a));
                      s
                    )
                      i.push(parseInt(s[2]));
                    if (i.length) {
                      var s,
                        d,
                        p = 0.01 * (d = Math).min.apply(d, o._(i));
                      return {
                        widths: n.filter(function (e) {
                          return e >= l[0] * p;
                        }),
                        kind: "w",
                      };
                    }
                    return { widths: n, kind: "w" };
                  }
                  return "number" != typeof t
                    ? { widths: l, kind: "w" }
                    : {
                        widths: o._(
                          new Set(
                            [t, 2 * t].map(function (e) {
                              return (
                                n.find(function (t) {
                                  return t >= e;
                                }) || n[n.length - 1]
                              );
                            })
                          )
                        ),
                        kind: "x",
                      };
                })(t, n, i),
                p = d.widths,
                c = d.kind,
                g = p.length - 1;
              return {
                sizes: i || "w" !== c ? i : "100vw",
                srcSet: p
                  .map(function (e, l) {
                    return ""
                      .concat(
                        s({ config: t, src: a, quality: r, width: e }),
                        " "
                      )
                      .concat("w" === c ? e : l + 1)
                      .concat(c);
                  })
                  .join(", "),
                src: s({ config: t, src: a, quality: r, width: p[g] }),
              };
            })({
              config: M,
              src: b,
              unoptimized: w,
              width: Q,
              quality: ep,
              sizes: y,
              loader: q,
            }),
            eh = b,
            ev = (0, d.useRef)(E);
          (0, d.useEffect)(
            function () {
              ev.current = E;
            },
            [E]
          );
          var ef = (0, d.useRef)(j);
          (0, d.useEffect)(
            function () {
              ef.current = j;
            },
            [j]
          );
          var em = n._(
            {
              isLazy: el,
              imgAttributes: eu,
              heightInt: X,
              widthInt: Q,
              qualityInt: ep,
              className: H,
              imgStyle: ec,
              blurStyle: eg,
              loading: D,
              config: M,
              fetchPriority: P,
              fill: Z,
              unoptimized: w,
              placeholder: R,
              loader: q,
              srcString: eh,
              onLoadRef: ev,
              onLoadingCompleteRef: ef,
              setBlurComplete: er,
              setShowAltText: ed,
            },
            V
          );
          return d.default.createElement(
            d.default.Fragment,
            null,
            d.default.createElement($, n._({}, em, { ref: t })),
            S
              ? d.default.createElement(
                  p.default,
                  null,
                  d.default.createElement(
                    "link",
                    n._(
                      {
                        key: "__nimg-" + eu.src + eu.srcSet + eu.sizes,
                        rel: "preload",
                        as: "image",
                        href: eu.srcSet ? void 0 : eu.src,
                        imageSrcSet: eu.srcSet,
                        imageSizes: eu.sizes,
                        crossOrigin: V.crossOrigin,
                      },
                      C(P)
                    )
                  )
                )
              : null
          );
        });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7757: function (e, t) {
      "use strict";
      function a(e) {
        var t = e.widthInt,
          a = e.heightInt,
          l = e.blurWidth,
          o = e.blurHeight,
          n = e.blurDataURL,
          r = e.objectFit,
          i = l || t,
          s = o || a,
          d = n.startsWith("data:image/jpeg")
            ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
            : "";
        return i && s
          ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
              .concat(i, " ")
              .concat(
                s,
                "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
              )
              .concat(l && o ? "1" : "20", "'/%3E")
              .concat(
                d,
                "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
              )
              .concat(n, "'/%3E%3C/svg%3E")
          : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"
              .concat(
                "contain" === r
                  ? "xMidYMid"
                  : "cover" === r
                  ? "xMidYMid slice"
                  : "none",
                "' x='0' y='0' height='100%25' width='100%25' href='"
              )
              .concat(n, "'/%3E%3C/svg%3E");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
    },
    7746: function (e, t) {
      "use strict";
      function a(e) {
        var t = e.config,
          a = e.src,
          l = e.width,
          o = e.quality;
        return ""
          .concat(t.path, "?url=")
          .concat(encodeURIComponent(a), "&w=")
          .concat(l, "&q=")
          .concat(o || 75);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        (a._next_img_default = !0);
      var l = a;
    },
    5675: function (e, t, a) {
      e.exports = a(3740);
    },
  },
]);
