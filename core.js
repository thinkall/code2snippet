"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convert(csv) {
    const regex = /^.*$/gm;
    var result = csv.replace(regex, function (match) {
        if (match) {
            return "\"" + match.replace(/\\/gm, "\\\\").replace(/\"/gm, "\\\"") + "\",";
        }
        else {
            return "";
        }
    });

    result = result.replace(/^\n$/gm, "\"\",");

    return result;
}
exports.convert = convert;