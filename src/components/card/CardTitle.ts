import Vue from "vue";
import { CardType } from "../../cards/CardType";

export const CardTitle = Vue.component("CardTitle", {
    props: {
        title: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
            validator: (card: CardType) =>
                Object.values(CardType).includes(card),
        },
    },
    methods: {
        isCorporation: function (): boolean {
            return this.type === CardType.CORPORATION;
        },
        isPrelude: function (): boolean {
            return this.type === CardType.PRELUDE;
        },
        getClasses: function (): string {
            const classes: Array<String> = ["card-title"];
            if (this.type === CardType.AUTOMATED) {
                classes.push("background-color-automated");
            } else if (this.type === CardType.ACTIVE) {
                classes.push("background-color-active");
            } else if (this.type === CardType.EVENT) {
                classes.push("background-color-events");
            } else if (this.type === CardType.PRELUDE) {
                classes.push("background-color-prelude");
            }
            return classes.join(" ");
        },
    },
    template: `
        <div class="card-title">
            <div v-if="isPrelude()" class="prelude-label">prelude</div>
            <div v-if="isCorporation()" class="corporation-label">corporation</div>
            <div v-else :class="getClasses()">{{ title }}</div>
        </div>
    `,
});