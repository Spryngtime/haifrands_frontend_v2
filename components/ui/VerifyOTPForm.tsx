import React from 'react';
import { useStytch } from '@stytch/nextjs';
import { Form, Modal } from 'antd';

// Handles auto-tabbing to next passcode digit input.
// Logic inspired from https://stackoverflow.com/questions/15595652/focus-next-input-once-reaching-maxlength-value.
const autoTab = (target: HTMLInputElement, key?: string) => {
    if (target.value.length >= target.maxLength) {
        let next = target;
        while ((next = next.nextElementSibling as HTMLInputElement)) {
            if (next == null) break;
            if (next.tagName.toLowerCase() === 'input') {
                next?.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (target.value.length === 0) {
        let previous = target;
        while ((previous = previous.previousElementSibling as HTMLInputElement)) {
            if (previous == null) break;
            if (previous.tagName.toLowerCase() === 'input') {
                previous.focus();
                break;
            }
        }
    }
};

type Props = {
    methodId: string;
    phoneNumber: string;
    closeOnSuccess: Function | null;
};

const VerifyOTPForm = (props: Props) => {
    const { methodId, phoneNumber, closeOnSuccess } = props;
    const [isDisabled, setIsDisabled] = React.useState(true);
    const [currentMethodId, setCurrentMethodId] = React.useState(methodId);
    const [isError, setIsError] = React.useState(false);
    const stytchClient = useStytch();

    const strippedNumber = phoneNumber.replace(/\D/g, '');
    const parsedPhoneNumber = `(${strippedNumber.slice(0, 3)}) ${strippedNumber.slice(3, 6)}-${strippedNumber.slice(
        6,
        10,
    )}`;

    const isValidPasscode = () => {
        const regex = /^[0-9]$/g;
        const inputs = document.getElementsByClassName('OTPInput');
        for (let i = 0; i < inputs.length; i++) {
            if (!(inputs[i] as HTMLInputElement).value.match(regex)) {
                return false;
            }
        }
        return true;
    };

    const onPasscodeDigitChange = () => {
        if (isValidPasscode()) {
            setIsDisabled(false);
            setIsError(false);
        } else {
            setIsDisabled(true);
        }
    };

    const resetPasscode = () => {
        const inputs = document.getElementsByClassName('OTPInput');
        for (let i = 0; i < inputs.length; i++) {
            (inputs[i] as HTMLInputElement).value = '';
        }
        document.getElementById('digit-0')?.focus();
        setIsDisabled(true);
    };

    const resendCode = async () => {
        const { method_id } = await stytchClient.otps.sms.loginOrCreate('+1' + phoneNumber);
        setCurrentMethodId(method_id);
        resetPasscode();
        setIsError(false);
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isValidPasscode()) {

            let otpInput = '';
            const inputs = document.getElementsByClassName('OTPInput');
            for (let i = 0; i < inputs.length; i++) {
                otpInput += (inputs[i] as HTMLInputElement).value;
            }

            try {
                let success = await stytchClient.otps.authenticate(otpInput, methodId, { session_duration_minutes: 525000 });
                console.log("SUCCESS!")
                console.log(success)
                if (closeOnSuccess){
                    closeOnSuccess();
                }
            } catch {
                setIsError(true);
                resetPasscode();
            }
        }
    };

    const renderPasscodeInputs = () => {
        const inputs = [];
        for (let i = 0; i < 6; i += 1) {
            inputs.push(
                <input
                    autoFocus={i === 0}
                    className="OTPInput"
                    id={`digit-${i}`}
                    key={i}
                    maxLength={1}
                    onChange={onPasscodeDigitChange}
                    onKeyUp={(e) => autoTab(e.target as HTMLInputElement, e.key)}
                    placeholder="0"
                    size={1}
                    type="text"
                    style={styles.passcodeInput}
                />,
            );
        }
        return inputs;
    };

    return (
        <div>
            <h2>Enter passcode</h2>
            <p>
                A 6-digit passcode was sent to you at <strong>{parsedPhoneNumber}</strong>.
            </p>
            <form onSubmit={onSubmit}>
                <p style={styles.error}>{isError ? 'Invalid code. Please try again.' : ''}</p>
                <div style={styles.passcodeInputContainer}>{renderPasscodeInputs()}</div>
                <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 full-width" id="button" type="submit">
                    Continue
                </button>
                <button className="btn text-white bg-gray-300 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" onClick={resendCode} type="button">
                    Resend code
                </button>
            </form>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    passcodeInput: {
        borderRadius: '3px',
        fontSize: '20px',
        width: '48px',
        height: '45px',
        textAlign: 'center',
    },
    error: {
        color: 'red',
        fontSize: '14px',
        height: '20px',
        lineHeight: '20px',
    },
    passcodeInputContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '24px',
    },
    resendCodeContainer: {
        margin: '24px 0px',
    },
};

export default VerifyOTPForm;