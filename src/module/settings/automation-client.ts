import { MODULENAME, updateHooks } from "../xdy-pf2e-workbench.js";
import { SettingsMenuPF2eWorkbench } from "./menu.js";

export class WorkbenchClientAutomationSettings extends SettingsMenuPF2eWorkbench {
    static override namespace = "automationClientSettings";

    public static override get settings(): Record<string, SettingRegistration> {
        return {
            // NOTE Do NOT rename this without talking to Symon S, his macros for Spellstrike and Eldritch shot parse for workbench and its settings to avoid double rolling damage.
            autoRollDamageForStrike: {
                name: `${MODULENAME}.SETTINGS.autoRollDamageForStrike.name`,
                hint: `${MODULENAME}.SETTINGS.autoRollDamageForStrike.hint`,
                scope: "client",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            autoRollDamageForSpellAttack: {
                name: `${MODULENAME}.SETTINGS.autoRollDamageForSpellAttack.name`,
                hint: `${MODULENAME}.SETTINGS.autoRollDamageForSpellAttack.hint`,
                scope: "client",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            autoRollDamageForSpellWhenNotAnAttack: {
                name: `${MODULENAME}.SETTINGS.autoRollDamageForSpellWhenNotAnAttack.name`,
                hint: `${MODULENAME}.SETTINGS.autoRollDamageForSpellWhenNotAnAttack.hint`,
                scope: "client",
                config: true,
                default: false,
                type: String,
                choices: {
                    no: game.i18n.localize(`${MODULENAME}.SETTINGS.autoRollDamageForSpellWhenNotAnAttack.no`),
                    anySpell: game.i18n.localize(
                        `${MODULENAME}.SETTINGS.autoRollDamageForSpellWhenNotAnAttack.anySpell`,
                    ),
                    saveSpell: game.i18n.localize(
                        `${MODULENAME}.SETTINGS.autoRollDamageForSpellWhenNotAnAttack.saveSpell`,
                    ),
                    nonSaveSpell: game.i18n.localize(
                        `${MODULENAME}.SETTINGS.autoRollDamageForSpellWhenNotAnAttack.nonSaveSpell`,
                    ),
                },
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            autoRollDamageNotifyOnSpellCardNotFound: {
                name: `${MODULENAME}.SETTINGS.autoRollDamageNotifyOnSpellCardNotFound.name`,
                hint: `${MODULENAME}.SETTINGS.autoRollDamageNotifyOnSpellCardNotFound.hint`,
                scope: "client",
                config: true,
                default: true,
                type: Boolean,
            },
            applyPersistentDamage: {
                name: `${MODULENAME}.SETTINGS.applyPersistentDamage.name`,
                hint: `${MODULENAME}.SETTINGS.applyPersistentDamage.hint`,
                scope: "client",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            applyPersistentDamageRecoveryRoll: {
                name: `${MODULENAME}.SETTINGS.applyPersistentDamageRecoveryRoll.name`,
                hint: `${MODULENAME}.SETTINGS.applyPersistentDamageRecoveryRoll.hint`,
                scope: "client",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            applyPersistentHealing: {
                name: `${MODULENAME}.SETTINGS.applyPersistentHealing.name`,
                hint: `${MODULENAME}.SETTINGS.applyPersistentHealing.hint`,
                scope: "client",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            handleDyingRecoveryRoll: {
                name: `${MODULENAME}.SETTINGS.handleDyingRecoveryRoll.name`,
                hint: `${MODULENAME}.SETTINGS.handleDyingRecoveryRoll.hint`,
                scope: "client",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            decreaseFrightenedConditionEachTurn: {
                name: `${MODULENAME}.SETTINGS.decreaseFrightenedConditionEachTurn.name`,
                hint: `${MODULENAME}.SETTINGS.decreaseFrightenedConditionEachTurn.hint`,
                scope: "client",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
        };
    }
}
