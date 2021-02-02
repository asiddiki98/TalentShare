const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
    let errors = {};

    data.description = validText(data.description) ? data.description : '';
    data.category = validText(data.category) ? data.category : '';


    if(!Validator.isLength(data.description, {min: 3, max: 100})){
        errors.description = "Description needs to be between 2 & 100 characters"
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = 'Description field is required';
    }

    if (!Validator.equals(data.category, "Dance") && !Validator.equals(data.category, "Art") 
        && !Validator.equals(data.category, "Music") && !Validator.equals(data.category, "Photography")) {
        errors.category = 'Category field must be dance, art, music, or photography';
    }

    if(Validator.isEmpty(data.category)){
        errors.category = 'Category fieldis required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};