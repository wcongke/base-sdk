import 'babel-polyfill'
import Es6Promise from 'es6-promise'

if (Number.parseInt === undefined) Number.parseInt = window.parseInt
if (Number.parseFloat === undefined) Number.parseFloat = window.parseFloat

Es6Promise.polyfill()
