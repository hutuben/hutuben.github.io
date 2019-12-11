(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{386:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"have-some-fun-with-javascript-emoji-library-using-the-v8-r-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#have-some-fun-with-javascript-emoji-library-using-the-v8-r-package"}},[t._v("#")]),t._v(" Have some fun with JavaScript emoji library using the V8 R package.")]),t._v(" "),s("p",[t._v("🈶 some 💃 with JavaScript emoji 📙 🇺🇸 the V8 R 📦.")]),t._v(" "),s("h2",{attrs:{id:"installation-in-ubuntu-18-04"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-in-ubuntu-18-04"}},[t._v("#")]),t._v(" Installation in Ubuntu 18.04")]),t._v(" "),s("p",[t._v("Instruction: "),s("a",{attrs:{href:"https://github.com/nodesource/distributions/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/nodesource/distributions/blob/master/README.md"),s("OutboundLink")],1)]),t._v(" "),s("ol",[s("li",[t._v("Install "),s("code",[t._v("libnode-dev")])])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:cran/v8\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libnode-dev\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Install snap version of "),s("code",[t._v("nodejs")])])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" snap "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" node --classic --channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Install V8 package")])]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("install.packages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"V8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("V8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("## Using V8 engine 6.8.275.32-node.12\n")])])]),s("h2",{attrs:{id:"emoji-translate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emoji-translate"}},[t._v("#")]),t._v(" emoji-translate")]),t._v(" "),s("p",[t._v("Translate text to emoji\n"),s("a",{attrs:{href:"https://github.com/notwaldorf/emoji-translate",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/notwaldorf/emoji-translate"),s("OutboundLink")],1)]),t._v(" "),s("ol",[s("li",[t._v("Wrap "),s("code",[t._v("moji-translate")])])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" moji-translate\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"global.emoji = require('moji-translate');\"")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" in.js\nbrowserify in.js -o bundle.js\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Load JavaScript library in V8")])]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("ct "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" v8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nct"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bundle.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('## [1] "function o(i,f){if(!n[i]){if(!e[i]){var c=\\"function\\"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error(\\"Cannot find module \'\\"+i+\\"\'\\");throw a.code=\\"MODULE_NOT_FOUND\\",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}"\n')])])]),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("ct"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Object.keys(global)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('## [1] "print"   "console" "global"  "emoji"\n')])])]),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("ct"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"emoji.translate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"the house is on fire and the cat is eating the cake"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('## [1] "the 🚪 is 🔛 📛 and the 🙀 is 🍽 the 🎂 "\n')])])])])}),[],!1,null,null,null);a.default=n.exports}}]);