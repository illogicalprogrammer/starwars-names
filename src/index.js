// import uniqueRandomArray from 'unique-random-array';
// import starWarsNames from './starwars-names.json';

// const all = starWarsNames;
// const random = uniqueRandomArray(starWarsNames);

// export {all, random};
import randomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

export const all = starWarsNames;
export const random = randomArray(starWarsNames);

