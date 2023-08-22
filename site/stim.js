// Example stimuli

const stimArray = [
    //1/2 vs 3/5
    { num_1: '<sup>1</sup>&frasl;<sub>2</sub>', num_2: '<sup>3</sup>&frasl;<sub>5</sub>', match: false },
    //6/9 vs 1/2
    { num_1: '<sup>6</sup>&frasl;<sub>9</sub>', num_2: '<sup>1</sup>&frasl;<sub>2</sub>', match: false },
    //3/1 vs 6/2
    { num_1: '<sup>3</sup>&frasl;<sub>1</sub>', num_2: '<sup>6</sup>&frasl;<sub>2</sub>', match: true },
    //14/8 vs 9/3
    { num_1: '<sup>14</sup>&frasl;<sub>8</sub>', num_2: '<sup>9</sup>&frasl;<sub>3</sub>', match: false }
]

const exampleStimArray = [
    //2/4 vs 1/2
    { example_1: '<sup>2</sup>&frasl;<sub>4</sub>', example_2: '<sup>1</sup>&frasl;<sub>2</sub>', match: true },
    //5/6 vs 10/12
    { example_1: '<sup>5</sup>&frasl;<sub>6</sub>', example_2: '<sup>10</sup>&frasl;<sub>12</sub>', match: true },
    //15/2 vs 7/1
    { example_1: '<sup>15</sup>&frasl;<sub>2</sub>', example_2: '<sup>7</sup>&frasl;<sub>1</sub>', match: false },
    //18/4 vs 6/2
    { example_1: '<sup>18</sup>&frasl;<sub>4</sub>', example_2: '<sup>6</sup>&frasl;<sub>2</sub>', match: false },
]

export {exampleStimArray, stimArray};