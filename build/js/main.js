//if (typeof Analytics !== 'undefined' && typeof Analytics.initialize === 'function') {
//    // Initialize Analytics Module:
//    Analytics.initialize();
//}


//jQuery(document).ready(function ($) {

    /**
     * Skillset
     */
    /*$('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function () {
        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });*/
    

    /**
     * Bootstrap Tooltip for Skillset
     */
    /*if (typeof $.fn.tooltip !== 'undefined') {
        $('.level-label').tooltip();
    }*/
    

    /**
     * jQuery RSS - https://github.com/sdepold/jquery-rss
     */
    /*if (typeof $.fn.rss !== 'undefined') {
        $("#rss-feeds").rss(
            // Change this to your own rss feeds
            "http://feeds.feedburner.com/TechCrunch/startups",
            {
            // how many entries do you want?
            // default: 4
            // valid values: any integer
            limit: 3,
            
            // the effect, which is used to let the entries appear
            // default: 'show'
            // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
            effect: 'slideFastSynced',
            
            // outer template for the html transformation
            // default: "<ul>{entries}</ul>"
            // valid values: any string
            layoutTemplate: "<div class='item'>{entries}</div>",
            
            // inner template for each entry
            // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
            // valid values: any string
            entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
            
            }
        );
    }*/
    

    /**
     * Github Activity Feed - https://github.com/caseyscarborough/github-activity
     */
    /*if (typeof GitHubActivity !== 'undefined') {
        GitHubActivity.feed({
            username: 'caseyscarborough',
            selector: '#ghfeed'
        });
    }*/


    /**
     * Lazy-load images.
     */
    /*var imagesToLoad = $('.img-lazy-load');
    if (imagesToLoad.length > 0) {
        for (var i = 0, nbImagesToLoad = imagesToLoad.length; i < nbImagesToLoad; i++) {
            var imageToLoad = $(imagesToLoad[i]);
            var imageSrc = imageToLoad.data('src');
            imageToLoad.attr('src', imageSrc);
        }
    }*/


    /**
     * Track outbound links.
     */
    /*
    var outboundLinks = $('.js-ga-outbound-link');
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
//});
