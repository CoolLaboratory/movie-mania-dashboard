

/**
 * 
 * @param {(location:Location, event: Event|null) => void} locationUpdatedCallback 
 */
export const installRouter = (locationUpdatedCallback) => {
  document.body.addEventListener('click', e => {
    if (e.defaultPrevented || e.button !== 0 ||
        e.metaKey || e.ctrlKey || e.shiftKey) return;


    /** @param {HTMLElement} n */
    const isAnchor = (n) => n.tagName === 'A';

    /**@type {HTMLAnchorElement | undefined} anchor*/
    const anchor = e.composedPath().filter(isAnchor)[0];
    
    if (!anchor || anchor.target ||
        anchor.hasAttribute('download') ||
        anchor.getAttribute('rel') === 'external') return;

    const href = anchor.href;
    if (!href || href.indexOf('mailto:') !== -1) return;

    const location = window.location;
    const origin = location.origin || location.protocol + '//' + location.host;
    if (href.indexOf(origin) !== 0) return;

    e.preventDefault();
    if (href !== location.href) {
      window.history.pushState({}, '', href);
      locationUpdatedCallback(location, e);
    }
  });

  window.addEventListener('popstate', e => locationUpdatedCallback(window.location, e));
  locationUpdatedCallback(window.location, null /* event */);
};