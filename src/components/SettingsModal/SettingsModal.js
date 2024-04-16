import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import { useDispatch } from "react-redux"
import { updateSettings } from "../../store/modules/global";

export default function SettingsModal({ close, selectCriteria, criterias }) {
    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault()
        dispatch(updateSettings(criterias.selectedCriterias))
        if (close) close()
    }

    return (
        <div className="overlay">
            <div className="modal modal-center w-full bg-[#1D3045] h-screen">
                <form data-testid="settings-modal" className="max-w-[90%] sm:max-w-[695px] mx-auto bg-[#ffffff] rounded-[6px] p-[24px] mt-[100px]" onSubmit={submit}>
                    <h2 className="text-[24px] text-center font-semibold mb-[30px]">Settings</h2>
                    <div className="grid grid-cols-2 mb-[40px]">
                        {criterias.availableCriterias.map(item =>
                            <Checkbox
                                key={item}
                                label={item}
                                id={item}
                                checked={criterias.selectedCriterias.includes(item)}
                                className="text-[14px] font-normal mb-[16px]"
                                onChange={(e) => selectCriteria(e, item)}
                            />
                        )}
                    </div>
                    <div className="flex justify-end">
                        <Button
                            name="Close"
                            type="button"
                            className="mr-[16px] w-[150px]"
                            onClick={close}
                        />
                        <Button
                            name="Apply"
                            theme="primary"
                            className="w-[150px]"
                            disabled={!criterias.selectedCriterias.length}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}