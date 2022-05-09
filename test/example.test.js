// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { dogs } from '../dogs.js';
import { renderDogLI } from '../utils.js';

const test = QUnit.test;

test('render dogLI should return an li with a link', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><a href="./dog-detail/?id=1">Benny</a></li>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderDogLI(dogs[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
