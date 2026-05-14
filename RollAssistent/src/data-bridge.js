/**
 * Bridge script (non-module) that exposes data from the old global scripts
 * to the new module system via window._DATA_* properties.
 * Loaded AFTER data.js, equipment.js, races-details.js, classes-details.js
 * but BEFORE app.js module.
 */
window._DATA_races = races;
window._DATA_classes = classes;
window._DATA_spells = spells;
window._DATA_equipmentList = equipmentList;
window._DATA_raceDetails = raceDetails;
window._DATA_classDetails = classDetails;
