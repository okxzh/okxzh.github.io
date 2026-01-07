// 设置链接的函数（增强功能，HTML中已有fallback链接）
function setLinks(countryCode) {
  const registerButtons = document.getElementsByClassName('register-button');
  const downloadButtons = document.getElementsByClassName('download-button');

  // 根据国家代码设置不同的链接（仅当链接存在且需要时才更新）
  const linkHref = countryCode === 'CN' 
    ? '/302.html?target=https://ouyigw.org/join/CNOFF' 
    : '/302.html?target=https://www.okx.com/join/CNOFF';

  const downloadLinkHref = countryCode === 'CN' 
    ? '/302.html?target=https://www.oucnyi.blue/zh-hans/download' 
    : '/302.html?target=https://www.okx.com/zh-hans/download';

  // 只更新已有href属性的按钮，确保不会破坏已有的有效链接
  for (let button of registerButtons) {
    // 如果按钮已经有有效的href（不是#），则根据IP更新；否则保持原样
    if (button.href && button.href !== '#' && !button.href.includes('#')) {
      button.href = linkHref;
    } else if (!button.href || button.href === '#' || button.href.endsWith('#')) {
      button.href = linkHref;
    }
  }

  for (let button of downloadButtons) {
    // 如果按钮已经有有效的href，则根据IP更新；否则保持原样
    if (button.href && button.href !== '' && !button.href.endsWith('#')) {
      button.href = downloadLinkHref;
    } else if (!button.href || button.href === '') {
      button.href = downloadLinkHref;
    }
  }
}

// 使用免费的 IP 查询服务（增强功能，不影响基本链接功能）
if (typeof fetch !== 'undefined') {
  fetch('https://api.ip.sb/geoip')
    .then(response => response.json())
    .then(data => {
      setLinks(data.country_code); // 直接传入国家代码
    })
    .catch(error => {
      console.error('无法获取用户 IP 信息', error);
      // 默认使用非中国的链接（直接链接到OKX官网）
      setLinks('US'); // 设置默认链接为OKX官网
    });
} 