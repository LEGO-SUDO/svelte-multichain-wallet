if (typeof global === "undefined") {
  ;(window as any).global = window
}

if (typeof Buffer === "undefined") {
  ;(window as any).Buffer = require("buffer/").Buffer
}

if (typeof process === "undefined") {
  ;(window as any).process = { env: {} }
}

// Add any other necessary polyfills here
