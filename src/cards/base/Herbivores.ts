import {IProjectCard} from '../IProjectCard';
import {Tags} from '../Tags';
import {CardType} from '../CardType';
import {Player} from '../../Player';
import {Game} from '../../Game';
import {ISpace} from '../../ISpace';
import {ResourceType} from '../../ResourceType';
import {TileType} from '../../TileType';
import {Resources} from '../../Resources';
import {CardName} from '../../CardName';
import {IResourceCard} from '../ICard';
import {DecreaseAnyProduction} from '../../deferredActions/DecreaseAnyProduction';

export class Herbivores implements IProjectCard, IResourceCard {
    public cost = 12;
    public tags = [Tags.ANIMAL];
    public cardType = CardType.ACTIVE;
    public name = CardName.HERBIVORES;
    public resourceType = ResourceType.ANIMAL;
    public resourceCount: number = 0;

    public canPlay(player: Player, game: Game): boolean {
      return game.getOxygenLevel() >= 8 - player.getRequirementsBonus(game) && game.someoneHasResourceProduction(Resources.PLANTS, 1);
    }

    public getVictoryPoints(): number {
      return Math.floor(this.resourceCount / 2);
    }

    public onTilePlaced(cardOwner: Player, space: ISpace) {
      if (space.player === cardOwner && space.tile !== undefined && space.tile.tileType === TileType.GREENERY) {
        cardOwner.addResourceTo(this);
      }
    }
    public play(player: Player, game: Game) {
      player.addResourceTo(this);
      game.defer(new DecreaseAnyProduction(player, game, Resources.PLANTS, 1));
      return undefined;
    }
}
