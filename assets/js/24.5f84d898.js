(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{574:function(t,a,r){"use strict";r.r(a);var e=r(17),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),r("p",[t._v("函数式编程（Functional Programming，后面简称FP），维基百科的定义是：")]),t._v(" "),r("p",[r("code",[t._v("是一种编程范型，它将电脑运算视为数学上的函数计算，并且避免使用程序状态以及易变对象。函数编程语言最重要的基础是λ演算（lambda calculus）。而且λ演算的函数可以接受函数当作输入（引数）和输出（传出值）。比起命令式编程，函数式编程更加强调程序执行的结果而非执行的过程，倡导利用若干简单的执行单元让计算结果不断渐进，逐层推导复杂的运算，而不是设计一个复杂的执行过程。")])]),t._v(" "),r("h3",{attrs:{id:"特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("函数是一等公民。就是说函数可以跟其他变量一样，可以作为其他函数的输入输出。喔，回调函数就是典型应用。")])]),t._v(" "),r("li",[r("p",[t._v("不可变量。就是说，不能用var跟let咯。按这要求，我似乎有点难写代码。")])]),t._v(" "),r("li",[r("p",[t._v("纯函数。就是没有副作用的函数。这个好理解，就是不修改函数外部的变量。")])]),t._v(" "),r("li",[r("p",[t._v("引用透明。这个也好理解，就是说同样的输入，必定是同样的输出。函数内部不依赖外部状态，如一些全局变量。")])]),t._v(" "),r("li",[r("p",[t._v("惰性计算。大意就是：一个表达式绑定的变量，不是声明的时候就计算出来，而是真正用到它的时候才去计算。")])])]),t._v(" "),r("h3",{attrs:{id:"fp在javascript中的优劣势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fp在javascript中的优劣势"}},[t._v("#")]),t._v(" FP在JavaScript中的优劣势")]),t._v(" "),r("hr"),t._v(" "),r("h4",{attrs:{id:"优势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("更好的管理状态。因为它的宗旨是无状态，或者说更少的状态。而平常DOM的开发中，因为DOM的视觉呈现依托于状态变化，所以不可避免的产生了非常多的状态，而且不同组件可能还相互依赖。以FP来编程，能最大化的减少这些未知、优化代码、减少出错情况。")])]),t._v(" "),r("li",[r("p",[t._v("更简单的复用。极端的FP代码应该是每一行代码都是一个函数，当然我们不需要这么极端。我们尽量的把过程逻辑以更纯的函数来实现，固定输入->固定输出，没有其他外部变量影响，并且无副作用。这样代码复用时，完全不需要考虑它的内部实现和外部影响。")])]),t._v(" "),r("li",[r("p",[t._v("更优雅的组合。往大的说，网页是由各个组件组成的。往小的说，一个函数也可能是由多个小函数组成的。参考上面第二点，更强的复用性，带来更强大的组合性。")])]),t._v(" "),r("li",[r("p",[t._v("隐性好处。减少代码量，提高维护性。")])])]),t._v(" "),r("h4",{attrs:{id:"劣势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#劣势"}},[t._v("#")]),t._v(" 劣势")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("JavaScript不能算是严格意义上的函数式语言，很多函数式编程的特性并没有。比如上文说的数组的惰性链求值。为了实现它就得上工具库，或者自己封装实现，提高了代码编写成本。")])]),t._v(" "),r("li",[r("p",[t._v("跟过程式相比，它并没有提高性能。有些地方，如果强制用FP去写，由于没有中间变量，还可能会降低性能。")])]),t._v(" "),r("li",[r("p",[t._v("代码不易读。这个因人而异，因码而已。特别熟悉FP的人可能会觉得这段代码一目了然。而不熟悉的人，遇到写的晦涩的代码，看着一堆堆lambda演算跟匿名函数 () => () => () 瞬间就懵逼了。看懂代码，得脑子里先演算半小时。")])]),t._v(" "),r("li",[r("p",[t._v("学习成本高。一方面继承于上一点。另一方面，很多前端coder，就是因为相对不喜欢一些底层的抽象的编程语言，才来踏入前端坑，你现在又让他们一头扎入FP，显得手足无措。")])])]),t._v(" "),r("h3",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("函数式编程入门教程-阮一峰"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/",target:"_blank",rel:"noopener noreferrer"}},[t._v("函数式编程指南"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=v.exports}}]);