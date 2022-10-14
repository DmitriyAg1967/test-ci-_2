import healthLevel from '../app';

const reference = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('healthLeveltest', () => {
  const listHero = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },];
  const result = healthLevel(listHero);
  console.log(result);
  expect(result).toEqual(reference);
});
