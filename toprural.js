// JavaScript Document
var path_api = "api.toprural.com";
var path_js = "http://www.toprural.com/js/";
var path_css = "http://www.toprural.com/css/";

function Toprural_Calendar_Widget(a, b, c, d, e, f, g, h, i) {
    loadJQueryC(a, b, c, d, e, f, g, h, i)
}

function loadJQueryC(a, b, c, d, e, f, g, h, i) {
    var j;
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
        var k = document.createElement('script');
        k.setAttribute("type", "text/javascript");
        k.setAttribute("src", path_js + "jquery/jquery.1-4-2.min.js");
        k.onload = scriptLoadHandlerC;
        k.onreadystatechange = function () {
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                scriptLoadHandlerC()
            }
        };
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(k)
    } else {
        j = window.jQuery;
        mainC(j, a, b, c, d, e, f, g, h, i)
    }

    function scriptLoadHandlerC() {
        j = window.jQuery.noConflict(true);
        mainC(j, a, b, c, d, e, f, g, h, i)
    }
}

function mainC(i, j, k, l, m, n, o, p, q, r) {
    var s = document.createElement('link');
    s.setAttribute("type", "text/css");
    s.setAttribute("rel", "stylesheet");
    s.setAttribute("href", path_css + "widget_calendar.css");
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(s);
    window.jQuery = i;
    var t = "http://" + path_api + "/rest/" + k + "/widget/calendars/accommodation/" + j + "?callback=?";
    i.getJSON(t, function (a) {
        var b = new Date();
        var c = b.getYear();
        if (c < 1000) {
            c += 1900
        }
        var d = b.getDay();
        var e = b.getMonth();
        var f = b.getDate();
        var g = b.getDayofyear();
        var h = g;
        window.miData = a;
        i('#tr-widget-container-calendar').html(function () {
            if (a.response.data.calendars.length == 0) {
                return '<div class="tr-empty"><p>' + p + '</p></div>'
            } else {
                return drawCalendar(i, a, h, c, l, m, n, o, q, r, k)
            }
        })
    })
}

