
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class SpaceElevator implements IProjectCard {
    public cost: number = 27;
    public tags: Array<Tags> = [Tags.SPACE, Tags.STEEL];
    public name: string = "Space Elevator";
    public cardType: CardType = CardType.ACTIVE;
    public actionText: string = "Spend 1 steel to gain 5 mega credits.";
    public text: string = "Increase your titanium production 1 step. Gain 2 victory points.";
    public description: string = "An ultra-strong cable car up to geo-stationary orbit, enabling reasonable export costs.";
    public play(player: Player, _game: Game) {
        player.titaniumProduction++;
        player.victoryPoints += 2;
        return undefined;
    }
    public action(player: Player, _game: Game) {
        if (player.steel < 1) {
            throw "Must have steel";
        }
        player.steel--;
        player.megaCredits += 5;
        return undefined;
    }
}

