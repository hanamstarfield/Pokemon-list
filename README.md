#구조
```bash
src
 ┣ assets
 ┃ ┣ react.svg
 ┃ ┗ pokemon-logo.png
 ┣ pages
 ┃ ┣ Home.jsx
 ┃ ┣ Dex.jsx
 ┃ ┗ Detail.jsx
 ┣ shared
 ┃ ┗ Router.jsx
 ┣ components
 ┃ ┣ Dashboard.jsx
 ┃ ┣ PokemonList.jsx
 ┃ ┗ PokemonCard.jsx
 ┣ context
 ┃ ┗ FamilyContext.js
 ┣ App.css
 ┣ App.jsx
 ┣ index.css
 ┣ main.jsx
 ┗ Mock.js
```
 
# 첫페이지
![image](https://github.com/user-attachments/assets/217c4eb9-637b-4573-8b09-653e5fd8e26f)
1. 포켓몬도감 시작하기로 메인 페이지에 접속할 수 있다.


# 메인 페이지
![image](https://github.com/user-attachments/assets/815d1779-c2c3-48e6-8391-07af55993f9d)
1. 포켓몬 카드 추가 버튼으로 나만의 포켓몬 리스트에 추가할 수 있다.
2. 포켓몬 카드를 클릭 시 포켓몬 상세 페이지로 넘어갈 수 있다.

## 추가된 모습
![image](https://github.com/user-attachments/assets/c14eec8f-294f-4c23-a780-7cfc58ad999a)
1. 삭제 버튼을 통해 카드를 삭제할 수 있다.
2. 6개 이상의 카드를 추가할 시 alert 발생
3. 중복된 카드는 추가할 수 없다.


# 디테일 페이지
![image](https://github.com/user-attachments/assets/def4cc0e-eceb-4efd-b9aa-bace032f798a)
1. 각각의 포켓몬스터의 상세 정보를 볼 수 있다.
2. 뒤로가기 버튼을 통해 메인 페이지로 돌아갈 수 있다.



느낀점:
 props-drilling를 context api로 리팩토링 하면서 완전히는 아니지만, 코드가 간결해지고 컴포넌트마다 기능을 좀더 확실하게 정할 수 있었던 것 같다.
 공부를 하며 바로 적용해보다 보니 코드가 비효율적인 부분이 많은 것 같아 많이 아쉽지만, 앞으로는 생각해볼 수 있는 여지가 많이 생겼고, 더 공부해서 Redux까지 추가해보고 싶다.
 



 
