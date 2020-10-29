/**
 * Various javascript 'language' extensions. These are functions which appear to be reused across projects, tests, libs
 */

// from https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
export const hashCode = function (s: string) {
  var hash = 0
  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i)
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

declare const window: any

const _isInBrowser = function () {
  try {
    if (typeof window === 'undefined') {
      return false
    }
    return true
  } catch (err) {
    return false
  }
}

export const isInBrowser = _isInBrowser()
export const isInNode = !isInBrowser

export const isBlank = function (value?: string) {
  return value == null || value == undefined || value.trim().length == 0
}

let idCounter = 1
/**
 * Return an id that is only unique for the current browser session (resets across reloads)
 */
export const newLocalId = function () {
  return `id-${idCounter++}-${Math.round(Math.random() * 10000)}`
}

/**
 * Return a promise that resolves in the given ms
 * @param ms
 */
export function delayMs(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function isFunction(obj: any): obj is Function {
  if (!obj) {
    return false
  }
  const s = Object.prototype.toString.call(obj)
  return s == '[object Function]' || s == '[object AsyncFunction]'
}

export function isString(obj: any): obj is string {
  return obj && typeof obj === 'string'
}

export function isStringArray(obj: any): obj is string[] {
  return obj && Array.isArray(obj) && obj.every((it) => typeof it === 'string')
}

export function isArrayOf<T>(obj: any, typeOf: Function): obj is T[] {
  return obj && Array.isArray(obj) && obj.every((it) => it instanceof typeOf)
}

export function isArray<T>(obj: any): obj is T[] {
  return obj && Array.isArray(obj)
}

export function isNumber(obj: any): obj is Number {
  return obj && typeof obj === 'number'
}

/**
 * Like partial properties but at least property must be set
 */
export type AtLeastOneOf<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U]
