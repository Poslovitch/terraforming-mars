
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class Bushes implements IProjectCard {
    public cost: number = 10;
    public tags: Array<Tags> = [Tags.PLANT];
    public cardType: CardType = CardType.AUTOMATED;
    public name: string = "Bushes";
    public text: string = "Requires -10C or warmer. Increase your plant production 2 steps. Gain 2 plants.";
    public description: string = "Giving some wind protection for smaller species.";
    public play(player: Player, game: Game) {
        if (game.getTemperature() < -10) {
            throw "Requires -10C or warmer.";
        }
        player.plantProduction += 2;
        player.plants += 2;
        return undefined;
    }
}
