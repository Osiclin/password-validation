import { useEffect, useMemo, useState } from 'react';
import Button from './components/Button/Button';
import SettingsModal from './components/SettingsModal/SettingsModal';
import Input from './components/Input/Input';
import useInputValidate from './hooks/useInputValidate/useInputValidate';
import useCriteria from './hooks/useCriteria/useCriteria';

function App() {
  const { criterias, selectCriteria } = useCriteria()
  const { validateFormData } = useInputValidate({ selectedCriterias: criterias.selectedCriterias })
  const [showSettings, setShowSettings] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (!criterias.selectedCriterias.length) setShowSettings(true)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() })
  }

  const disabled = useMemo(() => {
    return validateFormData(formData) || !formData.password || !formData.email || !criterias.selectedCriterias.length
  }, [formData, criterias, validateFormData])

  return (
    <main>
      <div className='flex justify-end p-[24px]'>
        <Button
          name="Settings"
          theme="primary"
          onClick={() => setShowSettings(true)}
        />
      </div>
      {showSettings && <SettingsModal selectCriteria={selectCriteria} criterias={criterias} close={() => setShowSettings(false)} />}
      <div className='w-full'>
        <form data-testid="registration-form" className='max-w-[400px] mx-auto'>
          <h2 className="text-[24px] text-center font-semibold mb-[30px]">Registration form</h2>
          <Input
            id="email"
            name="email"
            type="text"
            label="Email"
            className='mb-[16px]'
            value={formData.email}
            disabled={!criterias.selectedCriterias.length}
            onChange={handleChange}
          />
          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            className='mb-[40px]'
            value={formData.password}
            disabled={!criterias.selectedCriterias.length}
            onChange={handleChange}
          />
          <Button
            name="Submit"
            theme="primary"
            type="button"
            className="w-full"
            disabled={disabled}
          />
        </form>
      </div>
    </main>
  );
}

export default App;
