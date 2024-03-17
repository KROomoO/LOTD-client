<p align="center">
  <img src="https://github.com/Team-LOTD/frontend/assets/93576045/25dee207-62b8-4eb1-a68d-794697e636b2"/>
</p>

## 목차
1. 개발 멤버 소개
2. 서비스 소개
3. 기술 스택
4. 시스템 아키텍처
5. 주요 기능
6. 협업 관리
7. 프로젝트 기간
8. 프로젝트 관련 문서
</br>

## 👪 개발 멤버 소개
- frontend [박성익](https://github.com/KROomoO)
- backend [윤재성](https://github.com/JaesungYoun)
</br>

## 💡 서비스 소개
패션 커뮤니티 웹 애플리케이션
>LOTD는 "Look Of The Day"의 약자로, 패션 커뮤니티를 위한 웹 애플리케이션입니다.</br>
>LOTD는 사용자들이 일상 속 패션을 공유하고, 옷 스타일에 대한 의견을 교환할 수 있는 플랫폼을 제공합니다.

당신의 하루를 공유해주세요!
</br>

## 🛠️ 기술 스택

### FrontEnd
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
</br>

### BackEnd
</br>

### 상세 기술스택 및 버전
| 구분     | 기술스택             | 상세내용                | 버전     |
|----------|---------------------|-------------------------|----------|
| 공통     | 형상관리             | Git                     | 2.44.0   |
|          | 커뮤니케이션         | Notion, Slack, KakaoTalk| -        |
| FrontEnd | JavaScript(ES6)     | -                       | -        |
|          | React               | react                   | 17.0.2   |
|          | React               | react-dom               | 17.0.2   |
|          | React               | react-router-dom        | 6.21.1   |
|          | React               | react-hook-form         | 7.49.2   |
|          | Axios               | axios                   | 1.6.5    |
|          | Styled-Components   | styled-compoenents      | 6.1.8    |
|          | Mui                 | mui                     | 5.15.12  |
|          | Toast-ui            | toast-ui/react-deitor   | 3.2.3    |
|          | Toast-ui            | toast-ui/editor-plugin-color-syntax | 3.1.0   |
|          | Moment              | moment                  | 2.30.1   |
|          | AWS S3              | aws-sdk                 | 2.1571.0 |
|          | IDE                 | Visual Studio Code      | 1.87.2   |
| BackEnd  |                     |                         |          |
| Server   | Server              | AWS EC2                 | -        |
</br>

## 🗂️ 시스템 아키텍처
</br>

## 🖥️ 주요기능

### 로그인
- 아이디와 비밀번호를 이용하여 로그인할 수 있습니다.
- KakaoTalk, Naver, Google 각각의 소셜 계정을 이용하여 회원가입 및 로그인을 할 수 있습니다.
</br>

![Frame 2087325465](https://github.com/Team-LOTD/LOTD/assets/93576045/e9d5b16a-5d9e-4794-a332-d238af461a40)
</br>

### 회원가입
- 회원정보 입력 및 중복 확인을 통해 회원가입을 진행할 수 있습니다.
</br>

![Join_PC](https://github.com/Team-LOTD/LOTD/assets/93576045/e74d6a5c-aebb-4547-b82d-1bb25c9923a2)
</br>

### 마이페이지 - 계정 설정
- 로그인 후 마이페이지 - 계정 설정을 통해 회원정보 확인 및 수정을 진행할 수 있습니다.
</br>

![MyPage_PC](https://github.com/Team-LOTD/LOTD/assets/93576045/4dc0153b-a5fd-4c74-a15b-ce0eae3af3fd)
![MyPage_PC](https://github.com/Team-LOTD/LOTD/assets/93576045/f89ce2a1-c7a4-492b-a7d0-424be8764c76)
</br>

### 마이페이지 - 내 활동
- 로그인 후 마이페이지 - 내 활동을 통해 내 커뮤니티 활동 내역을 확인할 수 있습니다.
</br>

![Community_List](https://github.com/Team-LOTD/LOTD/assets/93576045/2bb5c2ab-ebc4-4b54-b02d-528e3cd0834a)
</br>

### 메인페이지
- 메인페이지 접속 시 전체 게시글 목록 혹은 인기 게시글 목록을 조회할 수 있습니다.
- 카테고리 클릭 시 해당 카테고리의 게시글 목록을 조회할 수 있습니다.
- 조회를 원하는 게시글 클릭 시 게시글 조회 페이지로 이동할 수 있습니다.
- 글쓰기 클릭 시 글쓰기 페이지로 이동할 수 있습니다.
- 돋보기 클릭 후 키워드 입력 시 검색 페이지로 이동할 수 있습니다.
</br>

![Community_List](https://github.com/Team-LOTD/LOTD/assets/93576045/4592f022-761b-424d-a92b-3db3cf0f450c)
</br>

### 게시글 - 게시글 작성
- 게시판(카테고리), 제목, 내용 입력 후 등록하기 클릭 시 해당 게시글이 저장되고 게시글 조회 페이지로 이동할 수 있습니다.
</br>

![Community_Edit](https://github.com/Team-LOTD/LOTD/assets/93576045/270ec622-90a8-4f7d-80e3-bafff36c73f7)
</br>

### 게시글 - 게시글 조회
- 게시글 카테고리, 제목, 내용, 조회수 등 게시글 관련 내용을 조회할 수 있습니다.
- 해당 게시글에 좋아요 혹은 댓글을 작성할 수 있습니다.
- 입력된 댓글에 대댓글을 작성할 수 있습니다.
- 해당 게시글의 작성자일 경우 게시글을 수정 및 삭제할 수 있습니다.
- 수정하기 클릭 시 게시글 작성 페이지로 이동하며 기존에 작성된 게시글의 내용을 수정할 수 있습니다.
- 삭제하기 클릭 시 재확인 후 게시글을 삭제할 수 있습니다.
</br>
  
![Community_View](https://github.com/Team-LOTD/LOTD/assets/93576045/fdc4a6f0-6fe6-40a7-ba00-44eec4d88829)
![Community_View_작성자](https://github.com/Team-LOTD/LOTD/assets/93576045/ea167192-7fd3-4358-abe8-b285bf368fa3)
</br>

### 게시글 - 게시글 검색
- 입력된 키워드를 바탕으로 검색 결과 목록을 조회할 수 있습니다.
</br>

![Search_List](https://github.com/Team-LOTD/LOTD/assets/93576045/bda6e80c-86fa-455d-950d-e6b8ad097162)
</br>

## 👥 협업 관리
</br>

## 📆 프로젝트 기간
### 23.12.27 ~ 진행 중
- 기획 및 설계 : 23.12.27 ~ 24.01.20
- 프로젝트 구현 : 24.01.15 ~ 진행 중
</br>

## 📋 프로젝트 관련 문서
