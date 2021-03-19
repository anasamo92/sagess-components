'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('unorm');

// Using as String.prototype.normalize polyfill
/**
 * Normalize a string by removing diacritics and making it lower case
 * 
 * @param {string} str a string to be normalized 
 * @returns {string} the normalized string
 */
var toNormalizedLowerString = function toNormalizedLowerString(str) {
    if (!str) {
        return str;
    }
    //https://en.wikipedia.org/wiki/Combining_character#Unicode_ranges
    /*
    Combining Diacritical Marks (0300–036F), since version 1.0, with modifications in subsequent versions down to 4.1
    Combining Diacritical Marks Extended (1AB0–1AFF), version 7.0
    Combining Diacritical Marks Supplement (1DC0–1DFF), versions 4.1 to 5.2
    Combining Diacritical Marks for Symbols (20D0–20FF), since version 1.0, with modifications in subsequent versions down to 5.1
    Combining Half Marks (FE20–FE2F), versions 1.0, with modifications in subsequent versions down to 8.0
    */

    var toFilter = str.toLocaleLowerCase().normalize('NFKD');

    toFilter = Array.prototype.map.call(toFilter, function (elt) {
        var cp = elt.codePointAt(0);
        if (cp >= 768 && cp <= 879 /* 0300–036F */
        || cp >= 6832 && cp <= 6911 /* 1AB0–1AFF */
        || cp >= 7616 && cp <= 7679 /* 1DC0–1DFF */
        || cp >= 8400 && cp <= 8447 /* 20D0–20FF */
        || cp >= 65056 && cp <= 65071 /* FE20–FE2F */
        ) {
                return '';
            }

        return elt;
    }).join('');

    return toFilter.normalize('NFKC');
};

