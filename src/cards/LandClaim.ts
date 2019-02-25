
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { IProjectCard } from "./IProjectCard";
import { Player } from "../Player";
import { Game } from "../Game";
import { SelectSpace } from "../inputs/SelectSpace";
import { ISpace } from "../ISpace";

export class LandClaim implements IProjectCard {
    public cost: number = 1;
    public tags: Array<Tags> = [];
    public name: string = "Land Claim";
    public cardType: CardType = CardType.EVENT;
    public text: string = "Place your marker on a non-reserved area. Only you may place a tile here.";
    public description: string = "Acquiring strategic land areas";
    public play(player: Player, game: Game) {
        return new SelectSpace(this.name, "Select space for claim", game.getAvailableSpacesOnLand(player), (foundSpace: ISpace) => {
            foundSpace.player = player;
            return undefined;
        });
    }
}
