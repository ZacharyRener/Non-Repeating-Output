fs = require('fs')
const axios = require('axios');

// LZW compression
// https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch
// https://gist.github.com/mr5z/d3b653ae9b82bb8c4c2501a06f3931c6

e=c=>{x='charCodeAt',b=z={},f=c.split(""),d=[],a=f[0],g=256;for(b=1;b<f.length;b++)c=f[b],null!=z[a+c]?a+=c:(d.push(1<a.length?z[a]:a[x](0)),z[a+c]=g,g++,a=c);d.push(1<a.length?z[a]:a[x](0));for(b=0;b<d.length;b++)d[b]=String.fromCharCode(d[b]);return d.join("")}
d=b=>{a=e={},d=b.split(""),c=f=d[0],g=[c],h=o=256;for(b=1;b<d.length;b++)a=d[b].charCodeAt(0),a=h>a?d[b]:e[a]?e[a]:f+c,g.push(a),c=a.charAt(0),e[o]=f+c,o++,f=a;return g.join("")}

axios.get('https://asdfast.beobit.net/api/?length=9999')
  .then(function (response) {
	const loremIpsum = e(response.data.text);
	fs.writeFile('output', loremIpsum, err => {
		console.log(err)
	});
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
