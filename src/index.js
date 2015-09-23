const provide       = require('./provide')
const shouldProvide = require('./detect')
const Trackomatic   = require('./trackomatic')

// Only provide trackomatic to IE9+
if (shouldProvide) {
  provide('trackomatic', Trackomatic)
}
