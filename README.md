# Trackomatic: Automatic Google Analytics Tracking

## About

Trackomatic is a high-performance tracking enhancement for Google Analytics. It standardizes common tracking setups and saves setup time. 

Note: Trackomatic.js is only compatible with Universal Analytics (analytics.js), not the older asynchronous Google Analytics (ga.js).

## Installation

To use Trackomatic, simply load trackomatic.js on your site and configure it as a plugin in your existing Google Analytics snippet. If you have installed GA through Google Tag Manager, you'll have to set a custom field.

```javascript
ga('create', 'UA-XXXXX-Y', 'auto');
ga('require', 'trackomatic');
ga('send', 'pageview');
```


## Custom Events

* JS errors: when an on-page script throws an error, we send some basic diagnostic information back to GA.
* Viewport size: GA already tracks screen resolutions, but many people size their browser to only take up part of their screen, which can impact how we display content. Trackomatic fires an event when the page loads with details of viewport size and ratio.
* Viewport resize: when a visitor resizes their browser, Trackomatic fires an event with additional details.
* Generic click tracking: clicks on files, outbound links, email links, and telephone links.
* First input method: after filtering out inputs used for scrolling, what is the first input type used on a webpage?


## Configuration

Trackomatic accepts parameters to customize its tracking. Configuration parameters are passed as a configuration object when you initialize a plugin instance.

```javascript
ga('create', 'UA-XXXXX-Y', 'auto');
ga('require', 'trackomatic', {
    files: ['.pdf', '.docx', '.pptx'], 
    networks: 'reddit.com', 
    redirectDelay: 100
});
ga('send', 'pageview');
```

### Configuration Options:

**debug**: `true || false`, if `true` then replaces calls to `tracker.send`(GA) and `dataLayer.push`(GTM) with `console.log` statements.

**delimiter**: Default: `|`. Used to parse values in `data-trackomatic` attributes to separate out Category, Action and Label for reporting.

**prefix**: default: "Trackomatic". All events reported to GA / GTM will be prefixed with this string followed by a hyphen. (e.g. `Trackomatic - First Input`)

**redirectDelay**: to make sure our tracking data reaches Google’s servers before a page reloads, Trackomatic adds in a small delay before loading the new page. By default, this delay is 100 milliseconds. You can make it longer or shorter if you prefer.

**files**: takes a single string or array of string file extensions to check against, and will fire an event on click. If no files are specified, Trackomatic will check for `.pdf` files only.

**networks**: takes a single stringle or array of string social media network URLs, and fires an event on click. If no networks are specified, Trackomatic will track the following networks:

* Facebook
* Twitter
* Instagram
* LinkedIn
* Pinterest
* Tumblr
* Google Plus


## Public Functions

Trackomatic.js makes certain internal utility functions public by way of the global trackomatic object. The following functions are available under trackomatic.util:

- capitalize
- createAnchor
- createCookie
- createNavigationHandler
- debounce
- getHost
- getLink
- getPathname
- getViewportSize
- keyCode
- readCookie
- getURLParams
- roundXtoY
- slugify


## Error Reporting

A service such as Sentry or AirBrake will give the best results. Trackomatic does track JavaScript errors via proxying `window.onerror` which has known drawbacks.
