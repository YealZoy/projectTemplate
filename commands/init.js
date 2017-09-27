const download = require('download-git-repo');

download('git@github.com:YealZoy/blackboard.git', 'test/tmp', { clone: true }, function (err) {
    console.log(err ? 'Error' : 'Success')
});

module.exports = download;