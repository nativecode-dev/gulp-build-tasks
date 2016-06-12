module.exports = (gulp, core) => {
  return (configuration, options) => {
    options = core.merge(true, configuration.options.publish, options)

    const names = configuration.common.names

    gulp.task(names.publish, done => {
      core.git.check.dirty(dirty => {
        if (dirty) {
          core.plugin.util.log(core.chalk.bgRed(' Current local repository has uncommitted changes. '))
          dirty.split('\n').map(line => core.plugin.util.log(core.chalk.red(line.trim())))
        } else {
          // Do the real stuff
        }
        done()
      })
    })
  }
}