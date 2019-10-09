
import { Tags } from "../Tags";
import { Player } from "../../Player";
import { CorporationCard } from "./../corporation/CorporationCard";
import { IProjectCard } from "../IProjectCard";
import { Game } from "../../Game";

export class ValleyTrust implements CorporationCard {
    public name: string = "Valley Trust";
    public tags: Array<Tags> = [Tags.EARTH];
    public startingMegaCredits: number = 37;
    public text: string = "You start with 37 MC. As your first action, draw 3 Prelude cards, and play one of them. Discard the other two. Effect: When you play an Science tag, you pay 2MC less for it.";
    public description: string = "";

    public getCardDiscount(_player: Player, _game: Game, card: IProjectCard) {
        if (card.tags.indexOf(Tags.SCIENCE) !== -1) {
            return 2;
        }
        return 0;
    }

    public play(player: Player) {
        const cardsDrawn: Array<IProjectCard> = [
            game.dealer.dealPreludeCard(),
            game.dealer.dealPreludeCard(),
            game.dealer.dealPreludeCard()
        ];
        return new SelectCard("Select card to take into hand", cardsDrawn, (foundCards: Array<IProjectCard>) => {
            player.cardsInHand.push(foundCards[0]);
            return undefined;
        });
    }
}
