/**
 * Route helpers for hash-based browser navigation, browser history synchronization,
 * and SEO-friendly native anchor tags with right-click and mobile long-press support.
 */

export function routeToHash(route) {
  if (!route || route === 'home') {
    return '#/';
  }
  return `#/${route}`;
}

export function hashToRoute(hash) {
  if (!hash || hash === '#' || hash === '#/' || hash === '#/home' || hash === '#home') {
    return 'home';
  }
  const clean = hash.replace(/^#\/?/, '').trim();
  return clean || 'home';
}

/**
 * Click handler for navigation anchor tags (`<a>`).
 * If user holds Ctrl/Cmd/Shift or middle-clicks, native browser navigation is preserved.
 * Normal left clicks are handled client-side via `setCurrentRoute`.
 */
export function handleLinkNavigation(e, route, setCurrentRoute) {
  // If user used Cmd+Click, Ctrl+Click, Shift+Click, or middle-click, let browser handle natively
  if (e && (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0)) {
    return;
  }
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }
  if (setCurrentRoute) {
    setCurrentRoute(route);
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}
