"use strict";

module.exports = function(idGenerator) {

    /**
     * Gets the elq id of the element.
     * @public
     * @param {element} The element to get the id of.
     * @returns {string|number} The id of the element.
     */
    function getId(element) {
        return element.getAttribute("elq-id");
    }

    /**
     * Sets the elq id of the element.
     * @public
     * @param {element} The element to set the id to.
     * @param {string?} An optional id to set to the element. If not specified, an id will be generated. All id's must be unique.
     * @returns {string|number} The id of the element.
     */
    function setId(element, id) {
        if(!id && id !== 0) {
            //Number should be generated.
            id = idGenerator.generate();
        }

        element.setAttribute("elq-id", id);

        return id;
    }

    return {
        get: getId,
        set: setId
    };
};
