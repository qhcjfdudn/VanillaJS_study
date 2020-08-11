# 바닐라 JS로 크롬 앱 만들기 - 니꼴라쓰

momentum(모멘텀) - 크롬 확장앱. 크롬 브라우저에서 테마 변경 등 무료 확장앱!



Wat is JS?

웹에서 쓰이는 단 하나의 프언.

백엔드를 한다면 파이썬, 루비, 하스켈, ASP, 자바 등. 프론트는 온리 자바스크립트!

장점 : 모두 자바스크립트를 알아서 서로 단절되지 않지.



JS는 빠르게 발전. 웹이 빠르게 발전하기 때문. 웹이 성장하면서 우린 보다 많은 것들을 해야 했지.

왜 사람들이 싫어/좋아 하는지.



- JS를 배우면 섹시한 앱/웹/모바일/비디오게임/데스크톱앱/하이브리드앱.



JS로 만들어진 데스크톱 어플리케이션을 쓰고 있다.

**모든 브라우저는 JS로 돌아가고, 모든 컴퓨터에는 브라우저가 있기 때문에, JS는 모든 곳에 있다.**



JS로 내 위치/날씨 불러오기. 할일 목록 작성/저장/삭제 가능. socket.io를 써서 실시간 채팅도 구현 가능.

앱 제작 가능. 노마드 무비스! 네이티브.

구글에서 만든 그림그리면 3D로 바꿔주면서 전세계 어딘가에 설치한대. 뭐야??



자바스크립트는 인터랙티브한 것들을 만든다.



앱이나 비디오게임을 만들 때도 쓰인다. 





#### ES5, ES6, ES.Next

자바스크립트의 버전 에크마스크립트 5/6/..

자바스크립트 자체가 Specification같다.

브라우저들은 Specification을 받아서 자기들 방식으로 실행하는 것.

ES5, 6이런건 이러한 명세의 버전. 크롬에서 es6를 지원한다! 이런 느낌.





### 바닐라는 라이브러리가 없는 자바스크립트1!

Why should we learn 바닐라JS?

브라우저를 통해 제공된 자바스크립트

some poeple 바닐라 대신 커피를 배운다.

JS로 섹시하게 소스를 짜더라도, 결국 브라우저가 받는 건 컴파일된 것.

바닐라가 기초지만 더 어렵다. 리액트에 대해 잘 해도 그건 리액트 전문가. JS를 아는 게 아니다.



일반 자바스크립트가 다른 것들보다 훨씬 빠르다.

바닐라를 잘하게 되고 이 언어에 대해 더 잘 알게 되면, 다른 프레임웍을 쓸 때에도 아무 문제 없ㅇ르 것. 



Q. 그럼, 내가 JS를 배우면 파이썬, 루비도 쓸 수 있어??

함수, 변수, 이벤트 클래스, 객체, 배열 등. 이러한 **컨셉**을 배우는 것. JS만을 배우는 게 아니라.





### 안녕 ㅔ상!

