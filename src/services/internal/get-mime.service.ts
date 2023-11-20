import * as mime from 'mime-types'
export const getMimeService = (destinationPath: string)=>{
    const ct = mime.lookup(destinationPath)
    return ct ? ct : 'application/octet-stream'
}