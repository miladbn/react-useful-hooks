export default {
  logo: <span>React Useful Hooks</span>,
  project: {
    link: 'https://github.com/your-username/react-useful-hooks',
  },
  docsRepositoryBase: 'https://github.com/your-username/react-useful-hooks/tree/main/apps/docs',
  footer: {
    text: `React Useful Hooks ${new Date().getFullYear()} © All Rights Reserved.`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – React Useful Hooks',
    };
  },
}; 