exports.default = toNormalizedLowerString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsidG9Ob3JtYWxpemVkTG93ZXJTdHJpbmciLCJzdHIiLCJ0b0ZpbHRlciIsInRvTG9jYWxlTG93ZXJDYXNlIiwibm9ybWFsaXplIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiY3AiLCJlbHQiLCJjb2RlUG9pbnRBdCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUFnQjtBQUNoQjs7Ozs7O0FBTUEsSUFBTUEsMEJBQTBCLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3JDLFFBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sZUFBT0EsR0FBUDtBQUNIO0FBQ0Q7QUFDQTs7Ozs7Ozs7QUFRQSxRQUFJQyxXQUFXRCxJQUFJRSxpQkFBSixHQUF3QkMsU0FBeEIsQ0FBa0MsTUFBbEMsQ0FBZjs7QUFFQUYsZUFBV0csTUFBTUMsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0JDLElBQXBCLENBQXlCTixRQUF6QixFQUFtQyxlQUFPO0FBQ2pELFlBQU1PLEtBQUtDLElBQUlDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBWDtBQUNBLFlBQUlGLE1BQU0sR0FBTixJQUFhQSxNQUFNLEdBQW5CLENBQXVCO0FBQXZCLFdBQ0dBLE1BQU0sSUFBTixJQUFjQSxNQUFNLElBRHZCLENBQzRCO0FBRDVCLFdBRUdBLE1BQU0sSUFBTixJQUFjQSxNQUFNLElBRnZCLENBRTRCO0FBRjVCLFdBR0dBLE1BQU0sSUFBTixJQUFjQSxNQUFNLElBSHZCLENBRzRCO0FBSDVCLFdBSUdBLE1BQU0sS0FBTixJQUFlQSxNQUFNLEtBSjVCLENBSWtDO0FBSmxDLFVBS0U7QUFDRSx1QkFBTyxFQUFQO0FBQ0g7O0FBRUQsZUFBT0MsR0FBUDtBQUNILEtBWlUsRUFZUkUsSUFaUSxDQVlILEVBWkcsQ0FBWDs7QUFjQSxXQUFPVixTQUFTRSxTQUFULENBQW1CLE1BQW5CLENBQVA7QUFDSCxDQTlCRDs7a0JBZ0NlSix1QiIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bm9ybSc7IC8vIFVzaW5nIGFzIFN0cmluZy5wcm90b3R5cGUubm9ybWFsaXplIHBvbHlmaWxsXHJcbi8qKlxyXG4gKiBOb3JtYWxpemUgYSBzdHJpbmcgYnkgcmVtb3ZpbmcgZGlhY3JpdGljcyBhbmQgbWFraW5nIGl0IGxvd2VyIGNhc2VcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgYSBzdHJpbmcgdG8gYmUgbm9ybWFsaXplZCBcclxuICogQHJldHVybnMge3N0cmluZ30gdGhlIG5vcm1hbGl6ZWQgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCB0b05vcm1hbGl6ZWRMb3dlclN0cmluZyA9IChzdHIpID0+IHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIC8vaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX2NoYXJhY3RlciNVbmljb2RlX3Jhbmdlc1xyXG4gICAgLypcclxuICAgIENvbWJpbmluZyBEaWFjcml0aWNhbCBNYXJrcyAoMDMwMOKAkzAzNkYpLCBzaW5jZSB2ZXJzaW9uIDEuMCwgd2l0aCBtb2RpZmljYXRpb25zIGluIHN1YnNlcXVlbnQgdmVyc2lvbnMgZG93biB0byA0LjFcclxuICAgIENvbWJpbmluZyBEaWFjcml0aWNhbCBNYXJrcyBFeHRlbmRlZCAoMUFCMOKAkzFBRkYpLCB2ZXJzaW9uIDcuMFxyXG4gICAgQ29tYmluaW5nIERpYWNyaXRpY2FsIE1hcmtzIFN1cHBsZW1lbnQgKDFEQzDigJMxREZGKSwgdmVyc2lvbnMgNC4xIHRvIDUuMlxyXG4gICAgQ29tYmluaW5nIERpYWNyaXRpY2FsIE1hcmtzIGZvciBTeW1ib2xzICgyMEQw4oCTMjBGRiksIHNpbmNlIHZlcnNpb24gMS4wLCB3aXRoIG1vZGlmaWNhdGlvbnMgaW4gc3Vic2VxdWVudCB2ZXJzaW9ucyBkb3duIHRvIDUuMVxyXG4gICAgQ29tYmluaW5nIEhhbGYgTWFya3MgKEZFMjDigJNGRTJGKSwgdmVyc2lvbnMgMS4wLCB3aXRoIG1vZGlmaWNhdGlvbnMgaW4gc3Vic2VxdWVudCB2ZXJzaW9ucyBkb3duIHRvIDguMFxyXG4gICAgKi9cclxuXHJcbiAgICBsZXQgdG9GaWx0ZXIgPSBzdHIudG9Mb2NhbGVMb3dlckNhc2UoKS5ub3JtYWxpemUoJ05GS0QnKTtcclxuXHJcbiAgICB0b0ZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh0b0ZpbHRlciwgZWx0ID0+IHtcclxuICAgICAgICBjb25zdCBjcCA9IGVsdC5jb2RlUG9pbnRBdCgwKTtcclxuICAgICAgICBpZiAoY3AgPj0gNzY4ICYmIGNwIDw9IDg3OSAvKiAwMzAw4oCTMDM2RiAqL1xyXG4gICAgICAgICAgICB8fCBjcCA+PSA2ODMyICYmIGNwIDw9IDY5MTEgLyogMUFCMOKAkzFBRkYgKi9cclxuICAgICAgICAgICAgfHwgY3AgPj0gNzYxNiAmJiBjcCA8PSA3Njc5IC8qIDFEQzDigJMxREZGICovXHJcbiAgICAgICAgICAgIHx8IGNwID49IDg0MDAgJiYgY3AgPD0gODQ0NyAvKiAyMEQw4oCTMjBGRiAqL1xyXG4gICAgICAgICAgICB8fCBjcCA+PSA2NTA1NiAmJiBjcCA8PSA2NTA3MSAvKiBGRTIw4oCTRkUyRiAqL1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWx0O1xyXG4gICAgfSkuam9pbignJyk7XHJcblxyXG4gICAgcmV0dXJuIHRvRmlsdGVyLm5vcm1hbGl6ZSgnTkZLQycpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9Ob3JtYWxpemVkTG93ZXJTdHJpbmc7Il19