import {
    CompositeDecorator
} from 'draft-js'

export const decorator = new CompositeDecorator([{
    strategy: function(contentBlock, callback, contentState) {

        // 这个方法接收2个函数作为参数，如果第一个参数的函数执行时�返回true，就会执行第二个参数函数，同时会�将匹配的�字符的起始位置和结束位置传递给第二个参数。
        contentBlock.findEntityRanges(
            (character) => {
                const entityKey = character.getEntity();
                return (
                    entityKey !== null &&
                    contentState.getEntity(entityKey).getType() === 'LINK'
                );
            },
            function() {
                callback(...arguments);
            }

        );
    },
    component: Link
}]);

/**
 * Super simple decorators for handles and hashtags, for demonstration
 * purposes only. Don't reuse these regexes.
 */
const HANDLE_REGEX = /\@[\w]+/g;
const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;

function handleStrategy(contentBlock, callback, contentState) {
    findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

function hashtagStrategy(contentBlock, callback, contentState) {
    findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

function findWithRegex(regex, contentBlock, callback) {
    const text = contentBlock.getText();
    let matchArr, start;
    while ((matchArr = regex.exec(text)) !== null) {
        start = matchArr.index;
        callback(start, start + matchArr[0].length);
    }
}
const HandleSpan = (props) => {
    return (
        <span
            style={styles.handle}
            data-offset-key={props.offsetKey}
            >
            {props.children}
        </span>
    );
};
const HashtagSpan = (props) => {
    return (
        <span
            style={styles.hashtag}
            data-offset-key={props.offsetKey}
            >
            {props.children}
        </span>
    );
};

const styles = {
    root: {
        fontFamily: '\'Helvetica\', sans-serif',
        padding: 20,
        width: 600,
    },
    editor: {
        border: '1px solid #ddd',
        cursor: 'text',
        fontSize: 16,
        minHeight: 40,
        padding: 10,
    },
    button: {
        marginTop: 10,
        textAlign: 'center',
    },
    handle: {
        color: 'rgba(98, 177, 254, 1.0)',
        direction: 'ltr',
        unicodeBidi: 'bidi-override',
    },
    hashtag: {
        color: 'rgba(95, 184, 138, 1.0)',
    },
};