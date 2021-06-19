let html = document.querySelector('#html')
let style = document.querySelector('#style')
let codeSection = document.querySelector('section.code')

let string = `
/**
 * 你好，我是董董
 * 接下来我演示以下我的前端功底
 * 首先我要准备一个 div
*/
#div1 {
    border: 1px solid red;
    width: 100%;
    height: 100%;
}

/**
 * 接下来我把 div 变成一个八卦图
 * 首先把 div 变成一个圆
*/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}

/**
 * 八卦是阴阳结合的，一黑一白
*/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/**
 * 加两个神秘的小球
*/
#div1:before {
    width: 50%;
    height: 50%;
    background-color: #000;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%);
}
#div1:after {
    width: 50%;
    height: 50%;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%);
}

/**
 * 接下来我们让它动起来
*/
#div1 {
    animation: div1Ani linear 5s infinite;
}
@keyframes div1Ani {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
}
`
let string2 = ''
let n = -1

let step = () => {
    setTimeout(() => {
        n += 1
        if (string[n] === '\n') {           // 如果当前字符是回车，就换成 <br>
            string2 += '<br>'
        } else if (string[n] === ' ') {     // 如果当前字符是空格，就换成 &nbsp;
            string2 += '&nbsp;'
        } else {
            string2 += string[n]
        }
        style.innerHTML = string.substring(0, n)
        html.innerHTML = string2

        window.scrollTo(0, window.innerHeight)              // 设置 pc 端窗口的滚动条滚动到最底部
        codeSection.scrollTop = codeSection.scrollHeight    // 设置移动端包裹代码的 div 滚动条滚动到最底部

        if (n < string.length-1) {
            step()
        }
    }, 0)
}

step()