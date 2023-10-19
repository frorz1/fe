import testConfig from './index.test'
import liveCOnfig from './index.live'
console.log('MODE: ', import.meta.env.MODE, import.meta.env.VITE_NUMBER)

let config = {}

if (import.meta.env.VITE_ENV === 'live') {
  config = liveCOnfig
} else {
  config = testConfig
}

export default config
