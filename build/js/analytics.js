var Analytics = (function (window, document, undefined) {
    'use strict';
	
    /**
     * Initialize the Module.
     *
     * @return {void}
     * @public
     */
    var initialize = function () {
        _trackLinksAndButtons();
        _trackOutboundLinks();
    };

    /**
     * Track on-page links & Buttons.
     *
     * @return {void}
     * @private
     */
    var _trackLinksAndButtons = function () {
        var elementIDsToTrack = [
            {
                ID: 'getInTouch',
                eventData: {
                    'eventCategory': 'Header',
                    'eventAction': 'Click',
                    'eventLabel': 'Get In Touch CTA'
                }
            },
            {
                ID: 'headerGitHub',
                eventData: {
                    'eventCategory': 'Social',
                    'eventAction': 'Click',
                    'eventLabel': 'Header - GitHub'
                }
            },
            {
                ID: 'headerStackoverflow',
                eventData: {
                    'eventCategory': 'Social',
                    'eventAction': 'Click',
                    'eventLabel': 'Header - Stackoverflow'
                }
            },
            {
                ID: 'headerFacebook',
                eventData: {
                    'eventCategory': 'Social',
                    'eventAction': 'Click',
                    'eventLabel': 'Header - Facebook'
                }
            },
            {
                ID: 'headerTwitter',
                eventData: {
                    'eventCategory': 'Social',
                    'eventAction': 'Click',
                    'eventLabel': 'Header - Twitter'
                }
            },
            {
                ID: 'headerGooglePlus',
                eventData: {
                    'eventCategory': 'Social',
                    'eventAction': 'Click',
                    'eventLabel': 'Header - Google+'
                }
            },
            {
                ID: 'headerLinkedIn',
                eventData: {
                    'eventCategory': 'Social',
                    'eventAction': 'Click',
                    'eventLabel': 'Header - LinkedIn'
                }
            }
        ];

        for (var i = 0, nbElements = elementIDsToTrack.length; i < nbElements; i++) {
            var elementToTrack = elementIDsToTrack[i];

            var element = document.getElementById(elementToTrack.ID);
            if (element) {
                element.addEventListener('click', function (event) {
                    ga('send', 'event', elementToTrack.eventData);
                });
            }
        }
    };

    /**
     * Track outbound link clicks.
     *
     * @return {void}
     * @private
     */
    var _trackOutboundLinks = function () {
        /*var outboundLinks = $('.js-ga-outbound-link');
        if (outboundLinks.length > 0) {
            $('.js-ga-outbound-link').on('click', function (event) {
                if (!ga.q) {
                    event.preventDefault();
                    
                    var destinationLink = $(this).attr('href');
                    ga('send', 'event', 'Outbound Link', 'Click', destinationLink, {
                        'hitCallback': function () {
                            window.location = destinationLink;
                        }
                    });
                }
            });
        }*/

        var outboundLinks = document.getElementsByClassName('js-ga-outbound-link');
        for (var i = 0, nbOutboundLinks = outboundLinks.length; i < nbOutboundLinks; i++) {
            var outboundLink = outboundLinks[i];

            outboundLink.addEventListener('click', function (event) {
                if (!ga.q) {
                    if (event.preventDefault) {
                        event.preventDefault();
                    } else {
                        event.returnValue = false;
                    }

                    var destinationLink = this.href;
                    ga('send', 'event', 'Outbound Link', 'Click', destinationLink, {
                        'hitCallback': function () {
                            window.location = destinationLink;
                        }
                    });
                }
            });
        }
    };


    return {
        initialize: initialize
    };
})(window, document);
