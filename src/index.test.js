import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

function shouldPass() {
  expect(true).to.equal(true);
}

describe('Our first test' , () => {
  it('Should pass', shouldPass);
});

describe('index.html' , () => {
  it('Should have h1 that says Users', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users');
      done();
      window.close();
    });
  });
});
