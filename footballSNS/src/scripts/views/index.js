var indexTpl = require('../tpl/index.string');
var IScroll = require('../lib/iscroll-probe.js');

document.body.innerHTML += indexTpl;

window.onload = function () {
  var myScroll = new IScroll('#index-scroll');
};
