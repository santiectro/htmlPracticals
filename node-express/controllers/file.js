import multer from 'multer'
export const upload = multer({
    dest:'uploads/',
    fileFilter(req, file, cb) {
        const fileTypes = /jpeg|jpg|png/
        const isAllowed = fileTypes.test(file.mimetype)

        if (isAllowed) {
            return cb(null, true)
        }
        req.fileError = `Supports only ${fileTypes}`
        return cb(null)
    }
})

