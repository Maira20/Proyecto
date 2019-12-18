/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            '\'Blue Highway Condensed\'': '<link rel=\"style\" href=\"style.css\" type=\"text/css\"  media=\"screen\" title=\"\" charset=\"utf-8\" />'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '752px', '43px', 'auto', 'auto'],
                            fill: ["rgba(21,74,139,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'video',
                            volume: '0.7',
                            type: 'video',
                            tag: 'video',
                            rect: ['0px', '40px', '720', '480', 'auto', 'auto'],
                            controls: 'controls',
                            userClass: "video",
                            source: [vid+"video.mp4"],
                            preload: 'auto',
                            poster: 'images/video_video_poster.jpg'
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['11px', '4px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">Metodologías de Desarrollo de Software</p>",
                            font: ['Blue Highway Condensed', [25, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", "nowrap"],
                            textStyle: ["", "", "30px", "", ""]
                        },
                        {
                            id: 'menu',
                            symbolName: 'menu',
                            type: 'rect',
                            rect: ['720', '0', '32', '480', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '752px', '520px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid190",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid192",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid198",
                            "color",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                            [ "eid187", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${menu}', [] ] ]
                    ]
                }
            },
            "contenido_opciones": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-5px', '532px', '609px', 'auto', 'auto'],
                            opacity: '0.75',
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(40,40,40,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['43px', '104px', '155px', '120px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['43px', '196px', '155px', '265px', 'auto', 'auto'],
                            id: 'logo_sena_opciones',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/logo_sena_opciones.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['205px', '104px', '156px', '75px', 'auto', 'auto'],
                            id: 'bt_opciones5',
                            userClass: 'bt_opciones5',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/bt_opciones5.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['367px', '104px', '155px', '75px', 'auto', 'auto'],
                            id: 'bt_opciones6',
                            userClass: 'bt_opciones6',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/bt_opciones6.svg', '0px', '0px']
                        },
                        {
                            rect: ['43', '470px', '479', '154', 'auto', 'auto'],
                            id: 'Group2',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '479px', '154px', 'auto', 'auto'],
                                id: 'fondo_menu_opciones',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/fondo_menu_opciones.svg', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['143px', '10px', '324px', '50px', 'auto', 'auto'],
                                align: 'justify',
                                id: 'Text3',
                                textStyle: ['', '', '12px', '', ''],
                                text: '<p style=\"margin: 0px;\">Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se  puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.</p>',
                                font: ['Arial, Helvetica, sans-serif', [11, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        },
                        {
                            rect: ['198px', '186px', '324px', '275px', 'auto', 'auto'],
                            opacity: '0.65',
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle6Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['204px', '191px', '312px', '22px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['204px', '219px', '312px', '33px', 'auto', 'auto'],
                            opacity: '0.85',
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['204px', '281px', '312px', '1px', 'auto', 'auto'],
                            opacity: '0.5',
                            id: 'Rectangle7Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['204px', '333px', '312px', '1px', 'auto', 'auto'],
                            opacity: '0.5',
                            id: 'Rectangle7Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['204px', '385px', '312px', '1px', 'auto', 'auto'],
                            opacity: '0.5',
                            id: 'Rectangle7Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['204px', '411px', '312px', '1px', 'auto', 'auto'],
                            opacity: '0.5',
                            id: 'Rectangle7Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['204px', '437px', '312px', '1px', 'auto', 'auto'],
                            opacity: '0.5',
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['211px', '262px', '148px', '199px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text6Copy',
                            textStyle: ['', '', '13px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 600;\">Líder línea de producción:</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 600;\">​​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 600;\">​Asesores pedagógicos:</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 600;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 600;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 600;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 600;\">​Líder expertos temáticos:</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 600;\">​​Expertos temáticos:</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 600;\">​</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 600; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px;\">​​​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 600; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px;\"><span style=\"font-weight: 600;\">​Diseño multimedia:</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 600;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 600;\">​Programador:</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 600;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 600;\">​Productor de audio:</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [11, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['362px', '262px', '154px', '199px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text6',
                            textStyle: ['', '', '13px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Santiago Lozada Garcés</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Rafael Neftali Lizcano R. - V1</p><p style=\"margin: 0px;\">​Rosa Elvia Quintero G. - V2</p><p style=\"margin: 0px;\">​Claudia Milena Hernández - V2</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Rita Rubiela Rincón Badillo<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span></p><p style=\"margin: 0px;\">Cesar Marino Cuéllar C. - V1<br></p><p style=\"margin: 0px;\"> </p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 13px;\">Rita Rubiela Rincón B.- V2</p><p style=\"margin: 0px;\">​​</p><p style=\"margin: 0px;\">Luis Gabriel Urueta Alvarez</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Francisco José Lizcano R.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">William Fernando Ramirez</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>',
                            font: ['Arial, Helvetica, sans-serif', [11, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['217px', '222px', '285px', '29px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text5',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">Centro Industrial de Mantenimiento Integral - CIMI</p><p style=\"margin: 0px;\">Regional Santander</p>',
                            font: ['Arial, Helvetica, sans-serif', [11, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['204px', '195px', '312px', '12px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text',
                            textStyle: ['', '', '13px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">Metodología de desarrollo de software</p>',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '532px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "menu": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-499px', '0px', '32px', '480px', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '-79px', '532', '600', 'auto', 'auto'],
                                id: 'contenido_opcionesCopy',
                                symbolName: 'contenido_opciones',
                                type: 'rect'
                            },
                            {
                                type: 'rect',
                                id: 'fondo_flecha',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '0px', '32px', '521px', 'auto', 'auto'],
                                fill: ['rgba(163,206,137,1.00)']
                            },
                            {
                                rect: ['0px', '0px', '32px', '40px', 'auto', 'auto'],
                                id: 'bt_menu',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/bt_menu.svg', '0px', '0px']
                            },
                            {
                                rect: ['9px', '253px', '14px', '16px', 'auto', 'auto'],
                                id: 'flecha_menu',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/flecha_menu.svg', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'zona_sensible_outCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['-499px', '0px', '32px', '480px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            fill: ['rgba(59,134,177,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['-720px', '0px', '221px', '480px', 'auto', 'auto'],
                            display: 'none',
                            id: 'zono_activa_overCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(59,134,177,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['-467px', '472px', '500px', '8px', 'auto', 'auto'],
                            display: 'none',
                            id: 'zono_activa_overCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(59,134,177,1)']
                        },
                        {
                            type: 'rect',
                            id: 'zona_sensible_inCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '32px', '521px', 'auto', 'auto'],
                            display: 'block',
                            opacity: '0',
                            fill: ['rgba(59,134,177,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '520px']
                        }
                    }
                },
                timeline: {
                    duration: 555,
                    autoPlay: true,
                    data: [
                        [
                            "eid177",
                            "left",
                            0,
                            500,
                            "easeInCubic",
                            "${Group}",
                            '0px',
                            '-499px'
                        ],
                        [
                            "eid185",
                            "display",
                            500,
                            0,
                            "easeInCubic",
                            "${zono_activa_overCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid173",
                            "display",
                            80,
                            0,
                            "easeInCubic",
                            "${zona_sensible_inCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid180",
                            "rotateZ",
                            0,
                            500,
                            "easeInCubic",
                            "${flecha_menu}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid186",
                            "display",
                            500,
                            0,
                            "easeInCubic",
                            "${zono_activa_overCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid184",
                            "display",
                            500,
                            0,
                            "easeInCubic",
                            "${zona_sensible_outCopy}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("vt1_edgeActions.js");
})("EDGE-169258127");
