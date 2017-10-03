export class ClientCardModel {
    constructor(
      private cardNumber: string,
      private clientName: string,
      private cardBalance: number,
      private spentAmount: number,
      private availableAmount: number,
      private limitAmount: number,
      private imgSource: string,
      private movementsList?: any[]
    ){ }
}
