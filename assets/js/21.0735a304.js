(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{293:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-share-a-legend-for-combined-ggplot2-plots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-share-a-legend-for-combined-ggplot2-plots"}},[t._v("#")]),t._v(" How to share a legend for combined ggplot2 plots?")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ggplot2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\np1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" ggplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" geom_point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hwy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" drv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\np2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" ggplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" geom_boxplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hwy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fill "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" drv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\np3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" ggplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" geom_bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fill "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" drv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"cowplot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cowplot"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cran.r-project.org/web/packages/cowplot/vignettes/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("cowplot"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cowplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npw "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" plot_grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    plot_grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("legend.position"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              p2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("legend.position"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ncol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    p3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("legend.position"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ncol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlegend_b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" get_legend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("legend.position"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bottom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplot_grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" legend_b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ncol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rel_heights "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"figure/cowplot12.3-1.png",alt:"plot of chunk cowplot12.3"}})]),t._v(" "),a("h2",{attrs:{id:"ggpubr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ggpubr"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://rpkgs.datanovia.com/ggpubr/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ggpubr"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ggpubr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nggarrange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plot_grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("legend.position"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    p2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("legend.position"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          p3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ncol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" common.legend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" legend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bottom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"figure/ggpubr12.3-1.png",alt:"plot of chunk ggpubr12.3"}})]),t._v(" "),a("p",[t._v("Ref:\n"),a("a",{attrs:{href:"https://stackoverflow.com/questions/13649473/add-a-common-legend-for-combined-ggplots",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/questions/13649473/add-a-common-legend-for-combined-ggplots"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);