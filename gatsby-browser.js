import { createRoot, hydrateRoot } from 'react-dom/client';

const onRecoverableError = (error, ...args) => {
  console.error(error, { args });
};

/**
 *
 * @param args
 * @type {GatsbyBrowser.replaceHydrateFunction}
 */
export const replaceHydrateFunction = () => (element, container) => {
  const focusEl = document.getElementById(`gatsby-focus-wrapper`);
  if (
    (focusEl && focusEl.children.length) ||
    process.env.NODE_ENV === 'production'
  ) {
    return hydrateRoot(container, element, {
      unstable_strictMode: true,
      onRecoverableError,
    });
  }

  const root = createRoot(container, {
    unstable_strictMode: true,
    onRecoverableError,
  });
  return root.render(element);
};
