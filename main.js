const api = 'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia%2FTokyo';

function getData() {
fetch(api)
.then(response => response.json())
.then(data => makePage(data));
}

function makePage(data) {
    setData('day0',dateFormat(data.daily.time[0]));
    setData('day1',dateFormat(data.daily.time[1]));
   
    setData('weathercode0',getWMO(data.daily.weathercode[0]));
    setData('weathercode1',getWMO(data.daily.weathercode[1]));
  
    setData('temperature_2m_max0',data.daily.temperature_2m_max[0] + '°C');
    setData('temperature_2m_max1',data.daily.temperature_2m_max[1] + '°C');
    
    setData('temperature_2m_min0',data.daily.temperature_2m_min[0] + '°C');
    setData('temperature_2m_min1',data.daily.temperature_2m_min[1] + '°C');
    
    setData('precipitation_sum0',data.daily.precipitation_sum[0] + 'mm');
    setData('precipitation_sum1',data.daily.precipitation_sum[1] + 'mm');
    
    if ( data.daily.precipitation_sum[0] > 0 ) {
        document.getElementById('body').style.backgroundImage
         = 'linear-gradient(#ccf 5%, #fff 10%)';
      } else {
        document.getElementById('body').style.backgroundImage
         = 'linear-gradient(#fec 5%, #fff 10%)';
      }    
    }
  
  function setData(id,data) {
    document.getElementById(id).innerHTML = data;
  }
  function dateFormat(date,mode) {
    let dateObject = new Date(date);
  
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
  
    const hour = addZero(dateObject.getHours());
    const minute = addZero(dateObject.getMinutes());
    const second = addZero(dateObject.getSeconds());
  
    if(mode == 1) {
        return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
      } else {
        return month + '月' + day + '日';
      }    
  }
  
  function addZero(n) {
    if (n < 10 ) {
      return "0" + n;
    } else {
      return n;
    }
  }
  
    function getWMO(w) {
        if (w==0) {
          return '☀️';
        } else if (w==1) {
          return '🌤';
        } else if (w==2) {
          return '⛅️';
        } else if (w==3) {
          return '☁️';
        } else if (w==45) {
          return '霧';
        } else if (w==48) {
          return '霧氷';
        } else if (w==51) {
          return '霧雨';
        } else if (w==53) {
          return '霧雨';
        } else if (w==55) {
          return '霧雨';
        } else if (w==56) {
          return '霧雨';
        } else if (w==57) {
          return '霧雨';
        } else if (w==61) {
          return '☔️';
        } else if (w==63) {
          return '☔️';
        } else if (w==65) {
          return '☔️';
        } else if (w==66) {
          return '氷雨';
        } else if (w==67) {
          return '氷雨';
        } else if (w==71) {
          return '❄️';
        } else if (w==73) {
          return '❄️';
        } else if (w==75) {
          return '❄️';
        } else if (w==77) {
          return '❄️';
        } else if (w==80) {
          return '☔️';
        } else if (w==81) {
          return '☔️';
        } else if (w==82) {
          return '☔️';
        } else if (w==85) {
          return '❄️';
        } else if (w==86) {
          return '❄️';
        } else if (w==95) {
          return '⚡️☔️';
        } else if (w==96) {
          return '⚡️☔️';
        } else if (w==99) {
          return '⚡️☔️';
        } else {
          return w;
        }
        }
    
        function updateScreen() {
            setData('time',dateFormaat(new Date(),1));
          }
          
          setInterval(updateScreen,1000);
          setInterval(getData,1000 * 60 * 60);
getData();
