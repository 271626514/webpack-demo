/**
 * Created by syzx9801@163.com on 2017/12/11.
 */
function createNotifierCallback () {
  return (severity, errors) => {
    if (severity !== 'error') {
      return;
    }
    const error = errors[0];
    if (!error.file) return;
    const filename = error.file.split('!').pop();
    notifier.notify({
      title: pkg.name,
      message: severity + ': ' + error.name,
      subtitle: filename || ''
    });
  }
}

module.exports = {
  createNotifierCallback
}