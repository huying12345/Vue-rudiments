export function addClass (el, className) {
  el.classList.add(className)
}

//验证改对象的class属性中是否已经存在该类名
export function hasClass (el, className) {
  return el.classList.contains(className)
}

export function getData (el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}
