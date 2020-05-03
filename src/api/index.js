/*jshint esversion: 6 */
/**
 * 
 * 包含多个接口
 * 
 * [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
[2、获取食品分类列表](#2获取食品分类列表)<br/>
[3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
[4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
[5、获取一次性验证码](#5获取一次性验证码)<br/>
[6、用户名密码登陆](#6用户名密码登陆)<br/>
[7、发送短信验证码](#7发送短信验证码)<br/>
[8、手机号验证码登陆](#8手机号验证码登陆)<br/>
[9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
[10、用户登出](#10用户登出)<br/>
 */
import ajax from './ajax'
//1.获取位置
export const reqAddress = (geohash) => ajax(`/position/${geohash}`);

//2.获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodTypes = () => ajax(`http://localhost:4000/index_category`);

//3.根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude, latitude) => ajax('/shops', { longitude, latitude });

//4.根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqShopList = (longitude, latitude, keyword) => ajax('/search_shops', { longitude, latitude, keyword });

//5.获取一次性验证码](#5获取一次性验证码)<br/>
export const reqCaptcha = () => ajax('http://localhost:3000/captcha');

//6.用户名密码登陆](#6用户名密码登陆)<br/>
export const reqLonin = (name, pwd, captcha) => ajax('/login_pwd', { name, pwd, captcha }, 'POST');

/*7.发送短信验证码](#7发送短信验证码)<br/>*/
export const reqPhone = (phone) => ajax('/sendcode', { phone });

//8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqPhoneNumber = (phone, code) => ajax('/login_sms', { phone, code }, 'POST');


//[9、根据会话获取用户信息](#9根据会话获取用户信息) < br />
export const reqUserInfo = () => ajax('http://localhost:3000/userinfo');

//[10、用户登出 < br />
export const reqLogout = () => ajax('http: //localhost:3000/logout');