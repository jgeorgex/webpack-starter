let car = { id: 5000, style: "convertible " };
let id, style;
({ id, style } = car);
// Curly braces are used for code blocks and destructuring.
// So use brackets to wrap destructuring statement so compiler knows its for destructuring.
console.log(id, style); // logs out 5000 convertible
