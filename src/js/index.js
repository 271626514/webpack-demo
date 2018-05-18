/**
 * Created by syzx9801@163.com on 2017/12/11.
 * 入口文件
 */
import '../style/index.less'
import '../style/index.scss'
import '../style/index.css'
import {str} from './demo'

const dataJson = require('../data/data.json')

export const WEB_TEST = 'hello '
console.log(WEB_TEST + dataJson.name)

console.log(str)
