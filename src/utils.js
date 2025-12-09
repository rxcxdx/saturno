import check from 'check-types'
import Toastify from 'toastify-js'
import warning from 'warning'

export function toastError(v) {
  check.assert.string(v)
  Toastify({
    style: { background: 'red' },
    text: v,
    duration: 1000,
    position: 'left'
  }).showToast()
}

export function toastSuccess(v) {
  warning(check.string(v), 'text para toast invalido')
  Toastify({
    style: { background: 'green' },
    text: v,
    duration: 1000,
    position: 'left'
  }).showToast()
}

export function toastInfo(v) {
  warning(check.string(v), 'text para toast invalido')
  Toastify({
    text: v,
    duration: 1000,
    position: 'left'
  }).showToast()
}
