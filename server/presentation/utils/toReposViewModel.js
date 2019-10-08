const { pipe, map, prop, pick } = require("ramda");
module.exports = repos =>
  map(
    pipe(
      prop("node"),
      pick(["name", "url", "resourcePath", "description"])
    ),
    repos
  );
