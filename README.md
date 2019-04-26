exercismJStrack

clear && npm test -- --watch

<h2>Tests are Failing and You Don't Know Why</h2>

From jest documentation:

https://jestjs.io/docs/en/troubleshooting

Try using the debugging support built into Node. Note: This will only work in Node.js 8+.

Go to package.json and include the following inside the Scripts

<code>
"testDebugLinux": "node --inspect-brk node_modules/.bin/jest --runInBand",

"testDebugWindows": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand",
</code>

Place a <code>debugger;</code> statement in any of your tests, and then, in your project's directory, run:

On Windows:

<code>npm run testDebugWindows fullPathToTestNameHere</code>

On Linux

<code>npm run testDebugLinux fullPathToTestNameHere</code>

To debug in Google Chrome (or any Chromium-based browser), simply open your browser and go to chrome://inspect and click on "Open Dedicated DevTools for Node", which will give you a list of available node instances you can connect to. Simply click on the address displayed in the terminal (usually something like localhost:9229) after running the above command, and you will be able to debug Jest using Chrome's DevTools.

The Chrome Developer Tools will be displayed, and a breakpoint will be set at the first line of the Jest CLI script (this is done simply to give you time to open the developer tools and to prevent Jest from executing before you have time to do so). Click the button that looks like a "play" button in the upper right hand side of the screen to continue execution. When Jest executes the test that contains the debugger statement, execution will pause and you can examine the current scope and call stack.
