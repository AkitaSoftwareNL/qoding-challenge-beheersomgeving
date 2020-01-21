export class CampaignDTO {
    constructor(
        public name: string,
        public amountTotal: number,
        public amountOpen: number,
        public amountMultiple: number,
        public amountProgram: number,
    ) { }
}