툴은 code, atom 등 다양하지만, 간단히 컨셉을 보여주고 하는 정도라면 다운로드가 필요 없는 [repl](https://repl.it/)도 좋다.

script 태그는 body의 가장 아래에 작성해주어야 한다.

- 

script 태그는 바디에 포함시켜야 한다.

index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Something</title>
    <link rel="stylesheet" href="style.css" /> 스타일 적용하기
  </head>
  <body>
    <h1>This works!</h1>
    <script src="script.js"></script> 이거 />이렇게 닫으면 동작 안 함. 참고.
  </body>
</html>
```

style.css

```css
body {
  background-color: peru;
}

h1 {
  color:white;
}
```

script.js

```javascript
console.log('Im Working. Im JS. Im beauriful. Im worth it');
```



### Variable

변수. 우리가 아는 그 변수.

각각의 라인들은 expression.

변수명은 카멜케이스

두 종류의 변수

let: 변하는 수.

const: 상수. 변하지 않는 수.

var: 변수! var를 왜 안 쓰느냐?

var를 적용한 이상한 규칙. var는 블록스코프가 아니다. 사용하는 범위가 이상해짐. 즉 코드 가독성이 떨어질 것. 가비지 컬렉션 면에서도 좋지 않을 듯. let, const는 블록 스코프!



주석 //, /**/

**string** ""에 넣기. "😊" 이모지도 가능.

**Boolean**

**Number**



#### How do we organize in javascript

1. Array: [] 사용.

   - [index] index를 통해 탐색 가능

     ```javascript
     const li2 = [];
     li2[7] = 10;
     console.log(li2);
     
     // 결과 : [ <7 empty items>, 10 ]
     // 이게 가능하다고?!
     ```

     

2. Object: 각 value에 이름을 줄 수 있지.

   {}(컬리브라켓) 사용

   key는 변수다.

   Object 안에는 당연히 Arrary, 다른 Object가 들어갈 수 있다.

   이를 통해 중첩을만들 때, **문법규칙**을 지켜야 한다. 쭉쭉 변수, 요소들을 나열할 때 콤마 꼭 쓰기.





### Function

console.log(console); // 자바스크립트에 대한 인사이트를 얻을 수 있다!



console.log 향상시키기!

**``**(백틱) 백틱을 이용해 한 줄에 깔끔하게 다 표현하장! 

```javascript
function sayHello(name, age) {
    return `Hello ${name} you are ${age} years old`;
}

const greet me = sayHello("hyeonjin", 101);
```

console은 객체다. log, err 등 키를 통해 접근하는 구조인 것을 보면 알 수 있다.

```javascript
const calc = {
  plus: function(a, b) { return a + b; }
}

console.log(calc.plus(1, 2));
```



### 브라우저에서 우리에게 제공해주는 더 많은 함수들!

우리가 하고자하는 것은 **JS로 HTML을 다루는 것**

css처럼 JS도 엘리먼트를 선택할 수 있다. h1을 골라 바꾼다. 가능.



### DOM(Document Object Model)

JS는 html의 모든 html 태그(document)를 가져와 객체(object)로 바꾼다(model). 그게 DOM.

모든 것. 모든 html은 객체가 된다. 에러. 로그. 등등등!!!

```javascript
const title = document.getElementById("title");
title.innerHTML = `Hi you`;
console.log(title.innerHTML); // innerHTML로 내용에 접근할 수 있따!
```



querySelector()를 사용하여 html 태그 조작하기  

```javascript
const title = document.querySelector("#title"); // id로 찾고 싶으면 #
const title = document.querySelector(".title"); // className으로 찾고 싶으면 #
```



### 이벤트

웹사이트에서 발생하는 것들. click, resize, input, change, 등등

이벤트를 중간에 가로채서 조작!

```javascript
function handleResize() {
    console.log("I have been resized");
}

window.addEventListener("resize", handleResize); // 익명 함수, 화살표 함수 어떤 것도 다 잘 동작함.
```

해당 객체가 인지할 수 있는 이벤트의 리스너를 추가한다. 이 때 함수를 handleResize()로 작성하면, 이는 바로 실행하라는 의미라서, 함수명을 전달하는 거랑 완전히 다른 의미가 된다. 잘 이해하자! 여기에 하나 더 중요한 것

```javascript
function handleResize(event) { // event는 자바스크립트가 이벤트가 호출될 때마다 자동적으로 전달하는 객체.
    console.log("I have been resized");
}

window.addEventListener("resize", handleResize); // 여기는 동일하게
```



UI의 색깔을 선택할 땐 여기서 간단히 골라줘버리자!!

https://flatuicolors.com/palette/defo

어떤 이벤트들이 있는지 찾을 땐 [javascript event mdn](https://developer.mozilla.org/ko/docs/Web/Events)을 검색한다!

이벤트 처리

```javascript
const title = document.querySelector("#title"); // id로 찾고 싶으면 #

const BASE_COLOR = "rgb(52, 73, 94)"; // rgb형식과 #을 사용한 값 === 비교시 서로 다르다.
const OTHER_COLOR = "#95a5a6";

function handleClick() {
    const currentColor = title.style.color;
    console.log(currentColor);
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    }
    else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener('click', handleClick);
    // title.addEventListener('mouseenter', handleClick); 마우스가 들어갈 때 반응
     
    window.addEventListener('offline', () => { console.log('인터넷 끊어져따..') });
    window.addEventListener('online', () => { console.log('인터넷 연결돼따!') });
}

init();
```

하지만 우린 **html은 html만, css는 css만 처리하길 원한다. 각자가 분리돼서. js는 논리적 로직만 수행하길 바란다.**

css

```css
body {
    background-color: peru;
  }
  
  h1 {
    color:#34495e;
    transition: color 0.5s ease-in-out;
  }
  
.clicked {
  color: #7f8c8d;
}
```

js

```javascript
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
    if (currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
```

이런 식으로 클래스에 대해 처리를 해주고, 변경될 색상 등은 css 파일에서 다뤄주면 기본 논리들을 분리할 수 있어 좋다. 하지만 이렇게 하는 것도, **새로운 클래스로 바꿔주면서 이전 클래스에 대해 보장해주지 않기 때문에 문제가 생길 수 있다.**

### className이 아닌 classList

https://developer.mozilla.org/ko/docs/Web/API/Element/classList

클래스는 **여러 가지를 중복해서 적용**(상속이겠지?)할 수 있다. 이를 이용한다.

```javascript
function handleClick() {
    if (title.classList.contains(CLICKED_CLASS)) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}
```

이를 한 번 더 게으르고 간단하게! 아래처럼 쓰면 동일한 결과를 얻을 수 있다.

```javascript
function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}
```

닐라닐라바닐라 자바스크립트 개재밌네



