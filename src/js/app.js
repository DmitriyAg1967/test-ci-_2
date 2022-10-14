export default function healthLevel(listHero){
  listHero.sort(function (a, b) {
      if (a.health < b.health) {
          return 1;
      }
      if (a.health > b.health) {
          return -1;
      }
      });
  return listHero;
  };
  















/* export default function healthLevel(gameHero) {
  let result = '';
  if (gameHero.health >= 50) {
    result = 'health';
  } else if (gameHero.health < 50 && gameHero.health > 15) {
    result = 'wounded';
  } else if (gameHero.health <= 15) {
    result = 'critical';
  }
  return result;
} */
