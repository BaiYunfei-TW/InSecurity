const API_BASE = process.env.REACT_APP_API_BASE
                || `http://${window.location.hostname}:8081/`;
console.log(`API_BASE is ${API_BASE}`);

export const API_LOGIN = API_BASE + 'user/login';
export const API_REGISTER = API_BASE + 'user/register';
export const API_USER_ALL = API_BASE + 'user/all';
export const API_USER_BAN = API_BASE + 'user/ban';
export const API_ARTICLE_POST = API_BASE + 'article/post';
export const API_ARTICLE_ALL = API_BASE + 'article/all';
export const API_ARTICLE_HOT = API_BASE + 'article/hot';
export const API_ARTICLE_DELETE = API_BASE + 'article/delete';
export const API_ARTICLE_TOPIC = API_BASE + 'article/topic';
export const API_ARTICLE_TOPICS = API_BASE + 'article/topics';
export const API_COOKIES = API_BASE + 'cookie/all';
export const API_ARTICLE_KEY = API_BASE + 'article/search';
export const API_ARTICLE_USER = API_BASE + 'article/user';



