(() => {
  'use strict';

  /**
   * Keep Cmd+Shift+A out of Discord's keyboard handlers without cancelling
   * Chrome's own default action. No key values are stored or transmitted.
   * @param {KeyboardEvent} event
   */
  function preserveTabSearch(event) {
    const isTabSearch =
      event.metaKey &&
      event.shiftKey &&
      !event.ctrlKey &&
      !event.altKey &&
      event.key.toLowerCase() === 'a';

    if (!isTabSearch) return;

    // Installed at document_start on the first capture-phase target, so the
    // page's handlers do not get a chance to intercept this combination.
    event.stopImmediatePropagation();

    // Intentionally do NOT call preventDefault(). The native browser
    // shortcut must remain available. No synthetic shortcut is sent.
  }

  for (const type of ['keydown', 'keypress', 'keyup']) {
    window.addEventListener(type, preserveTabSearch, {
      capture: true,
      passive: true
    });
  }
})();
