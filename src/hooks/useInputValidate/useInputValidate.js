import { useCallback, useState } from 'react';
import { useSelector } from "react-redux"
import { defaultCriteria, REGEX_EMAIL } from '../../constants';

export default function useInputValidate() {
  const [error, setError] = useState('');
  const { selectedCriterias } = useSelector(state => state.global)

  const checkPassword = useCallback(({ value }) => {
    const validateArray = (arr, obj) => {
      let result = []
      for (let i = 0; i < arr?.length; i++) {
        const element = arr[i];
        const regex = obj[element];
        if (regex) {
          if (!regex?.test(value)) {
            setError(`Password must contain ${element?.toLowerCase()}`);
            result.push(false);
            break; // Stop the loop if validation fails
          } else {
            //setError('');
            result.push(true);
          }
        }
      }

      return !result.includes(false)
    };
    
    return validateArray(selectedCriterias, defaultCriteria)
  }, [selectedCriterias])

  const checkEmail = useCallback(({ value }) => {
    if (!REGEX_EMAIL?.test(value)) {
      setError('Please enter a valid email.');
      return false;
    }

    setError('');
    return true;
  }, [])

  const validate = useCallback(({ name, value }) => {
    switch (name) {
      case 'password':
        return checkPassword({ value });
      case 'email':
        return checkEmail({ value });
      default:
        setError('');
        return true;
    }
  }, [checkPassword, checkEmail])

  const validateFormData = useCallback((formData) => {
    let output = []
    Object.entries(formData).forEach((entry) => {
      const [key, value] = entry;
      const inputStatus = validate({ name: key, value })
      output.push(inputStatus)
    })

    return output.includes(false)
  }, [validate])

  return {
    error,
    setError,
    validate,
    validateFormData
  };
}
