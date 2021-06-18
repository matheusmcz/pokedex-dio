module.exports = {
  runtimeCompiler: true,
  lintOnSave: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/functions";
          @import "@/styles/colors";
          @import "@/styles/variables";
        `,
      },
    },
  },
};
