// 使用免费的 IP 查询服务
fetch('https://api.ip.sb/geoip')
  .then(response => response.json())
  .then(data => {
    const registerLink = document.getElementById('register-link');
    const registerButton = document.getElementById('register-button');
    if (data.country_code === 'CN') {
      console.log('用户来自中国');
      registerLink.href = 'https://www.mnftinqq.com/join/CNOFF';
      registerButton.href = 'https://www.mnftinqq.com/join/CNOFF';
    } else {
      console.log('用户来自其他国家');
      registerLink.href = 'https://www.okx.com/join/CNOFF';
      registerButton.href = 'https://www.okx.com/join/CNOFF';
    }
  })
  .catch(error => console.error('无法获取用户 IP 信息', error)); 