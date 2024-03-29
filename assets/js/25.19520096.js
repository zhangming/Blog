(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{580:function(e,n,t){"use strict";t.r(n);var r=t(17),l=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"异步编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异步编程"}},[e._v("#")]),e._v(" 异步编程")]),e._v(" "),t("hr"),e._v(" "),t("ul",[t("li",[t("p",[e._v("什么是异步？\n简单说就是一个任务分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。")])]),e._v(" "),t("li",[t("p",[e._v("异步编程的方式：")])])]),e._v(" "),t("p",[e._v("（1）回调函数")]),e._v(" "),t("p",[e._v("（2）事件监听")]),e._v(" "),t("p",[e._v("（3）发布/订阅者")]),e._v(" "),t("p",[e._v("（4）Promise对象")]),e._v(" "),t("h3",{attrs:{id:"什么是generator函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是generator函数"}},[e._v("#")]),e._v(" 什么是Generator函数")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("在Javascript中，一个函数一旦开始执行，就会运行到最后或遇到return时结束，运行期间不会有其它代码能够打断它，也不能从外部再传入值到函数体内")]),e._v(" "),t("p",[e._v("而Generator函数（生成器）的出现使得打破函数的完整运行成为了可能，其语法行为与传统函数完全不同")]),e._v(" "),t("p",[e._v("Generator函数是ES6提供的一种异步编程解决方案，形式上也是一个普通函数，但有几个显著的特征：")]),e._v(" "),t("ul",[t("li",[e._v('function关键字与函数名之间有一个星号 "*" （推荐紧挨着function关键字）')]),e._v(" "),t("li",[e._v("函数体内使用 yield 表达式，定义不同的内部状态 （可以有多个yield）")]),e._v(" "),t("li",[e._v("直接调用 Generator函数并不会执行，也不会返回运行结果，而是返回一个遍历器对象（Iterator Object）")]),e._v(" "),t("li",[e._v("依次调用遍历器对象的next方法，遍历 Generator函数内部的每一个状态")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n  // 传统函数\n  function foo() {\n    return 'hello world'\n  }\n\n  foo()   // 'hello world'，一旦调用立即执行\n\n\n  // Generator函数\n  function* generator() {\n    yield 'status one'         // yield 表达式是暂停执行的标记  \n    return 'hello world'\n  }\n\n  let iterator = generator()   // 调用 Generator函数，函数并没有执行，返回的是一个Iterator对象\n  iterator.next()              // {value: \"status one\", done: false}，value 表示返回值，done 表示遍历还没有结束\n  iterator.next()              // {value: \"hello world\", done: true}，value 表示返回值，done 表示遍历结束\n\n")])])]),t("p",[e._v("上面的代码中可以看到传统函数和Generator函数的运行是完全不同的，传统函数调用后立即执行并输出了返回值；Generator函数则没有执行而是返回一个Iterator对象，并通过调用Iterator对象的next方法来遍历，函数体内的执行看起来更像是“被人踢一脚才动一下”的感觉")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n  function* gen() {\n    yield 'hello'\n    yield 'world'\n    return 'ending'\n  }\n\n  let it = gen()\n\n  it.next()   // {value: \"hello\", done: false}\n  it.next()   // {value: \"world\", done: false}\n  it.next()   // {value: \"ending\", done: true}\n  it.next()   // {value: undefined, done: true}\n\n")])])]),t("p",[e._v("上面代码中定义了一个 Generator函数，其中包含两个 yield 表达式和一个 return 语句（即产生了三个状态）")]),e._v(" "),t("p",[e._v("每次调用Iterator对象的next方法时，内部的指针就会从函数的头部或上一次停下来的地方开始执行，直到遇到下一个 yield 表达式或return语句暂停。换句话说，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而 next方法可以恢复执行")]),e._v(" "),t("p",[e._v("执行过程如下：")]),e._v(" "),t("p",[e._v("第一次调用next方法时，内部指针从函数头部开始执行，遇到第一个 yield 表达式暂停，并返回当前状态的值 'hello'")]),e._v(" "),t("p",[e._v("第二次调用next方法时，内部指针从上一个（即第一个） yield 表达式开始，遇到第二个 yield 表达式暂停，返回当前状态的值 'world'")]),e._v(" "),t("p",[e._v("第三次调用next方法时，内部指针从第二个 yield 表达式开始，遇到return语句暂停，返回当前状态的值 'end'，同时所有状态遍历完毕，done 属性的值变为true")]),e._v(" "),t("p",[e._v("第四次调用next方法时，由于函数已经遍历运行完毕，不再有其它状态，因此返回 {value: undefined, done: true}。如果继续调用next方法，返回的也都是这个值")]),e._v(" "),t("h3",{attrs:{id:"yield-表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yield-表达式"}},[e._v("#")]),e._v(" yield 表达式")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("（1）yield 表达式只能用在 Generator 函数里面，用在其它地方都会报错")]),e._v(" "),t("p",[e._v("（2）yield 表达式如果用在另一个表达式中，必须放在圆括号里面")]),e._v(" "),t("p",[e._v("（3）yield 表达式用作参数或放在赋值表达式的右边，可以不加括号")]),e._v(" "),t("p",[e._v("（4）yield 表达式和return语句的区别")]),e._v(" "),t("p",[e._v("相似：都能返回紧跟在语句后面的那个表达式的值")]),e._v(" "),t("p",[e._v("区别：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("每次遇到 yield，函数就暂停执行，下一次再从该位置继续向后执行；而 return 语句不具备记忆位置的功能")])]),e._v(" "),t("li",[t("p",[e._v("一个函数只能执行一次 return 语句，而在 Generator 函数中可以有任意多个 yield")])])]),e._v(" "),t("h3",{attrs:{id:"yield-表达式-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yield-表达式-2"}},[e._v("#")]),e._v(" yield* 表达式")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("如果在 Generator 函数里面调用另一个 Generator 函数，默认情况下是没有效果的，如果想要正确的在a()函数里调用b()函数，就需要用到 yield* 表达式，如yield* b()")]),e._v(" "),t("h3",{attrs:{id:"next-方法的参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-方法的参数"}},[e._v("#")]),e._v(" next() 方法的参数")]),e._v(" "),t("p",[e._v("yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[rv] = yield [expression]\n\n  expression：定义通过遍历器从生成器函数返回的值，如果省略，则返回 undefined\n  rv：接收从下一个 next() 方法传递来的参数\n\n")])])]),t("p",[e._v("举个栗子")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("{\n  function* gen() {\n    let result = yield 3 + 5 + 6\n    console.log(result)\n    yield result\n  }\n\n  let it = gen()\n  console.log(it.next())      // {value: 14, done: false}\n  console.log(it.next())      // undefined    {value: undefined, done: false}\n}\n\n")])])]),t("p",[e._v("第一次调用遍历器对象的next方法，函数从头部开始执行，遇到第一个 yield 暂停，在这个过程中其实是分了三步：")]),e._v(" "),t("p",[e._v("（1）、声明了一个变量result，并将声明提前，默认值为 undefined\n（2）、由于 Generator函数是 “惰性求值”，执行到第一个 yield 时才会计算求和，并加计算结果返回给遍历器对象 {value: 14, done: false}，函数暂停运行\n（3）、理论上应该要把等号右边的 [yield 3 + 5 + 6] 赋值给变量result，但是，由于函数执行到 yield 时暂定了，这一步就被挂起了")]),e._v(" "),t("p",[e._v("第二次调用next方法，函数从上一次 yield 停下的地方开始执行，也就是给result赋值的地方开始，由于next()并没有传参，就相当于传参为undefined")]),e._v(" "),t("h3",{attrs:{id:"return方法跟next方法的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#return方法跟next方法的区别"}},[e._v("#")]),e._v(" return方法跟next方法的区别")]),e._v(" "),t("p",[e._v("1)return终结遍历，之后的yield语句都失效；next返回本次yield语句的返回值。")]),e._v(" "),t("p",[e._v("2)return没有参数的时候，返回{ value: undefined, done: true }；next没有参数的时候返回本次yield语句的返回值。")]),e._v(" "),t("p",[e._v("3)return有参数的时候，覆盖本次yield语句的返回值，也就是说，返回{ value: 参数, done: true }；next有参数的时候，覆盖上次yield语句的返回值，返回值可能跟参数有关（参数参与计算的话），也可能跟参数无关（参数不参与计算）。")])])}),[],!1,null,null,null);n.default=l.exports}}]);