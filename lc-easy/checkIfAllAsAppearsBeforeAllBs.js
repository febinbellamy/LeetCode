/**
 * @param {string} s
 * @return {boolean}
 */
 var checkString = function(s) {
    if (!(s.includes('b'))) return true;
    return s.lastIndexOf('a') < s.indexOf('b')
};