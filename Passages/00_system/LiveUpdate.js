/**
 * live/liveblock/update Macros:
 * 
 * All variables and html structures inside a live or liveblock macros will be updated then you
 * call <<update>> on-the-fly, without having to reload the passage.
 * 
 * More info: https://github.com/cyrusfirheir/cycy-wrote-custom-macros/tree/master/live-update
 * 
 * Example:
 * 
 * <<set $CountVariable = 1>>
 * 
 * <h1>Count: </h1><<live $CountVariable>>
 * 
 * <<link "update">>
 *    <<set $CountVariable = $CountVariable + 1>>
 *    <<update>>
 * <</link>>
 * 
 * <<liveblock>> is the same but for entire blocks of code <</liveblock>>
 * 
 * This also reload scripts, for loops, anything dependent on the updated variables.
 * It is better only to use on specific pieces of code instead of an entire passage.
 */
(function () {
	"use strict";

	$(document).on(":liveupdate", function () {
		$(".macro-live").trigger(":liveupdateinternal");
	});

	Macro.add(['update', 'upd'], {
		handler: function handler() {
			$(document).trigger(":liveupdate");
		}
	});

	Macro.add(['live', 'l', 'lh'], {
		skipArgs: true,
		handler: function handler() {
			if (this.args.full.length === 0) {
				return this.error('no expression specified');
			}
			try {
				var statement = this.args.full;
				var result = toStringOrDefault(Scripting.evalJavaScript(statement), null);
				if (result !== null) {
					var lh = this.name === "lh";
					var $el = $("<span></span>").addClass("macro-live").wiki(lh ? Util.escape(result) : result).appendTo(this.output);
					$el.on(":liveupdateinternal", this.createShadowWrapper(function (ev) {
						var out = toStringOrDefault(Scripting.evalJavaScript(statement), null);
						$el.empty().wiki(lh ? Util.escape(out) : out);
					}));
				}
			} catch (ex) {
				return this.error("bad evaluation: " + (_typeof(ex) === 'object' ? ex.message : ex));
			}
		}
	});

	Macro.add(['liveblock', 'lb'], {
		tags: null,
		handler: function handler() {
			try {
				var content = this.payload[0].contents.trim();
				if (content) {
					var $el = $("<span></span>").addClass("macro-live macro-live-block").wiki(content).appendTo(this.output);
					$el.on(":liveupdateinternal", this.createShadowWrapper(function (ev) {
						$el.empty().wiki(content);
					}));
				}
			} catch (ex) {
				return this.error("bad evaluation: " + (_typeof(ex) === 'object' ? ex.message : ex));
			}
		}
	});
})();