function drawCalendar(h, k, l, m, n, o, p, q, r, s, t) {
    var u = "";
    var v = k.response.data.calendars[0];
    var w = "";
    var x = v.rentalUnit.calendar.firstDate;
    var y = new Date();
    y.setFullYear(x.substring(6, 10), (parseInt(x.substring(3, 5), 10) - 1).toString(), x.substring(0, 2));
    var z = y.getDayofyear();
    var A = l;
    var B = m;
    var C = l - z;
    var D = dateFromDay(B, l);
    var E = D.getDay();
    var F = D.getMonth();
    var G = D.getDate();
    var H = D.getFullYear();
    var I = getDaysByLocale(t);
    var J = getMonthsByLocale(t);
    var K = J[F] + " " + H;
    var L = J[F];
    if (F == 11) {
        var M = J[0] + " " + (H + 1);
        var N = J[0]
    } else {
        var M = J[F + 1] + " " + H;
        var N = J[F + 1]
    }
    var O = parseInt(x.substring(0, 2), 10);
    var P = 0;
    if (F == 1) {
        if (isLeapYear(parseInt(H, 10)) == true) {
            P = 29
        } else {
            P = 28
        }
    } else if (F == 0 || F == 2 || F == 4 || F == 6 || F == 7 || F == 9 || F == 11) {
        P = 31
    } else {
        P = 30
    }
    var Q = P - G + 1;
    if (Q > 29) {
        Q = 29;
        P = Q + G - 1
    }
    var R = 29 - Q;
    if (R < 1) {
        R = 0
    }
    var S = J[F];
    var T = J[F + 1];
    w += '<div id="occupation-id">' + '<table id="occupation-table" class="occupation-table">' + '<thead>' + '<tr class="navigation">' + '<th class="previous">' + '<span class="previous">';
    if (C == 0) {
        w += '&laquo;' + '&lsaquo;'
    } else if (C < 28) {
        w += '&laquo;<a href="#" onclick="auxiliar2(' + (A - 1) + ', ' + B + ', \'' + n.replace("'", "\\'") + '\', \'' + o.replace("'", "\\'") + '\', \'' + p.replace("'", "\\'") + '\', \'' + q.replace("'", "\\'") + '\', \'' + r.replace("'", "\\'") + '\', \'' + s.replace("'", "\\'") + '\', \'' + t + '\'); return false;" title="' + n + '">&lsaquo;</a>'
    } else {
        w += '<a href="#" onclick="auxiliar2(' + (A - 28) + ', ' + B + ', \'' + n.replace("'", "\\'") + '\', \'' + o.replace("'", "\\'") + '\', \'' + p.replace("'", "\\'") + '\', \'' + q.replace("'", "\\'") + '\', \'' + r.replace("'", "\\'") + '\', \'' + s.replace("'", "\\'") + '\', \'' + t + '\'); return false;" title="' + o + '">&laquo;</a><a href="#" onclick="auxiliar2(' + (A - 1) + ', ' + B + ', \'' + n.replace("'", "\\'") + '\', \'' + o.replace("'", "\\'") + '\', \'' + p.replace("'", "\\'") + '\', \'' + q.replace("'", "\\'") + '\', \'' + r.replace("'", "\\'") + '\', \'' + s.replace("'", "\\'") + '\', \'' + t + '\'); return false;" title="' + n + '">&lsaquo;</a>'
    }
    w += '</span>' + '</th>';
    if (Q > 4) {
        w += '<td colspan="' + Q + '"><span class="month-year">' + K + '</span></td>'
    } else if (Q <= 4 && Q > 2) {
        w += '<td colspan="' + Q + '"><span class="month-year">' + L + '</span></td>'
    } else {
        w += '<td colspan="' + Q + '"><span class="month-year"></span></td>'
    } if (R > 4) {
        w += '<td colspan="' + R + '"><span class="month-year">' + M + '</span></td>'
    } else if (R <= 4 && R > 2) {
        w += '<td colspan="' + R + '"><span class="month-year">' + N + '</span></td>'
    } else {
        w += '<td colspan="' + R + '"><span class="month-year"></span></td>'
    }
    w += '<td class="next">' + '<span class="next">';
    if (C == 365) {
        w += '&rsaquo;&raquo;'
    } else if (C > 327) {
        w += '<a href="#" onclick="auxiliar2(' + (A + 1) + ', ' + B + ', \'' + n.replace("'", "\\'") + '\', \'' + o.replace("'", "\\'") + '\', \'' + p.replace("'", "\\'") + '\', \'' + q.replace("'", "\\'") + '\', \'' + r.replace("'", "\\'") + '\', \'' + s.replace("'", "\\'") + '\', \'' + t + '\'); return false;" title="' + p + '">&rsaquo;</a>&raquo;'
    } else {
        w += '<a href="#" onclick="auxiliar2(' + (A + 1) + ', ' + B + ', \'' + n.replace("'", "\\'") + '\', \'' + o.replace("'", "\\'") + '\', \'' + p.replace("'", "\\'") + '\', \'' + q.replace("'", "\\'") + '\', \'' + r.replace("'", "\\'") + '\', \'' + s.replace("'", "\\'") + '\', \'' + t + '\'); return false;" title="' + p + '">&rsaquo;</a><a href="#" onclick="auxiliar2(' + (A + 28) + ', ' + B + ', \'' + n.replace("'", "\\'") + '\', \'' + o.replace("'", "\\'") + '\', \'' + p.replace("'", "\\'") + '\', \'' + q.replace("'", "\\'") + '\', \'' + r.replace("'", "\\'") + '\', \'' + s.replace("'", "\\'") + '\', \'' + t + '\'); return false;" title="' + q + '">&raquo;</a>'
    }
    w += '</span></td>' + '</tr>' + '<tr class="day-abbreviations">' + '<th>&nbsp;</th>';
    for (i = G; i <= P; i++) {
        if (i == P) {
            w += '<td class=" month-last-day">' + I[E] + '</td>'
        } else {
            if (I[E] == 'S' || I[E] == 'D') {
                w += '<td class=" weekend">' + I[E] + '</td>'
            } else {
                w += '<td class="">' + I[E] + '</td>'
            }
        } if (E == 6) {
            E = 0
        } else {
            E++
        }
    }
    for (i = 1; i <= R; i++) {
        if (I[E] == 'S' || I[E] == 'D') {
            w += '<td class=" weekend">' + I[E] + '</td>'
        } else {
            w += '<td class="">' + I[E] + '</td>'
        } if (E == 6) {
            E = 0
        } else {
            E++
        }
    }
    w += '</tr> <tr class="days">' + '<th>&nbsp;</th>';
    E = D.getDay();
    for (i = G; i <= P; i++) {
        if (i == P) {
            w += '<td class=" month-last-day">' + i + '</td>'
        } else {
            if (I[E] == 'S' || I[E] == 'D') {
                w += '<td class=" weekend">' + i + '</td>'
            } else {
                w += '<td class="">' + i + '</td>'
            }
        } if (E == 6) {
            E = 0
        } else {
            E++
        }
    }
    for (i = 1; i <= R; i++) {
        if (I[E] == 'S' || I[E] == 'D') {
            w += '<td class=" weekend">' + i + '</td>'
        } else {
            w += '<td class="">' + i + '</td>'
        } if (E == 6) {
            E = 0
        } else {
            E++
        }
    }
    w += '</tr> ' + '</thead>' + '<tbody>';
    var U = k.response.data.calendars;
    h.each(U, function (j, a) {
        var b = C;
        var c = a.rentalUnit.calendar;
        var d = c.occupation;
        var e = D.getDay();
        if (a.rentalUnit.capacity == 1) {
            var f = r
        } else {
            var f = s
        }
        var g = "";
        g += '<tr class="days">';
        if (a.rentalUnit.name == undefined) {
            g += '<th title="' + a.rentalUnit.capacity + ' ' + f + '">' + a.rentalUnit.capacity + ' ' + f + '</th>'
        } else {
            g += '<th title="' + a.rentalUnit.name + ' (' + a.rentalUnit.capacity + ' ' + f + ')">' + a.rentalUnit.name + ' (' + a.rentalUnit.capacity + ' ' + f + ')</th>'
        }
        for (i = G; i <= P; i++) {
            if (d.substring(b, b + 1) == "1") {
                if (i == P) {
                    g += '<td class=" no-vacancy month-last-day">' + i + '</td>'
                } else {
                    g += '<td class=" no-vacancy">' + i + '</td>'
                }
            } else {
                if (i == P) {
                    g += '<td class=" day month-last-day">' + i + '</td>'
                } else {
                    if (I[e] == 'S' || I[e] == 'D') {
                        g += '<td class=" weekend">' + i + '</td>'
                    } else {
                        g += '<td class=" day">' + i + '</td>'
                    }
                }
            } if (e == 6) {
                e = 0
            } else {
                e++
            }
            b++
        }
        for (i = 1; i <= R; i++) {
            if (d.substring(b, b + 1) == '1') {
                g += '<td class=" no-vacancy">' + i + '</td>'
            } else {
                if (I[e] == 'S' || I[e] == 'D') {
                    g += '<td class=" weekend">' + i + '</td>'
                } else {
                    g += '<td class=" day">' + i + '</td>'
                }
            } if (e == 6) {
                e = 0
            } else {
                e++
            }
            b++
        }
        w += g
    });
    w += '</tr>' + '</tbody>' + '</table>' + '</div>';
    u += w;
    return u
}

