/* Dump all the Story variables in a table */
setup.dumpVars = function () {
    let result = "<table><tr><th>Key</th><th>Value</th></tr>"
    let vars = variables();
    for (let key of Object.keys(vars).sort()) {
        result += '<tr><td>$$' + key + '</td><td>' + JSON.stringify(vars[key]) + '</td></tr>';
    }
    return result + "</table>";
}

/* Extends the <Array>.random() to <Object> :

ex:

<<set _Random to {
    "Bath Normal": 20, 
    "Bath Cold Water": 5, 
    "Bath Slip and Fall": 3, 
    "Bath No Towel": 3, 
    "Bath Gabe Door Open": 2, 
    "Bath Dad Enter": 2, 
    "Bath Noah Enter": 2, 
    "Bath Gabe Toss Out": 2, 
    "Bath Gabe Scare Picture": 1,
}>>

<<set _event to _Random.random()>><<include _event>>

Will add all the weights and then pick one event with probability <weight>/<total>

*/

Object.defineProperty(Object.prototype, 'random', {
    configurable: true,
    writable: true,

    value() {
        const total = Object.values(this).reduce((acc, curr) => acc + curr, 0);
        const rng = random(total - 1);
        let accumulated = 0;
        for (const [key, value] of Object.entries(this)) {
            accumulated += value;
            if (rng < accumulated) {
                return key;
            }
        }
    }
});

window.getNeedsBarColor = percentage => {
	if (percentage >= 95) {
		return '#3636bf'; // blue
	} else if (percentage < 95 && percentage >= 80) {
		return '#006a00'; // darkgreen
	}
	 else if (percentage < 80 && percentage >= 60) {
		return '#2dad2d'; // green
	}
	 else if (percentage < 60 && percentage >= 50) {
		return '#d3d300'; // yellow
	}
	 else if (percentage < 50 && percentage >= 30) {
		return '#eb3737'; // red
	}
	 else if (percentage < 30) {
		return 'darkred';
	}

	return 'transparent';
};

window.getSocialBarColor = value => {
    if (value <= -100) {
        return 'darkred';
    }
    if (value > -100 && value < 0) {
        return '#eb3737';
    }
    if (value > 0 && value < 100) {
        return '#2dad2d';
    }
    if (value >= 100) {
        return '#FF69B4';
    }

    return 'transparent';
};

window.getHangoutNeedColor = value => {
    if (value >= 75) {
        return 'green';
    }
    
    if (value < 75 && value > 50) {
        return '#d3d300';
    }

    if (value < 51 && value > 21) {
        return 'orange';
    }

    return 'red';
};

window.isValidHttpUrl = string => {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;  
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

/* Checks if the string has an "s" at the end, would return => "Lucas'" or "Michael's" */
window.addApostrophe = string => {
    if (string.toLowerCase().charAt(string.length -1) === "s") {
        return string + "'";
    }

    return string + "'s";
}

window.getTraitByID = id => {
    const trait = State.getVar("$TraitOptions").find(t => t.ID === id);
    
    if (trait == null) {
        throw new Error(`window.getTraitByID Error: Trait ID "${id}" not found.`);
    }

    return trait;
};
