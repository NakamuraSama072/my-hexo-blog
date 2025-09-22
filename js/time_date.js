// 08/09/2025 08:30:00
// 以下内容由 Microsoft Copilot 生成
// 不得不说 AI 写 JavaScript 就是好用

// 设置网站启动时间（请根据实际情况修改）
const startTime = new Date('2025-08-09T08:30:00');

// 获取 DOM 元素
const timeDateEl = document.getElementById('time_date');
const timesEl = document.getElementById('times');

// 更新时间显示的函数
function updateTime() {
  const now = new Date();
  const diff = now - startTime; // 毫秒差值

  // 计算天数
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  // 计算时分秒
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // 更新页面内容
  if (timeDateEl) {
    timeDateEl.textContent = `网站已运行 ${days} 天`;
  }

  if (timesEl) {
    timesEl.textContent = ` ${pad(hours)} 时 ${pad(minutes)} 分 ${pad(seconds)} 秒`;
  }
}

// 补零函数（例如 09 而不是 9）
function pad(num) {
  return num.toString().padStart(2, '0');
}

// 每秒更新一次
setInterval(updateTime, 1000);

// 初始调用一次，避免页面刚加载时为空
updateTime();
