import { component as ContentBar } from 'sagess-components/application/content-bar';

const ContentBarExample = React.createClass({
    render() {
        return (
            <ContentBar>
                <img src='http://lorempixel.com/400/200' />
                <img src='http://lorempixel.com/400/200' />
                <img src='http://lorempixel.com/400/200' />
                <img src='http://lorempixel.com/400/200' />
                <img src='http://lorempixel.com/400/200' />
                <img src='http://lorempixel.com/400/200' />
            </ContentBar>
        );
    }
});

return <ContentBarExample />;
