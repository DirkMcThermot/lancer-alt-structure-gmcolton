import { altRoll } from "./altRoll.js";


function buildStructureTable() {

    let tableT = {
        noStructure: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StructureTitles.noStructure"),
        crushingHit: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StructureTitles.crushingHit"),
        directHit: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StructureTitles.directHit"),
        systemTrauma: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StructureTitles.systemTrauma"),
        glancingBlow: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StructureTitles.glancingBlow")
    };

    let tableD = {
        noStructure: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StructureDescriptions.noStructure"),
        crushingHit: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StructureDescriptions.crushingHit"),
        directHit: [
            game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StructureDescriptions.directHit.base"),
            game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StructureDescriptions.directHit.one"),
            game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StructureDescriptions.directHit.two"),
        ],
        systemTrauma: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StructureDescriptions.systemTrauma"),
        glancingBlow: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StructureDescriptions.glancingBlow"),
    };
    return { tableT, tableD };
}
export async function altRollStructure(reroll_data) {

    return await altRoll(reroll_data, "structure", buildStructureTable(), this)

}

function buildStressTable() {

    let tableT = {
        noStructure: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StressTitles.noStress"),
        crushingHit: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StressTitles.criticalFail"),
        directHit: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StressTitles.meltdown"),
        systemTrauma: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StressTitles.powerFail"),
        glancingBlow: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StressTitles.emergencyShunt")
    };

    let tableD = {
        noStructure: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StressDescriptions.noStress"),
        crushingHit: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StressDescriptions.criticalFail"),
        directHit: [
            game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StressDescriptions.meltdown.base"),
            game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StressDescriptions.meltdown.one"),
            game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StressDescriptions.meltdown.two"),
        ],
        systemTrauma: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StressDescriptions.powerFail"),
        glancingBlow: game.i18n.localize("LANCER-ALT-STRUCTURE-GMCOLTON.StressDescriptions.emergencyShunt"),
    };
    return { tableT, tableD };
}
export async function altRollStress(reroll_data) {

    return await altRoll(reroll_data, "stress", buildStressTable(), this)

}
