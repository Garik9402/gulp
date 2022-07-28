const { src, dest } = require('gulp')

const html = function() {
    return src("./src/index.html")
        .pipe(dest('./dist'))

}

exports.html = html