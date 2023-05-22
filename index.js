import os from 'os'

const homedir = os.homedir()
const hostname = os.hostname()
const version = os.version()
const type = os.type()

export {homedir,hostname,version,type}