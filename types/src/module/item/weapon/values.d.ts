declare const WEAPON_CATEGORIES: Set<"unarmed" | "simple" | "martial" | "advanced">;
declare const MELEE_WEAPON_GROUPS: Set<"dart" | "knife" | "axe" | "brawling" | "club" | "flail" | "hammer" | "pick" | "polearm" | "shield" | "spear" | "sword">;
/** Groups that will be forced as ranged weapons */
declare const MANDATORY_RANGED_GROUPS: Set<"bomb" | "bow" | "firearm" | "sling">;
declare const WEAPON_GROUPS: Set<"dart" | "knife" | "axe" | "brawling" | "club" | "flail" | "hammer" | "pick" | "polearm" | "shield" | "spear" | "sword" | "bomb" | "bow" | "firearm" | "sling">;
declare const WEAPON_PROPERTY_RUNE_TYPES: Set<"vorpal" | "speed" | "anarchic" | "ancestralEchoing" | "anchoring" | "ashen" | "authorized" | "axiomatic" | "bane" | "bloodbane" | "bloodthirsty" | "brilliant" | "called" | "coating" | "conducting" | "corrosive" | "crushing" | "cunning" | "dancing" | "deathdrinking" | "demolishing" | "disrupting" | "earthbinding" | "energizing" | "extending" | "fanged" | "fearsome" | "flaming" | "flurrying" | "frost" | "ghostTouch" | "giantKilling" | "greaterGiantKilling" | "greaterAnchoring" | "greaterAshen" | "greaterBloodbane" | "greaterBrilliant" | "greaterCorrosive" | "greaterCrushing" | "greaterDisrupting" | "greaterExtending" | "greaterFanged" | "greaterFearsome" | "greaterFlaming" | "greaterFrost" | "greaterHauling" | "greaterImpactful" | "greaterRooting" | "greaterShock" | "greaterThundering" | "grievous" | "hauling" | "holy" | "hopeful" | "hooked" | "impactful" | "impossible" | "keen" | "kinWarding" | "majorFanged" | "majorRooting" | "merciful" | "pacifying" | "returning" | "rooting" | "serrating" | "shifting" | "shock" | "spellStoring" | "swarming" | "thundering" | "trueRooting" | "underwater" | "unholy" | "wounding">;
declare const THROWN_RANGES: Set<10 | 20 | 30 | 15 | 40 | 60 | 80 | 100>;
declare const WEAPON_RANGES: Set<10 | 20 | 200 | 30 | 15 | 40 | 50 | 60 | 80 | 90 | 100 | 120 | 70 | 140 | 150 | 180 | 240 | 300>;
declare const CROSSBOW_WEAPONS: Set<"alchemical-crossbow" | "crossbow" | "hand-crossbow" | "heavy-crossbow" | "repeating-crossbow" | "repeating-hand-crossbow" | "repeating-heavy-crossbow" | "taw-launcher">;
export { CROSSBOW_WEAPONS, MELEE_WEAPON_GROUPS, MANDATORY_RANGED_GROUPS, THROWN_RANGES, WEAPON_CATEGORIES, WEAPON_GROUPS, WEAPON_PROPERTY_RUNE_TYPES, WEAPON_RANGES, };
