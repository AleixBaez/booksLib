const { NIL } = require('uuid');
const ISO6391 = require('iso-639-1');
const utility = require('./utility');

class Edition {
    static sqlTableDef() {
        return 'edition (id varchar(36), '+
        'title varchar(255), author varchar(255), editor varchar(255), '+
        'indexed_reference varchar(128), language varchar(3), support varchar(3), '+
        'publication_date date, first_publication_date date);';
    }

    constructor(
        title = null,
        author = null,
        editor = null,
        indexedReference = null,
        language = null,
        support = null,
        publicationDate = null,
        firstPublicationDate = null,
    ) {
        this.title = utility.capitalizeWords(title, true);
        this.author = utility.capitalizeWords(author, true);
        (this.editor = utility.capitalizeWords(editor)), true;
        if (ISO6391.validate(language)) {
            this.language = language;
        } else {
            this.language = null;
        }
        this.support = support;
        this.publicationDate = publicationDate;
        this.firstPublicationDate = firstPublicationDate;
    }

    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getEditor() {
        return this.editor;
    }
    getIndexedRefernce() {
        return this.indexedReference;
    }
    getLanguage() {
        return this.language;
    }
    getSupport() {
        return this.support;
    }
    getPublicationDate() {
        return this.publicationDate;
    }
    getFirstPublicationDate() {
        return this.firstPublicationDate;
    }
}

/*id varchar(16), title varchar(255), author varchar(16),\
             editor varchar(255), reference varchar(32), reference_type varchar(1), publish_date date, \
             first_publication_date date, support varchar(1) */

module.exports = Edition;
