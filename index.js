'use strict';

module.exports.setup = function (level, nemo, cb) {
    if (arguments.length === 2) {
        cb = nemo;
        nemo = level;
        level = 'ALL';
    }
    if (!nemo || !nemo.wd || !nemo.wd.logging || !nemo.wd.logging.Level[level]) {
        cb(new Error('nemo-logger has invalid arguments'));
    }
    nemo.wd.logging.installConsoleHandler();
    nemo.wd.logging.getLogger().setLevel(nemo.wd.logging.Level[level]);
    cb(null);
};
