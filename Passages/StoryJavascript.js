/* Do an autosave for all passages tagged with "autosave". */
Config.saves.maxAutoSaves = 1;

Config.saves.descriptions = function (saveType) {
    let text = $('#passages').text().trim();

    if (text.length > 200) {
        text = text.slice(0, 200) + '...';
    }

    return text || passage();
};

Config.history.maxStates = 3;

Macro.add('error', {
    skipArgs: true,
    handler: function () {
        return this.error(this.args.full);
    }
});

/* automatically close popup on new passage links */
$(document).on(':passageinit', function (ev) {
    if (Dialog.isOpen("NPC_Inspect")) {
        Dialog.close();
    }
    if (Dialog.isOpen("Needs_Dialog")) {
        Dialog.close();
    }
});
