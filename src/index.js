//Generator http://patorjk.com/software/taag/#p=display&h=1&f=Banner4&t=Sagess-COMPONENTS
// import './style';
import translation from 'sagess-core/translation';
import history from 'sagess-core/history';

const infos = require(`${__PACKAGE_JSON_PATH__}/package.json`);

import components from './components';
import behaviours from './behaviours';

/** LEGACY DIRTY HACKISH RUBBISH TRICK */
window.i18n = {
    t: translation.translate,
    init: translation.init
};
window.Backbone = {
    history
};

/**
* Display information data for Sagess-COMPONENTS
*/
const infosFn = function infos() {
    console.log(
        `
        SAGESS COMPONENTS

        version: ${infos.version}
        sagess-components: ${infos.homepage}
        documentation: ${infos.documentation}
        issues: ${infos.bugs.url}
        `
    );
};

export default {
    VERSION: infos.version,
    AUTHORS: infos.author,
    NAME: infos.name,

    /**
    * Display documentation data
    */
    DOCUMENTATION() {
        console.log('documentation: http://kleegroup.github.io/sagess-components');
        console.log('components available');
        console.table(infos.components);
        console.log(`repository: ${infos.repository.url}`);
        console.log(`issues: ${infos.bugs.url}`);
    },
    common: require('./common'),
    list: require('./list'),
    search: require('./search'),
    page: require('./page'),
    message: require('./message'),
    application: require('./application'),
    infos: infosFn,
    components,
    behaviours
};
