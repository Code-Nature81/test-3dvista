(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"minHeight":20,"data":{"defaultLocale":"fr","textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"volume":1,"pitch":1,"stopBackgroundAudio":false},"locales":{"fr":"locale/fr.txt"},"name":"Player28156","history":{}},"children":["this.MainViewer","this.thumbnaillist5245","this.label4056","this.Container_7DD6A839_6D6B_FEBC_41C3_742880E34703"],"minWidth":20,"buttonToggleMute":"this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C","scrollBarMargin":2,"scrollBarColor":"#000000","layout":"absolute","propagateClick":false,"watermark":false,"backgroundColorRatios":[0],"hash": "cd9496fc15bc78659ca9cf83e060c24c790029af64b47d367e88717be7e95d11", "definitions": [{"id":"IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625","minHeight":0,"data":{"name":"Button1207"},"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png","minWidth":0,"verticalAlign":"middle","iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png","propagateClick":false,"backgroundOpacity":0,"width":30,"height":30,"transparencyActive":true,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411","minHeight":0,"data":{"name":"Button1208"},"rollOverIconURL":"skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png","minWidth":0,"verticalAlign":"middle","iconURL":"skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png","pressedIconURL":"skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png","propagateClick":false,"backgroundOpacity":0,"width":30,"height":30,"transparencyActive":true,"class":"IconButton","horizontalAlign":"center"},{"id":"panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548","vfov":41.39,"label":trans('panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548.label'),"overlays":["this.overlay_7DFB3F1C_6D6A_F275_41C9_FD4167C26331"],"thumbnailUrl":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_t.jpg","class":"Panorama","hfov":360,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_t.jpg","left":{"class":"ImageResource","levels":[{"height":6656,"rowCount":13,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/l/0/{row}_{column}.jpg","width":6656,"colCount":13},{"height":3584,"rowCount":7,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/l/1/{row}_{column}.jpg","width":3584,"colCount":7},{"height":2048,"rowCount":4,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/l/2/{row}_{column}.jpg","width":2048,"colCount":4},{"height":1024,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/l/3/{row}_{column}.jpg","width":1024,"colCount":2},{"height":512,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/l/4/{row}_{column}.jpg","width":512,"colCount":1},{"height":1536,"rowCount":1,"colCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/l/vr/0.jpg","width":1536},{"height":2048,"rowCount":1,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/l/vr2gen/0.jpg","width":2048,"colCount":1}]},"front":{"class":"ImageResource","levels":[{"height":6656,"rowCount":13,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/f/0/{row}_{column}.jpg","width":6656,"colCount":13},{"height":3584,"rowCount":7,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/f/1/{row}_{column}.jpg","width":3584,"colCount":7},{"height":2048,"rowCount":4,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/f/2/{row}_{column}.jpg","width":2048,"colCount":4},{"height":1024,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/f/3/{row}_{column}.jpg","width":1024,"colCount":2},{"height":512,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/f/4/{row}_{column}.jpg","width":512,"colCount":1},{"height":1536,"rowCount":1,"colCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/f/vr/0.jpg","width":1536},{"height":2048,"rowCount":1,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/f/vr2gen/0.jpg","width":2048,"colCount":1}]},"right":{"class":"ImageResource","levels":[{"height":6656,"rowCount":13,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/r/0/{row}_{column}.jpg","width":6656,"colCount":13},{"height":3584,"rowCount":7,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/r/1/{row}_{column}.jpg","width":3584,"colCount":7},{"height":2048,"rowCount":4,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/r/2/{row}_{column}.jpg","width":2048,"colCount":4},{"height":1024,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/r/3/{row}_{column}.jpg","width":1024,"colCount":2},{"height":512,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/r/4/{row}_{column}.jpg","width":512,"colCount":1},{"height":1536,"rowCount":1,"colCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/r/vr/0.jpg","width":1536},{"height":2048,"rowCount":1,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/r/vr2gen/0.jpg","width":2048,"colCount":1}]},"back":{"class":"ImageResource","levels":[{"height":6656,"rowCount":13,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/b/0/{row}_{column}.jpg","width":6656,"colCount":13},{"height":3584,"rowCount":7,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/b/1/{row}_{column}.jpg","width":3584,"colCount":7},{"height":2048,"rowCount":4,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/b/2/{row}_{column}.jpg","width":2048,"colCount":4},{"height":1024,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/b/3/{row}_{column}.jpg","width":1024,"colCount":2},{"height":512,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/b/4/{row}_{column}.jpg","width":512,"colCount":1},{"height":1536,"rowCount":1,"colCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/b/vr/0.jpg","width":1536},{"height":2048,"rowCount":1,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","url":"media/panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_0/b/vr2gen/0.jpg","width":2048,"colCount":1}]}}],"data":{"label":"panorama-chateau-gim10"},"hfovMax":130},{"id":"playList_780F3D88_6D69_F65D_4185_F53399486900","class":"PlayList","items":["this.albumitem_780FAD89_6D69_F65F_41DA_E67B03CDAD6F"]},{"id":"photo_7D22DD32_6D56_B64D_41D5_BFFE634FCFDF","label":trans('photo_7D22DD32_6D56_B64D_41D5_BFFE634FCFDF.label'),"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_7D22DD32_6D56_B64D_41D5_BFFE634FCFDF.jpg"}]},"thumbnailUrl":"media/photo_7D22DD32_6D56_B64D_41D5_BFFE634FCFDF_t.jpg","width":640,"class":"Photo","duration":5000,"height":480,"data":{"label":"Montazels"}},{"id":"IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440","minHeight":0,"data":{"name":"Button1195"},"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png","minWidth":0,"verticalAlign":"middle","iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png","propagateClick":false,"backgroundOpacity":0,"width":38,"height":38,"transparencyActive":true,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB","minHeight":0,"data":{"name":"Button1203"},"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_rollover.png","minWidth":0,"verticalAlign":"middle","iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_pressed.png","propagateClick":false,"backgroundOpacity":0,"width":30,"height":30,"transparencyActive":true,"class":"IconButton","horizontalAlign":"center"},{"id":"MainViewerPanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"buttonPlayRight":"this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40","touchControlMode":"drag_rotation","arrowKeysAction":"translate","class":"PanoramaPlayer","buttonMoveRight":"this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894","buttonZoomOut":"this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625","buttonPlayLeft":"this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247","buttonMoveDown":"this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2","buttonZoomIn":"this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411","buttonMoveUp":"this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB","buttonRestart":"this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440","buttonMoveLeft":"this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5"},{"id":"window_62DF9191_6D59_AE4F_41DA_3B9BE9FC56C4","footerBackgroundColorDirection":"vertical","backgroundColor":[],"close":"this.playList_780F3D88_6D69_F65D_4185_F53399486900.set('selectedIndex', -1);","closeButtonPaddingLeft":0,"scrollBarColor":"#000000","minHeight":0,"data":{"name":"Window4536"},"closeButtonPaddingTop":0,"closeButtonBorderSize":0,"minWidth":0,"closeButtonPressedBackgroundOpacity":0,"closeButtonBackgroundOpacity":0,"headerPaddingBottom":10,"closeButtonRollOverIconLineWidth":2,"closeButtonIconHeight":12,"headerBorderSize":0,"closeButtonIconLineWidth":2,"verticalAlign":"middle","layout":"vertical","shadowVerticalLength":0,"overflow":"scroll","bodyBackgroundColorRatios":[0,0.5019607843137255,1],"modal":true,"headerPaddingTop":10,"bodyPaddingRight":5,"titleHorizontalAlign":"left","titlePaddingRight":5,"title":trans('window_62DF9191_6D59_AE4F_41DA_3B9BE9FC56C4.title'),"titlePaddingTop":5,"closeButtonRollOverBackgroundColorRatios":[0],"shadow":true,"closeButtonBackgroundColorRatios":[],"bodyBackgroundColorDirection":"vertical","hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"headerVerticalAlign":"middle","closeButtonPaddingBottom":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"width":400,"closeButtonRollOverBackgroundOpacity":0,"closeButtonPressedIconColor":"#FFFFFF","shadowOpacity":0.5,"height":600,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"headerPaddingRight":10,"closeButtonPressedBorderColor":"#000000","footerBorderSize":0,"footerBorderColor":"#000000","footerHeight":5,"gap":10,"bodyBorderColor":"#000000","titleFontColor":"#000000","closeButtonBorderRadius":11,"titlePaddingBottom":5,"headerBackgroundColorRatios":[0,0.09803921568627451,1],"closeButtonRollOverBorderColor":"#000000","titleFontSize":"1.29vmin","bodyPaddingLeft":5,"shadowSpread":1,"closeButtonRollOverIconColor":"#FFFFFF","shadowColor":"#000000","veilColorDirection":"horizontal","closeButtonIconColor":"#000000","closeButtonBackgroundColor":[],"footerBackgroundOpacity":1,"closeButtonRollOverBorderSize":0,"veilColor":["#000000","#000000"],"shadowHorizontalLength":3,"closeButtonPressedBorderSize":0,"scrollBarMargin":2,"borderRadius":5,"veilColorRatios":[0,1],"titlePaddingLeft":5,"headerPaddingLeft":10,"bodyPaddingTop":5,"closeButtonPressedBackgroundColor":["#3A1D1F"],"backgroundColorRatios":[],"propagateClick":false,"headerBackgroundColorDirection":"vertical","closeButtonIconWidth":12,"headerBorderColor":"#000000","headerBackgroundOpacity":1,"bodyPaddingBottom":5,"closeButtonRollOverBackgroundColor":["#C13535"],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"closeButtonPressedBackgroundColorRatios":[0],"footerBackgroundColorRatios":[0,0.8980392156862745,1],"bodyBorderSize":0,"closeButtonPaddingRight":0,"closeButtonBorderColor":"#000000","veilOpacity":0.4,"horizontalAlign":"center","children":["this.htmlText_62DC6191_6D59_AE4F_41DA_F80B070D5818","this.container_78F07D8A_6D69_F65D_41CB_DA78F3F94B2D"],"closeButtonPressedIconLineWidth":2,"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"titleFontFamily":"Arial","class":"Window","bodyBackgroundOpacity":1,"veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500}},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_camera","media":"this.panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548"}]},{"id":"IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40","minHeight":0,"data":{"name":"Button1198"},"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png","minWidth":0,"verticalAlign":"middle","iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png","propagateClick":false,"backgroundOpacity":0,"width":38,"height":38,"transparencyActive":true,"class":"IconButton","horizontalAlign":"center"},{"id":"Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A","backgroundColor":["#FFFFFF"],"minHeight":20,"data":{"name":"Container1202"},"minWidth":20,"scrollBarMargin":2,"layout":"vertical","scrollBarColor":"#000000","overflow":"hidden","verticalAlign":"middle","propagateClick":false,"backgroundColorRatios":[0],"width":47,"height":"100%","horizontalAlign":"center","children":["this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB","this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2"],"gap":10,"class":"Container"},{"id":"MainViewer","subtitlesBackgroundOpacity":0.2,"minHeight":50,"right":0,"minWidth":100,"progressBorderRadius":4,"subtitlesTextShadowOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBorderColor":"#FFFFFF","progressLeft":10,"data":{"name":"Main Viewer"},"playbackBarBottom":10,"surfaceReticleColor":"#FFFFFF","playbackBarHeight":20,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"firstTransitionDuration":0,"playbackBarHeadWidth":6,"toolTipFontColor":"#606060","playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"subtitlesFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","toolTipTextShadowColor":"#000000","toolTipPaddingRight":6,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#222222","#444444"],"progressBackgroundColorRatios":[0,1],"vrPointerSelectionTime":2000,"playbackBarHeadShadowOpacity":0.7,"progressRight":10,"vrPointerColor":"#FFFFFF","toolTipFontFamily":"Arial","subtitlesFontColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"progressBarBorderColor":"#000000","subtitlesTop":0,"progressBarBackgroundColorRatios":[0,1],"toolTipShadowColor":"#333333","playbackBarProgressBackgroundColorRatios":[0,1],"playbackBarBorderColor":"#AAAAAA","progressBarBackgroundColor":["#222222","#444444"],"subtitlesTextShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"progressBorderColor":"#AAAAAA","vrPointerSelectionColor":"#FF6600","toolTipPaddingTop":4,"propagateClick":false,"bottom":92,"top":77,"progressBottom":1,"subtitlesGap":0,"playbackBarBorderRadius":4,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesFontSize":"3vmin","subtitlesBackgroundColor":"#000000","playbackBarHeadBorderRadius":0,"progressBorderSize":2,"playbackBarBorderSize":2,"progressHeight":20,"toolTipPaddingBottom":4,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","progressBarBorderRadius":4,"toolTipBorderColor":"#767676","toolTipPaddingLeft":6,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadHeight":30,"subtitlesBottom":50,"playbackBarHeadShadow":true,"progressBarBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","left":0,"class":"ViewerArea","playbackBarHeadBackgroundColorRatios":[0,1]},{"id":"IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5","minHeight":0,"data":{"name":"Button1201"},"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_rollover.png","minWidth":0,"verticalAlign":"middle","iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_pressed.png","propagateClick":false,"backgroundOpacity":0,"width":30,"height":30,"transparencyActive":true,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2","minHeight":0,"data":{"name":"Button1204"},"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_rollover.png","minWidth":0,"verticalAlign":"middle","iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_pressed.png","propagateClick":false,"backgroundOpacity":0,"width":30,"height":30,"transparencyActive":true,"class":"IconButton","horizontalAlign":"center"},{"fontFamily":"Arial","id":"label4056","fontSize":40,"minHeight":16,"data":{"name":"Label28174"},"minWidth":30,"fontColor":"#666666","text":trans('label4056.text'),"fontWeight":"bold","propagateClick":false,"top":14,"backgroundOpacity":0,"width":292,"height":49,"class":"Label","left":9,"horizontalAlign":"center"},{"id":"thumbnaillist5245_playlist","class":"PlayList","items":[{"camera":"this.panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_camera","class":"PanoramaPlayListItem","media":"this.panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548","player":"this.MainViewerPanoramaPlayer"}]},{"id":"IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247","minHeight":0,"data":{"name":"Button1196"},"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png","minWidth":0,"verticalAlign":"middle","iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png","propagateClick":false,"backgroundOpacity":0,"width":38,"height":38,"transparencyActive":true,"class":"IconButton","horizontalAlign":"center"},{"id":"IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894","minHeight":0,"data":{"name":"Button1205"},"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_rollover.png","minWidth":0,"verticalAlign":"middle","iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_pressed.png","propagateClick":false,"backgroundOpacity":0,"width":30,"height":30,"transparencyActive":true,"class":"IconButton","horizontalAlign":"center"},{"id":"thumbnaillist5245","paddingTop":10,"itemPaddingTop":3,"backgroundColor":["#000000"],"scrollBarColor":"#FFFFFF","minHeight":0,"right":9,"itemPaddingRight":3,"minWidth":0,"data":{"name":"ThumbnailList28173"},"itemLabelFontColor":"#FFFFFF","paddingBottom":10,"layout":"vertical","maxWidth":800,"itemThumbnailShadowSpread":1,"itemThumbnailShadowOpacity":0.8,"itemThumbnailScaleMode":"fit_outside","paddingLeft":20,"itemThumbnailOpacity":1,"paddingRight":20,"selectedItemLabelFontWeight":"bold","itemThumbnailHeight":75,"itemPaddingLeft":3,"itemLabelFontSize":14,"gap":10,"itemBackgroundOpacity":0,"itemThumbnailShadowColor":"#000000","itemLabelTextDecoration":"none","itemLabelGap":5,"itemBorderRadius":0,"scrollBarMargin":2,"borderRadius":5,"itemPaddingBottom":3,"playList":"this.thumbnaillist5245_playlist","itemBackgroundColor":[],"itemThumbnailShadowBlurRadius":4,"itemThumbnailWidth":100,"bottom":100,"backgroundColorRatios":[0],"propagateClick":false,"itemThumbnailBorderRadius":5,"itemThumbnailShadow":true,"itemBackgroundColorDirection":"vertical","top":84,"itemLabelFontFamily":"Arial","backgroundOpacity":0.2,"itemLabelFontStyle":"normal","itemBackgroundColorRatios":[],"class":"ThumbnailList","maxHeight":800,"itemLabelFontWeight":"normal"},{"id":"Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137","backgroundColor":["#FFFFFF"],"minHeight":20,"data":{"name":"Container1200"},"minWidth":20,"scrollBarMargin":2,"layout":"horizontal","scrollBarColor":"#000000","overflow":"hidden","verticalAlign":"middle","propagateClick":false,"backgroundColorRatios":[0],"width":133,"height":"100%","horizontalAlign":"center","children":["this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5","this.Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A","this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894"],"gap":5,"class":"Container"},{"id":"panorama_616C1EDF_6D5F_F3F3_41B4_94E1CC9C2548_camera","class":"PanoramaCamera","initialSequence":"this.sequence_67A28557_6D5F_B6F4_41D1_D62AC065B85A","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"enterPointingToHorizon":true},{"id":"Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718","backgroundColor":["#FFFFFF"],"minHeight":20,"data":{"name":"Container1194"},"minWidth":468,"scrollBarMargin":2,"layout":"horizontal","scrollBarColor":"#000000","overflow":"hidden","verticalAlign":"middle","propagateClick":false,"backgroundColorRatios":[0],"width":468,"height":"93.478%","horizontalAlign":"center","children":["this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440","this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247","this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40","this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C","this.Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137","this.Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3"],"gap":10,"class":"Container"},{"gap":6,"id":"Container_7DD6A839_6D6B_FEBC_41C3_742880E34703","backgroundColor":["#FFFFFF","#FFFFFF"],"minHeight":1,"data":{"name":"Container29432"},"minWidth":1,"layout":"horizontal","scrollBarMargin":2,"scrollBarColor":"#000000","overflow":"scroll","verticalAlign":"middle","propagateClick":false,"bottom":"0%","backgroundColorRatios":[0,1],"backgroundOpacity":0.3,"height":92,"width":"100%","children":["this.Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718"],"left":"0%","class":"Container","horizontalAlign":"center"},{"id":"Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3","backgroundColor":["#FFFFFF"],"minHeight":20,"data":{"name":"Container1206"},"minWidth":20,"scrollBarMargin":2,"layout":"horizontal","scrollBarColor":"#000000","overflow":"hidden","verticalAlign":"middle","propagateClick":false,"backgroundColorRatios":[0],"width":85,"height":"100%","horizontalAlign":"center","children":["this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625","this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"],"gap":10,"class":"Container"},{"id":"PhotoAlbumEditable_78F2FE1C_6D69_F275_4196_FD21F3392296","playList":"this.PhotoAlbumEditable_78F2FE1C_6D69_F275_4196_FD21F3392296_AlbumPlayList","class":"PhotoAlbum"},{"id":"IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C","minHeight":0,"data":{"name":"Button1199"},"minWidth":0,"verticalAlign":"middle","iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C_pressed.png","mode":"toggle","propagateClick":false,"backgroundOpacity":0,"width":38,"height":38,"transparencyActive":true,"class":"IconButton","horizontalAlign":"center"},{"id":"overlay_7DFB3F1C_6D6A_F275_41C9_FD4167C26331","useHandCursor":true,"items":[{"vfov":5.38,"distance":50,"hfov":5.38,"pitch":16.68,"class":"HotspotPanoramaOverlayImage","yaw":64.67,"data":{"label":"Image"},"image":"this.res_7CB0081E_6D6B_9E74_41B1_F89C98B95D3A","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","data":{"label":"Image"},"enabledInCardboard":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_7DC49F1E_6D6A_F275_41CE_32AAD9ED1988"]},{"id":"albumitem_780FAD89_6D69_F65F_41DA_E67B03CDAD6F","class":"PhotoAlbumPlayListItem","media":"this.PhotoAlbumEditable_78F2FE1C_6D69_F275_4196_FD21F3392296","player":"this.viewer_uid780FED89_6D69_F65F_41DB_36277A6ED3C4PhotoAlbumPlayer"},{"id":"htmlText_62DC6191_6D59_AE4F_41DA_F80B070D5818","minHeight":0,"data":{"name":"HTMLText4537"},"minWidth":0,"scrollBarVisible":"always","scrollBarColor":"#000000","propagateClick":false,"backgroundOpacity":0,"paddingRight":10,"width":"100%","height":"50%","html":trans('htmlText_62DC6191_6D59_AE4F_41DA_F80B070D5818.html'),"scrollBarHorizontalMargin":-3,"paddingLeft":10,"paddingTop":10,"class":"HTMLText","paddingBottom":10},{"id":"container_78F07D8A_6D69_F65D_41CB_DA78F3F94B2D","backgroundColor":[],"minHeight":0,"data":{"name":"Container9758"},"minWidth":0,"scrollBarMargin":2,"layout":"absolute","scrollBarColor":"#000000","overflow":"scroll","propagateClick":false,"backgroundColorRatios":[],"height":"50%","children":["this.viewer_uid780FED89_6D69_F65F_41DB_36277A6ED3C4"],"width":"100%","gap":10,"class":"Container"},{"id":"sequence_67A28557_6D5F_B6F4_41D1_D62AC065B85A","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}]},{"id":"PhotoAlbumEditable_78F2FE1C_6D69_F275_4196_FD21F3392296_AlbumPlayList","class":"PhotoPlayList","items":[{"camera":{"class":"PhotoCamera","scaleMode":"fit_inside"},"class":"PhotoPlayListItem","media":"this.photo_7D22DD32_6D56_B64D_41D5_BFFE634FCFDF"}]},{"id":"res_7CB0081E_6D6B_9E74_41B1_F89C98B95D3A","class":"ImageResource","levels":[{"height":119,"class":"ImageResourceLevel","url":"media/res_7CB0081E_6D6B_9E74_41B1_F89C98B95D3A_0.png","width":119}]},{"id":"HotspotPanoramaOverlayArea_7DC49F1E_6D6A_F275_41CE_32AAD9ED1988","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.showWindow(this.window_62DF9191_6D59_AE4F_41DA_3B9BE9FC56C4, null, false); this.playList_780F3D88_6D69_F65D_4185_F53399486900.set('selectedIndex', 0); "},{"id":"viewer_uid780FED89_6D69_F65F_41DB_36277A6ED3C4PhotoAlbumPlayer","class":"PhotoAlbumPlayer","viewerArea":"this.viewer_uid780FED89_6D69_F65F_41DB_36277A6ED3C4","buttonRestart":"this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440"},{"id":"viewer_uid780FED89_6D69_F65F_41DB_36277A6ED3C4","minHeight":50,"subtitlesTextShadowOpacity":1,"minWidth":100,"progressBorderRadius":4,"data":{"name":"ViewerArea9757"},"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressLeft":10,"playbackBarBottom":10,"subtitlesBorderColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","playbackBarHeight":20,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"firstTransitionDuration":0,"playbackBarHeadWidth":6,"height":"100%","toolTipFontColor":"#606060","playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"subtitlesFontFamily":"Arial","playbackBarProgressBorderRadius":0,"surfaceReticleSelectionColor":"#FFFFFF","toolTipTextShadowColor":"#000000","toolTipPaddingRight":6,"width":"100%","playbackBarProgressBackgroundColor":["#222222","#444444"],"vrPointerSelectionTime":2000,"playbackBarHeadShadowOpacity":0.7,"progressBackgroundColorRatios":[0,1],"progressRight":10,"vrPointerColor":"#FFFFFF","toolTipFontFamily":"Arial","subtitlesFontColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"progressBarBorderColor":"#000000","subtitlesTop":0,"progressBarBackgroundColorRatios":[0,1],"toolTipShadowColor":"#333333","playbackBarProgressBackgroundColorRatios":[0,1],"playbackBarBorderColor":"#AAAAAA","progressBarBackgroundColor":["#222222","#444444"],"progressBorderColor":"#AAAAAA","subtitlesTextShadowColor":"#000000","toolTipPaddingTop":4,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderColor":"#000000","propagateClick":false,"playbackBarBackgroundOpacity":1,"subtitlesGap":0,"playbackBarBorderRadius":4,"playbackBarHeadBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"progressBottom":2,"subtitlesFontSize":"3vmin","subtitlesBackgroundColor":"#000000","progressBorderSize":2,"playbackBarBorderSize":2,"toolTipPaddingBottom":4,"playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowColor":"#000000","progressHeight":20,"progressBarBorderRadius":4,"toolTipBorderColor":"#767676","toolTipPaddingLeft":6,"playbackBarLeft":0,"subtitlesBottom":10,"playbackBarHeadBorderSize":0,"playbackBarHeadHeight":30,"playbackBarHeadShadow":true,"progressBarBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","class":"ViewerArea","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBackgroundOpacity":0.2}],"height":"100%","defaultMenu":["fullscreen","mute","rotation"],"scripts":{"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"shareSocial":TDV.Tour.Script.shareSocial,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setValue":TDV.Tour.Script.setValue,"getKey":TDV.Tour.Script.getKey,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"showPopupImage":TDV.Tour.Script.showPopupImage,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"cloneBindings":TDV.Tour.Script.cloneBindings,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"translate":TDV.Tour.Script.translate,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMainViewer":TDV.Tour.Script.getMainViewer,"init":TDV.Tour.Script.init,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"showWindow":TDV.Tour.Script.showWindow,"startMeasurement":TDV.Tour.Script.startMeasurement,"downloadFile":TDV.Tour.Script.downloadFile,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setLocale":TDV.Tour.Script.setLocale,"executeJS":TDV.Tour.Script.executeJS,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getComponentByName":TDV.Tour.Script.getComponentByName,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"resumePlayers":TDV.Tour.Script.resumePlayers,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"clone":TDV.Tour.Script.clone,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizStart":TDV.Tour.Script.quizStart,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMapLocation":TDV.Tour.Script.setMapLocation,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaByName":TDV.Tour.Script.getMediaByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizFinish":TDV.Tour.Script.quizFinish,"initAnalytics":TDV.Tour.Script.initAnalytics,"createTween":TDV.Tour.Script.createTween,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"registerKey":TDV.Tour.Script.registerKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"isPanorama":TDV.Tour.Script.isPanorama,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"existsKey":TDV.Tour.Script.existsKey,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"openLink":TDV.Tour.Script.openLink,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"mixObject":TDV.Tour.Script.mixObject,"getOverlays":TDV.Tour.Script.getOverlays,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"initQuiz":TDV.Tour.Script.initQuiz,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPixels":TDV.Tour.Script.getPixels},"width":"100%","gap":10,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.thumbnaillist5245_playlist])","class":"Player"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.0.js.map
})();
//Generated with v2023.1.0, Thu Oct 26 2023