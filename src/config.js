
const BASE_URL = "http://opengraph.io/api/1.1/site/";
const TARGET_URL = "http://davidwalsh.name";
const APP_ID = "?app_id=5ae0777b9b03547407c63e6d";
//TODO : 환경 변수에 따라 APP_ID 설정

const metaTagData = {
	description: "A blog featuring tutorials about JavaScript, HTML5, AJAX, PHP, CSS, WordPress, and everything else development.",
	image: {
		secure_url: "https://davidwalsh.name/wp-content/themes/punky/images/logo.png",
		url:"https://davidwalsh.name/wp-content/themes/punky/images/logo.png",
	},
	locale: "en_US",
	site_name: "David Walsh Blog",
	title: "David Walsh Blog",
	type: "website",
	url: "https://davidwalsh.name/",
}
export { BASE_URL, TARGET_URL, APP_ID, metaTagData };
