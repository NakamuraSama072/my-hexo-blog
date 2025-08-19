//获取当前IP地址和浏览器标识
function getbrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;

    //IE
    if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }

    //firefox
    if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }

    //Chrome
    if (agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }

    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }
}

var ip_content = document.querySelector(".ip_content");

if (ip_content != null && typeof (returnCitySN) != undefined) {
    ip_content.innerHTML = '欢迎来自 <span class="p red">' + returnCitySN["country"] + "</span> 的访客<br>" + "您的IP为： <span class='p cyan'>" + returnCitySN["query"] + "</span><br>浏览器版本：<span class='p blue'>" + getbrowserInfo() + '</span>';
}
/**
 * {"status":"success",
 * "country":"Malaysia",
 * "countryCode":"MY",
 * "region":"10",
 * "regionName":"Selangor",
 * "city":"Shah Alam",
 * "zip":"40000",
 * "lat":3.0763,
 * "lon":101.5168,
 * "timezone":"Asia/Kuala_Lumpur",
 * "isp":"Sunway Digital Wave Sdn Bhd",
 * "org":"",
 * "as":"AS55482 Level 12 Menara Sunway, Jalan Lagoon Timur,",
 * "query":"103.78.35.64"}
 */
