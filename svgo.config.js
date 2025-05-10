export default {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertPathData: {
            floatPrecision: 2,
            forceAbsolutePath: false,
            utilizeAbsolute: false,
          },
          removeViewBox: false,
        },
      },
    },
  ],
};
