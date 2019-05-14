import Vue from 'vue'
Vue.filter('filterImg', (value) => {
  if (value.startsWith('http://p3')) return `${value.replace('p3', 'p1')}`
  else if (value.startsWith('http://p4')) return `${value.replace('p4', 'p1')}`
  else return value
})
Vue.filter('fiterAvator', (value) => {
  if (value !== null) {
    value = value
  } else {
    value = 'http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg'
  }
  return value
})
