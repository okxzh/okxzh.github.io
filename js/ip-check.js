// 设置链接的函数
function setLinks(countryCode) {
  const registerLinks = document.getElementsByClassName('register-link');
  const registerButtons = document.getElementsByClassName('register-button');

  const linkHref = countryCode === 'CN' 
    ? './302.html?target=https://www.mnftinqq.com/join/CNOFF' 
    : './302.html?target=https://www.okx.com/join/CNOFF';

  for (let link of registerLinks) {
    link.href = linkHref;
  }
  for (let button of registerButtons) {
    button.href = linkHref;
  }
}

// 使用免费的 IP 查询服务
fetch('https://api.ip.sb/geoip')
  .then(response => response.json())
  .then(data => {
    setLinks(data.country_code); // 直接传入国家代码
  })
  .catch(error => {
    console.error('无法获取用户 IP 信息', error);
    // 默认使用中国的链接
    setLinks('CN'); // 设置默认链接为中国
  }); 