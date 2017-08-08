window.onload = function() {
    var dispPage = displayPage;
    var router = new routes.Router();


    dispPage.addPage('headerContent1', 'footerContent1');
    dispPage.addPage('headerContent1', 'footerContent1', 'bodyContent1');
    dispPage.addPage('headerContent1', 'footerContent2', 'bodyContent2');
    dispPage.addPage('headerContent2', 'footerContent1', 'bodyContent3', 'advertisement1');

    var pages = dispPage.Pages;

    router.
        when('/page/:pageId', function(params) {
            dispPage.renderPage(pages[params]);
        }).
        otherwise(function() {
            dispPage.renderPage(pages[0]);
        });
}; 