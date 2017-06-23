export class Listing {
  constructor(
    public id: number,
    public blid: string,
    public price: number,
    public track_quantity: true,
    public quantity: number,
    public tax_rate: number,
    public department_id: number,
    public updated_at: string,
    public is_parent: false,
    public name: string,
    public barcode: number,
    public secondary_barcode: number,
    public image_url: string,
    public web_price: number,
    public storefront_allow_negative_quantity: boolean,
    public description: string,
    public child_listings: Array<string>,
    public custom_field_values: Array<string>,
    public child_custom_fields: Array<string>,
    public thumb_image_url: string,
    public big_thumb_image_url: string,
    public small_image_url: string,
    public big_image_url: string,
    public store_id: number,
    public product_id: number,
    public qty_reserved_for_invoice: number,
    public qty_reserved_for_transfer: number,
    public qty_in_transit_from_supplier: number,
    public qty_in_transit_from_transfer: number,
    public qty_stockroom: number,
    public in_store_only: boolean,
    public discontinued: boolean,
    public upc: number,
    public upc_e: number,
    public ean13: number,
    public listing_barcode: number,
    public customized: boolean,
    public deleted: boolean,
    public pricing_type: number,
    public desired_qty: number,
    public reorder_amount: number,
    public cost: number,
    public tax_option_id: number,
    public supplier_id: number,
    public brand_id: number,
    public brand_name: string,
    public category_id: number,
    public category_name: string,
    public parent_id: number,
    public exempt_loyalty: boolean,
    public exempt_discount: boolean,
    public serial_number_enabled: boolean,
    public bpid: string,
    public modifier_set_ids: Array<string>,
    public price_options: Array<string>,
    public variants: Array<string>,
    public suppliers: Array<string>,
    public available_serial_numbers: Array<string>,
    public images: Array<string>
  ) { }
}
