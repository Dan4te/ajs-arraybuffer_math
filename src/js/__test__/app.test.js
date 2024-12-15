import Daemon from '../daemon.js';
import Magician from '../magician.js';

test('Атака мага без дурмана', () => {
  const gendalf = new Magician('Gendalf');
  gendalf.attack = 100;
  const result = gendalf.attack;
  expect(result(2)).toEqual(90);
});

test('Атака демона под дурманом', () => {
  const diablo = new Daemon('Diablo');
  diablo.attack = 100;
  diablo.stoned = true;
  const result = diablo.attack;
  expect(result(2)).toEqual(85);
});
