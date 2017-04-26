module.exports = {
    build_dir: 'build',
    compile_dir: 'www',
    docs_dir: 'docs',

    files: {
        scripts: [
            'src/**/*.module.js',
            'src/**/*.js',
			'src/**/*.json'
        ],
        jsDocScripts: [
            'src'
        ],
        jsunit: [ 'tests/**/*.tests.js' ],
        styles: [ './src/**/*.css', './src/**/*.scss' ],
        images: './images/**/*',
        index: './src/index.html',
        templates: ['./src/**/*.tpl.html'],
        sass: ['src/sass/app.scss']
    },

    node_modules: {
        scripts: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/lodash/lodash.min.js',            
			'node_modules/bootstrap/dist/js/bootstrap.min.js',
			'node_modules/jquery.scrollto/jquery.scrollto.js',
			'node_modules/smooth-scroll/dist/js/smooth-scroll.min.js',
			'node_modules/moment/min/moment.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-sanitize/angular-sanitize.min.js',
            'node_modules/angular-animate/angular-animate.min.js',			
            'node_modules/angular-ui-router/release/angular-ui-router.min.js',
            'node_modules/angular-messages/angular-messages.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            'node_modules/angulartics/dist/angulartics.min.js',
            'node_modules/angulartics-google-analytics/dist/angulartics-google-analytics.min.js',
            'node_modules/angular-scroll/angular-scroll.min.js',
            'node_modules/angular-base64/angular-base64.min.js',
            'node_modules/angular-recaptcha/release/angular-recaptcha.min.js',
            'node_modules/angular-local-storage/dist/angular-local-storage.min.js',
            'node_modules/angular-cookies/angular-cookies.min.js',
            'node_modules/angular-touch/angular-touch.min.js',
            'node_modules/angular-carousel/dist/angular-carousel.min.js',
            'node_modules/angularjs-slider/dist/rzslider.min.js',
            'node_modules/jquery-zoom/jquery.zoom.min.js',
            'node_modules/EasyZoom/dist/easyzoom.js',
            'node_modules/ez-plus/src/jquery.ez-plus.js',
			'node_modules/ngmap/build/scripts/ng-map.min.js',
			'node_modules/croppie/croppie.js',
			'node_modules/angular-wizard/dist/angular-wizard.min.js',			
			'node_modules/angular-moment/angular-moment.js',
			'node_modules/angular-moment/locales.min.js',
			'node_modules/humanize-duration/humanize-duration.js',
			'node_modules/angular-timer/dist/angular-timer.min.js',
			'node_modules/angular-aria/angular-aria.js',
			'node_modules/angular-messages/angular-messages.min.js',
			'node_modules/angular-mocks/angular-mocks.js',			
			'node_modules/angular-material/angular-material.js',
			'node_modules/angular-countries/dist/js/ngCountries.js',
			'node_modules/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
			'node_modules/mdPickers/dist/mdPickers.min.js'
			
			
        ],
        styles: [
            'node_modules/angular-carousel/dist/angular-carousel.min.css',
            'node_modules/angularjs-slider/dist/rzslider.min.css',
            'node_modules/EasyZoom/css/easyzoom.css',
			'node_modules/croppie/croppie.css',
			'node_modules/angular-wizard/dist/angular-wizard.min.css',
			'node_modules/world-flags-sprite/stylesheets/flags32.css',
			'node_modules/angular-material/angular-material.css',
			'node_modules/mdPickers/dist/mdPickers.min.css'
			
        ],
        js_map: [
            'node_modules/angular/angular.min.js.map'
        ],
        bootstrap_assets: 'node_modules/bootstrap-sass/assets/fonts',
        font_awesome_assets: 'node_modules/font-awesome/fonts'
    }
};


