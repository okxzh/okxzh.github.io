// 使用免费的 IP 查询服务
fetch('https://api.ip.sb/geoip')
  .then(response => response.json())
  .then(data => {
    const registerLinks = document.getElementsByClassName('register-link');
    const registerButtons = document.getElementsByClassName('register-button');
    const linkHref = data.country_code === 'CN' 
      ? 'https://www.mnftinqq.com/join/CNOFF' 
      : 'https://www.okx.com/join/CNOFF';

    for (let link of registerLinks) {
      link.href = linkHref;
    }
    for (let button of registerButtons) {
      button.href = linkHref;
    }
  })
  .catch(error => console.error('无法获取用户 IP 信息', error)); 