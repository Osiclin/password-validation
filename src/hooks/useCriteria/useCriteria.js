import { useEffect, useState } from 'react';
import { useSelector } from "react-redux"

export default function useCriteria() {
  const { selectedCriterias } = useSelector(state => state.global)
  const [criterias, setCriteria] = useState({
    selectedCriterias: [],
    availableCriterias: [
      'At least 1 uppercase',
      'At least 1 lowercase',
      'At least 1 figure',
      'At least 1 special character - !@#$%^&*()',
      'At least 8 characters long'
    ]
  });

  const selectCriteria = (isSelected, criteria) => {
    setCriteria({
      ...criterias,
      selectedCriterias: isSelected ?
        [...criterias.selectedCriterias, criteria] :
        criterias.selectedCriterias.filter((item) => item !== criteria)
    })
  };

  useEffect(() => {
    if (selectedCriterias?.length) {
      setCriteria({
        ...criterias,
        selectedCriterias
      })
    }
  }, [])

  return { criterias, selectCriteria };
}
