module.exports = function (api) {
  api.cache(true);

  const presets = [];
  const plugins = [
    [
      "formatjs",
      {
        idInterpolationPattern: "[sha512:contenthash:base64:6]",
        ast: true,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
