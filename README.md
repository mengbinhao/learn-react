### hellowworld

#### Note
1. 组件名必须首字母大写,以区别`html`标签
2. `Fragment`类似`Vue`的`template`
3. `return`加`()`可以换行
4. `onXxxx`
5. 循环`key`的设置
6. `this`指向
7. **`constructor`设置`data`,通过`setState`改变,千万不要this.xxx = e.target.value**
8. **千万不要直接操作this.state.services.splice(idx, 1)**
9. 注释的写法
10. `className`、`htmlFor`注意一些特殊会引起歧义的属性
11. `dangerouslySetInnerHTML={{__html:item}}`
12. React Developer Tools
13. 组建拆分-组建传值-单向数据流
14. `prop-type`
15. `ref` -> get DOM object
16. lifecycle(initialization、mounting、updation、unmounting)
    1.  setup props and state
    2.  UNSAFE_componentWillMount -> render -> componentDidMount
    3.  props(UNSAFE_componentWillReceiveProps -> **shouldComponentUpdate这可以使用生命周期进行性能优化** -> UNSAFE_componentWillUpdate -> render -> componentDidUpdate)、state(shouldComponentUpdate -> UNSAFE_componentWillUpdate -> render -> componentDidUpdate)
    4.  componentWillUnmount
17. use axios in componentDidMount for get data from easymock
18. animation
    1. CSS3
    2. keyframes
    3. `react-transition-group`可以同时消除DOM(Transition、CSSTransition、
SwitchTransition、TransitionGroup)