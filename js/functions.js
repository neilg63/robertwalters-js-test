/*
Functions library for a simple Javascript test

@author Neil Gardner <neilgardner1963@gmail.com>
*/
/*
Prototype extension of Number
to convert integers to a 2 character hex string
Expect this number to an integer and returns 
remainders for numbers >= 256 (16 ^ 2)
*/

Number.prototype.toHexPair = function () {
	let hexVal = (parseInt(this) % 256).toString(16)
	if (hexVal.length < 2) {
		hexVal = '0' + hexVal
	}
	return hexVal;
}

/*
	Convert two Hex colours to an average value
	@param col1 String
	@param col2 String
	@return String
*/
let calcMeanColour = (col1, col2) => {
	let strHex = '#000000'
	let rgb1 = splitHex(col1)
	let rgb2 = splitHex(col2)
	let rgbMean = []
	if (rgb1.length == 3 && rgb2.length == 3) {
		for (let i = 0; i < 3; i++) {
			rgbMean.push( parseInt((rgb1[i] + rgb2[i]) / 2) )
		}
		strHex = '#' + rgbMean.map(c => c.toHexPair()).join('')
	}
	return strHex
}

/*
* Split hex string into array of component rgb values as integers
	@param strHex String
	@return Array<Int>
*/
function splitHex (strHex) {
	let rgb = [];
	if (strHex.constructor === String) {
		// Build regex from components
		let hexComponentMatch = '([0-9a-f][0-9a-f])'
		let regex = new RegExp('#' + hexComponentMatch. repeat(3))
		if (match = strHex.match(regex)) {
			rgb = match.map(m => m)
			  .filter(s => s.length < 3)
			  .map(c => parseInt(c, 16));
		}
	}
	return rgb;
}

/*
* convert a simple array structure into HTML tags
 with optional text or inner tags, but no attributes
	@param Items Array<Any>
	@return String
*/
function itemsToTag(items) {
	let str = ''
	if (items instanceof Array && items.length > 0) {
		let tagName = items.shift()
		str = '<' + tagName
		let end = ' />'
		if (items.length > 0) {
			str += '>'
			str += items.map(item => {
				if (item.constructor === String) {
					return item
				} else if (item instanceof Array) {
					return itemsToTag(item)
				}
			}) . join('')

			str += '</' + tagName + '>'
		} else {
			str += ' />'
		}
	}
	return str
}
