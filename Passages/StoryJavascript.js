/* Do an autosave for all passages tagged with "autosave". */
Config.saves.autosave = "autosave";

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
