(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{374:function(e,a,s){"use strict";s.r(a);var n=s(4),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"virtual-environment-for-r-development-by-conda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtual-environment-for-r-development-by-conda"}},[e._v("#")]),e._v(" Virtual environment for R development by conda")]),e._v(" "),s("p",[e._v("Sometimes we need mutliple versions of R for different development\n(R-devel) and data analysis (R-release) purposes. Here is one of the\nsolutions by python package manager conda. We can maintain mutliple\nversions of R and specific packages in different conda environments.")]),e._v(" "),s("h2",{attrs:{id:"for-released-versions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-released-versions"}},[e._v("#")]),e._v(" For released versions")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("conda config --add channels conda-forge\nconda create -n r-3.6\nconda activate r-3.6\nconda search r-base\nconda "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" r-base"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.6")]),e._v(".2\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("Rscript -e "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"R.version.string"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('## [1] "R version 3.6.2 (2019-12-12)"')]),e._v("\nconda deactivate\n")])])]),s("h2",{attrs:{id:"for-development-version-r-4-0-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-development-version-r-4-0-0"}},[e._v("#")]),e._v(" For development version (R-4.0.0)")]),e._v(" "),s("ul",[s("li",[e._v("Prepare recipe for R-4.0.0")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/hubentu/conda-r-devel.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" conda-r-devel\nconda create -n r-devel\nconda activate r-devel\n")])])]),s("ul",[s("li",[e._v("Build and install from source")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("conda "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" conda-build\nconda build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\nconda "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --use-local path/to/r-devel-gz\n")])])]),s("p",[e._v("Or just install the compiled version.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("conda install --use-local r-devel-4.0.0-0.tar.bz2\nconda install readline\n")])])]),s("ul",[s("li",[e._v("Test")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("Rscript -e "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"R.version.string"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('## [1] "R Under development (unstable) (2020-01-07 r77631)"')]),e._v("\n")])])]),s("p",[e._v("Via conda environments, we can switch different version of R by "),s("code",[e._v("conda activate renv")]),e._v(".")])])}),[],!1,null,null,null);a.default=t.exports}}]);