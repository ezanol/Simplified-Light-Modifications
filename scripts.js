/* Defined in: "Textual.app -> Contents -> Resources -> JavaScript -> API -> core.js" */

Textual.viewFinishedLoading = function() {
	Textual.fadeInLoadingScreen(1.00, 0.95);

	setTimeout(function() {
		Textual.scrollToBottomOfView();
	}, 500);
}

Textual.viewFinishedReload = function() {
	Textual.viewFinishedLoading();
}

Textual.newMessagePostedToView = function(lineNumber) {
	if (!replaceEmoji(lineNumber)) {
		setTimeout(function() {
			replaceEmoji(lineNumber);
		}, 500);
	}
}

function replaceEmoji(lineNumber) {
	var emoji = {
			":)": "😊",
			":D": "😃",
			";D": "😄",
			";)": "😉",
			";P": "😜",
			":P": "😝",
			"o_o": "😳",
			"O_O": "😳",
			"o_O": "😳",
			"0_o": "😳",
			"o_0": "😳",
			"0_0": "😳",
			"O_o": "😳",
			":@": "😡",
			">.<": "😣",
			">_<": "😫",
			":(": "😞",
			"n_n": "😄",
			"u_u": "😔",
			"^_^": "😄",
			"^.^": "😊",
			"x.x": "😵",
			"x.X": "😵",
			"X.x": "😵",
			"X.X": "😵",
			"x_x": "😲",
			"x_X": "😲",
			"X_x": "😲",
			"X_X": "😲",
			"D:": "😧",
			":s": "😖",
			":S": "😖",
			"DD:": "😫",
			"._.'": "😰",
			"._.": "😞",
			";_;": "😢",
			";__;": "😢",
			"D;": "😰",
			"^_^'": "😅",
			"^.^": "😅",
			"T_T": "😭",
			"T.T": "😭",
			":|": "😐",
			":o": "😯",
			":O": "😱",
			":0": "😱",
			"-_-": "😑",
			":*": "😚",
			":**": "😘",
			":***": "😘",
			"*_*": "😍"
		},
		line = document.querySelector("#line" + lineNumber + " .message");

	if (line) {
		for (var i in emoji) {
			while (line.innerHTML.indexOf(i) != -1) {
				line.innerHTML = line.innerHTML.replace(i, emoji[i]);
			}
		}

		return true;
	}

	return false;
}
