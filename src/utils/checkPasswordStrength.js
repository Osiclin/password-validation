import { defaultCriteria } from "../constants";

export const checkPasswordStrength = (password) => {
    const hasUpperCase = defaultCriteria["At least 1 uppercase"].test(password)
    const hasLowerCase = defaultCriteria["At least 1 lowercase"].test(password)
    const hasFigure = defaultCriteria["At least 1 figure"].test(password)
    const hasSpecialCharacter = defaultCriteria["At least 1 special character - !@#$%^&*()"].test(password)
    const hasRequiredLength = /^.{10,}$/.test(password)

    if (hasLowerCase && hasUpperCase && hasFigure && hasSpecialCharacter && hasRequiredLength) {
        return "Hard";
    } else if (hasLowerCase && hasUpperCase && hasSpecialCharacter) {
        return "Medium";
    } else {
        return "Weak";
    }
}