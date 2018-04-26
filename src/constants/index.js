const BASE_URL = "http://opengraph.io/api/1.1/site/";
const TARGET_URL = "https://www.robinwieruch.de/learn-react-before-using-redux/";
const APP_ID = "?app_id=5ae0777b9b03547407c63e6d";
//TODO : 환경 변수에 따라 APP_ID 설정

const metaTagData = {
	description: "Facts about React that should be known before using Redux (or MobX). Most important: Learn React first, then opt-in Redux but only if you need it. There are various techniques in React.js for scaling your local state management. Only if these are not sufficient, use a library like Redux ...",
	image: {
		url:"https://www.robinwieruch.de/img/posts/learn-react-before-using-redux/banner_640.jpg",
	},
	title: "8 things to learn in React before using Redux - RWieruch",
	type: "website",
	url: "https://www.robinwieruch.de/learn-react-before-using-redux/",
}

export { BASE_URL, TARGET_URL, APP_ID, metaTagData };
