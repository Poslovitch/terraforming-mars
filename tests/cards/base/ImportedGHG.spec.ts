import {expect} from 'chai';
import {ImportedGHG} from '../../../src/cards/base/ImportedGHG';
import {Game} from '../../../src/Game';
import {Resources} from '../../../src/Resources';
import {TestPlayers} from '../../TestingUtils';

describe('ImportedGHG', function() {
  it('Should play', function() {
    const card = new ImportedGHG();
    const player = TestPlayers.BLUE.newPlayer();
    const game = new Game('foobar', [player, player], player);
    const action = card.play(player, game);
    expect(action).is.undefined;
    expect(player.getProduction(Resources.HEAT)).to.eq(1);
    expect(player.heat).to.eq(3);
  });
});
