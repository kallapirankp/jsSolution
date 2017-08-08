// Navigation for the application

var routes = {};

(function (rs, win) {

    function Router() {
        var self = this;
        var routes = [];
        var defaultResolve;

        self.when = registerRoute;
        self.otherwise = registerDefault;

        activate();

        function noop() {}

        function evaluateRoute(route, path) {
            return route.parts.some(function (i) {
                return path.indexOf(i) === 0;
            });
        }

        function parseRouteParams(route, path) {
            return path.substr(route.path.indexOf(':'));
        }

        function resolveRoute(path) {
            var resolve = defaultResolve,
                params;

            routes.forEach(function (route) {
                if(evaluateRoute(route, path)) {
                    resolve = route.resolve;
                    params = parseRouteParams(route, path);
                }
            });

            (resolve || noop)(params);
        }

        function onRoutingChange() {
            resolveRoute(window.location.hash.substr(1));
        }

        function activate() {
            win.addEventListener('hashchange', onRoutingChange);
        }

        function registerRoute(path, callback) {
            routes.push({
                path: path,
                resolve: callback,
                parts: path.split(':')
            });

            return self;
        }

        function registerDefault(callback) {
            defaultResolve = callback;
            onRoutingChange();
        }
    }

    rs.Router = Router;
})(routes, window);