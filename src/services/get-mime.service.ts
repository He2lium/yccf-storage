import * as mime from 'mime-types'
export const GetMimeService = (destinationPath: string)=>{
    const ct = mime.lookup(destinationPath)
    return ct ? ct : 'application/octet-stream'
}