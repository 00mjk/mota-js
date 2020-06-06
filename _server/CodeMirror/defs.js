var terndefs_f6783a0a_522d_417e_8407_94c67b692e50 = [
  {
    "!name": "browser",
    "Node": {
      "!type": "fn()",
      "prototype": {
        "nextSibling": {
          "!type": "+Element",
          "!doc": "Returns the node immediately following the specified one in its parent's childNodes list, or null if the specified node is the last node in that list."
        },
        "previousSibling": {
          "!type": "+Element",
          "!doc": "Returns the node immediately preceding the specified one in its parent's childNodes list, null if the specified node is the first in that list."
        },
        "lastChild": {
          "!type": "+Element",
          "!doc": "Returns the last child of a node."
        },
        "firstChild": {
          "!type": "+Element",
          "!doc": "Returns the node's first child in the tree, or null if the node is childless. If the node is a Document, it returns the first node in the list of its direct children."
        },
        "childNodes": {
          "!type": "+NodeList",
          "!doc": "Returns a collection of child nodes of the given element."
        },
        "parentNode": {
          "!type": "+Element",
          "!doc": "Returns the parent of the specified node in the DOM tree."
        },
        "tagName": {
          "!type": "string",
          "!doc": "Returns the name of the current node as a string."
        },
        "insertBefore": {
          "!type": "fn(newElt: +Element, before: +Element) -> +Element",
          "!doc": "Inserts the specified node before a reference element as a child of the current node."
        },
        "removeChild": {
          "!type": "fn(oldNode: +Element) -> +Element",
          "!doc": "Removes a child node from the DOM. Returns removed node."
        },
        "appendChild": {
          "!type": "fn(newNode: +Element) -> +Element",
          "!doc": "Adds a node to the end of the list of children of a specified parent node. If the node already exists it is removed from current parent node, then added to new parent node."
        },
        "cloneNode": {
          "!type": "fn(deep: bool) -> +Element",
          "!doc": "Returns a duplicate of the node on which this method was called."
        },
        "addEventListener": {
          "!type": "fn(type: string, listener: fn(e: +Event), capture: bool)",
          "!doc": "Registers a single event listener on a single target. The event target may be a single element in a document, the document itself, a window, or an XMLHttpRequest."
        },
        "removeEventListener": {
          "!type": "fn(type: string, listener: fn(), capture: bool)",
          "!doc": "Allows the removal of event listeners from the event target."
        },
        "innerText": {
          "!type": "string",
          "!doc": "Gets or sets the text content of a node and its descendants."
        }
      },
      "!doc": "A Node is an interface from which a number of DOM types inherit, and allows these various types to be treated (or tested) similarly."
    },
    "Element": {
      "!type": "fn()",
      "prototype": {
        "!proto": "Node.prototype",
        "getAttribute": {
          "!type": "fn(name: string) -> string",
          "!doc": "Returns the value of the named attribute on the specified element. If the named attribute does not exist, the value returned will either be null or \"\" (the empty string)."
        },
        "setAttribute": {
          "!type": "fn(name: string, value: string)",
          "!doc": "Adds a new attribute or changes the value of an existing attribute on the specified element."
        },
        "removeAttribute": {
          "!type": "fn(name: string)",
          "!doc": "Removes an attribute from the specified element."
        },
        "getElementsByTagName": {
          "!type": "fn(tagName: string) -> +NodeList",
          "!doc": "Returns a list of elements with the given tag name. The subtree underneath the specified element is searched, excluding the element itself. The returned list is live, meaning that it updates itself with the DOM tree automatically. Consequently, there is no need to call several times element.getElementsByTagName with the same element and arguments."
        },
        "getElementsByClassName": {
          "!type": "fn(name: string) -> +NodeList",
          "!doc": "Returns a set of elements which have all the given class names. When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName on any element; it will return only elements which are descendants of the specified root element with the given class names."
        },
        "children": {
          "!type": "+HTMLCollection",
          "!doc": "Returns a collection of child elements of the given element."
        },
        "className": {
          "!type": "string",
          "!doc": "Gets and sets the value of the class attribute of the specified element."
        },
        "style": {
          "cssText": "string",
          "alignmentBaseline": "string",
          "background": "string",
          "backgroundAttachment": "string",
          "backgroundClip": "string",
          "backgroundColor": "string",
          "backgroundImage": "string",
          "backgroundOrigin": "string",
          "backgroundPosition": "string",
          "backgroundPositionX": "string",
          "backgroundPositionY": "string",
          "backgroundRepeat": "string",
          "backgroundRepeatX": "string",
          "backgroundRepeatY": "string",
          "backgroundSize": "string",
          "baselineShift": "string",
          "border": "string",
          "borderBottom": "string",
          "borderBottomColor": "string",
          "borderBottomLeftRadius": "string",
          "borderBottomRightRadius": "string",
          "borderBottomStyle": "string",
          "borderBottomWidth": "string",
          "borderCollapse": "string",
          "borderColor": "string",
          "borderImage": "string",
          "borderImageOutset": "string",
          "borderImageRepeat": "string",
          "borderImageSlice": "string",
          "borderImageSource": "string",
          "borderImageWidth": "string",
          "borderLeft": "string",
          "borderLeftColor": "string",
          "borderLeftStyle": "string",
          "borderLeftWidth": "string",
          "borderRadius": "string",
          "borderRight": "string",
          "borderRightColor": "string",
          "borderRightStyle": "string",
          "borderRightWidth": "string",
          "borderSpacing": "string",
          "borderStyle": "string",
          "borderTop": "string",
          "borderTopColor": "string",
          "borderTopLeftRadius": "string",
          "borderTopRightRadius": "string",
          "borderTopStyle": "string",
          "borderTopWidth": "string",
          "borderWidth": "string",
          "bottom": "string",
          "boxShadow": "string",
          "boxSizing": "string",
          "captionSide": "string",
          "clear": "string",
          "clip": "string",
          "clipPath": "string",
          "clipRule": "string",
          "color": "string",
          "colorInterpolation": "string",
          "colorInterpolationFilters": "string",
          "colorProfile": "string",
          "colorRendering": "string",
          "content": "string",
          "counterIncrement": "string",
          "counterReset": "string",
          "cursor": "string",
          "direction": "string",
          "display": "string",
          "dominantBaseline": "string",
          "emptyCells": "string",
          "enableBackground": "string",
          "fill": "string",
          "fillOpacity": "string",
          "fillRule": "string",
          "filter": "string",
          "float": "string",
          "floodColor": "string",
          "floodOpacity": "string",
          "font": "string",
          "fontFamily": "string",
          "fontSize": "string",
          "fontStretch": "string",
          "fontStyle": "string",
          "fontVariant": "string",
          "fontWeight": "string",
          "glyphOrientationHorizontal": "string",
          "glyphOrientationVertical": "string",
          "height": "string",
          "imageRendering": "string",
          "kerning": "string",
          "left": "string",
          "letterSpacing": "string",
          "lightingColor": "string",
          "lineHeight": "string",
          "listStyle": "string",
          "listStyleImage": "string",
          "listStylePosition": "string",
          "listStyleType": "string",
          "margin": "string",
          "marginBottom": "string",
          "marginLeft": "string",
          "marginRight": "string",
          "marginTop": "string",
          "marker": "string",
          "markerEnd": "string",
          "markerMid": "string",
          "markerStart": "string",
          "mask": "string",
          "maxHeight": "string",
          "maxWidth": "string",
          "minHeight": "string",
          "minWidth": "string",
          "opacity": "string",
          "orphans": "string",
          "outline": "string",
          "outlineColor": "string",
          "outlineOffset": "string",
          "outlineStyle": "string",
          "outlineWidth": "string",
          "overflow": "string",
          "overflowWrap": "string",
          "overflowX": "string",
          "overflowY": "string",
          "padding": "string",
          "paddingBottom": "string",
          "paddingLeft": "string",
          "paddingRight": "string",
          "paddingTop": "string",
          "page": "string",
          "pageBreakAfter": "string",
          "pageBreakBefore": "string",
          "pageBreakInside": "string",
          "pointerEvents": "string",
          "position": "string",
          "quotes": "string",
          "resize": "string",
          "right": "string",
          "shapeRendering": "string",
          "size": "string",
          "speak": "string",
          "src": "string",
          "stopColor": "string",
          "stopOpacity": "string",
          "stroke": "string",
          "strokeDasharray": "string",
          "strokeDashoffset": "string",
          "strokeLinecap": "string",
          "strokeLinejoin": "string",
          "strokeMiterlimit": "string",
          "strokeOpacity": "string",
          "strokeWidth": "string",
          "tabSize": "string",
          "tableLayout": "string",
          "textAlign": "string",
          "textAnchor": "string",
          "textDecoration": "string",
          "textIndent": "string",
          "textLineThrough": "string",
          "textLineThroughColor": "string",
          "textLineThroughMode": "string",
          "textLineThroughStyle": "string",
          "textLineThroughWidth": "string",
          "textOverflow": "string",
          "textOverline": "string",
          "textOverlineColor": "string",
          "textOverlineMode": "string",
          "textOverlineStyle": "string",
          "textOverlineWidth": "string",
          "textRendering": "string",
          "textShadow": "string",
          "textTransform": "string",
          "textUnderline": "string",
          "textUnderlineColor": "string",
          "textUnderlineMode": "string",
          "textUnderlineStyle": "string",
          "textUnderlineWidth": "string",
          "top": "string",
          "unicodeBidi": "string",
          "unicodeRange": "string",
          "vectorEffect": "string",
          "verticalAlign": "string",
          "visibility": "string",
          "whiteSpace": "string",
          "width": "string",
          "wordBreak": "string",
          "wordSpacing": "string",
          "wordWrap": "string",
          "writingMode": "string",
          "zIndex": "string",
          "zoom": "string",
          "!doc": "Returns an object that represents the element's style attribute."
        },
        "classList": {
          "!type": "+DOMTokenList",
          "!doc": "Returns a token list of the class attribute of the element."
        },
        "title": {
          "!type": "string",
          "!doc": "Establishes the text to be displayed in a 'tool tip' popup when the mouse is over the displayed node."
        },
        "width": {
          "!type": "number",
          "!doc": "Returns the layout width of an element."
        },
        "height": {
          "!type": "number",
          "!doc": "Height of an element relative to the element's offsetParent."
        },
        "getContext": {
          "!type": "fn(id: string) -> CanvasRenderingContext2D",
          "!doc": "DOM canvas elements expose the HTMLCanvasElement interface, which provides properties and methods for manipulating the layout and presentation of canvas elements. The HTMLCanvasElement interface inherits the properties and methods of the element object interface."
        },
        "innerHTML": {
          "!type": "string",
          "!doc": "Sets or gets the HTML syntax describing the element's descendants."
        }
      },
      "!doc": "Represents an element in an HTML or XML document."
    },
    "Document": {
      "!type": "fn()",
      "prototype": {
        "!proto": "Node.prototype",
        "height": {
          "!type": "number",
          "!doc": "Returns the height of the <body> element of the current document."
        },
        "width": {
          "!type": "number",
          "!doc": "Returns the width of the <body> element of the current document in pixels."
        },
        "body": {
          "!type": "+Element",
          "!doc": "Returns the <body> or <frameset> node of the current document."
        },
        "cookie": {
          "!type": "string",
          "!doc": "Get and set the cookies associated with the current document."
        },
        "URL": "string",
        "title": {
          "!type": "string",
          "!doc": "Gets or sets the title of the document."
        },
        "getElementById": {
          "!type": "fn(id: string) -> +Element",
          "!doc": "Returns a reference to the element by its ID."
        },
        "getElementsByTagName": {
          "!type": "fn(tagName: string) -> +NodeList",
          "!doc": "Returns a NodeList of elements with the given tag name. The complete document is searched, including the root node. The returned NodeList is live, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call document.getElementsByTagName again."
        },
        "getElementsByName": {
          "!type": "fn(name: string) -> +HTMLCollection",
          "!doc": "Returns a list of elements with a given name in the HTML document."
        },
        "getElementsByClassName": "Element.prototype.getElementsByClassName"
      },
      "!doc": "Each web page loaded in the browser has its own document object. This object serves as an entry point to the web page's content (the DOM tree, including elements such as <body> and <table>) and provides functionality global to the document (such as obtaining the page's URL and creating new elements in the document)."
    },
    "document": {
      "!type": "+Document",
      "!doc": "Each web page loaded in the browser has its own document object. This object serves as an entry point to the web page's content (the DOM tree, including elements such as <body> and <table>) and provides functionality global to the document (such as obtaining the page's URL and creating new elements in the document)."
    },
    "Event": {
      "!type": "fn()",
      "prototype": {
        "stopPropagation": {
          "!type": "fn()",
          "!doc": "Prevents further propagation of the current event."
        },
        "preventDefault": {
          "!type": "fn()",
          "!doc": "Cancels the event if it is cancelable, without stopping further propagation of the event."
        },
        "stopImmediatePropagation": {
          "!type": "fn()",
          "!doc": "Prevents other listeners of the same event to be called."
        },
        "type": {
          "!type": "string",
          "!doc": "Returns a string containing the type of event."
        },
        "target": {
          "!type": "+Element",
          "!doc": "An EventTarget is a DOM interface implemented by objects that can receive DOM events and have listeners for them. The most common EventTargets are DOM elements, although other objects can be EventTargets too, for example document, window, XMLHttpRequest, and others."
        },
        "clientX": {
          "!type": "number",
          "!doc": "Returns the horizontal coordinate within the application's client area at which the event occurred (as opposed to the coordinates within the page). For example, clicking in the top-left corner of the client area will always result in a mouse event with a clientX value of 0, regardless of whether the page is scrolled horizontally."
        },
        "clientY": {
          "!type": "number",
          "!doc": "Returns the vertical coordinate within the application's client area at which the event occurred (as opposed to the coordinates within the page). For example, clicking in the top-left corner of the client area will always result in a mouse event with a clientY value of 0, regardless of whether the page is scrolled vertically."
        },
        "keyCode": {
          "!type": "number",
          "!doc": "Returns the Unicode value of a non-character key in a keypress event or any key in any other type of keyboard event."
        },
        "charCode": {
          "!type": "number",
          "!doc": "Returns the Unicode value of a character key pressed during a keypress event."
        },
        "which": {
          "!type": "number",
          "!doc": "Returns the numeric keyCode of the key pressed, or the character code (charCode) for an alphanumeric key pressed."
        },
        "button": {
          "!type": "number",
          "!doc": "Indicates which mouse button caused the event."
        },
        "shiftKey": {
          "!type": "bool",
          "!doc": "Indicates whether the SHIFT key was pressed when the event fired."
        },
        "ctrlKey": {
          "!type": "bool",
          "!doc": "Indicates whether the CTRL key was pressed when the event fired."
        },
        "altKey": {
          "!type": "bool",
          "!doc": "Indicates whether the ALT key was pressed when the event fired."
        }
      }
    },
    "Storage": {
      "length": {
        "!type": "number",
        "!doc": "The length read-only property of the Storage interface returns an integer representing the number of data items stored in the Storage object."
      },
      "setItem": {
        "!type": "fn(name: string, value: string)",
        "!doc": "The setItem() method of the Storage interface, when passed a key name and value, will add that key to the storage, or update that key's value if it already exists."
      },
      "getItem": {
        "!type": "fn(name: string) -> string",
        "!doc": "The getItem() method of the Storage interface, when passed a key name, will return that key's value."
      },
      "key": {
        "!type": "fn(index: number) -> string",
        "!doc": "The key() method of the Storage interface, when passed a number n, returns the name of the nth key in the storage. The order of keys is user-agent defined, so you should not rely on it."
      },
      "removeItem": {
        "!type": "fn(key: string)",
        "!doc": "The removeItem() method of the Storage interface, when passed a key name, will remove that key from the storage."
      },
      "clear": {
        "!type": "fn()",
        "!doc": "The clear() method of the Storage interface, when invoked, will empty all keys out of the storage"
      }
    },
    "localStorage": {
      "!type": "Storage",
      "!doc": "The localStorage property allows you to access a local Storage object. localStorage is similar to sessionStorage. The only difference is that, while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the browsing session ends - that is, when the browser is closed.\n\nIt should be noted that data stored in either localStorage or sessionStorage is specific to the protocol of the page."
    },
    "console": {
      "assert": {
        "!type": "fn(assertion: bool, text: string)",
        "!doc": "Writes an error message to the console if the assertion is false."
      },
      "error": {
        "!type": "fn(...msg: ?)",
        "!doc": "Outputs an error message to the Web Console."
      },
      "info": {
        "!type": "fn(...msg: ?)",
        "!doc": "Outputs an informational message to the Web Console."
      },
      "log": {
        "!type": "fn(...msg: ?)",
        "!doc": "Outputs a message to the Web Console."
      },
      "time": {
        "!type": "fn(label: string)",
        "!doc": "Starts a timer you can use to track how long an operation takes."
      },
      "timeEnd": {
        "!type": "fn(label: string)",
        "!doc": "Stops a timer that was previously started by calling console.time()."
      },
      "trace": {
        "!type": "fn()",
        "!doc": "Outputs a stack trace to the Web Console."
      },
      "warn": {
        "!type": "fn(...msg: ?)",
        "!doc": "Outputs a warning message to the Web Console."
      },
      "!doc": "The console object provides access to the browser's debugging console. The specifics of how it works vary from browser to browser, but there is a de facto set of features that are typically provided."
    },
    "window": {
      "!type": "<top>",
      "!doc": "The window object represents a window containing a DOM document."
    },
    "self": {
      "!type": "<top>",
      "!doc": "Returns an object reference to the window object. "
    },
    "devicePixelRatio": "number",
    "requestAnimationFrame": {
      "!type": "fn(callback: fn(timestamp: number)) -> number",
      "!doc": "The Window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. The method takes as an argument a callback to be invoked before the repaint."
    },
    "cancelAnimationFrame": {
      "!type": "fn(number)n",
      "!doc": "Cancels a previously scheduled animation frame request."
    },
    "alert": {
      "!type": "fn(message: string)",
      "!doc": "Display an alert dialog with the specified content and an OK button."
    },
    "confirm": {
      "!type": "fn(message: string) -> bool",
      "!doc": "Displays a modal dialog with a message and two buttons, OK and Cancel."
    },
    "prompt": {
      "!type": "fn(message: string, value: string) -> string",
      "!doc": "Displays a dialog with a message prompting the user to input some text."
    },
    "setTimeout": {
      "!type": "fn(f: fn(), ms: number) -> number",
      "!doc": "Calls a function or executes a code snippet after specified delay."
    },
    "clearTimeout": {
      "!type": "fn(timeout: number)",
      "!doc": "Clears the delay set by window.setTimeout()."
    },
    "setInterval": {
      "!type": "fn(f: fn(), ms: number) -> number",
      "!doc": "Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function."
    },
    "clearInterval": {
      "!type": "fn(interval: number)",
      "!doc": "Cancels repeated action which was set up using setInterval."
    },
    "atob": {
      "!type": "fn(encoded: string) -> string",
      "!doc": "Decodes a string of data which has been encoded using base-64 encoding."
    },
    "btoa": {
      "!type": "fn(data: string) -> string",
      "!doc": "Creates a base-64 encoded ASCII string from a string of binary data."
    },
    "getComputedStyle": {
      "!type": "fn(node: +Element, pseudo?: string) -> Element.prototype.style",
      "!doc": "Gives the final used values of all the CSS properties of an element."
    },
    "CanvasRenderingContext2D": {
      "canvas": "+Element",
      "width": "number",
      "height": "number",
      "commit": "fn()",
      "save": "fn()",
      "restore": "fn()",
      "currentTransform": "?",
      "scale": "fn(x: number, y: number)",
      "rotate": "fn(angle: number)",
      "translate": "fn(x: number, y: number)",
      "transform": "fn(a: number, b: number, c: number, d: number, e: number, f: number)",
      "setTransform": "fn(a: number, b: number, c: number, d: number, e: number, f: number)",
      "resetTransform": "fn()",
      "globalAlpha": "number",
      "globalCompositeOperation": "string",
      "imageSmoothingEnabled": "bool",
      "strokeStyle": "string",
      "fillStyle": "string",
      "createLinearGradient": "fn(x0: number, y0: number, x1: number, y1: number) -> ?",
      "createPattern": "fn(image: ?, repetition: string) -> ?",
      "shadowOffsetX": "number",
      "shadowOffsetY": "number",
      "shadowBlur": "number",
      "shadowColor": "string",
      "clearRect": "fn(x: number, y: number, w: number, h: number)",
      "fillRect": "fn(x: number, y: number, w: number, h: number)",
      "strokeRect": "fn(x: number, y: number, w: number, h: number)",
      "fillRule": "string",
      "fill": "fn()",
      "beginPath": "fn()",
      "stroke": "fn()",
      "clip": "fn()",
      "resetClip": "fn()",
      "fillText": "fn(text: string, x: number, y: number, maxWidth: number)",
      "strokeText": "fn(text: string, x: number, y: number, maxWidth: number)",
      "measureText": "fn(text: string) -> ?",
      "drawImage": "fn(image: ?, dx: number, dy: number)",
      "createImageData": "fn(sw: number, sh: number) -> ?",
      "getImageData": "fn(sx: number, sy: number, sw: number, sh: number) -> ?",
      "putImageData": "fn(imagedata: ?, dx: number, dy: number)",
      "lineWidth": "number",
      "lineCap": "string",
      "lineJoin": "string",
      "miterLimit": "number",
      "setLineDash": "fn(segments: [number])",
      "getLineDash": "fn() -> [number]",
      "lineDashOffset": "number",
      "font": "string",
      "textAlign": "string",
      "textBaseline": "string",
      "direction": "string",
      "closePath": "fn()",
      "moveTo": "fn(x: number, y: number)",
      "lineTo": "fn(x: number, y: number)",
      "quadraticCurveTo": "fn(cpx: number, cpy: number, x: number, y: number)",
      "bezierCurveTo": "fn(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number)",
      "arcTo": "fn(x1: number, y1: number, x2: number, y2: number, radius: number)",
      "rect": "fn(x: number, y: number, w: number, h: number)",
      "arc": "fn(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: bool)",
      "ellipse": "fn(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: bool)"
    },
    "Image": {
      "!type": "fn(width?: number, height?: number) -> +HTMLImageElement",
      "!doc": "Image Element constructor. Accepts two optional parameters: Image([unsigned long width, unsigned long height]). Returns an HTMLImageElement instance just as document.createElement('img') would."
    }
  },
  {
    "!name": "ecmascript",
    "Infinity": {
      "!type": "number",
      "!doc": "A numeric value representing infinity."
    },
    "undefined": {
      "!type": "?",
      "!doc": "The value undefined."
    },
    "NaN": {
      "!type": "number",
      "!doc": "A value representing Not-A-Number."
    },
    "Object": {
      "!type": "fn()",
      "create": {
        "!type": "fn(proto: ?) -> !custom:Object_create",
        "!doc": "Creates a new object with the specified prototype object and properties."
      },
      "defineProperty": {
        "!type": "fn(obj: ?, prop: string, desc: propertyDescriptor) -> !custom:Object_defineProperty",
        "!doc": "Defines a new property directly on an object, or modifies an existing property on an object, and returns the object. If you want to see how to use the Object.defineProperty method with a binary-flags-like syntax, see this article."
      },
      "keys": {
        "!type": "fn(obj: ?) -> [string]",
        "!doc": "Returns an array of a given object's own enumerable properties, in the same order as that provided by a for-in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well)."
      },
      "assign": {
        "!type": "fn(target: ?, source: ?, source?: ?) -> !0",
        "!effects": ["copy !1 !0", "copy !2 !0", "copy !3 !0"],
        "!doc": "The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.",
      },
      "prototype": {
        "!stdProto": "Object",
        "toString": {
          "!type": "fn() -> string",
          "!doc": "Returns a string representing the object."
        },
        "hasOwnProperty": {
          "!type": "fn(prop: string) -> bool",
          "!doc": "Returns a boolean indicating whether the object has the specified property."
        }
      },
      "!doc": "Creates an object wrapper."
    },
    "Function": {
      "!type": "fn(body: string) -> fn()",
      "prototype": {
        "!stdProto": "Function",
        "apply": {
          "!type": "fn(this: ?, args: [?])",
          "!effects": [
            "call and return !this this=!0 !1.<i> !1.<i> !1.<i>"
          ],
          "!doc": "Calls a function with a given this value and arguments provided as an array (or an array like object)."
        },
        "call": {
          "!type": "fn(this: ?, args?: ?) -> !this.!ret",
          "!effects": [
            "call and return !this this=!0 !1 !2 !3 !4"
          ],
          "!doc": "Calls a function with a given this value and arguments provided individually."
        },
        "bind": {
          "!type": "fn(this: ?, args?: ?) -> !custom:Function_bind",
          "!doc": "Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function was called."
        },
        "prototype": "?"
      },
      "!doc": "Every function in JavaScript is actually a Function object."
    },
    "Array": {
      "!type": "fn(size: number) -> !custom:Array_ctor",
      "isArray": {
        "!type": "fn(value: ?) -> bool",
        "!doc": "Returns true if an object is an array, false if it is not."
      },
      "from": {
        "!type": "fn(arrayLike: ?, mapFn?: fn(elt: ?, i: number) -> ?, thisArg?: ?) -> [!0.<i>]",
        "!effects": [
          "call !1 this=!2 !0.<i> number"
        ],
        "!doc": "The Array.from() method creates a new Array instance from an array-like or iterable object.",
      },
      "of": {
        "!type": "fn(elementN: ?) -> [!0]",
        "!doc": "The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.",
      },
      "prototype": {
        "!stdProto": "Array",
        "length": {
          "!type": "number",
          "!doc": "An unsigned, 32-bit integer that specifies the number of elements in an array."
        },
        "concat": {
          "!type": "fn(other: [?]) -> !this",
          "!doc": "Returns a new array comprised of this array joined with other array(s) and/or value(s)."
        },
        "join": {
          "!type": "fn(separator?: string) -> string",
          "!doc": "Joins all elements of an array into a string."
        },
        "splice": {
          "!type": "fn(pos: number, amount: number, newelt?: ?) -> [?]",
          "!doc": "Changes the content of an array, adding new elements while removing old elements."
        },
        "pop": {
          "!type": "fn() -> !this.<i>",
          "!doc": "Removes the last element from an array and returns that element."
        },
        "push": {
          "!type": "fn(newelt: ?) -> number",
          "!effects": [
            "propagate !0 !this.<i>"
          ],
          "!doc": "Mutates an array by appending the given elements and returning the new length of the array."
        },
        "shift": {
          "!type": "fn() -> !this.<i>",
          "!doc": "Removes the first element from an array and returns that element. This method changes the length of the array."
        },
        "unshift": {
          "!type": "fn(newelt: ?) -> number",
          "!effects": [
            "propagate !0 !this.<i>"
          ],
          "!doc": "Adds one or more elements to the beginning of an array and returns the new length of the array."
        },
        "slice": {
          "!type": "fn(from?: number, to?: number) -> !this",
          "!doc": "Returns a shallow copy of a portion of an array."
        },
        "reverse": {
          "!type": "fn()",
          "!doc": "Reverses an array in place.  The first array element becomes the last and the last becomes the first."
        },
        "sort": {
          "!type": "fn(compare?: fn(a: ?, b: ?) -> number)",
          "!effects": [
            "call !0 !this.<i> !this.<i>"
          ],
          "!doc": "Sorts the elements of an array in place and returns the array."
        },
        "indexOf": {
          "!type": "fn(elt: ?, from?: number) -> number",
          "!doc": "Returns the first index at which a given element can be found in the array, or -1 if it is not present."
        },
        "lastIndexOf": {
          "!type": "fn(elt: ?, from?: number) -> number",
          "!doc": "Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex."
        },
        "filter": {
          "!type": "fn(test: fn(elt: ?, i: number, array: +Array) -> bool, context?: ?) -> !this",
          "!effects": [
            "call !0 this=!1 !this.<i> number !this"
          ],
          "!doc": "Creates a new array with all elements that pass the test implemented by the provided function."
        },
        "forEach": {
          "!type": "fn(f: fn(elt: ?, i: number, array: +Array), context?: ?)",
          "!effects": [
            "call !0 this=!1 !this.<i> number !this"
          ],
          "!doc": "Executes a provided function once per array element."
        },
        "map": {
          "!type": "fn(f: fn(elt: ?, i: number, array: +Array) -> ?, context?: ?) -> [!0.!ret]",
          "!effects": [
            "call !0 this=!1 !this.<i> number !this"
          ],
          "!doc": "Creates a new array with the results of calling a provided function on every element in this array."
        },
        "reduce": {
          "!type": "fn(combine: fn(sum: ?, elt: ?, i: number, array: +Array) -> ?, init?: ?) -> !0.!ret",
          "!effects": [
            "call !0 !1 !this.<i> number !this"
          ],
          "!doc": "Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value."
        },
        "fill": {
          "!type": "fn(value: ?, start?: number, end?: number) -> !this",
          "!doc": "The fill() method fills all the elements of an array from a start index to an end index with a static value.",
        },
        "find": {
          "!type": "fn(callback: fn(element: ?, index: number, array: [?]) -> bool, thisArg?: ?) -> !this.<i>",
          "!effects": ["call !0 this=!2 !this.<i> number"],
          "!doc": "The find() method returns a value in the array, if an element in the array satisfies the provided testing function. Otherwise undefined is returned.",
        },
        "findIndex": {
          "!type": "fn(callback: fn(element: ?, index: number, array: [?]), thisArg?: ?) -> number",
          "!effects": ["call !0 this=!2 !this.<i> number"],
          "!doc": "The findIndex() method returns an index in the array, if an element in the array satisfies the provided testing function. Otherwise -1 is returned.",
        },
        "keys": {
          "!type": "fn() -> +iter[:t=number]",
          "!doc": "The keys() method returns a new Array Iterator that contains the keys for each index in the array.",
        },
        "values": {
          "!type": "fn() -> +iter[:t=!this.<i>]",
          "!doc": "The values() method returns a new Array Iterator object that contains the values for each index in the array.",
        },
        "includes": {
          "!type": "fn(value: ?, fromIndex?: number) -> bool",
          "!doc": "Determines whether an array includes a certain element, returning true or false as appropriate.",
        }
      },
      "!doc": "The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects."
    },
    "String": {
      "!type": "fn(value: ?) -> string",
      "prototype": {
        "!stdProto": "String",
        "length": {
          "!type": "number",
          "!doc": "Represents the length of a string."
        },
        "<i>": "string",
        "charAt": {
          "!type": "fn(i: number) -> string",
          "!doc": "Returns the specified character from a string."
        },
        "charCodeAt": {
          "!type": "fn(i: number) -> number",
          "!doc": "Returns the numeric Unicode value of the character at the given index (except for unicode codepoints > 0x10000)."
        },
        "indexOf": {
          "!type": "fn(char: string, from?: number) -> number",
          "!doc": "Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex,\nreturns -1 if the value is not found."
        },
        "lastIndexOf": {
          "!type": "fn(char: string, from?: number) -> number",
          "!doc": "Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found. The calling string is searched backward, starting at fromIndex."
        },
        "substring": {
          "!type": "fn(from: number, to?: number) -> string",
          "!doc": "Returns a subset of a string between one index and another, or through the end of the string."
        },
        "substr": {
          "!type": "fn(from: number, length?: number) -> string",
          "!doc": "Returns the characters in a string beginning at the specified location through the specified number of characters."
        },
        "slice": {
          "!type": "fn(from: number, to?: number) -> string",
          "!doc": "Extracts a section of a string and returns a new string."
        },
        "padStart": {
          "!type": "fn(targetLength: number, padString?: string) -> string",
          "!doc": "Pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length."
        },
        "padEnd": {
          "!type": "fn(targetLength: number, padString?: string) -> string",
          "!doc": "pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length."
        },
        "trim": {
          "!type": "fn() -> string",
          "!doc": "Removes whitespace from both ends of the string."
        },
        "trimStart": {
          "!type": "fn() -> string",
          "!doc": "Removes whitespace from the beginning of a string. "
        },
        "trimEnd": {
          "!type": "fn() -> string",
          "!doc": "Removes whitespace from the end of a string."
        },
        "toUpperCase": {
          "!type": "fn() -> string",
          "!doc": "Returns the calling string value converted to uppercase."
        },
        "toLowerCase": {
          "!type": "fn() -> string",
          "!doc": "Returns the calling string value converted to lowercase."
        },
        "split": {
          "!type": "fn(pattern?: string|+RegExp, limit?: number) -> [string]",
          "!doc": "Splits a String object into an array of strings by separating the string into substrings."
        },
        "concat": {
          "!type": "fn(other: string) -> string",
          "!doc": "Combines the text of two or more strings and returns a new string."
        },
        "match": {
          "!type": "fn(pattern: +RegExp) -> [string]",
          "!doc": "Used to retrieve the matches when matching a string against a regular expression."
        },
        "replace": {
          "!type": "fn(pattern: string|+RegExp, replacement: string) -> string",
          "!doc": "Returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match."
        },
        "endsWith": {
          "!type": "fn(searchString: string, position?: number) -> bool",
          "!doc": "The endsWith() method determines whether a string ends with the characters of another string, returning true or false as appropriate.",
        },
        "startsWith": {
          "!type": "fn(searchString: string, position?: number) -> bool",
          "!doc": "The startsWith() method determines whether a string begins with the characters of another string, returning true or false as appropriate.",
        }
      },
      "!doc": "The String global object is a constructor for strings, or a sequence of characters."
    },
    "Number": {
      "!type": "fn(value: ?) -> number",
      "MAX_VALUE": {
        "!type": "number",
        "!doc": "The maximum numeric value representable in JavaScript."
      },
      "MIN_VALUE": {
        "!type": "number",
        "!doc": "The smallest positive numeric value representable in JavaScript."
      },
      "POSITIVE_INFINITY": {
        "!type": "number",
        "!doc": "A value representing the positive Infinity value."
      },
      "NEGATIVE_INFINITY": {
        "!type": "number",
        "!doc": "A value representing the negative Infinity value."
      },
      "prototype": {
        "!stdProto": "Number",
        "toString": {
          "!type": "fn(radix?: number) -> string",
          "!doc": "Returns a string representing the specified Number object"
        },
        "toFixed": {
          "!type": "fn(digits: number) -> string",
          "!doc": "Formats a number using fixed-point notation"
        },
        "toExponential": {
          "!type": "fn(digits: number) -> string",
          "!doc": "Returns a string representing the Number object in exponential notation"
        },
        "toPrecision": {
          "!type": "fn(digits: number) -> string",
          "!doc": "The toPrecision() method returns a string representing the number to the specified precision."
        }
      },
      "EPSILON": {
        "!type": "number",
        "!doc": "The Number.EPSILON property represents the difference between one and the smallest value greater than one that can be represented as a Number.",
      },
      "MAX_SAFE_INTEGER": {
        "!type": "number",
        "!doc": "The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (2^53 - 1).",
      },
      "MIN_SAFE_INTEGER": {
        "!type": "number",
        "!doc": "The Number.MIN_SAFE_INTEGER constant represents the minimum safe integer in JavaScript (-(2^53 - 1)).",
      },
      "isFinite": {
        "!type": "fn(testValue: ?) -> bool",
        "!doc": "The Number.isFinite() method determines whether the passed value is finite.",
      },
      "isInteger": {
        "!type": "fn(testValue: ?) -> bool",
        "!doc": "The Number.isInteger() method determines whether the passed value is an integer.",
      },
      "isNaN": {
        "!type": "fn(testValue: ?) -> bool",
        "!doc": "The Number.isNaN() method determines whether the passed value is NaN. More robust version of the original global isNaN().",
      },
      "isSafeInteger": {
        "!type": "fn(testValue: ?) -> bool",
        "!doc": "The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer. A safe integer is an integer that",
      },
      "parseFloat": {
        "!type": "fn(string: string) -> number",
        "!doc": "The Number.parseFloat() method parses a string argument and returns a floating point number.",
      },
      "parseInt": {
        "!type": "fn(string: string, radix?: number) -> number",
        "!doc": "The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.",
      },
      "!doc": "The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor."
    },
    "Boolean": {
      "!type": "fn(value: ?) -> bool",
      "prototype": {
        "!stdProto": "Boolean"
      },
      "!doc": "The Boolean object is an object wrapper for a boolean value."
    },
    "RegExp": {
      "!type": "fn(source: string, flags?: string)",
      "prototype": {
        "!stdProto": "RegExp",
        "exec": {
          "!type": "fn(input: string) -> [string]",
          "!doc": "Executes a search for a match in a specified string. Returns a result array, or null."
        },
        "test": {
          "!type": "fn(input: string) -> bool",
          "!doc": "Executes the search for a match between a regular expression and a specified string. Returns true or false."
        }
      },
      "!doc": "Creates a regular expression object for matching text with a pattern."
    },
    "parseInt": {
      "!type": "fn(string: string, radix?: number) -> number",
      "!doc": "Parses a string argument and returns an integer of the specified radix or base."
    },
    "parseFloat": {
      "!type": "fn(string: string) -> number",
      "!doc": "Parses a string argument and returns a floating point number."
    },
    "isNaN": {
      "!type": "fn(value: number) -> bool",
      "!doc": "Determines whether a value is NaN or not. Be careful, this function is broken. You may be interested in ECMAScript 6 Number.isNaN."
    },
    "isFinite": {
      "!type": "fn(value: number) -> bool",
      "!doc": "Determines whether the passed value is a finite number."
    },
    "eval": {
      "!type": "fn(code: string) -> ?",
      "!doc": "Evaluates JavaScript code represented as a string."
    },
    "encodeURI": {
      "!type": "fn(uri: string) -> string",
      "!doc": "Encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two \"surrogate\" characters)."
    },
    "encodeURIComponent": {
      "!type": "fn(uri: string) -> string",
      "!doc": "Encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two \"surrogate\" characters)."
    },
    "decodeURI": {
      "!type": "fn(uri: string) -> string",
      "!doc": "Decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine."
    },
    "decodeURIComponent": {
      "!type": "fn(uri: string) -> string",
      "!doc": "Decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine."
    },
    "Math": {
      "E": {
        "!type": "number",
        "!doc": "The base of natural logarithms, e, approximately 2.718."
      },
      "LN2": {
        "!type": "number",
        "!doc": "The natural logarithm of 2, approximately 0.693."
      },
      "LN10": {
        "!type": "number",
        "!doc": "The natural logarithm of 10, approximately 2.302."
      },
      "LOG2E": {
        "!type": "number",
        "!doc": "The base 2 logarithm of E (approximately 1.442)."
      },
      "LOG10E": {
        "!type": "number",
        "!doc": "The base 10 logarithm of E (approximately 0.434)."
      },
      "SQRT1_2": {
        "!type": "number",
        "!doc": "The square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707."
      },
      "SQRT2": {
        "!type": "number",
        "!doc": "The square root of 2, approximately 1.414."
      },
      "PI": {
        "!type": "number",
        "!doc": "The ratio of the circumference of a circle to its diameter, approximately 3.14159."
      },
      "abs": {
        "!type": "fn(number) -> number",
        "!doc": "Returns the absolute value of a number."
      },
      "cos": {
        "!type": "fn(number) -> number",
        "!doc": "Returns the cosine of a number."
      },
      "sin": {
        "!type": "fn(number) -> number",
        "!doc": "Returns the sine of a number."
      },
      "tan": {
        "!type": "fn(number) -> number",
        "!doc": "Returns the tangent of a number."
      },
      "acos": {
        "!type": "fn(number) -> number",
        "!doc": "Returns the arccosine (in radians) of a number."
      },
      "asin": {
        "!type": "fn(number) -> number",
        "!doc": "Returns the arcsine (in radians) of a number."
      },
      "atan": {
        "!type": "fn(number) -> number",
        "!doc": "Returns the arctangent (in radians) of a number."
      },
      "atan2": {
        "!type": "fn(y: number, x: number) -> number",
        "!doc": "Returns the arctangent of the quotient of its arguments."
      },
      "ceil": {
        "!type": "fn(number) -> number",
        "!doc": "Returns the smallest integer greater than or equal to a number."
      },
      "floor": {
        "!type": "fn(number) -> number",
        "!doc": "Returns the largest integer less than or equal to a number."
      },
      "round": {
        "!type": "fn(number) -> number",
        "!doc": "Returns the value of a number rounded to the nearest integer."
      },
      "exp": {
        "!type": "fn(number) -> number",
        "!doc": "Returns E^x, where x is the argument, and E is Euler's constant, the base of the natural logarithms."
      },
      "log": {
        "!type": "fn(number) -> number",
        "!doc": "Returns the natural logarithm (base E) of a number."
      },
      "sqrt": {
        "!type": "fn(number) -> number",
        "!doc": "Returns the square root of a number."
      },
      "pow": {
        "!type": "fn(number, number) -> number",
        "!doc": "Returns base to the exponent power, that is, baseexponent."
      },
      "max": {
        "!type": "fn(number, number) -> number",
        "!doc": "Returns the largest of zero or more numbers."
      },
      "min": {
        "!type": "fn(number, number) -> number",
        "!doc": "Returns the smallest of zero or more numbers."
      },
      "random": {
        "!type": "fn() -> number",
        "!doc": "Returns a floating-point, pseudo-random number in the range [0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range."
      },
      "log10": {
        "!type": "fn(x: number) -> number",
        "!doc": "The Math.log10() function returns the base 10 logarithm of a number.",
      },
      "log2": {
        "!type": "fn(x: number) -> number",
        "!doc": "The Math.log2() function returns the base 2 logarithm of a number.",
      },
      "sign": {
        "!type": "fn(x: number) -> number",
        "!doc": "The Math.sign() function returns the sign of a number, indicating whether the number is positive, negative or zero.",
      },
      "trunc": {
        "!type": "fn(x: number) -> number",
        "!doc": "The Math.trunc() function returns the integral part of a number by removing any fractional digits. It does not round any numbers. The function can be expressed with the floor() and ceil() function:",
      },
      "!doc": "A built-in object that has properties and methods for mathematical constants and functions."
    },
    "JSON": {
      "parse": {
        "!type": "fn(json: string, reviver?: fn(key: string, value: ?) -> ?) -> ?",
        "!doc": "Parse a string as JSON, optionally transforming the value produced by parsing."
      },
      "stringify": {
        "!type": "fn(value: ?, replacer?: fn(key: string, value: ?) -> ?, space?: string|number) -> string",
        "!doc": "Convert a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified."
      },
      "!doc": "JSON (JavaScript Object Notation) is a data-interchange format.  It closely resembles a subset of JavaScript syntax, although it is not a strict subset. (See JSON in the JavaScript Reference for full details.)  It is useful when writing any kind of JavaScript-based application, including websites and browser extensions.  For example, you might store user information in JSON format in a cookie, or you might store extension preferences in JSON in a string-valued browser preference."
    }
  },
  {
    "!name": "core",
    "!define": {
      "flag": {
        "!doc": "当前变量",
        "hard": {
          "!type": "number",
          "!doc": "当前难度编号"
        },
        "hatred":{
          "!type": "number",
          "!doc": "当前仇恨值"
        },
        "poison":{
          "!type": "bool",
          "!doc": "是否处于中毒状态"
        },
        "weak":{
          "!type": "number",
          "!doc": "是否处于衰弱状态"
        },
        "curse":{
          "!type": "number",
          "!doc": "是否处于诅咒状态"
        },
        "no_zone": {
          "!type": "bool",
          "!doc": "无视领域伤害"
        },
        "no_repulse": {
          "!type": "bool",
          "!doc": "无视阻击伤害"
        },
        "no_lasel": {
          "!type": "bool",
          "!doc": "无视激光伤害"
        },
        "no_ambush": {
          "!type": "bool",
          "!doc": "无视捕捉"
        },
        "__bgm__": {
          "!type": "string",
          "!doc": "背景音乐"
        },
        "__weather__": {
          "!doc": "天气"
        },
        "__color__": {
          "!doc": "色调"
        },
        "__volume__": {
          "!type": "number",
          "!doc": "音量"
        },
        "skill": {
          "!type": "number",
          "!doc": "当前开启的技能编号"
        },
        "skillName": {
          "!type": "string",
          "!doc": "当前开启的技能名"
        },
        "input": {
          "!type": "string|number",
          "!doc": "等待用户输入后的存放值"
        },
        "type": {
          "!type": "number",
          "!doc": "等待用户操作后获得的操作类型"
        },
        "keycode": {
          "!type": "number",
          "!doc": "等待用户操作后用户按键的键值"
        },
        "x": {
          "!type": "number",
          "!doc": "等待用户操作后用户点击的网格横坐标"
        },
        "y": {
          "!type": "number",
          "!doc": "等待用户操作后用户点击的网格纵坐标"
        },
        "px": {
          "!type": "number",
          "!doc": "等待用户操作后用户点击的像素横坐标"
        },
        "py": {
          "!type": "number",
          "!doc": "等待用户操作后用户点击的像素纵坐标"
        },
        "__visited__": {
          "!doc": "当前访问过的楼层"
        },
        "cannotMoveDirectly": {
          "!type": "bool",
          "!doc": "当前是否全局不可瞬移"
        },
      },
      "hero": {
        "!doc": "勇士当前属性",
        "image": {
          "!type": "string",
          "!doc": "行走图"
        },
        "animate": {
          "!type": "bool",
          "!doc": "是否开启帧动画"
        },
        "name": {
          "!type": "string",
          "!doc": "勇士名"
        },
        "lv": {
          "!type": "number",
          "!doc": "勇士等级"
        },
        "hpmax": {
          "!type": "number",
          "!doc": "勇士生命上限"
        },
        "hp": {
          "!type": "number",
          "!doc": "勇士当前生命值"
        },
        "atk": {
          "!type": "number",
          "!doc": "勇士当前攻击力"
        },
        "def": {
          "!type": "number",
          "!doc": "勇士当前防御力"
        },
        "manamax": {
          "!type": "number",
          "!doc": "勇士当前魔力上限，负数无效"
        },
        "mana": {
          "!type": "number",
          "!doc": "勇士当前魔力值"
        },
        "mdef": {
          "!type": "number",
          "!doc": "勇士当前护盾值"
        },
        "money": {
          "!type": "number",
          "!doc": "勇士当前金币"
        },
        "exp": {
          "!type": "number",
          "!doc": "勇士当前经验"
        },
        "equipment": {
          "!type": "[string]",
          "!doc": "勇士当前装备"
        },
        "items": {
          "!doc": "勇士当前道具",
          "constants": {
            "!doc": "永久道具"
          },
          "tools": {
            "!doc": "消耗道具",
            "yellowKey": {
              "!type": "number",
              "!doc": "黄钥匙个数"
            },
            "blueKey": {
              "!type": "number",
              "!doc": "蓝钥匙个数"
            },
            "redKey": {
              "!type": "number",
              "!doc": "红钥匙个数"
            },
            "greenKey": {
              "!type": "number",
              "!doc": "绿钥匙个数"
            },
            "steelKey": {
              "!type": "number",
              "!doc": "铁门钥匙个数"
            },
          },
          "equips": {
            "!doc": "未装备上的装备"
          },
        },
        "loc": {
          "!doc": "勇士当前坐标和朝向",
          "x": {
            "!type": "number",
            "!doc": "当前x坐标"
          },
          "y": {
            "!type": "number",
            "!doc": "当前y坐标"
          },
          "direction": {
            "!type": "number",
            "!doc": "当前朝向"
          },
        },
        "flags": {
          "!type": "flag",
          "!doc": "当前游戏中用到的变量"
        },
        "followers": {
          "!type": "[?]",
          "!doc": "跟随者信息"
        },
        "steps": {
          "!type": "number",
          "!doc": "当前步数"
        }
      },
      "block": {
        "!doc": "地图图块信息",
        "x": {
          "!type": "number",
          "!doc": "图块的x坐标"
        },
        "y": {
          "!type": "number",
          "!doc": "图块的y坐标"
        },
        "id": {
          "!type": "number",
          "!doc": "图块的数字"
        },
        "event": {
          "!doc": "图块上的事件信息",
          "id": {
            "!type": "string",
            "!doc": "图块的ID"
          },
          "cls": {
            "!type": "string",
            "!doc": "图块的类别，一般为所在图片名去掉后缀"
          },
          "disabled": {
            "!type": "bool",
            "!doc": "启用状态"
          }
        }
      },
      "enemy": {
        "!doc": "怪物信息",
        "id": {
          "!type": "string",
          "!doc": "怪物ID"
        },
        "name": {
          "!type": "string",
          "!doc": "怪物名称"
        },
        "displayIdInBook": {
          "!type": "string",
          "!doc": "在怪物手册映射ID"
        },
        "hp": {
          "!type": "number",
          "!doc": "怪物生命值"
        },
        "atk": {
          "!type": "number",
          "!doc": "怪物攻击"
        },
        "def": {
          "!type": "number",
          "!doc": "怪物防御"
        },
        "money": {
          "!type": "number",
          "!doc": "怪物金币"
        },
        "exp": {
          "!type": "number",
          "!doc": "怪物经验"
        },
        "special": {
          "!type": "[number]",
          "!doc": "怪物特殊属性"
        },
        "point": {
          "!type": "number",
          "!doc": "怪物加点"
        },
        "value": {
          "!type": "number",
          "!doc": "怪物特殊属性值：阻激夹域伤害值；吸血比例；光环增加生命比例"
        },
        "zoneSquare": {
          "!type": "bool",
          "!doc": "领域怪是否九宫格伤害；区域光环是否九宫格范围"
        },
        "range": {
          "!type": "number",
          "!doc": "领域伤害的范围；区域光环范围"
        },
        "notBomb": {
          "!type": "bool",
          "!doc": "怪物不可炸"
        },
        "n": {
          "!type": "number",
          "!doc": "多连击的连击数；净化比例"
        },
        "add": {
          "!type": "bool",
          "!doc": "吸血是否加到自身；光环是否叠加"
        },
        "atkValue": {
          "!type": "number",
          "!doc": "反击比例；退化扣除攻击；光环增加攻击；"
        },
        "defValue": {
          "!type": "number",
          "!doc": "破甲比例；退化扣除防御；光环增加防御"
        },
        "damage": {
          "!type": "number",
          "!doc": "固伤值"
        },
      },
      "item":{
        "!doc": "道具信息",
        "id": {
          "!type": "string",
          "!doc": "道具ID"
        },
        "cls": {
          "!type": "string",
          "!doc": "道具类型"
        },
        "name": {
          "!type": "string",
          "!doc": "道具名称"
        },
        "text": {
          "!type": "string",
          "!doc": "道具描述"
        },
        "hideInToolbox": {
          "!type": "bool",
          "!doc": "不显示在道具栏"
        },
        "equip": {
          "!doc": "装备属性",
          "type": {
            "!type": "number|string",
            "!doc": "装备类型"
          },
          "animate": {
            "!type": "string",
            "!doc": "装备动画"
          },
          "value": {
            "!doc": "数值加成"
          },
          "percentage": {
            "!doc": "比例加成"
          }
        },
        "hideInReplay": {
          "!type": "bool",
          "!doc": "回放不绘制道具栏"
        },
      },
      "floor": {
        "!doc": "楼层信息",
        "floorId": {
          "!type": "string",
          "!doc": "楼层ID"
        },
        "title": {
          "!type": "string",
          "!doc": "楼层中文名"
        },
        "name": {
          "!type": "string",
          "!doc": "状态栏显示值"
        },
        "width": {
          "!type": "number",
          "!doc": "地图宽"
        },
        "height": {
          "!type": "number",
          "!doc": "地图高"
        },
        "canFlyTo": {
          "!type": "bool",
          "!doc": "该楼是否可以楼传，包括飞来和飞走"
        },
        "canUseQuickShop": {
          "!type": "bool",
          "!doc": "该楼是否可快捷商店"
        },
        "cannotViewMap": {
          "!type": "bool",
          "!doc": "该层是否不允许被浏览地图看到，也不统计"
        },
        "cannotMoveDirectly": {
          "!type": "bool",
          "!doc": "该层是否不允许瞬间移动"
        },
        "upFloor": {
          "!type": "[number]",
          "!doc": "上楼点"
        },
        "downFloor": {
          "!type": "[number]",
          "!doc": "下楼点"
        },
        "flyPoint": {
          "!type": "[number]",
          "!doc": "楼传落点"
        },
        "color": {
          "!doc": "楼层色调"
        },
        "weather": {
          "!doc": "楼层天气"
        },
        "bgm": {
          "!type": "string",
          "!doc": "楼层背景音乐"
        },
        "ratio": {
          "!type": "number",
          "!doc": "宝石/血瓶效果"
        },
        "map": {
          "!type": "[[number]]",
          "!doc": "地图数据"
        },
        "blocks": {
          "!type": "[block]",
          "!doc": "本层图块信息"
        }
      },
      "animate": {
        "!doc": "动画信息",
        "se": {
          "!type": "string",
          "!doc": "动画音效"
        }
      }
    },
    "core": {
      "!doc": "核心游戏控制",
      "__SIZE__": {
        "!type": "number",
        "!doc": "窗口宽度，为13或15"
      },
      "__PIXELS__": {
        "!type": "number",
        "!doc": "窗口像素宽度，为416或480"
      },
      "__HALF_SIZE__": {
        "!type": "number",
        "!doc": "窗口宽度的一半，为6或7"
      },
      "material": {
        "!doc": "游戏所用到的资源",
        "animates": {
          "!doc": "注册的动画"
        },
        "images": {
          "!doc": "注册的图片"
        },
        "bgms": {
          "!doc": "注册的背景音乐"
        },
        "sounds": {
          "!doc": "注册的音效"
        },
        "enemys": {
          "!doc": "怪物定义",
        },
        "items": {
          "!doc": "道具定义"
        }
      },
      "timeout": {
        "!doc": "当前异步事件句柄"
      },
      "interval": {
        "!doc": "当前异步事件延时"
      },
      "animateFrame": {
        "!doc": "当前各个帧动画"
      },
      "musicStatus": {
        "!doc": "音乐音效状态",
        "bgmStatus": {
          "!type": "bool",
          "!doc": "是否播放BGM"
        },
        "soundStatus": {
          "!type": "bool",
          "!doc": "是否播放SE"
        },
        "playingBgm": {
          "!type": "string",
          "!doc": "正在播放的bgm"
        },
        "lastBgm": {
          "!type": "string",
          "!doc": "上次播放的bgm"
        },
        "playingSounds": {
          "!doc": "正在播放的SE"
        },
        "volume": {
          "!type": "number",
          "!doc": "当前bgm音量"
        }
      },
      "platform": {
        "!doc": "平台信息",
        "isPC": "bool",
        "isAndroid": "bool",
        "isIOS": "bool",
        "useLocalForage": "bool"
      },
      "domStyle": {
        "!doc": "界面样式",
        "scale": {
          "!type": "number",
          "!doc": "当前界面放缩比例",
        },
        "availableScale": {
          "!type": "[number]",
          "!doc": "当前界面支持的放缩比例"
        },
        "isVertical": {
          "!type": "bool",
          "!doc": "当前是否是竖屏"
        },
        "showStatusBar": {
          "!type": "bool",
          "!doc": "当前是否显示状态栏"
        },
        "toolbarBtn": {
          "!type": "bool",
          "!doc": "当前工具栏是否是1-8的按钮"
        },
      },
      "bigmap": {
        "!doc": "大地图信息",
        "canvas": {
          "!type": "[string]",
          "!doc": "大地图的画布"
        },
        "width": {
          "!type": "number",
          "!doc": "大地图高度"
        },
        "height": {
          "!type": "number",
          "!doc": "大地图宽度"
        },
        "offsetX": {
          "!type": "number",
          "!doc": "大地图视角横向偏移量"
        },
        "offsetY": {
          "!type": "number",
          "!doc": "大地图视角纵向偏移量"
        },
        "tempCanvas": {
          "!type": "CanvasRenderingContext2D",
          "!doc": "临时画布"
        }
      },
      "saves": {
        "!doc": "当前存档信息"
      },
      "dymCanvas": {
        "!doc": "各个自定义画布"
      },
      "statusBar": {
        "!doc": "状态栏信息"
      },
      "canvas": {
        "!doc": "系统画布"
      },
      "flags": {
        "!doc": "系统开关"
      },
      "values": {
        "!doc": "全局数值，如毒衰效果"
      },
      "firstData": {
        "!doc": "初始属性，如出生点"
      },
      "status": {
        "!doc": "状态信息",
        "hero": {
          "!type": "hero",
          "!doc": "勇士信息"
        },
        "automaticRoute": {
          "!doc": "自动寻路信息"
        },
        "bgmaps": {
          "!doc": "各地图背景层"
        },
        "fgmaps": {
          "!doc": "各地图前景层"
        },
        "boxAnimateObjs": {
          "!doc": "（手册和剧情文本的）帧动画对象"
        },
        "checkBlock": {
          "!doc": "阻激夹域捕捉信息",
          "damage": {
            "!doc": "每个点的伤害信息"
          },
          "type": {
            "!doc": "每个点的伤害类型"
          },
          "repluse": {
            "!doc": "每个点的阻击信息"
          },
          "ambush": {
            "!doc": "每个点的捕捉信息"
          },
          "needCache": {
            "!type": "bool",
            "!doc": "该楼层是否需要计算缓存"
          },
          "cache": {
            "!doc": "每个点的光环缓存"
          },
        },
        "ctrlDown": {
          "!type": "bool",
          "!doc": "Ctrl键是否被按下"
        },
        "curtainColor": {
          "!doc": "当前画面色调"
        },
        "event": {
          "!doc": "当前事件",
          "data": {
            "!doc": "事件信息，如坐标等"
          },
          "id": {
            "!type": "string",
            "!doc": "事件类型，如选择项/确认框"
          },
          "interval": {
            "!type": "number",
            "!doc": "打字机效果的定时器"
          },
          "selection": {
            "!type": "number",
            "!doc": "选择项和确认框的当前选中项"
          },
          "ui": {
            "!doc": "当前事件的界面信息，如楼传/手册/SL"
          }
        },
        "floorAnimateObjs": {
          "!doc": "楼层贴图的帧动画"
        },
        "floorId": {
          "!type": "string",
          "!doc": "当前楼层ID"
        },
        "gameOver": {
          "!type": "bool",
          "!doc": "游戏是否已结束"
        },
        "globalAnimateObjs": {
          "!doc": "各全局动画"
        },
        "globalAnimateStatus": {
          "!type": "number",
          "!doc": "全局动画的帧状态"
        },
        "globalAttribute": {
          "!doc": "全局css属性"
        },
        "hard": {
          "!type": "string",
          "!doc": "状态栏一角的难度名"
        },
        "downTime": {
          "!type": "number",
          "!doc": "方向键已按下的时间"
        },
        "heroCenter": {
          "!doc": "勇士中心像素坐标",
          "px": {
            "!type": "number",
            "!doc": "勇士中心的横坐标"
          },
          "py": {
            "!type": "number",
            "!doc": "勇士中心的纵坐标"
          },
        },
        "heroMoving": {
          "!type": "number",
          "!doc": "勇士行走的状态值"
        },
        "heroStop": {
          "!type": "bool",
          "!doc": "勇士是否已停下"
        },
        "holdingKeys": {
          "!type": "[number]",
          "!doc": "当前按下的键"
        },
        "id2number": {
          "!doc": "图块ID到数字的对应关系"
        },
        "lockControl": {
          "!type": "bool",
          "!doc": "当前是否是锁定操作状态"
        },
        "maps": {
          "!doc": "当前各地图信息"
        },
        "number2Block": {
          "!doc": "数字到图块对象的对应关系"
        },
        "openingDoor": {
          "!doc": "正在开关的门"
        },
        "played": {
          "!type": "bool",
          "!doc": "当前是否游戏中（不包括标题画面和录像回放）"
        },
        "replay": {
          "!doc": "当前录像回放信息",
          "animate": {
            "!type": "bool",
            "!doc": "回放是否正处于动画中"
          },
          "pausing": {
            "!type": "bool",
            "!doc": "回放是否暂停中"
          },
          "replaying": {
            "!type": "bool",
            "!doc": "当前是否回放中"
          },
          "save": {
            "!type": "[]",
            "!doc": "录像中的存档"
          },
          "speed": {
            "!type": "number",
            "!doc": "回放速度"
          },
          "steps": {
            "!type": "number",
            "!doc": "回放步数"
          },
          "toReplay": {
            "!type": "[string]",
            "!doc": "待回放的列表"
          },
          "totalList": {
            "!type": "[string]",
            "!doc": "回放总列表"
          }
        },
        "route": {
          "!type": "[string]",
          "!doc": "当前录像内容"
        },
        "shops": {
          "!doc": "全局商店列表"
        },
        "textAttribute": {
          "!doc": "当前剧情文本属性"
        },
        "thisMap": {
          "!type": "floor",
          "!doc": "当前地图信息"
        }
      },
      "hasSpecial": {
        "!type": "fn(special: ?, test: number) -> bool",
        "!doc": "判定怪物是否拥有某种特殊属性；special - 怪物的ID、特殊属性值或怪物本身；test - 待检查的的属性编号；"
      },
      "getBlock": {
        "!type": "fn(x?: number, y?: number, floorId?: string, showDisable?: bool) -> {index: number, block: block}",
        "_doc": "返回地图上某个点的图块信息"
      }
    },
    "hero": {
      "!type": "heroStatus",
      "!doc": "勇士信息，为 core.status.hero 的简写",
    },
    "flags": {
      "!doc": "游戏中用到的变量，为 core.status.hero.flags 的简写",
      "hatred":{
        "!type": "number",
        "!doc": "当前仇恨值"
      },
      "poison":{
        "!type": "bool",
        "!doc": "是否处于中毒状态"
      },
      "weak":{
        "!type": "number",
        "!doc": "是否处于衰弱状态"
      },
      "curse":{
        "!type": "number",
        "!doc": "是否处于诅咒状态"
      },
      "no_zone": {
        "!type": "bool",
        "!doc": "无视领域伤害"
      },
      "no_repulse": {
        "!type": "bool",
        "!doc": "无视阻击伤害"
      },
      "no_lasel": {
        "!type": "bool",
        "!doc": "无视激光伤害"
      },
      "no_ambush": {
        "!type": "bool",
        "!doc": "无视捕捉"
      },
      "__bgm__": {
        "!type": "string",
        "!doc": "背景音乐"
      },
      "__weather__": {
        "!doc": "天气"
      },
      "__color__": {
        "!doc": "色调"
      },
    }
  }
];