# DISCORD TAB SEARCH FIX
Version 1.0.0

PURPOSE
Keep Command + Shift + A available for Chrome's native Tab Search while
Discord's website has focus. This does not change the Discord desktop app.

INSTALL ON YOUR MAC
1. Unzip
2. Move the extracted discord-tab-search-fix folder somewhere permanent.
   Keep it there while the extension is installed.
3. In Chrome's address bar, type chrome://extensions and press Return.
4. Turn on Developer mode in the top-right corner.
5. Click Load unpacked and select the folder containing manifest.json.
   Select the extracted folder, not the ZIP file.
6. Reload any open Discord tabs.
7. Focus your Discord tab and press Command + Shift + A.
   Chrome's native Tab Search should open instead of Discord's shortcut.

No Chrome Web Store publishing, account setup, build tools, or other
installation is needed. There is no toolbar popup or extra configuration.

SCOPE AND PRIVACY
The manifest limits the script to these HTTPS sites:
- discord.com
- ptb.discord.com
- canary.discord.com

The extension only filters Command + Shift + A. Other key combinations are
left untouched, including Command + A and Command + Shift + K.

There are no analytics, network requests, stored keystrokes, remote scripts,
background service workers, or tabs/history/cookies API permissions.
The script runs on Discord pages, so Chrome may display a site-access warning
about being able to read/change data there. The code itself does not read
messages, tokens, cookies, or account details.

HOW IT WORKS
Chrome loads content.js at document_start in its isolated script world.
The script captures matching keyboard events before page handlers and calls
stopImmediatePropagation(), but never preventDefault(). This prevents page
handlers from claiming the shortcut without cancelling its default action.

It does not open a replacement tab-search UI or bind an extension command.
It depends on Chrome's native shortcut being available on your Mac.

TROUBLESHOOTING
- Reload Discord after installing, updating, disabling, or removing it.
- Confirm the extension is enabled and allowed to run on Discord.
- In an ordinary Chrome browser window, test Command + Shift + A on a
  non-Discord tab. This extension cannot repair an OS-level or other
  extension's shortcut conflict, or add Tab Search to an app-only window.
- To undo this fix, disable/remove it at chrome://extensions and reload Discord.

FILES
manifest.json  Extension metadata and Discord-only site matching.
content.js     The complete shortcut-filtering code.
README.txt     These instructions.

VALIDATION
JavaScript syntax, manifest contents, and 36 shortcut-filter cases were checked.
The event tests confirm only the target combination stops later listeners and
that the script never cancels the default action.

REFERENCES
Chrome content-script documentation:
https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts
Chrome unpacked-extension installation:
https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world
Event propagation:
https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation
