export interface WeaponType {
  contentType: string,
  cost: number,
  damageDieModifier: number,
  damageDieType: number,
  damageNumberOfDice: number,
  damageType: string,
  description: string | null,
  equipmentCategory: string,
  modes: WeaponType[],
  name: string,
  properties: string[] | null,
  weaponClassification: string,
  weight: number
}

export interface WeaponPropertyType {
  content: string,
  contentType: string,
  name: string
}

export interface ArmorType {
  ac: number | null,
  armorClassification: string,
  contentType: string,
  cost: number,
  description: string | null,
  equipmentCategory: string,
  name: string,
  stealthDisadvantage: boolean,
  strengthRequirement: string | null,
  weight: number
}

export interface GearType {
  contentType: string,
  cost: number,
  description: string | null,
  equipmentCategory: string,
  name: string,
  weight: number
}

export interface EquipmentType extends GearType, WeaponType, ArmorType {
  equipped?: boolean,
  quantity: number,
  attackBonus?: number,
  damageBonus?: number
}

export interface EnhancedItemType {
  contentType: string,
  name: string,
  type: string,
  rarityOptions: string[],
  searchableRarity: string,
  requiresAttunement: boolean,
  valueOptions: string[],
  valueText: string,
  text: string,
  subtype: string
}