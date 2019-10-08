const marked = require("marked");
const toAscii = bin => new Buffer(bin, "base64").toString("ascii");
const { pipe, prop, pick } = require("ramda");
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);
const clean = (unsans)=> DOMPurify.sanitize(unsans);
module.exports = details =>
  pipe(
    prop("content"),
    toAscii,
    marked,
    clean
  )(details);
