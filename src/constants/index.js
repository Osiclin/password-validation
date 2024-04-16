export const REGEX_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i
export const REGEX_PASSWORD_LENGTH = /^.{8,}$/
export const REGEX_PASSWORD = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+={[}\]|\\:;"'<,>.?/`~-]*$/i // must contain alphanumeric and optional special characters
export const REGEX_NUMBERS = /[0-9]/
export const REGEX_UPPERCASE = /[A-Z]/
export const REGEX_LOWERCASE = /[a-z]/
export const REGEX_NUMBER = /\d/
export const REGEX_SPECIAL_CHARACTER = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/

export const defaultCriteria = {
    "At least 1 uppercase": REGEX_UPPERCASE,
    "At least 1 lowercase": REGEX_LOWERCASE,
    "At least 1 figure": REGEX_NUMBER,
    "At least 1 special character - !@#$%^&*()": REGEX_SPECIAL_CHARACTER,
    "At least 8 characters long": REGEX_PASSWORD_LENGTH
};