// creating

var emtpyObj = {};

var foo = {
	a: 10,
	b: 20
};

console.log(foo.a); // 10


// constructor

function Foo(a, b) {
	this.a = a;
	this.b = b;
}

var foo = new Foo(10, 20);

console.log(foo); // { a: 10, b: 20, }


// properties

var foo = {};

foo.type = 'dot syntax';
foo['date created'] = 'string with space';
foo[''] = 'even an empty string';

console.log(foo);
//	{
//		type: 'dot syntax',
//		'date created': 'string with space',
//		'': 'even an empty string'
//	};


// Object.create ...

// enumerating properties

var foo = {
	a: 10,
	b: 'bbb'
}

for (var i in foo) {
	console.log(i); // 'a', 'b'
}

var bar = {
	c: 'xyz'
};

bar.__proto__ = foo;

for (var i in bar) {
	console.log(i); // 'c', 'a', 'b'
}

for (var i in bar) {
	if (bar.hasOwnProperty(i)) {
		console.log(i); // 'c'
	}
}

console.log(Object.keys(foo)); // [ 'a', 'b' ]
console.log(Object.keys(bar)); // [ 'c' ]


// prototype ...


// method

var foo = {
	f: function () {
		this.a = 10;
		console.log('hi');
	}
};

console.log(foo.a); // undefined
foo.f(); // 'hi'
console.log(foo.a); // 10


var goodDay = function () {
	return 'good day';
}

var Foo = function () {
	this.goodDay = goodDay;
}

var foo = new Foo();

console.log(foo.goodDay()); // 'good day'


//getters, setters
//
//var o = {
//	a: 7,
//	get b() {
//		return this.a + 1;
//	},
//	set c(x) {
//		this.a = x / 2;
//	}
//};
//
//
//Delete property
//
//var obj = {};
//obj.a = 5;
//obj.b = 12;
//
//delete obj.a;
//
//g = 17;
//delete g; // delete global var
//
//
