export class Listing {
  constructor(
    public big_image_url: string,
    public name: string,
    public blid: string,
    public price: number,
    public brand_name: string,
    public description: string,
    public product_id: number,
    public qty_stockroom: number,
    public discontinued: boolean,
  ) { }
}