function auxiliar2(a, b, c, d, e, f, g, h, i) {
    window.jQuery('#tr-widget-container-calendar').html(function () {
        return drawCalendar(jQuery, window.miData, a, b, c, d, e, f, g, h, i)
    })
}

function dateFromDay(a, b) {
    date = new Date(a, 0);
    return new Date(date.setDate(b - 1))
}

function getMonthsByLocale(a) {
    if (a == 'ca') {
        var b = new Array("gener", "febrer", "marÃ§", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre")
    } else if (a == 'de') {
        var b = new Array("januar", "februar", "mÃ¤rz", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "dezember")
    } else if (a == 'en') {
        var b = new Array("january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december")
    } else if (a == 'fr') {
        var b = new Array("janvier", "fÃ©vrier", "mars", "avril", "mai", "juin", "juillet", "aoÃ»t", "septembre", "octobre", "novembre", "dÃ©cembre")
    } else if (a == 'it') {
        var b = new Array("gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre")
    } else if (a == 'nl') {
        var b = new Array("januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december")
    } else if (a == 'pt') {
        var b = new Array("janeiro", "fevereiro", "marÃ§o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
    } else {
        var b = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre")
    }
    return b
}

function getDaysByLocale(a) {
    if (a == 'ca') {
        var b = new Array("dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds.")
    } else if (a == 'de') {
        var b = new Array("So", "Mo", "Di", "Mi", "Do", "Fr", "Sa")
    } else if (a == 'en') {
        var b = new Array("Su", "M", "Tu", "W", "Th", "F", "S")
    } else if (a == 'fr') {
        var b = new Array("D", "L", "M", "M", "J", "V", "S")
    } else if (a == 'it') {
        var b = new Array("D", "L", "M", "Me", "G", "V", "S")
    } else if (a == 'nl') {
        var b = new Array("Zo", "M", "Di", "W", "Do", "V", "Z")
    } else if (a == 'pt') {
        var b = new Array("Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "SÃ¡b")
    } else {
        var b = new Array("D", "L", "M", "X", "J", "V", "S")
    }
    return b
}

function isLeapYear(a) {
    if ((a % 4 == 0) && ((a % 100 != 0) || (a % 400 == 0))) {
        return true
    } else {
        return false
    }
}

function restartDayByYear(a, b) {
    if ((b % 4 == 0) && ((b % 100 != 0) || (b % 400 == 0))) {
        var c = 366
    } else {
        var c = 365
    } if ((a % c) > 0) {
        return (a % c)
    } else {
        return a
    }
}
Date.prototype.getDayofyear = function () {
    var a = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((this - a) / 86400000) + 1
}